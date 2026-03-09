import React from 'react';
import { motion } from 'framer-motion';
import { Award, HeartPulse, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Award className="w-16 h-16 text-[var(--color-primary-green)] mb-6 mx-auto" />,
      title: t('features.1.title'),
      desc: t('features.1.desc')
    },
    {
      icon: <HeartPulse className="w-16 h-16 text-[var(--color-primary-green)] mb-6 mx-auto" />,
      title: t('features.2.title'),
      desc: t('features.2.desc')
    },
    {
      icon: <Truck className="w-16 h-16 text-[var(--color-primary-green)] mb-6 mx-auto" />,
      title: t('features.3.title'),
      desc: t('features.3.desc')
    }
  ];

  return (
    <section id="why-choose" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-[#333]"
          >
            {t('features.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('features.subtitle') || "Virudhu Millets provides high-quality traditional millets sourced from trusted farmers and promotes healthy living."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(76, 175, 80, 0.2), 0 10px 10px -5px rgba(76, 175, 80, 0.1)' }}
              className="bg-[var(--color-cream-bg)] p-10 rounded-3xl text-center shadow-lg transition-all duration-300 border-b-4 border-transparent hover:border-[var(--color-primary-green)]"
            >
              <div className="transform transition-transform duration-500 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
