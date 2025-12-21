import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header';
import RightAside from '../components/HomeLayouts/RightAside';
import DetailsNewsCard from '../components/DetailsNewsCard';

const NewsDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});
    const cleanId = id?.startsWith(':') ? id.slice(1) : id;


    useEffect(() => {
        const newsDetails = data.find((singleData) => console.log(singleData.id, cleanId) || singleData.id == cleanId);
        setNews(newsDetails)

    }, [data, cleanId]);

    return (
        <div className='w-10/12 mx-auto'>
            <header>
                <Header></Header>
            </header>

            <main className='grid grid-cols-12 mt-20'>
                <section className='grid col-span-9 px-16'>
                    <DetailsNewsCard news={news}></DetailsNewsCard>
                </section>

                <section className='grid col-span-3'>
                    <RightAside></RightAside>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;