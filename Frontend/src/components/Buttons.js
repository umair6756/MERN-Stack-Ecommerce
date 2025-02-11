import React from 'react'
import './Buttons.css'

export const Button = ({ label }) => {
  return (
    <div className='viewBtn'>
      <a href='#' className='viewMore'>{label}</a>
    </div>
  )
}



export const HeroSection = ({headingLabel, heroBackground}) => {
  return (
    <div>
      <section className={`hero ${heroBackground}`}>
        <div className="hero-overlay">
          <h1>{headingLabel}</h1>
          <ul className='hero-link'>
            <li><a href="/" className="home-link">Home</a></li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default { Button, HeroSection };

