import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { signin } = useContext(AuthContext);
    const location = useLocation();
    if (signin) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}}  replace={true}></Navigate> ;
};

export default PrivateRoute;