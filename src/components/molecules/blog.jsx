import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import blog1 from '../../assets/img/blog-1.jpg';
import blog2 from '../../assets/img/blog-2.jpg';
import blog3 from '../../assets/img/blog-3.jpg';

function Blog() {
  return (
    <div className="container-fluid mt-5 pb-2">
      <div className="container">
        <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Our Blog</h6>
        <h1 className="display-4 text-center mb-5">Latest From Blog</h1>
        <div className="row">
          <div className="col-lg-4 mb-2">
            <div className="shadow mb-4">
              <div className="position-relative">
                <img className="img-fluid w-100" src={blog1} alt="Blog 1" />
                <a
                  href=""
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center text-decoration-none p-4"
                  style={{ top: 0, left: 0, background: 'rgba(0, 0, 0, .4)' }}
                >
                  <h4 className="text-center text-white font-weight-medium mb-3">
                    "Green Revolution: Tide and Hanes Boost Cold Washing to Save the Planet"
                  </h4>
                  <div className="d-flex text-light">
                    <small className="mr-2"><i className="fa fa-user text-secondary"></i> Contact</small>
                    <small className="mr-2"><i className="fa fa-folder text-secondary"></i> Portfolio</small>
                    <small className="mr-2"><i className="fa fa-comments text-secondary"></i> 15</small>
                  </div>
                </a>
              </div>
              <p className="m-0 p-4">
                Destacando la nueva iniciativa de Tide para fomentar el uso de agua fría en el lavado, reduciendo así el consumo energético y la huella de carbono (Business Wire).
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-2">
            <div className="shadow mb-4">
              <div className="position-relative">
                <img className="img-fluid w-100" src={blog2} alt="Blog 2" />
                <a
                  href=""
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center text-decoration-none p-4"
                  style={{ top: 0, left: 0, background: 'rgba(0, 0, 0, .4)' }}
                >
                  <h4 className="text-center text-white font-weight-medium mb-3">
                    "Clean Future: How Technology is Transforming the Laundry Industry"
                  </h4>
                  <div className="d-flex text-light">
                    <small className="mr-2"><i className="fa fa-user text-secondary"></i> Contact</small>
                    <small className="mr-2"><i className="fa fa-folder text-secondary"></i> Portfolio</small>
                    <small className="mr-2"><i className="fa fa-comments text-secondary"></i> 43</small>
                  </div>
                </a>
              </div>
              <p className="m-0 p-4">
                Explore the latest technological innovations in the laundry industry, from contactless payment systems to eco-efficient washing machines (STPP Group).
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-2">
            <div className="shadow mb-4">
              <div className="position-relative">
                <img className="img-fluid w-100" src={blog3} alt="Blog 3" />
                <a
                  href=""
                  className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center text-decoration-none p-4"
                  style={{ top: 0, left: 0, background: 'rgba(0, 0, 0, .4)' }}
                >
                  <h4 className="text-center text-white font-weight-medium mb-3">
                    "Sustainability in Action: Leading Laundries Improve Profits with Green Practices"
                  </h4>
                  <div className="d-flex text-light">
                    <small className="mr-2"><i className="fa fa-user text-secondary"></i> Contact</small>
                    <small className="mr-2"><i className="fa fa-folder text-secondary"></i> Portfolio</small>
                    <small className="mr-2"><i className="fa fa-comments text-secondary"></i> 32</small>
                  </div>
                </a>
              </div>
              <p className="m-0 p-4">
                A look at how companies like EVI Industries are making a positive financial impact through sustainable strategies and advanced technologies in the laundry sector (PlanetLaundry).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
