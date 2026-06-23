import { MenuItem, QueueTarget } from './generated/prisma-paid';
import { prisma } from './db';

// Rule-based Recommendation Mapping
// If ordered key item, recommend these targets
const RULE_BASED_RECOMMENDATIONS: Record<string, string[]> = {
  // Coffee/Tea -> Breakfast/Bakes/Dessert
  'Ceremonial Matcha Latte': ['Saffron Pistachio Croffle', 'Tiramisu De Niva'],
  'Signature Niva Rose Latte': ['Saffron Pistachio Croffle', 'Tiramisu De Niva'],
  'Cortado': ['Truffle Scrambled Eggs', 'Smashed Avocado Toast'],
  'Earthy Drip Coffee': ['Smashed Avocado Toast', 'Saffron Pistachio Croffle'],
  // Cocktails -> Savoury Bakes/Prawns/Flatbread
  'Smoked Rosemary Whiskey Sour': ['Smoked Garlic Butter Prawns', 'Artisanal Wild Mushroom Flatbread'],
  'Elderflower Cucumber Spritz': ['Burrata & Heirloom Tomato Salad', 'Artisanal Wild Mushroom Flatbread'],
  'Hibiscus Mezcal Paloma': ['Smoked Garlic Butter Prawns', 'Artisanal Wild Mushroom Flatbread'],
};

/**
 * AI Recommendation Engine
 */
export async function getRecommendationsForCustomer(mobile: string): Promise<MenuItem[]> {
  try {
    // 1. Fetch customer and their order history
    const customer = await prisma.customer.findUnique({
      where: { mobile },
      include: {
        orders: {
          orderBy: { createdAt: 'desc' },
          include: {
        items: {
          include: {
                menuItem: {
                  include: {
                    category: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!customer || customer.orders.length === 0) {
      // If customer is new or has no orders, recommend overall best-sellers (Specials and top rated)
      return await getBestSellers();
    }

    // Extract all items ordered by this customer and build a taste profile.
    const orderedItemNames = new Set<string>();
    const orderedItemIds = new Set<string>();
    const orderCountMap: Record<string, number> = {};
    const categoryScore: Record<string, number> = {};
    const queueScore: Record<QueueTarget, number> = { KITCHEN: 0, BAR: 0 };
    let vegScore = 0;
    let nonVegScore = 0;
    const lastOrderItemIds = customer.orders[0]?.items.map((item) => item.menuItemId) || [];

    customer.orders.forEach((order, orderIndex) => {
      const recencyBoost = Math.max(1, 5 - orderIndex);
      order.items.forEach((item) => {
        orderedItemNames.add(item.menuItem.name);
        orderedItemIds.add(item.menuItemId);
        orderCountMap[item.menuItemId] = (orderCountMap[item.menuItemId] || 0) + item.quantity * recencyBoost;
        categoryScore[item.menuItem.categoryId] = (categoryScore[item.menuItem.categoryId] || 0) + item.quantity * recencyBoost;
        queueScore[item.menuItem.targetQueue] += item.quantity * recencyBoost;
        if (item.menuItem.isVeg) vegScore += item.quantity * recencyBoost;
        else nonVegScore += item.quantity * recencyBoost;
      });
    });

    const scoreMap = new Map<string, { item: MenuItem; score: number; reason: string }>();
    const addScore = (item: MenuItem, score: number, reason: string) => {
      if (!item.isAvailable) return;
      const current = scoreMap.get(item.id);
      if (current) {
        current.score += score;
        current.reason = `${current.reason}, ${reason}`;
      } else {
        scoreMap.set(item.id, { item, score, reason });
      }
    };

    // --- STRATEGY 1: Last Visit Reorder ---
    // Returning guests should immediately see the items they had most recently.
    if (lastOrderItemIds.length > 0) {
      const lastVisitItems = await prisma.menuItem.findMany({
        where: {
          id: { in: lastOrderItemIds },
          isAvailable: true,
        },
      });
      lastVisitItems.forEach((item) => addScore(item, 120, 'ordered last visit'));
    }

    // --- STRATEGY 2: Rule-Based Recommendations ---
    const ruleRecommendedNames: string[] = [];
    orderedItemNames.forEach((name) => {
      if (RULE_BASED_RECOMMENDATIONS[name]) {
        ruleRecommendedNames.push(...RULE_BASED_RECOMMENDATIONS[name]);
      }
    });

    if (ruleRecommendedNames.length > 0) {
      const ruleItems = await prisma.menuItem.findMany({
        where: {
          name: { in: ruleRecommendedNames },
          isAvailable: true,
        },
      });
      ruleItems.forEach((item) => addScore(item, 75, 'pairs well with previous orders'));
    }

    // --- STRATEGY 3: Taste Profile Matching ---
    // Score all available items by the guest's preferred categories, food/drink split,
    // veg/non-veg tendency, and whether they have ordered the item frequently.
    const availableItems = await prisma.menuItem.findMany({
      where: { isAvailable: true },
      include: { category: true },
    });

    const prefersVeg = vegScore > nonVegScore * 1.3;
    availableItems.forEach((item) => {
      const categoryAffinity = categoryScore[item.categoryId] || 0;
      const queueAffinity = queueScore[item.targetQueue] || 0;
      const favoriteAffinity = orderCountMap[item.id] || 0;
      let score = categoryAffinity * 8 + queueAffinity * 2 + favoriteAffinity * 12;

      if (prefersVeg && item.isVeg) score += 18;
      if (!prefersVeg && !item.isVeg && nonVegScore > 0) score += 12;
      if (!orderedItemIds.has(item.id) && categoryAffinity > 0) score += 10;

      if (score > 0) {
        addScore(
          item,
          score,
          orderedItemIds.has(item.id) ? 'customer favorite' : `matches ${item.category?.name || 'taste'} preference`
        );
      }
    });

    // --- STRATEGY 4: Collaborative Filtering (Item Co-occurrence) ---
    // Look at other customers' orders that contain the items this customer has ordered.
    // What other items did they order?
    if (orderedItemIds.size > 0) {
      const targetItemIds = Array.from(orderedItemIds);

      // Find other orders containing these items
      const relatedOrders = await prisma.order.findMany({
        where: {
          customerId: { not: customer.id }, // from other customers
          items: {
            some: {
              menuItemId: { in: targetItemIds },
            },
          },
        },
        include: {
          items: {
            include: {
                menuItem: true,
            },
          },
        },
      });

      // Count co-occurrence of other items
      const coOccurrenceMap: Record<string, { count: number; item: MenuItem }> = {};
      relatedOrders.forEach((order) => {
        // Does it contain one of our items? Yes, because of the query.
        order.items.forEach((item) => {
          // If this is an item the customer has NOT ordered yet
          if (!orderedItemIds.has(item.menuItemId)) {
            if (!coOccurrenceMap[item.menuItemId]) {
              coOccurrenceMap[item.menuItemId] = { count: 0, item: item.menuItem };
            }
            coOccurrenceMap[item.menuItemId].count += item.quantity;
          }
        });
      });

      // Sort by co-occurrence count
      const sortedCoOccurrences = Object.values(coOccurrenceMap).sort((a, b) => b.count - a.count);

      sortedCoOccurrences.slice(0, 5).forEach((entry) => {
        addScore(entry.item, entry.count * 28, 'liked by similar guests');
      });
    }

    // --- STRATEGY 5: Your Favorites / Frequently Ordered ---
    // Find items the user ordered the most
    const sortedUserOrderHistory = Object.entries(orderCountMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2);

    if (sortedUserOrderHistory.length > 0) {
      const favoriteItemIds = sortedUserOrderHistory.map(([id]) => id);
      const favoriteItems = await prisma.menuItem.findMany({
        where: {
          id: { in: favoriteItemIds },
          isAvailable: true,
        },
      });
      favoriteItems.forEach((fav) => addScore(fav, 90, 'frequently ordered by this guest'));
    }

    const rankedRecommendations = Array.from(scoreMap.values())
      .sort((a, b) => b.score - a.score)
      .map((entry) => entry.item);

    // If we have less than 4 recommendations, pad with best-sellers
    if (rankedRecommendations.length < 4) {
      const bestSellers = await getBestSellers();
      bestSellers.forEach((item) => {
        if (
          rankedRecommendations.length < 4 &&
          !rankedRecommendations.some((r) => r.id === item.id)
        ) {
          rankedRecommendations.push(item);
        }
      });
    }

    return rankedRecommendations.slice(0, 5); // Return top 5 recommendations
  } catch (error) {
    console.error('Error calculating recommendations:', error);
    return getBestSellers(); // Fallback
  }
}

/**
 * Fallback to best sellers (Signature/Specials)
 */
export async function getBestSellers(): Promise<MenuItem[]> {
  try {
    return await prisma.menuItem.findMany({
      where: {
        isAvailable: true,
        category: {
          name: { in: ['Specials', 'Food & Bakes'] },
        },
      },
      take: 4,
    });
  } catch {
    // If table categories don't exist yet
    return prisma.menuItem.findMany({
      where: { isAvailable: true },
      take: 4,
    });
  }
}
