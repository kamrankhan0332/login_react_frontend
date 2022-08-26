import React, {SyntheticEvent, useState} from "react";
import {Navigate} from "react-router-dom";
import axios, {AxiosError} from "axios";
import setCookie from "../hooks/setcookie";
import getCookie from "../hooks/getcookie";
import removeCookie from "../hooks/removecookie";
import {toast} from 'react-toastify'

    const Login = (props) => {
        const [email, setName] = useState('');
        const [password, setPassword] = useState('');
        const [redirect, setRedirect] = useState(false);
        const submit = async ( e ) => {
            e.preventDefault();
           const response = await axios.post('/login/',{
                email,
                password
            }, {withCredentials: true});
            if (response.data.data) {

                removeCookie('token')
                setCookie('token', response.data.data.token)
                setCookie('access_token', response.data.data.access_token)
                setRedirect(true);
                props.setLoggedIn(true)

            }
            if (response.status!==200){
                toast('Please enter correct email and password')
            }
            }

        if(redirect){
            return <Navigate to="/home"/>;
        }

        return (
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Sign In</h1>

        <div className="form-group">
        <input type="email" className="form-control" placeholder="Please enter email" required
        onChange={e =>setName(e.target.value)}
        />
            </div><br/>
            <div className="form-group">
        <input type="password" className="form-control" placeholder="Password" required
               onChange={e =>setPassword(e.target.value)}
        />
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        );
    };

export default Login;