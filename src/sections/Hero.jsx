import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Force play on mount to bypass some browser autoplay policies for muted videos
      videoRef.current.play().catch(e => console.error("Hero video play error:", e));
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Video */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="./images/Opening.mp4" type="video/mp4" />
      </video>

      <div className="container mx-auto px-6 text-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-8"
        >
          {/* Logo integration from user request */}
          <div className="flex justify-center mb-6">
            <img src="./images/Logo.png" alt="Virudhu Millets Main Logo" className="w-48 h-48 md:w-64 md:h-64 object-contain bg-white rounded-full p-2 shadow-2xl" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">VIRUDHU MILLETS</h1>
          <h2 className="text-3xl md:text-5xl text-[var(--color-accent-gold)] font-bold mb-6 drop-shadow-md">விருது சிறுதானியம்</h2>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-10 max-w-2xl mx-auto drop-shadow-md">
            "Healthy Traditional Grains for a Better Life"
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="#products" 
              className="bg-[var(--color-primary-green)] hover:bg-[var(--color-primary-green-dark)] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[var(--color-shadow-glow)]"
            >
              Explore Products
            </a>
            <a 
              href="#about-us" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[var(--color-primary-green)] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
