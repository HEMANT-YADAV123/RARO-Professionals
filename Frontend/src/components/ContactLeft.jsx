import React, { useState, useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactLeft = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full text-white">
      <div className="flex flex-col justify-center gap-5 md:gap-7">
        {/* Bride me upp */}
        <div 
          className={`flex flex-col gap-1.5 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          <div
            className="text-3xl md:text-4xl text-[#c17e14] hover:text-[#d4921a] transition-colors duration-300 cursor-default"
            style={{ fontFamily: "Playball, cursive" }}
          >
            BrideMeUp
          </div>
          <p className="text-sm md:text-base lg:text-[17px] leading-relaxed hover:text-gray-200 transition-colors duration-300">
            Kindly fill out the form, and our beauty experts will get in touch
            with you shortly. For immediate assistance, feel free to reach out
            to us via the contact details provided below. We're here to enhance
            your beauty experience!
          </p>
        </div>

        {/* Location */}
        <div 
          className={`flex flex-col gap-1.5 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          <div
            className="text-xl md:text-2xl text-[#c17e14] hover:text-[#d4921a] transition-colors duration-300 cursor-default"
            style={{ fontFamily: "Playball, cursive" }}
          >
            Find Our Branch at
          </div>
          <div className="flex gap-1 group hover:translate-x-1 transition-transform duration-300">
            <MapPin size={16} className="mt-1.5 flex-shrink-0 text-[#c17e14] group-hover:text-[#d4921a] transition-colors duration-300" />
            <p className="text-sm md:text-base lg:text-[17px] group-hover:text-gray-200 transition-colors duration-300">
              1981/4 First Floor, Railway Rd, opposite Anil Medical Store,
              Narela, Delhi, 110040
            </p>
          </div>
        </div>

        {/* Contact info */}
        <div 
          className={`flex flex-col gap-1.5 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <div
            className="text-xl md:text-2xl gap-2 text-[#c17e14] hover:text-[#d4921a] transition-colors duration-300 cursor-default"
            style={{ fontFamily: "Playball, cursive" }}
          >
            Reach Us
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2.5 items-center group hover:translate-x-1 transition-all duration-300 hover:bg-gray-800/20 rounded-lg p-2 -ml-2">
              <Phone size={16} className="flex-shrink-0 text-[#c17e14] group-hover:text-[#d4921a] group-hover:scale-110 transition-all duration-300" />
              <p className="text-sm md:text-base lg:text-[16px] mb-0.5 group-hover:text-gray-200 transition-colors duration-300">+91 84480 12334</p>
            </span>
            <span className="flex gap-2.5 items-center group hover:translate-x-1 transition-all duration-300 hover:bg-gray-800/20 rounded-lg p-2 -ml-2">
              <Mail size={16} className="flex-shrink-0 text-[#c17e14] group-hover:text-[#d4921a] group-hover:scale-110 transition-all duration-300" />
              <p className="text-sm md:text-base lg:text-[16px] mb-0.5 group-hover:text-gray-200 transition-colors duration-300">abc@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;