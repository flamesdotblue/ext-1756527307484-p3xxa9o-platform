import React from 'react';
import { PawPrint, Phone } from 'lucide-react';

export default function Hero() {
  const handleScrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      </div>
      <div className="container mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-sm font-medium">
            <PawPrint className="h-4 w-4" /> Brooklyn’s Happiest Dog Daycare
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Paws & Play
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-xl">
            Daycare, grooming, and big-time tail wags. Safe, loving care for your best friend in the heart of Brooklyn.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={handleScrollToBooking}
              className="inline-flex items-center justify-center rounded-xl bg-rose-500 text-white px-6 py-3 font-semibold shadow-sm hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-300 transition"
            >
              Book Online
            </button>
            <a
              href="tel:+17185551234"
              className="inline-flex items-center gap-2 rounded-xl bg-white/80 backdrop-blur px-5 py-3 font-semibold text-slate-800 shadow hover:shadow-md border border-slate-200"
            >
              <Phone className="h-5 w-5 text-rose-500" /> (718) 555-1234
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-500">Open Mon–Sat • 7:30am–7:00pm</p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop"
            alt="Happy golden retriever at daycare"
            className="w-full h-[420px] md:h-[520px] object-cover rounded-3xl shadow-xl"
            loading="eager"
          />
          <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur rounded-2xl shadow p-4 flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-100">
              <PawPrint className="h-5 w-5 text-emerald-600" />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-slate-800">Cage-free play</p>
              <p className="text-slate-500">Supervised by loving pros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
