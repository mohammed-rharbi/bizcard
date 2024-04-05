import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Assuming the token is stored in local storage under the key 'authToken'
    const authToken = localStorage.getItem('authToken');
    
    // isAuthenticated is true if authToken is not null
    const isAuthenticated = authToken !== null;
  
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

