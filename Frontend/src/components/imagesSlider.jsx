import { useEffect, useState } from 'react';

const images = [
  '/slider.jpg',
  '/A.jpg',
  '/B.jpg',
  '/B.jpg',
  '/A.jpg',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000); // every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {images.map((src, index) => (
         <img
         key={index}
         src={src}
         alt={`slide-${index}`}
         className="min-w-full min-h-full object-cover"
       />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
