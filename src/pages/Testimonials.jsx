import React, { useState } from 'react';
import { Star, CheckCircle, Award } from 'lucide-react';
import { testimonials } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { handleImageError } from '../utils/imageUtils';

const Testimonials = () => {
  const { showToast } = useTheme();
  const [reviewsList, setReviewsList] = useState(testimonials);
  const [reviewName, setReviewName] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  const [rating, setRating] = useState(5);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!reviewName || !reviewComment) return;

    const newRev = {
      id: 't-new-' + Date.now(),
      name: reviewName,
      role: 'Verified Guest',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      rating,
      source: 'Direct Review',
      comment: reviewComment
    };

    setReviewsList([newRev, ...reviewsList]);
    setReviewName('');
    setReviewComment('');
    showToast('✨ Thank you! Your review has been published.', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">4.9 ★ Google Rating (1,480+ Reviews)</span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#f5ebe0]">
          Guest Reviews & Experiences
        </h1>
        <p className="text-xs sm:text-sm text-[#c9a687]">
          Read what coffee lovers, digital nomads, and families say about dining at Aurora in C-Scheme, Jaipur.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviewsList.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-3xl bg-[#170d09] border border-[#c9a687]/20 flex flex-col justify-between space-y-4 shadow-xl"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex text-[#d4af37]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-[#c9a687] bg-[#0d0705] px-2 py-0.5 rounded border border-[#c9a687]/20">
                  {t.source}
                </span>
              </div>
              <p className="text-xs text-[#c9a687] leading-relaxed italic">"{t.comment}"</p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#c9a687]/15">
              <img
                src={t.avatar}
                alt={t.name}
                onError={handleImageError}
                className="w-10 h-10 rounded-full object-cover border border-[#c9a687]/30 bg-[#261610]"
              />
              <div>
                <h4 className="text-xs font-bold text-[#f5ebe0]">{t.name}</h4>
                <p className="text-[10px] text-[#c9a687]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leave a Review Form */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#170d09] border border-[#c9a687]/20 max-w-2xl mx-auto space-y-4 shadow-2xl">
        <h3 className="font-serif-luxury text-2xl font-bold text-[#f5ebe0] text-center">Share Your Aurora Experience</h3>
        <form onSubmit={handleAddReview} className="space-y-3">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={reviewName}
            onChange={(e) => setReviewName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] focus:border-[#d4af37] focus:outline-none"
          />
          <textarea
            required
            rows={3}
            placeholder="Write your review about our coffee, ambience, or sourdough pizzas..."
            value={reviewComment}
            onChange={(e) => setReviewComment(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] focus:border-[#d4af37] focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#d4af37] text-[#0d0705] font-bold text-xs uppercase tracking-wider hover:bg-[#ffe082] transition-colors"
          >
            Submit Review
          </button>
        </form>
      </div>

    </div>
  );
};

export default Testimonials;
