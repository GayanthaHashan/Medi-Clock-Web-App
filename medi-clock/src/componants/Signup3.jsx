import { useNavigate } from "react-router-dom";
import './css/Signup.css'
import AppLogo from "./assets/logo.svg"
import logo2 from "./assets/lower-art.svg"
import React from 'react'

const Signup3 = () => {
  const navigate = useNavigate();
  return (
    <div className='Signup'>
                  <img src={AppLogo} alt="logo" />
                  <div className='header2'>
                  <p className='he1'>MEDI</p>
                  <p className='he1'>CLOCK</p>
                  <p className='he2'>USER REGISTRATION</p>
                </div>
            <div className='verify'>
                <input type="text" className='Verifyinput'></input>
                <input type="text"  className='Verifyinput'></input>
                <input type="text"  className='Verifyinput'></input>
                <input type="text" className='Verifyinput'></input>
                <input type="text" className='Verifyinput'></input>
                </div>
            <div className='verifybutton'><button className='button' onClick={() => navigate("/Signupdone")}><span>VERIFY</span></button></div>
                    <img src={logo2} alt="logo2" className='logo2'/>

        </div>
  )
}

export default Signup3
