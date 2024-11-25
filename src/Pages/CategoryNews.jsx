import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {data:news}=useLoaderData()
    // console.log(news)
    return (
        <div>
            <h2 className='text-2xl font-bold'>Dragon News Home</h2>
            <h2>category ({news.length})</h2>
            <div>
                {
                   news.map(item=><NewsCard key={item._id} news={item}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;