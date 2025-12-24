import React, { useState, useEffect } from 'react';
import './css/Login.css'
import './css/Buttons.css'
import { useNavigate } from "react-router-dom";
import logo from "./assets/login-image.svg"
import logo2 from "./assets/lower-art.svg"

const Login2 = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
    const user = username.trim();
    const pass = password.trim();

  if (!user || !pass) {
    alert("User Data Invalid");
    return;
  }

  const usernameRegex = /^[A-Za-z]+$/;
  if (!usernameRegex.test(user)) {
    alert("Username has to have only Characters");
    return;
  }

  if (pass.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  navigate("/Home");
};

  return (
    <div className='login'>
          <div className='header'>
            <p className='he1'>MEDI</p>
            <p className='he1'>CLOCK</p>
            <p className='he2'>LOGIN</p>
          </div>
    
          <img src={logo} alt="logo" />
          <div className='Userdetails2'>
            Username<br></br>
            <input
            type="text"
            placeholder='Username Here'
            className='Sinput'
            value={username}
            onChange={(e) => setUsername(e.target.value)}/> <br></br>

             Password<br></br>
            <input
           type="password"
           placeholder='Password Here'
           className='Sinput'
           value={password}
           onChange={(e) => setPassword(e.target.value)}/> <br></br>

          </div>
          <div className='loginbutton2'><button type="button" className='button' onClick={handleLogin}><span>SIGN UP</span></button></div>
            <div className="forgot">Forgot Password?</div>    
                 <img src={logo2} alt="logo2" className='logo2' />
          </div>
  )
}

export default Login2
