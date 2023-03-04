import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoryOutlet from './CategoryOutlet';

const Category = () => {
    const category = useLoaderData();
    console.log(category);
    return (
        <>
            {/* <div>
                <h2 className='category-header text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-500 mb-5'>
                    Explore our courses...
                </h2>
            </div> */}
            <div className='category-links md:flex  justify-around bg-black py-5 lg:mx-20 mb-5 rounded-md mt-5'>
                <Link className='px-2  underline font-bold text-lg' to={'/courses/all'}>All</Link>
                <Link className='px-2  underline font-bold text-lg' to={'/courses/1'}>Web Dev</Link>
                <Link className='px-2  underline font-bold text-lg' to={'/courses/2'}>App Dev</Link>
                <Link className='px-2  underline font-bold text-lg' to={'/courses/3'}>Game Dev</Link>
                <Link className='px-2  underline font-bold text-lg' to={'/courses/4'}>Data Science</Link>
                <Link className='px-2  underline font-bold text-lg' to={'/courses/6'}>Dev Ops</Link>
                <Link className='px-2  underline font-bold text-lg' to={'/courses/5'}>Cybersecurity</Link>

            </div>
            <CategoryOutlet courses={category}></CategoryOutlet>
        </>
    );
};

export default Category;