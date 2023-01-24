import React from 'react';
import my_courses from '../../data/courses_data';

export default function Courses() {
    console.log(my_courses);
    const listItems = my_courses.map((item)=>
        <div className='card' key={item.id} style={{ backgroundImage: `url("background.jpg")` }}>
            <div className='card_img'>
                <img src={item.thumb} />
            </div>
            <div className='card_header'>
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className='price'>{item.price}<span>{item.currency}</span></p>
                <div className='btn'>Pursue Course</div>
            </div>
        </div>
    );
    return (
        <div className='Courses'>
            {listItems}
        </div>
    )
}