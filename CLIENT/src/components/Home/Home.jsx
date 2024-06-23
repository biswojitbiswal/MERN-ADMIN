import React from 'react'
import './Home.css'
import {NavLink} from 'react-router-dom'
import HomeImage from '../Images/Home-image.png'

function Home() {
  return (
    <>
      <section id='home-page'>
        <div className="home-container">
        <div className="home-intro">
          <p>We are the worlds best IT company</p>
          <h1>Wel Come to Biswo Tech</h1>
          <p>Are you ready to take your business to the next level with cutting edge IT solution? Look no further At Biswo Tech. We specialize in providing innovative IT services and solution tailered to meet you unique needs.</p>
          <div className="btns home-btns">
            <div>
              <NavLink to="/contact">
                <button className='btn home-btn'>Connect Now</button>
              </NavLink>
            </div>

            <div>
              <NavLink to="/about">
                <button className='btn home-btn'>Learn More</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="home-image">
          <img src={HomeImage} alt="home image" />
        </div>
        </div>
      </section>
    </>
  )
}

export default Home
