import React from 'react';
import NewsDetails from '../pages/NewsDetails';


import { Link } from 'react-router';
import { FaArrowLeft, FaStar } from 'react-icons/fa';

const DetailsNewsCard = ({ news }) => {
    // Destructuring the data for cleaner code
    const {
        title,
        image_url,
        details,
        category_id,
        author,
        rating
    } = news || {};

    return (
        <div>


            <h3 className='text-md font-bold mb-6'>Dragon News </h3>

            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                {/* 1. Main News Image */}
                <figure className="px-6 pt-6">
                    <img
                        src={image_url}
                        alt={title}
                        className="w-full h-[400px] object-cover rounded-lg"
                    />
                </figure>

                <div className="p-8">
                    {/* 2. Metadata Section */}
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src={author?.img}
                            alt={author?.name}
                            className="w-12 h-12 rounded-full border-2 border-orange-400 p-0.5"
                        />
                        <div>
                            <h4 className="font-bold text-gray-800 leading-tight">{author?.name}</h4>
                            <p className="text-sm text-gray-500">
                                {author?.published_date ? new Date(author.published_date).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                }) : "Date not available"}
                            </p>
                        </div>

                        {/* Optional: Rating display on details page */}
                        <div className="ml-auto flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-full text-orange-500">
                            <FaStar size={14} />
                            <span className="text-sm font-semibold">{rating?.number}</span>
                        </div>
                    </div>

                    {/* 3. News Title */}
                    <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-6">
                        {title}
                    </h1>

                    {/* 4. News Details (Article Content) */}
                    <article className="text-gray-600 leading-relaxed text-lg space-y-4 mb-10">
                        {/* If details are long, it's good to keep them in a readable paragraph */}
                        <p className="whitespace-pre-line">
                            {details}
                        </p>
                    </article>

                    {/* 5. Navigation Footer */}
                    <div className=" pt-8">
                        <Link
                            to={`/category/${category_id}`}
                            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
                        >
                            <FaArrowLeft />
                            All news in this category
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsNewsCard;