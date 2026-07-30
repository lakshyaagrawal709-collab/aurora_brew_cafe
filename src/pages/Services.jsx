import React from 'react';
import { Wifi, Car, Heart, BatteryCharging, ShoppingBag, Truck, Calendar, Laptop, Music, Coffee, Award, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Services = () => {
  const { setIsReservationOpen } = useTheme();

  const servicesList = [
    { icon: Wifi, title: "High-Speed Fiber WiFi", desc: "Dedicated 300 Mbps symmetrical optical fiber connections with guest security." },
    { icon: Car, title: "Complimentary Valet Parking", desc: "Safe valet parking directly in front of our C-Scheme location." },
    { icon: Heart, title: "Pet-Friendly Courtyard", desc: "Welcoming outdoor patio space with complimentary water bowls for pets." },
    { icon: BatteryCharging, title: "Power Outlets at Every Table", desc: "High-density charging stations & USB-C ports for seamless laptop work." },
    { icon: Laptop, title: "Co-Working Workstations", desc: "Ergonomic leather seating and quiet acoustic zones for digital nomads." },
    { icon: Music, title: "Friday Live Acoustic Nights", desc: "Smooth live jazz and acoustic indie performances every Friday evening." },
    { icon: Calendar, title: "Private Dining & Events", desc: "Exclusive booking of our Glasshouse lounge for birthday parties & corporate meets." },
    { icon: Truck, title: "Fast Delivery in Jaipur", desc: "Eco-friendly temperature-controlled food delivery within 5km of C-Scheme." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">Hospitality & Amenities</span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#f5ebe0]">
          World-Class Services & Comfort
        </h1>
        <p className="text-xs sm:text-sm text-[#c9a687]">
          Every amenity is tailored to make your visit to Aurora Brew Cafe in Jaipur memorable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesList.map((s) => {
          const IconComp = s.icon;
          return (
            <div
              key={s.title}
              className="p-6 rounded-3xl bg-[#170d09] border border-[#c9a687]/20 hover:border-[#d4af37]/50 transition-all space-y-3 shadow-xl group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] flex items-center justify-center group-hover:scale-110 transition-transform">
                <IconComp className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-[#f5ebe0]">{s.title}</h3>
              <p className="text-xs text-[#c9a687] leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#261610] to-[#170d09] border border-[#d4af37]/30 text-center space-y-6 shadow-2xl">
        <h2 className="font-serif-luxury text-3xl font-bold text-[#f5ebe0]">Planning a Private Event in Jaipur?</h2>
        <p className="text-xs sm:text-sm text-[#c9a687] max-w-xl mx-auto">
          Host your birthday, corporate dinner, or anniversary in our luxury glasshouse lounge with customized multi-course menus.
        </p>
        <button
          onClick={() => setIsReservationOpen(true)}
          className="px-8 py-3.5 rounded-full bg-[#d4af37] text-[#0d0705] font-bold text-xs uppercase tracking-wider hover:bg-[#ffe082] transition-colors"
        >
          Enquire for Private Booking
        </button>
      </div>
    </div>
  );
};

export default Services;
