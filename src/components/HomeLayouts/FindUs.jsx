import React from 'react';
import { CiInstagram } from 'react-icons/ci';
import { FaTwitter } from 'react-icons/fa';
import { TfiTwitter } from 'react-icons/tfi';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-4'>Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn justify-start  join-item bg-white text-accent">
                    <svg aria-label="Facebook logo" className='bg-base-300 p-1 rounded-full' width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="blue" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                    Facebook
                </button>
                <button className="btn justify-start join-item bg-white text-accent">
                    <FaTwitter className='bg-base-300 p-1 rounded-full' size={25} color='blue' /> Twitter
                </button>
                <button className="btn justify-start join-item bg-white text-accent">
                    <CiInstagram className='bg-base-300 p-1 rounded-full' size={25} color='red' /> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;