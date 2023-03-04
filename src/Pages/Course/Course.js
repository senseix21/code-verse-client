import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';
import instructorImg from '../../Assets/screenshot-www.freepik.com-2023.03.02-08_16_23.png';

const Course = () => {
    const singleCourse = useLoaderData();
    const { hours, image, instructor, num_lessons, number_of_students, price, rating, title } = singleCourse;
    console.log(singleCourse);

    return (
        <div className='lg:flex md:flex justify-between lg:mx-24 mt-5 mb-5 rounded-md'>
            <img className='h-96 ' src={image} alt="" />
            <div className='mx-5'>
                <h2 className='text-2xl font-bold text-left'>{title}</h2>
                <small className='flex px-2 py-1'>
                    <span className='flex items-center' >
                        <span className='text-red-600 font-bold mx-1'>{rating}</span> <span className='text-orange-600 flex'><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /></span>
                    </span>
                    ({number_of_students})
                </small>
                <div className='flex items-center justify-start mx-1 mt-3  font-medium' >
                    <img className='rounded-full h-10 border-l mx-2' src={instructorImg} alt="" />
                    <div>
                        <p>{instructor}</p>
                        <small>Created by</small>
                    </div>
                </div>
                <div className='text-left mt-4'>
                    <p><span className='font-bold'>Lessons:</span> {num_lessons} lessons.</p>
                    <p><span className='font-bold'>Total Duration:</span> {hours} hr.</p>
                    <p className='text-left'><span className='font-bold'>Description:</span> The Complete Web Developer Course: A comprehensive course covering all the essential tools and skills required to become a web developer, including HTML, CSS, JavaScript, and various web development frameworks. <br />
                        The Complete Web Developer Course: A comprehensive course covering all the essential tools and skills required to become a web developer, including HTML, CSS, JavaScript, and various web development frameworks.</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-xl font-bold text-red-600'>${price}</p>
                    <button className="btn btn-active">Add to Cart</button>
                </div>
            </div>

        </div>
    );
};

export default Course;

