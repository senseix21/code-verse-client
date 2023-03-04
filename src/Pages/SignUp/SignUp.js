import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const SignUp = () => {
    const { signUpWithEmailAndPassword, updateUserProfileInfo, } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const createUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log('user:', email, password, name);

        signUpWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                handleUpdateProfile(name)
                navigate('/signin');
                console.log('user:', user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
                // ..
            });


    }
    const handleUpdateProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl,
        };
        updateUserProfileInfo(profile);
    };

    return (
        <div>
            <div className="w-full max-w-xs mx-auto">
                <form onSubmit={createUser} className="bg-blend-darken shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <div className="form-control">

                            <label className="input-group input-group-vertical">
                                <span>Usernname</span>
                                <input type="text" name='username' placeholder="infox2121" className="input input-bordered" required />
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="form-control">

                            <label className="input-group input-group-vertical">
                                <span>E-mail</span>
                                <input type="email" name='email' placeholder="info@site.com" className="input input-bordered" required />
                            </label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="form-control">

                            <label className="input-group input-group-vertical">
                                <span>Password</span>
                                <input type="password" name='password' placeholder="************" className="input input-bordered" required />
                            </label>
                        </div>
                        <p className="text-red-500 text-xs italic">{error}</p>
                        <p>Already have an account? Please, <Link className='text-primary' to={'/signin'}>Sign In.</Link></p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="btn btn-primary" type="submit">
                            Sign Up
                        </button>
                        <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;