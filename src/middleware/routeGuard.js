import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const RouteGuard = ({ element: Element, ...rest }) => {
    function hasJWT() {
        return localStorage.getItem('token') ? true : false;
    }
    return (
        <Route
            {...rest}
            element={hasJWT() ? <Element /> : <Navigate to="/login" />}
        />
    );
};

export default RouteGuard;