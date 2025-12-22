import React from 'react';
import Header from '../components/Header';
import Latest from '../components/Latest';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import LeftAside from '../components/HomeLayouts/LeftAside';
import RightAside from '../components/HomeLayouts/RightAside';
import Loading from '../pages/Loading';

const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <div className='w-10/12 mx-auto'>
            <header>
                {import.meta.env.VITE_name}
                <Header></Header>
                <Latest></Latest>
                <Navbar></Navbar>
            </header>

            <main className='grid grid-cols-12 '>

                <section className='col-span-2 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </section>

                <section className='col-span-8'>
                    {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
                </section>

                <section className=' col-span-2 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </section>

            </main>


        </div>
    );
};

export default HomeLayout;