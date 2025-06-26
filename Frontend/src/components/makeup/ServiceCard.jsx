import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  isHighlight = false,
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        relative bg-black/90 backdrop-blur-sm border-2 border-yellow-400 rounded-xl p-6 
        shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 
        hover:border-yellow-300 hover:scale-105 cursor-pointer group
        ${isHighlight ? 'bg-gradient-to-br from-yellow-400/20 via-black/90 to-black/90 border-yellow-300' : ''}
        overflow-hidden
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Animated background glow */}
      <div className={`
        absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/5 
        transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}
      `} />
      
      {/* Floating sparkles */}
      <div className="absolute top-2 right-2">
        <Sparkles className={`
          w-4 h-4 text-yellow-400/60 transition-all duration-500
          ${isHovered ? 'animate-spin scale-125 text-yellow-300' : ''}
        `} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`
            font-serif text-xl font-bold text-yellow-400 uppercase tracking-wide
            transition-all duration-300 group-hover:text-yellow-300
            ${isHighlight ? 'text-2xl' : ''}
          `}>
            {title}
          </h3>
          <div className={`
            w-8 h-8 rounded-full border-2 border-yellow-400/50 flex items-center justify-center
            transition-all duration-300 group-hover:border-yellow-300 group-hover:bg-yellow-400/10
          `}>
            <ArrowRight className={`
              w-4 h-4 text-yellow-400 transition-all duration-300
              ${isHovered ? 'translate-x-1 text-yellow-300' : ''}
            `} />
          </div>
        </div>
        
        {description && (
          <p className={`
            text-gray-300 text-sm leading-relaxed transition-all duration-300
            group-hover:text-gray-200
          `}>
            {description}
          </p>
        )}
        
        {/* Click hint */}
        <div className="mt-4">
          <p className="text-yellow-400/70 text-xs uppercase tracking-wide">
            Click for details
          </p>
        </div>
        
        {/* Animated bottom border */}
        <div className={`
          mt-4 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full
          transition-all duration-500 transform origin-left
          ${isHovered ? 'scale-x-100' : 'scale-x-0'}
        `} />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-400/30 rounded-tl-xl" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-400/30 rounded-br-xl" />
    </div>
  );
};

export default ServiceCard;