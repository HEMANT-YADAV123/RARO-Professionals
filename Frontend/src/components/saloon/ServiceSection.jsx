import React from "react";

const ServiceSection = ({ title, icon, children, className = "" }) => {
  return (
    <section className={`mb-24 animate-fadeInUp ${className}`}>
      <div className="text-center mb-16">
        {/* Enhanced Animated Icon Container */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 via-amber-400/40 to-yellow-500/30 rounded-full blur-2xl animate-pulse-golden"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-yellow-400/30 to-amber-500/20 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-500 via-amber-400 to-yellow-300 rounded-full flex items-center justify-center animate-float shadow-2xl shadow-yellow-500/40 border-4 border-yellow-400/30">
            {icon}
          </div>
        </div>

        <h2 className="font-playfair text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent mb-6 animate-shimmer-enhanced">
          {title}
        </h2>

        {/* Enhanced Animated Underline */}
        <div className="relative mx-auto w-40 h-2 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full animate-pulse-golden"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/50 via-amber-400/60 to-yellow-500/50 rounded-full blur-sm animate-pulse-slow"></div>
        </div>

        <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
          Discover our premium {title.toLowerCase()} designed to enhance your
          natural beauty with professional excellence
        </p>
      </div>

      <div className="relative">
        {/* Enhanced Background Decoration */}
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-br from-yellow-500/10 via-amber-400/15 to-yellow-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-tl from-amber-500/10 via-yellow-400/15 to-amber-500/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-yellow-500/20 rounded-full animate-spin-slow"></div>

        {children}
      </div>
    </section>
  );
};

export default ServiceSection;
