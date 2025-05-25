import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactLeft = () => {
  return (
    <div className="w-full text-white">
      <div className="flex flex-col justify-center gap-5 md:gap-7">
        {/* Bride me upp */}
        <div className="flex flex-col gap-1.5">
          <div
            className="text-3xl md:text-4xl text-[#c17e14]"
            style={{ fontFamily: "Playball, cursive" }}
          >
            BrideMeUp
          </div>
          <p className="text-sm md:text-base lg:text-[17px]">
            Kindly fill out the form, and our beauty experts will get in touch
            with you shortly. For immediate assistance, feel free to reach out
            to us via the contact details provided below. We're here to enhance
            your beauty experience!
          </p>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1.5">
          <div
            className="text-xl md:text-2xl text-[#c17e14]"
            style={{ fontFamily: "Playball, cursive" }}
          >
            Find Our Branch at
          </div>
          <div className="flex gap-1">
            <MapPin size={16} className="mt-1.5 flex-shrink-0" />
            <p className="text-sm md:text-base lg:text-[17px]">
              1981/4 First Floor, Railway Rd, opposite Anil Medical Store,
              Narela, Delhi, 110040
            </p>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-1.5">
          <div
            className="text-xl md:text-2xl gap-2 text-[#c17e14]"
            style={{ fontFamily: "Playball, cursive" }}
          >
            Reach Us
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2.5 items-center">
              <Phone size={16} className="flex-shrink-0" />
              <p className="text-sm md:text-base lg:text-[16px] mb-0.5">+91 84480 12334</p>
            </span>
            <span className="flex gap-2.5 items-center">
              <Mail size={16} className="flex-shrink-0" />
              <p className="text-sm md:text-base lg:text-[16px] mb-0.5">abc@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;