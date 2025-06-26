import React from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/imagesSlider";
import Intro from "../components/Intro";
import ReviewSection from "../components/review/ReviewSection";
import ReelsSection from "../components/instagram/ReelsSection";
import Contactus from "./Contactus";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="pt-24 lg:pt-32"> 
      <div
        className="text-[#c17e14]"
       
      >
        <ImageSlider/>
        <Services/>
        {/* <Intro/> */}
        <ReelsSection/>
        <ReviewSection/>
        
        <Contactus/>
      </div>
    </div>
  );
};

export default Home;

   