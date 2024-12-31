import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); 

  return isAuthenticated ? children : <Navigate to="/" replace />; 
};

export default PrivateRoute;
