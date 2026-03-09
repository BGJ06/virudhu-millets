import React, { useState, useEffect } from 'react';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Reviews } from './sections/Reviews';
import { ProductQuality } from './sections/ProductQuality';
import { HealthyChoice } from './sections/HealthyChoice';
import { FreshlyDelivered } from './sections/FreshlyDelivered';
import { Products } from './sections/Products';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {
  return (
    <div className="relative min-h-screen text-[var(--color-dark-text)] overflow-hidden">
      <div className="grains-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Reviews />
        <ProductQuality />
        <HealthyChoice />
        <FreshlyDelivered />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
      <LanguageSwitcher />
    </div>
  );
}

export default App;
