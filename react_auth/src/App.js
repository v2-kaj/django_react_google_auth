import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


function App() {
  const responseGoogle = (response) => {
    
    const {name, email} = response.profileObj
    console.log(response.accessToken);
    console.log(response.tokenId);
  }
  return (
    <div className="App">
       <h1>LOGIN WITH GOOGLE</h1>
      
      <GoogleLogin
        clientId="15183622662-44dpv7eesg30cl27h6pu1nu7b5uj4q68.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      
    </div>
  );
}

export default App;
