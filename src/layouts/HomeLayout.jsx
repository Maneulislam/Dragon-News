import React from 'react';
import Header from '../components/Header';
import Latest from '../components/Latest';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <header>
                <Header></Header>
                <Latest></Latest>
                <Navbar></Navbar>
            </header>

            <main>

                <section className='left-sec'>Left</section>
                <section className='main'>Main</section>
                <section className='Right-sec'>Right</section>

            </main>


        </div>
    );
};

export default HomeLayout;