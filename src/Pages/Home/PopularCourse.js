import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import instructor from '../../Assets/screenshot-www.freepik.com-2023.03.02-08_16_23.png'
import { BsFillStarFill } from 'react-icons/bs';
import { MdStickyNote2 } from 'react-icons/md';

const PopularCourse = () => {
    const data = useLoaderData();
    const courses = data[1].courses.slice(0, 6);



    const truncateTitle = (title, maxLength) => {
        if (title.length <= maxLength) {
            return title;
        }
        return `${title.slice(0, maxLength)}...`;
    };

    return (
        <div className='mt-5'>
            <div>
                <h2 className='category-header text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-rose-500 mb-5 mx-24 p-3'>Most Popular courses by CodeVerse...</h2>
            </div>
            <div className='grid lg:grid-cols-3 mx-12'>
                {
                    courses.map(course =>
                        <div key={course.id} className='mx-auto bg-slate-50 text-black mb-10 rounded-md'>
                            <img className='rounded-md h-60' src={course.image} width={300} alt="" />
                            <small className='flex px-2 py-1'>
                                <span className='flex items-center' >
                                    <span className='text-red-600 font-bold mx-1'>{course.rating}</span> <span className='text-orange-600 flex'><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /></span>
                                </span>
                                ({course.number_of_students})
                            </small>
                            <Link to={`/course/${course.id}`}><h2
                                className='text-left font-bold px-2'
                                title={course.title.length > 26 ? course.title : null}
                            >
                                {truncateTitle(course.title, 26)}
                            </h2></Link>
                            <div className='flex items-center justify-between font-medium px-2'>
                                <small className='flex items-center'><MdStickyNote2 /> {course.num_lessons} Lesson</small>
                                <small>Duration: {course.hours} hr.</small>
                            </div>
                            <div className='flex items-center justify-between bg-slate-300 px-2 py-1 rounded-md'>
                                <div className='flex items-center justify-between mx-1 font-medium' >
                                    <img className='rounded-full h-10 border-l' src={instructor} alt="" />
                                    <p>{course.instructor}</p>
                                </div>
                                <p className='font-bold'>${course.price}</p>

                            </div>

                        </div>
                    )

                }
            </div>
        </div>
    );
};

export default PopularCourse;