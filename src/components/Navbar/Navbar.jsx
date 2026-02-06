import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';

function NavbarComponent() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar className="pt-3">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo - Jasmina Fabijan" />
                </Navbar.Brand>

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
                        as={Link} 
                        to="/contact" 
                        className={`me-3 ${location.pathname === '/contact' ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
  );
}

export default NavbarComponent;
