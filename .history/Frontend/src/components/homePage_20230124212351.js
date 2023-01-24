import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import NavbarResponsive from "../components/NavbarResponsive/NavbarResponsive";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";

const DefaultPage = () => {
    const [hamActive, setHamActive] = useState(false);
  
    return (
      <div className="DefaultPage">
        <NavbarResponsive hamActive={hamActive} setHamActive={setHamActive}/>
        <Hero />
        <Features />
        <Footer />
      </div>
    );
  };
  
  export default DefaultPage;
  