import React, { useState } from 'react';
import { X, Clock, Flame, Award, Leaf, Plus, Minus, ShoppingBag, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { handleImageError } from '../utils/imageUtils';

const QuickViewModal = () => {
  const { quickViewItem, setQuickViewItem, showToast } = useTheme();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!quickViewItem) return null;

  const handleAdd = () => {
    addToCart(quickViewItem, qty);
    showToast(`Added ${qty}x ${quickViewItem.name} to cart`, 'success');
    setQuickViewItem(null);
    setQty(1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={() => setQuickViewItem(null)}
        className="fixed inset-0 bg-[#0d0705]/85 backdrop-blur-md animate-fade-in"
      />

      <div className="relative w-full max-w-3xl bg-[#170d09] border border-[#c9a687]/30 rounded-3xl shadow-2xl overflow-hidden z-10 grid grid-cols-1 md:grid-cols-2 my-8 animate-fade-in">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewItem(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#0d0705]/70 text-[#f5ebe0] hover:bg-[#261610] transition-colors border border-[#c9a687]/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image */}
        <div className="relative h-64 md:h-full min-h-[300px] bg-[#261610]">
          <img
            src={quickViewItem.image}
            alt={quickViewItem.name}
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#170d09] via-transparent to-transparent md:bg-gradient-to-r" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {quickViewItem.isVeg && (
              <span className="px-2.5 py-1 rounded-full bg-green-950/80 border border-green-500/40 text-green-400 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1">
                <Leaf className="w-3 h-3" /> Vegetarian
              </span>
            )}
            {quickViewItem.isChefSpecial && (
              <span className="px-2.5 py-1 rounded-full bg-[#d4af37]/90 text-[#0d0705] font-bold text-[10px] uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Chef Signature
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold">
                {quickViewItem.category}
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#f5ebe0] leading-tight mt-0.5">
                {quickViewItem.name}
              </h3>
              <p className="text-xl font-bold text-[#d4af37] mt-1">₹{quickViewItem.price}</p>
            </div>

            <p className="text-xs text-[#c9a687] leading-relaxed font-outfit">
              {quickViewItem.description}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#c9a687]/15 text-xs text-[#f5ebe0]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <span className="text-[10px] text-[#c9a687] block">Prep Time</span>
                  <span className="font-semibold">{quickViewItem.prepTime}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <span className="text-[10px] text-[#c9a687] block">Calories</span>
                  <span className="font-semibold">{quickViewItem.calories} kcal</span>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            {quickViewItem.ingredients && (
              <div>
                <span className="text-[10px] font-bold text-[#c9a687] uppercase tracking-wider block mb-1.5">
                  Key Ingredients & Craft
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickViewItem.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-2.5 py-1 rounded-lg bg-[#0d0705] border border-[#c9a687]/20 text-[11px] text-[#f5ebe0]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quantity & Add Button */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-[#c9a687]">Quantity:</span>
              <div className="flex items-center border border-[#c9a687]/30 rounded-xl bg-[#0d0705] px-2 py-1">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="p-1 text-[#c9a687] hover:text-[#f5ebe0]"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-bold text-sm text-[#f5ebe0]">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="p-1 text-[#c9a687] hover:text-[#f5ebe0]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c9a687] via-[#d4af37] to-[#ffe082] text-[#0d0705] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#d4af37]/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Order • ₹{quickViewItem.price * qty}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default QuickViewModal;
