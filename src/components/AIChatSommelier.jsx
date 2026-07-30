import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, Coffee, Heart, Utensils, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { menuItems } from '../data/mockData';
import { handleImageError } from '../utils/imageUtils';

const AIChatSommelier = () => {
  const { isAiChatOpen, setIsAiChatOpen, setQuickViewItem } = useTheme();
  const { addToCart } = useCart();

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Namaste! I am Aurora's AI Coffee & Culinary Sommelier. How are you feeling today? Tell me your mood or craving and I will tailor the perfect coffee & dish pairing for you!"
    }
  ]);
  const [input, setInput] = useState('');

  if (!isAiChatOpen) {
    return (
      <button
        onClick={() => setIsAiChatOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#261610] via-[#3d2319] to-[#d4af37] border border-[#d4af37]/40 text-[#f5ebe0] shadow-2xl shadow-[#d4af37]/30 hover:scale-105 transition-all duration-300 group"
      >
        <div className="relative">
          <Bot className="w-5 h-5 text-[#d4af37] group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping" />
        </div>
        <span className="font-serif-luxury text-xs font-semibold tracking-wider text-[#f5ebe0] hidden sm:inline">
          AI Coffee Sommelier
        </span>
      </button>
    );
  }

  const moodPresets = [
    { label: "⚡ High Energy Boost", mood: "energy" },
    { label: "🍰 Sweet Tooth Craving", mood: "sweet" },
    { label: "🌹 Romantic Date Night", mood: "romantic" },
    { label: "🌿 Low Calorie & Healthy", mood: "healthy" }
  ];

  const handleSend = (userText) => {
    const textToProcess = userText || input;
    if (!textToProcess.trim()) return;

    const userMsg = { sender: 'user', text: textToProcess };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Generate intelligent AI pairing response based on query keywords
    setTimeout(() => {
      let botResponse = {};
      const lower = textToProcess.toLowerCase();

      if (lower.includes('energy') || lower.includes('boost') || lower.includes('strong') || lower.includes('caffeine')) {
        const item = menuItems.find(i => i.id === 'sig-2') || menuItems[1];
        botResponse = {
          sender: 'bot',
          text: "For an intense energy boost, I recommend our 20-Hour Smoked Vanilla Cold Brew paired with Belgian Butter Croissants!",
          recommendation: item
        };
      } else if (lower.includes('sweet') || lower.includes('dessert') || lower.includes('cake') || lower.includes('chocolate')) {
        const item = menuItems.find(i => i.id === 'des-1') || menuItems[15];
        botResponse = {
          sender: 'bot',
          text: "Indulge your sweet tooth! Our signature Basque Burnt Cheesecake paired with Cinnamon Mocha Bliss is absolute heaven.",
          recommendation: item
        };
      } else if (lower.includes('romantic') || lower.includes('date') || lower.includes('special')) {
        const item = menuItems.find(i => i.id === 'sig-1') || menuItems[0];
        botResponse = {
          sender: 'bot',
          text: "For a memorable date night in C-Scheme, start with our Royal Saffron Cardamom Latte infused with 24k gold leaf, followed by Truffle Burrata Pizza.",
          recommendation: item
        };
      } else {
        const item = menuItems[0];
        botResponse = {
          sender: 'bot',
          text: "Our guests' top favorite choice today is the Royal Saffron Cardamom Latte! Would you like to view its recipe or add it to your order?",
          recommendation: item
        };
      }

      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[380px] h-[520px] bg-[#120a07] border border-[#d4af37]/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
      
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-[#261610] to-[#170d09] border-b border-[#c9a687]/20 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-serif-luxury text-sm font-bold text-[#f5ebe0]">Aurora AI Sommelier</h4>
            <p className="text-[10px] text-green-400 font-mono">● Online • Jaipur Barista AI</p>
          </div>
        </div>
        <button
          onClick={() => setIsAiChatOpen(false)}
          className="p-1.5 rounded-full hover:bg-[#261610] text-[#c9a687]"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[#d4af37] text-[#0d0705] font-medium rounded-br-none'
                  : 'bg-[#170d09] border border-[#c9a687]/20 text-[#f5ebe0] rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>

            {/* Recommendation card trigger */}
            {msg.recommendation && (
              <div className="mt-2 p-2.5 rounded-xl bg-[#261610] border border-[#d4af37]/40 flex items-center gap-2.5 w-[85%] animate-fade-in">
                <img
                  src={msg.recommendation.image}
                  alt={msg.recommendation.name}
                  onError={handleImageError}
                  className="w-12 h-12 rounded-lg object-cover border border-[#c9a687]/20 shrink-0 bg-[#0d0705]"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="font-bold text-[11px] text-[#f5ebe0] truncate">{msg.recommendation.name}</h5>
                  <p className="text-[10px] text-[#d4af37] font-bold">₹{msg.recommendation.price}</p>
                  <button
                    onClick={() => {
                      addToCart(msg.recommendation);
                    }}
                    className="mt-1 px-2 py-0.5 rounded bg-[#d4af37] text-[#0d0705] font-bold text-[9px] uppercase"
                  >
                    Quick Add to Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Mood Presets */}
      <div className="px-3 py-1.5 border-t border-[#c9a687]/10 flex gap-1.5 overflow-x-auto bg-[#0d0705]">
        {moodPresets.map((p) => (
          <button
            key={p.mood}
            onClick={() => handleSend(p.label)}
            className="px-2.5 py-1 rounded-full bg-[#170d09] border border-[#c9a687]/20 text-[10px] text-[#c9a687] whitespace-nowrap hover:border-[#d4af37] transition-colors shrink-0"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-[#170d09] border-t border-[#c9a687]/20 flex gap-2"
      >
        <input
          type="text"
          placeholder="Ask for coffee pairing or advice..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-3 py-2 rounded-xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] placeholder-[#c9a687]/40 focus:outline-none focus:border-[#d4af37]"
        />
        <button
          type="submit"
          className="p-2 rounded-xl bg-[#d4af37] text-[#0d0705] hover:bg-[#ffe082] transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};

export default AIChatSommelier;
