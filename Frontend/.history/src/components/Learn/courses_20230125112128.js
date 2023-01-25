import React, { useState } from 'react';
import my_courses from '../../data/courses_data';
import NavbarHome from "../NavbarHome/NavbarHome";
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import Footer from "../Footer/Footer";

function ListCourses() {
    console.log(my_courses);
    const listItems = my_courses.map((item)=>
        <div className='card' key={item.id}>
            <div className='card_header'>
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className='price'>{item.price}<span>{item.currency}</span></p>
                <a href="/modules">   
                    <button className='btn'>View Moules</button>
                </a>
                <br></br>
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

export default function Courses(){
    const [hamActive, setHamActive] = useState(false);
    
    return(
        <div className="Courses">
            <NavbarHome hamActive={hamActive} setHamActive={setHamActive} />
            <NavbarResponsive hamActive={hamActive} />
            <ListCourses />
            <Footer />
        </div>
    )
}