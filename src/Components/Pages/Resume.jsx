import React from 'react'
import "./Resume.css";

const Resume = () => {
  return (
    <div className='resume_container'>
      <div class="grid-container">
        <div class="grid-item">
        <div>
          <h3>EDUCATION</h3>
           <div  className='grid-content'>
              <div>
                <h4>MCA-(75%)</h4>
                <p>Institute of Management Studies,Ghaziabad</p>
                <p>06/2019-07/2021</p>
              </div>
              <div>
                <h4>BCA-(60%)</h4>
                <p>School of Management Sciences,Varanasi</p>
                <p>06/2016-06/2019</p>
              </div>
              <div>
                <h4>Intermediate-(89%)</h4>
                <p>SHRI P.N.I.C. PARSAHI SAKARA GHAZIPUR</p>
                <p>03/2015-04/2016</p>
              </div>
              <div>
                <h4>High School-(84%)</h4>
                <p>B.S. INTER COLLEGE ADARSH GAOV GHAZIPUR</p>
                <p>04/2013-05/2014</p>
              </div>
           </div>
        </div>       
        </div>

        <div class="grid-item">
              <h3>SKILLS</h3>
              <div  className='grid-content'>
                <div class="skill-grid-container">
                  <div class="skill-grid-item"><p>HTML</p></div>
                  <div class="skill-grid-item"><p>CSS</p></div>
                  <div class="skill-grid-item"><p>Javascript</p></div>
                  <div class="skill-grid-item"><p>Bootstrap</p></div>
                  <div class="skill-grid-item"><p>React.js</p></div>
                  <div class="skill-grid-item"><p>My Sql</p></div>
                  <div class="skill-grid-item"><p>Django</p></div>
                </div>
          </div>
        <div>
      </div>


        </div>
        <div class="grid-item">
          <h3>PERSONAL PROJECTS</h3>
             <div  className='grid-content'>
                <div>
                  <h4>My portfolio</h4>
                  <p>Using React, HTML,CSS, Javascript,Bootstrap,Firebase</p>
                  <a href='https://my-portfolio-a564b.web.app/'>https://my-portfolio-a564b.web.app/ </a>
                </div>
                <div>
                  <h4>Food Order App</h4>
                  <p>Using React, HTML,CSS, Javascript,Bootstrap,Firebase</p>
                </div>
                <div>
                  <h4> Keeper App</h4>
                  <p>Using React, HTML,CSS, Javascript,Bootstrap,Firebase</p>
                </div>
                <div>
                  <h4> SpaceX missions</h4>
                  <p>Using React, HTML,CSS, Javascript,Bootstrap,Firebase</p>
                  <a href='https://authentication-ae8a1.web.app/'>https://authentication-ae8a1.web.app/</a>
                </div>
             </div>
         </div>

        <div class="grid-item">
            <h3>CERTIFICATES</h3>
             <div  className='grid-content'>
              <ul>
                <li>Certificate for Completion of CPP Training (03/2018)</li>
                <li><p>Certificate for Completion of Java Training (10/2018)</p></li>
                <li><p>Certificate for Participating in Enterpreneurship
                  Awereness Camp (01/2019)</p></li>
                <li><p>Certificate for Participating in Workshop on Developing
                    Standalone Application Using Core Java conducted by
                    SB Soft Technologies (09/2018)</p></li>
                
              </ul>     
             </div>
        </div>


        <div class="grid-item">
          <h3>LANGUAGES</h3>
          <div  className='grid-content'>
            <div>
              <h4>English</h4>
              <p>Full Professional Proficiency</p>
            </div>
            <div>
              <h4>Hindi</h4>
              <p>Native or Bilingual Proficiency</p>
            </div>
          </div>
        </div>

        <div class="grid-item">
          <h3>HOBBIES</h3>
         <div className='grid-content'>
            <p>Playing PC Games</p>
         </div>
        </div>
   
     </div>
    </div>
  )
}

export default Resume