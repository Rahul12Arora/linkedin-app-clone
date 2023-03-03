import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import LoginForm from './LoginForm';
import SignIn from './SignIn';

function App() {

  const [isLoggedin,setisLoggedin] = useState(false);
  const [signupClick, setsignupClick] = useState(false);

  if(isLoggedin){
    return(
    <div>
      <Header></Header>
      <div className='app__body'>
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Widget></Widget>
      </div>
    </div>
    )
  }
  else if(signupClick){
  return (
    <LoginForm onLoginCheck={setisLoggedin} onSignUpClick={setsignupClick}></LoginForm>
    // <SignIn onLoginCheck={setisLoggedin} onSignUpClick={setsignupClick}></SignIn>
  )
  }
  else{
    return (
      <SignIn onLoginCheck={setisLoggedin} onSignUpClick={setsignupClick}></SignIn>
    )
  }
}

export default App;
