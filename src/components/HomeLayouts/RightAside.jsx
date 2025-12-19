import React from 'react';
import SocialLinks from './SocialLinks';
import FindUs from './FindUs';
import QZone from './QZone';

const RightAside = () => {
    return (
        <div className='space-y-10'>
            <SocialLinks></SocialLinks>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;