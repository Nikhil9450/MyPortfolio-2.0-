import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../asset/LOGO.png';
import mobile_logo from '../asset/MOBILE_LOGO.png';
import "./Header.css";
// import MobileMenu from './MobileMenu';


 

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='Header_container'>
      <div>
        <a href='#firstsection'><img className='logo' src={logo} alt="logo" /></a>
      </div>

      <div>
       {/* <a href='#firstsection'><img className='logo' src={logo} alt="logo" /></a> */}
     
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
    <div className='mobileHeader'>
      <div className='homeLink'>
        <a  href='#firstsection'><img className='mobilelogo' src={mobile_logo} alt="logo" /></a>
      </div>
      {/* <button className='menubutton' onClick={handleShow}><FontAwesomeIcon icon={faBars} /></button> */}
      {show? <button className='menubutton' onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></button>:<button className='menubutton' onClick={handleShow}><FontAwesomeIcon icon={faBars} /></button>}
      
      <Offcanvas show={show} onHide={handleClose} placement={"top"}   scroll={true} backdrop= {true}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='mobilecontents'>
          
            <div className='sectionLinks'>
              <div className='sectionLinks'>
                <a href='#thirdsection'>Resume</a>
                <a href='#fourthsection'>Works</a>
                <a href='#fifthsection'>Contact</a> 
              </div>
              <div className='socialLinks'>
                <a href='https://www.linkedin.com/in/nikhil-k-14159810b'><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
                <a href='https://twitter.com/Nikhilk9839?t=oe0RHy9pCeCuR6lrHu-1GA&s=08'><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
                <a href='https://github.com/Nikhil9450'><FontAwesomeIcon icon={faGithub} size="lg"/></a>
              </div> 
            </div>
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
    </>
  )
}

export default Header