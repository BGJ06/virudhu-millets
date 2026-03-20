import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ProductModal from '../components/ProductModal';

export const Products = () => {
  const { t, language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Mapping the images the user provided
  const products = [
    {
      id: 1, nameKey: "pearlMillet",
      mrp1kg: 60, mrpHalfKg: 30, resale1kg: 56, resaleHalfKg: 28, img: "/virudhu-millets/images/Pearl Millet.jpeg" 
    },
    {
      id: 2, nameKey: "foxtailMillet",
      mrp1kg: 80.92, mrpHalfKg: 40.46, resale1kg: 73.56, resaleHalfKg: 37, img: "/virudhu-millets/images/Foxtail Millet.jpeg" 
    },
    {
      id: 3, nameKey: "barnyardMillet",
      mrp1kg: 109, mrpHalfKg: 54.50, resale1kg: 99.09, resaleHalfKg: 50, img: "/virudhu-millets/images/Barnyard Millet.jpeg" 
    },
    {
      id: 4, nameKey: "kodoMillet",
      mrp1kg: 84, mrpHalfKg: 42, resale1kg: 76, resaleHalfKg: 38, img: "/virudhu-millets/images/Kodo Millet.jpeg" 
    },
    {
      id: 5, nameKey: "prosoMillet",
      mrp1kg: 85, mrpHalfKg: 45, resale1kg: 75, resaleHalfKg: 39, img: "/virudhu-millets/images/Proso Millet.jpeg" 
    },
    {
      id: 6, nameKey: "ragi",
      mrp1kg: 65, mrpHalfKg: 35, resale1kg: 55, resaleHalfKg: 29, img: "/virudhu-millets/images/Ragi.jpeg" 
    },
    {
      id: 7, nameKey: "blackKavuniRice",
      mrp1kg: 84, mrpHalfKg: 42, resale1kg: 78, resaleHalfKg: 39, img: "/virudhu-millets/images/Black Kavuni Rice.jpeg" 
    },
    {
      id: 8, nameKey: "mappillaiSambaRice",
      mrp1kg: 44, mrpHalfKg: 22, resale1kg: 40, resaleHalfKg: 20, img: "/virudhu-millets/images/Mappillai Samba Rice.jpeg" 
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
          <h2 className="text-4xl font-bold mb-4">{t('products.title')}</h2>
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
              <div
                className="relative h-64 overflow-hidden bg-gray-100 flex items-center justify-center p-4 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
                title={t(`products.items.${product.nameKey}.name`)}
              >
                <img 
                  src={product.img} 
                  alt={t(`products.items.${product.nameKey}.name`)}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500 rounded"
                />
                {/* Subtle hover overlay hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 text-[var(--color-primary-green)] text-xs font-semibold px-3 py-1 rounded-full shadow">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-1 text-[#333] drop-shadow-sm">{t(`products.items.${product.nameKey}.name`)}</h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">{t(`products.items.${product.nameKey}.desc`)}</p>
                
                <div className="bg-[var(--color-cream-bg)] p-4 rounded-xl mb-6">
                  <div className="grid grid-cols-3 gap-2 text-sm text-center mb-2 font-bold text-gray-700 border-b pb-2">
                    <div className="text-left">{t('products.weight')}</div>
                    <div>{t('products.mrp')}</div>
                    <div className="text-[var(--color-primary-green)]">{t('products.resale')}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm text-center items-center mb-2">
                    <div className="text-left font-semibold text-gray-600">1 KG</div>
                    <div className="text-gray-500 line-through">₹{product.mrp1kg}</div>
                    <div className="text-[var(--color-primary-green)] font-bold text-base">₹{product.resale1kg}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm text-center items-center">
                    <div className="text-left font-semibold text-gray-600">½ KG</div>
                    <div className="text-gray-500 line-through">₹{product.mrpHalfKg}</div>
                    <div className="text-[var(--color-primary-green)] font-bold text-base">₹{product.resaleHalfKg}</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="block w-full text-center border-2 border-[var(--color-primary-green)] text-[var(--color-primary-green)] hover:bg-[var(--color-primary-green)] hover:text-white py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                  >
                    {t('products.learnMore')}
                  </button>
                  <a
                    href="#contact"
                    className="block w-full text-center bg-[var(--color-primary-green)] hover:bg-[var(--color-primary-green-dark)] text-white py-3 rounded-xl font-bold transition-colors duration-300 ripple overflow-hidden relative shadow-md hover:shadow-lg"
                  >
                    <span className="relative z-10">{t('products.toOrder')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={{
            name: t(`products.items.${selectedProduct.nameKey}.name`),
            desc: t(`products.items.${selectedProduct.nameKey}.desc`),
            benefits: t(`products.items.${selectedProduct.nameKey}.benefits`) || [],
            cookingTip: t(`products.items.${selectedProduct.nameKey}.cookingTip`),
            origin: t(`products.items.${selectedProduct.nameKey}.origin`),
          }}
          image={selectedProduct.img}
          t={{
            modal: {
              benefits: t('modal.benefits'),
              cookingTip: t('modal.cookingTip'),
              origin: t('modal.origin'),
              orderWhatsApp: t('modal.orderWhatsApp'),
              close: t('modal.close'),
            }
          }}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};
