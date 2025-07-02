import React from 'react';
import { motion } from 'framer-motion';
import Portrait from '../assets/A.jpg'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden mt-20 md:mt-20 lg:mt-28 p-2 sm:p-4">
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

      {/* Floating Decorative Icons - Hidden on small screens */}
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
        className="absolute top-16 left-16 text-[#D4AF37] hidden md:block"
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
        className="absolute top-32 right-20 text-[#D4AF37] hidden md:block"
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
        className="absolute bottom-24 left-24 text-[#D4AF37] hidden md:block"
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
        className="absolute bottom-32 right-32 text-[#D4AF37] hidden md:block"
      >
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center px-3 sm:px-6 py-6 sm:py-12">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left relative order-1 lg:order-1"
        >
          {/* Decorative Background Glow */}
          <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-3xl blur-2xl"></div>
          
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
              className="text-[#D4AF37] text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-serif italic mb-4 sm:mb-6 relative"
            >
              Meet
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#D4AF37] to-transparent"
              ></motion.div>
            </motion.h2>

            {/* Subtitle with animated lines */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-6 mb-6 sm:mb-8"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "2rem" }}
                transition={{ duration: 1, delay: 1 }}
                className="sm:w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]"
              ></motion.div>
              <h3 className="text-white text-sm md:text-base lg:text-lg font-light tracking-[0.1em] sm:tracking-[0.2em] uppercase px-2 sm:px-0">
                The Wonder Behind The Magic
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "2rem" }}
                transition={{ duration: 1, delay: 1 }}
                className="sm:w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]"
              ></motion.div>
            </motion.div>

            {/* Sparkles Animation - Hidden on very small screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex justify-center lg:justify-start gap-3 mb-6 sm:mb-8 sm:flex"
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
              className="text-[#D4AF37] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif italic mb-8 sm:mb-12 relative"
            >
              Pooja and Rohit
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-[#D4AF37] opacity-60 hidden sm:block"
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
            <div className="absolute -inset-2 sm:-inset-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D4AF37]/20"></div>
            <div className="relative tracking-wide font-bold p-3 sm:p-6 text-gray-300 text-lg lg:text-lg max-w-2xl space-y-3 sm:space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                Pooja and Rohit are among the{' '}
                <span className="text-[#D4AF37] font-semibold">
                  best bridal makeup artists in Delhi
                </span>
                . Their journey began together in 2012, driven by a shared passion for the art of transformation and beauty. From humble beginnings to working with renowned industry professionals, they have built a name for themselves as {''}
                <span className="text-[#D4AF37] font-semibold">well-known and trusted experts</span>{' '}
                in the bridal makeup industry.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                Combining their unique styles and strengths, Pooja and Rohit collaborate seamlessly to deliver{' '}
                <span className="text-[#D4AF37] font-semibold">exquisite and glamorous looks</span>{' '}
                <span className="text-[#D4AF37] font-semibold">in Delhi</span>, making them the go-to artists for weddings, events, and special occasions. For them, every bride deserves nothing less than perfection on her big day.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative order-1 lg:order-2 mt-14 md:mt-0"
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
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[700px] object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent"></div>
            </div>
          </div>
          
          {/* Floating accent elements - Hidden on small screens */}
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
            className="absolute top-16 -left-6 text-[#D4AF37] opacity-60 hidden lg:block"
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
            className="absolute bottom-20 -right-6 text-[#D4AF37] opacity-50 hidden lg:block"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;