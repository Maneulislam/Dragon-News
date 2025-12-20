import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200'>
            <div className='w-10/12 mx-auto bg-base-200 min-h-screen'>
                <header className='pt-8 bg-base-200'>
                    <Navbar></Navbar>
                </header>

                <main>
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default AuthLayout;