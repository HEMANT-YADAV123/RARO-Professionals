import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import ReviewFilter from './ReviewFilter';
import { reviews } from './ReviewData'; 
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const ReviewSection = () => {
     const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredReviews(reviews);
    } else {
      setFilteredReviews(reviews.filter(review => review.service === activeFilter));
    }
    setCurrentIndex(0);
  }, [activeFilter]); 

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === filteredReviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [filteredReviews, isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? filteredReviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex => 
      prevIndex === filteredReviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400">
              Our Glowing Reviews
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 blur-2xl opacity-20 -z-0"></div>
          </h2>
          
          <div className="inline-flex items-center gap-2 mb-4 group">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={28} 
                  className={`
                    transition-all duration-500 transform group-hover:scale-110
                    ${i < Math.floor(averageRating) 
                      ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" 
                      : i === Math.floor(averageRating) && averageRating % 1 > 0
                        ? "fill-yellow-400/50 text-yellow-400" 
                        : "text-gray-600"}
                  `} 
                />
              ))}
            </div>
            <span className="text-yellow-400 font-bold text-xl">{averageRating.toFixed(1)}</span>
            <span className="text-gray-400 text-sm ml-2">
              Average Rating
            </span>
          </div>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Experience the magic through our clients' transformative journeys
          </p>
        </div>

        <ReviewFilter 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />

        <div className="relative overflow-hidden my-12">
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {filteredReviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 left-0 w-full justify-between items-center px-4 -translate-y-1/2 hidden md:flex">
            <button 
              onClick={handlePrevious}
              className="bg-black/50 hover:bg-black text-yellow-400 p-3 rounded-full transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-yellow-400"
              aria-label="Previous review"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="bg-black/50 hover:bg-black text-yellow-400 p-3 rounded-full transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-yellow-400"
              aria-label="Next review"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {filteredReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`
                  transition-all duration-500 rounded-full
                  ${currentIndex === index 
                    ? 'w-8 h-2 bg-gradient-to-r from-yellow-500 to-yellow-400 shadow-[0_0_10px_rgba(212,175,55,0.5)]' 
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'}
                `}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">Ready to experience our transformative services?</p>
          <button className="
            px-8 py-4 bg-transparent relative overflow-hidden group
            border-2 border-yellow-400 rounded-lg font-bold text-lg
            transition-all duration-500
            hover:text-black
          "
           onClick={() => navigate("/Contactus")}>
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:text-black transition-colors duration-500">
              Book Your Appointment
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;