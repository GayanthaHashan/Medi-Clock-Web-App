import React from 'react'
import { useNavigate } from "react-router-dom";
import './css/Signup.css'
import AppLogo from "./assets/logo.svg"
import logo2 from "./assets/lower-art.svg"

const Signup2 = () => {
  const navigate = useNavigate();
  return (
       <div className='Signup'>
              <img src={AppLogo} alt="logo" />
              <div className='header2'>
              <p className='he1'>MEDI</p>
              <p className='he1'>CLOCK</p>
              <p className='he2'>USER REGISTRATION</p>
            </div>
        <div className='userNo'>
            Mobile Number<br></br>
            <input type="text" placeholder='Phone Numeber Here' className='Sinput'></input><br></br>
        </div>
        <div className='signupbutton'><button className='button' onClick={() => navigate("/Signup3")}><span>REQUEST OTP</span></button></div>
        <img src={logo2} alt="logo2" className='logo2'/>
        </div>
    
  )
}

export default Signup2
