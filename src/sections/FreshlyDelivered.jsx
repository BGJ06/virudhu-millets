import React from 'react';
import { motion } from 'framer-motion';
import { Home, Package, Percent } from 'lucide-react';

export const FreshlyDelivered = () => {
  const cards = [
    {
      icon: <Home className="w-12 h-12 text-[var(--color-primary-green)]" />,
      title: "Home Delivery",
      desc: "Doorstep fast service directly to your home."
    },
    {
      icon: <Package className="w-12 h-12 text-[var(--color-millet-brown)]" />,
      title: "Wholesale Stock",
      desc: "Bulk supply availability for stores and restaurants."
    },
    {
      icon: <Percent className="w-12 h-12 text-[var(--color-accent-gold)]" />,
      title: "Bulk Discounts",
      desc: "Special discounted price for bulk and large orders."
    }
  ];

  return (
    <section id="freshly-delivered" className="py-24 bg-[var(--color-cream-bg)] text-center">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Freshly Delivered</h2>
          <div className="w-24 h-1 bg-[var(--color-millet-brown)] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We ensure farm-to-table freshness with every order.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-white p-10 rounded-3xl shadow-lg border-b-4 border-transparent hover:border-[var(--color-millet-brown)] transition-all duration-300 group"
            >
              <div className="w-24 h-24 mx-auto bg-[var(--color-cream-bg)] rounded-full flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div className="transform transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#333] mb-3">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
