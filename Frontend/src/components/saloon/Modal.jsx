import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-lg transition-opacity duration-500"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-amber-500/10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-amber-400/5 via-transparent to-yellow-400/5 animate-wave-1"></div>
      </div>
      
      {/* Enhanced Modal Container */}
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-black border-2 border-yellow-500/50 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-fadeInUp shadow-2xl shadow-yellow-500/20 backdrop-blur-sm">
        {/* Enhanced Animated Border Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/30 to-yellow-500/0 opacity-60 animate-pulse-golden pointer-events-none rounded-3xl"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-yellow-400/30 to-amber-500/20 rounded-3xl blur opacity-50 animate-pulse-slow pointer-events-none"></div>
        
        {/* Header */}
        <div className="relative flex items-center justify-between p-10 border-b-2 border-yellow-500/40 bg-gradient-to-r from-yellow-500/10 via-black to-amber-500/10 backdrop-blur-sm">
          <div className="flex items-center space-x-6">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 via-amber-400 to-yellow-300 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/40">
              <Sparkles className="w-7 h-7 text-black animate-pulse" />
            </div>
            <h2 className="font-playfair text-4xl font-semibold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent animate-shimmer">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-4 hover:bg-yellow-500/15 rounded-2xl transition-all duration-300 group border-2 border-yellow-500/30 hover:border-yellow-500/50 backdrop-blur-sm"
          >
            <X className="w-7 h-7 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
          </button>

          
        </div>

        
        
        {/* Content */}
        <div className="relative p-10 overflow-y-auto max-h-[calc(90vh-12rem)] hide-scrollbar">
          {children}
        </div>

        
      </div>
    </div>
  );
};

export default Modal;