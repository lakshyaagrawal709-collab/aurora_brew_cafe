import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Calendar, ShoppingBag, ArrowRight, Star, Sparkles, Award, MapPin, Clock, ShieldCheck, Heart, Eye } from 'lucide-react';
import HeroCanvas from '../components/HeroCanvas';
import { menuItems, specialOffers, testimonials, cafeStory, cafeDetails } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { handleImageError } from '../utils/imageUtils';

const Home = () => {
  const { addToCart } = useCart();
  const { setIsReservationOpen, setQuickViewItem, showToast } = useTheme();

  // Typing animation phrases
  const phrases = ["Coffee Meets Comfort", "Artistry Meets Flavor", "Jaipur Meets Luxury"];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const signatureItems = menuItems.filter(i => i.isChefSpecial || i.isPopular).slice(0, 6);

  return (
    <div className="space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0d0705] pt-12 pb-20">
        
        {/* Interactive 3D Canvas Background */}
        <HeroCanvas />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#3d2319]/20 via-[#d4af37]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
          
          {/* Jaipur Location Luxury Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#170d09]/90 border border-[#d4af37]/40 shadow-xl shadow-[#d4af37]/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs font-semibold text-[#f5ebe0] tracking-wider uppercase">
              Jaipur's Premier Coffee Sanctuary • C-Scheme
            </span>
          </div>

          {/* Main Hero Headline */}
          <div className="space-y-4">
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#f5ebe0] leading-tight">
              Where <span className="text-gold-gradient transition-all duration-500">{phrases[phraseIndex]}</span>
            </h1>
            <p className="text-base sm:text-xl text-[#c9a687]/90 max-w-2xl mx-auto font-outfit leading-relaxed font-light">
              Single-origin high-altitude Arabicas, artisanal woodfired sourdoughs, and opulent glasshouse dining in the heart of C-Scheme, Jaipur.
            </p>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsReservationOpen(true)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#8c6046] via-[#c9a687] to-[#d4af37] text-[#0d0705] font-bold text-xs uppercase tracking-widest shadow-2xl shadow-[#d4af37]/25 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Reserve a Table
            </button>

            <Link
              to="/menu"
              className="px-8 py-4 rounded-full bg-[#170d09]/80 border border-[#c9a687]/30 text-[#f5ebe0] font-bold text-xs uppercase tracking-widest hover:border-[#d4af37] hover:bg-[#261610] transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <Coffee className="w-4 h-4 text-[#d4af37]" />
              Explore Artisanal Menu
            </Link>
          </div>

          {/* Trust Statistics Strip */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#c9a687]/15 max-w-4xl mx-auto text-left">
            <div>
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#d4af37]">100%</span>
              <p className="text-xs text-[#c9a687] mt-0.5">Single-Origin Arabica</p>
            </div>
            <div>
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#d4af37]">4.9 ★</span>
              <p className="text-xs text-[#c9a687] mt-0.5">Google Rating (1,480+ Reviews)</p>
            </div>
            <div>
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#d4af37]">50+</span>
              <p className="text-xs text-[#c9a687] mt-0.5">Gourmet Recipes</p>
            </div>
            <div>
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#d4af37]">15+</span>
              <p className="text-xs text-[#c9a687] mt-0.5">National Barista Awards</p>
            </div>
          </div>

        </div>
      </section>

      {/* SPECIAL OFFERS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">Limited Time Privileges</span>
            <h2 className="font-serif-luxury text-3xl font-bold text-[#f5ebe0]">Today's Exclusive Offers</h2>
          </div>
          <Link to="/menu" className="text-xs text-[#c9a687] hover:text-[#d4af37] font-semibold flex items-center gap-1">
            View All Offers <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className={`p-6 rounded-3xl bg-gradient-to-br ${offer.bgGradient} border border-[#c9a687]/30 shadow-2xl relative overflow-hidden group hover:border-[#d4af37]/60 transition-all`}
            >
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-[#d4af37] text-[#0d0705] font-extrabold text-[10px] uppercase tracking-wider">
                  {offer.badge}
                </span>
              </div>
              <span className="font-serif-luxury text-3xl font-extrabold text-[#d4af37] block mb-2">
                {offer.discount}
              </span>
              <h3 className="font-serif-luxury text-xl font-bold text-[#f5ebe0] mb-2">{offer.title}</h3>
              <p className="text-xs text-[#c9a687] leading-relaxed mb-4">{offer.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                <span className="font-mono text-[#d4af37] font-bold">Use Code: {offer.code}</span>
                <span className="text-[10px] text-[#f5ebe0]/60">{offer.validTill}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE SPECIALTIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase">Handcrafted Masterpieces</span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#f5ebe0]">Chef's Signature Creations</h2>
          <p className="text-xs text-[#c9a687]">Dishes & brews that define the Aurora experience in Jaipur.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureItems.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-[28px] bg-[#170d09] border border-[#c9a687]/20 overflow-hidden shadow-xl hover:border-[#d4af37]/50 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative w-full h-[260px] mb-4 overflow-hidden rounded-[20px] bg-[#261610]">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => handleImageError(e, item)}
                  style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '20px' }}
                  className="w-full h-[260px] object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute top-3 left-3 flex gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#0d0705]/85 backdrop-blur-md border border-[#c9a687]/30 text-xs font-bold text-[#d4af37]">
                    ★ {item.rating}
                  </span>
                </div>

                <button
                  onClick={() => setQuickViewItem(item)}
                  className="absolute bottom-3 right-3 p-2.5 rounded-full bg-[#0d0705]/85 border border-[#c9a687]/30 text-[#f5ebe0] hover:text-[#d4af37] transition-colors z-10"
                  title="Quick View Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold">{item.category}</span>
                    <span className="text-xs text-[#c9a687]">{item.prepTime}</span>
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#f5ebe0] group-hover:text-[#d4af37] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#c9a687]/90 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#c9a687]/15 flex items-center justify-between">
                  <span className="font-serif-luxury text-2xl font-bold text-[#d4af37]">₹{item.price}</span>
                  <button
                    onClick={() => {
                      addToCart(item);
                      showToast(`Added ${item.name} to cart`, 'success');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#261610] border border-[#c9a687]/30 text-[#f5ebe0] hover:bg-[#d4af37] hover:text-[#0d0705] font-bold text-xs transition-all flex items-center gap-2 shadow-md"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JAIPUR STORY SPOTLIGHT */}
      <section className="bg-gradient-to-b from-[#170d09] to-[#0d0705] py-20 border-y border-[#c9a687]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
              <Award className="w-3.5 h-3.5" /> The C-Scheme Heritage
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f5ebe0] leading-tight">
              Crafting Royalty in Every Cup
            </h2>
            <p className="text-sm text-[#c9a687] leading-relaxed font-outfit">
              {cafeStory.descriptionParagraphs[0]}
            </p>
            <p className="text-sm text-[#c9a687] leading-relaxed font-outfit">
              {cafeStory.descriptionParagraphs[1]}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="px-6 py-3 rounded-full bg-[#d4af37] text-[#0d0705] font-bold text-xs uppercase tracking-wider hover:bg-[#ffe082] transition-colors"
              >
                Read Full Story
              </Link>
              <div className="flex items-center gap-3">
                <img
                  src={cafeStory.team[0].image}
                  alt={cafeStory.team[0].name}
                  onError={(e) => handleImageError(e, { category: 'chef' })}
                  className="w-10 h-10 rounded-full object-cover border border-[#d4af37]"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#f5ebe0]">{cafeStory.team[0].name}</h4>
                  <p className="text-[10px] text-[#c9a687]">Co-Founder & Head Chef</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-[#c9a687]/30 shadow-2xl bg-[#261610]">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
                alt="Aurora Brew Cafe Ambience"
                onError={(e) => handleImageError(e, { category: 'ambience' })}
                className="w-full h-[450px] object-cover"
              />
            </div>
            {/* Floating Glass Accent Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 p-6 rounded-2xl bg-[#170d09]/90 border border-[#d4af37]/40 shadow-2xl backdrop-blur-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#d4af37] text-[#0d0705] font-extrabold flex items-center justify-center text-lg">
                  ★
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#f5ebe0]">Rated 4.9 on Google</h5>
                  <p className="text-[10px] text-[#c9a687]">Over 1,480 verified guest reviews in Jaipur</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GOOGLE REVIEWS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase">Guest Experiences</span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#f5ebe0]">Loved by Jaipur & Beyond</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
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
                  onError={(e) => handleImageError(e, { category: 'avatar' })}
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
      </section>

      {/* JAIPUR LOCATION & VISIT US CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#261610] via-[#170d09] to-[#261610] border border-[#d4af37]/30 relative overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-4 z-10">
            <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase">C-Scheme Sanctuary</span>
            <h2 className="font-serif-luxury text-3xl font-bold text-[#f5ebe0]">Visit Us Today in Jaipur</h2>
            <p className="text-xs text-[#c9a687] leading-relaxed">
              Located on Janpath, C-Scheme — Jaipur's greenest and most vibrant central neighborhood. Valet parking & fiber internet available.
            </p>
            
            <div className="space-y-2 text-xs text-[#f5ebe0] pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37]" /> {cafeDetails.address}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#d4af37]" /> Mon - Sun: 8:00 AM – 11:00 PM
              </p>
            </div>

            <div className="pt-2 flex gap-4">
              <button
                onClick={() => setIsReservationOpen(true)}
                className="px-6 py-3 rounded-full bg-[#d4af37] text-[#0d0705] font-bold text-xs uppercase tracking-wider"
              >
                Book Table Now
              </button>
              <a
                href={cafeDetails.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-[#0d0705] border border-[#c9a687]/30 text-[#f5ebe0] font-bold text-xs uppercase tracking-wider hover:border-[#d4af37]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="relative rounded-2xl overflow-hidden border border-[#c9a687]/20 h-64 bg-[#0d0705] flex items-center justify-center group">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
              alt="Jaipur C-Scheme Cafe Map"
              onError={(e) => handleImageError(e, { category: 'map' })}
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-[#0d0705]/40 flex flex-col items-center justify-center gap-2 text-center p-4">
              <MapPin className="w-8 h-8 text-[#d4af37] animate-bounce" />
              <h4 className="font-serif-luxury text-lg font-bold text-[#f5ebe0]">C-84, Janpath, C-Scheme, Jaipur</h4>
              <span className="text-[11px] text-[#d4af37] font-semibold">Click for Directions</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
