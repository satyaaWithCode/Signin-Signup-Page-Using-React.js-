
import { useState } from "react";
import "./LoginRegister.css"
import React from "react";
import { FaUserCircle, FaLock, FaEnvelope } from "react-icons/fa";


//shift+alt+f
const LoginRegister = () => {

    const [action , setAction]=useState('');

    const registerLink = () => {
        setAction(' active');
    }

    const logLink = () => {
        setAction('');
    }
    

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>

                    <div className="input-box">
                        <input type="text" placeholder="Username"
                            required />
                        <FaUserCircle className="icon" />
                    </div>


                    <div className="input-box">
                        <input type="text" placeholder="Password"
                            required />
                        <FaLock className="icon" />

                    </div>

                    <div className="remember-forgot">
                        <label><input type="Checkbox" />Remember me?</label>
                        <a href="#">Forgot Password</a>
                    </div>

                    <button type="Submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account?
                            <a href="#" onClick={registerLink}>Register</a>
                        </p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username"
                            required />
                        <FaUserCircle className="icon" />
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder="Email"
                            required />
                        <FaEnvelope className="icon" />
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder="Password"
                            required />
                        <FaLock className="icon" />

                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Phonenumber"
                            required />
                    </div>
                
                    

                    <div className="remember-forgot">
                        <label><input type="Checkbox" />I agree to the terms & Conditions</label>
                    </div>

                    <button type="Submit">Register</button>

        
                    <div className="register-link">
                        <p>Already have an account?
                            <a href="Register" onClick={logLink}>Login</a>
                        </p>
                    </div>

                </form>
            </div>
        </div>


    );

}
export default LoginRegister;