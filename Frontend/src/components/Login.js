import React, { useState } from 'react'
import './Login.css'
import image1 from '../banners-image/hero/about-hero.jpg'
import validator from 'validator'
import { HeroSection } from './Buttons'
import loginHero from '../banners-image/login.jpg'



const Login = () => {
    const [password, setPassword] = useState("");


    const passwordValidation = () => {

        if (validator.isStrongPassword(password, {
            minLength: 8,
            minNumbers: 1,
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1
        })) {
            alert("Strong Password")

        }
        else {
            alert("Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character.")
            setPassword("")
        }
    }

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);

    // }

    return (
        <>   
            <HeroSection heroBackground="login-hero"/>

            <div className='login-div'>


                <div className="login-container">
                    <input type="checkbox" id="check" />
                    <div className="login form">
                        {/* <header className='m-0 p-0 bg-transparent'>Login</header> */}
                        <h1 className='text-center'>Login</h1>
                        <form action="#">
                            <input type="text" placeholder="Enter your email" />
                            <input type="password" placeholder="Enter your password" />
                            <a href="#">Forgot password?</a>
                            <input type="button" className="login-button" defaultValue="Login" />
                        </form>
                        <div className="signup">
                            <span className="signup">
                                Don't have an account?
                                <label htmlFor="check" className='login-label'>Signup</label>
                            </span> 
                        </div>
                    </div>
                    <div className="registration form">
                        <h1 className='text-center'>Signup</h1>
                        <form action="#">
                            <input type="text" placeholder="Enter your email" required="" />
                            <input type="password" placeholder="Create a password" onChange={(e) => setPassword(e.target.value)} required="" />
                            <input type="password" placeholder="Confirm your password" onChange={(e) => setPassword(e.target.value)} required="" />
                            <input type="button" className="login-button" defaultValue="Signup" onClick={passwordValidation} />
                        </form>
                        <div className="signup">
                            <span className="signup">
                                Already have an account?
                                <label htmlFor="check" className='login-label'>Login</label>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login