import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';

function NavbarComponent() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo - Jasmina Fabijan" />
                </Navbar.Brand>

                <div 
                    id="custom-toggler-icon" 
                    className={isOpen ? 'open' : ''} 
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
                    <Nav className="ms-auto">
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            className={`me-3 ${location.pathname === '/' ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/about" 
                            className={`me-3 ${location.pathname === '/about' ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link 
                            href="mailto:jasmina.fabijan@gmail.com"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}

export default NavbarComponent;
