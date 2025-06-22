import React from 'react';
import { ChevronRight, Star } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  image, 
  features, 
  onClick,
  className = "",
  style
}) => {
  return (
    <div 
      className={`group relative bg-gradient-to-br from-black via-gray-900 to-black border-2 border-yellow-500/40 rounded-2xl overflow-hidden transition-all duration-700 hover:border-yellow-400/70 hover:shadow-2xl hover:shadow-yellow-500/30 hover:-translate-y-4 cursor-pointer transform-gpu backdrop-blur-sm ${className}`}
      onClick={onClick}
      style={style}
    >
      {/* Enhanced Animated Border Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/30 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-yellow-400/30 to-amber-500/20 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
      
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Enhanced Floating Icon */}
        <div className="absolute top-3 right-3 w-10 h-10 bg-gradient-to-r from-yellow-500/30 via-amber-400/20 to-yellow-500/30 backdrop-blur-lg border-2 border-yellow-500/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
        </div>
      </div>
      
      <div className="relative p-6 bg-gradient-to-b from-black/95 via-gray-900/90 to-black/95 border-t border-yellow-500/20">
        <h3 className="font-playfair text-xl font-semibold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
          {description}
        </p>
        
        {features && features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {features.slice(0, 2).map((feature, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500/15 via-amber-400/10 to-yellow-500/15 border border-yellow-500/40 rounded-full text-xs text-yellow-400 transition-all duration-300 hover:bg-yellow-500/25 backdrop-blur-sm"
                >
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mr-2 animate-pulse"></div>
                  {feature}
                </span>
              ))}
              {features.length > 2 && (
                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-amber-500/15 via-yellow-400/10 to-amber-500/15 border border-amber-500/40 rounded-full text-xs text-amber-400 backdrop-blur-sm">
                  +{features.length - 2} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-3 border-t border-yellow-500/20">
          <span className="text-yellow-400 font-medium text-sm group-hover:text-yellow-300 transition-colors">
            Learn More
          </span>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-500/15 via-amber-400/10 to-yellow-500/15 border border-yellow-500/40 rounded-full flex items-center justify-center group-hover:bg-yellow-500/25 group-hover:border-yellow-400/60 transition-all duration-300 backdrop-blur-sm">
              <ChevronRight className="w-4 h-4 text-yellow-400 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Hover Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"></div>
    </div>
  );
};

export default ServiceCard;