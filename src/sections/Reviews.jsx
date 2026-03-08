import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

export const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Muthukumar",
      rating: 5,
      comment: "Excellent quality kambu and ragi! Quick delivery too."
    },
    {
      id: 2,
      name: "Saraswathi",
      rating: 5,
      comment: "Very authentic and traditional taste. The Mappillai Samba rice is the best I've had."
    },
    {
      id: 3,
      name: "Karthik R.",
      rating: 4,
      comment: "Good products and reasonable pricing. Will definitely order again."
    }
  ]);
  
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 5 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      setReviews([{ id: Date.now(), ...newReview }, ...reviews]);
      setNewReview({ name: '', comment: '', rating: 5 });
    }
  };

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Customer Reviews</h2>
          <div className="w-24 h-1 bg-[var(--color-accent-gold)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reviews List */}
          <div>
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
              <AnimatePresence>
                {reviews.map((review) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[var(--color-cream-bg)] p-6 rounded-2xl shadow-md border-l-4 border-[var(--color-accent-gold)]"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xl font-bold text-[#333]">{review.name}</h4>
                      <div className="flex space-x-1 text-[var(--color-accent-gold)]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{review.comment}"</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Review Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-[#333]">Leave a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-green)] transition-all bg-white"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Comment" 
                  required
                  rows="4"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-green)] transition-all bg-white resize-none"
                ></textarea>
              </div>
              <div>
                <select 
                  value={newReview.rating}
                  onChange={(e) => setNewReview({...newReview, rating: Number(e.target.value)})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-green)] transition-all bg-white"
                >
                  <option value={5}>5 Stars - Excellent</option>
                  <option value={4}>4 Stars - Very Good</option>
                  <option value={3}>3 Stars - Good</option>
                  <option value={2}>2 Stars - Fair</option>
                  <option value={1}>1 Star - Poor</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[var(--color-primary-green)] hover:bg-[var(--color-primary-green-dark)] text-white font-bold py-4 rounded-xl transition-colors shadow-lg transform hover:-translate-y-1"
              >
                Submit Review
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
