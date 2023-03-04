import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Assets/notFound.png';


const NotFound = () => {
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img src={notFound} alt="" />
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-500 p-5 ">404 Error Page</h1>
                    <p className="py-6 text-xl">Oh no! It looks like you're lost. The page you're looking for doesn't exist. Here are some possible reasons why:</p>
                    <ul className=' text-normal mt-2'>
                        <li>You mistyped the URL. It happens to the best of us.</li>
                        <li>The page has been moved or deleted. Don't worry, it's not you, it's us.</li>
                        <li>Gremlins have taken over the internet. It's a rare occurrence, but it happens.</li>
                    </ul>


                    <Link to={'/'} className="btn btn-primary mt-5">Go Home Kid</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;