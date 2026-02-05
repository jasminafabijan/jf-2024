import React, { useRef, useState } from 'react';
import GradientHeader from '../../components/Layout/GradientHeader';
import { Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './Contact.scss';

function Contact() {

    const form = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus({ type: 'info', message: 'Sending...' });
    
        emailjs.sendForm('service_8kj15q5', 'template_bl9a55k', form.current, {
            publicKey: 'Mtd1ks7RbqJahS_pD',
        })
          .then((result) => {
              setStatus({ type: 'success', message: 'Thanks! Your message was sent successfully — I’ll get back to you shortly.' });
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
                <div className='bg-white py-5 rounded-4'>
                    <div className='col-md-10 col-lg-9 col-xxl-8 mx-auto'>    

                        {status.message && (
                            <Alert variant={status.type} className="mb-4">
                            {status.message}
                            </Alert>
                        )}

                        <Form ref={form} onSubmit={sendEmail} className='mx-3 mx-md-0'>
                            <Form.Group controlId="formName">
                                <Form.Control type="text" name="user_name" placeholder="Your full name" required />
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