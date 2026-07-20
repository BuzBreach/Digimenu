'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Clock, RefreshCw, XCircle } from 'lucide-react';
import { formatCurrency } from '../../../utils/currency';
import { apiUrl } from '../../../utils/backendUrl';

type PaymentState = {
  status: 'PENDING' | 'PAID' | 'FAILED' | 'CANCELLED' | string;
  order?: any;
  payment?: any;
  error?: string;
};

export default function PaymentReturnPage() {
  const [merchantOrderId, setMerchantOrderId] = useState('');
  const [orderId, setOrderId] = useState('');
  const [state, setState] = useState<PaymentState>({ status: 'PENDING' });
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setMerchantOrderId(params.get('merchantOrderId') || '');
    setOrderId(params.get('orderId') || '');
  }, []);

  const checkStatus = async () => {
    if (!merchantOrderId) return;
    setChecking(true);
    try {
      const res = await fetch(apiUrl(`/api/payments/phonepe/status/${encodeURIComponent(merchantOrderId)}`));
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Unable to check payment status.');
      setState({ status: data.status, order: data.order, payment: data.payment });
    } catch (error: any) {
      setState((current) => ({ ...current, error: error.message || 'Unable to check payment status.' }));
    } finally {
      setChecking(false);
    }
  };

  useEffect(() => {
    if (!merchantOrderId) return;
    checkStatus();
    const timer = window.setInterval(checkStatus, 4000);
    return () => window.clearInterval(timer);
  }, [merchantOrderId]);

  const paid = state.status === 'PAID';
  const failed = state.status === 'FAILED' || state.status === 'CANCELLED';
  const Icon = paid ? CheckCircle2 : failed ? XCircle : Clock;

  return (
    <main className="min-h-screen bg-beige-50 text-espresso-950 flex items-center justify-center p-5">
      <section className="w-full max-w-md rounded-[2rem] border border-beige-300/70 bg-white p-6 shadow-xl shadow-espresso-950/10 text-center space-y-5">
        <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${
          paid ? 'bg-sage-500/10 text-sage-500' : failed ? 'bg-terracotta-500/10 text-terracotta-500' : 'bg-beige-200 text-espresso-700'
        }`}>
          <Icon className="w-8 h-8" />
        </div>

        <div>
          <h1 className="text-2xl font-serif-elegant font-bold">
            {paid ? 'Payment Confirmed' : failed ? 'Payment Not Completed' : 'Checking Payment'}
          </h1>
          <p className="text-sm text-espresso-600 mt-1">
            {paid
              ? 'PhonePe confirmed this payment and the order is now active.'
              : failed
              ? 'The payment was not completed. You can retry from the basket or pay at the counter.'
              : 'Please wait while the POS checks PhonePe confirmation.'}
          </p>
        </div>

        {state.order && (
          <div className="rounded-2xl bg-beige-100 p-4 text-left space-y-2">
            <div className="flex justify-between text-sm font-bold">
              <span>{state.order.orderNumber}</span>
              <span>{formatCurrency(state.order.finalPrice)}</span>
            </div>
            <div className="flex justify-between text-xs text-espresso-600">
              <span>Table {state.order.tableNumber}</span>
              <span>{state.order.paymentStatus}</span>
            </div>
          </div>
        )}

        {state.error && (
          <div className="rounded-2xl border border-terracotta-500/20 bg-terracotta-500/10 px-3 py-2 text-xs font-semibold text-terracotta-600">
            {state.error}
          </div>
        )}

        <div className="grid gap-2">
          <button
            onClick={checkStatus}
            disabled={checking || !merchantOrderId}
            className="w-full rounded-full bg-espresso-900 text-beige-100 py-3 text-sm font-extrabold disabled:bg-espresso-900/60 flex items-center justify-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${checking ? 'animate-spin' : ''}`} />
            Refresh Payment Status
          </button>
          <Link
            href={orderId ? `/?order=${encodeURIComponent(orderId)}` : '/'}
            className="w-full rounded-full bg-beige-100 text-espresso-900 py-3 text-sm font-extrabold"
          >
            Back to Menu
          </Link>
        </div>
      </section>
    </main>
  );
}
