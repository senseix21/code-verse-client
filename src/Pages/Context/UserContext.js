import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const auth = getAuth(app);
export const AuthContext = createContext(auth);

const UserContext = ({ children }) => {

    /* Declare loading and User state */
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    /* SignUp with email and pass */
    const signUpWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    /* SigniN WITH email and password */
    const signInWithEmailAndPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    /* Verify Email address */
    const verifyEmailAddress = () => {
        return sendEmailVerification(auth.currentUser)
    }

    /* SignIn with Github Auth Provider */
    const gitHubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }
    /* SignIn with Google Auth Provider */
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    };



    /* SignOut  */
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    /* Using effect to setUser and Check loading state */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('onAuthStateChanged', currentUser);
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    /* Update user profile information */
    const updateUserProfileInfo = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const authInfo = {
        user,
        loading,
        googleSignIn,
        gitHubSignIn,
        userSignOut,
        signInWithEmailAndPass,
        signUpWithEmailAndPassword,
        verifyEmailAddress,
        updateUserProfileInfo
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;