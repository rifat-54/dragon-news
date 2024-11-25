import React from 'react';
import logoimg from '../assets/logo.png'
import moment from 'moment/moment';
const Header = () => {
    // console.log(import.meta.env.VITE_a);
    return (
        <div className='flex flex-col justify-center items-center gap-4 my-5'>
            <div>
                <img src={logoimg} alt="" />
            </div>
            <h3 className='text-gray-500'>Journalism Without Fear or Favour</h3>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;