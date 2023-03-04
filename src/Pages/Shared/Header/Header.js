import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../../../Assets/code-verse-logo-removebg-preview.png';
import { AuthContext } from '../../Context/UserContext';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);
    console.log('user head:', user);


    const signOutAUser = () => {
        userSignOut()
            .then(() => {
                console.log('Signing out...');
            })
            .catch(err => console.error(err))

    }
    return (
        <div>
            <div className="navbar bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='mx-3' to={'/'}>Home</Link></li>
                            <li><Link className='mx-3' to={'/courses/all'}>Courses</Link></li>
                            <li><Link className='mx-3' to={'/about'}>About</Link></li>
                            <li><Link className='mx-3' to={'/blog'}>Blog</Link></li>
                            <li> <Link onClick={signOutAUser} className="btn  btn-outline mx-2 mt-1 btn-sm">Sign Out</Link></li>
                        </ul>
                    </div>
                    {/* <p className="btn btn-ghost normal-case text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-500 ">CodeVERSE</p> */}
                    <img className='w-36' src={logo} alt="" />
                    <div className="navbar-center hidden lg:flex p-3 ">
                        <ul className="menu menu-horizontal px-1">
                            <Link className='mx-3' to={'/'}>Home</Link>
                            <Link className='mx-3' to={'/courses/all'}>Courses</Link>
                            <Link className='mx-3' to={'/about'}>About</Link>
                            <Link className='mx-3' to={'/blog'}>Blog</Link>
                        </ul>
                    </div>
                </div>


                <div className="navbar-end">
                    <FaShoppingCart className='text-2xl font-bold mx-2' />
                    {
                        user?.email ?
                            <>
                                <p>{user?.displayName}</p>
                                {
                                    user?.photoURL ? <img className='h-9 rounded-full mx-2' src={user?.photoURL} alt="" /> : <FaUser />
                                }
                                <Link onClick={signOutAUser} className="btn  btn-outline mx-2 hidden lg:inline-flex sm:hidden ">Sign Out</Link>
                            </> :

                            <>
                                <Link to={'/signin'} className="btn btn-outline mx-2">Sign In</Link>
                                <Link to={'/signup'} className="btn btn-primary mx-2">Sign Up</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;