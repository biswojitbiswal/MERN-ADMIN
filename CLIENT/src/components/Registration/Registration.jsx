import React, { useState } from 'react'
import Register from '../Images/Register.png'
import './Registration.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Store/Auth'
import { toast } from 'react-toastify';


function Registration() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  })

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(user)
    try {
      const response = await fetch(`http://localhost:4000/api/user/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      });

      const responseData = await response.json();
      console.log(responseData.extraDetails)

      if (response.ok) {
        toast.success(`User Registered`)
        storeTokenInLS(responseData.token)
        setUser({ username: "", email: "", phone: "", password: "" })
        navigate("/")
      } else {
        toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message)
      }

    } catch (error) {
      console.log(error)
    }
  }




  return (
    <>
      <section id='registration'>
        <div className="registration-container">
          <div className='registration-image'>
            <img src={Register} alt="registration image" />
          </div>

          <div className="registration-page">
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit} className="registration-form">
              <div className='input-fields'>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={handleInput} value={user.username} placeholder='Your Username'
                  id='username' required autoComplete='off' />
              </div>

              <div className='input-fields'>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={handleInput} value={user.email} placeholder='Your Email'
                  id='email' required autoComplete='off' />
              </div>

              <div className='input-fields'>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" onChange={handleInput} value={user.phone} placeholder='Your Phone'
                  id='phone' required autoComplete='off' />
              </div>

              <div className='input-fields'>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" onChange={handleInput} value={user.password} placeholder='Your Password'
                  id='password' required autoComplete='off' />
              </div>

              <button type='submit' className='btn submit-btn'>Register</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Registration
