import React from 'react';

const Hero = () => {
    return (
        <div className="hero lg:min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-screen-md">
                    <h1 className="lg:text-6xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-500  ">Code Your Way to Success: <br />
                        <span className='text-white'> Enhance Your Coding Skills with <span className=' text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-lime-500 '>Code Verse</span></span>
                    </h1>
                    <p className="py-6 lg:text-xl font-bold text-white">
                        <span className='bg-orange-600    p-2 mx-2  rounded-md'>Eat,</span>
                        <span className='bg-violet-600 p-2 mx-2 rounded-md'>sleep,</span>
                        <span className='bg-rose-600   p-2 mx-2 rounded-md'>code</span >
                        <span className='bg-green-600 p-2 mx-2 rounded-md'>and repeat. </span> </p>

                    <p> Unlock the power of code and unleash your creativity! Code Verse provides the perfect opportunity to learn new skills and take your coding abilities to the next level. </p>
                    <button className="btn btn-primary mt-5">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;