import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navber from '../components/Navber';
import LeftAside from '../components/AsideLayout/LeftAside';
import RightNav from '../components/AsideLayout/RightNav';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='w-11/12 my-6 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <section className='w-11/12 mx-auto'>
                    <Navber></Navber>
                </section>
            </header>

            <main className='w-11/12 mx-auto mt-10 gap-3 grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayout;