import React from "react";
import Home from "./Components/Home";
import Products from "./Components/Products";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Info from "./Components/Utils/Info";
import Upcoming from "./Components/Upcoming";
import Footer from "./Components/Footer";
import ScrollText from "./Components/Utils/ScrollText";

function App() {
  return (
    <>
      <div className="w-full h-full bg-[#B9E5E8]">
        <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
          {/* <Route  path="/Info" element={<Info/>}/> */}
        </Routes>
        <Products/>
        <Upcoming/>
        <About/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
