import React from 'react';
import Hero from './Hero/Hero';
import Navbar from '../../components/Navbar/Navbar';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import './Home.scss';

function Home() {
    return (
        <>
            <div className="home-header gradient-background">
                <Navbar />
                <Hero />
            </div>
            <ProjectsSection />
        </>
    );
}

export default Home;