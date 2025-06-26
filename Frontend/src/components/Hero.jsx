import React from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  function handleBooknow() {
    navigate('/Contactus')
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#0f0f0f]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#D4AF37] opacity-10"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Decorative Icons */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-20 text-[#D4AF37] opacity-30"
      >
        <Star size={40} fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 right-24 text-[#D4AF37] opacity-20"
      >
        <Sparkles size={36} />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 left-12 text-[#D4AF37] opacity-25"
      >
        <Calendar size={32} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white text-4xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            WHAT ARE YOU
            <br />
            <span className="relative">
              <span className="text-[#D4AF37]">WAITING FOR</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B1]"
              ></motion.div>
            </span>
            <span className="text-white">?</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Your dream look is just one click away. Let us transform you into
            the most beautiful version of yourself.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4 mb-12"
          >
            <div className="h-px bg-gradient-to-r from-transparent to-[#D4AF37] w-24"></div>
            <Star className="text-[#D4AF37] w-6 h-6" fill="currentColor" />
            <Sparkles className="text-[#D4AF37] w-5 h-5" />
            <Star className="text-[#D4AF37] w-4 h-4" fill="currentColor" />
            <div className="h-px bg-gradient-to-l from-transparent to-[#D4AF37] w-24"></div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBooknow}
              className="group relative bg-gradient-to-r from-[#D4AF37] to-[#F4E5B1] text-[#141414] px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3 cursor-pointer">
                <Calendar className="w-6 h-6" />
                BOOK NOW
              </span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.button>

            {/* Secondary CTA Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(212, 175, 55, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-[#D4AF37] text-[#D4AF37] px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#141414] relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Phone className="w-6 h-6" />
                CALL US
              </span>
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-gray-400"
          >
            <p className="text-lg mb-2">Ready to look stunning?</p>
            <p className="text-[#D4AF37] font-medium">
              Call us at +91 98765 43210
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-[#D4AF37] opacity-5 blur-3xl rounded-full"></div>
    </section>
  );
};

export default CTASection;
