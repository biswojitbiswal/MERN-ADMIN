import React, { useState } from 'react'
import ContactImage from '../Images/Contact.png'
import './Contact.css'
import { useAuth } from '../../Store/Auth'
import { toast } from 'react-toastify';

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  })
  const [userData, setUserData] = useState(true)

  const { user } = useAuth()
  // console.log(user.user)

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    })

    setUserData(false)
  }

  const handleInput = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://servicebase-api.vercel.app/api/contact/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      })

      if (response.ok) {
        toast.success("Message Delivered")
        const responseData = await response.json();
        // console.log(responseData)
      }
    } catch (error) {
      toast.error("Message not delivered")
      console.log(error)
    }
  }

  return (
    <>
      <section id="contact-page">
        <div className="contact-container">
          <div className="contact-image">
            <img src={ContactImage} alt="contact-image" />
          </div>

          <form onSubmit={handleSubmit} className='contact-form'>
            <div className='input-fields'>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" onChange={handleInput} value={contact.username} placeholder='Your Username'
                id='username' required autoComplete='off' />
            </div>

            <div className='input-fields'>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" onChange={handleInput} value={contact.email} placeholder='Your Email'
                id='email' required autoComplete='off' />
            </div>

            <div className='input-fields'>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" onChange={handleInput} value={contact.message} placeholder='Your Message' required autoComplete='off' cols="30" rows="10"></textarea>
            </div>

            <button type='submit' id='contact-btn' className='btn submit-btn'>Send</button>

          </form>
        </div>

      </section>
    </>
  )
}

export default Contact
