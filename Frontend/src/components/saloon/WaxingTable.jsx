import React from 'react';
import { Zap, Star, Heart } from 'lucide-react';

const WaxingTable = () => {
  const waxingTypes = [
    {
      name: 'Regular Wax',
      description: 'Traditional waxing service for smooth, hair-free skin with gentle care and professional application',
      color: 'from-yellow-500 to-amber-600',
      borderColor: 'border-yellow-500/40',
      textColor: 'text-yellow-400',
      bgColor: 'bg-yellow-500/15',
      icon: <Zap className="w-7 h-7" />,
      features: ['Gentle formula', 'Quick application', 'Professional care'],
      backgroundImage: 'https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg'
    },
    {
      name: 'White Chocolate Wax',
      description: 'Luxurious chocolate-infused wax for sensitive skin with nourishing properties and delightful aroma',
      color: 'from-amber-500 to-yellow-600',
      borderColor: 'border-amber-500/40',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-500/15',
      icon: <Heart className="w-7 h-7" />,
      features: ['Sensitive skin friendly', 'Moisturizing formula', 'Pleasant chocolate aroma'],
      backgroundImage: 'https://images.pexels.com/photos/3997977/pexels-photo-3997977.jpeg'
    },
    {
      name: 'Rica Wax',
      description: 'Premium liposoluble wax for gentle hair removal with superior results and long-lasting smoothness',
      color: 'from-yellow-600 to-amber-500',
      borderColor: 'border-yellow-600/40',
      textColor: 'text-yellow-300',
      bgColor: 'bg-yellow-600/15',
      icon: <Star className="w-7 h-7" />,
      features: ['Premium quality', 'Long-lasting results', 'Professional grade formula'],
      backgroundImage: 'https://images.pexels.com/photos/3997971/pexels-photo-3997971.jpeg'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {waxingTypes.map((waxType, index) => (
        <div 
          key={index}
          className={`group relative bg-gradient-to-br from-black via-black to-black border-2 ${waxType.borderColor} rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-500/30 hover:-translate-y-4 cursor-pointer backdrop-blur-sm`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700">
            <img 
              src={waxType.backgroundImage} 
              alt={`${waxType.name} background`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90"></div>
          </div>

          {/* Enhanced Animated Top Bar */}
          <div className={`h-3 bg-gradient-to-r ${waxType.color} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </div>
          
          {/* Faded Border Glow */}
          <div className={`absolute inset-0 bg-gradient-to-r ${waxType.color.replace('from-', 'from-').replace('to-', 'to-')}/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl`}></div>
          
          {/* Content */}
          <div className="p-10 relative">
            {/* Enhanced Floating Icon */}
            <div className={`inline-flex items-center justify-center w-16 h-16 ${waxType.bgColor} ${waxType.borderColor} border-2 rounded-full mb-6 ${waxType.textColor} group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm shadow-lg`}>
              {waxType.icon}
            </div>
            
            <h3 className={`font-playfair text-3xl font-semibold ${waxType.textColor} mb-6 group-hover:text-opacity-90 transition-colors`}>
              {waxType.name}
            </h3>
            
            <p className="text-yellow-200 text-base leading-relaxed mb-8">
              {waxType.description}
            </p>
            
            {/* Enhanced Features */}
            <div className="space-y-4">
              {waxType.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-black/50 via-black/40 to-black/50 rounded-lg backdrop-blur-sm border border-yellow-500/30">
                  <div className={`w-3 h-3 bg-gradient-to-r ${waxType.color} rounded-full animate-pulse`}></div>
                  <span className="text-yellow-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default WaxingTable;