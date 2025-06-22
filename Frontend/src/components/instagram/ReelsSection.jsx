import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import ReelsCarousel from './ReelsCarousel';
import { reelsData } from './Data/reelsData';
const FloatingParticle = ({ delay = 0, duration = 6 }) => (
  <motion.div
    className="absolute w-2 h-2 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full opacity-30"
    initial={{ 
      x: Math.random() * window.innerWidth, 
      y: window.innerHeight + 20,
      scale: 0 
    }}
    animate={{ 
      y: -20, 
      scale: [0, 1, 0.5, 1, 0],
      x: Math.random() * window.innerWidth,
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const GoldenOrb = ({ size, left, top, delay = 0 }) => (
  <motion.div 
    className={`absolute ${size} bg-gradient-radial from-yellow-300/20 via-yellow-400/10 to-transparent rounded-full blur-sm`}
    style={{ left, top }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [0.8, 1.2, 0.8], 
      opacity: [0.1, 0.3, 0.1] 
    }}
    transition={{
      duration: 4,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const ReelsSection = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-black overflow-hidden min-h-screen">
      {/* Diagonal Moving Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-diagonal-glow"></div>
      </div>

      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-900/10 via-transparent to-black opacity-60"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 via-transparent to-yellow-600/10 animate-pulse-glow"></div>
      </div>

      {/* Floating Golden Orbs */}
      <GoldenOrb size="w-32 h-32" left="10%" top="20%" delay={0} />
      <GoldenOrb size="w-24 h-24" left="80%" top="60%" delay={1.5} />
      <GoldenOrb size="w-20 h-20" left="15%" top="70%" delay={3} />
      <GoldenOrb size="w-28 h-28" left="70%" top="15%" delay={2} />
      <GoldenOrb size="w-16 h-16" left="50%" top="80%" delay={4} />

      {/* Floating Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <FloatingParticle 
          key={i} 
          delay={i * 0.8} 
          duration={6 + (i % 3) * 2}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Background Glow for Heading */}
          <div className="relative inline-block">
            
            <motion.h2 
              className="relative text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
              <span className="italic flex items-center justify-center gap-3">
                Bridal Moments 
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✨
                </motion.span>
              </span>
            </motion.h2>
          </div>
          
          {/* Animated Divider */}
          <motion.div 
            className="relative w-32 h-1 mx-auto mb-8 overflow-hidden rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </motion.div>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            Explore our stunning collection of bridal inspirations and magical moments.
            <br />
            <span className="text-yellow-300 font-medium">Tap on any reel to view on Instagram.</span>
          </motion.p>

          {/* Decorative Elements */}
          <motion.div 
            className="flex justify-center items-center gap-4 mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </motion.div>
            
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-5 h-5 text-yellow-400 fill-current" />
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </motion.div>
          </motion.div>
        </motion.div>
         <ReelsCarousel reels={reelsData} />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default ReelsSection;