// import React from 'react'
// import {Routes,Route} from 'react-router-dom'
// import Home from './pages/Home'
import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Gallery from "./pages/Gallery";
import Makeup from "./pages/Makeup";
import Saloon from "./pages/Saloon";
import Contactus from "./pages/Contactus";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Makeup" element={<Makeup />} />
          <Route path="/Saloon" element={<Saloon />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
    </div> 
  );
};

export default App;
