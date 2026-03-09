import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 border-t-4 border-[var(--color-primary-green)] text-center relative overflow-hidden">
      
      {/* Decorative logo watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <h1 className="text-[10rem] font-bold whitespace-nowrap">VIRUDHU</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12"
        >
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-[var(--color-primary-green)] mb-2 tracking-wide">{t('footer.brandName') || "VIRUDHU MILLETS"}</h3>
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0 leading-relaxed italic border-l-2 border-[var(--color-primary-green)] pl-4">
              {t('footer.tagline') || "\"Healthy Traditional Grains for a Better Life\""}
            </p>
          </div>

          
          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="font-bold text-lg mb-4 text-[var(--color-primary-green)] uppercase tracking-wider border-b border-gray-700 pb-2">
              {t('footer.coop') || "A1382 Virudhunagar District Consumer Cooperative Wholesale Stores Ltd"}
            </p>
            <ul className="text-gray-400 space-y-3">
              <li className="flex items-center justify-center md:justify-end">
                <a href="https://maps.app.goo.gl/DW1kkemqwQGVdeym9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
                  <span className="bg-gray-800 p-2 rounded-full mr-3 text-xs"><i className="fa-solid fa-location-dot"></i></span>
                  {t('footer.address') || "165 Aruppukotai Road, Allampatti, Virudhunagar – 626001"}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <a href="tel:+918747078268" className="hover:text-white transition-colors flex items-center font-bold">
                  <span className="bg-gray-800 p-2 rounded-full mr-3 text-xs"><i className="fa-solid fa-phone"></i></span>
                  {t('footer.phone') || "+91 87470 78268"}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <a href="mailto:contact@virudhumillets.com" className="hover:text-white transition-colors flex items-center">
                  <span className="bg-gray-800 p-2 rounded-full mr-3 text-xs"><i className="fa-solid fa-envelope"></i></span>
                  {t('footer.email') || "contact@virudhumillets.com"}
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        
        {/* Social Icons Placeholder */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center flex-wrap gap-4 mt-16 mb-10"
        >
            <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-[var(--color-primary-green)] rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-2"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-[var(--color-primary-green)] rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-2"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-[var(--color-primary-green)] rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-2"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://wa.me/918747078268" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 hover:bg-[var(--color-primary-green)] rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-2"><i className="fa-brands fa-whatsapp flex text-2xl"></i></a>
        </motion.div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} {t('footer.copyright') || "Virudhu Millets. All Rights Reserved. Crafted by weBros."}</p>
        </div>
      </div>
    </footer>
  );
};
