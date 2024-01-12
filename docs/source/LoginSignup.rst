LoginSignup Component
=====================

.. code:: jsx

    import React, { useState } from 'react';
    import "./LoginSignup.css";
    import user from '../resources/user.png';
    import email from '../resources/email.png';
    import password from '../resources/password.png';

    const LoginSignup = () => {
        // State to manage the current action (Log In or Sign Up)
        const [action, setAction] = useState("Log In");

        return (
            <div className='container'>
                <!-- Header section -->
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className="underline"></div>
                </div>

                <!-- Input fields for username, email, and password -->
                <div className="inputs">
                    <!-- Conditional rendering for username input based on the current action -->
                    {action === "Log In" ? <div></div> : <div className="input">
                        <img src={user} alt="" />
                        <input type="text" placeholder='username' />
                    </div>}

                    <!-- Email input -->
                    <div className="input">
                        <img src={email} alt="" />
                        <input type="email" placeholder='email' />
                    </div>

                    <!-- Password input -->
                    <div className="input">
                        <img src={password} alt="" />
                        <input type="password" placeholder='password' />
                    </div>
                </div>

                <!-- Forgot Password link (visible only during Log In) -->
                {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>click here</span></div>}

                <!-- Buttons to switch between Log In and Sign Up actions -->
                <div className="submit-container">
                    <div className={action === "Log In" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Log In") }}>Log In</div>
                </div>
            </div>
        );
    }

    export default LoginSignup;
