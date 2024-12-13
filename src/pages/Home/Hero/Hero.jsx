import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div id="home" className="py-5 mt-5">
        <Container className='mb-5'>
            <motion.h1 
                className="hero-title mb-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                Web Developer & <br></br>UX-Focused Designer
            </motion.h1>
            <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Hi, my name is Jasmina Fabijan. Specializing in large-scale projects with admin dashboards,<br></br> I create and maintain responsive, user-friendly web interfaces using Bootstrap.<br></br> 
                Dedicated to crafting clean, functional designs that enhance user experience.
            </motion.p>
        </Container>
    </div>
  );
}

export default Hero;
