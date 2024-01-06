// import React from 'react'; 
// const Projects = () => {
//   return (
//     <div className='Projects_container'>Projects</div>
//   )
// }

// export default Projects

import React from 'react';
import img1 from '../../asset/Capture3.JPG';
import img2 from '../../asset/Cap.JPG';
import img3 from '../../asset/Capture2.JPG';
import img4 from '../../asset/Capture4.jpg';
import img5 from '../../asset/Capture5.jpg';
import img6 from '../../asset/Capture6.jpg';
import {Container, Col,Row,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Project.css";
const Projects = () => {


    return (
      <div className='main_container'>
          <Container className='container'>
          <div >
            <Row >
              <Col sm className='maincolumn' data-aos="fade-down-right">             
                <Card  className='column' >
                  <Card.Img variant="top" src={img1} />
                  <Card.Body>
                    <Card.Title>Keeper App</Card.Title>
                    <Card.Text>
                    In this project we can keep aur notes with title on the local server.
                    We can add and remove notes in the app.
                    </Card.Text>
                    <Card.Link href="#">Not hosted yet</Card.Link>
                  </Card.Body>
                </Card>

             </Col>


              <Col sm className='maincolumn' data-aos="fade-down">
              <Card  className='column'>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>Food Order App</Card.Title>
                  <Card.Text>
                  In this project we can add the food we want from the menu and order
                  it from going in your cart Button.
                  </Card.Text>
                  <Card.Link href="#">Not hosted yet</Card.Link>
                </Card.Body>
              </Card>
              </Col>

              <Col sm className='maincolumn' data-aos="fade-down-left">
              <Card  className='column'>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>SpaceX Missons</Card.Title>
                  <Card.Text>
                  In this project I am fetching the list of spacex missons 
                  from the api and showing it after login.
                  </Card.Text>
                  <Card.Link href="https://authentication-ae8a1.web.app/">Open Project</Card.Link>
                </Card.Body>
              </Card>
              </Col>

            {/* </Row>


            <Row> */}

              <Col sm className='maincolumn' data-aos="fade-up-right">
                <Card  className='column'>
                  <Card.Img variant="top" src={img3} />
                  <Card.Body>
                    <Card.Title>Meetup app</Card.Title>
                    <Card.Text>
                    In this app we can store and add the places with images of meetups to visit
                    you can also add your favourate meetup place.
                    </Card.Text>
                    <Card.Link href="#">Not hosted yet</Card.Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm className='maincolumn' data-aos="fade-up">
                <Card  className='column'>
                  <Card.Img variant="top" src={img6} />
                  <Card.Body>
                    <Card.Title>PCA </Card.Title>
                    <Card.Text>
                     It is the project I worked during my internship.
                     View tasks, performance, and appraisals in this project.It follows the organization's employee hierarchy for appraisal approval/rejection.
                    </Card.Text>
                    <Card.Link href="#">Not hosted yet</Card.Link>
                  </Card.Body>
                </Card>
              </Col>


              <Col sm className='maincolumn'data-aos="fade-up-left">
                <Card  className='column'>
                  <Card.Img variant="top" src={img4} />
                  <Card.Body>
                    <Card.Title>My Portfolio</Card.Title>
                    <Card.Text>
                    It is my portfilio. I am working on it to make it better day by day.
                    </Card.Text>
                    <Card.Link href="https://my-portfolio-a564b.web.app/">Open Project</Card.Link>
                  </Card.Body>
                </Card>

                </Col>
            
</Row>
</div>

</Container>
</div>
    )}

export default Projects;
