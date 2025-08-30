import React from 'react';
import { Instagram, MapPin, Phone, PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 items-start">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-rose-500 flex items-center justify-center">
              <PawPrint className="h-5 w-5 text-white" />
            </div>
            <span className="font-extrabold text-lg text-slate-900">Paws & Play</span>
          </div>
          <p className="mt-3 text-sm text-slate-600 max-w-xs">Loving daycare and stress-free grooming for Brooklyn pups.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Visit us</h4>
          <p className="mt-2 text-sm text-slate-700 flex items-start gap-2"><MapPin className="h-4 w-4 text-rose-500 mt-0.5" /> 123 Atlantic Ave, Brooklyn, NY 11201</p>
          <p className="mt-1 text-sm text-slate-700 flex items-center gap-2"><Phone className="h-4 w-4 text-rose-500" /> <a href="tel:+17185551234" className="hover:underline">(718) 555-1234</a></p>
          <p className="mt-1 text-sm text-slate-500">Mon–Sat • 7:30am–7:00pm</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Follow</h4>
          <a
            href="#"
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-100 px-3 py-2 text-sm text-rose-700 hover:bg-rose-100"
          >
            <Instagram className="h-4 w-4" /> @pawsandplaybk
          </a>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Paws & Play. All rights reserved.
      </div>
    </footer>
  );
}
