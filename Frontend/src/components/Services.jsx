import React from "react";

const Services = () => {
  return (
    <section className="text-center py-16 bg-[#191919]">
      <h2
        className="text-2xl md:text-4xl font-semibold  bg-gradient-to-r from-yellow-300 to-yellow-600 text-transparent bg-clip-text"
        style={{ fontFamily: "Playball, cursive" }}
      >
        Professional Bridal Makeup Studio & Saloon in Narela, Delhi
      </h2>

      <p className="text-lg italic text-white mt-2">
        Where Beauty Meets Perfection - Your Dream Look Awaits !
      </p>

      <div className="mt-15">
        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center justify-center">
          <span className="border-b-2 border-gold mx-2">
            Elevating Bridal Beauty & Salon Experiences with Excellence Since
            2015
          </span>
        </h3>
        <p className="text-white max-w-3xl mx-auto mt-4 px-4">
          Welcome to Raro Professional Studio & Salon, your go-to destination
          for bridal makeup and premium salon services. Led by <span className="text-2xl font-semibold text-[#c17e14]">Pooja & Rohit</span>,
          our expert team is dedicated to creating stunning bridal
          transformations and providing top-tier salon experiences.
          
       <br></br>
        At Raro
          Professional, we believe beauty is an art, and every bride deserves
          perfection. From flawless makeup to luxurious hair and skincare
          treatments, we ensure you feel confident, radiant, and picture-perfect
          for your big day. 
        </p>
      </div>

      <h3 className="mt-10 text-lg text-[#c17e14] font-semibold  text-" style={{ fontFamily: "Playball, cursive" }}>
        OUR MAKEUP SERVICES INCLUDE 
      </h3>
      <div className="flex justify-around">
         <div>
         <h3 className="mt-10 text-lg text-[#c17e14] font-semibold  text-" style={{ fontFamily: "Playball, cursive" }}>
        OUR MAKEUP SERVICES INCLUDE 
      </h3>
       <img src="./images.jpg" alt="" />
         </div>

         <div>
         <h3 className="mt-10 text-lg text-[#c17e14] font-semibold  text-" style={{ fontFamily: "Playball, cursive" }}>
        OUR SALOON SERVICES INCLUDE 
      </h3>
      <img src="./images.jpg" alt="" />
         </div>
      </div>


    </section>
  );
};

export default Services;
