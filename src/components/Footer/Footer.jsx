import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer py-3">
            <Container>
                <Row className="align-items-center">
                    <Col>
                    <p className="small text-muted mb-0">
                             © {new Date().getFullYear()} Created by Jasmina Fabijan | All rights reserved 
                        </p>
                    </Col>
                    <Col className="text-end">
                        <a 
                            href="https://github.com/jasminafabijan" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="me-3"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/jasmina-fabijan-44381ab5/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;