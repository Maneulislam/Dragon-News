import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch('/categories.json').then((res) => res.json());

const Category = () => {

    const categories = use(categoryPromise);


    return (
        <div>
            <h3 className='font-bold'>All Category ({categories.length})</h3>

            <div className='mt-4'>
                {
                    categories.map(category => (
                        <NavLink to={`/category/${category.id}`} key={category.id} className={"grid grid-cols-1 btn bg-white border-0 hover:bg-base-300"}>{category.name}</NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;