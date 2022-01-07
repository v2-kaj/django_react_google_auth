import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";


function App() {
  const responseGoogle = (response) => {
    const {name, email} = response.profileObj

    
    console.log(response.accessToken);
    axios.post('/dj-rest-auth/google/', {
      access_token:response.accessToken
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  return (
    <div className="App">
       <h1>LOGIN WITH GOOGLE</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      
    </div>
  );
}

export default App;
