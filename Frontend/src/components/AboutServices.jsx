import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ title, description, image, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="flex flex-col items-center max-w-sm mx-auto p-6 rounded-xl bg-[#222222] hover:bg-[#2a2a2a] transition-all duration-300"
    >
      <div className="w-full h-64 overflow-hidden rounded-lg mb-6">
        <img 
          src={image} 
          alt={`${title} service`} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-center text-gray-300 mb-6">{description}</p>
      <button className="mt-auto px-8 py-3 bg-[#c17e14] text-white rounded-full hover:bg-[#a16810] transition-colors font-medium">
        Read More
      </button>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "HD MAKEUP",
      description: "A splendid amalgamation of technology and art. HD makeup saves you from bad pictures through its light-scattering and light-reflecting particles that will give a softer focus to your face and conceal all your imperfections.",
      image: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "AIRBRUSH MAKEUP",
      description: "Airbrush makeup is a type of makeup that is directly sprayed onto your face through an Airbrush gun. This type of makeup is known to give you the most flawless look while maintaining a natural look as well.",
      image: "https://images.pexels.com/photos/2683821/pexels-photo-2683821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "DESTINATION MAKEUP",
      description: "One cup of your personality, three tablespoons of your culture, and two teaspoons of the destination environment will result in a magical potion that will completely transform your look for your destination wedding.",
      image: "https://images.pexels.com/photos/1749452/pexels-photo-1749452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-[#191919]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Our Premium Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;