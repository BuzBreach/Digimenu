'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Check } from 'lucide-react';
import { usePOSStore, AddOn } from '../store/usePOSStore';
import { formatCurrency } from '../utils/currency';

interface AddOnModalProps {
  item: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function AddOnModal({ item, isOpen, onClose }: AddOnModalProps) {
  const { addToCart } = usePOSStore();
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  if (!item) return null;

  const availableAddOns: AddOn[] = item.addOns || [];

  const handleToggleAddOn = (addOn: AddOn) => {
    const isSelected = selectedAddOns.some((a) => a.name === addOn.name);
    if (isSelected) {
      setSelectedAddOns(selectedAddOns.filter((a) => a.name !== addOn.name));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Compute final price including add-ons
  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const unitPrice = item.price + addOnsTotal;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart({
      menuItemId: item.id,
      name: item.name,
      price: item.price,
      quantity,
      imageUrl: item.imageUrl,
      isVeg: item.isVeg,
      notes,
      addOnsSelected: selectedAddOns,
      targetQueue: item.targetQueue,
    });
    onClose();
    // Reset state
    setSelectedAddOns([]);
    setQuantity(1);
    setNotes('');
  };

  const handleClose = () => {
    setSelectedAddOns([]);
    setQuantity(1);
    setNotes('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-espresso-950/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg bg-beige-50 rounded-3xl shadow-2xl border border-beige-300/30 overflow-hidden flex flex-col max-h-[85vh] z-10"
          >
            {/* Header */}
            <div className="p-6 border-b border-beige-200/60 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`inline-block w-2.5 h-2.5 rounded-full ${
                      item.isVeg ? 'bg-sage-500' : 'bg-terracotta-500'
                    }`}
                  />
                  <span className="text-xs uppercase tracking-wider text-espresso-400 font-medium">
                    {item.isVeg ? 'Vegetarian' : 'Contains Meat'}
                  </span>
                </div>
                <h3 className="text-2xl font-serif-elegant font-bold text-espresso-900 leading-tight">
                  {item.name}
                </h3>
                <p className="text-sm text-espresso-600 mt-1 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-beige-200/50 text-espresso-600 smooth-transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Add-ons List */}
              {availableAddOns.length > 0 ? (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-espresso-400 mb-3">
                    Choose options
                  </h4>
                  <div className="space-y-2">
                    {availableAddOns.map((addOn) => {
                      const isSelected = selectedAddOns.some((a) => a.name === addOn.name);
                      return (
                        <div
                          key={addOn.name}
                          onClick={() => handleToggleAddOn(addOn)}
                          className={`flex justify-between items-center p-4 rounded-2xl border cursor-pointer smooth-transition select-none ${
                            isSelected
                              ? 'border-espresso-900 bg-beige-200/40 shadow-sm'
                              : 'border-beige-300/30 bg-beige-100/50 hover:bg-beige-100'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center border smooth-transition ${
                                isSelected
                                  ? 'bg-espresso-900 border-espresso-900 text-beige-100'
                                  : 'border-espresso-400/30 bg-white'
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span className="text-sm font-medium text-espresso-900">
                              {addOn.name}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-espresso-800">
                            +{formatCurrency(addOn.price)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="py-4 text-center border border-dashed border-beige-300/60 rounded-2xl bg-beige-100/20">
                  <p className="text-xs text-espresso-400 font-sans italic">
                    No custom configurations needed for this item.
                  </p>
                </div>
              )}

              {/* Kitchen Notes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-espresso-400 mb-3">
                  Notes for the Chef / Bartender
                </h4>
                <textarea
                  placeholder="E.g. Extra hot, no ice, dressing on the side..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full h-24 p-4 rounded-2xl border border-beige-300/60 bg-white focus:outline-none focus:border-espresso-900 text-sm font-sans text-espresso-800 placeholder-espresso-400 smooth-transition resize-none"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-beige-100 border-t border-beige-200/60 space-y-4">
              {/* Quantity Selector & Price Summary */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 bg-white border border-beige-300/40 rounded-full px-2.5 py-1.5 shadow-sm">
                  <button
                    onClick={handleDecrement}
                    className="p-1 rounded-full text-espresso-600 hover:bg-beige-100 cursor-pointer smooth-transition"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-espresso-900">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="p-1 rounded-full text-espresso-600 hover:bg-beige-100 cursor-pointer smooth-transition"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-right">
                  <span className="text-xs text-espresso-400 block font-medium">Total Price</span>
                  <span className="text-xl font-bold text-espresso-900">{formatCurrency(totalPrice)}</span>
                </div>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-espresso-900 hover:bg-espresso-950 text-beige-100 py-4 rounded-full font-semibold tracking-wide shadow-lg shadow-espresso-950/20 hover:shadow-xl smooth-transition cursor-pointer text-center text-sm"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
