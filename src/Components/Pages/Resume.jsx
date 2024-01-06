import React from 'react'
import "./Resume.css";
// import img3 from '../../asset/user.png';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import DownloadLink from '../Resume_download';

const Resume = () => {
  return (
    <div className='resume_container'>
      <div className='row1 '>
        <div className='col1 item' data-aos="fade-up" >
          <div className='profilecontainer'>
              {/* <img class="profile" src={img3} /> */}
              <div className='namesection'>
                <h1 className='name'>NIKHIL <span className='title'> KUSHWAHA</span> </h1>
                <h5>Web Developer</h5>
              </div>
              <p>
                As a highly skilled Web Developer with 1.5 years of experience, I have a proven 
                track record of delivering exceptional results. My expertise lies in 
                React, Redux, and JavaScript, along with knowledge of HTML and CSS. I am a quick 
                learner and thrive in fast-paced environments. My best qualities include adaptability, 
                teamwork, and communication skills, making me an asset to any organization.
              </p>
          </div>
          <DownloadLink/>
         
        </div>
        <div className='col2 item' data-aos="fade-up" >
          <div className='experience'>
            <h4>EXPERIENCE</h4>
            <div className='experience1'>
              <p className='duration'>September 2022 - Present</p>
              <h5>Software Developer</h5>
              <h5>AGRICULTURE INSURANCE COMPANY OF INDIA LIMITED / India, New Delhi</h5>
              <p>As a Software Developer at AGRICULTURE INSURANCE COMPANY OF INDIA 
                  LIMITED, I am responsible for developing and maintaining frontend applications to support the company's 
                  operations. During my time at the company, I gained valuable experience in 
                  HTML, CSS, Javascript, Django.</p>
            </div>
            <div className='experience2'>
                <p className='duration'>June 2022 - August 2022</p>
                <h5>Developer Intern</h5>
                <h5>GANIT INC. / India, Chennai</h5>
                <p>During my time as a Developer Intern at Ganit Inc. I was able to gain valuable hands-on experience in React js and 
                    project management. Working alongside a team of experienced developers, 
                    I had the opportunity to contribute to various projects and learn from their 
                    expertise. Through this internship, I was able to enhance my technical skills, 
                    problem-solving abilities, and communication skills.</p>
            </div>
          </div>
            
        </div>
        <div className='col3 item' data-aos="fade-up">
        <div className='education col3_item'>
            <h4>EDUCATION</h4>
            <div>
              <h5>MCA (2019-2021)</h5>
              <p>Institute of Management Studies, Ghaziabad UP</p>
            </div>
            <div>
              <h5>BCA (2016-2019)</h5>
              <p>School of Management Sciences, Varanasi UP</p>
            </div>
          </div> 
          <div  className='projectsection col3_item'>
            <div>
              <h4>PERSONAL PROJECTS</h4>
            </div>
            <ul>
              <li>
                My portfolio  <a href='https://my-portfolio-a564b.web.app/'>link </a>
              </li>
              <li>
                Food Order App
              </li>
              <li>
                 Keeper App
              </li>
              <li>
                 SpaceX missions <span><a href='https://authentication-ae8a1.web.app/'>link</a></span>
              </li>
            </ul>  
          </div>
          <div className='skillcontainer col3_item'>
            <h4>SKILLS</h4>
            <table>
              <tr>
                <td>HTML</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>CSS</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>Javascript</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>React JS</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>Redux</td>
                <td><p>Skillful</p></td>
              </tr>
              <tr>
                <td>Bootstrap</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>Material UI</td>
                <td><p>Skillful</p></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume