import React from 'react';
import Header from '../components/Header';
import Latest from '../components/Latest';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import LeftAside from '../components/HomeLayouts/LeftAside';
import RightAside from '../components/HomeLayouts/RightAside';

const HomeLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <header>
                <Header></Header>
                <Latest></Latest>
                <Navbar></Navbar>
            </header>

            <main className='grid grid-cols-12 '>

                <section className='col-span-2'>
                    <LeftAside></LeftAside>
                </section>

                <section className='col-span-8'>
                    <Outlet></Outlet>
                </section>

                <section className=' col-span-2'>
                    <RightAside></RightAside>
                </section>

            </main>


        </div>
    );
};

export default HomeLayout;