import React from "react";
import design from "../assets/design3.png";
import ContactLeft from "../components/ContactLeft";
import ContactRight from "../components/ContactRight";

const Contactus = () => {
  return (
    <div className="flex flex-col pt-32 bg-[#141414] gap-5">
      <div className="">
        {/* design and get in touch */}
        <div
          className="text-[#c17e14] text-6xl flex items-center justify-center mt-10 gap-8"
          style={{ fontFamily: "Playball, cursive" }}
          >
          <span>
            <img src={design} alt="" />
          </span>
          <h1 className=" bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">Get in Touch</h1>
          <span>
            <img src={design} alt="" />
          </span>
        </div>
      </div>

      <div className="flex p-16 gap-16">

        <div className="w-3/8">
          <ContactLeft/>
        </div>
        <div className="w-5/8 -mt-6">
          <ContactRight/>
        </div>

      </div>
      
    </div>
  );
};

export default Contactus;
