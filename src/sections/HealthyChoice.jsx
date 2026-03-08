import React from 'react';
import { motion } from 'framer-motion';

export const HealthyChoice = () => {
  const [playCount, setPlayCount] = React.useState(0);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && videoRef.current && playCount === 0) {
          videoRef.current.muted = false; // Try with audio
          videoRef.current.play().catch((e) => {
            console.warn("Autoplay with sound was blocked when scrolled into view. Falling back to muted.", e);
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(err => console.log(err));
            }
          });
        }
      },
      { threshold: 0.5 } // trigger when 50% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [playCount]);

  const handleVideoEnded = () => {
    const nextCount = playCount + 1;
    setPlayCount(nextCount);
    
    if (videoRef.current) {
      if (nextCount < 2) {
        // Play second time (with sound, if it wasn't blocked)
        videoRef.current.play().catch(e => console.log(e));
      } else {
        // After playing twice, pause and let the user decide (controls will appear because playCount >= 2)
        videoRef.current.pause();
      }
    }
  };

  return (
    <section id="healthy-choice" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Healthy Choice</h2>
          <div className="w-24 h-1 bg-[var(--color-accent-gold)] mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-[var(--color-cream-bg)]">
              <video
                ref={videoRef}
                src="/images/Video.mp4"
                className="w-full h-full object-cover aspect-video md:aspect-square"
                autoPlay
                controls={playCount >= 2}
                onEnded={handleVideoEnded}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#333]">Traditional Diet</h3>
            <div className="bg-[var(--color-cream-bg)] p-6 rounded-2xl border-l-4 border-[var(--color-primary-green)] shadow-md">
              <p className="text-xl text-gray-700 mb-2">Incorporate the ancient wisdom of millets into your daily routine for sustained energy.</p>
              <p className="text-xl text-[var(--color-millet-brown)] font-bold">நமது பாரம்பரிய பழக்கமான சிறுதானிய உணவுகள் ஆரோக்கியத்திற்கு மிகச்சிறந்தது.</p>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-[var(--color-primary-green)] mr-3"></div> Natural Weight Management</li>
              <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-[var(--color-primary-green)] mr-3"></div> Diabetes Friendly</li>
              <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-[var(--color-primary-green)] mr-3"></div> Gluten Free</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
