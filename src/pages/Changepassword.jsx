import React, {useState} from "react";
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";
import removecookie from "../hooks/removecookie";
import getcookie from "../hooks/getcookie";
import custom_axios from "../customAxios/custom_axios";

const Changepassword = (props) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [access_token, accessToken] = useState('');
    let navigate = useNavigate();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token,
    }
    const [value, setValue] = useState('');

    const submit = async (e) => {
        if (props.isLoggedIn) {
            e.preventDefault();
            accessToken(getcookie('access_token'))
         const values =   await custom_axios.post('/change_password/', {
                email,
                password
            }, {headers: headers}, {withCredentials: true});
            setValue(values)
            removecookie('token')
            removecookie('access_token')
            props.setLoggedIn(false)
            navigate("/",{replace:true})

        }
        else{
            return <Navigate to="/"/>
        }
    }

    return (
        <div className="card-body">
            <form className="form" role="form" autoComplete="off" onSubmit={submit}>
                <div className="form-group">
                    <h1 className="h3 mb-3 fw-normal">Change Password</h1>
                    <input type="email" className="form-control" placeholder="enter email" required
                    onChange={e=>setEmail(e.target.value)}
                    /><br/>
                    <input type="password" className="form-control" placeholder="Enter New Password" required
                    onChange={e=>setPassword(e.target.value)}/>
                </div>


                <div className="form-group">
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};

export default Changepassword;