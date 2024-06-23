import React from 'react'
import {NavLink} from 'react-router-dom'
import AboutImage from '../Images/Home-image.png'
import './About.css'
import { useAuth } from '../../Store/Auth'

const About = () => {

  const {user} = useAuth()
  return (
    <>
      <section id="about-page">
        <div className="about-container">
        <div className="about-info">
          <p>Welcome {user ? user.username : "Biswo Tech"} </p> 
          <h1>Why Choose Us?</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nobis sit voluptates, unde quidem quia doloremque officiis velit. Velit voluptatum eum harum consequatur quasi libero error cumque reprehenderit fuga ad.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam optio omnis debitis, libero nobis iusto laborum esse quaerat laboriosam veritatis dolore dolores officia, nemo praesentium nisi ad repellat earum ea!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad repellendus, quidem dolorum a voluptatibus aliquid deserunt ea excepturi saepe sunt animi praesentium assumenda temporibus non repudiandae rem enim accusantium?</p>
          
          <div className="btns about-btns">
            <div>
              <NavLink to="/contact">
                <button className='btn about-btn'>Connect Now</button>
              </NavLink>
            </div>

            <div>
              <NavLink to="/about">
                <button className='btn about-btn'>Learn More</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={AboutImage} alt="" />
        </div>
        </div>
      </section>
    </>
  )
}

export default About
