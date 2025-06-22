import React from 'react';
import { motion } from 'framer-motion';
import Portrait from '../assets/A.jpg'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden mt-14 md:mt-20 lg:mt-28 p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#D4AF37] opacity-20"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Floating Decorative Icons */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-16 left-16 text-[#D4AF37]"
      >
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 15, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 right-20 text-[#D4AF37]"
      >
        
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, 20, 0],
          rotate: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-24 left-24 text-[#D4AF37]"
      >
      </motion.div>

      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-32 right-32 text-[#D4AF37]"
      >
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 py-12">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left relative"
        >
          {/* Decorative Background Glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-3xl blur-2xl"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Meet Header */}
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[#D4AF37] text-7xl lg:text-8xl font-serif italic mb-6 relative"
            >
              Meet
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent"
              ></motion.div>
            </motion.h2>

            {/* Subtitle with animated lines */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-6 mb-8"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 1, delay: 1 }}
                className="h-px bg-gradient-to-r from-transparent to-[#D4AF37]"
              ></motion.div>
              <h3 className="text-white text-lg font-light tracking-[0.2em] uppercase">
                The Wonder Behind The Magic
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 1, delay: 1 }}
                className="h-px bg-gradient-to-l from-transparent to-[#D4AF37]"
              ></motion.div>
            </motion.div>

            {/* Sparkles Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex justify-center lg:justify-start gap-3 mb-8"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
              </motion.div>
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
              </motion.div>
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                
              </motion.div>
            </motion.div>

            {/* Name with dramatic entrance */}
            <motion.h1
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
              className="text-[#D4AF37] text-6xl lg:text-7xl font-serif italic mb-12 relative"
            >
              Pooja and Rohit
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute -top-4 -right-4 text-[#D4AF37] opacity-60"
              >
              </motion.div>
            </motion.h1>
          </motion.div>

          {/* Description with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D4AF37]/20"></div>
            <div className="relative p-6 text-gray-300 text-lg leading-relaxed max-w-2xl space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                Pooja is one of the{' '}
                <span className="text-[#D4AF37] font-semibold">
                  best bridal makeup artists in Mumbai
                </span>
                . She has been enamored by the concept of makeup from a young age. Her passion led her to a specialized makeup course by a renowned industry expert.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                With her industry connections and level of expertise, she can assure you an{' '}
                <span className="text-[#D4AF37] font-semibold">exquisite and glamorous look</span>{' '}
                for your wedding, because the bride only deserves the best on her big day!
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative group">
            {/* Image with enhanced styling */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                src={Portrait}
                alt="Pooja"
                className="w-full h-[700px] object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent"></div>
            </div>
          </div>
          
          {/* Floating accent elements */}
          <motion.div
            animate={{ 
              x: [0, 10, 0],
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-16 -left-6 text-[#D4AF37] opacity-60"
          >
            
          </motion.div>

          <motion.div
            animate={{ 
              x: [0, -8, 0],
              y: [0, 8, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 -right-6 text-[#D4AF37] opacity-50"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;