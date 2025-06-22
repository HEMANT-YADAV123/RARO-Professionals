import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import StressImage from "../assets/bride5.jpg"

const StressSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={StressImage}
          alt="Beautiful bride"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 text-[#D4AF37] opacity-60"
      >
        <Star size={32} fill="currentColor" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-32 right-24 text-[#D4AF37] opacity-40"
      >
        <Heart size={28} fill="currentColor" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white text-5xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            DON'T STRESS YOUR{' '}
            <span className="relative">
              <span className="text-[#D4AF37]">PRETTY HEART</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 h-1 bg-[#D4AF37] opacity-60"
              ></motion.div>
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
            <div className="relative p-8 border border-[#D4AF37]/30 rounded-2xl">
              <p className="text-[#D4AF37] text-2xl lg:text-3xl font-serif italic leading-relaxed">
                You know we're the best! Dear bride-to-be,{' '}
                <span className="text-white font-light">Raro Professionals</span> is at your service!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center items-center gap-4"
          >
            <div className="h-px bg-[#D4AF37] w-24"></div>
            <Star className="text-[#D4AF37] w-6 h-6" fill="currentColor" />
            <div className="h-px bg-[#D4AF37] w-24"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StressSection;