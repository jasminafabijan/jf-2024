import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';

function NavbarComponent() {
    const location = useLocation();
    
    const handleContactClick = (e) => {
        if (location.pathname === '/') {
            // Ako smo na homepage-u, samo skrolujemo
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }
        // Ako nismo na homepage-u, Link će nas odvesti na /#contact
    };

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo - Jasmina Fabijan" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className='me-3'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className='me-3'>About</Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/#contact" 
                            onClick={handleContactClick}
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
