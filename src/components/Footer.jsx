import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail, Clock, Send, Award, Heart, CheckCircle, Share2, Globe } from 'lucide-react';
import { cafeDetails } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useTheme();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    showToast('🎉 Discount Code AURORA10 activated!', 'success');
  };

  return (
    <footer className="bg-[#070403] border-t border-[#c9a687]/15 text-[#f5ebe0]/80 pt-16 pb-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8c6046]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#3d2319] to-[#d4af37] p-0.5">
                <div className="w-full h-full bg-[#0d0705] rounded-full flex items-center justify-center">
                  <Coffee className="w-4 h-4 text-[#d4af37]" />
                </div>
              </div>
              <span className="font-serif-luxury text-xl font-bold text-[#f5ebe0]">
                AURORA <span className="text-[#d4af37] font-normal">BREW</span>
              </span>
            </Link>
            <p className="text-sm text-[#c9a687]/80 leading-relaxed font-outfit">
              Jaipur's premier artisanal coffee house and culinary lounge in C-Scheme. Sourcing single-origin beans directly from high-altitude South Indian estates.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#d4af37] pt-2">
              <Award className="w-4 h-4" />
              <span>Times Food Award: Best Luxury Cafe 2024</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif-luxury text-base font-semibold text-[#f5ebe0] tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/menu" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <span className="text-xs text-[#d4af37]">›</span> Artisanal Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <span className="text-xs text-[#d4af37]">›</span> Our Story & Baristas
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <span className="text-xs text-[#d4af37]">›</span> Table Reservation
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <span className="text-xs text-[#d4af37]">›</span> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <span className="text-xs text-[#d4af37]">›</span> Live Music & Events
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <span className="text-xs text-[#d4af37]">›</span> Coffee Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Jaipur Address */}
          <div className="space-y-4">
            <h4 className="font-serif-luxury text-base font-semibold text-[#f5ebe0] tracking-wider uppercase">
              Visit Us in Jaipur
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                <span>{cafeDetails.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${cafeDetails.phone}`} className="hover:text-[#d4af37] transition-colors">
                  {cafeDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`mailto:${cafeDetails.email}`} className="hover:text-[#d4af37] transition-colors">
                  {cafeDetails.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-[#c9a687]">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Thu: 8:00 AM – 11:00 PM</p>
                  <p>Fri - Sun: 8:00 AM – 11:30 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Club */}
          <div className="space-y-4">
            <h4 className="font-serif-luxury text-base font-semibold text-[#f5ebe0] tracking-wider uppercase">
              Aurora Coffee Club
            </h4>
            <p className="text-xs text-[#c9a687]/90 leading-relaxed font-outfit">
              Subscribe to get secret menu invites, weekend event updates, and an instant 10% discount promo code.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs text-[#f5ebe0] flex items-center gap-2 animate-fade-in">
                <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0" />
                <div>
                  <p className="font-bold text-[#d4af37]">You're Subscribed!</p>
                  <p className="text-[11px] text-[#c9a687]">Use code <span className="font-mono text-[#f5ebe0] bg-[#0d0705] px-1 py-0.5 rounded">AURORA10</span> at checkout.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-[#170d09] border border-[#c9a687]/30 text-sm text-[#f5ebe0] placeholder-[#c9a687]/50 focus:outline-none focus:border-[#d4af37]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-[#d4af37] text-[#0d0705] hover:bg-[#ffe082] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[10px] text-[#c9a687]/60">We respect your privacy. No spam ever.</p>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 border-t border-[#c9a687]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#c9a687]/70">
          <p>© {new Date().getFullYear()} Aurora Brew Cafe, Jaipur. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#d4af37] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#d4af37] transition-colors">Terms of Service</Link>
            <Link to="/faq" className="hover:text-[#d4af37] transition-colors">FAQ</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
