import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { faqs } from '../data/mockData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      
      <div className="text-center space-y-3">
        <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">Help & Information</span>
        <h1 className="font-serif-luxury text-4xl font-bold text-[#f5ebe0]">
          Frequently Asked Questions
        </h1>
        <p className="text-xs text-[#c9a687]">
          Everything you need to know about visiting Aurora Brew Cafe in C-Scheme, Jaipur.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-[#170d09] border border-[#c9a687]/20 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#f5ebe0] hover:text-[#d4af37] transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs text-[#c9a687] leading-relaxed border-t border-[#c9a687]/10 pt-3 animate-fade-in font-outfit">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default FAQ;
