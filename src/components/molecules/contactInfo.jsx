import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function ContactInfo() {
    return (
        <div className="container-fluid contact-info mt-5 mb-4">
            <Container style={{ padding: '0 30px' }}>
                <Row>
                    <Col md={4} className="d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0" style={{ height: '100px' }}>
                        <div className="d-inline-flex">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-2x text-white m-0 mr-3" />
                            <div className="d-flex flex-column">
                                <h5 className="text-white font-weight-medium">Our Location</h5>
                                <p className="m-0 text-white">Location, City, Country</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="d-flex align-items-center justify-content-center bg-primary mb-4 mb-lg-0" style={{ height: '100px' }}>
                        <div className="d-inline-flex text-left">
                            <FontAwesomeIcon icon={faEnvelope} className="fa-2x text-white m-0 mr-3" />
                            <div className="d-flex flex-column">
                                <h5 className="text-white font-weight-medium">Email Us</h5>
                                <p className="m-0 text-white">info@example.com</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0" style={{ height: '100px' }}>
                        <div className="d-inline-flex text-left">
                            <FontAwesomeIcon icon={faPhoneAlt} className="fa-2x text-white m-0 mr-3" />
                            <div className="d-flex flex-column">
                                <h5 className="text-white font-weight-medium">Call Us</h5>
                                <p className="m-0 text-white">+012 345 6789</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactInfo;
