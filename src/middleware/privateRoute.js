import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    /* check if a 'token' exists; if it does, render; otherwise, redirect to
    * the "/login" route.
    */
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />
};

export default PrivateRoute;