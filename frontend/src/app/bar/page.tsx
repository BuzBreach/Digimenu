'use client';

import React, { useEffect, useState, useRef } from 'react';
import { getSocket } from '../../utils/socket';
import { Clock, Play, CheckCircle2, ChevronRight, Volume2, VolumeX, AlertCircle, RefreshCw } from 'lucide-react';

export default function BarDisplaySystem() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [muted, setMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Play bartender chime when a drink is added
  const playNewDrinkChime = () => {
    if (muted) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      osc.type = 'triangle';
      // High pitch sweet chime
      osc.frequency.setValueAtTime(880.00, audioCtx.currentTime); // A5
      gainNode.gain.setValueAtTime(0.0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.0);

      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 1.0);
    } catch (e) {
      console.error('Bar chime synthesis failed:', e);
    }
  };

  const fetchOrders = async () => {
    try {
      const serverUrl = `http://${window.location.hostname}:5000`;
      const accessToken = new URLSearchParams(window.location.search).get('access');
      if (accessToken) localStorage.setItem('niva_admin_token', accessToken);
      const token = accessToken || localStorage.getItem('niva_admin_token');

      const res = await fetch(`${serverUrl}/api/admin/orders`, {
        headers: {
          'Authorization': `Bearer ${token || ''}`,
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          throw new Error('Unauthorized. Log in to the Admin Panel first.');
        }
        throw new Error('Failed to load drinks queue.');
      }

      const data = await res.json();
      
      // Filter out orders that are served/cancelled
      const activeQueue = data.filter((o: any) => o.status !== 'SERVED' && o.status !== 'CANCELLED');
      
      // Only keep orders that contain at least one drink item (BAR targetQueue)
      const drinksQueue = activeQueue.filter((order: any) => 
        order.items?.some((item: any) => item.targetQueue === 'BAR')
      );

      setOrders(drinksQueue);
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

    socket.on('order:new', (newOrder) => {
      // Check if new order has any drinks
      const hasDrinks = newOrder.items?.some((i: any) => i.targetQueue === 'BAR');
      if (hasDrinks) {
        playNewDrinkChime();
        setOrders((prev) => [newOrder, ...prev]);
      }
    });

    socket.on('order:updated', (updatedOrder) => {
      if (['SERVED', 'CANCELLED'].includes(updatedOrder.status)) {
        setOrders((prev) => prev.filter((o) => o.id !== updatedOrder.id));
      } else {
        const hasDrinks = updatedOrder.items?.some((i: any) => i.targetQueue === 'BAR');
        if (hasDrinks) {
          setOrders((prev) => prev.map((o) => (o.id === updatedOrder.id ? updatedOrder : o)));
        } else {
          // If drinks were removed or not present
          setOrders((prev) => prev.filter((o) => o.id !== updatedOrder.id));
        }
      }
    });

    return () => {
      socket.off('order:new');
      socket.off('order:updated');
    };
  }, [muted]);

  const handleUpdateItemStatus = async (orderId: string, itemId: string, nextStatus: string) => {
    try {
      const serverUrl = `http://${window.location.hostname}:5000`;
      const token = localStorage.getItem('niva_admin_token');

      const res = await fetch(`${serverUrl}/api/admin/orders/${orderId}/items/${itemId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token || ''}`,
        },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!res.ok) {
        throw new Error('Failed to update drink item status.');
      }

      await fetchOrders();
    } catch (err: any) {
      alert(err.message || 'Error updating drink status.');
    }
  };

  const handleUpdateOrderStatus = async (orderId: string, nextStatus: string) => {
    try {
      const serverUrl = `http://${window.location.hostname}:5000`;
      const token = localStorage.getItem('niva_admin_token');

      const res = await fetch(`${serverUrl}/api/admin/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token || ''}`,
        },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!res.ok) {
        throw new Error('Failed to update order status.');
      }

      await fetchOrders();
    } catch (err: any) {
      alert(err.message || 'Error updating order status.');
    }
  };

  const getTimerMinutes = (timestamp: string) => {
    const elapsed = Date.now() - new Date(timestamp).getTime();
    return Math.floor(elapsed / 60000);
  };

  // State ticks for timers
  const [, setTick] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-espresso-950 text-beige-100 flex flex-col selection:bg-terracotta-500 selection:text-white">
      {/* 1. Header Area */}
      <header className="px-4 md:px-6 py-4 glass-panel-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5">
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-3.5 h-3.5 rounded-full bg-gold-500 animate-pulse" />
          <h1 className="text-lg md:text-xl font-serif-elegant font-bold tracking-wide truncate">
            NIVA BAR DISPLAY SYSTEM (BDS)
          </h1>
          <span className="text-[10px] uppercase font-bold tracking-widest bg-gold-500/10 text-gold-500 px-3 py-1 rounded-full border border-gold-500/20">
            {orders.length} Active Drinks
          </span>
        </div>

        {/* Tools */}
        <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto">
          {/* Refresh */}
          <button
            onClick={fetchOrders}
            className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 smooth-transition cursor-pointer"
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

      {/* 2. Drink Queue cards */}
      <main className="flex-1 min-h-0 p-4 md:p-6 overflow-x-auto overflow-y-auto flex gap-6 items-stretch">
        {loading ? (
          <div className="w-full min-h-[calc(100dvh-8.5rem)] flex flex-col items-center justify-center space-y-3">
            <span className="w-8 h-8 rounded-full border-2 border-beige-100 border-t-transparent animate-spin" />
            <p className="text-xs uppercase font-extrabold tracking-widest text-espresso-400">
              Syncing Bar Database...
            </p>
          </div>
        ) : error ? (
          <div className="max-w-md w-full mx-auto self-center bg-white/5 border border-white/10 rounded-3xl p-8 text-center space-y-4">
            <AlertCircle className="w-12 h-12 text-terracotta-500 stroke-[1.2] mx-auto" />
            <div>
              <h3 className="text-lg font-bold text-beige-100">Bar terminal unauthorized</h3>
              <p className="text-xs text-espresso-400 font-sans mt-1.5 leading-relaxed">
                {error === 'Unauthorized. Log in to the Admin Panel first.' ? (
                  <>
                    Please authorize this bartender terminal. Log in to the{' '}
                    <a href="/admin" className="text-gold-500 font-bold hover:underline">
                      Admin Panel
                    </a>{' '}
                    first to acquire access credentials, then reload this drinks queue.
                  </>
                ) : (
                  'Please review your LAN network settings.'
                )}
              </p>
            </div>
            <button
              onClick={fetchOrders}
              className="px-6 py-2.5 bg-gold-500 text-espresso-950 rounded-full text-xs font-bold hover:bg-gold-600 cursor-pointer smooth-transition"
            >
              Sync Drinks Queue
            </button>
          </div>
        ) : orders.length === 0 ? (
          <div className="w-full min-h-[calc(100dvh-8.5rem)] flex flex-col items-center justify-center space-y-3 border border-dashed border-white/5 rounded-3xl">
            <CheckCircle2 className="w-12 h-12 text-gold-500 stroke-[1.2]" />
            <div>
              <h3 className="text-base font-bold text-beige-200">Drink queue empty</h3>
              <p className="text-xs text-espresso-400 font-sans max-w-[200px] text-center mt-1">
                All mocktails and espresso drinks dispatched successfully.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex gap-6 pb-4 h-[calc(100vh-140px)] select-none">
            {orders.map((order) => {
              const minutesElapsed = getTimerMinutes(order.createdAt);
              const barItems = order.items?.filter((i: any) => i.targetQueue === 'BAR') || [];
              const kitchenItems = order.items?.filter((i: any) => i.targetQueue === 'KITCHEN') || [];
              const isUrgent = minutesElapsed >= 8; // Drinks are quicker! Urgent if >8 minutes!

              return (
                <div
                  key={order.id}
                  className={`w-80 rounded-[28px] border shrink-0 bg-espresso-900/60 shadow-xl overflow-hidden flex flex-col h-full ${
                    isUrgent ? 'border-gold-500/40 bg-gold-500/[0.02]' : 'border-white/10'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    className={`p-4 border-b border-white/5 flex items-center justify-between ${
                      isUrgent ? 'bg-gold-500/10' : 'bg-white/5'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-xl font-bold font-mono tracking-tight text-gold-500">
                          {order.orderNumber}
                        </h3>
                        <span className="text-[10px] font-bold bg-white/10 text-beige-300 px-2 py-0.5 rounded">
                          Table {order.tableNumber}
                        </span>
                      </div>
                      <p className="text-[10px] text-espresso-450 font-sans mt-0.5">
                        {order.customer?.name || 'Guest'}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold font-mono text-espresso-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{minutesElapsed}m</span>
                    </div>
                  </div>

                  {/* Card Items Container */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 divide-y divide-white/5">
                    {/* Drinks Queue items */}
                    <div className="space-y-3">
                      <span className="text-[9px] uppercase font-black tracking-widest text-gold-500 block">
                        Drinks Queue (Bartender Mixer)
                      </span>

                      {barItems.map((item: any) => {
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
                                    <span key={add.name} className="text-[8px] bg-white/5 text-gold-500/80 font-bold px-1.5 py-0.5 rounded border border-white/5">
                                      {add.name}
                                    </span>
                                  ))}
                                </div>
                              )}
                              {item.notes && (
                                <p className="text-[10px] font-sans text-gold-500 italic font-semibold">
                                  * "{item.notes}"
                                </p>
                              )}
                            </div>

                            {/* Status Control */}
                            <div className="flex flex-col gap-1.5 shrink-0 self-start">
                              {!isReady && !isPreparing && (
                                <button
                                  onClick={() => handleUpdateItemStatus(order.id, item.id, 'PREPARING')}
                                  className="p-1.5 bg-white/5 hover:bg-gold-500/10 text-espresso-400 hover:text-gold-500 border border-white/5 rounded-lg smooth-transition cursor-pointer"
                                  title="Prepare Drink"
                                >
                                  <Play className="w-3.5 h-3.5" />
                                </button>
                              )}
                              {isPreparing && (
                                <button
                                  onClick={() => handleUpdateItemStatus(order.id, item.id, 'READY')}
                                  className="p-1.5 bg-gold-500/10 border border-gold-500/25 text-gold-500 hover:bg-sage-500/10 hover:text-sage-500 rounded-lg smooth-transition cursor-pointer animate-pulse"
                                  title="Finish Drink"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                </button>
                              )}
                              {isReady && (
                                <span className="text-[9px] uppercase tracking-wider font-extrabold text-sage-500 bg-sage-500/10 border border-sage-500/25 px-2 py-1 rounded">
                                  Ready
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Muted food items context */}
                    {kitchenItems.length > 0 && (
                      <div className="pt-3 space-y-2">
                        <span className="text-[9px] uppercase font-black tracking-widest text-espresso-500 block">
                          Accompanying food items
                        </span>
                        {kitchenItems.map((item: any) => (
                          <div key={item.id} className="flex justify-between items-center text-xs text-espresso-500">
                            <span>{item.quantity}x {item.menuItem?.name}</span>
                            <span className="text-[8px] bg-white/5 text-espresso-550 px-1 rounded">
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Order instructions */}
                    {order.notes && (
                      <div className="pt-3">
                        <span className="text-[8px] uppercase tracking-widest font-black text-gold-500 block mb-1">
                          Bartender Notes
                        </span>
                        <p className="text-xs text-beige-300 italic font-medium leading-relaxed bg-white/5 p-2 rounded-xl border border-white/5">
                          "{order.notes}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Card Footer Overall Control */}
                  <div className="p-4 bg-white/5 border-t border-white/5 space-y-2">
                    {/* If only drinks are pending, give quick complete */}
                    {order.status === 'READY' ? (
                      <button
                        onClick={() => handleUpdateOrderStatus(order.id, 'SERVED')}
                        className="w-full bg-gold-500 hover:bg-gold-600 text-espresso-950 py-3 rounded-xl font-black text-xs tracking-wider uppercase smooth-transition cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        Drink Dispatched
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <div className="text-center py-2">
                        <span className="text-[10px] uppercase font-bold text-espresso-400 font-sans tracking-widest block">
                          Drinks Status: {order.status}
                        </span>
                      </div>
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
