import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn,dashboard}) => {
    
console.log(isLoggedIn);
    if(isLoggedIn){ 
        // console.log("In")
        return dashboard;
    }
    
    return <Navigate to="/login"/>
}

export default PrivateRoute
