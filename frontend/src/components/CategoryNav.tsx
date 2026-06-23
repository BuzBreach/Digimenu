'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePOSStore } from '../store/usePOSStore';
import * as Icons from 'lucide-react';

// Dynamic Icon rendering helper
export const CategoryIcon = ({ name, className }: { name: string; className?: string }) => {
  // Map database string icon names to Lucide icon components
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} />;
  }
  return <IconComponent className={className} />;
};

export default function CategoryNav() {
  const { categories, selectedCategoryId, setSelectedCategoryId } = usePOSStore();

  return (
    <div className="w-full bg-beige-100/80 backdrop-blur-md border-y border-beige-300/40 sticky top-0 z-30 shadow-sm overflow-x-auto no-scrollbar">
      <div className="max-w-6xl mx-auto px-4 py-3 flex gap-3 md:gap-4 items-center justify-start md:justify-center">
        {categories.map((category) => {
          const isSelected = selectedCategoryId === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategoryId(category.id)}
              className="relative px-5 py-3 rounded-full flex items-center gap-2.5 text-sm font-medium tracking-wide transition-all duration-300 select-none cursor-pointer whitespace-nowrap outline-none"
            >
              {/* Pill underlay animation using Framer Motion layoutId */}
              {isSelected && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-espresso-900 shadow-md shadow-espresso-950/10 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              <span
                className={`relative z-10 flex items-center justify-center transition-colors duration-300 ${
                  isSelected ? 'text-beige-100' : 'text-espresso-600 hover:text-espresso-900'
                }`}
              >
                <CategoryIcon name={category.icon} className="w-4 h-4" />
              </span>

              <span
                className={`relative z-10 transition-colors duration-300 font-sans ${
                  isSelected ? 'text-beige-100' : 'text-espresso-800 hover:text-espresso-900'
                }`}
              >
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
