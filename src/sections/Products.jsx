import React from 'react';
import { motion } from 'framer-motion';

export const Products = () => {
  // Mapping the images the user provided
  const products = [
    {
      id: 1, tamilName: "கம்பு", englishName: "Pearl Millet",
      desc: "Iron-rich excellent Pearl Millet grains.",
      mrp1kg: 60, mrpHalfKg: 32, resale1kg: 50, resaleHalfKg: 26, img: "/images/Pearl Millet.jpeg" 
    },
    {
      id: 2, tamilName: "தினை", englishName: "Foxtail Millet",
      desc: "Healthy cardiac-friendly Thinai.",
      mrp1kg: 80, mrpHalfKg: 42, resale1kg: 70, resaleHalfKg: 36, img: "/images/Foxtail Millet.jpeg" 
    },
    {
      id: 3, tamilName: "குதிரைவாலி", englishName: "Barnyard Millet",
      desc: "High fiber Kuthiraivali, great for diets.",
      mrp1kg: 90, mrpHalfKg: 48, resale1kg: 80, resaleHalfKg: 42, img: "/images/Barnyard Millet.jpeg" 
    },
    {
      id: 4, tamilName: "வரகு", englishName: "Kodo Millet",
      desc: "Antioxidant-rich Varagu for better health.",
      mrp1kg: 85, mrpHalfKg: 45, resale1kg: 75, resaleHalfKg: 39, img: "/images/Kodo Millet.jpeg" 
    },
    {
      id: 5, tamilName: "பனி வரகு", englishName: "Proso Millet",
      desc: "Rich in protein and low glycemic index.",
      mrp1kg: 85, mrpHalfKg: 45, resale1kg: 75, resaleHalfKg: 39, img: "/images/Proso Millet.jpeg" 
    },
    {
      id: 6, tamilName: "கேப்பை", englishName: "Ragi / Finger Millet",
      desc: "Calcium-rich excellent Ragi grains.",
      mrp1kg: 65, mrpHalfKg: 35, resale1kg: 55, resaleHalfKg: 29, img: "/images/Ragi.jpeg" 
    },
    {
      id: 7, tamilName: "கருப்புக்கவுனி அரிசி", englishName: "Black Kavuni Rice",
      desc: "Rich in antioxidants and high nutritional value.",
      mrp1kg: 150, mrpHalfKg: 80, resale1kg: 130, resaleHalfKg: 70, img: "/images/Black Kavuni Rice.jpeg" 
    },
    {
      id: 8, tamilName: "மாப்பிள்ளை சம்பா அரிசி", englishName: "Mappillai Samba Rice",
      desc: "Traditional red rice for immunity and strength.",
      mrp1kg: 140, mrpHalfKg: 75, resale1kg: 120, resaleHalfKg: 65, img: "/images/Mappillai Samba Rice.jpeg" 
    }
  ];

  return (
    <section id="products" className="py-24 bg-[var(--color-cream-bg)]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-[var(--color-primary-green)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100 flex items-center justify-center p-4">
                <img 
                  src={product.img} 
                  alt={product.englishName}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500 rounded"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-1 text-[#333] drop-shadow-sm">{product.tamilName}</h3>
                <h4 className="text-md font-semibold mb-3 text-[var(--color-primary-green)]">{product.englishName}</h4>
                <p className="text-gray-600 mb-4 text-sm flex-grow">{product.desc}</p>
                
                <div className="bg-[var(--color-cream-bg)] p-4 rounded-xl mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold text-gray-700">MRP:</span>
                    <span>₹{product.mrp1kg} / 1kg | ₹{product.mrpHalfKg} / ½kg</span>
                  </div>
                  <div className="flex justify-between text-sm text-[var(--color-primary-green)] font-semibold">
                    <span>Resale:</span>
                    <span>₹{product.resale1kg} / 1kg | ₹{product.resaleHalfKg} / ½kg</span>
                  </div>
                </div>

                <a 
                  href="#contact"
                  className="block w-full text-center bg-[var(--color-primary-green)] hover:bg-[var(--color-primary-green-dark)] text-white py-3 rounded-xl font-bold transition-colors duration-300 ripple overflow-hidden relative shadow-md hover:shadow-lg"
                >
                  <span className="relative z-10">To Order</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
