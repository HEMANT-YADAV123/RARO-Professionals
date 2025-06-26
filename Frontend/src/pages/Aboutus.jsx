import React from "react";
import Hero from "../components/Hero";
import Services from "../components/AboutServices";
import Reassurance from "../components/Reassurance";
import Footer from "../components/Footer";
import HeroSection from "../components/MeetFounder";
import StressSection from "../components/Reassurance";
import CTASection from "../components/Hero";
import ServicesSection from "../components/AboutServices";

const Aboutus = () => {
  return (
      <div
        className="min-h-screen bg-[#141414] text-white"
        style={{ fontFamily: "Playball, cursive" }}
      >
        <HeroSection/>
        <StressSection/>
        <ServicesSection/>
        <CTASection/>
        <Footer/>
      </div>
  );
};

export default Aboutus;
