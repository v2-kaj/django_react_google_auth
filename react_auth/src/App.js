import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';



function App() {
  const responseGoogle = (response) => {
    const {name, email} = response.profileObj
    console.log(response.accessToken)
    console.log(response.tokenId)
    axios
    .post('/api/dj-rest-auth/google/',{
      access_token:`${response.accessToken}`},{
      headers: {
        'Content-Type': 'application/json'
      }  

    })
    .then(function (response) {
      console.log(response.data.access_token);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

  const logout = () =>{
    console.log("Logged out")

  }
  return (
    <div className="App">
       <h1>LOGIN WITH GOOGLE</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <Link to="/">Home</Link> |{" "}
      <Link to="/profile">Profile</Link>

      <GoogleLogout
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout>
      
    </div>
  );
}

export default App;
