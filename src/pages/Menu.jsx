import React, { useState } from 'react';
import { Sparkles, Search, Filter, Leaf, Flame, Eye, ShoppingBag, Clock, Heart } from 'lucide-react';
import { menuCategories, menuItems } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { handleImageError } from '../utils/imageUtils';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [chefOnly, setChefOnly] = useState(false);

  const { addToCart } = useCart();
  const { setQuickViewItem, showToast } = useTheme();

  const filteredItems = menuItems.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = !vegOnly || item.isVeg;
    const matchesChef = !chefOnly || item.isChefSpecial;

    return matchesCat && matchesSearch && matchesVeg && matchesChef;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">Artisanal Culinary Collection</span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#f5ebe0]">Our Gourmet Menu</h1>
        <p className="text-xs sm:text-sm text-[#c9a687] font-outfit">
          Every cup and plate is crafted using single-origin estate beans and fresh artisanal ingredients in C-Scheme, Jaipur.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-4 rounded-3xl bg-[#170d09] border border-[#c9a687]/20 flex flex-col md:flex-row items-center gap-4 justify-between shadow-xl">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#c9a687] absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] placeholder-[#c9a687]/40 focus:outline-none focus:border-[#d4af37]"
          />
        </div>

        {/* Quick Toggles */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setVegOnly(!vegOnly)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              vegOnly
                ? 'bg-green-950 border border-green-500 text-green-400'
                : 'bg-[#0d0705] border border-[#c9a687]/20 text-[#c9a687] hover:border-[#c9a687]/50'
            }`}
          >
            <Leaf className="w-3.5 h-3.5" /> Veg Only
          </button>

          <button
            onClick={() => setChefOnly(!chefOnly)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              chefOnly
                ? 'bg-[#d4af37] text-[#0d0705]'
                : 'bg-[#0d0705] border border-[#c9a687]/20 text-[#c9a687] hover:border-[#c9a687]/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Chef Specials
          </button>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full font-semibold text-xs whitespace-nowrap transition-all shrink-0 ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-[#8c6046] via-[#c9a687] to-[#d4af37] text-[#0d0705] shadow-lg shadow-[#d4af37]/20 font-bold scale-105'
                : 'bg-[#170d09] border border-[#c9a687]/20 text-[#c9a687] hover:border-[#d4af37]/50 hover:text-[#f5ebe0]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Menu Item Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
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

              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                {item.isVeg && (
                  <span className="px-2 py-0.5 rounded-md bg-green-950/90 border border-green-500/40 text-green-400 font-bold text-[9px] uppercase backdrop-blur-sm">
                    Veg
                  </span>
                )}
                {item.isChefSpecial && (
                  <span className="px-2 py-0.5 rounded-md bg-[#d4af37] text-[#0d0705] font-bold text-[9px] uppercase shadow-md">
                    Chef Special
                  </span>
                )}
              </div>

              <button
                onClick={() => setQuickViewItem(item)}
                className="absolute bottom-3 right-3 p-2 rounded-full bg-[#0d0705]/85 border border-[#c9a687]/30 text-[#f5ebe0] hover:text-[#d4af37] z-10"
                title="View Full Ingredients"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold">{item.category}</span>
                  <span className="text-[11px] text-[#c9a687] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" /> {item.prepTime}
                  </span>
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#f5ebe0] group-hover:text-[#d4af37] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-[#c9a687]/90 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#c9a687]/15 flex items-center justify-between">
                <div>
                  <span className="font-serif-luxury text-2xl font-bold text-[#d4af37]">₹{item.price}</span>
                  <span className="text-[10px] text-[#c9a687] block">{item.calories} kcal</span>
                </div>
                <button
                  onClick={() => {
                    addToCart(item);
                    showToast(`Added ${item.name} to cart`, 'success');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#261610] border border-[#c9a687]/30 text-[#f5ebe0] hover:bg-[#d4af37] hover:text-[#0d0705] font-bold text-xs transition-all flex items-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 text-[#c9a687]">
          No menu items found matching your filters. Try clearing search query!
        </div>
      )}

    </div>
  );
};

export default Menu;
