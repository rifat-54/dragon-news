import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const{user,loader}=useContext(AuthContex)
    const location=useLocation()
    // console.log(location.pathname)
    if(loader){

        return <div className='flex min-h-screen justify-center items-center'>
             <span className="loading  loading-bars loading-lg"></span>
        </div>
    }
    if(user)
    {
        return children;
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
   
};

export default PrivateRoutes;