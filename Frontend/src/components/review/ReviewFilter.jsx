import React from 'react';

const ReviewFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', label: 'All Reviews' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'skincare', label: 'Skincare' },
    { id: 'bridal', label: 'Bridal' },
   
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`
            px-6 py-2 rounded-full text-sm font-medium transition-all duration-500
            relative overflow-hidden group
            ${activeFilter === filter.id 
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
              : 'bg-zinc-900/50 text-gray-300 hover:bg-zinc-800 border border-yellow-700/30'}
          `}
        >
          <span className="relative z-10">{filter.label}</span>
          <div className={`
            absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0
            transition-opacity duration-500 -z-0
            ${activeFilter !== filter.id ? 'group-hover:opacity-10' : ''}
          `}></div>
        </button>
      ))}
    </div>
  );
};

export default ReviewFilter;