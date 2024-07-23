import React from 'react';

function PricingPlan() {
  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="container">
        <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Our Pricing Plan</h6>
        <h1 className="display-4 text-center mb-5">The Best Price</h1>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="bg-light text-center mb-2 pt-4">
              <div
                className="d-inline-flex flex-column align-items-center justify-content-center bg-secondary rounded-circle shadow mt-2 mb-4"
                style={{ width: '200px', height: '200px', border: '15px solid #ffffff' }}
              >
                <h3 className="text-white">Foreign</h3>
                <h1 className="display-4 text-white mb-0">
                  <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>
                  49
                  <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Mx</small>
                </h1>
              </div>
              <div className="d-flex flex-column align-items-center py-3">
                <p>Washing and drying up to 20 garments.</p>
                <p>Standard detergent and fabric softener.</p>
                <p>Simple packaging.</p>
              </div>
              <a href="" className="btn btn-secondary py-2 px-4">Signup Now</a>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="bg-light text-center mb-2 pt-4">
              <div
                className="d-inline-flex flex-column align-items-center justify-content-center bg-primary rounded-circle shadow mt-2 mb-4"
                style={{ width: '200px', height: '200px', border: '15px solid #ffffff' }}
              >
                <h3 className="text-white">Standard</h3>
                <h1 className="display-4 text-white mb-0">
                  <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>
                  99
                  <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Mx</small>
                </h1>
              </div>
              <div className="d-flex flex-column align-items-center py-3">
                <p>Washing and drying up to 40 garments.</p>
                <p>High-end detergents and scented fabric softener options.</p>
                <p>Special treatments for stains.</p>
                <p>Premium packaging and folding.</p>
              </div>
              <a href="" className="btn btn-primary py-2 px-4">Signup Now</a>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="bg-light text-center mb-2 pt-4">
              <div
                className="d-inline-flex flex-column align-items-center justify-content-center bg-secondary rounded-circle shadow mt-2 mb-4"
                style={{ width: '200px', height: '200px', border: '15px solid #ffffff' }}
              >
                <h3 className="text-white">Premium</h3>
                <h1 className="display-4 text-white mb-0">
                  <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>
                  149
                  <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Mx</small>
                </h1>
              </div>
              <div className="d-flex flex-column align-items-center py-3">
                <p>Unlimited washing and drying of garments.</p>
                <p>Selection of luxury detergents and fabric softeners.</p>
                <p>Additional services such as dry cleaning, ironing and anti-wrinkle treatments.</p>
                <p>Home pickup and delivery.</p>
                <p>Deluxe packaging.</p>
              </div>
              <a href="" className="btn btn-secondary py-2 px-4">Signup Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;
