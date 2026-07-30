import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, ShoppingBag, Calendar, Search, Volume2, VolumeX, Menu as MenuIcon, X, Sparkles, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { cafeDetails } from '../data/mockData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { isPlayingAudio, toggleAudio, setIsReservationOpen, setIsSearchOpen } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Reviews', path: '/testimonials' },
    { name: 'Journal', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Banner for Jaipur Location & Offer */}
      <div className="bg-[#170d09] border-b border-[#c9a687]/10 py-1.5 text-xs text-[#c9a687] text-center flex items-center justify-center gap-4 px-4">
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
          C-Scheme, Jaipur
        </span>
        <span className="hidden sm:inline opacity-40">•</span>
        <span className="hidden sm:flex items-center gap-1 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          15% OFF Student Discount & BOGO Happy Hours (4 PM - 6 PM)
        </span>
        <span className="opacity-40">•</span>
        <span className="text-[#f5ebe0] font-semibold">Open Today till 11 PM</span>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d0705]/90 backdrop-blur-xl border-b border-[#c9a687]/15 py-3 shadow-2xl'
            : 'bg-[#0d0705]/60 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#3d2319] via-[#8c6046] to-[#d4af37] p-0.5 shadow-lg shadow-[#d4af37]/10 group-hover:shadow-[#d4af37]/30 transition-all">
              <div className="w-full h-full bg-[#0d0705] rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-[#d4af37] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-serif-luxury text-xl font-bold tracking-tight text-[#f5ebe0] block leading-none">
                AURORA <span className="text-[#d4af37] font-normal">BREW</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#c9a687] block font-outfit mt-0.5">
                Jaipur • C-Scheme
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-1 transition-colors ${
                    isActive ? 'text-[#d4af37] font-semibold' : 'text-[#f5ebe0]/80 hover:text-[#f5ebe0]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#c9a687] to-[#d4af37] rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-3">
            
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search menu"
              className="p-2.5 rounded-full bg-[#170d09] border border-[#c9a687]/20 text-[#f5ebe0]/80 hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Ambient Sound Toggle */}
            <button
              onClick={toggleAudio}
              aria-label="Toggle ambient café audio"
              title={isPlayingAudio ? 'Mute Cafe Ambience' : 'Play Cafe Ambience'}
              className={`p-2.5 rounded-full border transition-all flex items-center justify-center ${
                isPlayingAudio
                  ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37] shadow-lg shadow-[#d4af37]/20 animate-pulse'
                  : 'bg-[#170d09] border-[#c9a687]/20 text-[#f5ebe0]/80 hover:text-[#d4af37]'
              }`}
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-[#170d09] border border-[#c9a687]/20 text-[#f5ebe0] hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#d4af37] text-[#0d0705] font-bold text-[11px] rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Table Reservation Button */}
            <button
              onClick={() => setIsReservationOpen(true)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#8c6046] via-[#c9a687] to-[#d4af37] text-[#0d0705] font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#d4af37]/15 hover:shadow-[#d4af37]/30 hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0d0705]" />
              Book Table
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-[#170d09] border border-[#c9a687]/20 text-[#f5ebe0]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] z-30 bg-[#0d0705]/95 backdrop-blur-2xl border-b border-[#c9a687]/20 lg:hidden flex flex-col p-6 overflow-y-auto animate-fade-in">
          <nav className="flex flex-col gap-4 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 border-b border-[#c9a687]/10 flex items-center justify-between ${
                  location.pathname === link.path ? 'text-[#d4af37] font-semibold' : 'text-[#f5ebe0]'
                }`}
              >
                {link.name}
                <span className="text-xs text-[#c9a687]">→</span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-[#c9a687]/20 flex flex-col gap-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsReservationOpen(true);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#c9a687] to-[#d4af37] text-[#0d0705] font-bold text-center tracking-wider uppercase shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Reserve a Table
            </button>
            <div className="text-center text-xs text-[#c9a687] mt-2">
              📍 C-84, Janpath, C-Scheme, Jaipur
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
