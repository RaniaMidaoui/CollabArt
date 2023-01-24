import React from 'react';
import my_modules from '../data/mymodules_data';

export default function Modules() {
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
        <div className='Modules'>
            {listItems}
        </div>
    )
}