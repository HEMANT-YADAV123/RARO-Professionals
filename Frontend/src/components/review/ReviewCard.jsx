import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
  const { name, avatar, rating, text, service, featured } = review;

  return (
    <div className="max-w-4xl mx-auto">
      <div className={`
        relative
        bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-6 md:p-8 rounded-lg
        border border-yellow-700/30 backdrop-blur-sm
        before:absolute before:inset-0 before:bg-yellow-400/5 before:rounded-lg before:pointer-events-none
        hover:before:bg-yellow-400/10 transition-all duration-500
        ${featured ? 'ring-2 ring-yellow-400/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]' : ''}
      `}>
        {featured && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-6 py-1 rounded-full text-sm font-bold shadow-lg">
            Featured Review
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-yellow-400 shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-500">
                <img 
                  src={avatar} 
                  alt={name} 
                  className="w-full h-full object-cover"
                />
              </div>
              {featured && (
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black p-1 rounded-full shadow-lg">
                  <Star size={16} fill="currentColor" />
                </div>
              )}
            </div>
            <h3 className="mt-3 font-bold text-white text-lg">{name}</h3>
            <p className="text-sm text-yellow-400 font-medium uppercase tracking-wider">{service}</p>
          </div>

          <div className="flex-1">
            <div className="mb-3 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className={`transition-all duration-300 ${
                    i < rating 
                      ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_2px_rgba(212,175,55,0.5)]" 
                      : "text-gray-600"
                  }`} 
                />
              ))}
            </div>
            
            <div className="relative">
              {featured && (
                <>
                  <div className="absolute -left-4 top-0 text-yellow-400/20 text-6xl font-serif">"</div>
                  <div className="absolute -right-4 bottom-0 text-yellow-400/20 text-6xl font-serif">"</div>
                </>
              )}
              <p className="text-gray-300 relative z-10 italic leading-relaxed">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;