import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-5 bg-slate-200 p-2 items-center'>
            <p className='bg-red-500 text-white px-5 py-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={80} className='space-x-10'>
                <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error laudantium culpa sit odit?</Link>
                <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error laudantium culpa sit odit?</Link>
                <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error laudantium culpa sit odit?</Link>
                
                </Marquee>
           
        </div>
    );
};

export default LatestNews;