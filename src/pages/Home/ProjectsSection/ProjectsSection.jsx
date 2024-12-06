import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import cpvlab from '../../../assets/images/projects/thumbnails/cpvlab.png';
import cpvone from '../../../assets/images/projects/thumbnails/cpvone.png';
import ruoom from '../../../assets/images/projects/thumbnails/ruoom.png';
import shootingPeople from '../../../assets/images/projects/thumbnails/shooting-people.png';
import perilen from '../../../assets/images/projects/thumbnails/perilen.png';

function Projects() {
    return (
        <Container id="projects" className="my-5 py-5">
            <h2 className="text-center mb-5 pb-4">Selected Projects</h2>
            <Row className='align-items-center mb-5 py-5'>
                <Col md={7} className="pe-lg-5">
                    <div className="thumbnail cpvlab rounded-4">
                        <img 
                            src={cpvlab} 
                            alt="CPV Lab" 
                            className="img-fluid rounded-4"
                        />
                    </div>
                </Col>

                <Col md={5} className="ps-lg-5">
                    <h3>CPV Lab</h3>
                    <p className='mb-5 text-muted'>Self-hosted performance marketing tracker</p>
                    <p className='mb-4'>Web design and front-end development for the promotional website, with ongoing maintenance and updates. The Bootstrap theme in the application was also customized.</p>
                    <a href='https://cpvlab.pro/' className='btn btn-primary' target='_blank'>Visit website</a>
                </Col>
            </Row>

            <Row className='align-items-center mb-5 py-5'>
                <Col md={5} className="pe-lg-5">
                    <h3>CPV One</h3>
                    <p className='mb-5 text-muted'>Cloud-hosted tracker for all marketing campaigns</p>
                    <p className='mb-4'>Web design and front-end development for the platform, creating a responsive and user-friendly interface tailored for marketing professionals.</p>
                    <a href='https://cpvone.com/' className='btn btn-primary' target='_blank'>Visit website</a>
                </Col>

                <Col md={7}>
                    <div className="thumbnail rounded-4">
                        <img 
                            src={cpvone} 
                            alt="CPV One" 
                            className="img-fluid rounded-4"
                        />
                    </div>
                </Col>
            </Row>

            <Row className='align-items-center mb-5 py-5'>
                <Col md={7} className="pe-lg-5">
                    <div className="thumbnail rounded-4">
                        <img 
                            src={ruoom} 
                            alt="Ruoom" 
                            className="img-fluid rounded-4"
                        />
                    </div>
                </Col>

                <Col md={5} className="ps-lg-5">
                    <h3>Ruoom</h3>
                    <p className='mb-5 text-muted'>Online booking software</p>
                    <p className='mb-4'>Designed and coded custom pages, implemented Bootstrap components, and created email templates to enhance user experience.</p>
                    <a href='https://www.ruoomsoftware.com/' className='btn btn-primary' target='_blank'>Visit website</a>
                </Col>
            </Row>

            <Row className='align-items-center mb-5 py-5'>
                <Col md={5} className="pe-lg-5">
                    <h3>Shooting People</h3>
                    <p className='mb-5 text-muted'>A vibrant community for independent filmmakers</p>
                    <p className='mb-4'>Updated the website from Bootstrap 3 to Bootstrap 5 and implemented a new design provided by a designer.</p>
                    <a href='https://shootingpeople.org/' className='btn btn-primary' target='_blank'>Visit website</a>
                </Col>

                <Col md={7}>
                    <div className="thumbnail rounded-4">
                        <img 
                            src={shootingPeople} 
                            alt="Shoooting People" 
                            className="img-fluid rounded-4"
                        />
                    </div>
                </Col>
            </Row>

            <Row className='align-items-center mb-5 py-5'>
                <Col md={7} className="pe-lg-5">
                    <div className="thumbnail rounded-4">
                        <img 
                            src={perilen} 
                            alt="Perilen" 
                            className="img-fluid rounded-4"
                        />
                    </div>
                </Col>

                <Col md={5} className="ps-lg-5">
                    <h3>Perilen</h3>
                    <p className='mb-5 text-muted'>Innovative organic dyes and pigments</p>
                    <p className='mb-4'>Designed and coded the website, creating a clean and simple interface.</p>
                    <a href='https://www.perilen.com/' className='btn btn-primary' target='_blank'>Visit website</a>
                </Col>
            </Row>
    </Container>
  );
}

export default Projects;
