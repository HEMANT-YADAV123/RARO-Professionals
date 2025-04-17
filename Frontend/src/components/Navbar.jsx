import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { navLinksdata } from "../constants/navlinks";
const Navbar = () => {
  return (
    <div className="bg-black flex items-center h-32 w-full fixed top-0 z-50 px-4">
      <div className="flex w-full items-center justify-between">
        {/* image */}
        <div className="h-32 flex items-center ml-16">
          <img className="h-28 w-28" src={logo} alt="Logo" />
        </div>

        {/*Nav options */}
        <div className="flex mr-20">
          <ul className="flex gap-16">
            {navLinksdata.map(({ _id, title, link }) => {
              return (
                <li className="font-semibold text-2xl tracking-wide bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 hover:text-yellow-400"
                 key={_id}
                 style={{ fontFamily: "Playball, cursive" }}
                 >
                  <Link
                    to={link}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
