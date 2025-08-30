import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-emerald-50 text-slate-800">
      <Hero />
      <main>
        <Services />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
