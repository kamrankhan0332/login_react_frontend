import React, {useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import removecookie from "../hooks/removecookie";

const Logout = (props) => {
    removecookie('token')
    removecookie('access_token')
    props.setLoggedIn(false)
    return <Navigate to="/"/>;
};

export default Logout