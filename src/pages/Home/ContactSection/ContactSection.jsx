import React from 'react';
import { motion } from 'framer-motion';
import './ContactSection.scss';

function ContactSection() {
    return (
        <section id="contact" className="contact-section py-5">
            <div className='container text-center my-5'>
                <motion.h2 
                    className="mb-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Let’s create something amazing together—feel free to reach out!
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center"
                > 
                    <a href='mailto:jf@jasminafabijan.com' className='btn btn-primary btn-lg'>Get in Touch</a>
                </motion.div>
            </div>
        </section>
    );
}

export default ContactSection;