'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus, Trash2, ChevronRight, Clipboard, Sparkles } from 'lucide-react';
import { usePOSStore } from '../store/usePOSStore';
import { formatCurrency } from '../utils/currency';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const {
    cart,
    customer,
    updateCartQty,
    removeFromCart,
    tableNumber,
    tableLocked,
    setTableNumber,
    notes,
    setOrderNotes,
    clearCart,
    setActiveOrder,
    recommendations,
    categories,
    addToCart,
  } = usePOSStore();

  const [loading, setLoading] = useState(false);
  const [orderError, setOrderError] = useState('');

  // Constants
  const TAX_RATE = 0.05; // 5% GST

  // Sum calculations
  const subtotal = cart.reduce((sum, item) => {
    const addOnsTotal = item.addOnsSelected.reduce((s, a) => s + a.price, 0);
    return sum + (item.price + addOnsTotal) * item.quantity;
  }, 0);

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;
  const cartMenuItemIds = new Set(cart.map((item) => item.menuItemId));
  const fallbackSuggestions = categories
    .flatMap((category) => category.items || [])
    .filter((item) => item.isAvailable && !cartMenuItemIds.has(item.id))
    .slice(0, 4);
  const basketSuggestions = [
    ...recommendations.filter((item) => item.isAvailable && !cartMenuItemIds.has(item.id)),
    ...fallbackSuggestions,
  ]
    .filter((item, index, list) => list.findIndex((candidate) => candidate.id === item.id) === index)
    .slice(0, 3);

  const addSuggestedItem = (item: any) => {
    addToCart({
      menuItemId: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      imageUrl: item.imageUrl || null,
      isVeg: item.isVeg,
      notes: '',
      addOnsSelected: [],
      targetQueue: item.targetQueue,
    });
  };

  const closeDrawer = () => {
    if (!loading) {
      setOrderError('');
      onClose();
    }
  };

  const handlePlaceOrder = async () => {
    if (cart.length === 0 || !customer) return;

    setLoading(true);
    setOrderError('');
    try {
      const serverUrl = '';
      
      const payload = {
        customerId: customer.id,
        tableNumber,
        notes: notes.trim() || undefined,
        items: cart.map((item) => ({
          menuItemId: item.menuItemId,
          quantity: item.quantity,
          notes: item.notes || undefined,
          addOnsSelected: item.addOnsSelected.length > 0 ? item.addOnsSelected : undefined,
        })),
        totalPrice: parseFloat(subtotal.toFixed(2)),
        tax: parseFloat(tax.toFixed(2)),
        finalPrice: parseFloat(total.toFixed(2)),
      };

      const res = await fetch(`${serverUrl}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit order to POS. Please try again.');
      }

      const orderData = await res.json();
      setActiveOrder(orderData);
      clearCart();
      onClose();

    } catch (err: any) {
      console.error(err);
      setOrderError(err.message || 'Local network connectivity issue. Could not place order.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-40 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="absolute inset-0 bg-espresso-950/40 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-beige-50 shadow-2xl border-l border-beige-300/30 flex flex-col h-full"
            >
              {/* Header */}
              <div className="p-6 border-b border-beige-200/60 flex items-center justify-between bg-beige-100">
                <div className="flex items-center gap-2.5">
                  <ShoppingCart className="w-5 h-5 text-espresso-900" />
                  <h2 className="text-xl font-serif-elegant font-bold text-espresso-900">Your Basket</h2>
                  <span className="bg-espresso-900 text-beige-100 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {cart.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                </div>
                <button
                  onClick={closeDrawer}
                  className="p-2 rounded-full hover:bg-beige-200/50 text-espresso-600 smooth-transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Success Screen Overlay */}
              {cart.length === 0 ? (
                /* Empty state */
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <ShoppingCart className="w-12 h-12 text-espresso-400 stroke-[1.2]" />
                  <div>
                    <h3 className="text-base font-bold text-espresso-900">Your basket is empty</h3>
                    <p className="text-xs text-espresso-600 font-sans max-w-[220px] mx-auto mt-1 leading-relaxed">
                      Add items from the menu whenever you are ready.
                    </p>
                  </div>
                </div>
              ) : (
                /* Cart Items List */
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  <div className="space-y-4">
                    {cart.map((item) => {
                      const addOnsSum = item.addOnsSelected.reduce((s, a) => s + a.price, 0);
                      const itemTotal = (item.price + addOnsSum) * item.quantity;
                      return (
                        <div
                          key={item.id}
                          className="flex gap-4 p-3 rounded-2xl border border-beige-300/20 bg-white"
                        >
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-1.5">
                              <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                  item.isVeg ? 'bg-sage-500' : 'bg-terracotta-500'
                                }`}
                              />
                              <h4 className="text-sm font-bold text-espresso-900 line-clamp-1">
                                {item.name}
                              </h4>
                            </div>

                            {/* Selected Add-ons */}
                            {item.addOnsSelected.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-1">
                                {item.addOnsSelected.map((add) => (
                                  <span
                                    key={add.name}
                                    className="text-[9px] font-semibold bg-beige-100 text-espresso-600 px-2 py-0.5 rounded-full border border-beige-300/20"
                                  >
                                    {add.name} (+{formatCurrency(add.price)})
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Item Notes */}
                            {item.notes && (
                              <p className="text-[10px] text-espresso-400 font-sans italic flex items-center gap-1 mt-1">
                                <Clipboard className="w-3 h-3 shrink-0" />
                                "{item.notes}"
                              </p>
                            )}

                            <div className="flex items-center justify-between mt-2 pt-2 border-t border-beige-100">
                              {/* Quantity Editor */}
                              <div className="flex items-center gap-1 bg-beige-100 rounded-full px-2 py-1">
                                <button
                                  onClick={() => updateCartQty(item.id, item.quantity - 1)}
                                  className="p-0.5 rounded-full text-espresso-600 hover:bg-white cursor-pointer smooth-transition"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-6 text-center text-xs font-bold text-espresso-900">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateCartQty(item.id, item.quantity + 1)}
                                  className="p-0.5 rounded-full text-espresso-600 hover:bg-white cursor-pointer smooth-transition"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>

                              <span className="text-sm font-bold text-espresso-900">
                                {formatCurrency(itemTotal)}
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-espresso-400 hover:text-terracotta-500 p-1 self-start cursor-pointer smooth-transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Table & Notes configuration */}
                  <div className="border-t border-beige-300/40 pt-5 space-y-4">
                    {/* Table Select */}
                    <div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-espresso-400 block mb-1">
                          {tableLocked ? 'QR Table Detected' : 'Table Number'}
                        </label>
                        <select
                          value={tableNumber}
                          onChange={(e) => setTableNumber(e.target.value)}
                          disabled={tableLocked}
                          className="w-full p-2.5 bg-white disabled:bg-beige-100 disabled:text-espresso-500 border border-beige-300/60 rounded-xl text-espresso-900 text-sm font-sans focus:outline-none focus:border-espresso-900 smooth-transition shadow-sm"
                        >
                          {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                            <option key={`t-${n}`} value={n.toString()}>
                              Table {n}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Overall Order Notes */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-espresso-400 block mb-1.5">
                        Order Instructions / Notes
                      </label>
                      <textarea
                        placeholder="E.g. Serve appetizers first, bring warm water..."
                        value={notes}
                        onChange={(e) => setOrderNotes(e.target.value)}
                        className="w-full h-16 p-3 rounded-xl border border-beige-300/60 bg-white focus:outline-none focus:border-espresso-900 text-xs font-sans text-espresso-800 placeholder-espresso-400 smooth-transition resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Footer */}
              {cart.length > 0 && (
                <div className="p-6 bg-beige-100 border-t border-beige-200/60 space-y-4">
                  {/* Calculations */}
                  <div className="space-y-1.5">
                    {orderError && (
                      <div className="rounded-2xl border border-terracotta-500/20 bg-terracotta-500/10 px-3 py-2 text-xs font-semibold text-terracotta-600">
                        {orderError}
                      </div>
                    )}
                    <div className="flex justify-between text-xs font-medium text-espresso-600">
                      <span>Subtotal</span>
                      <span>{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-espresso-600">
                      <span>Tax (5% GST)</span>
                      <span>{formatCurrency(tax)}</span>
                    </div>
                    <div className="flex justify-between text-base font-extrabold text-espresso-900 pt-2 border-t border-beige-300/40">
                      <span>Total Amount</span>
                      <span>{formatCurrency(total)}</span>
                    </div>
                  </div>

                  {basketSuggestions.length > 0 && (
                    <div className="rounded-2xl border border-gold-500/20 bg-white p-3 space-y-2">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                        <span className="text-[10px] uppercase tracking-widest font-black text-espresso-500">
                          Recommended with this order
                        </span>
                      </div>
                      <div className="grid gap-2">
                        {basketSuggestions.map((item) => (
                          <button
                            key={`basket-suggestion-${item.id}`}
                            type="button"
                            onClick={() => addSuggestedItem(item)}
                            className="w-full rounded-xl bg-beige-50 hover:bg-beige-100 border border-beige-300/40 px-3 py-2 flex items-center justify-between gap-3 text-left smooth-transition"
                          >
                            <span className="min-w-0">
                              <span className="block text-xs font-extrabold text-espresso-900 line-clamp-1">
                                {item.name}
                              </span>
                              <span className="block text-[10px] font-semibold text-espresso-500">
                                {formatCurrency(item.price)}
                              </span>
                            </span>
                            <span className="shrink-0 rounded-full bg-espresso-900 text-beige-100 p-1">
                              <Plus className="w-3 h-3" />
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    onClick={handlePlaceOrder}
                    disabled={loading}
                    className="w-full bg-espresso-900 hover:bg-espresso-950 disabled:bg-espresso-900/60 text-beige-100 py-4 rounded-full font-semibold tracking-wide shadow-lg shadow-espresso-950/20 hover:shadow-xl smooth-transition cursor-pointer flex items-center justify-center gap-2 text-sm"
                  >
                    {loading ? (
                      <span className="w-5 h-5 rounded-full border-2 border-beige-100 border-t-transparent animate-spin" />
                    ) : (
                      <>
                        Send Order to Kitchen
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
