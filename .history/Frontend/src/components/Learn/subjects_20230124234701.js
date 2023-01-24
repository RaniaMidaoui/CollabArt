import React from 'react';
import all_subjects from '../../data/subjects_data';

export default function Subjects() {
    console.log(all_subjects);
    const listItems = all_subjects.map((item)=>
        <div className='card' key={item.id} >
            <div className='card_header'>
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className='price'>{item.price}<span>{item.currency}</span></p>
                <div className='btn'>Pursue Course</div>
            </div>
        </div>
    );
    return (
        <div className='Courses' style={{ backgroundImage: `url("background.jpg")`}} >
            {listItems}
        </div>
    )
}