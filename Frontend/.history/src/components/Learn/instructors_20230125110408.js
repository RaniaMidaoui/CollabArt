import React, { useState } from "react";
import NavbarHome from "../NavbarHome/NavbarHome";
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import Footer from "../Footer/Footer";

function ListInstructors() {
  return (
    <div></div>
  );
}

export default function Instructors(){
    const [hamActive, setHamActive] = useState(false);
    
    return(
        <div className="Courses">
            <NavbarHome hamActive={hamActive} setHamActive={setHamActive} />
            <NavbarResponsive hamActive={hamActive} />
            <ListInstructors />
            <Footer />
        </div>
    )
}