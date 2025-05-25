import React, { useRef, useState } from 'react';
import ReelCard from './ReelCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReelsCarousel = ({ reels }) => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const newPosition = carouselRef.current.scrollLeft;
      const maxScrollValue = 
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      
      setScrollPosition(newPosition);
      setMaxScroll(maxScrollValue);
    }
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      const newPosition = 
        direction === 'left' 
          ? carouselRef.current.scrollLeft - scrollAmount 
          : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative group w-full">
      <div 
        ref={carouselRef} 
        className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth"
        onScroll={handleScroll}
      >
        <div className="flex gap-4 md:gap-6 px-4 md:px-0">
          {reels.map((reel, index) => (
            <ReelCard key={index} reel={reel} />
          ))}
        </div>
      </div>

      <button 
        className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-gold-400 
                   p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300 ${scrollPosition <= 10 ? 'hidden' : ''}`}
        onClick={() => scroll('left')}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-gold-400 
                   p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300 ${scrollPosition >= maxScroll - 10 ? 'hidden' : ''}`}
        onClick={() => scroll('right')}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ReelsCarousel;