import React from 'react';
import "./Home.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faReact } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';
// import Offcanvas from 'react-bootstrap/Offcanvas';




const Home = () => {

  return (
    <div className='home_container'>
        <div className='leftdiv'>
        <h1>Nikhil Kushwaha</h1>
        <TypeAnimation
         // Same String at the start will only be typed once, initially
          sequence={[
          'Hi! I am Nikhil Kushwaha.',
          1000,
          'I am a Webapp developer.',
          1000,
          ]}
          speed={80} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: '1rem',fontFamily:'Raleway' , fontWeight:'300',  color: 'white' }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
          {/* <h1>
            Hi! I am Nikhil Kushwaha and I'm
            <span className='hometitle'> a Webapp developer.</span>
          </h1>*/}
          {/* <p>I'm a highly skilled Web Developer with 1.5 years of experience, specializing in React, Redux, and JavaScript, complemented by strong HTML and CSS knowledge. Known for delivering exceptional results, I thrive in fast-paced environments and bring adaptability, teamwork, and excellent communication skills to any development team. Let's build something extraordinary together! */}
          {/* </p>  */}
        </div>

        {/* <div className='rightdiv'>
        <FontAwesomeIcon className='fa-solid fa-spin' icon={faReact} size='10x' color='grey' />
        </div> */}
    </div>

  )
}

export default Home