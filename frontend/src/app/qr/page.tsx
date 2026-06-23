'use client';

import React, { useMemo, useState } from 'react';
import { QrCode, Printer } from 'lucide-react';

export default function QRMenuPage() {
  const [tables, setTables] = useState(20);
  const host = typeof window === 'undefined' ? 'localhost' : window.location.hostname;
  const serverUrl = `http://${host}:5000`;

  const tableList = useMemo(() => Array.from({ length: tables }, (_, index) => index + 1), [tables]);

  return (
    <main className="min-h-screen bg-beige-100 p-4 md:p-8 text-espresso-950">
      <header className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 print:hidden">
        <div>
          <span className="text-[10px] uppercase tracking-widest font-extrabold text-gold-600">QR Table Menu</span>
          <h1 className="text-3xl font-serif-elegant font-bold">Printable Table Codes</h1>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="number"
            min={1}
            max={80}
            value={tables}
            onChange={(event) => setTables(Math.max(1, Math.min(80, Number(event.target.value) || 1)))}
            className="w-24 px-3 py-2 rounded-xl border border-beige-300 bg-white text-sm font-bold"
          />
          <button onClick={() => window.print()} className="px-4 py-2 rounded-full bg-espresso-950 text-beige-100 text-xs font-bold flex items-center gap-2">
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tableList.map((table) => {
          const url = `http://${host}:3000/?table=${table}`;
          return (
            <article key={table} className="bg-white rounded-2xl border border-beige-300/40 shadow-sm p-5 text-center break-inside-avoid">
              <div className="flex justify-center mb-3 text-espresso-900">
                <QrCode className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif-elegant font-bold">Table {table}</h2>
              <img
                src={`${serverUrl}/api/qr/table/${table}`}
                alt={`QR code for table ${table}`}
                className="w-48 h-48 mx-auto my-4 border border-beige-200 rounded-xl"
              />
              <p className="text-[10px] font-mono text-espresso-500 break-all">{url}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
