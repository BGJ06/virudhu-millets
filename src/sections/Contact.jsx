import React from 'react';
import { motion } from 'framer-motion';
import { Headset, CheckCircle, Star, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  const supportBlocks = [
    { icon: <Headset className="w-10 h-10 text-[var(--color-primary-green)]" />, title: t('contact.support247') || "24/7 Support", desc: t('contact.supportDesc') || "Always here for you." },
    { icon: <CheckCircle className="w-10 h-10 text-[var(--color-accent-gold)]" />, title: t('contact.satisfaction') || "100% Satisfaction", desc: t('contact.satisfactionDesc') || "Guaranteed quality." },
    { icon: <Star className="w-10 h-10 text-[var(--color-millet-brown)]" />, title: t('contact.starService') || "5 Star Service", desc: t('contact.starDesc') || "Excellence delivered." },
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--color-cream-bg)]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <div className="w-24 h-1 bg-[var(--color-primary-green)] mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {supportBlocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 hover:animate-bounce">
                {block.icon}
              </div>
              <h3 className="text-xl font-bold text-[#333] mb-2">{block.title}</h3>
              <p className="text-gray-600 font-medium">{block.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-[#333]">{t('contact.helpTitle')}</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            {t('contact.helpDesc')}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <a href="tel:+918747078268" className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--color-primary-green)] text-white p-10 h-full rounded-3xl shadow-xl flex flex-col items-center text-center group cursor-pointer"
            >
              <Mail className="w-16 h-16 mb-6 opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:-translate-y-2" />
              <h3 className="text-3xl font-bold mb-4">{t('contact.emailUs')}</h3>
              <p className="text-lg opacity-90">contact@virudhumillets.com</p>
              <p className="text-lg opacity-90 mt-2 font-bold hover:underline">{t('contact.phone')}</p>
            </motion.div>
          </a>
          
          <a 
            href="https://maps.app.goo.gl/DW1kkemqwQGVdeym9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/2"
          >
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-[#333] p-10 h-full rounded-3xl shadow-xl border-t-8 border-[var(--color-millet-brown)] flex flex-col items-center text-center group cursor-pointer"
            >
              <MapPin className="w-16 h-16 mb-6 text-[var(--color-millet-brown)] group-hover:text-[var(--color-primary-green)] transition-colors transform group-hover:-translate-y-2" />
              <h3 className="text-3xl font-bold mb-4">{t('contact.visitStore')}</h3>
              <p className="text-lg text-gray-600 uppercase tracking-wider font-semibold">
                {t('contact.addressLine1')}<br />
                {t('contact.addressLine2')}
              </p>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};
