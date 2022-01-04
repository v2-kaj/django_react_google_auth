import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="App">
       <h1>LOGIN WITH GOOGLE</h1>
      
      <GoogleLogin
        clientId={process.env.Google_Client_ID}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      
    </div>
  );
}

export default App;
