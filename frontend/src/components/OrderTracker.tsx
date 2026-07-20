'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePOSStore } from '../store/usePOSStore';
import { getBackendUrl } from '../utils/backendUrl';
import { getSocket } from '../utils/socket';
import { Clock, CheckCircle2, ChevronLeft } from 'lucide-react';

export default function OrderTracker() {
  const { activeOrder, setActiveOrder, customer } = usePOSStore();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  useEffect(() => {
    if (!activeOrder) return;

    const socket = getSocket();

    // Listen for order update events from server
    socket.on('order:updated', (updatedOrder) => {
      if (updatedOrder && updatedOrder.id === activeOrder.id) {
        setActiveOrder(updatedOrder);
      }
    });

    return () => {
      socket.off('order:updated');
    };
  }, [activeOrder, setActiveOrder]);

  if (!activeOrder) return null;

  const steps = [
    { label: 'Confirmed', status: 'PENDING', desc: 'Order received by POS' },
    { label: 'Preparing', status: 'PREPARING', desc: 'Chef / Bartender crafting' },
    { label: 'Ready', status: 'READY', desc: 'Ready for service' },
    { label: 'Served', status: 'SERVED', desc: 'Served at your table' },
  ];

  const getStepIndex = (status: string) => {
    switch (status) {
      case 'PENDING': return 0;
      case 'PREPARING': return 1;
      case 'READY': return 2;
      case 'SERVED': return 3;
      default: return 0;
    }
  };

  const currentIndex = getStepIndex(activeOrder.status);

  const sendFeedback = async () => {
    if (!customer || feedbackSent) return;
    const res = await fetch(`${getBackendUrl()}/api/orders/${activeOrder.id}/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerId: customer.id, rating, comment }),
    });
    if (res.ok) {
      setFeedbackSent(true);
      setComment('');
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-beige-100 py-10 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-terracotta-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-2xl w-full mx-auto flex-1 flex flex-col justify-between space-y-8 z-10">
        {/* Header Navigation */}
        <div className="flex items-center justify-start">
          <button
            onClick={() => setActiveOrder(null)}
            className="flex items-center gap-2 px-4 py-2 bg-white/60 border border-beige-300/40 rounded-full text-xs font-bold text-espresso-850 hover:bg-white cursor-pointer smooth-transition shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Menu
          </button>
        </div>

        {/* Live Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] border border-beige-300/30 p-6 md:p-8 shadow-xl space-y-8"
        >
          {/* Top Order Meta */}
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-espresso-400">
                Live Order Tracking
              </span>
              <h2 className="text-3xl font-serif-elegant font-bold text-espresso-900 mt-1">
                Order {activeOrder.orderNumber}
              </h2>
              <p className="text-xs text-espresso-600 mt-0.5">
                Table {activeOrder.tableNumber} - {activeOrder.customer?.name || 'Guest'}
              </p>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-gold-500/10 text-gold-600 text-xs font-bold flex items-center gap-1.5 uppercase tracking-wide">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              {activeOrder.status}
            </div>
          </div>

          <div className="bg-beige-100/70 border border-beige-300/50 rounded-2xl p-4">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-espresso-400 block">
              Manual payment
            </span>
            <p className="text-xs text-espresso-650 font-sans mt-0.5">
              Your order has been sent to the cafe team. Please settle the final bill with staff when you are ready.
            </p>
          </div>

          {/* Stepper Progress bar */}
          <div className="relative pt-4">
            {/* Background bar line */}
            <div className="absolute top-8 left-4 right-4 h-0.5 bg-beige-200" />
            {/* Active colored bar line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
              className="absolute top-8 left-4 h-0.5 bg-espresso-900"
              transition={{ duration: 0.8 }}
            />

            <div className="relative flex justify-between">
              {steps.map((step, idx) => {
                const isCompleted = idx < currentIndex;
                const isActive = idx === currentIndex;
                
                return (
                  <div key={step.status} className="flex flex-col items-center text-center space-y-2.5 z-10 w-20">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center border-2 smooth-transition ${
                        isCompleted
                          ? 'bg-espresso-900 border-espresso-900 text-beige-100'
                          : isActive
                          ? 'bg-white border-espresso-900 text-espresso-900 shadow-md shadow-espresso-950/10'
                          : 'bg-white border-beige-300 text-espresso-400'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <span className="text-xs font-extrabold">{idx + 1}</span>
                      )}
                    </div>
                    <div>
                      <span
                        className={`text-xs font-bold block ${
                          isActive ? 'text-espresso-900' : 'text-espresso-600'
                        }`}
                      >
                        {step.label}
                      </span>
                      <span className="text-[8px] text-espresso-400 font-medium leading-tight max-w-[80px] block mt-0.5">
                        {step.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ordered Item list details */}
          <div className="border-t border-beige-200/60 pt-6 space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-espresso-400">
              Kitchen & Bar Queue Summary
            </h3>
            <div className="divide-y divide-beige-100">
              {activeOrder.items?.map((item: any) => (
                <div key={item.id} className="py-3 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-espresso-900">
                        {item.quantity}x {item.menuItem?.name}
                      </span>
                      <span className="text-[9px] uppercase bg-beige-100 text-espresso-500 font-bold px-2 py-0.5 rounded">
                        {item.targetQueue}
                      </span>
                    </div>
                    {item.addOnsSelected && (
                      <div className="flex gap-1.5 flex-wrap mt-0.5">
                        {JSON.parse(JSON.stringify(item.addOnsSelected)).map((add: any) => (
                          <span key={add.name} className="text-[8px] text-espresso-450 font-semibold bg-beige-100/50 px-1.5 py-0.5 rounded">
                            {add.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-extrabold tracking-wide uppercase px-2.5 py-1 rounded-full ${
                      item.status === 'SERVED'
                        ? 'bg-sage-500/10 text-sage-600'
                        : item.status === 'READY'
                        ? 'bg-gold-500/10 text-gold-600 animate-pulse'
                        : item.status === 'PREPARING'
                        ? 'bg-amber-500/10 text-amber-600'
                        : 'bg-beige-200 text-espresso-400'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {activeOrder.status === 'SERVED' && (
            <div className="border-t border-beige-200/60 pt-6 space-y-3">
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-espresso-400">
                How was everything?
              </h3>
              {feedbackSent ? (
                <p className="rounded-2xl bg-sage-500/10 text-sage-650 px-4 py-3 text-xs font-bold">
                  Thank you. Your feedback has been shared with the manager.
                </p>
              ) : (
                <div className="space-y-3">
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        onClick={() => setRating(value)}
                        className={`w-9 h-9 rounded-full text-sm font-black border smooth-transition cursor-pointer hover:scale-110 active:scale-95 ${rating >= value ? 'bg-gold-500/20 border-gold-500 text-gold-650 shadow-md shadow-gold-500/20' : 'bg-beige-50 border-beige-300 text-espresso-400 hover:border-gold-300'}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us what you liked or what we should improve"
                    className="w-full h-20 rounded-2xl border border-beige-300/60 bg-beige-50 p-3 text-xs focus:outline-none focus:border-espresso-900 resize-none"
                  />
                  <button
                    onClick={sendFeedback}
                    className="px-5 py-2.5 rounded-full bg-espresso-950 text-beige-100 text-xs font-bold"
                  >
                    Send Feedback
                  </button>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Footer Support */}
        <div className="text-center space-y-2">
          <p className="text-[10px] text-espresso-400 font-sans leading-relaxed max-w-[280px] mx-auto">
            This tracking portal syncs in real-time with our kitchen and bar staff via local Wi-Fi. No internet required.
          </p>
          <button
            onClick={() => setActiveOrder(null)}
            className="px-6 py-2.5 border border-dashed border-espresso-900/30 text-espresso-900 hover:bg-espresso-900 hover:text-beige-100 rounded-full text-xs font-bold cursor-pointer smooth-transition shadow-sm"
          >
            Order More Dishes
          </button>
        </div>
      </div>
    </div>
  );
}
