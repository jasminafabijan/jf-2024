import React from 'react';
import NavbarComponent from '../Navbar/Navbar';

function GradientHeader({ children }) {
    return (
        <div className="gradient-background">
            <NavbarComponent />
            {children}
        </div>
    );
}

export default GradientHeader; 