import React from 'react';
import { Award, ShieldCheck, Heart, MapPin, Coffee, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { cafeStory } from '../data/mockData';
import { handleImageError } from '../utils/imageUtils';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">Our Heritage & Passion</span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#f5ebe0]">
          The Story of Aurora Brew Cafe
        </h1>
        <p className="text-sm text-[#c9a687] font-outfit leading-relaxed">
          Where South Indian single-origin estate coffee beans meet the timeless luxury and warmth of Jaipur's hospitality.
        </p>
      </div>

      {/* Main Story & Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-serif-luxury text-3xl font-bold text-[#f5ebe0]">
            Born in the Quiet Avenues of C-Scheme
          </h2>
          {cafeStory.descriptionParagraphs.map((paragraph, index) => (
            <p key={index} className="text-sm text-[#c9a687] leading-relaxed font-outfit">
              {paragraph}
            </p>
          ))}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-[#170d09] border border-[#c9a687]/20">
              <h4 className="font-serif-luxury text-2xl font-bold text-[#d4af37]">100% Organic</h4>
              <p className="text-xs text-[#c9a687] mt-1">Shade-grown Arabica estate beans</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#170d09] border border-[#c9a687]/20">
              <h4 className="font-serif-luxury text-2xl font-bold text-[#d4af37]">Small-Batch</h4>
              <p className="text-xs text-[#c9a687] mt-1">Roasted weekly in C-Scheme roastery</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden border border-[#c9a687]/30 shadow-2xl bg-[#261610]">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop"
              alt="Aurora Coffee Crafting"
              onError={handleImageError}
              className="w-full h-[480px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* TIMELINE OF JOURNEY */}
      <div className="space-y-10 pt-10">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase">Growth & Milestones</span>
          <h2 className="font-serif-luxury text-3xl font-bold text-[#f5ebe0]">Our Journey Over The Years</h2>
        </div>

        <div className="relative border-l-2 border-[#c9a687]/20 ml-4 sm:ml-32 space-y-10">
          {cafeStory.timeline.map((item, i) => (
            <div key={i} className="relative pl-8 sm:pl-12 group">
              {/* Point icon */}
              <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-[#d4af37] text-[#0d0705] font-bold text-[10px] flex items-center justify-center shadow-lg shadow-[#d4af37]/30">
                ✓
              </div>
              <div className="p-6 rounded-2xl bg-[#170d09] border border-[#c9a687]/20 hover:border-[#d4af37]/50 transition-all space-y-1">
                <span className="font-mono text-xs font-bold text-[#d4af37]">{item.year}</span>
                <h4 className="font-serif-luxury text-lg font-bold text-[#f5ebe0]">{item.title}</h4>
                <p className="text-xs text-[#c9a687] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MEET THE MASTERS */}
      <div className="space-y-10 pt-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase">The Artisans</span>
          <h2 className="font-serif-luxury text-3xl font-bold text-[#f5ebe0]">Meet Our Master Craftsmen</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cafeStory.team.map((member) => (
            <div
              key={member.name}
              className="p-6 rounded-3xl bg-[#170d09] border border-[#c9a687]/20 flex flex-col sm:flex-row items-center gap-6 shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                onError={handleImageError}
                className="w-32 h-32 rounded-2xl object-cover border border-[#d4af37] shrink-0 bg-[#261610]"
              />
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-serif-luxury text-xl font-bold text-[#f5ebe0]">{member.name}</h3>
                <p className="text-xs text-[#d4af37] font-semibold">{member.role}</p>
                <p className="text-xs text-[#c9a687] leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
