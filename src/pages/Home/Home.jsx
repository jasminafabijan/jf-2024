import React from 'react';
import GradientHeader from '../../components/Layout/GradientHeader';
import Hero from './Hero/Hero';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import Contact from './ContactSection/ContactSection';
import './Home.scss';

function Home() {
    return (
        <>
            <GradientHeader>
                <Hero />
            </GradientHeader>
            <ProjectsSection />
            <Contact />
        </>
    );
}

export default Home;