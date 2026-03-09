import React, { createContext, useState, useContext, useEffect } from 'react';
import en from '../translations/en';
import ta from '../translations/ta';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default language is Tamil ('ta') as requested
  const [language, setLanguage] = useState('ta');

  const translations = {
    en,
    ta,
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'ta' ? 'en' : 'ta'));
  };

  const t = (key) => {
    const keys = key.split('.');
    let result = translations[language];
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key; // return key if translation is missing
      }
    }
    return result;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
