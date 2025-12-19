import React from 'react'
import './css/Login.css'
import './css/Buttons.css'
import { useNavigate } from "react-router-dom";
import logo from "./assets/login-image.svg"
import logo2 from "./assets/lower-art.svg"

const Login2 = () => {
    const navigate = useNavigate();
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
            <input type="text" placeholder='Username Here' className='Sinput'></input><br></br>
             Password<br></br>
            <input type="text" placeholder='Email Here' className='Sinput' protected ></input><br></br>
          </div>
          <div className='loginbutton2'><button className='button' onClick={() => navigate("/Home")}><span>SIGN UP</span></button></div>
            <div className="forgot">Forgot Password?</div>    
                 <img src={logo2} alt="logo2" className='logo2' />
          </div>
  )
}

export default Login2
