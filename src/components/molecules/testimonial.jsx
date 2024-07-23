import React from 'react';

function Testimonial() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Testimonial</h6>
        <h1 className="display-4 text-center mb-5">Our Clients Say</h1>
        <div className="owl-carousel testimonial-carousel">
          <div className="testimonial-item">
            <img
              className="position-relative rounded-circle bg-white shadow mx-auto"
              src="img/testimonial-1.jpg"
              style={{ width: '100px', height: '100px', padding: '12px', marginBottom: '-50px', zIndex: 1 }}
              alt=""
            />
            <div className="bg-light text-center p-4 pt-0">
              <h5 className="font-weight-medium mt-5">Pedro Motoa</h5>
              <p className="text-muted font-italic">Alumno del Politecnico</p>
              <p className="m-0">
                "I love this laundromat because they have great service. They always greet me by name and that makes me feel like they really care. Plus, they use a fabric softener that
                leaves my clothes smelling amazing."
              </p>
            </div>
          </div>
          <div className="testimonial-item">
            <img
              className="position-relative rounded-circle bg-white shadow mx-auto"
              src="img/testimonial-2.jpg"
              style={{ width: '100px', height: '100px', padding: '12px', marginBottom: '-50px', zIndex: 1 }}
              alt=""
            />
            <div className="bg-light text-center p-4 pt-0">
              <h5 className="font-weight-medium mt-5">Paulina Rios</h5>
              <p className="text-muted font-italic">Alumna del Politecnico</p>
              <p className="m-0">
                "The truth is that the laundry is super good. I take my clothes there and they always come out impeccable. Plus, the service is super fast, I don't even realize it and I
                already have to go pick it up!"
              </p>
            </div>
          </div>
          <div className="testimonial-item">
            <img
              className="position-relative rounded-circle bg-white shadow mx-auto"
              src="img/testimonial-3.jpg"
              style={{ width: '100px', height: '100px', padding: '12px', marginBottom: '-50px', zIndex: 1 }}
              alt=""
            />
            <div className="bg-light text-center p-4 pt-0">
              <h5 className="font-weight-medium mt-5">Raul Perez</h5>
              <p className="text-muted font-italic">Alumno del Politecnico</p>
              <p className="m-0">
                "I thought that doing laundry was a pain, but this place changed my mind. They have affordable prices and the clothes look like new. Even my favorite jeans come out perfect."
              </p>
            </div>
          </div>
          <div className="testimonial-item">
            <img
              className="position-relative rounded-circle bg-white shadow mx-auto"
              src="img/testimonial-4.jpg"
              style={{ width: '100px', height: '100px', padding: '12px', marginBottom: '-50px', zIndex: 1 }}
              alt=""
            />
            <div className="bg-light text-center p-4 pt-0">
              <h5 className="font-weight-medium mt-5">Marixa Jimenez</h5>
              <p className="text-muted font-italic">Alumna del Politecnico</p>
              <p className="m-0">
                "This laundry is top. I love that I can leave my clothes there and they take care of everything. They even have a service where they pick up your clothes at home, which is a bonus because it saves me a lot of time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
