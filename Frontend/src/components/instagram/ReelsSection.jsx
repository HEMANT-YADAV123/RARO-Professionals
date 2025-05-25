import React from 'react';
import ReelsCarousel from './ReelsCarousel';
import { reelsData } from './Data/reelsData';

const ReelsSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-gold-400">
            Bridal <span className="italic">Moments</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-4"></div>
          <p className="text-gold-200 max-w-2xl mx-auto text-lg">
            Explore our stunning collection of bridal inspirations and magical moments.
            Tap on any reel to view on Instagram.
          </p>
        </div>
        
        <ReelsCarousel reels={reelsData} />
      </div>
    </section>
  );
};

export default ReelsSection;