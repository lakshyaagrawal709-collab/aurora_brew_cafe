import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Music, CheckCircle } from 'lucide-react';
import { upcomingEvents } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { handleImageError } from '../utils/imageUtils';

const Events = () => {
  const { showToast } = useTheme();
  const [inquiryName, setInquiryName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInquiry = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('🎉 Private Event Enquiry Sent! Our event manager will call you within 2 hours.', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">Culture & Gatherings</span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#f5ebe0]">
          Events & Live Experiences
        </h1>
        <p className="text-xs sm:text-sm text-[#c9a687]">
          Join us at C-Scheme for live acoustic sessions, coffee masterclasses, and vibrant cultural nights.
        </p>
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {upcomingEvents.map((evt) => (
          <div
            key={evt.id}
            className="rounded-3xl bg-[#170d09] border border-[#c9a687]/20 overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            <div className="relative h-64 overflow-hidden bg-[#261610]">
              <img
                src={evt.image}
                alt={evt.title}
                onError={handleImageError}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#170d09] via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#d4af37] text-[#0d0705] font-bold text-[10px] uppercase">
                {evt.date}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="font-serif-luxury text-2xl font-bold text-[#f5ebe0]">{evt.title}</h3>
              <p className="text-xs text-[#c9a687] leading-relaxed">{evt.description}</p>
              
              <div className="flex items-center gap-4 text-xs text-[#d4af37] pt-2 border-t border-[#c9a687]/15">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {evt.time}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {evt.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Private Event Booking Inquiry Form */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#170d09] border border-[#d4af37]/30 max-w-3xl mx-auto shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase">Host Your Celebration</span>
          <h2 className="font-serif-luxury text-2xl font-bold text-[#f5ebe0]">Private Event Inquiry</h2>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-green-950/40 border border-green-500/40 text-center space-y-2">
            <CheckCircle className="w-10 h-10 text-green-400 mx-auto" />
            <h4 className="font-bold text-sm text-[#f5ebe0]">Inquiry Submitted!</h4>
            <p className="text-xs text-[#c9a687]">Our C-Scheme event coordinator will call you back shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleInquiry} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={inquiryName}
                onChange={(e) => setInquiryName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] focus:border-[#d4af37] focus:outline-none"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number (+91)"
                className="w-full px-4 py-3 rounded-xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] focus:border-[#d4af37] focus:outline-none"
              />
            </div>
            <select className="w-full px-4 py-3 rounded-xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] focus:border-[#d4af37] focus:outline-none">
              <option value="Birthday Party">Birthday Party</option>
              <option value="Corporate Meeting">Corporate Meeting</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Live Music Night">Live Music / Performance</option>
            </select>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#d4af37] text-[#0d0705] font-bold text-xs uppercase tracking-wider hover:bg-[#ffe082] transition-colors"
            >
              Submit Private Event Request
            </button>
          </form>
        )}
      </div>

    </div>
  );
};

export default Events;
