import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Changepassword from './pages/Changepassword'
import Logout from "./pages/logout";
import getCookie from "./hooks/getcookie";
import {Navigate} from "react-router";

function App() {
    const [isLoggedIn, setLoggedIn]=useState(false)
    useEffect(()=>{
        if (getCookie('token') === undefined){
            setLoggedIn(false)
        }
        else{
            setLoggedIn(true)
        }
    });
  return (
    <div className="App">
        <BrowserRouter>
            <Nav isLoggedIn={isLoggedIn}/>
            <main className="form-signin w-100 m-auto">
              <Routes>
                      <Route path="/home" element={isLoggedIn?<Home/>:<Navigate to='/'/>} />
                      <Route path="/" element={<Login setLoggedIn={setLoggedIn}/>}/>
                      <Route path="/changepassword" element={isLoggedIn?<Changepassword setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}/>: <Navigate to="/"></Navigate>}/>
                      <Route path="/logout" element={isLoggedIn?<Logout setLoggedIn={setLoggedIn}/>:<Navigate to="/"/>}/>
                  </Routes>
        </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
