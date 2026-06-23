import { PrismaClient, QueueTarget } from '../src/generated/prisma-paid';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create Default Admin
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.adminUser.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: adminPassword,
      name: 'Niva Manager',
      role: 'ADMIN',
    },
  });
  console.log('Admin user seeded:', admin.username);

  // Create Categories
  const categoriesData = [
    { name: 'Specials', icon: 'Sparkles', sortOrder: 1 },
    { name: 'Breakfast', icon: 'Croissant', sortOrder: 2 },
    { name: 'Food & Bakes', icon: 'UtensilsCrossed', sortOrder: 3 },
    { name: 'Beverages', icon: 'Coffee', sortOrder: 4 },
    { name: 'Cocktails', icon: 'GlassWater', sortOrder: 5 },
    { name: 'Desserts', icon: 'Cake', sortOrder: 6 },
    { name: 'Events @ Cafe', icon: 'CalendarDays', sortOrder: 7 },
  ];

  const categoriesMap: Record<string, string> = {};

  for (const cat of categoriesData) {
    const dbCat = await prisma.menuCategory.upsert({
      where: { name: cat.name },
      update: { icon: cat.icon, sortOrder: cat.sortOrder },
      create: cat,
    });
    categoriesMap[dbCat.name] = dbCat.id;
  }
  console.log('Categories seeded.');

  // Create Menu Items
  const menuItems = [
    // Specials
    {
      name: 'Signature Niva Rose Latte',
      description: 'Earthy espresso infused with organic rose water, condensed milk, topped with dried rose petals.',
      price: 650,
      isVeg: true,
      imageUrl: '/images/rose-latte.jpg',
      category: 'Specials',
      targetQueue: QueueTarget.BAR,
      addOns: [
        { name: 'Extra Espresso Shot', price: 100 },
        { name: 'Oat Milk', price: 80 },
        { name: 'Iced Version', price: 50 }
      ]
    },
    {
      name: 'Saffron Pistachio Croffle',
      description: 'Buttery croissant pressed into a waffle, glazed with saffron syrup and crushed wild Iranian pistachios.',
      price: 850,
      isVeg: true,
      imageUrl: '/images/croffle.jpg',
      category: 'Specials',
      targetQueue: QueueTarget.KITCHEN,
      addOns: [
        { name: 'Vanilla Bean Ice Cream', price: 200 },
        { name: 'Extra Saffron Glaze', price: 100 }
      ]
    },
    {
      name: 'Niva Style Mezze Platter',
      description: 'Hummus, labneh, pickled vegetables, olives, warm pita, and spiced seed crackers for sharing.',
      price: 1700,
      isVeg: true,
      imageUrl: '/images/mezze.jpg',
      category: 'Specials',
      targetQueue: QueueTarget.KITCHEN,
      addOns: [
        { name: 'Extra Pita', price: 200 },
        { name: 'Add Feta', price: 250 }
      ]
    },

    // Breakfast
    {
      name: 'Truffle Scrambled Eggs',
      description: 'Slow-cooked organic eggs, black truffle paste, chives, served on toasted sourdough.',
      price: 1400,
      isVeg: true,
      imageUrl: '/images/truffle-eggs.jpg',
      category: 'Breakfast',
      targetQueue: QueueTarget.KITCHEN,
      addOns: [
        { name: 'Avocado Mash', price: 300 },
        { name: 'Smoked Salmon', price: 500 }
      ]
    },
    {
      name: 'Smashed Avocado Toast',
      description: 'Fresh Haas avocados, heirloom cherry tomatoes, crumbled feta, pumpkin seeds on multiseed sourdough.',
      price: 1200,
      isVeg: true,
      imageUrl: '/images/avo-toast.jpg',
      category: 'Breakfast',
      targetQueue: QueueTarget.KITCHEN,
      addOns: [
        { name: 'Poached Egg', price: 150 },
        { name: 'Gluten-Free Bread', price: 100 }
      ]
    },
    {
      name: 'Turkish Eggs with Chilli Butter',
      description: 'Poached eggs over garlic yoghurt, aleppo chilli butter, dill, and toasted sourdough.',
      price: 1350,
      isVeg: true,
      imageUrl: '/images/turkish-eggs.jpg',
      category: 'Breakfast',
      targetQueue: QueueTarget.KITCHEN,
      addOns: [
        { name: 'Extra Sourdough', price: 150 }
      ]
    },
    {
      name: 'Banana Walnut French Toast',
      description: 'Brioche French toast with caramelized banana, toasted walnuts, maple cream, and cinnamon dust.',
      price: 1250,
      isVeg: true,
      imageUrl: '/images/french-toast.jpg',
      category: 'Breakfast',
      targetQueue: QueueTarget.KITCHEN,
      addOns: [
        { name: 'Vanilla Ice Cream', price: 200 }
      ]
    },

    // Food & Bakes
    {
      name: 'Burrata & Heirloom Tomato Salad',
      description: 'Creamy Italian burrata, heirloom tomatoes, fresh basil pesto, balsamic reduction, toasted pine nuts.',
      price: 1600,
      isVeg: true,
      imageUrl: '/images/burrata.jpg',
      category: 'Food & Bakes',
      targetQueue: QueueTarget.KITCHEN,
      addOns: []
    },
    {
      name: 'Artisanal Wild Mushroom Flatbread',
      description: 'Roasted shiitake, oyster & cremini mushrooms, caramelized onions, mozzarella, white truffle oil.',
      price: 1500,
      isVeg: true,
      imageUrl: '/images/flatbread.jpg',
      category: 'Food & Bakes',
      targetQueue: QueueTarget.KITCHEN,
      addOns: [
        { name: 'Gluten-Free Base', price: 200 },
        { name: 'Extra Mozzarella', price: 150 }
      ]
    },
    {
      name: 'Smoked Garlic Butter Prawns',
      description: 'Pan-seared tiger prawns, smoked garlic butter, white wine reduction, served with grilled baguette.',
      price: 1850,
      isVeg: false,
      imageUrl: '/images/prawns.jpg',
      category: 'Food & Bakes',
      targetQueue: QueueTarget.KITCHEN,
      addOns: [
        { name: 'Extra Bread', price: 150 }
      ]
    },
    {
      name: 'Peri Peri Chicken Skewers',
      description: 'Chargrilled chicken skewers with smoky peri peri glaze, herb salad, and lemon aioli.',
      price: 1650,
      isVeg: false,
      imageUrl: '/images/chicken-skewers.jpg',
      category: 'Food & Bakes',
      targetQueue: QueueTarget.KITCHEN,
      addOns: [
        { name: 'Extra Aioli', price: 100 }
      ]
    },
    {
      name: 'Truffle Fries with Parmesan',
      description: 'Crisp golden fries tossed with truffle oil, parmesan, parsley, and black pepper.',
      price: 900,
      isVeg: true,
      imageUrl: '/images/truffle-fries.jpg',
      category: 'Food & Bakes',
      targetQueue: QueueTarget.KITCHEN,
      addOns: [
        { name: 'Jalapeno Dip', price: 100 }
      ]
    },

    // Beverages
    {
      name: 'Ceremonial Matcha Latte',
      description: 'Uji stone-ground ceremonial matcha prepared with bamboo whisk, velvety steamed milk of choice.',
      price: 600,
      isVeg: true,
      imageUrl: '/images/matcha.jpg',
      category: 'Beverages',
      targetQueue: QueueTarget.BAR,
      addOns: [
        { name: 'Oat Milk', price: 80 },
        { name: 'Almond Milk', price: 80 },
        { name: 'Vanilla Syrup', price: 50 }
      ]
    },
    {
      name: 'Cortado',
      description: 'Equal parts double shot espresso and warm silky milk, smooth and balanced.',
      price: 420,
      isVeg: true,
      imageUrl: '/images/cortado.jpg',
      category: 'Beverages',
      targetQueue: QueueTarget.BAR,
      addOns: []
    },
    {
      name: 'Earthy Drip Coffee',
      description: 'Single-origin Ethiopian Yirgacheffe slow-brewed via V60, notes of jasmine and sweet citrus.',
      price: 550,
      isVeg: true,
      imageUrl: '/images/drip.jpg',
      category: 'Beverages',
      targetQueue: QueueTarget.BAR,
      addOns: []
    },
    {
      name: 'Sea Salt Vietnamese Iced Coffee',
      description: 'Dark roast coffee, condensed milk, sea salt cream, and slow-melt ice.',
      price: 620,
      isVeg: true,
      imageUrl: '/images/vietnamese-coffee.jpg',
      category: 'Beverages',
      targetQueue: QueueTarget.BAR,
      addOns: [
        { name: 'Extra Coffee Shot', price: 100 }
      ]
    },
    {
      name: 'Mango Passion Cooler',
      description: 'Mango, passion fruit, lime, mint, and sparkling soda over crushed ice.',
      price: 580,
      isVeg: true,
      imageUrl: '/images/mango-cooler.jpg',
      category: 'Beverages',
      targetQueue: QueueTarget.BAR,
      addOns: []
    },

    // Cocktails
    {
      name: 'Smoked Rosemary Whiskey Sour',
      description: 'Bourbon whiskey, fresh lemon juice, organic simple syrup, egg white, smoked with fresh rosemary sprig.',
      price: 1500,
      isVeg: false,
      imageUrl: '/images/whiskey-sour.jpg',
      category: 'Cocktails',
      targetQueue: QueueTarget.BAR,
      addOns: []
    },
    {
      name: 'Elderflower Cucumber Spritz',
      description: 'St-Germain elderflower liqueur, prosecco, premium soda, cucumber ribbons, mint leaves.',
      price: 1350,
      isVeg: true,
      imageUrl: '/images/spritz.jpg',
      category: 'Cocktails',
      targetQueue: QueueTarget.BAR,
      addOns: []
    },
    {
      name: 'Hibiscus Mezcal Paloma',
      description: 'Artisanal smoky Mezcal, sweet hibiscus tea, fresh grapefruit juice, lime, salted rim.',
      price: 1450,
      isVeg: true,
      imageUrl: '/images/paloma.jpg',
      category: 'Cocktails',
      targetQueue: QueueTarget.BAR,
      addOns: []
    },
    {
      name: 'Espresso Martini',
      description: 'Vodka, coffee liqueur, fresh espresso, and demerara syrup shaken cold.',
      price: 1400,
      isVeg: true,
      imageUrl: '/images/espresso-martini.jpg',
      category: 'Cocktails',
      targetQueue: QueueTarget.BAR,
      addOns: []
    },
    {
      name: 'Spiced Guava Highball',
      description: 'White rum, pink guava, chilli salt, lime, and bubbly soda.',
      price: 1250,
      isVeg: true,
      imageUrl: '/images/guava-highball.jpg',
      category: 'Cocktails',
      targetQueue: QueueTarget.BAR,
      addOns: []
    },

    // Desserts
    {
      name: 'Tiramisu De Niva',
      description: 'House-baked ladyfingers soaked in our single-origin espresso and dark rum, layered with premium mascarpone cream.',
      price: 950,
      isVeg: true,
      imageUrl: '/images/tiramisu.jpg',
      category: 'Desserts',
      targetQueue: QueueTarget.KITCHEN,
      addOns: []
    },
    {
      name: 'Lava Cake with Salted Caramel',
      description: 'Warm rich chocolate lava cake with molten center, accompanied by homemade salted caramel ice cream.',
      price: 1000,
      isVeg: true,
      imageUrl: '/images/lava-cake.jpg',
      category: 'Desserts',
      targetQueue: QueueTarget.KITCHEN,
      addOns: []
    },
    {
      name: 'Basque Cheesecake',
      description: 'Burnt vanilla cheesecake with a custardy center and berry compote.',
      price: 900,
      isVeg: true,
      imageUrl: '/images/basque-cheesecake.jpg',
      category: 'Desserts',
      targetQueue: QueueTarget.KITCHEN,
      addOns: []
    },
    {
      name: 'Rose Milk Tres Leches',
      description: 'Soft sponge soaked in rose milk, saffron cream, and pistachio crumble.',
      price: 880,
      isVeg: true,
      imageUrl: '/images/tres-leches.jpg',
      category: 'Desserts',
      targetQueue: QueueTarget.KITCHEN,
      addOns: []
    },

    // Events @ Cafe
    {
      name: 'Friday Jazz & Wine Pass',
      description: 'Entry pass for our Friday Night live jazz sessions. Includes one glass of curated French Red/White wine and custom cheese platter.',
      price: 3500,
      isVeg: true,
      imageUrl: '/images/jazz.jpg',
      category: 'Events @ Cafe',
      targetQueue: QueueTarget.BAR,
      addOns: [
        { name: 'Upgrade to Champagne', price: 1500 }
      ]
    },
    {
      name: 'Artisanal Coffee Brewing Workshop',
      description: '2-hour immersive hands-on session with our master barista. Learn V60, AeroPress, and sensory cupping. Coffee bag included.',
      price: 5000,
      isVeg: true,
      imageUrl: '/images/workshop.jpg',
      category: 'Events @ Cafe',
      targetQueue: QueueTarget.KITCHEN,
      addOns: []
    },
    {
      name: 'Chef Table Tasting Reservation',
      description: 'A guided multi-course tasting slot for two guests with seasonal small plates.',
      price: 8000,
      isVeg: true,
      imageUrl: '/images/chef-table.jpg',
      category: 'Events @ Cafe',
      targetQueue: QueueTarget.KITCHEN,
      addOns: [
        { name: 'Wine Pairing', price: 3000 }
      ]
    }
  ];

  for (const item of menuItems) {
    const categoryId = categoriesMap[item.category];
    if (!categoryId) continue;

    await prisma.menuItem.upsert({
      where: {
        name_categoryId: {
          name: item.name,
          categoryId,
        },
      },
      update: {
        name: item.name,
        description: item.description,
        price: item.price,
        isVeg: item.isVeg,
        imageUrl: item.imageUrl,
        categoryId: categoryId,
        targetQueue: item.targetQueue,
        addOns: item.addOns,
      },
      create: {
        name: item.name,
        description: item.description,
        price: item.price,
        isVeg: item.isVeg,
        imageUrl: item.imageUrl,
        categoryId: categoryId,
        targetQueue: item.targetQueue,
        addOns: item.addOns,
      },
    });
  }

  console.log('Menu items seeded successfully!');
  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
