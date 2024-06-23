import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeImage from '../Images/Home-image.png'
import './Services.css'
import { useAuth } from '../../Store/Auth'


function Services() {
  const { services } = useAuth();
  return (
    <>
      <section id='service-page'>
        <div className="service-container">
          <div className="heading">
            <h1>Services</h1>
          </div>

          <div className="card-container">
            {
              services.map((currEle, index) => {
                const { service, description, price, provider } = currEle;
                return (
                  <div className="card" key={index}>
                    <div className="card-img">
                      <img src={HomeImage} alt="images" />
                    </div>
                    <div className="card-details">
                      <h2>{service}</h2>
                      <p>{provider}</p>
                      <p>{price}</p>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
