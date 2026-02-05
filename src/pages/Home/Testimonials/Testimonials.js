import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import testimonialAvatar from '../../../assets/images/testimonials/Kevin-M.png';
import YouTubeLazyEmbed from '../../../components/YouTubeLazyEmbed';

function Testimonials() {
    const testimonial = {
        name: "Kevin Morrissey",
        role: "CTO at Ruoom Inc.",
        text: "Jasmina has been working with our team for years, and is one of our most valued contributors. She has played a leading role in the design of our products, and consistently demonstrates her aptitude by sharing valuable ideas with our management team. We greatly appreciate the opportunity we have to work with her! She continues to be instrumental to our team, and we would highly recommend Jasmina's capabilities.",
        avatar: testimonialAvatar
    };

    return (
        <Container id="testimonials" className="my-5 pb-5">
            <h2 className="text-center mb-5">Testimonials</h2>
            <Row>
                <Col md={6} className="mb-4 pe-lg-5">
                    <Card className='border-secondary h-100'>
                        <Card.Body className='p-0'>
                            <YouTubeLazyEmbed videoId="3NFCaKNwP3w" title="Video testimonial" />
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mb-4 ps-lg-5">
                    <Card className='border-secondary'>
                        <Card.Body className="px-4 pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#806586" className="bi bi-quote opacity-25" viewBox="0 0 16 16">
                                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                            </svg>
                            <Card.Text className='text-muted mt-3'>"{testimonial.text}"</Card.Text>
                            <div className="d-flex mt-4 mb-2 align-items-center">
                                <img 
                                src={testimonial.avatar} 
                                alt={testimonial.name} 
                                className="rounded-circle border-secondary"
                                style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                                />
                                <div className="ms-2">
                                <p className="mb-0">{testimonial.name}</p>
                                <p className="mb-0 small text-muted fw-light">{testimonial.role}</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Testimonials; 