import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import cpvlab from '../../../assets/images/projects/thumbnails/cpvlab.png';
import cpvone from '../../../assets/images/projects/thumbnails/cpvone.png';
import ruoom from '../../../assets/images/projects/thumbnails/ruoom.png';
import dogLeg from '../../../assets/images/projects/thumbnails/dog-leg.png';
import shootingPeople from '../../../assets/images/projects/thumbnails/shooting-people.png';
import perilen from '../../../assets/images/projects/thumbnails/perilen.png';

function Projects() {
    return (
        <Container id="projects" className="my-5 py-5">
            <motion.h2 
                className="text-center mb-5 pb-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Selected Projects
            </motion.h2>

            <Row className='align-items-center mb-5 py-5'>
                <Col lg={7} className="pe-lg-5">
                    <motion.div 
                        className="thumbnail cpvlab rounded-4 mb-4 mb-lg-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={cpvlab} alt="CPV Lab" className="img-fluid rounded-4"/>
                    </motion.div>
                </Col>

                <Col lg={5} className="ps-lg-5">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>CPV Lab</h3>
                        <p className='mb-5 text-muted'>Self-hosted performance marketing tracker</p>
                        <p className='mb-4'>Web design and front-end development for the promotional website, with ongoing maintenance and updates. The Bootstrap theme in the application was also customized.</p>
                        <a href='https://cpvlab.pro/' className='btn btn-primary' target='_blank'>Visit website</a>
                    </motion.div>
                </Col>
            </Row>

            <Row className='align-items-center mb-5 py-5'>
                <Col lg={7} className="order-lg-2 order-1">
                    <motion.div 
                        className="thumbnail rounded-4 mb-4 mb-lg-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img src={cpvone} alt="CPV One" className="img-fluid rounded-4"/>
                    </motion.div>
                </Col>

                <Col lg={5} className="pe-lg-5 order-lg-1 order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>CPV One</h3>
                        <p className='mb-5 text-muted'>Cloud-hosted tracker for all marketing campaigns</p>
                        <p className='mb-4'>Web design and front-end development for the platform, creating a responsive and user-friendly interface tailored for marketing professionals.</p>
                        <a href='https://cpvone.com/' className='btn btn-primary' target='_blank'>Visit website</a>
                    </motion.div>
                </Col>
            </Row>

            <Row className='align-items-center mb-5 py-5'>
                <Col lg={7} className="pe-lg-5">
                    <motion.div 
                        className="thumbnail rounded-4 mb-4 mb-lg-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={ruoom} alt="Ruoom" className="img-fluid rounded-4"/>
                    </motion.div>
                </Col>

                <Col lg={5} className="ps-lg-5">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>Ruoom</h3>
                        <p className='mb-5 text-muted'>Online booking software</p>
                        <p className='mb-4'>Designed and coded custom pages, implemented Bootstrap components, and created email templates to enhance user experience.</p>
                        <a href='https://www.ruoomsoftware.com/' className='btn btn-primary' target='_blank'>Visit website</a>
                    </motion.div>
                </Col>
            </Row>

            <Row className='align-items-center mb-5 py-5'>
                <Col lg={7} className="order-lg-2 order-1">
                    <motion.div 
                        className="thumbnail rounded-4 mb-4 mb-lg-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img src={dogLeg} alt="Dog Leg" className="img-fluid rounded-4"/>
                    </motion.div>
                </Col>

                <Col lg={5} className="pe-lg-5 order-lg-1 order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>.dog.leg.</h3>
                        <p className='mb-5 text-muted'>Custom upholstery and furniture restoration workshop</p>
                        <p className='mb-4'>Web design and development for a bilingual website on the Squarespace platform, focusing on a clean aesthetic that highlights handcrafted furniture restoration.</p>
                        <a href='https://www.dogleg.cz/' className='btn btn-primary' target='_blank'>Visit website</a>
                    </motion.div>
                </Col>
            </Row>

            <Row className='align-items-center mb-5 py-5'>
                <Col lg={7} className="pe-lg-5">
                    <motion.div 
                        className="thumbnail rounded-4 mb-4 mb-lg-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={shootingPeople} alt="Shooting People" className="img-fluid rounded-4"/>
                    </motion.div>
                </Col>

                <Col lg={5} className="ps-lg-5">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>Shooting People</h3>
                        <p className='mb-5 text-muted'>A vibrant community for independent filmmakers</p>
                        <p className='mb-4'>Updated the website from Bootstrap 3 to Bootstrap 5 and implemented a new design provided by a designer.</p>
                        <a href='https://shootingpeople.org/' className='btn btn-primary' target='_blank'>Visit website</a>
                    </motion.div>
                </Col>
            </Row>

            <Row className='align-items-center mb-5 py-5'>
                <Col lg={7} className="order-lg-2 order-1">
                    <motion.div 
                        className="thumbnail rounded-4 mb-4 mb-lg-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img src={perilen} alt="Perilen" className="img-fluid rounded-4"/>
                    </motion.div>
                </Col>

                <Col lg={5} className="pe-lg-5 order-lg-1 order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Perilen</h3>
                        <p className='mb-5 text-muted'>Innovative organic dyes and pigments</p>
                        <p className='mb-4'>Designed and coded the website, creating a clean and simple interface.</p>
                        <a href='https://www.perilen.com/' className='btn btn-primary' target='_blank'>Visit website</a>
                    </motion.div>
                </Col>
            </Row>
    </Container>
  );
}

export default Projects;
