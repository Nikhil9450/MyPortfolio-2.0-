import React from 'react';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';




const Home = () => {


  return (
    <div className='home_container'>
        <div className='leftdiv'>
          <h1>
            Hi! I am Nikhil Kushwaha and I'm
            <span className='hometitle'> a Webapp developer.</span>
          </h1>
          <p>I'm React Webapp Developer based in Varanasi,India,I have 3 months
            of commercial experience  and I am specialize in creating
            web apps. I am open for new opportunities and
            intresting projects.
          </p>
        </div>

        <div className='rightdiv'>
        <FontAwesomeIcon className='fa-solid fa-spin' icon={faReact} size='10x' color='grey' />
        </div>
        
    </div>

  )
}

export default Home