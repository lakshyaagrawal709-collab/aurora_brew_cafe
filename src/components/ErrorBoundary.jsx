import React from 'react';
import { Coffee, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Aurora App Error Boundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0d0705] text-[#f5ebe0] flex flex-col items-center justify-center p-6 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-[#170d09] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow-2xl">
            <Coffee className="w-10 h-10" />
          </div>
          <div className="space-y-2 max-w-md">
            <h1 className="font-serif-luxury text-3xl font-bold text-[#f5ebe0]">Aurora Brew Cafe</h1>
            <p className="text-xs text-[#c9a687]">
              Something went wrong while rendering. Please click below to refresh the experience.
            </p>
          </div>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            className="px-6 py-3 rounded-full bg-[#d4af37] text-[#0d0705] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#ffe082] transition-colors"
          >
            <RefreshCw className="w-4 h-4" /> Reload Experience
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
