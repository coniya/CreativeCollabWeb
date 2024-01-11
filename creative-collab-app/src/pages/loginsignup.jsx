import React, { useState } from 'react'
import "./LoginSignup.css"
import user from '../resources/user.png'
import email from '../resources/email.png'
import password from '../resources/password.png'


const LoginSignup = () => {
    const [action,setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user} alt="" />
                <input type="text" placeholder='username'/>
            </div>
            <div className="input">
                <img src={email} alt="" />
                <input type="email" placeholder='email'/>
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder='password'/>
            </div>
        </div>
        <div className="forgot-password">Forgot Password? <span>click here</span></div>
        <div className="submit-container">
            <div className={action==="Log In"?"submit gray":"submit"}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}>Log In</div>
        </div>
    </div>
  )
}

export default LoginSignup