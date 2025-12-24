
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

import './css/Signup.css'
import logo3 from "./assets/lower-art.svg"
import AppLogo from "./assets/logo.svg"

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = () => {
  const user = username.trim();
  const mail = email.trim();
  const pass = password.trim();

  if (!user || !mail || !pass) {
    alert("User Data Invalid");
    return;
  }

  const usernameRegex = /^[A-Za-z]+$/;
  if (!usernameRegex.test(user)) {
    alert("Username has to have only Characters");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(mail)) {
    alert("Enter a valid Email");
    return;
  }

  if (pass.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  navigate("/Signup2");
};



  return (
    <div className='Signup'>
        <img src={AppLogo} alt="logo" />
        <div className='header2'>
        <p className='he1'>MEDI</p>
        <p className='he1'>CLOCK</p>
        <p className='he2'>USER REGISTRATION</p>
      </div>
      
        <div className='Userdetails'>
    Username<br/>
    <input
       type="text"
       placeholder='Username Here'
       className='Sinput'
       value={username}
       onChange={(e) => setUsername(e.target.value)}/>
   <br/>Email<br/>
    <input
       type="text"
       placeholder='Email Here'
       className='Sinput'
       value={email}
       onChange={(e) => setEmail(e.target.value)}/> 
   <br/> Password<br/>
    <input
      type="password"
      placeholder='Password Here'
      className='Sinput'
      value={password}
      onChange={(e) => setPassword(e.target.value)}/>
</div>

      <div className='signupbutton'><button type="button" className='button' onClick={handleSignup}><span>SIGN UP</span></button></div>
      <img src={logo3} alt="logo3" className='logo3'/>
    </div>
  )
}

export default Signup
