import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='flex flex-col justify-center items-center '>
            <img className='w-100' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Navbar;