import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';
import "./Header.css";


const Header = () => {
  return (
    <>
    <div className='Header_container'>
      <div>
       <a href='#firstsection'>Home</a>
      </div>
      <div>
        <a href='#thirdsection'>Resume</a>
        <a href='#fourthsection'>Works</a>
        <a href='#fifthsection'>Contact</a> 
      </div>
      <div>
        <a href='https://www.linkedin.com/in/nikhil-k-14159810b'><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
        <a href='https://twitter.com/Nikhilk9839?t=oe0RHy9pCeCuR6lrHu-1GA&s=08'><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
        <a href='https://github.com/Nikhil9450'><FontAwesomeIcon icon={faGithub} size="lg"/></a>
      </div>
    </div>
    </>
  )
}

export default Header