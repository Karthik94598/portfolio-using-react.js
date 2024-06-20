import React from 'react';
import Kar from './kar1.jpeg'
import './me.css'

export default function me() {
  return (
    <div className='me-body'>
      <div className='me-content'>
      <h1 style={{color:'orangered'}}>ABOUT ME</h1>
      <p>
      Greetings! I'm a passionate web developer fueled by a profound interest in the expansive realms of software development and wireless communication technology. My journey has been ignited by a fervor for crafting impactful digital experiences, combining effective time management with a creative touch rooted in graphic design principles. I firmly believe in the transformative power of visually compelling and user-friendly designs to elevate the overall user experience. Thriving on embracing new challenges, I'm committed to staying ahead of industry trends in the dynamic landscape of technology. Whether sculpting elegant code or shaping engaging user interfaces, I take pride in relentlessly pursuing excellence. Eagerly anticipating the chance to contribute my skills and passion to innovative projects that make a positive impact, let's connect and embark on this thrilling journey of technology together!
      </p>
      </div>
      <div className='me-pic'>
        <img src={Kar} ></img>
      </div>
    </div>
  )
}
