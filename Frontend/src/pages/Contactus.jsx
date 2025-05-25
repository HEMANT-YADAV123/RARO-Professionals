import React from "react";
import design from "../assets/design3.png";
import ContactLeft from "../components/ContactLeft";
import ContactRight from "../components/ContactRight";
import ShopLocation from "../components/Location";
import Footer from "../components/Footer";

const Contactus = () => {
  return (
    <div className="flex flex-col pt-20 md:pt-28 lg:pt-32 bg-[#141414] gap-3 md:gap-5"
    style={{ fontFamily: "Playball, cursive" }}>
      <div>
        {/* design and get in touch */}
        <div
          className="text-[#c17e14] text-3xl md:text-4xl lg:text-6xl flex items-center justify-center mt-6 md:mt-10 gap-4 md:gap-8 px-2"
          style={{ fontFamily: "Playball, cursive" }}
        >
          <span className="hidden sm:block">
            <img src={design} alt="" className="w-16 md:w-auto" />
          </span>
          <h1 className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <span className="hidden sm:block">
            <img src={design} alt="" className="w-16 md:w-auto" />
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-4 sm:p-8 md:p-12 lg:p-16 gap-8 md:gap-12 lg:gap-16">
        <div className="w-full md:w-2/5">
          <ContactLeft />
        </div>
        <div className="w-full md:w-3/5 mt-0 md:-mt-6">
          <ContactRight />
        </div>
      </div>

      {/* Location */}
      <div>
        <div
          className="text-[#c17e14] text-2xl md:text-3xl lg:text-4xl flex items-center justify-center mt-6 md:mt-10 gap-4 md:gap-8"
          style={{ fontFamily: "Playball, cursive" }}
        >
          <h2 className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
            Our Location
          </h2>
        </div>
        <div>
          <ShopLocation />
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contactus;