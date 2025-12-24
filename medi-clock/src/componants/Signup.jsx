import React from 'react'
import { useNavigate } from "react-router-dom";
import './css/Signup.css'
import logo3 from "./assets/lower-art.svg"
import AppLogo from "./assets/logo.svg"

const Signup = () => {
  const navigate = useNavigate();
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
    <input type="text" placeholder='Username Here' className='Sinput' /><br/>
    Email<br/>
    <input type="text" placeholder='Email Here' className='Sinput' /><br/>
    Password<br/>
    <input type="password" placeholder='Password Here' className='Sinput' />
</div>

      <div className='signupbutton'><button className='button' onClick={() => navigate("/Signup2")}><span>SIGN UPpp</span></button></div>
      <img src={logo3} alt="logo3" className='logo3'/>
    </div>
  )
}

export default Signup
