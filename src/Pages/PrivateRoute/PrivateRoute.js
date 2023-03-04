import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <span>Loading..</span>
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to={'/signin'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;