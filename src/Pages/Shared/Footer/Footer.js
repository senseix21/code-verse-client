import React from 'react';
import logo from '../../../Assets/code-verse-logo-removebg-preview.png';
import { FaFacebookSquare, FaTwitterSquare, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='lg:mx-20'>
            <footer className=" grid lg:grid-cols-3 items-center justify-center footer p-10 text-neutral-content rounded-md bg-black ">
                <div className='flex-row content-center'>
                    <img className='w-80' src={logo} alt="" />
                    <p>CodeVerse Ltd.<br />Providing reliable education since the start..</p>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover" to={'/terms'}>Terms of use</Link>
                    <Link className="link link-hover" to={'/terms'}>Privacy policy</Link>
                    <Link className="link link-hover" to={'/terms'}>Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <FaFacebookSquare className='text-5xl '></FaFacebookSquare>
                        <FaTwitterSquare className='text-5xl ' ></FaTwitterSquare>
                        <FaDiscord className='text-5xl '      ></FaDiscord>

                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;