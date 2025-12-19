import React from 'react';
import swimming from '../../assets/swimming.png'
import classroom from '../../assets/class.png'
import playground from '../../assets/playground.png'
import bg from '../../assets/bg.png'



const QZone = () => {
    return (
        <div>
            <div className='bg-base-200 '>
                <h3 className='font-bold p-3 pb-0'>Q-Zone</h3>

                <div className='p-3 space-y-3'>
                    <img src={swimming} alt="" />
                    <img src={classroom} alt="" />
                    <img src={playground} alt="" />
                </div>

            </div>
            <div className='mt-10'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default QZone;