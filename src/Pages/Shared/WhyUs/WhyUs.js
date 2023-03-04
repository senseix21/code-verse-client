import React from 'react';
import { Link } from 'react-router-dom';
import whyChooseus from '../../../Assets/33906144_indomay32-removebg-preview.png'

const WhyUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content grid lg:grid-cols-2 md:mx-24">
                <img src={whyChooseus} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold text-left text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-rose-500">Become a Coding Wizard <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-500'>with Our Comprehensive Platform of Courses</span></h1>
                    <p className="py-6 text-left">Coding might seem like a daunting task, but fear not! Our comprehensive platform of courses will transform you into a coding wizard faster than you can say "Hello, World!" From Python to Java, HTML to CSS, our courses cover it all. Don't be a muggle when it comes to coding; join us and become a coding sorcerer!</p>

                    <Link to={'/courses/all'}><button className="btn btn-primary flex justify-items-start">Explore Our Courses</button></Link>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;