import React from 'react';
import GradientHeader from '../../components/Layout/GradientHeader';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import mainImage from '../../assets/images/about/jasmina.jpeg';


function About() {
    return (
        <>
        <GradientHeader>
            <Container className="my-5 py-5">
                <Row className="align-items-center mb-5">
                    <Col md={6} className='pe-lg-5'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="mb-4">Hello</h2>
                            <p>I'm really happy you're here.</p>
                            <p>With over a decade of experience as a web designer and front-end developer, I specialize in creating clean, functional, and user-friendly websites. My work focuses on large-scale projects with admin dashboards, delivering responsive designs that enhance user experience. This website, built using React, is my first step into expanding my skill set beyond my favorite framework, Bootstrap.</p>
                            <p>Living in Novi Sad, Serbia, I’ve been freelancing since 2012. I believe in collaboration and attention to detail, ensuring that every project meets high standards of quality and functionality. Whether it's designing or coding, I enjoy the process of bringing ideas to life.</p>
                            <p>Outside of work, I cherish spending time with my husband and two daughters. During vacations, I enjoy exploring nature, traveling, and indulging in detective stories—books, movies, or TV series. I also find joy in cooking and experimenting in the kitchen. Here are a few more fun facts about me:</p>
                            <ul>
                                <li>I used to be a nine-pin bowling player.</li>
                                <li>Early mornings are my favorite time of day.</li>
                                <li>Limit myself to one cup of coffee daily.</li>
                            </ul>
                            
                            <motion.button
                                className="btn btn-primary mt-4"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                onClick={() => window.open('/path-to-your-cv.pdf')}
                            >
                                Download CV
                            </motion.button>
                        </motion.div>
                    </Col>
                
                    <Col md={6} className='ps-lg-5'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <img 
                                src={mainImage} 
                                alt="Jasmina Fabijan" 
                                className="img-fluid rounded-4"
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </GradientHeader>

        <Container className="my-5 py-5">
            <Row className="mt-5">
                
            </Row>
        </Container>
        </>
    );
}

export default About; 