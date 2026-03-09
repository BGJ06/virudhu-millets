import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <button
        onClick={toggleLanguage}
        className="group relative flex items-center justify-center p-1 rounded-full bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-[var(--color-primary-green)] outline-none focus:ring-4 focus:ring-[var(--color-primary-green)] focus:ring-opacity-50 overflow-hidden"
        aria-label="Toggle Language"
        title={language === 'ta' ? "Switch to English" : "Switch to Tamil"}
      >
        <span 
          className={`px-4 py-2 rounded-full font-bold text-sm transition-colors duration-300 ${language === 'ta' ? 'bg-[var(--color-primary-green)] text-white' : 'text-gray-600 bg-transparent hover:text-[var(--color-primary-green)]'}`}
        >
          தமிழ்
        </span>
        <span 
          className={`px-4 py-2 rounded-full font-bold text-sm transition-colors duration-300 ${language === 'en' ? 'bg-[var(--color-primary-green)] text-white' : 'text-gray-600 bg-transparent hover:text-[var(--color-primary-green)]'}`}
        >
          EN
        </span>
      </button>
    </div>
  );
};
