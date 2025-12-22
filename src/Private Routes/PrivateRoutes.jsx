import React, { Children, use } from 'react';
import NewsDetails from '../pages/NewsDetails';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = use(AuthContext);
    console.log(user);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>

    }

    if (user && user?.email) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }



};

export default PrivateRoutes;