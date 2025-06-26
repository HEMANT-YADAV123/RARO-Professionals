import React from 'react';
import { Search, Sparkles } from 'lucide-react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-4xl mx-auto mb-20">
      <div className="relative group">
        {/* Enhanced Animated Background Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/30 via-amber-400/20 to-yellow-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 via-amber-500/15 to-yellow-500/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
            <Search className="h-7 w-7 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 animate-pulse" />
          </div>
          <input
            type="text"
            placeholder="Search for services, treatments, or brands..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-20 pr-20 py-8 bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-yellow-500/40 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/30 transition-all duration-500 text-xl font-medium shadow-2xl shadow-yellow-500/10"
          />
          <div className="absolute inset-y-0 right-0 pr-8 flex items-center pointer-events-none">
            <Sparkles className="h-7 w-7 text-yellow-400/70 animate-pulse" />
          </div>
          
          {/* Inner Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/5 via-transparent to-amber-500/5 pointer-events-none"></div>
        </div>
      </div>
      
      {/* Enhanced Search Suggestions */}
      {searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-lg border-2 border-yellow-500/40 rounded-2xl p-6 animate-fadeInUp z-10 shadow-2xl shadow-yellow-500/20">
          <div className="text-sm text-gray-400 mb-4 font-medium">Popular searches:</div>
          <div className="flex flex-wrap gap-3">
            {['Hair Spa', 'Facial', 'Waxing', 'Manicure', 'Hair Color'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => onSearchChange(suggestion)}
                className="px-5 py-2 bg-gradient-to-r from-yellow-500/15 via-amber-400/10 to-yellow-500/15 border-2 border-yellow-500/40 rounded-full text-sm text-yellow-400 hover:bg-yellow-500/25 hover:border-yellow-400/60 transition-all duration-300 backdrop-blur-sm font-medium"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;