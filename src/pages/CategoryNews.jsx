import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

    const [categoryNews, setCategoryNews] = useState([]);

    const { id } = useParams();

    const data = useLoaderData();




    useEffect(() => {

        if (id == 0) {
            setCategoryNews(data);
            return;
        }
        else if (id == 1) {
            const filteredNews = data.filter(news => news.others.is_today_pick == id)
            setCategoryNews(filteredNews)

        }
        else {
            const filteredNews = data.filter(news => news.category_id == id)
            setCategoryNews(filteredNews)
        }


    }, [data, id])

    return (
        <div className='px-9 '>
            <h2 className='font-bold mb-5'> Total {categoryNews.length} News Found</h2>

            <div className='grid grid-cols-1 gap-10'>
                {
                    categoryNews.map(news => <NewsCard news={news} key={news.id}></NewsCard>)

                }
            </div>
        </div>
    );
};

export default CategoryNews;