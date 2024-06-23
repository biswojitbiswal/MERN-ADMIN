import React, { useState } from 'react'
import LoginImage from '../Images/Login.png'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../Store/Auth'
import { toast } from 'react-toastify';

function Login() {
  const[user, setUser] = useState({
    username: "",
    password: "",
  })

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    // console.log(user)

    try {
      const response = await fetch(`http://localhost:4000/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(user)
    });

    const responseData = await response.json();
    console.log(responseData.message)

    if(response.ok){
      toast.success(`Login successful`)
      storeTokenInLS(responseData.token)
      setUser({ username: "", password: "" })
      navigate("/");

    } else {
      toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message)
    }
      
    } catch (error) {
      console.log(error)
    }
  
  }

  return (
    <>
      <section id='login-page'>
        <div className="login-container">
        <div className="login-image">
          <img src={LoginImage} alt="" />
        </div>
        
        <div className="login-form">
          <h1>Log In Form</h1>
          <form onSubmit={handleSubmit}>
          <div className='input-fields'>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={handleInput} value={user.username} placeholder='Your Username'
            id='username' required autoComplete='off' />
          </div>

          <div className='input-fields'>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" onChange={handleInput} value={user.password} placeholder='Your Password'
            id='password' required autoComplete='off' />
          </div>

          <button type='submit' className='btn submit-btn'>Log In</button>
          </form>
        </div>
        </div>
      </section>
    </>
  )
}

export default Login
