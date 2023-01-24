import React, { useState } from "react";
import NavbarHome from "../components/NavbarHome/NavbarHome";
import NavbarResponsive from "./NavbarResponsive/NavbarResponsive";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";

const DefaultPage = () => {
    const [hamActive, setHamActive] = useState(false);
  
    return (
      <div className="DefaultPage">
        <NavbarHome hamActive={hamActive} setHamActive={setHamActive} />
        <NavbarResponsive hamActive={hamActive} />
        <Hero />
        <Features />
        <Footer />
      </div>
    );
  };
  
  export default DefaultPage;
  