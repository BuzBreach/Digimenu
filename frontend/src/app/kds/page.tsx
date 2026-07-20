'use client';

import React, { useEffect, useState, useRef } from 'react';
import { getSocket } from '../../utils/socket';
import { Clock, Play, CheckCircle2, ChevronRight, Volume2, VolumeX, AlertCircle, RefreshCw } from 'lucide-react';

export default function KitchenDisplaySystem() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [muted, setMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Play synthetic chime when a new order lands
  const playNewOrderSound = () => {
    if (muted) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;
      const osc = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      osc.type = 'sine';
      osc2.type = 'triangle';

      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc2.frequency.setValueAtTime(659.25, audioCtx.currentTime); // E5

      gainNode.gain.setValueAtTime(0.0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);

      osc.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc.start();
      osc2.start();

      osc.stop(audioCtx.currentTime + 1.2);
      osc2.stop(audioCtx.currentTime + 1.2);
    } catch (e) {
      console.error('KDS Chime synthesis failed:', e);
    }
  };

  // Fetch initial active orders on mount
  const fetchOrders = async () => {
    try {
      const accessToken = new URLSearchParams(window.location.search).get('access');
      if (accessToken) localStorage.setItem('niva_admin_token', accessToken);
      const token = accessToken || localStorage.getItem('niva_admin_token');
      
      const res = await fetch('/api/admin/orders', {
        headers: {
          'Authorization': `Bearer ${token || ''}`,
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          throw new Error('Unauthorized. Log in to the Admin Panel first.');
        }
        throw new Error('Failed to load order queue.');
      }

      const data = await res.json();
      // Filter out completed/cancelled orders to keep display extremely clean
      const activeQueue = data.filter((o: any) => o.status !== 'SERVED' && o.status !== 'CANCELLED');
      setOrders(activeQueue);
      setError('');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Connection lost.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();

    const socket = getSocket();

    // Listen for incoming live order creations
    socket.on('order:new', (newOrder) => {
      console.log('KDS: New live order received!', newOrder);
      // Play chime
      playNewOrderSound();
      
      // Update queue state immediately
      setOrders((prev) => [newOrder, ...prev]);
    });

    // Listen for live status changes from other terminals
    socket.on('order:updated', (updatedOrder) => {
      console.log('KDS: Live status sync received!', updatedOrder);
      if (['SERVED', 'CANCELLED'].includes(updatedOrder.status)) {
        // Remove from screen queue
        setOrders((prev) => prev.filter((o) => o.id !== updatedOrder.id));
      } else {
        // Update item in queue
        setOrders((prev) => prev.map((o) => (o.id === updatedOrder.id ? updatedOrder : o)));
      }
    });

    return () => {
      socket.off('order:new');
      socket.off('order:updated');
    };
  }, [muted]);

  // Update order item status on double click or button click
  const handleUpdateItemStatus = async (orderId: string, itemId: string, nextStatus: string) => {
    try {
      const token = localStorage.getItem('niva_admin_token');

      const res = await fetch(`/api/admin/orders/${orderId}/items/${itemId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token || ''}`,
        },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!res.ok) {
        throw new Error('Unauthorized or failed to update item.');
      }
      
      // Local state is updated automatically via the socket broadcast, 
      // but let's refresh to guarantee visual consistency!
      await fetchOrders();
    } catch (err: any) {
      alert(err.message || 'Error updating item status.');
    }
  };

  // Update overall order status (e.g. mark entire order ready or served)
  const handleUpdateOrderStatus = async (orderId: string, nextStatus: string) => {
    try {
      const token = localStorage.getItem('niva_admin_token');

      const res = await fetch(`/api/admin/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token || ''}`,
        },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!res.ok) {
        throw new Error('Unauthorized or failed to update order.');
      }

      await fetchOrders();
    } catch (err: any) {
      alert(err.message || 'Error updating order status.');
    }
  };

  // Helper: Get how long ago the order was placed in minutes
  const getTimerMinutes = (timestamp: string) => {
    const elapsed = Date.now() - new Date(timestamp).getTime();
    return Math.floor(elapsed / 60000);
  };

  // Custom Timer Hook emulation for real-time counts
  const [, setTick] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 10000); // refresh time every 10s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-espresso-950 text-beige-100 flex flex-col selection:bg-terracotta-500 selection:text-white">
      {/* 1. Top dark glass navigation bar */}
      <header className="px-4 md:px-6 py-4 glass-panel-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-beige-300/10">
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-3.5 h-3.5 rounded-full bg-sage-500 animate-pulse" />
          <h1 className="text-lg md:text-xl font-serif-elegant font-bold tracking-wide truncate">
            NIVA KITCHEN DISPLAY (KDS)
          </h1>
          <span className="text-[10px] uppercase font-bold tracking-widest bg-beige-100/10 text-beige-300 px-3 py-1 rounded-full border border-white/5">
            {orders.length} Active Dishes
          </span>
        </div>

        {/* Dashboard Tools */}
        <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto">
          {/* Force Refresh */}
          <button
            onClick={fetchOrders}
            className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 smooth-transition cursor-pointer"
            title="Refresh Queue"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {/* Sound Mute */}
          <button
            onClick={() => setMuted(!muted)}
            className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 smooth-transition cursor-pointer"
          >
            {muted ? <VolumeX className="w-4 h-4 text-terracotta-500" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* 2. Main Order Cards Area */}
      <main className="flex-1 min-h-0 p-4 md:p-6 overflow-x-auto overflow-y-auto flex gap-6 items-stretch">
        {loading ? (
          <div className="w-full min-h-[calc(100dvh-8.5rem)] flex flex-col items-center justify-center space-y-3">
            <span className="w-8 h-8 rounded-full border-2 border-beige-100 border-t-transparent animate-spin" />
            <p className="text-xs uppercase font-extrabold tracking-widest text-espresso-400">
              Reading Kitchen Queue...
            </p>
          </div>
        ) : error ? (
          <div className="max-w-md w-full mx-auto self-center bg-white/5 border border-white/10 rounded-3xl p-8 text-center space-y-4">
            <AlertCircle className="w-12 h-12 text-terracotta-500 stroke-[1.2] mx-auto" />
            <div>
              <h3 className="text-lg font-bold text-beige-100">KDS Access Error</h3>
              <p className="text-xs text-espresso-400 font-sans mt-1.5 leading-relaxed">
                {error === 'Unauthorized. Log in to the Admin Panel first.' ? (
                  <>
                    This workstation is not authorized. Please{' '}
                    <a href="/admin" className="text-terracotta-500 font-bold hover:underline">
                      Log In to the Admin Panel
                    </a>{' '}
                    first to acquire access credentials, then reload this KDS.
                  </>
                ) : (
                  'Please check your local POS network connection.'
                )}
              </p>
            </div>
            <button
              onClick={fetchOrders}
              className="px-6 py-2.5 bg-beige-100 text-espresso-950 rounded-full text-xs font-bold hover:bg-beige-200 cursor-pointer smooth-transition"
            >
              Retry Sync
            </button>
          </div>
        ) : orders.length === 0 ? (
          <div className="w-full min-h-[calc(100dvh-8.5rem)] flex flex-col items-center justify-center space-y-3 border border-dashed border-white/5 rounded-3xl">
            <CheckCircle2 className="w-12 h-12 text-sage-500 stroke-[1.2]" />
            <div>
              <h3 className="text-base font-bold text-beige-200">Kitchen Display Clear</h3>
              <p className="text-xs text-espresso-400 font-sans max-w-[200px] text-center mt-1">
                No active food or bake orders. Relax, brew a cortado!
              </p>
            </div>
          </div>
        ) : (
          /* Cards Carousel Grid list */
          <div className="flex gap-6 pb-4 h-[calc(100vh-140px)] select-none">
            {orders.map((order) => {
              const minutesElapsed = getTimerMinutes(order.createdAt);
              
              // Filter order items specifically for KITCHEN queue (Chef Display)
              const kitchenItems = order.items?.filter((i: any) => i.targetQueue === 'KITCHEN') || [];
              const barItems = order.items?.filter((i: any) => i.targetQueue === 'BAR') || [];

              // If there are no kitchen items, we can still display it if requested, 
              // but showing that it is drinks only or greying it out is very helpful. 
              // Let's render kitchen items in high-contrast and bar items as muted!
              
              const isUrgent = minutesElapsed >= 15;

              return (
                <div
                  key={order.id}
                  className={`w-80 rounded-[28px] border shrink-0 bg-espresso-900/60 shadow-xl overflow-hidden flex flex-col h-full ${
                    isUrgent ? 'border-terracotta-500/40 bg-terracotta-500/[0.03]' : 'border-white/10'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    className={`p-4 border-b border-white/5 flex items-center justify-between ${
                      isUrgent ? 'bg-terracotta-500/10' : 'bg-white/5'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-xl font-bold font-mono tracking-tight">
                          {order.orderNumber}
                        </h3>
                        <span className="text-[10px] font-bold bg-white/10 text-beige-300 px-2 py-0.5 rounded">
                          Table {order.tableNumber}
                        </span>
                      </div>
                      <p className="text-[10px] text-espresso-400 font-sans mt-0.5">
                        {order.customer?.name || 'Guest'}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold font-mono">
                      <Clock className="w-3.5 h-3.5 text-espresso-400" />
                      <span className={isUrgent ? 'text-terracotta-500' : 'text-espresso-400'}>
                        {minutesElapsed}m
                      </span>
                    </div>
                  </div>

                  {/* Card Items Container */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 divide-y divide-white/5">
                    {/* Kitchen Items Section */}
                    {kitchenItems.length > 0 && (
                      <div className="space-y-3">
                        <span className="text-[9px] uppercase font-black tracking-widest text-espresso-400 block">
                          Main Kitchen Food
                        </span>
                        
                        {kitchenItems.map((item: any) => {
                          const isPreparing = item.status === 'PREPARING';
                          const isReady = item.status === 'READY';
                          
                          return (
                            <div key={item.id} className="pt-2 flex justify-between gap-3 group">
                              <div className="space-y-1">
                                <span className={`text-base font-bold leading-tight ${isReady ? 'line-through text-espresso-500' : 'text-beige-100'}`}>
                                  {item.quantity}x {item.menuItem?.name}
                                </span>
                                {item.addOnsSelected && (
                                  <div className="flex flex-wrap gap-1">
                                    {JSON.parse(JSON.stringify(item.addOnsSelected)).map((add: any) => (
                                      <span key={add.name} className="text-[8px] bg-white/5 text-espresso-300 font-bold px-1.5 py-0.5 rounded border border-white/5">
                                        {add.name}
                                      </span>
                                    ))}
                                  </div>
                                )}
                                {item.notes && (
                                  <p className="text-[10px] font-sans text-terracotta-500 italic font-semibold">
                                    * "{item.notes}"
                                  </p>
                                )}
                              </div>

                              {/* Clickable Status Dispatchers */}
                              <div className="flex flex-col gap-1.5 shrink-0 self-start">
                                {!isReady && !isPreparing && (
                                  <button
                                    onClick={() => handleUpdateItemStatus(order.id, item.id, 'PREPARING')}
                                    className="p-1.5 bg-white/5 hover:bg-amber-500/10 text-espresso-400 hover:text-amber-500 border border-white/5 rounded-lg smooth-transition cursor-pointer"
                                    title="Start Preparing"
                                  >
                                    <Play className="w-3.5 h-3.5" />
                                  </button>
                                )}
                                {isPreparing && (
                                  <button
                                    onClick={() => handleUpdateItemStatus(order.id, item.id, 'READY')}
                                    className="p-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-500 hover:bg-sage-500/10 hover:text-sage-500 rounded-lg smooth-transition cursor-pointer animate-pulse"
                                    title="Mark Ready"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                  </button>
                                )}
                                {isReady && (
                                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-sage-500 bg-sage-500/10 border border-sage-500/25 px-2 py-1 rounded">
                                    Done
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Muted Bar Drinks Section (Chef visibility context) */}
                    {barItems.length > 0 && (
                      <div className="pt-3 space-y-2">
                        <span className="text-[9px] uppercase font-black tracking-widest text-espresso-500 block">
                          Bar drinks (Cocktail bar queue)
                        </span>
                        {barItems.map((item: any) => (
                          <div key={item.id} className="flex justify-between items-center text-xs font-medium text-espresso-400">
                            <span>{item.quantity}x {item.menuItem?.name}</span>
                            <span className="text-[8px] bg-white/5 text-espresso-500 font-bold px-1.5 py-0.5 rounded">
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Order instructions notes */}
                    {order.notes && (
                      <div className="pt-3">
                        <span className="text-[8px] uppercase tracking-widest font-black text-terracotta-500 block mb-1">
                          Table Instructions
                        </span>
                        <p className="text-xs text-beige-300 italic font-medium leading-relaxed bg-white/5 p-2 rounded-xl border border-white/5">
                          "{order.notes}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Card Footer Overall Control */}
                  <div className="p-4 bg-white/5 border-t border-white/5 space-y-2">
                    {order.status === 'PENDING' && (
                      <button
                        onClick={() => handleUpdateOrderStatus(order.id, 'PREPARING')}
                        className="w-full bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:bg-amber-500/30 py-3 rounded-xl font-bold text-xs tracking-wider uppercase smooth-transition cursor-pointer"
                      >
                        Accept & Start Order
                      </button>
                    )}

                    {order.status === 'PREPARING' && (
                      <button
                        onClick={() => handleUpdateOrderStatus(order.id, 'READY')}
                        className="w-full bg-sage-500/20 text-sage-500 border border-sage-500/30 hover:bg-sage-500/30 py-3 rounded-xl font-bold text-xs tracking-wider uppercase smooth-transition cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Mark Whole Order Ready
                      </button>
                    )}

                    {order.status === 'READY' && (
                      <button
                        onClick={() => handleUpdateOrderStatus(order.id, 'SERVED')}
                        className="w-full bg-beige-100 hover:bg-beige-200 text-espresso-950 py-3 rounded-xl font-black text-xs tracking-wider uppercase smooth-transition cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        Dispatch / Mark Served
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
