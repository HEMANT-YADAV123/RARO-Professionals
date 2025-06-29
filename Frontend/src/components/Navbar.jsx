import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { navLinksdata } from "../constants/navlinks";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`bg-black flex items-center w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'h-20 shadow-lg' : 'h-24 md:h-32'}`}>
      <div className="flex w-full items-center justify-between px-4 md:px-8 lg:px-16">
        {/* Logo */}
          <Link to="/">
      <div className={`flex items-center transition-all duration-300 ${isScrolled ? 'h-16 w-16 md:h-20 md:w-20' : 'h-20 w-20 md:h-28 md:w-28'}`}>
        <img className="h-full w-full object-contain" src={logo} alt="Logo" />
      </div>
    </Link>

        {/* Mobile menu button */}
        <div className="block md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex gap-6 lg:gap-16">
            {navLinksdata.map(({ _id, title, link }) => (
              <li 
                className="font-semibold text-lg lg:text-2xl tracking-wide bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 hover:text-yellow-400"
                key={_id}
                style={{ fontFamily: "Playball, cursive" }}
              >
                <Link to={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black w-full md:hidden z-50 border-t border-yellow-700 animate-fadeIn">
          <ul className="flex flex-col items-center py-4">
            {navLinksdata.map(({ _id, title, link }) => (
              <li 
                className="font-semibold text-xl py-3 tracking-wide bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent hover:text-yellow-400 transition-colors duration-300"
                key={_id}
                style={{ fontFamily: "Playball, cursive" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;