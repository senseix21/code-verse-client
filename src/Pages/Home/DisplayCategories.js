import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DisplayCategories = () => {
    const data = useLoaderData();
    const categories = data[0].categories;
    console.log(categories);



    return (
        <>
            {
                categories.map((category, key) =>
                    <div key={key} className='flex-row items-center justify-center content-center bg-black text-left  lg:px-32 p-5 m-2 rounded-md '>
                        <img src={category.img} alt="" />
                        <Link to={`/courses/${category.id}`}><h2 className='text-xl font-medium '>{category.name}</h2></Link>
                        <p><small>{category.num_courses} course</small></p>
                    </div>
                )
            }
        </>
    );
};

export default DisplayCategories;
