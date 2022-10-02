import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <div className='mobileHeader'>
      <div className='homeLink'>
        <a href='#firstsection'>Home</a>
      </div>
      <button className='menubutton' onClick={handleShow}><FontAwesomeIcon icon={faBars} /></button>
      
      
      <Offcanvas show={show} onHide={handleClose} placement={"top"}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
          
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
    </div>
  )
}

export default MobileMenu