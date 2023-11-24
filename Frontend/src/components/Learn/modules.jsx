import React, { useState } from 'react';
import my_modules from '../../data/modules_data';
import Navbar from '../Navbar/Navbar';
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import Footer from "../Footer/Footer";
import Card from './card';
import Author from './author';

function ListModules() {
    console.log(my_modules);
    const listItems = my_modules.map((item)=>
        <Card key={item.id}
        title={item.product_name}
        type={"Module "+item.id}
        description={item.description}
        price={item.price}
        currency={item.currency}
        link="/courses"
        image={item.thumb}
    />
    );
    return (
        <div className='Courses' style={{ backgroundImage: `url("background.jpg")`}} >
            <div className="text-center text-white py-20 h-full w-full bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50">
            <span className="text-4xl">Pottery Workshop</span>
            <div className='mt-5 mx-96'>
            <p>
            Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard and durable form.
            </p>
            </div>
            <span className="flex gap-2 center border rounded-xl lg:mx-96 md:mx-60 sm:mx-4 my-5 text-sm p-2">220 <i className="fa-solid fa-user"></i> · 73 <i className="fa-solid fa-heart"></i> · By <Author name="Nadia Frikha"/></span>
            <div className='center'>
            <button className="btn btn-primary w-3/12">
                    Enroll for 60 TND    
            </button>
            </div>
            </div>
            <div className="max-w-[720px] mx-auto my-10">
            <div className="relative flex flex-col gap-2">
            {listItems}

            </div>
            </div>
        </div>
    )
}

export default function Modules(){
    const [hamActive, setHamActive] = useState(false);
    
    return(
        <div className="Courses">
            <Navbar hamActive={hamActive} setHamActive={setHamActive} />
            <NavbarResponsive hamActive={hamActive} />
            <ListModules />
            <Footer />
        </div>
    )
}