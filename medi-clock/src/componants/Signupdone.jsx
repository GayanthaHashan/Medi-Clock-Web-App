import { useNavigate } from "react-router-dom";
import './css/Signup.css'
import RegiDone from "./assets/Registration-done.svg"
import logo4 from "./assets/lower-art.svg"
import React from 'react'

const Signupdone = () => {
  const navigate = useNavigate();
  return (
    <div className='Signup'>
      <img src={RegiDone} alt="logo" className='RegiDone'/>
      <div className='complete'><p>REGISTRATION COMPLETE</p></div>
      <div className='verifybutton'><button className='button'onClick={() => navigate("/")}><span>BACK TO START</span></button></div>
      <img src={logo4} alt="logo4" className='logo4'/>
    </div>
  )
}

export default Signupdone
