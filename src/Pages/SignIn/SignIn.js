import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast'
import { AuthContext } from '../Context/UserContext';
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { googleSignIn, signInWithEmailAndPass } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/courses/all';

    const signInWithEmailAndPassword = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('email', email, password);

        signInWithEmailAndPass(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                toast.success(`${user.displayName} signed in successfully!`)
                navigate(from, { replace: true });
                console.log('user:', user);
                // ...
            })
            .catch((error) => {
                //error
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
                //...
            });
    }

    const signInUserWithGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/courses/all');
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <div className="w-full max-w-xs mx-auto mt-10">
                <h2 className='text-2xl text-primary font-bold'>Sign in</h2>
                <form onSubmit={signInWithEmailAndPassword} className="bg-blend-darken shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                        <p className="text-red-500 text-xs text-left font-bold italic">{error}</p>
                        <p className=' text-left'>Don't have an account? <br /> Please, <Link className='text-blue-500' to={'/signup'}>Sign Up.</Link></p>

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="btn btn-primary" type="submit">
                            Sign In
                        </button>
                        <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </Link>
                    </div>
                    <p className='text-black font-bold mt-5'>Or Sign In with</p>
                    <Link onClick={signInUserWithGoogle} className="btn btn-wide text-2xl font-bold mt-2"><FcGoogle /></Link>
                    <button className="btn btn-wide text-2xl font-bold mt-2"><BsGithub /></button>
                </form>

            </div>
        </div>
    );
};

export default SignIn;