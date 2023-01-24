import React, { useState } from "react";
import NavbarHome from "../components/NavbarHome/NavbarHome";
import NavbarResponsive from "./NavbarResponsive/NavbarResponsive";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
    const [hamActive, setHamActive] = useState(false);
  
    return (
      <div className="HomePage">
        <NavbarHome hamActive={hamActive} setHamActive={setHamActive} />
        <NavbarResponsive hamActive={hamActive} />
        <Hero />
        <Features />
        <Footer />
      </div>
    );
  };
  
  export default HomePage;
  