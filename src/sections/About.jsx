import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();
  
  const team = [
    { name: "Ramarajan", role: t('about.roles.founder'), phone: "+91 98765 43210", icon: "👨🏽‍💼" },
    { name: "Karthika", role: t('about.roles.md'), phone: "+91 98765 43211", icon: "👩🏽‍💼" },
    { name: "Murugan", role: t('about.roles.manager'), phone: "+91 98765 43212", icon: "👨🏽‍💻" },
    { name: "Devi", role: t('about.roles.milletsManager'), phone: "+91 98765 43213", icon: "👩🏽‍🌾" }
  ];

  return (
    <section id="about-us" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-[var(--color-accent-gold)] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('about.desc1')}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#333]">{t('about.ourStory')}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.storyDesc1')}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="flex justify-center md:justify-end w-full">
              <div className="rounded-3xl shadow-2xl max-w-sm w-full bg-white p-6 border-4 border-[var(--color-cream-bg)] overflow-hidden flex items-center justify-center">
                <img 
                  src="/virudhu-millets/images/Logo2.png" 
                  alt="Virudhu Millets Store Logo" 
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold">{t('about.meetTeam')}</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-[var(--color-cream-bg)] p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-5xl shadow-inner mb-6 transform transition-transform duration-500 hover:rotate-12">
                {member.icon}
              </div>
              <h4 className="text-2xl font-bold text-[#333] mb-1">{member.name}</h4>
              <p className="text-[var(--color-primary-green)] font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 bg-white py-2 rounded-full text-sm font-medium">{member.phone}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
