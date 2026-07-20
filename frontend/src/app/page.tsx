'use client';

import React, { useEffect, useState } from 'react';
import { usePOSStore } from '../store/usePOSStore';
import CustomerIdentify from '../components/CustomerIdentify';
import CategoryNav from '../components/CategoryNav';
import MenuGrid from '../components/MenuGrid';
import CartDrawer from '../components/CartDrawer';
import OrderTracker from '../components/OrderTracker';
import { ShoppingBag } from 'lucide-react';
import { getSocket } from '../utils/socket';
import { formatCurrency } from '../utils/currency';
import { brand } from '../utils/brand';
import { apiUrl } from '../utils/backendUrl';

export default function CustomerMenuPage() {
  const {
    customer,
    activeOrder,
    categories,
    setCategories,
    setTableNumber,
    setTableLocked,
    cart,
  } = usePOSStore();

  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch complete menu from the local network backend on startup
  useEffect(() => {
    const loadMenuJson = (url: string) =>
      new Promise<any[]>((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.timeout = 8000;
        request.onload = () => {
          if (request.status >= 200 && request.status < 300) {
            try {
              resolve(JSON.parse(request.responseText));
            } catch {
              reject(new Error(`Menu response was not valid JSON: ${request.responseText.slice(0, 120)}`));
            }
          } else {
            reject(new Error(`Menu fetch failed (HTTP ${request.status})`));
          }
        };
        request.onerror = () => reject(new Error('Local menu network request failed'));
        request.ontimeout = () => reject(new Error('Local menu network request timed out'));
        request.send();
      });

    const fetchMenu = async () => {
      try {
        const data = await loadMenuJson(apiUrl('/api/menu'));
        setCategories(data);
      } catch (err) {
        console.error('Local network menu sync error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();

    const tableFromQr = new URLSearchParams(window.location.search).get('table');
    if (tableFromQr) {
      setTableNumber(tableFromQr);
      setTableLocked(true);
    } else {
      setTableLocked(false);
    }

    const socket = getSocket();
    socket.on('menu:item:updated', fetchMenu);
    socket.on('menu:item:deleted', fetchMenu);

    return () => {
      socket.off('menu:item:updated', fetchMenu);
      socket.off('menu:item:deleted', fetchMenu);
    };
  }, [setCategories, setTableLocked, setTableNumber]);

  // Calculations for bottom floating basket bar
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => {
    const addOnsTotal = item.addOnsSelected.reduce((s, a) => s + a.price, 0);
    return sum + (item.price + addOnsTotal) * item.quantity;
  }, 0);

  // 1. Loading Skeleton state
  if (loading) {
    return (
      <div className="min-h-screen bg-beige-100 flex flex-col items-center justify-center p-6 space-y-4">
        <div className="w-12 h-12 rounded-full border-2 border-espresso-900 border-t-transparent animate-spin" />
        <p className="text-xs uppercase font-extrabold tracking-widest text-espresso-600 font-sans">
          Syncing Local Menu Network...
        </p>
      </div>
    );
  }

  // 2. Identify State (Requires customer phone before ordering)
  if (!customer) {
    return <CustomerIdentify />;
  }

  // 3. Active Order Tracking State
  if (activeOrder) {
    return <OrderTracker />;
  }

  // 4. Main Elegant Cafe Menu State
  return (
    <div className="min-h-screen flex flex-col bg-beige-100 relative pb-24">
      {/* Decorative premium header background */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-beige-200/40 to-transparent pointer-events-none" />

      {/* Elegant Serif Header Area */}
      <header className="max-w-6xl w-full mx-auto px-4 pt-10 pb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between z-10">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-gold-600 block mb-0.5">
            Dine-in Premium Experience
          </span>
          <h1 className="text-4xl font-serif-elegant font-bold text-espresso-950 tracking-wide">
            {brand.name}
          </h1>
          <p className="text-xs text-espresso-600 mt-0.5 font-sans">
            A guided menu for first-time guests and familiar favorites for returning guests.
          </p>
        </div>

        {/* Customer Profile Banner */}
        <div className="bg-beige-50 border border-beige-300/30 shadow-sm rounded-2xl px-5 py-3 flex items-center gap-4">
          <div className="text-left">
            <span className="text-[9px] uppercase tracking-wider font-bold text-espresso-400 block">
              Logged In
            </span>
            <span className="text-sm font-bold text-espresso-900 block leading-tight">
              {customer.name || 'Guest'}
            </span>
            <span className="text-[10px] text-espresso-600 block font-medium">
              {customer.mobile}
            </span>
          </div>

        </div>
      </header>

      {/* Sticky Fixed Category Navigation */}
      <CategoryNav />

      {/* Menu items Grid */}
      <MenuGrid />

      {/* Bottom Floating Premium Basket Bar */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-6 inset-x-0 px-4 z-30 pointer-events-none">
          <div className="max-w-md mx-auto w-full pointer-events-auto">
            <button
              onClick={() => setIsCartOpen(true)}
              className="w-full bg-espresso-950 hover:bg-espresso-900 text-beige-100 px-6 py-4.5 rounded-full shadow-2xl flex items-center justify-between smooth-transition cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="relative p-2 bg-beige-50/15 rounded-full">
                  <ShoppingBag className="w-4 h-4 text-beige-100" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-terracotta-500 rounded-full text-[9px] font-black text-white flex items-center justify-center animate-bounce">
                    {cartItemCount}
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-beige-100 block">View Basket</span>
                  <span className="text-[9px] text-beige-300/80 block">Table based auto order placement</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-base font-extrabold tracking-wide">{formatCurrency(cartTotal)}</span>
                <span className="text-beige-300 group-hover:translate-x-1 smooth-transition">-&gt;</span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Sliding cart drawer component */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
