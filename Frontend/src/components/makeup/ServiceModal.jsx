import React from 'react';
import { X, Sparkles, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceModal = ({ isOpen, onClose, service }) => {

  const navigate = useNavigate();
  if (!isOpen) return null;

  const serviceDetails = {
    'H.D': {
      title: 'High Definition Makeup',
      description: 'Professional HD makeup designed for high-resolution cameras and special occasions. This technique uses specialized products that create a flawless, natural finish that looks perfect both in person and on camera.',
      features: [
        'Camera-ready finish',
        'Long-lasting formula',
        'Natural, flawless coverage',
        'Professional-grade products',
        'Perfect for photography'
      ],
      duration: '60-90 minutes',
      benefits: [
        'Photogenic results',
        'Smooth, even complexion',
        'Enhanced natural features',
        'Sweat and tear resistant'
      ]
    },
    'Air Brush': {
      title: 'Airbrush Makeup',
      description: 'Revolutionary airbrush technique that applies makeup using compressed air to create an ultra-smooth, lightweight finish. Perfect for achieving that coveted airbrushed look with superior longevity.',
      features: [
        'Lightweight application',
        'Even, seamless coverage',
        'Water and sweat resistant',
        'Buildable coverage',
        'Professional airbrush equipment'
      ],
      duration: '90-120 minutes',
      benefits: [
        'Long-lasting wear (12+ hours)',
        'Natural, skin-like finish',
        'Transfer resistant',
        'Perfect for hot weather'
      ]
    },
    'Air Brush + H.D': {
      title: 'Airbrush + HD Combination',
      description: 'The ultimate makeup experience combining the best of both worlds. Airbrush base for flawless coverage with HD finishing techniques for camera-perfect results.',
      features: [
        'Dual technique application',
        'Maximum longevity',
        'Perfect for all occasions',
        'Professional finish',
        'Customizable coverage'
      ],
      duration: '90-120 minutes',
      benefits: [
        'Superior staying power',
        'Flawless photo results',
        'All-day comfort',
        'Weather resistant'
      ]
    },
    'Luxury': {
      title: 'Luxury Makeup Experience',
      description: 'Our premium service featuring the finest luxury makeup brands and exclusive techniques. Includes personalized consultation, premium products, and meticulous attention to detail.',
      features: [
        'Premium luxury brands',
        'Personalized consultation',
        'Exclusive techniques',
        'Complimentary touch-ups',
        'VIP treatment experience'
      ],
      duration: '120-150 minutes',
      benefits: [
        'Exclusive luxury experience',
        'Highest quality products',
        'Personalized service',
        'Unforgettable results'
      ]
    },
    'Salon Services': {
      title: 'Complete Salon Services',
      description: 'Comprehensive beauty services including hair styling, manicures, pedicures, facials, and spa treatments. Everything you need for a complete makeover experience.',
      features: [
        'Hair styling & updos',
        'Manicure & pedicure',
        'Facial treatments',
        'Eyebrow shaping',
        'Spa services'
      ],
      duration: '2-4 hours',
      benefits: [
        'Complete transformation',
        'One-stop beauty solution',
        'Relaxing spa experience',
        'Professional styling'
      ]
    }
  };

  const details = serviceDetails[service];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-black border-2 border-yellow-400 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar animate-scale-in shadow-2xl shadow-yellow-400/20">
        {/* Header */}
         <div className="sticky top-0 z-10 p-6 border-b border-yellow-400/30 bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-yellow-400">
                {details?.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center hover:bg-yellow-400/30 transition-colors group"
            >
              <X className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <p className="text-gray-300 leading-relaxed text-lg">
              {details?.description}
            </p>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-3 p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/20">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Duration:</span>
            <span className="text-gray-300">{details?.duration}</span>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-serif text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5" />
              Service Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {details?.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-black/50 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors"
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="font-serif text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Key Benefits
            </h3>
            <div className="space-y-2">
              {details?.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-400/5 to-transparent rounded-lg"
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-yellow-400/30 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-3">
              Ready to experience this service?
            </p>
            <button 
            onClick={() => navigate('/Contactus')}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/30">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;