'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, User, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { usePOSStore } from '../store/usePOSStore';
import { brand } from '../utils/brand';

export default function CustomerIdentify() {
  const { tableNumber, tableLocked, setCustomer, setRecommendations, setPastOrders } = usePOSStore();
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const serverUrl = () => `http://${window.location.hostname}:5000`;

  const handleIdentify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile || mobile.replace(/\D/g, '').length < 8) {
      setError('Please enter a valid mobile number.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${serverUrl()}/api/customers/identify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile, name: name.trim() || undefined }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not open menu.');

      setCustomer(data.customer);
      setRecommendations(data.recommendations || []);
      setPastOrders(data.orderHistory || []);
    } catch (err: any) {
      setError(err.message || 'Server connection failed. Make sure server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100dvh] flex items-center justify-center p-4 bg-beige-100 relative overflow-hidden">
      {/* Premium background decorative shapes */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] aspect-square rounded-full bg-beige-200/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] aspect-square rounded-full bg-gold-500/10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md bg-beige-50 rounded-3xl border border-beige-300/40 shadow-2xl p-8 md:p-10 z-10 flex flex-col items-center text-center"
      >
        {/* Logo/Icon */}
        <div className="w-16 h-16 rounded-full bg-espresso-900 flex items-center justify-center text-beige-100 mb-6 shadow-md shadow-espresso-950/20">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>

        <h2 className="text-3xl font-serif-elegant font-bold text-espresso-900 tracking-wide mb-2">
          Welcome to {brand.shortName}
        </h2>
        <p className="text-sm text-espresso-600 font-sans leading-relaxed mb-8 max-w-[280px]">
          New here? We'll guide you. Returning guest? We'll show what you had last time and make it easy to order again.
        </p>

        {tableLocked && (
          <div className="mb-6 px-4 py-2 rounded-full bg-sage-500/10 text-sage-700 border border-sage-500/20 flex items-center gap-2 text-xs font-bold">
            <MapPin className="w-4 h-4" />
            Table {tableNumber} detected from QR
          </div>
        )}

        <form onSubmit={handleIdentify} className="w-full space-y-4">
          {/* Mobile Input */}
          <div className="text-left">
            <label className="text-[10px] font-bold uppercase tracking-widest text-espresso-400 block mb-1.5 ml-1">
              Mobile Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-espresso-400">
                <Phone className="w-4 h-4" />
              </span>
              <input
                type="tel"
                required
                placeholder="E.g. +1 555-0199"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-beige-300/60 rounded-2xl text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-espresso-900 text-sm font-sans smooth-transition shadow-sm focus:shadow"
              />
            </div>
          </div>

          {/* Name Input (Optional) */}
          <div className="text-left">
            <label className="text-[10px] font-bold uppercase tracking-widest text-espresso-400 block mb-1.5 ml-1">
              Full Name (Optional)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-espresso-400">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="E.g. Alexander Pierce"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-beige-300/60 rounded-2xl text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-espresso-900 text-sm font-sans smooth-transition shadow-sm focus:shadow"
              />
            </div>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-semibold text-terracotta-500 text-left pl-1"
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-espresso-900 hover:bg-espresso-950 disabled:bg-espresso-900/60 text-beige-100 py-4 rounded-2xl font-semibold tracking-wide shadow-lg shadow-espresso-950/20 hover:shadow-xl smooth-transition cursor-pointer flex items-center justify-center gap-2 group text-sm"
          >
            {loading ? (
              <span className="w-5 h-5 rounded-full border-2 border-beige-100 border-t-transparent animate-spin" />
            ) : (
              <>
                Continue to Menu
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 smooth-transition" />
              </>
            )}
          </button>
        </form>

        <p className="text-[10px] text-espresso-400 font-sans tracking-wide mt-6 leading-relaxed max-w-[260px]">
          By proceeding, you agree to store your dining history locally for quicker repeat orders.
        </p>
      </motion.div>
    </div>
  );
}
