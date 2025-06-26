import React from 'react';

const Intro = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-25  bg-[#191919]">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold  mb-4 bg-gradient-to-r from-yellow-300 to-yellow-600 text-transparent bg-clip-text"
          style={{ fontFamily: "Playball, cursive" }}>POOJA & ROHIT</h1>
          
 <div className="flex justify-center mb-3 -mt-3">
            <img src="./gold-divider.svg" alt="" className="h-4 w-48" />
          </div>

        <h2 className="text-3xl font-semibold  bg-gradient-to-r from-yellow-300 to-yellow-600 text-transparent bg-clip-text"
          style={{ fontFamily: "Playball, cursive" }}>THE WONDER BEHIND THE MAGIC</h2>
      </div> 

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text Content (Left Side) */}
        <div className="md:w-1/2">
          {/* <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">Chanderlata.</h3> */}
          
          <p className="text-lg text-white mb-6 leading-relaxed">
            Based in Narela Delhi, RARO has established as one of the most recognizable and sought-after names as the best bridal makeup and saloon in Mumbai. Trust RARO with highlighting your features and bringing out the best in you, as she is highly skilled, be it an easy and subtle makeup or a bold and gorgeous makeup, she can work her magic with the same ease.
          </p>
          
          <p className="text-lg text-white mb-8 leading-relaxed">
            Enamored by the concept of makeup since a young age, RARO gave in to her inner calling after working as a highly qualified professional in the field of Information Technology for ten years. In order to add expertise to her passion, she enrolled in a specialized makeup course by a renowned industry expert and worked under the guidance of leading industry experts, before launching her brand "BrideMeUp" in 2015, thus making quality makeup services available right at your doorstep.
          </p>

          <div className="text-center md:text-left">
            <button className="border-2  bg-[#c17e14] text-white rounded-lg hover:bg-[#a06610] font-semibold px-6 py-2  hover:text-white transition duration-300">
              Read More
            </button>
          </div>
        </div>

        {/* Image (Right Side) */}
        <div className="md:w-1/2">
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/intro.jpg" 
              alt="Pooja & Rohit- Makeup Artist"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Intro;