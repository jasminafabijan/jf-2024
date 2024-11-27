import React from 'react';
import { Container } from 'react-bootstrap';

function Hero() {
  return (
    <div className="py-5 mt-5">
        <Container className='mb-5'>
            <h1 className="hero-title mb-4">Web Developer & <br></br>UX-Focused Designer</h1>
            <p className="hero-subtitle">
                Hi, my name is Jasmina Fabijan. Specializing in large-scale projects with admin dashboards,<br></br> I create and maintain responsive, user-friendly web interfaces using Bootstrap.<br></br> 
                Dedicated to crafting clean, functional designs that enhance user experience.
            </p>
        </Container>
    </div>
  );
}

export default Hero;
