import React from 'react';
import GradientHeader from '../../components/Layout/GradientHeader';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import mainImage from '../../assets/images/about/jasmina.jpeg';
import image1 from '../../assets/images/about/gallery-1.png';
import image2 from '../../assets/images/about/gallery-2.png';
import image3 from '../../assets/images/about/gallery-3.png';
import image4 from '../../assets/images/about/gallery-5.png';
import resume from '../../assets/CV-Jasmina-Fabijan.pdf';


function About() {
    return (
        <>
        <GradientHeader>
            <Container className="mt-5 pt-md-5">
                <Row className="align-items-center mb-5">
                    <Col lg={6} className='pe-lg-5'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="mb-4">Hello</h3>
                            <p>I'm really happy you're here.</p>
                            <p>With over a decade of experience as a web designer and front-end developer, I specialize in creating clean, functional, and user-friendly websites. My work focuses on large-scale projects with admin dashboards, delivering responsive designs that enhance user experience. This website, built using React, is my first step into expanding my skill set beyond my favorite framework, Bootstrap.</p>
                            <p>Living in Novi Sad, Serbia, I’ve been freelancing since 2012. I believe in collaboration and attention to detail, ensuring that every project meets high standards of quality and functionality. Whether it's designing or coding, I enjoy the process of bringing ideas to life.</p>
                            <p>Outside of work, I cherish spending time with my husband and two daughters. During vacations, I enjoy exploring nature, traveling, and indulging in detective stories—books, movies, or TV series. I also find joy in cooking and experimenting in the kitchen. Here are a few more fun facts about me:</p>
                            <ul>
                                <li>I used to be a nine-pin bowling player.</li>
                                <li>Early mornings are my favorite time of day.</li>
                                <li>Limit myself to one cup of coffee daily.</li>
                            </ul>
                        </motion.div>
                    </Col>
                
                    <Col lg={6} className='ps-lg-5'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <img 
                                src={mainImage} 
                                alt="Jasmina Fabijan" 
                                className="img-fluid rounded-4 mt-5 mt-lg-0"
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </GradientHeader>

        <Container className="my-5 py-5">
            <Row className="mt-md-5">
                <div className='col-6 col-md-3'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <img 
                            src={image1} 
                            alt="Description 1" 
                            className="img-fluid rounded-4 mb-4"
                        />
                    </motion.div>
                </div>
                <div className='col-6 col-md-3'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <img 
                            src={image2} 
                            alt="Description 2" 
                            className="img-fluid rounded-4 mb-4"
                        />
                    </motion.div>
                </div>
                <div className='col-6 col-md-3'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <img 
                            src={image3} 
                            alt="Description 3" 
                            className="img-fluid rounded-4 mb-4"
                        />
                    </motion.div>
                </div>
                <div className='col-6 col-md-3'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <img 
                            src={image4} 
                            alt="Description 4" 
                            className="img-fluid rounded-4 mb-4"
                        />
                    </motion.div>
                </div>
            </Row>

            <div className="text-center my-5 py-5">
                <h5 className="fw-normal mb-4">
                    Thank you for taking the time to learn more about me.<br></br>
                    Let's connect and bring your ideas to life!
                </h5>
                <motion.a
                    href={resume}
                    className="btn btn-primary me-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    download="CV-Jasmina-Fabijan.pdf"
                >
                    Download CV
                </motion.a>
                <motion.a
                    href="mailto:jasmina.fabijan@gmail.com"
                    className="btn btn-primary"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Send Email
                </motion.a>
            </div>
        </Container>
        </>
    );
}

export default About; 