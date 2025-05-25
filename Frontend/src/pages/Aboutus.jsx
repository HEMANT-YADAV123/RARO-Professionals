import React from "react";
import Hero from "../components/Hero";
import Services from "../components/AboutServices";
import Reassurance from "../components/Reassurance";
import MeetFounder from "../components/MeetFounder";
import Footer from "../components/Footer";

const Aboutus = () => {
  return (
      <div
        className="min-h-screen bg-[#141414] text-white"
        style={{ fontFamily: "Playball, cursive" }}
      >
        <MeetFounder />
        <Reassurance />
        <Services />
        <Hero />
        <Footer/>
      </div>
  );
};

export default Aboutus;
