import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import getCookie from "../hooks/getcookie";

function Nav (props) {

    let menu ;

    if (!props.isLoggedIn){
        menu = (
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link active" aria-current="page" >Login</Link>
                    </li>
                </ul>
            </div>
        )
    }
    else{
        menu = (
            <div className="container-fluid">
                <div>
                    <ul className="navbar-nav navBar me-auto mb-2 mb-md-0">
                        <li><Link to="/home" className="nav-link navbar-brand" >Home</Link></li>
                        <li className="navBarImg">⌄
                            <ul className="dropdownMenu">
                                <li className="nav-item active">
                                    <Link to="/logout" className="nav-link active" aria-current="page" >Logout</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/changepassword" className="nav-link active" aria-current="page" >Change Password</Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>


            </div>

        )
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            {menu}
        </nav>
    );
};

export default Nav;