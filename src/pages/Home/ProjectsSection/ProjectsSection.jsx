import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import cpvlab from '../../../assets/images/projects/thumbnails/cpvlab.png';

function Projects() {
    return (
        <Container id="projects" className="my-5 pt-5">
            <h2 className="text-center mb-5 pb-4">Selected Projects</h2>
            <Row>
                <Col md={7}>
                    <div className="thumbnail p-3 rounded-1">
                        <img 
                            src={cpvlab} 
                            alt="CPV Lab" 
                            className="img-fluid"
                        />
                    </div>
                </Col>

                <Col md={5}>
                    <h3>CPV Lab</h3>
                </Col>
            </Row>

            <Row>  
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="project2.jpg" />
            <Card.Body>
              <Card.Title>Project Two</Card.Title>
              <Card.Text>
                Brief description of Project Two.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="project3.jpg" />
            <Card.Body>
              <Card.Title>Project Three</Card.Title>
              <Card.Text>
                Brief description of Project Three.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
