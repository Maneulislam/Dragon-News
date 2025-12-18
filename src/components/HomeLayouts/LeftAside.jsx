import React, { Suspense } from 'react';
import Category from '../Category';

const LeftAside = () => {
    return (
        <div>

            <Suspense fallback={"Loading..."}>
                <Category></Category>
            </Suspense>
        </div>
    );
};

export default LeftAside;