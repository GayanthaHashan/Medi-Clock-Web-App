import { useNavigate } from "react-router-dom";
import './css/Signup.css'
import AppLogo from "./assets/logo.svg"
import logo2 from "./assets/lower-art.svg"
import React, { useState, useEffect } from 'react';


const Signup3 = () => {
  const [otp, setOtp] = useState(['', '', '', '', '']);

  const navigate = useNavigate();

  useEffect(() => {
  const randomOtp = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
  setOtp(randomOtp.map(String)); 
}, []);

  const handleVerify = () => {
  if (otp.some(val => val === '')) {
    alert("Give the OTP Code");
    return;
  }
  navigate("/Signupdone");
};

  return (
    <div className='Signup'>
                  <img src={AppLogo} alt="logo" />
                  <div className='header2'>
                  <p className='he1'>MEDI</p>
                  <p className='he1'>CLOCK</p>
                  <p className='he2'>USER REGISTRATION</p>
                </div>
            <div className='verify'>
            {otp.map((value, index) => (
            <input
            key={index}
            type="text"
            className='Verifyinput'
            value={value}
            maxLength={1}
            onChange={(e) => {
            const val = e.target.value.replace(/[^0-9]/g, ''); // numbers only
            const newOtp = [...otp];
            newOtp[index] = val;
        setOtp(newOtp);
      }}
    />
  ))}
</div>

            <div className='verifybutton'><button type="button" className='button' onClick={handleVerify}><span>VERIFY</span></button></div>
                    <img src={logo2} alt="logo2" className='logo2'/>

        </div>
  )
}

export default Signup3
