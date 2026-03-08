import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const ProductQuality = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nutrients = [
    { tamilName: "கம்பு", englishName: "Pearl Millet", data: [{ label: "Protein", value: 70, color: "bg-[var(--color-primary-green)]" }, { label: "Iron", value: 85, color: "bg-[var(--color-millet-brown)]" }] },
    { tamilName: "தினை", englishName: "Foxtail Millet", data: [{ label: "Protein", value: 65, color: "bg-[var(--color-primary-green)]" }, { label: "Fiber", value: 75, color: "bg-[var(--color-accent-gold)]" }] },
    { tamilName: "குதிரைவாலி", englishName: "Barnyard Millet", data: [{ label: "Fiber", value: 80, color: "bg-[var(--color-accent-gold)]" }, { label: "Iron", value: 70, color: "bg-[var(--color-millet-brown)]" }] },
    { tamilName: "வரகு", englishName: "Kodo Millet", data: [{ label: "Antioxidants", value: 85, color: "bg-purple-500" }, { label: "Fiber", value: 75, color: "bg-[var(--color-accent-gold)]" }] },
    { tamilName: "பனி வரகு", englishName: "Proso Millet", data: [{ label: "Protein", value: 80, color: "bg-[var(--color-primary-green)]" }, { label: "Minerals", value: 70, color: "bg-blue-500" }] },
    { tamilName: "கேப்பை", englishName: "Ragi", data: [{ label: "Calcium", value: 90, color: "bg-red-500" }, { label: "Fiber", value: 85, color: "bg-[var(--color-accent-gold)]" }] },
    { tamilName: "கருப்புக்கவுனி அரிசி", englishName: "Black Kavuni Rice", data: [{ label: "Antioxidants", value: 95, color: "bg-gray-800" }, { label: "Iron", value: 80, color: "bg-[var(--color-millet-brown)]" }] },
    { tamilName: "மாப்பிள்ளை சம்பா அரிசி", englishName: "Mappillai Samba Rice", data: [{ label: "Iron", value: 85, color: "bg-red-700" }, { label: "Zinc", value: 75, color: "bg-yellow-600" }] }
  ];

  return (
    <section id="product-quality" className="py-24 bg-[var(--color-cream-bg)]">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-normal">About Our Products Quality <br/><span className="text-2xl md:text-3xl text-[var(--color-primary-green)]">எங்கள் தயாரிப்புகளின் தரம் குறித்து</span></h2>
          <div className="w-24 h-1 bg-[var(--color-millet-brown)] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[var(--color-millet-brown)] max-w-4xl mx-auto mb-2 font-semibold">நமது பாரம்பரிய சிறுதானியங்கள் மற்றும் அரிசி வகைகளில் உள்ள சத்துக்கள் உங்கள் நோயெதிர்ப்பு சக்தி மற்றும் உடல் ஆரோக்கியத்தை மேம்படுத்தும்.</p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">Our traditional millets and rice varieties are packed with essential nutrients to boost your immunity and overall health.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nutrients.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 transition-transform hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-1 text-center text-[#333] drop-shadow-sm">{item.tamilName}</h3>
                <h4 className="text-sm font-semibold mb-4 text-center text-[var(--color-primary-green)] border-b pb-3">{item.englishName}</h4>
              </div>
              <div className="space-y-4">
                {item.data.map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-700">{stat.label}</span>
                      <span className="text-xs font-bold text-gray-500">{stat.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 max-h-2.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${stat.value}%` } : { width: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + (i * 0.2) }}
                        className={`h-full rounded-full ${stat.color}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
