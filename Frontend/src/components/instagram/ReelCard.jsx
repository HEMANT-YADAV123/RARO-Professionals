import React, { useRef, useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ReelCard = ({ reel }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.5 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  const handleReelClick = () => {
    window.open(reel.instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      ref={cardRef}
      className="snap-start shrink-0 w-[280px] sm:w-72 md:w-80 h-[480px] sm:h-[500px] md:h-[560px] 
                 relative group rounded-lg overflow-hidden shadow-xl transition-transform 
                 duration-300 ease-out transform hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleReelClick}
    >
      {isLoading ? (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-gold-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="w-full h-full bg-black border border-gold-800 rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              src={reel.videoUrl}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              poster={reel.thumbnail}
            />
          </div>

          <div className={`absolute inset-0 pointer-events-none border-2 border-gold-400 
                          rounded-lg transition-opacity duration-300 opacity-0 
                          ${isHovered ? 'opacity-100' : ''}`}></div>

          <div 
            className={`absolute inset-0 bg-black/40 flex items-center justify-center 
                      transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="bg-black/60 p-3 rounded-full backdrop-blur-sm">
              <Instagram className="text-gold-400 w-8 h-8" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block w-2 h-2 rounded-full bg-gold-400"></span>
              <p className="text-gold-200 text-sm font-medium">{reel.username}</p>
            </div>
            <h3 className="text-white text-sm truncate">{reel.caption}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default ReelCard;