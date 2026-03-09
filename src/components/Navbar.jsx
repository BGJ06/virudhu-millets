import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.productQuality'), href: '#product-quality' },
    { name: t('navbar.healthyChoice'), href: '#healthy-choice' },
    { name: t('navbar.freshlyDelivered'), href: '#freshly-delivered' },
    { name: t('navbar.products'), href: '#products' },
    { name: t('navbar.aboutUs'), href: '#about-us' },
    { name: t('navbar.contact'), href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <img src="/virudhu-millets/images/Logo2.png" alt="Header Logo" className="w-12 h-12 object-contain rounded-full bg-white shadow-sm p-1" />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-[var(--color-primary-green)] tracking-wider">{t('navbar.title')}</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link text-sm uppercase tracking-wide">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-4 shadow-xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-gray-800 hover:text-[var(--color-primary-green)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
