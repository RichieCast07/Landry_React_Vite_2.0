import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faSoap, faBurn, faTshirt } from '@fortawesome/free-solid-svg-icons';

function Service() {
  return (
    <div className="container-fluid pt-5 pb-3">
      <Container>
        <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Our Services</h6>
        <h1 className="display-4 text-center mb-5">What We Offer</h1>
        <Row>
          <Col lg={3} md={6} className="pb-1">
            <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: '300px' }}>
              <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ width: '100px', height: '100px' }}>
                <FontAwesomeIcon icon={faCloudSun} className="fa-3x text-secondary" />
              </div>
              <h4 className="font-weight-bold m-0">Dry Cleaning</h4>
            </div>
          </Col>
          <Col lg={3} md={6} className="pb-1">
            <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: '300px' }}>
              <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ width: '100px', height: '100px' }}>
                <FontAwesomeIcon icon={faSoap} className="fa-3x text-secondary" />
              </div>
              <h4 className="font-weight-bold m-0">Wash & Laundry</h4>
            </div>
          </Col>
          <Col lg={3} md={6} className="pb-1">
            <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: '300px' }}>
              <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ width: '100px', height: '100px' }}>
                <FontAwesomeIcon icon={faBurn} className="fa-3x text-secondary" />
              </div>
              <h4 className="font-weight-bold m-0">Curtain Laundry</h4>
            </div>
          </Col>
          <Col lg={3} md={6} className="pb-1">
            <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: '300px' }}>
              <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ width: '100px', height: '100px' }}>
                <FontAwesomeIcon icon={faTshirt} className="fa-3x text-secondary" />
              </div>
              <h4 className="font-weight-bold m-0">Suits Cleaning</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Service;
