import React, { useState } from 'react';
import { CalendarDays, Dog, User, Phone, Clock, Scissors } from 'lucide-react';

export default function Booking() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    dogName: '',
    service: 'Daycare',
    date: '',
    time: '',
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.dogName || !form.date || !form.time) return alert('Please complete all fields.');
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Book your pup’s day</h2>
          <p className="mt-3 text-slate-600">Reserve daycare or grooming online in under a minute.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-100">
            <div className="grid gap-4">
              <label className="block">
                <span className="text-sm font-medium text-slate-700 flex items-center gap-2"><User className="h-4 w-4 text-rose-500" /> Your name</span>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-200"
                  placeholder="Alex Rivera"
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700 flex items-center gap-2"><Phone className="h-4 w-4 text-rose-500" /> Phone</span>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-200"
                  placeholder="(718) 555-1234"
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700 flex items-center gap-2"><Dog className="h-4 w-4 text-rose-500" /> Dog’s name</span>
                <input
                  name="dogName"
                  type="text"
                  value={form.dogName}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-200"
                  placeholder="Luna"
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700 flex items-center gap-2"><Scissors className="h-4 w-4 text-rose-500" /> Service</span>
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-200"
                >
                  <option>Daycare</option>
                  <option>Full Groom</option>
                  <option>Bath & Brush</option>
                  <option>Nail Trim</option>
                  <option>Puppy Playdate</option>
                </select>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700 flex items-center gap-2"><CalendarDays className="h-4 w-4 text-rose-500" /> Date</span>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={onChange}
                    className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-200"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700 flex items-center gap-2"><Clock className="h-4 w-4 text-rose-500" /> Time</span>
                  <input
                    name="time"
                    type="time"
                    value={form.time}
                    onChange={onChange}
                    className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-200"
                    required
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-rose-500 text-white px-6 py-3 font-semibold shadow-sm hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-300 disabled:opacity-60"
              >
                {loading ? 'Booking…' : 'Reserve Spot'}
              </button>
              <p className="text-xs text-slate-500">By booking you agree to our vaccination and safety policies.</p>
            </div>
          </form>

          <div className="rounded-2xl bg-rose-50/60 p-6 md:p-8 border border-rose-100">
            {!submitted ? (
              <div>
                <h3 className="text-xl font-semibold text-slate-900">What to expect</h3>
                <ul className="mt-4 space-y-3 text-slate-700 text-sm">
                  <li>• Instant confirmation via SMS</li>
                  <li>• New clients: quick temperament check on arrival</li>
                  <li>• Free first-day photo update</li>
                </ul>
                <div className="mt-6 rounded-xl bg-white p-4 border border-slate-100">
                  <p className="text-sm text-slate-700">
                    Prefer to book by phone? Call us at <a className="font-semibold text-rose-600" href="tel:+17185551234">(718) 555-1234</a>.
                  </p>
                  <p className="text-xs text-slate-500 mt-2">Visit us: 123 Atlantic Ave, Brooklyn, NY</p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-emerald-600"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">You’re all set!</h3>
                <p className="mt-2 text-slate-600 text-sm">We’ve received your request for {form.service} on {form.date} at {form.time}. We’ll text {form.phone} to confirm.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-medium text-rose-600">Make another booking</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
