import React, { useState } from 'react'
import './CSS/LoginForm.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SignIn from './SignIn';

function LoginForm() {
    const[userdatabase, setuserdatabase] = useState([{username:'rahul arora', password:'12345', email:'rahul@gmail.com', profilepicurl:'http://'}]);

    const submiteventHandler = (event) => {
        event.preventDefault();
        setuserdatabase([
            ...userdatabase,
            {
                username: document.getElementById('us').value,
                profilepicurl:document.getElementById('pp').value,
                email:document.getElementById('em').value,
                password:document.getElementById('pw').value,
            },
        ]);

        document.getElementById('us').value='';
        document.getElementById('pp').value='';
        document.getElementById('em').value='';
        document.getElementById('pw').value='';

        const smth = <SignIn passuserdatabse={userdatabase}></SignIn>
        
    }

    
  return (
    <div className='login'>
        <div className='login__box'>

            <div className='login__title'>
                <span className='login__title__text'>Linked</span>
                <LinkedInIcon className='icon'></LinkedInIcon>
            </div>

            <form className='login__form' onSubmit={submiteventHandler}>
                <input id='us' className='login__input' type='text' placeholder='Username' />
                <input id='pp' className='login__input' type='text' placeholder='Profile picture URL' />
                <input id='em' className='login__input' type='text' placeholder='Email' />
                <input id='pw' className='login__input' type='password' placeholder='Password' />
                <button className='login__button' type="submit">Sign Up</button>
            </form>
            {console.log('userdatabase is here ',userdatabase)}
            
            <div className='login__prompt'>
                <p>Already have an account? </p>
                <a href='/login'>Login here</a>
            </div>
        </div>
    </div>
  )
}

export default LoginForm