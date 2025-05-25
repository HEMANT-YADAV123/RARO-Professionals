import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MeetFounder = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20 px-4 bg-[#141414] lg:mt-16 md:mt-8 mt-8">
      <h1 className='flex justify-center text-3xl md:text-4xl lg:text-6xl mb-10'
      style={{ fontFamily: "Playball, cursive" }}
      >
        AboutUs
      </h1>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-serif text-[#c17e14] mb-4">Meet</h2>
            <h3 className="text-3xl mb-8">THE WONDER BEHIND THE MAGIC</h3>
            <h4 className="text-3xl font-serif text-[#c17e14] mb-6">Pooja and Rohit</h4>
            <p className="text-gray-300 mb-6">
              Pooja is one of the <span className="text-[#c17e14]">best bridal makeup artists in Delhi</span>. 
              She had been enamored by the concept of makeup from a young age. Her passion led her to 
              a specialized makeup course by a renowned industry expert and she worked under the guidance 
              of leading industry experts, gaining great knowledge and insight into the magical world of makeup.
            </p>
            <p className="text-gray-300">
              In 2015, Pooja and rohit together launched BrideMeUp intending to make quality makeup services available 
              at your doorstep. She believes in accentuating the natural beauty of a bride and letting 
              her shine in her truest form.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Chanderlata"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#c17e14] opacity-20 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#c17e14] opacity-20 rounded-full -z-10"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MeetFounder;