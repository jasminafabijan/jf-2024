import React from 'react';
import GradientHeader from '../../components/Layout/GradientHeader';
import Hero from './Hero/Hero';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import Testimonials from './Testimonials/Testimonials';
import Contact from './ContactSection/ContactSection';
import './Home.scss';

function Home() {
    return (
        <>
            <GradientHeader>
                <Hero />
            </GradientHeader>
            <ProjectsSection />
            <Testimonials />
            <Contact />
        </>
    );
}

export default Home;