import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Projects() {
  return (
    <Container id="projects" className="my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="project1.jpg" />
            <Card.Body>
              <Card.Title>Project One</Card.Title>
              <Card.Text>
                Brief description of Project One.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
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
