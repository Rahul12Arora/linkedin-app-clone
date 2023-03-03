import React, { useState, useEffect } from 'react'
import './CSS/LoginForm.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SignIn(props) {
    // props.userdatabase
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    }

    const passwordChangeHandler = (event) =>{
        setEnteredPassword(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        //checking here is login details are correct
        if(enteredUsername=='rahul arora' && enteredPassword=='12345'){
        props.onLoginCheck(true);
        console.log('SubmitHandler executed successfully');
        setEnteredUsername('');
        setEnteredPassword('');
        }
        else{
            alert('enter authentic credentials');
        }
    }

    const submitHandlersignup = (event) =>{
        event.preventDefault();
        //checking here is login details are correct
        props.onLoginCheck(false);
        props.onSignUpClick(true);
        console.log('SubmitHandler executed successfully');
    }

    
  return (
    <div className='login'>
        <div className='login__box'>

            <div className='login__title'>
                <span className='login__title__text'>Linked </span>
                <LinkedInIcon className='icon'></LinkedInIcon>
            </div>

            <form className='login__form' onSubmit={submitHandler}>
                <input className='login__input' type='text' onChange={usernameChangeHandler} value={enteredUsername} placeholder='Username' />
                <input className='login__input' type='password' onChange={passwordChangeHandler} value={enteredPassword} placeholder='Password' />
                <button className='login__button' type="submit" >Log In</button>
            </form>
            
            <div className='login__prompt'>
                <p>Don't have an account?  </p>
                <a onClick={submitHandlersignup}> Sign Up here</a>
            </div>
            
        </div>
    </div>
  )
}

export default SignIn