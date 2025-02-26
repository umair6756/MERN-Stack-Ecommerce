import React, { useState } from 'react'
import './Login.css'
import image1 from '../banners-image/hero/about-hero.jpg'
import validator from 'validator'
import { HeroSection } from './Buttons'
import loginHero from '../banners-image/login.jpg'
import { useNavigate } from 'react-router-dom'



const Login = () => {

    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
      });
    
      // Handle form input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        

        
        // Prepare data for submission
        const { userName, email, password } = formData;
    
        fetch("http://localhost:5000/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName, email, password }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              alert("Signin successful!");

            } else {
              alert("Signin failed: " + data.message);
              
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };




      const navigate = useNavigate();
      const [error, setError] = useState("")
      const [loginDate, setLoginData] = useState({
        email :"",
        password: "",
      })

      const handleLoginInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginDate, [name]: value });
      };

      const handleLogin = (e) => {
        e.preventDefault()
        const {email, password} = loginDate

        fetch("http://localhost:5000/login",{
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email,password})
        })
        .then((response) => response.json())
        .then((data) => {
          if(data.success){
            alert("Login Successfully")
            navigate("/admin")
          }else{
            setError(data.message)
          }
        })
        .catch((error) => {
            console.error("Error:", error);
            setError("An error occurred during login.");
        });

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
                        <form action="#" onSubmit={handleLogin}>
                            <input type="text" placeholder="Enter your email" onChange={handleLoginInputChange} value={loginDate.email} name='email'/>
                            <input type="password" placeholder="Enter your password" onChange={handleLoginInputChange} value={loginDate.password} name='password' />
                            <a href="#">Forgot password?</a>
                            <input type="submit" className="login-button" defaultValue="Login" />
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
                        <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter your name" required="" value={formData.userName} onChange={handleInputChange} name='userName'/>

                            <input type="text" placeholder="Enter your email" required="" value={formData.email} onChange={handleInputChange} name='email'/>
                            <input type="password" placeholder="Create a password" value={formData.password} onChange={handleInputChange} name='password'/>
                            {/* <input type="password" placeholder="Confirm your password" value={formData.password} onChange={handleInputChange}  /> */}
                            <input type="submit" className="login-button" defaultValue="Signup"/>
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









