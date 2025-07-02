import React, { useEffect, useState } from 'react';
import { Crown, Heart, Star } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

const ServiceSection = ({ 
  title, 
  services, 
  icon = 'star', 
  isSpecial = false, 
  backgroundImage,
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setCardsVisible(true), 300);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const IconComponent = {
    crown: Crown,
    heart: Heart,
    star: Star
  }[icon];

  const serviceDescriptions = {
    'H.D': 'High Definition makeup for flawless camera-ready finish',
    'Air Brush': 'Lightweight, long-lasting airbrush makeup application',
    'Air Brush + H.D': 'Combined airbrush and HD techniques for perfect coverage',
    'Luxury': 'Premium makeup with high-end products and techniques',
    'Salon Services': 'Hair styling, manicure, pedicure, and spa treatments'
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // Check if this is the Pre-Bridal + Bridal section
  const isPreBridalSection = title === 'Pre-Bridal + Bridal';

  return (
    <>
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        {backgroundImage && (
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 hover:scale-110"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center justify-center mb-6">
              <div className={`h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 ${
                isPreBridalSection ? '' : 'animate-pulse'
              }`}></div>
              <div className="px-8">
                <div className="relative">
                  <div className={`absolute inset-0 bg-yellow-400/20 rounded-full blur-xl ${
                    isPreBridalSection ? '' : 'animate-pulse'
                  }`}></div>
                  <IconComponent className={`relative w-12 h-12 text-yellow-400 mx-auto mb-2 ${
                    isPreBridalSection ? '' : 'animate-bounce'
                  }`} />
                </div>
              </div>
              <div className={`h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 ${
                isPreBridalSection ? '' : 'animate-pulse'
              }`}>
                
              </div>
            </div>
            
            <h2 className={`
              font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 uppercase tracking-wider
              text-shadow-lg drop-shadow-2xl ${isPreBridalSection ? '' : 'animate-pulse'}
              ${isSpecial ? 'text-5xl lg:text-7xl' : ''}
            `}>
              {title}
            </h2>
            
            <div className="mt-6 flex items-center justify-center">
              <div className={`h-2 w-32 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 ${
                isPreBridalSection ? '' : 'animate-pulse'
              }`}></div>
            </div>

            {/* Floating particles animation - reduced for Pre-Bridal section */}
            {!isPreBridalSection && (
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-float"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 20}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            )}

            {/* Subtle particles for Pre-Bridal section */}
            {isPreBridalSection && (
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
                    style={{
                      left: `${30 + i * 20}%`,
                      top: `${40 + (i % 2) * 10}%`,
                      animation: `float ${4 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 1}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-1000 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ServiceCard
                  title={service}
                  description={serviceDescriptions[service]}
                  isHighlight={service === 'Luxury' || isSpecial}
                  onClick={() => handleServiceClick(service)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        isOpen={selectedService !== null}
        onClose={closeModal}
        service={selectedService || ''}
      />
    </>
  );
};

export default ServiceSection;