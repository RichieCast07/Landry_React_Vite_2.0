import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import aboutImage from './assets/img/about.jpg';
import aboutImage from '../../assets/img/about.jpg';

function About() {
  return (
    <div className="container-fluid py-5">
      <Container className="pt-0 pt-lg-4">
        <Row className="align-items-center">
          <Col lg={5}>
            <img className="img-fluid" src={aboutImage} alt="About Us" />
          </Col>
          <Col lg={7} className="mt-5 mt-lg-0 pl-lg-5">
            <h6 className="text-secondary text-uppercase font-weight-medium mb-3">Learn About Us</h6>
            <h1 className="mb-4">We Are Quality Laundry Provider In Your City</h1>
            <h5 className="font-weight-medium font-italic mb-4">"Quality Cleans, Your Local Scene - We Keep Your City Sharp and Clean!"</h5>
            <p className="mb-2">Why choose us? At Quality Cleans, we are committed not only to cleanliness, but to the quality you deserve.</p>
            <Row>
              <Col sm={6} className="pt-3">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  <p className="text-secondary font-weight-medium m-0">Quality Laundry Service</p>
                </div>
              </Col>
              <Col sm={6} className="pt-3">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  <p className="text-secondary font-weight-medium m-0">Express Fast Delivery</p>
                </div>
              </Col>
              <Col sm={6} className="pt-3">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  <p className="text-secondary font-weight-medium m-0">Highly Professional Staff</p>
                </div>
              </Col>
              <Col sm={6} className="pt-3">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  <p className="text-secondary font-weight-medium m-0">100% Satisfaction Guarantee</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
