import React from 'react'
import { Navigate } from 'react-router-dom';
const Protected = ({ Component, isAuthenticated }) => {

    if (!isAuthenticated) {
        return <Navigate to="/login" />;

    }

    return <Component />
}

export default Protected
