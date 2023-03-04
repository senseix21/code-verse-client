import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Stats from '../Shared/Stats/Stats';
import WhyUs from '../Shared/WhyUs/WhyUs';
import DisplayCategories from './DisplayCategories';
import Hero from './Hero';
import PopularCourse from './PopularCourse';


const Home = () => {

    const data = useLoaderData();

    // console.log(categories);
    // // console.log(courses);

    return (
        <>
            <Hero></Hero>
            <h2 className='text-4xl font-bold text-left mx-20 p-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-lime-500'>Explore our categories...</h2>

            <div className='grid lg:grid-cols-3 mx-16 p-5'>
                <DisplayCategories key={data.index} ></DisplayCategories>
            </div>
            <div className=''>
                <PopularCourse key={data.index}></PopularCourse>
            </div>
            <Stats></Stats>
            <WhyUs></WhyUs>


        </>
    );
};

export default Home;