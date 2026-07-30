import React from 'react';
import { Calendar, ShieldCheck, Sparkles, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Reservation = () => {
  const { setIsReservationOpen } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">Instant VIP Access</span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#f5ebe0]">
          Book Your Table at Aurora C-Scheme
        </h1>
        <p className="text-sm text-[#c9a687] font-outfit">
          Whether it's a romantic date under garden lights, a corporate meeting, or a weekend family brunch.
        </p>
        <button
          onClick={() => setIsReservationOpen(true)}
          className="mt-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#c9a687] via-[#d4af37] to-[#ffe082] text-[#0d0705] font-bold text-xs uppercase tracking-widest shadow-2xl shadow-[#d4af37]/25 hover:scale-105 transition-all"
        >
          Open Reservation Engine
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-[#170d09] border border-[#c9a687]/20 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 border border-[#d4af37] text-[#d4af37] flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-serif-luxury text-xl font-bold text-[#f5ebe0]">Glasshouse Conservatory</h3>
          <p className="text-xs text-[#c9a687] leading-relaxed">
            Indoor tropical climate-controlled dining with natural skylights and acoustic dampening.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#170d09] border border-[#c9a687]/20 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 border border-[#d4af37] text-[#d4af37] flex items-center justify-center mx-auto">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-serif-luxury text-xl font-bold text-[#f5ebe0]">Garden Courtyard</h3>
          <p className="text-xs text-[#c9a687] leading-relaxed">
            Pet-friendly open patio surrounded by fountain lights and fragrant jasmine bushes.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#170d09] border border-[#c9a687]/20 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 border border-[#d4af37] text-[#d4af37] flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif-luxury text-xl font-bold text-[#f5ebe0]">Private VIP Lounge</h3>
          <p className="text-xs text-[#c9a687] leading-relaxed">
            Exclusive secluded lounge reserved for celebrations, business dinners, and birthdays.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
