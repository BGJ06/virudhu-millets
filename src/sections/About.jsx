import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const team = [
    { name: "Ramarajan", role: "Founder", phone: "+91 98765 43210", icon: "👨🏽‍💼" },
    { name: "Karthika", role: "Managing Director", phone: "+91 98765 43211", icon: "👩🏽‍💼" },
    { name: "Murugan", role: "Manager", phone: "+91 98765 43212", icon: "👨🏽‍💻" },
    { name: "Devi", role: "Millets Manager", phone: "+91 98765 43213", icon: "👩🏽‍🌾" }
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
          <h2 className="text-4xl font-bold mb-4">About Us / எங்களை பற்றி</h2>
          <div className="w-24 h-1 bg-[var(--color-accent-gold)] mx-auto rounded-full mb-8"></div>
          <p className="text-2xl text-[var(--color-primary-green)] font-light max-w-4xl mx-auto leading-relaxed mb-4">
            விருது சிறுதானியம் தரமான, பாரம்பரிய சிறுதானியங்களை உங்கள் இல்லம் தேடி வழங்கி வருகிறது. விவசாயிகளுக்கும் நுகர்வோருக்கும் இடையே ஒரு பாலமாக நாங்கள் செயல்படுகிறோம்.
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Virudhu Millets is dedicated to delivering the finest authentic, traditional millets directly to your home. We bridge the gap between hard-working farmers and health-conscious consumers.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#333]">Our Story / எங்கள் கதை</h3>
            <p className="text-lg text-[var(--color-primary-green)] font-semibold leading-relaxed">
              A1382 விருதுநகர் மாவட்ட நுகர்வோர் கூட்டுறவு மொத்த விற்பனை நிலையத்தின் ஒரு அங்கமாக, தமிழ்நாட்டின் சமையல் பாரம்பரியத்தை பாதுகாக்கும் நோக்கில் இந்த பயணத்தை தொடங்கினோம்.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Established as part of A1382 Virudhunagar District Consumer Cooperative Wholesale Stores Ltd, we embarked on a journey to preserve the culinary heritage of Tamil Nadu. Our mission is to provide unadulterated, wholesome food to every family while supporting our local agricultural community.
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
                  src="./images/Logo2.png" 
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
          <h3 className="text-3xl font-bold">Meet Our Team</h3>
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
