import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { CheckCircle, AlertCircle, Info, Sparkles } from 'lucide-react';

const Toast = () => {
  const { toast } = useTheme();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-400" />,
    error: <AlertCircle className="w-5 h-5 text-red-400" />,
    info: <Sparkles className="w-5 h-5 text-[#d4af37]" />
  };

  return (
    <div className="fixed top-20 right-6 z-50 animate-bounce">
      <div className="px-4 py-3 rounded-2xl bg-[#170d09]/95 backdrop-blur-md border border-[#c9a687]/30 text-xs font-semibold text-[#f5ebe0] shadow-2xl flex items-center gap-3">
        {icons[toast.type] || icons.info}
        <span>{toast.message}</span>
      </div>
    </div>
  );
};

export default Toast;
