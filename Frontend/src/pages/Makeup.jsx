import React from "react";
import ServiceSection from "../components/makeup/ServiceSection";

const Makeup = () => {
  return (
    <div className="mt-10  md:mb-0 md:mt-24">
      <div className="min-h-screen bg-black">
      <main>
        <ServiceSection
          title="Party Make-Up"
          services={['H.D', 'Air Brush', 'Air Brush + H.D', 'Salon Services']}
          icon="star"
          // backgroundImage="./F.jpg"
          delay={0}
        />
        
        <ServiceSection
          title="Engagement–Reception"
          services={['H.D', 'Air Brush', 'Air Brush + H.D', 'Salon Services']}
          icon="heart"
         // backgroundImage="https://img.freepik.com/premium-photo/indian-traditional-ring-ceremony-couples-putting-rings_729664-136.jpg"
          delay={200}
        />
        
        <ServiceSection
          title="Bridal"
          services={['H.D', 'Air Brush', 'Air Brush + H.D', 'Luxury', 'Salon Services']}
          icon="crown"
          isSpecial={true}
        //  backgroundImage="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          delay={400}
        />
        
        <ServiceSection
          title="Pre-Bridal + Bridal"
          services={['H.D', 'Air Brush', 'Air Brush + H.D', 'Luxury', 'Salon Services']}
          icon="crown"
          isSpecial={true}
        //  backgroundImage="./A.jpg"
          delay={600}
        />
      </main>
    </div>
    </div>
  );
};

export default Makeup;
