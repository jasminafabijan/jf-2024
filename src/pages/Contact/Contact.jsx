import React, { useRef, useState } from 'react';
import GradientHeader from '../../components/Layout/GradientHeader';
import { Form, Button } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const TEMP_SHOW_BOTH_ALERTS = false;

function ContactAlert({ type, message }) {
    const isSuccess = type === 'success';
    const isError = type === 'danger' || type === 'error';
    const variant = isSuccess ? 'success' : isError ? 'error' : 'info';
    const showIcon = isSuccess || isError;
    return (
        <div className={`contact-alert contact-alert--${variant}`}>
            {showIcon && (
                <span className="contact-alert__icon">
                    {isSuccess ? <FaCheck /> : <FaTimes />}
                </span>
            )}
            <span className="contact-alert__message">{message}</span>
        </div>
    );
}

function Contact() {

    const form = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus({ type: 'info', message: 'Sending...' });
    
        emailjs.sendForm('service_ecnz3i6', 'template_bl9a55k', form.current, {
            publicKey: 'Mtd1ks7RbqJahS_pD',
        })
          .then((result) => {
              setStatus({ type: 'success', message: "Thanks! Your message was sent successfully — I'll get back to you shortly." });
              e.target.reset();
          }, (error) => {
              setStatus({ type: 'danger', message: 'Failed to send message. Please try again.' });
          });
      };

    return (
        <GradientHeader>
            <section className="container py-5 py-lg-6">
                <div className='col-md-10 col-lg-9 col-xxl-8 mx-auto'>
                    <h1 className="display-3">Contact Me</h1>
                    <div className="border border-2 w-15 my-4"></div>
                    <p className="lead">Have a project in mind or just want to say hello? <br></br>Feel free to reach out &#8212; I'd love to hear from you.</p>
                </div>
            </section>

            <div className='container'>
                <div className='bg-white py-5 rounded-4 mb-5'>
                    <div className='col-md-10 col-lg-9 col-xxl-8 mx-auto'>    

                        {TEMP_SHOW_BOTH_ALERTS ? (
                            <>
                                <ContactAlert key="success" type="success" message="Thanks! Your message was sent successfully — I'll get back to you shortly." />
                                <ContactAlert key="error" type="danger" message="Failed to send message. Please try again." />
                            </>
                        ) : (
                            status.message && <ContactAlert type={status.type} message={status.message} />
                        )}

                        <Form ref={form} onSubmit={sendEmail} className='mx-3 mx-md-0'>
                            <Form.Group controlId="formName">
                                <Form.Control type="text" name="name" placeholder="Your full name" required />
                            </Form.Group>
        
                            <Form.Group controlId="formEmail" className="my-4">
                                <Form.Control type="email" name="user_email" placeholder="Your email" required />
                            </Form.Group>
        
                            <Form.Group controlId="formMessage">
                                <Form.Control as="textarea" name="message" rows={4} placeholder="Your message" required />
                            </Form.Group>
        
                            <Button variant="primary" type="submit" className="mt-4">
                                Send Message
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </GradientHeader>
    );
  }
  
  export default Contact;