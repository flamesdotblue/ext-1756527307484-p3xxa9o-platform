import React from 'react';

const photos = [
  'https://images.unsplash.com/photo-1558944351-c7b3b80f34d2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558944354-11f82f5f5a13?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547483238-2aa76a7d6a8a?q=80&w=1600&auto=format&fit=crop',
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24" id="gallery">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Big smiles. Bigger zoomies.</h2>
            <p className="mt-3 text-slate-600">A peek into a typical day at Paws & Play.</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl">
              <img
                src={src}
                alt="Happy dog enjoying daycare and grooming"
                className="h-44 md:h-56 w-full object-cover hover:scale-105 transition"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
