import React from 'react';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
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