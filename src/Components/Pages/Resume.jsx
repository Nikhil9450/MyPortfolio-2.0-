import React from 'react'
import "./Resume.css";
import img3 from '../../asset/user.png';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Resume = () => {
  return (
    <div className='resume_container'>
      <div className='row1'>
        <div className='col1 item'>
          <div className='profilecontainer'>
              {/* <img class="profile" src={img3} /> */}
              <h1 className='name'>NIKHIL <span className='title'> KUSHWAHA</span> </h1>
              <h5>Web Developer</h5>
              <p>
                As a highly skilled Web Developer with 1.5 years of experience, I have a proven 
                track record of delivering exceptional results. My expertise lies in 
                React, Redux, and JavaScript, along with knowledge of HTML and CSS. I am a quick 
                learner and thrive in fast-paced environments. My best qualities include adaptability, 
                teamwork, and communication skills, making me an asset to any development team.
              </p>
          </div>
        </div>
        <div className='col2 item'>
            <h4>EXPERIENCE</h4>
            <div className='experience'>
              <p className='duration'>September 2022 - Present</p>
              <h5>Software Developer</h5>
              <h5>AGRICULTURE INSURANCE COMPANY OF INDIA LIMITED / India, New Delhi</h5>
              <p>As a Software Developer at AGRICULTURE INSURANCE COMPANY OF INDIA 
                  LIMITED, I was responsible for developing and maintaining frontend applications to support the company's 
                  operations. During my time at the company, I gained valuable experience in 
                  HTML, CSS, Javascript, Django.</p>
            </div>
            <div className='experience'>
                <p className='duration'>June 2022 - August 2022</p>
                <h5>Developer Intern</h5>
                <h5>AGRICULTURE INSURANCE COMPANY OF INDIA LIMITED / India, New Delhi</h5>
                <p>During my time as a Developer Intern at Ganit Inc. I was able to gain valuable hands-on experience in React js and 
                    project management. Working alongside a team of experienced developers, 
                    I had the opportunity to contribute to various projects and learn from their 
                    expertise. Through this internship, I was able to enhance my technical skills, 
                    problem-solving abilities, and communication skills.</p>
            </div>
        </div>

        <div className='col3 item'>
          <div  className='projectsection'>
            <div>
              <h4>PERSONAL PROJECTS</h4>
            </div>
            <ul>
              <li>
                <h5>My portfolio <span> <a href='https://my-portfolio-a564b.web.app/'>https://my-portfolio-a564b.web.app/ </a></span> </h5>
              </li>
              <li>
                <h5>Food Order App</h5>
              </li>
              <li>
                <h5> Keeper App</h5>
              </li>
              <li>
                <h5> SpaceX missions <span><a href='https://authentication-ae8a1.web.app/'>https://authentication-ae8a1.web.app/</a></span></h5>
              </li>
            </ul>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume