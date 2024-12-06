import React from 'react';
import './ContactSection.scss';

function ContactSection() {
    return (
        <section id="contact" className="contact-section py-5">
            <div className='container text-center my-5'>
                <h2 className='mb-5'>Let’s create something amazing together—feel free to reach out!</h2>
                <a href='mailto:jf@jasminafabijan.com' className='btn btn-primary btn-lg'>Get in Touch</a>
            </div>
        </section>
    );
}

export default ContactSection;