import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Sparkles, Heart, Crown, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const shimmerVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      },
    },
  };

  const navigateToPage = (page) => {
    // Mock navigation - replace with actual navigation logic
    console.log(`Navigating to ${page}`);
  };

  const navigate = useNavigate();
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative  bg-black py-20 px-4 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Golden Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Subtle Moving Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
            style={{
              width: `${200 + Math.random() * 300}px`,
              top: `${20 + i * 20}%`,
              left: `-200px`,
            }}
            animate={{
              x: ["0vw", "150vw"],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          />
        ))}

        {/* Pulsing Circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute border border-yellow-400/10 rounded-full"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Golden Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Subtle Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
            style={{ fontFamily: "Playball, cursive" }}
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text">
                Professional Bridal Makeup Studio
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                variants={shimmerVariants}
                initial="initial"
                animate="animate"
                style={{ clipPath: "inset(0)" }}
              />
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
              & Salon in Narela, Delhi
            </span>
          </motion.h2>

          <motion.div
            className="flex items-center justify-center gap-2 mb-8"
            variants={itemVariants}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-yellow-400 w-6 h-6" />
            </motion.div>
            <p className="text-xl md:text-2xl italic text-gray-200 font-light">
              Where Beauty Meets Perfection - Your Dream Look Awaits!
            </p>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Crown className="text-yellow-400 w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-20 relative"
        >
          <motion.div
            className="inline-block p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-yellow-400/20"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(193, 126, 20, 0.3)",
              borderColor: "rgba(193, 126, 20, 0.4)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white mb-6 relative overflow-hidden"
              variants={itemVariants}
            >
              <span className="relative z-10">
                Elevating Bridal Beauty & Salon Experiences with Excellence
                Since 2012
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </motion.h3>

            <motion.p
              className="text-gray-200 max-w-5xl mx-auto leading-relaxed text-lg"
              variants={itemVariants}
            >
              Welcome to Raro Professional Studio & Salon, your go-to
              destination for bridal makeup and premium salon services. Led by{" "}
              <motion.span
                className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Pooja & Rohit
              </motion.span>
              , our expert team is dedicated to creating stunning bridal
              transformations and providing top-tier salon experiences.
              <br />
              <br />
              At Raro Professional, we believe beauty is an art, and every
              bride deserves perfection. From flawless makeup to luxurious hair
              and skincare treatments, we ensure you feel confident, radiant,
              and picture-perfect for your big day.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Services Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
            style={{ fontFamily: "Playball, cursive" }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-transparent bg-clip-text">
              OUR PREMIUM SERVICES
            </span>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-lg blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.h3>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto"
        >
          {/* Makeup Services */}
          <motion.div
            variants={itemVariants}
            className="group relative"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-sm border border-yellow-400/30 p-8 h-full"
              whileHover={{
                boxShadow: "0 25px 50px rgba(193, 126, 20, 0.4)",
                borderColor: "rgba(193, 126, 20, 0.8)",
                backgroundColor: "rgba(17, 17, 17, 0.6)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Floating Icons */}
              <motion.div
                className="absolute top-4 right-4"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
              >
                <Palette className="text-yellow-400 w-8 h-8 opacity-60" />
              </motion.div>

              <motion.h3
                className="text-xl md:text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3"
                style={{ fontFamily: "Playball, cursive" }}
              >
                <Heart className="w-6 h-6" />
                Bridal Makeup Services
              </motion.h3>

              <motion.div
                className="relative mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="./hmnt.png"
                  alt="Professional Bridal Makeup"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.p
                className="text-gray-300 leading-relaxed mb-6 text-base"
                variants={itemVariants}
              >
                Keeping your natural beauty intact, we are there for you to
                ensure that your unique bridal look reflects your personality,
                complements your outfit, and stays perfect throughout the entire
                ceremony. Our expert makeup artists use premium products and
                techniques to create flawless, long-lasting results.
              </motion.p>

              <motion.button
                className="group relative px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-full overflow-hidden transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(193, 126, 20, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/Makeup")}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Explore Makeup Services
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Salon Services */}
          <motion.div
            variants={itemVariants}
            className="group relative"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-sm border border-yellow-400/30 p-8 h-full"
              whileHover={{
                boxShadow: "0 25px 50px rgba(193, 126, 20, 0.4)",
                borderColor: "rgba(193, 126, 20, 0.8)",
                backgroundColor: "rgba(17, 17, 17, 0.6)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Floating Icons */}
              <motion.div
                className="absolute top-4 right-4"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                style={{ animationDelay: "2s" }}
              >
                <Sparkles className="text-yellow-400 w-8 h-8 opacity-60" />
              </motion.div>

              <motion.h3
                className="text-xl md:text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3"
                style={{ fontFamily: "Playball, cursive" }}
              >
                <Crown className="w-6 h-6" />
                Premium Salon Services
              </motion.h3>

              <motion.div
                className="relative mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Premium Salon Services"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.p
                className="text-gray-300 leading-relaxed mb-6 text-base"
                variants={itemVariants}
              >
                Be it your bridal shower, sangeet, roka, or engagement, we
                ensure that you look your absolute best. Right from styling your
                hair to choosing the perfect makeup for your skin tone, our
                comprehensive salon services cover all your beauty needs with
                luxury treatments and expert care.
              </motion.p>

              <motion.button
                className="group relative px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-full overflow-hidden transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(193, 126, 20, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/Saloon")}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Explore Salon Services
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-block p-6 rounded-2xl bg-yellow-500/10 border border-yellow-400/30"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 15px 30px rgba(193, 126, 20, 0.2)",
            }}
          >
            <motion.p
              className="text-yellow-400 text-lg font-semibold"
              animate={{
                textShadow: [
                  "0 0 5px rgba(193, 126, 20, 0.5)",
                  "0 0 20px rgba(193, 126, 20, 0.8)",
                  "0 0 5px rgba(193, 126, 20, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Book Your Appointment Today & Transform Your Special Day
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;