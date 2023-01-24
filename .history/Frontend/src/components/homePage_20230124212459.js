import React, { useState } from "react";
import NavbarResponsive from "../components/NavbarResponsive/NavbarResponsive";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
    const [hamActive, setHamActive] = useState(false);
  
    return (
      <div className="HomePage">
        <NavbarResponsive hamActive={hamActive} setHamActive={setHamActive}/>
        <Hero />
        <Features />
        <Footer />
      </div>
    );
  };
  
  export default HomePage;
  