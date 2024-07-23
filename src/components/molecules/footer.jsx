import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import BackToTopButton from './backToTapButton';
function Footer() {
  return (
    <>
      <div className="container-fluid bg-primary text-white mt-5 pt-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <h1 className="text-secondary mb-3"><span className="text-white">LAUN</span>RADE</h1>
            <p>Connect with us on social media to stay up to date with our latest clothing care tips, exclusive offers and more! Follow us and be part of our community of university students.</p>
            <div className="d-flex justify-content-start mt-4">
              <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white mb-4">Get In Touch</h4>
            <p>Our customer service is active 24 hours a day</p>
            <p><i className="fa fa-map-marker-alt mr-2"></i>Location, City, Country</p>
            <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
            <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
              <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About Us</a>
              <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Services</a>
              <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Pricing</a>
              <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white mb-4">Newsletter</h4>
            <form action="">
              <div className="form-group">
                <input type="text" className="form-control border-0" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control border-0" placeholder="Your Email" required />
              </div>
              <div>
                <button className="btn btn-lg btn-secondary btn-block border-0" type="submit">Submit Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white py-4 px-sm-3 px-md-5">
        <p className="m-0 text-center text-white">
          &copy; <a className="text-white font-weight-medium" href="#">Team Work Hi World</a>. All Rights Reserved. Designed by
        </p>
    {/* <BackToTopButton/> */}
      </div>
    </>
  );
}

export default Footer;
