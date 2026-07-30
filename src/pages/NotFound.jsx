import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Home as HomeIcon } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-4 space-y-6">
      <div className="w-20 h-20 rounded-full bg-[#170d09] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow-2xl">
        <Coffee className="w-10 h-10 animate-bounce" />
      </div>
      
      <div className="space-y-2">
        <h1 className="font-serif-luxury text-6xl font-extrabold text-[#d4af37]">404</h1>
        <h2 className="font-serif-luxury text-2xl font-bold text-[#f5ebe0]">Brewing Your Lost Page...</h2>
        <p className="text-xs text-[#c9a687] max-w-sm mx-auto">
          The page you are looking for has spilled or moved to a new table. Let's get you back to our main menu!
        </p>
      </div>

      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#c9a687] via-[#d4af37] to-[#ffe082] text-[#0d0705] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all shadow-xl"
      >
        <HomeIcon className="w-4 h-4" /> Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
