import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

function Features() {
  return (
    <div className="container-fluid py-5">
      <Container>
        <Row>
          <Col lg={7} className="m-0 my-lg-5 pt-0 pt-lg-5 pr-lg-5">
            <h6 className="text-secondary text-uppercase font-weight-medium mb-3">Our Features</h6>
            <h1 className="mb-4">Why Choose Us</h1>
            <p>
              Forget about mountains of dirty clothes! At LAUNRADE, we understand that your university time is for exploring,
              learning and enjoying, not for washing. Specially designed for foreign students like you, our service is fast, affordable
              and super convenient.
            </p>
            <Row>
              <Col sm={6} className="mb-4">
                <h1 className="text-secondary">10</h1>
                <h5 className="font-weight-bold">Years Experience</h5>
              </Col>
              <Col sm={6} className="mb-4">
                <h1 className="text-secondary">250</h1>
                <h5 className="font-weight-bold">Expert Worker</h5>
              </Col>
              <Col sm={6} className="mb-4">
                <h1 className="text-secondary">1250</h1>
                <h5 className="font-weight-bold">Happy Clients</h5>
              </Col>
              <Col sm={6} className="mb-4">
                <h1 className="text-secondary">9550</h1>
                <h5 className="font-weight-bold">Dry Cleaning</h5>
              </Col>
            </Row>
          </Col>
          <Col lg={5}>
            <div className="d-flex flex-column align-items-center justify-content-center bg-secondary h-100 py-5 px-3">
              <FontAwesomeIcon icon={faCertificate} className="fa-5x text-white mb-5" />
              <h1 className="display-1 text-white mb-3">10+</h1>
              <h1 className="text-white m-0">Years Experience</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Features;
