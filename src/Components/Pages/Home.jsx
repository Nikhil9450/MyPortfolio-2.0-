import React from 'react';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';
// import Offcanvas from 'react-bootstrap/Offcanvas';




const Home = () => {


  return (
    <div className='home_container'>
        <div className='leftdiv'>

        <TypeAnimation
         // Same String at the start will only be typed once, initially
          sequence={[
          'Hi! I am Nikhil Kushwaha.',
          1000,
          'I am a Webapp developer.',
          1000,
          ]}
          speed={50} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: '2.5rem',fontFamily:'Neonderthaw' , fontWeight:'400',  color: 'rgb(98 246 255)',textShadow:'#3ddfff 1px 0 10px' }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
          {/* <h1>
            Hi! I am Nikhil Kushwaha and I'm
            <span className='hometitle'> a Webapp developer.</span>
          </h1>*/}
          <p>I'm React Webapp Developer based in Varanasi,India,I have 3 months
            of commercial experience  and I am specialize in creating
            web apps. I am open for new opportunities and
            intresting projects.
          </p> 
        </div>

        {/* <div className='rightdiv'>
        <FontAwesomeIcon className='fa-solid fa-spin' icon={faReact} size='10x' color='grey' />
        </div> */}
    </div>

  )
}

export default Home