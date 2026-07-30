import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponDiscountPercent, setCouponDiscountPercent] = useState(0);
  const [orderSuccessModal, setOrderSuccessModal] = useState(null);

  const addToCart = (item, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i);
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === itemId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
    setCouponDiscountPercent(0);
  };

  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'AURORA10') {
      setAppliedCoupon('AURORA10');
      setCouponDiscountPercent(10);
      return { success: true, message: '10% Discount Coupon Applied!' };
    } else if (cleanCode === 'JAIPUR20') {
      setAppliedCoupon('JAIPUR20');
      setCouponDiscountPercent(20);
      return { success: true, message: '20% Jaipur Special Discount Applied!' };
    } else if (cleanCode === 'HAPPYHOURS') {
      setAppliedCoupon('HAPPYHOURS');
      setCouponDiscountPercent(15);
      return { success: true, message: 'Happy Hours 15% Discount Applied!' };
    } else {
      return { success: false, message: 'Invalid Coupon Code. Try "AURORA10"' };
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = Math.round((subtotal * couponDiscountPercent) / 100);
  const deliveryCharge = subtotal > 500 || subtotal === 0 ? 0 : 49;
  const taxes = Math.round((subtotal - discountAmount) * 0.05); // 5% GST
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryCharge + taxes);

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      setIsCartOpen,
      addToCart,
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
      totalItemsCount,
      orderSuccessModal,
      setOrderSuccessModal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
