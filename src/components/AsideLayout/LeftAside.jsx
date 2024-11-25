import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftAside = () => {
    const[category,setCategory]=useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategory(data.data.news_category))


    },[])


    return (
        <div>
            <h2 className='text-xl font-bold'>All Category</h2>
            <div className='flex flex-col mb-10 gap-3 mt-8'>
                {
                    category.map(category=><NavLink to={`/category/${category.category_id}`} className='btn bg-white' key={category.category_id
                    }>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftAside;