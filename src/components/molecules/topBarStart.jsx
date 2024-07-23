import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../css/form.css';
import '../../css/style.css';
import '../../css/style.min.css';
import A from '../atoms/a';
import Iconos from '../atoms/iconos';
function TopbarStart() {
  return (
    <>
      <div className="container-fluid bg-primary py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <A className="text-white pr-3" href="#" textoA="FAQs"/>
                <span className="text-white">|</span>
                <A className="text-white px-3" href="#"textoA="Help"/>
                <span className="text-white">|</span>
                <A className="text-white pl-3" href="#" textoA="Support"></A>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <Iconos className="fab fa-facebook-f"/>
                <Iconos className="fab fa-twitter"/>
                <Iconos className="fab fa-linkedin-in"/>
                <Iconos className="fab fa-instagram"/>
                <Iconos className="fa-regular fa-user"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopbarStart;
