import React from 'react'
import "./Footer.css";
import logo from '../asset/LOGO.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='logo_container'>
        <img className='footer_logo' src={logo} alt="logo" />
      </div>
      <div className='other_detail'>
       <div className='name_position'>
          <h1 className='footer_name'>Nikhil Kushwaha</h1>
          <h1 className='position'>React Developer</h1>
       </div>
       <div>
        <h5>Excellence in Frontend Development.</h5>
       </div>
       <div className='footer_socialLinks'>
          <a href='https://www.linkedin.com/in/nikhil-k-14159810b'><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
          <a href='https://twitter.com/Nikhilk9839?t=oe0RHy9pCeCuR6lrHu-1GA&s=08'><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
          <a href='https://github.com/Nikhil9450'><FontAwesomeIcon icon={faGithub} size="lg"/></a>
        </div> 
      </div>
    </div>
  )
}

export default Footer