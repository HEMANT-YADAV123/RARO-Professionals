import { Mail, MapPin, PhoneCall } from "lucide-react";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#141414] text-white py-8 md:py-12 px-4 sm:px-6 lg:px-8 mt-5">
      <div className="max-w-7xl mx-auto">
        {/* Main footer sections with equal spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Our Services */}
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl mb-4 font-medium"
              style={{ fontFamily: "Playball, cursive" }}>
              Our Services
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-amber-500 transition-all duration-300 cursor-pointer">
                HD Makeup
              </li>
              <li className="hover:text-amber-500 transition-all duration-300 cursor-pointer">
                Airbrush Makeup
              </li>
              <li className="hover:text-amber-500 transition-all duration-300 cursor-pointer">
                Destination Makeup
              </li>
            </ul>
          </div>
          
          {/* Our Branches */}
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl mb-4 font-medium"
              style={{ fontFamily: "Playball, cursive" }}>
              Our Branch
            </h2>
            <div className="flex items-start space-x-2">
              <span className="mt-1 flex-shrink-0 text-amber-500">
                <MapPin size={16}/>
              </span>
              <p className="text-sm md:text-base text-gray-300 hover:text-amber-500 transition-all duration-300 cursor-pointer">
                Delhi(Narela) : 1981/4 First Floor, Railway Rd, opposite Anil Medical Store, Narela, Delhi, 110040
              </p>
            </div>
          </div>

          {/* Reach Us */}
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl mb-4 font-medium"
              style={{ fontFamily: "Playball, cursive" }}>
              Reach Us
            </h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-amber-500 transition-all duration-300 cursor-pointer group">
                <span className="flex-shrink-0 text-amber-500">
                  <PhoneCall size={16}/>
                </span>
                <p>+91 83695 49817</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-amber-500 transition-all duration-300 cursor-pointer group">
                <span className="flex-shrink-0 text-amber-500">
                  <Mail size={16}/>
                </span>
                <p>info@raro.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="mt-10 md:mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            © Copyright BrideMeUp 2023. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 text-sm cursor-pointer text-gray-300 hover:text-amber-500 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <span>Back To Top</span>
            <FaArrowUp className="ml-1 group-hover:translate-y-[-2px] transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;