import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function AboutHeaderStart() {
  return (
    <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
      <div className="container py-5">
        <div className="row align-items-center py-4">
          <div className="col-md-6 text-center text-md-left">
            <h1 className="mb-4 mb-md-0 text-white">About Us</h1>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <div className="d-inline-flex align-items-center">
              <a className="btn text-white" href="#">Home</a>
              <i className="fas fa-angle-right text-white"></i>
              <a className="btn text-white disabled" href="#">About Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeaderStart;
