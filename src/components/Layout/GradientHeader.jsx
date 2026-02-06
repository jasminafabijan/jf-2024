import React from 'react';
import NavbarComponent from '../Navbar/Navbar';
import './GradientHeader.scss';

function GradientHeader({ children }) {
    return (
        <div className="gradient-background">
            <NavbarComponent />
            <div className="gradient-background__content">
                {children}
            </div>
        </div>
    );
}

export default GradientHeader; 