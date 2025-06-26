import React from "react";

const ShopLocation = () => {
  return (
    <div className="w-full p-8 bg-[#141414]">
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.5973729516413!2d77.08533717430386!3d28.85084477554619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da9010519ee5d%3A0x166e572903d175dc!2sRaro%20Professional%20Bridal%20Makeup%20Studio%2C%20Beauty%20Parlour%20%26%20Salon%20In%20Narela.!5e0!3m2!1sen!2sin!4v1744910148052!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ShopLocation;
