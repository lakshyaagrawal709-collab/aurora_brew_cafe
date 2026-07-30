import React, { useState } from 'react';
import { Search, X, Coffee, Sparkles, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { menuItems, blogPosts } from '../data/mockData';
import { handleImageError } from '../utils/imageUtils';

const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen } = useTheme();
  const { addToCart } = useCart();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const filteredMenu = query.trim()
    ? menuItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : menuItems.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-20 p-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-[#0d0705]/85 backdrop-blur-md animate-fade-in"
      />

      <div className="relative w-full max-w-2xl bg-[#170d09] border border-[#c9a687]/30 rounded-3xl shadow-2xl overflow-hidden z-10 animate-fade-in">
        
        {/* Search Bar */}
        <div className="p-4 border-b border-[#c9a687]/20 flex items-center gap-3 bg-[#261610]">
          <Search className="w-5 h-5 text-[#d4af37] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search coffee, woodfired pizza, cheesecake, or blog guides..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-base text-[#f5ebe0] placeholder-[#c9a687]/50 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-[#c9a687] hover:text-[#f5ebe0]">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 rounded-lg bg-[#170d09] border border-[#c9a687]/20 text-xs text-[#c9a687] hover:text-[#f5ebe0]"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-[#c9a687] font-semibold uppercase tracking-wider">
            <span>{query ? `Search Results (${filteredMenu.length})` : 'Popular Recommendations'}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredMenu.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-2xl bg-[#0d0705] border border-[#c9a687]/15 flex items-center gap-3 hover:border-[#d4af37]/40 transition-all group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  onError={handleImageError}
                  className="w-14 h-14 rounded-xl object-cover border border-[#c9a687]/20 shrink-0 group-hover:scale-105 transition-transform bg-[#261610]"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-xs text-[#f5ebe0] truncate">{item.name}</h4>
                  <p className="text-[11px] text-[#d4af37] font-bold mt-0.5">₹{item.price}</p>
                  <button
                    onClick={() => {
                      addToCart(item);
                      setIsSearchOpen(false);
                    }}
                    className="mt-1 text-[10px] font-bold text-[#c9a687] hover:text-[#d4af37] flex items-center gap-1"
                  >
                    Add to Cart <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default SearchModal;
