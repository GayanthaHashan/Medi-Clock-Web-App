import './css/Login.css'
import './css/Buttons.css'
import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "./assets/login-and-signup.svg"
import logo2 from "./assets/lower-art.svg"


const Login = () => {
  const navigate = useNavigate(); 

  return (
    <div className="login" >
      
      <div className="header">
        <p className="he1">MEDI</p>
        <p className="he1">CLOCK</p>
        <p className="he2">LOGIN</p>
      </div>


      <img src={logo} alt="logo" />

      <div className="loginbutton">
        <button className='button' onClick={() => navigate("/Login2")}>
          <span>LOGIN</span> </button>

        <button className='button' onClick={() => navigate("/Signup")}>
          <span>SIGN UP</span> </button>
      </div>

      <div className="dis">
        We are here to remind your forgoing medicine that saves your health.</div>
      <div className="us">More about Us?</div>
      <img src={logo2} alt="logo2" className='logo2' />
    </div>
  )
}

export default Login;
