'use client';

import React, { useEffect, useState } from 'react';
import { getSocket } from '../../utils/socket';
import { ReceiptText, Printer, RefreshCw, XCircle, CheckCircle } from 'lucide-react';
import { formatCurrency } from '../../utils/currency';

export default function BillingCounterPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);
  const [selectedBill, setSelectedBill] = useState<any | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(null);

  const getServerUrl = () => '';

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const accessToken = new URLSearchParams(window.location.search).get('access');
      if (accessToken) localStorage.setItem('niva_admin_token', accessToken);
      const token = accessToken || localStorage.getItem('niva_admin_token');
      const res = await fetch(`${getServerUrl()}/api/admin/orders`, {
        headers: { Authorization: `Bearer ${token || ''}` },
        cache: 'no-store',
      });
      if (!res.ok) throw new Error('Log in from Admin first, then open Billing.');
      const data = await res.json();
      setOrders(data);
      setLastSyncedAt(new Date());
      setError('');
    } catch (err: any) {
      setError(err.message || 'Billing counter could not connect.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
    const socket = getSocket();
    socket.on('order:new', fetchOrders);
    socket.on('order:updated', fetchOrders);
    return () => {
      socket.off('order:new', fetchOrders);
      socket.off('order:updated', fetchOrders);
    };
  }, []);

  const printBill = async (order: any) => {
    const token = localStorage.getItem('niva_admin_token');
    const res = await fetch(`${getServerUrl()}/api/orders/${order.id}/bill`, {
      headers: { Authorization: `Bearer ${token || ''}` },
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.error || 'Unable to load bill.');
      return;
    }
    setSelectedBill(data);
    setSelectedOrder(data.order);
    setTimeout(() => window.print(), 150);
  };

  const denyRefund = async (order: any) => {
    const token = localStorage.getItem('niva_admin_token');
    const res = await fetch(`${getServerUrl()}/api/admin/orders/${order.id}/refund`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token || ''}` },
    });
    const data = await res.json();
    if (!res.ok) alert(data.error || 'Refund update failed.');
    await fetchOrders();
  };

  const markAsCompleted = async (order: any) => {
    const token = localStorage.getItem('niva_admin_token');
    try {
      const res = await fetch(`${getServerUrl()}/api/admin/orders/${order.id}/status`, {
        method: 'PUT',
        headers: { 
          Authorization: `Bearer ${token || ''}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'SERVED' }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Failed to mark bill as paid/completed.');
        return;
      }
      await fetchOrders();
    } catch (err: any) {
      alert(err.message || 'Error marking bill as paid/completed.');
    }
  };

  const visibleOrders = orders.filter((order) => order.status !== 'CANCELLED');
  const formatAddedAt = (date: string) =>
    new Intl.DateTimeFormat(undefined, {
      hour: 'numeric',
      minute: '2-digit',
    }).format(new Date(date));

  return (
    <main className="min-h-screen bg-beige-100 text-espresso-950 p-4 md:p-8">
      <header className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 print:hidden">
        <div>
          <span className="text-[10px] uppercase tracking-widest font-extrabold text-gold-600">Local Billing Counter</span>
          <h1 className="text-3xl font-serif-elegant font-bold">Niva Bills & Receipts</h1>
        </div>
        <div className="flex flex-col sm:items-end gap-1">
          <button
            onClick={fetchOrders}
            disabled={loading}
            className="px-4 py-2 rounded-full bg-espresso-950 disabled:bg-espresso-950/60 text-beige-100 text-xs font-bold flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Syncing...' : 'Sync Orders'}
          </button>
          <span className="text-[10px] uppercase tracking-wider font-bold text-espresso-400">
            {lastSyncedAt ? `Last synced ${lastSyncedAt.toLocaleTimeString()}` : 'Waiting for sync'}
          </span>
        </div>
      </header>

      {error && <p className="max-w-6xl mx-auto mb-4 text-sm font-bold text-terracotta-600 print:hidden">{error}</p>}

      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <div className="bg-white rounded-2xl border border-beige-300/40 shadow-sm overflow-hidden print:hidden">
          <div className="p-5 border-b border-beige-200 flex items-center gap-2">
            <ReceiptText className="w-5 h-5" />
            <h2 className="text-sm font-black uppercase tracking-widest">Active Bills</h2>
          </div>
          <div className="divide-y divide-beige-100">
            {visibleOrders.map((order) => (
              <div key={order.id} className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <span className="font-mono text-sm font-black">{order.orderNumber}</span>
                  <p className="text-xs text-espresso-600">
                    Table {order.tableNumber} - {order.customer?.name || 'Guest'} - {formatCurrency(order.finalPrice)}
                  </p>
                  <p className="text-[10px] text-espresso-400 font-bold mt-0.5">
                    {order.items?.length || 0} item lines in one combined bill
                  </p>
                  {order.status === 'SERVED' && (
                    <p className="text-[10px] text-green-600 font-bold mt-1">✓ PAID & COMPLETED</p>
                  )}
                  {order.refundDeniedReason && (
                    <p className="text-[10px] text-terracotta-600 font-bold mt-1">{order.refundDeniedReason}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => printBill(order)} className="px-3 py-2 rounded-full bg-espresso-950 text-beige-100 text-xs font-bold flex items-center gap-1.5">
                    <Printer className="w-3.5 h-3.5" />
                    Print
                  </button>
                  <button 
                    onClick={() => markAsCompleted(order)} 
                    disabled={order.status === 'SERVED'}
                    className={`px-3 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                      order.status === 'SERVED' 
                        ? 'bg-green-100 text-green-600 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    {order.status === 'SERVED' ? 'Completed' : 'Mark Paid'}
                  </button>
                  <button onClick={() => denyRefund(order)} className="px-3 py-2 rounded-full bg-terracotta-500/10 text-terracotta-600 text-xs font-bold flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5" />
                    Deny Refund
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="bg-white rounded-2xl border border-beige-300/40 shadow-sm p-6 print:shadow-none print:border-0">
          <div id="bill-print-area">
            <h2 className="text-2xl font-serif-elegant font-bold">{selectedBill?.settings?.cafeName || 'Niva Cafe'}</h2>
            <p className="text-xs text-espresso-500 mb-4">{selectedBill?.settings?.address || selectedBill?.cafeName || 'Cafe, Bar & Kitchen'}</p>
            {selectedOrder ? (
              <div className="space-y-4 text-sm">
                <div className="border-y border-beige-300 py-3">
                  <p><strong>Order:</strong> {selectedOrder.orderNumber}</p>
                  <p><strong>Table:</strong> {selectedOrder.tableNumber}</p>
                  <p><strong>Customer:</strong> {selectedOrder.customer?.name || 'Guest'}</p>
                  <p><strong>Bill Type:</strong> Single combined table bill</p>
                </div>
                <div className="space-y-2">
                  {selectedOrder.items?.map((item: any) => (
                    <div key={item.id} className="border-b border-beige-100 pb-2">
                      <div className="flex justify-between gap-4">
                        <span>{item.quantity}x {item.menuItem?.name}</span>
                        <span>{formatCurrency(item.quantity * item.unitPrice)}</span>
                      </div>
                      <div className="flex justify-between gap-4 text-[10px] text-espresso-500 mt-0.5">
                        <span>Added {formatAddedAt(item.createdAt)}</span>
                        <span>{item.targetQueue}</span>
                      </div>
                      {item.notes && (
                        <p className="text-[10px] text-espresso-500 mt-0.5">Note: {item.notes}</p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="border-t border-beige-300 pt-3 space-y-1">
                  <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(selectedOrder.totalPrice)}</span></div>
                  <div className="flex justify-between"><span>{selectedBill?.gstLabel || 'GST'}</span><span>{formatCurrency(selectedOrder.tax)}</span></div>
                  <div className="flex justify-between text-lg font-black"><span>Total</span><span>{formatCurrency(selectedOrder.finalPrice)}</span></div>
                </div>
                <p className="text-center text-[10px] text-espresso-500 pt-3">{selectedBill?.settings?.billFooter || 'Thank you for dining with us.'}</p>
              </div>
            ) : (
              <p className="text-xs text-espresso-500">Select an order to preview and print the bill.</p>
            )}
          </div>
        </aside>
      </section>
    </main>
  );
}
