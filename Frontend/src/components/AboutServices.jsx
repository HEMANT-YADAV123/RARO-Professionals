import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Add this import
import { Palette, Scissors, Sparkles, Crown, Brush, Heart, ArrowRight } from 'lucide-react';
import makeupImage1 from '../assets/makeupimg1.webp'
import makeupImage2 from '../assets/makeupimg2.jpeg'
import makeupImage3 from '../assets/makeupimg3.webp'
import salonImage1 from '../assets/salonimg1.jpeg'
import salonImage2 from '../assets/salonimg2.webp'
import salonImage3 from '../assets/salonimg3.webp'

const ServicesSection = () => {
  const navigate = useNavigate(); // Add this hook

  const makeupServices = [
    {
      icon: <Sparkles className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4" />,
      title: "Party Makeup",
      description: "Glamorous looks for special occasions that make you the center of attention.",
      features: ["Evening glam", "Cocktail events", "Birthday parties", "Anniversary celebrations"]
    },
    {
      icon: <Palette className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4" />,
      title: "Engagement Makeup",
      description: "Perfect your engagement look with elegant and sophisticated makeup artistry.",
      features: ["Ring ceremony", "Proposal shoots", "Family gatherings", "Couple photography"]
    },
    {
      icon: <Crown className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4" />,
      title: "Bridal Makeup",
      description: "Transform into the radiant bride you've always dreamed of being with our signature bridal looks.",
      features: ["HD Makeup", "Traditional & Contemporary", "Bridal trial sessions", "Touch-up kit included"]
    }
  ];

  const salonServices = [
    {
      icon: <Scissors className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4" />,
      title: "Hair Styling",
      description: "Professional hair styling that complements your makeup perfectly for any occasion.",
      features: ["Bridal updos", "Contemporary styles", "Hair extensions", "Styling consultation"]
    },
    {
      icon: <Brush className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4" />,
      title: "Skincare & Facials",
      description: "Pamper your skin with our premium skincare treatments for that natural glow.",
      features: ["Deep cleansing", "Anti-aging treatments", "Bridal facials", "Skin analysis"]
    },
    {
      icon: <Heart className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4" />,
      title: "Beauty Packages",
      description: "Complete beauty transformation packages designed for your special moments.",
      features: ["Full bridal package", "Mother's package", "Mehendi ceremony", "Pre-wedding prep"]
    }
  ];

  // Add navigation handlers
  const handleMakeupServicesClick = () => {
    navigate('/Makeup');
  };

  const handleSalonServicesClick = () => {
    navigate('/Saloon');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-serif text-white mb-4">
            Our <span className="text-[#D4AF37] italic">Premium</span> Services
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-[#D4AF37] w-20"></div>
            <Sparkles className="text-[#D4AF37] w-6 h-6" />
            <div className="h-px bg-[#D4AF37] w-20"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of beauty services designed to make you look and feel absolutely stunning
          </p>
        </motion.div>

        {/* Makeup Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#D4AF37] mb-6 lg:mb-0 text-center lg:text-left"
            >
              <Palette className="inline-block w-8 h-8 text-[#D4AF37] mr-3" />
              Makeup Artistry
            </motion.h3>
            
            <motion.button
              onClick={handleMakeupServicesClick} // Add onClick handler
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#e1b00e] to-[#979077] text-[#141414] px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl overflow-hidden mx-auto lg:mx-0 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-3">
                View All Makeup Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {makeupServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onClick={handleMakeupServicesClick}
                className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] transition-all duration-300 overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={
                      index === 0 ? makeupImage1 : 
                      index === 1 ? makeupImage2 : 
                      index === 2 ? makeupImage3 : makeupImage1}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#D4AF37] p-3 rounded-full text-black shadow-lg">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#D4AF37] mb-3">{service.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Salon Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#D4AF37] mb-6 lg:mb-0 text-center lg:text-left"
            >
              <Scissors className="inline-block w-8 h-8 text-[#D4AF37] mr-3" />
              Salon Services
            </motion.h3>
            
            <motion.button
              onClick={handleSalonServicesClick} // Add onClick handler
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#D4AF37] to-[#F4E5B1] text-[#141414] px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl overflow-hidden mx-auto lg:mx-0 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-3">
                View All Salon Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salonServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onClick={handleSalonServicesClick}
                className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] transition-all duration-300 overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={
                      index === 0 ? salonImage1 : index === 1 ? salonImage2 : index === 2 ? salonImage3 : salonImage1}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#D4AF37] p-3 rounded-full text-black shadow-lg">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#D4AF37] mb-3">{service.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;