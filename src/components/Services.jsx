import React from 'react';
import { Scissors, Bath, Bone, Heart } from 'lucide-react';

const services = [
  {
    title: 'Daycare Playpacks',
    desc: 'Small, supervised groups for safe socialization and all-day fun.',
    icon: Bone,
    color: 'bg-sky-100 text-sky-700',
  },
  {
    title: 'Grooming & Spa',
    desc: 'Baths, haircuts, de-shedding, and nail trims—fluffy and fabulous.',
    icon: Scissors,
    color: 'bg-rose-100 text-rose-700',
  },
  {
    title: 'Puppy Playdates',
    desc: 'Gentle introductions led by trainers to build confidence early.',
    icon: Heart,
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    title: 'Fresh & Clean',
    desc: 'Blueberry facials, teeth brushing, and spa add-ons for sparkle.',
    icon: Bath,
    color: 'bg-violet-100 text-violet-700',
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24" id="services">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Tail-wagging services</h2>
          <p className="mt-3 text-slate-600">
            Designed for happy pups and peace of mind. Flexible options for Brooklyn schedules.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl bg-white shadow-sm border border-slate-100 p-6 hover:shadow-md transition">
              <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${s.color} mb-4`}>
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
              <div className="mt-4 text-sm text-rose-600 font-medium opacity-0 group-hover:opacity-100 transition">Popular choice →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
