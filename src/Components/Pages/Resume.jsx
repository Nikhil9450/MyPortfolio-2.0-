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
              <img class="profile" src={img3} />
              <h2>Nikhil Kushwaha</h2>
              <h5>Web Developer</h5>
              <p>
              Seeking a responsible job with an opportunity for professional challenges where my ability and professional skills can be fully utilized, and learn new technology and while serving the company with sincerity and dedication.
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
                <div className='project'>
                  <div>
                    <h5>My portfolio</h5>
                  </div>
                  <div>
                  {/* <p>Using React, HTML,CSS, Javascript,Bootstrap,Firebase</p> */}
                    <a href='https://my-portfolio-a564b.web.app/'>https://my-portfolio-a564b.web.app/ </a>
                  </div>
                  <div>
                    <h5>Food Order App</h5>
                  </div>
                  <div>
                  {/* <p>Using React, HTML,CSS, Javascript,Bootstrap,Firebase</p> */}
                  </div>
                  <div>
                    <h5> Keeper App</h5>
                  </div>
                  <div>
                  {/* <p>Using React, HTML,CSS, Javascript,Bootstrap,Firebase</p> */}
                  </div>
                  <div>
                    <h5> SpaceX missions</h5>
                  </div>
                  <div>
                    {/* <p>Using React, HTML,CSS, Javascript,Bootstrap,Firebase</p> */}
                    <a href='https://authentication-ae8a1.web.app/'>https://authentication-ae8a1.web.app/</a>
                  </div>
                </div>   
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume