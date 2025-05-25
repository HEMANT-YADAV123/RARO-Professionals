import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bridalMakeupImage from "../assets/bridal_horiz.jpg";

const Reassurance = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Debug: Log the image path
  console.log("Bridal makeup image path:", bridalMakeupImage);

  return (
    <div className="h-auto ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="h-full flex flex-col items-center justify-center text-center px-4 relative z-10"
      >
        <img src={bridalMakeupImage} alt="" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          DON'T STRESS YOUR PRETTY HEART
        </h2>
        <p className="text-2xl md:text-3xl text-[#c17e14] italic font-serif">
          You know we're the best! Dear bride-to-be, Raro Professional is at
          your service!
        </p>
      </motion.div>
    </div>
  );
};

export default Reassurance;