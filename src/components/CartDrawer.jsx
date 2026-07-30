import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Tag, ArrowRight, CheckCircle2, Truck, CreditCard, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { handleImageError } from '../utils/imageUtils';
import confetti from 'canvas-confetti';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    applyCoupon,
    appliedCoupon,
    subtotal,
    discountAmount,
    deliveryCharge,
    taxes,
    grandTotal,
    totalItemsCount
  } = useCart();

  const { showToast } = useTheme();
  const [couponInput, setCouponInput] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput) return;
    const res = applyCoupon(couponInput);
    if (res.success) {
      showToast(res.message, 'success');
    } else {
      showToast(res.message, 'error');
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsCheckingOut(true);

    setTimeout(() => {
      setIsCheckingOut(false);
      const newOrderId = 'ABC-' + Math.floor(100000 + Math.random() * 900000);
      setOrderConfirmed({
        orderId: newOrderId,
        prepTime: '25-30 Mins',
        totalPaid: grandTotal,
        itemsCount: totalItemsCount
      });

      // Confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      clearCart();
      showToast('🎉 Order Successfully Placed!', 'success');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => {
          setIsCartOpen(false);
          setOrderConfirmed(null);
        }}
        className="absolute inset-0 bg-[#0d0705]/80 backdrop-blur-md transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#120a07] border-l border-[#c9a687]/20 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#c9a687]/15 flex items-center justify-between bg-[#170d09]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-lg font-bold text-[#f5ebe0]">Your Cart</h3>
                <p className="text-xs text-[#c9a687]">{totalItemsCount} items selected</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setOrderConfirmed(null);
              }}
              className="p-2 rounded-full hover:bg-[#261610] text-[#c9a687] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {orderConfirmed ? (
              /* Success Screen */
              <div className="text-center py-10 space-y-6 animate-fade-in">
                <div className="w-20 h-20 bg-[#d4af37]/20 border border-[#d4af37] rounded-full flex items-center justify-center mx-auto text-[#d4af37] shadow-xl shadow-[#d4af37]/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-2xl font-bold text-[#f5ebe0]">Order Confirmed!</h4>
                  <p className="text-sm text-[#c9a687] mt-1">Thank you for dining with Aurora Brew Cafe</p>
                </div>

                <div className="p-4 rounded-xl bg-[#170d09] border border-[#c9a687]/20 text-left space-y-2 text-sm">
                  <div className="flex justify-between border-b border-[#c9a687]/10 pb-2">
                    <span className="text-[#c9a687]">Order Number:</span>
                    <span className="font-mono font-bold text-[#d4af37]">{orderConfirmed.orderId}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#c9a687]/10 pb-2">
                    <span className="text-[#c9a687]">Estimated Time:</span>
                    <span className="font-semibold text-[#f5ebe0]">{orderConfirmed.prepTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#c9a687]">Amount Paid:</span>
                    <span className="font-bold text-[#d4af37]">₹{orderConfirmed.totalPaid}</span>
                  </div>
                </div>

                <p className="text-xs text-[#c9a687]/80 leading-relaxed">
                  Our baristas & chefs in C-Scheme are crafting your fresh gourmet order right now.
                </p>

                <button
                  onClick={() => {
                    setOrderConfirmed(null);
                    setIsCartOpen(false);
                  }}
                  className="w-full py-3 rounded-xl bg-[#d4af37] text-[#0d0705] font-bold uppercase tracking-wider text-xs hover:bg-[#ffe082] transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              /* Empty State */
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#170d09] border border-[#c9a687]/20 flex items-center justify-center mx-auto text-[#c9a687]/40">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif-luxury text-lg text-[#f5ebe0]">Your cart is currently empty</h4>
                <p className="text-xs text-[#c9a687] max-w-xs mx-auto">
                  Explore our artisanal menu featuring signature cold brews, saffron cardamom lattes, and truffle pizzas.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8c6046] to-[#d4af37] text-[#0d0705] font-bold text-xs uppercase tracking-wider"
                >
                  Explore Artisanal Menu
                </button>
              </div>
            ) : (
              /* Item List */
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-[#170d09] border border-[#c9a687]/15 flex items-center gap-3.5 hover:border-[#c9a687]/30 transition-all"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={handleImageError}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#c9a687]/20 bg-[#261610]"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-semibold text-sm text-[#f5ebe0] truncate">{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#c9a687]/40 hover:text-red-400 p-1 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-[#d4af37] font-bold mt-0.5">₹{item.price}</p>
                      
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-[#c9a687]/30 rounded-lg bg-[#0d0705] px-1.5 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-[#c9a687] hover:text-[#f5ebe0]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-[#f5ebe0]">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-[#c9a687] hover:text-[#f5ebe0]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-xs text-[#c9a687]/80">
                          Total: ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo Code Box */}
                <div className="pt-2">
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-4 h-4 text-[#c9a687] absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Coupon code (e.g. AURORA10)"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#170d09] border border-[#c9a687]/20 text-xs text-[#f5ebe0] placeholder-[#c9a687]/40 focus:outline-none focus:border-[#d4af37] uppercase font-mono"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#261610] border border-[#c9a687]/30 text-xs font-bold text-[#d4af37] hover:bg-[#3d2319] transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                  {appliedCoupon && (
                    <p className="text-[11px] text-green-400 mt-1 flex items-center gap-1 font-mono">
                      <Sparkles className="w-3 h-3" /> Code {appliedCoupon} applied ({couponDiscountPercent}% OFF)
                    </p>
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Footer Summary & Order CTA */}
          {cartItems.length > 0 && !orderConfirmed && (
            <div className="p-6 border-t border-[#c9a687]/15 bg-[#170d09] space-y-3">
              <div className="space-y-1.5 text-xs text-[#c9a687]">
                <div className="flex justify-between">
                  <span>Items Subtotal</span>
                  <span className="text-[#f5ebe0] font-medium">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Discount ({couponDiscountPercent}%)</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Taxes (GST 5%)</span>
                  <span className="text-[#f5ebe0] font-medium">₹{taxes}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery (Jaipur C-Scheme)</span>
                  <span className="text-[#f5ebe0] font-medium">
                    {deliveryCharge === 0 ? <span className="text-green-400 font-bold">FREE</span> : `₹${deliveryCharge}`}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#c9a687]/10 flex justify-between items-center text-base">
                <span className="font-serif-luxury font-bold text-[#f5ebe0]">Grand Total</span>
                <span className="font-bold text-xl text-[#d4af37]">₹{grandTotal}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={isCheckingOut}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c9a687] via-[#d4af37] to-[#ffe082] text-[#0d0705] font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#d4af37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                {isCheckingOut ? (
                  <span className="animate-pulse">Processing Order...</span>
                ) : (
                  <>
                    <span>Confirm Order & Pay</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
