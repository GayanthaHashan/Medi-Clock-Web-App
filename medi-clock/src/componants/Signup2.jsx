import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './css/Signup.css'
import AppLogo from "./assets/logo.svg"
import logo2 from "./assets/lower-art.svg"

const Signup2 = () => {
  const [mobile, setMobile] = useState('');

  const navigate = useNavigate();

  const handleRequestOTP = () => {
  const phone = mobile.trim();

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Invalid Phone Number");
    return;
  }

  navigate("/Signup3");
};

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
            <input
              type="text"
              placeholder='Phone Number Here'
              className='Sinput'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)} /><br></br>

        </div>
        <div className='signupbutton'><button type="button" className='button' onClick={handleRequestOTP}><span>REQUEST OTP</span></button></div>
        <img src={logo2} alt="logo2" className='logo2'/>
        </div>
    
  )
}

export default Signup2
