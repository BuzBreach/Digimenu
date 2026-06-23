'use client';

import React, { useState } from 'react';
import { motion as fm, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, AlertCircle, ShoppingBag, Plus, Clock3 } from 'lucide-react';
import { usePOSStore } from '../store/usePOSStore';
import AddOnModal from './AddOnModal';
import { formatCurrency } from '../utils/currency';

export default function MenuGrid() {
  const {
    categories,
    selectedCategoryId,
    recommendations,
    pastOrders,
    searchQuery,
    setSearchQuery,
  } = usePOSStore();

  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [isAddOnOpen, setIsAddOnOpen] = useState(false);
  const [vegOnly, setVegOnly] = useState(false);

  // Find active category
  const activeCategory = categories.find((cat) => cat.id === selectedCategoryId);
  const items = activeCategory ? activeCategory.items : [];

  // Filter items by search query and Veg/Non-Veg
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesVeg = vegOnly ? item.isVeg === true : true;
    return matchesSearch && matchesVeg;
  });

  const handleOpenAddOn = (item: any) => {
    setSelectedItem(item);
    setIsAddOnOpen(true);
  };

  const lastOrder = pastOrders?.[0];
  const lastOrderItems = lastOrder?.items || [];
  const formatVisitDate = (date: string) =>
    new Intl.DateTimeFormat(undefined, {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(new Date(date));

  // Helper for rendering high-end food drawings or generic image styling
  const getItemImage = (item: any) => {
    // Return the image url, or return a beautiful warm color gradient card
    if (item.imageUrl && !item.imageUrl.startsWith('/images/')) {
      return item.imageUrl;
    }
    // Gradient backgrounds based on the name of the item
    const gradients = [
      'from-amber-100 to-orange-100',
      'from-rose-100 to-orange-100',
      'from-yellow-100 to-amber-200',
      'from-emerald-100 to-teal-100',
      'from-orange-100 to-amber-100',
    ];
    const index = item.name.charCodeAt(0) % gradients.length;
    return gradients[index];
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 md:py-8 space-y-8 flex-1">
      {/* 1. Dynamic AI Recommendations Carousel (Premium luxury overlay) */}
      {lastOrderItems.length > 0 && searchQuery === '' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-full bg-terracotta-500/10 text-terracotta-500">
              <Clock3 className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-lg font-serif-elegant font-bold text-espresso-900 leading-tight">
                Welcome back
              </h3>
              <p className="text-xs text-espresso-500 font-sans">
                Last visit, you enjoyed{' '}
                {lastOrderItems.map((entry: any) => `${entry.quantity}x ${entry.menuItem?.name}`).join(', ')}.
                {' '}Want to have them again?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {lastOrderItems.slice(0, 3).map((entry: any) => (
              <fm.div
                key={`again-${entry.id}`}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl p-4 border border-beige-300/40 shadow-sm flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-terracotta-500 tracking-wider uppercase">
                    Last ordered
                  </span>
                  <h4 className="text-sm font-bold text-espresso-900 line-clamp-1">
                    {entry.menuItem?.name}
                  </h4>
                  <p className="text-xs text-espresso-500 font-sans mt-0.5">
                    {entry.quantity}x on {formatVisitDate(lastOrder.createdAt)}
                  </p>
                </div>
                <button
                  onClick={() => handleOpenAddOn(entry.menuItem)}
                  className="shrink-0 p-2 bg-espresso-900 hover:bg-espresso-950 text-beige-100 rounded-full cursor-pointer smooth-transition"
                  aria-label={`Order ${entry.menuItem?.name} again`}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </fm.div>
            ))}
          </div>
        </div>
      )}

      {recommendations.length > 0 && searchQuery === '' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-full bg-gold-500/10 text-gold-500">
              <Sparkles className="w-4 h-4 fill-gold-500/20" />
            </span>
            <div>
              <h3 className="text-lg font-serif-elegant font-bold text-espresso-900 leading-tight">
                Recommended for you
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 overflow-x-auto no-scrollbar pb-2">
            {recommendations.slice(0, 4).map((item) => (
              <fm.div
                key={`rec-${item.id}`}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-beige-50 rounded-2xl p-4 border border-beige-300/40 shadow-sm flex flex-col justify-between smooth-transition hover:shadow-md"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${
                        item.isVeg ? 'bg-sage-500' : 'bg-terracotta-500'
                      }`}
                    />
                    <span className="text-[10px] font-bold text-gold-500 tracking-wider uppercase bg-gold-500/10 px-2 py-0.5 rounded-full">
                      AI pick
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-espresso-900 line-clamp-1">{item.name}</h4>
                  <p className="text-xs text-espresso-600 line-clamp-2 mt-1 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm font-extrabold text-espresso-900">{formatCurrency(item.price)}</span>
                  <button
                    onClick={() => handleOpenAddOn(item)}
                    className="p-1.5 bg-espresso-900 hover:bg-espresso-950 text-beige-100 rounded-full cursor-pointer smooth-transition"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </fm.div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Interactive Search & Muted Veg Toggle Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-espresso-400 pointer-events-none">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search our kitchen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-beige-300/40 rounded-full text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-espresso-900 text-sm font-sans smooth-transition shadow-sm"
          />
        </div>

        {/* Veg Selector */}
        <div className="flex items-center gap-3 self-end sm:self-auto select-none">
          <span className="text-xs font-semibold text-espresso-600 font-sans">Vegetarian only</span>
          <button
            onClick={() => setVegOnly(!vegOnly)}
            className={`relative w-11 h-6 rounded-full smooth-transition cursor-pointer ${
              vegOnly ? 'bg-sage-500' : 'bg-beige-300'
            }`}
          >
            <fm.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md ${
                vegOnly ? 'right-0.5' : 'left-0.5'
              }`}
            />
          </button>
        </div>
      </div>

      {/* 3. Items Grid List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-serif-elegant font-bold text-espresso-900 leading-tight">
          {activeCategory?.name || 'Browse Menu'}
        </h2>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const isGradient = getItemImage(item).includes('from-');

                return (
                  <fm.div
                    key={item.id}
                    layoutId={`item-${item.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-3xl border border-beige-300/30 p-5 shadow-sm hover:shadow-md smooth-transition flex gap-5 overflow-hidden group"
                  >
                    {/* Item Image Card */}
                    <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 border border-beige-300/20 bg-beige-100 flex items-center justify-center">
                      {isGradient ? (
                        <div className={`w-full h-full bg-gradient-to-tr ${getItemImage(item)} flex items-center justify-center text-espresso-400 font-serif-elegant italic text-4xl font-bold select-none text-stroke-brown opacity-80`}>
                          {item.name.charAt(0)}
                        </div>
                      ) : (
                        <img
                          src={item.imageUrl || ''}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                          onError={(e) => {
                            // If load fails, display initials
                            (e.target as any).style.display = 'none';
                            const parent = (e.target as any).parentNode;
                            const el = document.createElement('div');
                            el.className = 'w-full h-full bg-gradient-to-tr from-amber-100 to-orange-100 flex items-center justify-center text-espresso-400 font-serif-elegant italic text-4xl font-bold select-none';
                            el.innerText = item.name.charAt(0);
                            parent.appendChild(el);
                          }}
                        />
                      )}

                      {/* Veg indicator */}
                      <span
                        className={`absolute top-2 left-2 w-3.5 h-3.5 rounded-full border-2 border-white shadow flex items-center justify-center ${
                          item.isVeg ? 'bg-sage-500' : 'bg-terracotta-500'
                        }`}
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-serif-elegant font-bold text-espresso-900 group-hover:text-terracotta-500 smooth-transition leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-xs text-espresso-600 line-clamp-2 mt-1 leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-3">
                        <span className="text-base font-extrabold text-espresso-900">
                          {formatCurrency(item.price)}
                        </span>
                        
                        <button
                          onClick={() => handleOpenAddOn(item)}
                          aria-label={`Add ${item.name} to cart`}
                          title={`Add ${item.name} to cart`}
                          className="p-2.5 bg-beige-100 hover:bg-espresso-900 hover:text-beige-100 rounded-full text-espresso-900 flex items-center justify-center cursor-pointer smooth-transition shadow-sm"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </fm.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <fm.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center space-y-3 bg-white/40 border border-beige-300/20 rounded-3xl"
          >
            <AlertCircle className="w-10 h-10 text-espresso-400 stroke-[1.5]" />
            <div className="space-y-1">
              <h3 className="text-base font-bold text-espresso-900">No dishes found</h3>
              <p className="text-xs text-espresso-600 font-sans max-w-[240px] leading-relaxed mx-auto">
                We couldn't find any items matching your filters in this category.
              </p>
            </div>
          </fm.div>
        )}
      </div>

      {/* Add-on configuration modal */}
      <AddOnModal
        item={selectedItem}
        isOpen={isAddOnOpen}
        onClose={() => {
          setIsAddOnOpen(false);
          setSelectedItem(null);
        }}
      />
    </div>
  );
}
