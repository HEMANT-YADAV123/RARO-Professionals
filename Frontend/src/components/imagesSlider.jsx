import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: './slider.jpg',
    quote: 'Best Makeup Artist'
  },
  {
    id: 2,
    image: './A.jpg',
    quote: 'Professional Bridal Looks'
  },
  {
    id: 3,
    image: './bridal.jpg',
    quote: 'Transforming Beauty with Elegance'
  },
  {
    id: 4,
    image: './CC.jpg',
    quote: 'Your Dream Look Awaits'
  },
  {
    id: 5,
    image: './B.jpg',
    quote: 'Flawless Finish for Every Occasion'
  },
  {
    id: 6,
    image: './FF.jpg',
    quote: 'Luxury Bridal Experience'
  }
];

const BridalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef(null);
  const autoplayRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const startAutoplay = () => {
    autoplayRef.current = setInterval(nextSlide, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
    stopAutoplay();
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - dragStart;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 100;
    if (dragOffset > threshold) {
      prevSlide();
    } else if (dragOffset < -threshold) {
      nextSlide();
    }
    
    setDragOffset(0);
    startAutoplay();
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  useEffect(() => {
    const handleMouseUp = () => handleDragEnd();
    const handleMouseMove = (e) => handleDragMove(e);
    
    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging, dragStart]);

  return (
    <div >

    

      {/* Slider Container */}
      <div className="relative">
        <div 
          ref={sliderRef}
          className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden  shadow-2xl cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: dragOffset
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className="relative w-full h-full group">
                <motion.img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].quote}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Quote */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <motion.h2 
                    className="text-2xl  md:text-4xl lg:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 mb-4 leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    "{slides[currentSlide].quote}"
                  </motion.h2>
                  
                  <motion.div 
                    className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-yellow-400 p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
        
        <motion.button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-yellow-400 p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={24} />
        </motion.button>

        {/* Dots Indicator */}
        {/* <div className="flex justify-center mt-8 space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 w-8' 
                  : 'bg-gray-400 hover:bg-yellow-300'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default BridalSlider;