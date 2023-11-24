import React, { useState } from 'react';
import all_subjects from '../../data/subjects_data';
import Navbar from '../Navbar/Navbar';
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import Footer from "../Footer/Footer";
import Card from './card';
function ListSubjects() {
    console.log(all_subjects);
    const listItems = all_subjects.map((item)=>
        // <div className='card' key={item.id} >
        //     <div className='card_header'>
        //         <h2>{item.product_name}</h2>
        //         <p>{item.description}</p>
        //         <p className='price'>{item.price}<span>{item.currency}</span></p>
        //         <a href="/courses">   
        //             <button className='btn'>View Courses</button>
        //         </a> 
        //     </div>
        // </div>
        <Card key={item.id}
            type={item.type}
            title={item.product_name}
            description={item.description}
            price={item.price}
            currency={item.currency}
            link="/modules"
            image={item.thumb}
        />
    );
    return (
        <div className='Courses' style={{ backgroundImage: `url("background.jpg")`}} >
            <div className="max-w-[720px] mx-auto my-10">
            <div className="relative flex flex-col gap-2">
            {listItems}

            </div>
            </div>
        </div>
    )
}

export default function Sujects(){
    const [hamActive, setHamActive] = useState(false);
    
    return(
        <div className="Courses">
            <Navbar hamActive={hamActive} setHamActive={setHamActive} />
            <NavbarResponsive hamActive={hamActive} />
            <ListSubjects />
            <Footer />
        </div>
    )
}