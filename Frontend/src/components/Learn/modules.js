import React, { useState } from 'react';
import my_modules from '../../data/modules_data';
import NavbarHome from "../NavbarHome/NavbarHome";
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import Footer from "../Footer/Footer";

function ListModules() {
    console.log(my_modules);
    const listItems = my_modules.map((item)=>
        <div className='card' key={item.id}>
            <div className='card_header'>
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <div className='btn'>Pursue Course</div>
            </div>
        </div>
    );
    return (
        <div className='Courses'  style={{ backgroundImage: `url("background.jpg")` }}>
            {listItems}
        </div>
    )
}

export default function Modules(){
    const [hamActive, setHamActive] = useState(false);
    
    return(
        <div className="Courses">
            <NavbarHome hamActive={hamActive} setHamActive={setHamActive} />
            <NavbarResponsive hamActive={hamActive} />
            <ListModules />
            <Footer />
        </div>
    )
}