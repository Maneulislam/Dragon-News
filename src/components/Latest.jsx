import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='bg-base-200 flex items-center px-5 py-4 gap-6 my-5'>
            <button className='bg-secondary text-white px-3 py-2'>Latest</button>

            <Marquee>
                <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as. Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as. Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>

        </div>
    );
};

export default Latest;