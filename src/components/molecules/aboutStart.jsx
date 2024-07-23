import React from 'react';
import about from '../../assets/img/about.jpg';
function AboutStart() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img className="img-fluid" src={about} alt="About Us" />
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 pl-lg-5">
            <h6 className="text-secondary text-uppercase font-weight-medium mb-3">Learn About Us</h6>
            <h1 className="mb-4">We Are Quality Laundry Provider In Your City</h1>
            <h5 className="font-weight-medium font-italic mb-4">
              "Quality Cleans, Your Local Scene - We Keep Your City Sharp and Clean!"
            </h5>
            <p className="mb-2">
              Why choose us? At Quality Cleans, we are committed not only to cleanliness, but to the quality you deserve.
            </p>
            <div className="row">
              <div className="col-sm-6 pt-3">
                <div className="d-flex align-items-center">
                  <i className="fa fa-check text-primary mr-2"></i>
                  <p className="text-secondary font-weight-medium m-0">Quality Laundry Service</p>
                </div>
              </div>
              <div className="col-sm-6 pt-3">
                <div className="d-flex align-items-center">
                  <i className="fa fa-check text-primary mr-2"></i>
                  <p className="text-secondary font-weight-medium m-0">Express Fast Delivery</p>
                </div>
              </div>
              <div className="col-sm-6 pt-3">
                <div className="d-flex align-items-center">
                  <i className="fa fa-check text-primary mr-2"></i>
                  <p className="text-secondary font-weight-medium m-0">Highly Professional Staff</p>
                </div>
              </div>
              <div className="col-sm-6 pt-3">
                <div className="d-flex align-items-center">
                  <i className="fa fa-check text-primary mr-2"></i>
                  <p className="text-secondary font-weight-medium m-0">100% Satisfaction Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutStart;
