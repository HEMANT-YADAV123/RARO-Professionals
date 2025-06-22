import React, { useState, useMemo, useEffect } from 'react';
import { 
  Scissors, 
  Sparkles, 
  Palette, 
  Star, 
  Heart, 
  Zap, 
  Crown, 
  Hand,
  ArrowUp
} from 'lucide-react';
import SearchBar from '../components/saloon/SearchBar';
import ServiceCard from '../components/saloon/ServiceCard';
import Modal from '../components/saloon/Modal';
import ServiceSection from '../components/saloon/ServiceSection';
import WaxingTable from '../components/saloon/WaxingTable';

import { servicesData, categories } from '../components/saloon/servicesData';

function Saloon() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const filteredServices = useMemo(() => {
    if (!searchTerm) return servicesData;
    
    const lowercaseSearch = searchTerm.toLowerCase();
    return servicesData.filter(service => 
      service.title.toLowerCase().includes(lowercaseSearch) ||
      service.description.toLowerCase().includes(lowercaseSearch) ||
      service.category.toLowerCase().includes(lowercaseSearch) ||
      service.features?.some(feature => feature.toLowerCase().includes(lowercaseSearch)) ||
      service.brands?.some(brand => brand.toLowerCase().includes(lowercaseSearch))
    );
  }, [searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getServicesByCategory = (category) => {
    return filteredServices.filter(service => service.category === category);
  };

  const getCategoryIcon = (category) => {
    const iconMap = {
      'Waxing': <Zap className="w-8 h-8 text-black" />,
      'Hair & Chemical': <Scissors className="w-8 h-8 text-black" />,
      'Hair Styling': <Sparkles className="w-8 h-8 text-black" />,
      'Hair Spa': <Star className="w-8 h-8 text-black" />,
      'Global Colour & Fashion Shades': <Palette className="w-8 h-8 text-black" />,
      'Highlights / Root Touch-Up / Rebonding': <Crown className="w-8 h-8 text-black" />,
      'Facial & Cheryl\'s Facial': <Heart className="w-8 h-8 text-black" />,
      'Manicure & Pedicure': <Hand className="w-8 h-8 text-black" />
    };
    return iconMap[category] || <Star className="w-8 h-8 text-black" />;
  };

  return (
    <div className="min-h-screen mt-25 bg-black text-white font-inter relative overflow-hidden">
      {/* Static Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary Golden Orbs - Static */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-yellow-500/20 via-amber-400/15 to-yellow-600/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-gradient-to-l from-amber-500/25 via-yellow-400/20 to-amber-600/15 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-yellow-400/20 via-amber-500/15 to-yellow-500/25 rounded-full blur-3xl opacity-80"></div>
        
        {/* Secondary Accent Orbs - Static */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-amber-300/10 via-yellow-500/15 to-amber-400/20 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-1/3 right-20 w-56 h-56 bg-gradient-to-br from-yellow-600/15 via-amber-400/10 to-yellow-500/20 rounded-full blur-2xl opacity-60"></div>
        
        {/* Geometric Patterns - Static */}
        <div className="absolute top-40 left-1/2 w-32 h-32 border border-yellow-500/20 rotate-45 opacity-30"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border border-amber-400/25 rotate-12 opacity-40"></div>
        
        {/* Floating Particles - Static */}
        <div className="absolute top-1/3 left-20 w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute top-2/3 right-40 w-2 h-2 bg-amber-500 rounded-full opacity-70"></div>
        <div className="absolute bottom-1/4 left-2/3 w-4 h-4 bg-yellow-300 rounded-full opacity-50"></div>
        
        {/* Static Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-500/5 to-transparent"></div>
      </div>

      {/* Enhanced Mouse Follower */}
      <div 
        className="fixed w-8 h-8 bg-gradient-to-r from-yellow-400/30 to-amber-500/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out backdrop-blur-sm border border-yellow-400/20"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: 'scale(1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 to-amber-500/50 rounded-full animate-ping"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="group text-center p-8 bg-gradient-to-br from-yellow-500/15 via-black to-amber-600/10 border-2 border-yellow-500/30 rounded-2xl animate-fadeInUp hover:border-yellow-400/50 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-4xl font-bold text-yellow-400 mb-3 animate-count-up">1000+</div>
                <div className="text-gray-300 text-sm font-medium">Happy Clients</div>
              </div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-amber-500/15 via-black to-yellow-600/10 border-2 border-amber-500/30 rounded-2xl animate-fadeInUp delay-200 hover:border-amber-400/50 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-4xl font-bold text-amber-400 mb-3 animate-count-up">50+</div>
                <div className="text-gray-300 text-sm font-medium">Services</div>
              </div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-yellow-600/15 via-black to-amber-500/10 border-2 border-yellow-600/30 rounded-2xl animate-fadeInUp delay-400 hover:border-yellow-500/50 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-4xl font-bold text-yellow-300 mb-3 animate-count-up">10+</div>
                <div className="text-gray-300 text-sm font-medium">Years Experience</div>
              </div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-amber-400/15 via-black to-yellow-500/10 border-2 border-amber-400/30 rounded-2xl animate-fadeInUp delay-600 hover:border-amber-300/50 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-4xl font-bold text-amber-300 mb-3 animate-count-up">100%</div>
                <div className="text-gray-300 text-sm font-medium">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Waxing Section */}
          <ServiceSection 
            title="Waxing Services" 
            icon={getCategoryIcon('Waxing')}
          >
            <WaxingTable />
          </ServiceSection>

          {/* Other Service Sections */}
          {categories.slice(1).map((category, categoryIndex) => {
            const categoryServices = getServicesByCategory(category);
            
            if (categoryServices.length === 0) return null;

            return (
              <ServiceSection 
                key={category}
                title={category} 
                icon={getCategoryIcon(category)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryServices.map((service, serviceIndex) => (
                    <ServiceCard
                      key={service.id}
                      title={service.title}
                      description={service.description}
                      image={service.image}
                      features={service.features}
                      onClick={() => handleServiceClick(service)}
                      className={`animate-fadeInUp`}
                      style={{
                        animationDelay: `${(categoryIndex * 100) + (serviceIndex * 100)}ms`
                      }}
                    />
                  ))}
                </div>
              </ServiceSection>
            );
          })}

          {/* No Results Message */}
          {searchTerm && filteredServices.length === 0 && (
            <div className="text-center py-20 animate-fadeInUp">
              <div className="text-9xl mb-8 animate-bounce">🔍</div>
              <h3 className="font-playfair text-4xl text-yellow-400 mb-6">No Services Found</h3>
              <p className="text-gray-400 text-xl">Try searching with different keywords</p>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black rounded-full shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-400/60 transition-all duration-300 hover:scale-110 z-50 animate-fadeInUp backdrop-blur-sm border-2 border-yellow-400/30"
        >
          <ArrowUp className="w-6 h-6 mx-auto animate-bounce" />
        </button>
      )}

      {/* Service Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedService?.title || ''}
      >
        {selectedService && (
          <div className="space-y-8">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                {selectedService.detailed?.fullDescription || selectedService.description}
              </p>
              
              {selectedService.features && (
                <div>
                  <h4 className="font-playfair text-2xl font-semibold text-yellow-400 mb-6">
                    Features & Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-500/10 via-black to-transparent border-2 border-yellow-500/30 rounded-xl backdrop-blur-sm">
                        <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 animate-pulse" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedService.detailed?.benefits && (
                <div>
                  <h4 className="font-playfair text-2xl font-semibold text-yellow-400 mb-6">
                    Benefits
                  </h4>
                  <div className="space-y-4">
                    {selectedService.detailed.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-amber-500/10 via-black to-transparent border-l-4 border-amber-500/60 backdrop-blur-sm">
                        <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex-shrink-0 animate-pulse"></div>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedService.brands && (
                <div>
                  <h4 className="font-playfair text-2xl font-semibold text-yellow-400 mb-6">
                    Premium Brands
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {selectedService.brands.map((brand, index) => (
                      <span 
                        key={index}
                        className="px-6 py-3 bg-gradient-to-r from-yellow-500/15 via-amber-400/10 to-yellow-600/15 border-2 border-yellow-500/40 rounded-full text-yellow-400 font-medium backdrop-blur-sm hover:bg-yellow-500/25 transition-all duration-300"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedService.detailed?.duration && (
                <div className="pt-8 border-t-2 border-gray-800">
                  <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-amber-500/15 via-black to-transparent border-2 border-amber-500/30 rounded-xl backdrop-blur-sm">
                    <span className="font-semibold text-amber-400 text-lg">Duration:</span>
                    <span className="text-gray-300 text-xl">{selectedService.detailed.duration}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Saloon;