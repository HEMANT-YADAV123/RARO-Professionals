import React from "react";
import { useNavigate } from 'react-router-dom';


const Services = () => {
  const navigate = useNavigate();
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
          <span className="border-b-2 border-gold ">
            Elevating Bridal Beauty & Salon Experiences with Excellence Since
            2015
          </span>
        </h3>
        <p className="text-white max-w-7xl mx-auto mt-4 px-4">
          Welcome to Raro Professional Studio & Salon, your go-to destination
          for bridal makeup and premium salon services. Led by{" "}
          <span className="text-2xl font-semibold text-[#c17e14]">
            Pooja & Rohit
          </span>
          , our expert team is dedicated to creating stunning bridal
          transformations and providing top-tier salon experiences.
          <br></br>
          At Raro Professional, we believe beauty is an art, and every bride
          deserves perfection. From flawless makeup to luxurious hair and
          skincare treatments, we ensure you feel confident, radiant, and
          picture-perfect for your big day.
        </p>
      </div>

      <h3
        className="mt-10 text-2xl  font-semibold  bg-gradient-to-r from-yellow-300 to-yellow-600 text-transparent bg-clip-text  "
        style={{ fontFamily: "Playball, cursive" }}
      >
        OUR SERVICES
      </h3>

      <div className="flex flex-col md:flex-row justify-evenly items-start ">
  <div>
    <h3
      className="mt-10 text-lg text-[#c17e14] font-semibold"
      style={{ fontFamily: "Playball, cursive" }}
    >
      OUR MAKEUP SERVICES INCLUDE
    </h3>
    <img src="./bridal2.jpg" alt="Makeup Service" className="w-130 h-120 mt-4" />
    <p className="mt-4 max-w-md text-gray-200">
      Keeping your natural beauty intact, we are there for you to ensure that your unique bridal look reflects your personality, compliments your outfit, and stays put  the entire ceremony.
    </p>

    <button className="mt-4 px-4 py-1.5 bg-[#c17e14] text-white rounded-lg hover:bg-[#a06610] transition-all duration-300" 
     onClick={() => navigate("/Makeup")}>
  Read more
</button>

    
  </div>

  <div>
    <h3
      className="mt-10 text-lg text-[#c17e14] font-semibold"
      style={{ fontFamily: "Playball, cursive" }}
    >
      OUR SALON SERVICES INCLUDE
    </h3>
    <img src="./saloon.jpg" alt="Salon Service" className="w-120 h-120 mt-4" />
    <p className="mt-4 max-w-md text-gray-200">
      Be it your bridal shower, sangeet, roka, or engagement, we ensure that you look your absolute best. Right from styling your hair to choosing the right makeup for your skin tone.
    </p>

    
    <button className="mt-4 px-4 py-1.5 bg-[#c17e14] text-white rounded-lg hover:bg-[#a06610] transition-all duration-300"
     onClick={() => navigate("/Saloon")}>
  Read more
</button>
  </div>
</div>

    </section>
  );
};

export default Services;
