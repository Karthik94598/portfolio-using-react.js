import React from 'react';
import linkedinIcon from './linkedin.png'; // Adjust the file name as needed
import callIcon from './call.png'; // Adjust the file name as needed
import mailIcon from './mail.png';
import kar from './karthik.jpeg';
import './profile.css'

export default function Portifolio() {
  return (
    <div className='portifolio-container'>
      <div className='portifolio-parent'>
      <div className='pic-back'>
                <img src={kar} id='pic' >
                </img>
            </div>
        <div className='portifoli-details'>
          <div className='icon' >
            <a href='https://www.linkedin.com/in/uppada-giridhar-karthik-2b20b41b7/'>
            <img src={linkedinIcon} id='linkedin'/>
            </a>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLdhVHTWTgdKpZtRkGTWnpSKjFctLncMtdNcgRDSgSBgPKktsbMldJnwTbKpXgPnQxXMhS'>
            <img src={mailIcon} id='linkedin' />
            </a>
            <a href='tel:+91 9989054312'>
            <img src={callIcon} id='linkedin' />
            </a>
          </div>
          <div className='profile-detail-name'>
            <p style={{fontSize:'34px'}}>Hello i'm <b>KARTHIK</b></p>
          </div>
          <div className='profile-detail-role'>
            <h1>
                
                <p style={{height:'2',width:505}}>
                <marquee>
                    Frontend Developer ,
                    UI/UX Designer ,
                    Automation testing
                </marquee>
                </p>
            </h1>
          </div>
          <div className='profile-button'>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLdhVHTWTgdKpZtRkGTWnpSKjFctLncMtdNcgRDSgSBgPKktsbMldJnwTbKpXgPnQxXMhS'>
                <button id='hireButton'>Hire Me!!</button>
            </a>
            <a href='./GIRIDHAR-KARTHIK-Resume.pdf' download='GIRIDHAR-KARTHIK-RESUME.PDF'>
                <button id='reButton'>Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
