// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// // import img1 from './assets/img/carousel-1.jpg';
// // import img2 from './assets/img/carousel-2.jpg';
// import img1 from '../../assets/img/carousel-1.jpg'
// import img2 from '../../assets/img/carousel-2.jpg'

// function Carrousel() {
//     return (
//         // <div className="container-fluid p-0">
//         //     <Carousel id="header-carousel">
//         //         <Carousel.Item className="carousel-item active">
//         //             <img className="d-block w-100" src={img1} alt="First slide" />
//         //             <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
//         //                 <div className="p-3" style={{ maxWidth: '900px' }}>
//         //                     <h4 className="text-white text-uppercase mb-md-3">Laundry & Dry Cleaning</h4>
//         //                     <h1 className="display-3 text-white mb-md-4">Best For Laundry Services</h1>
//         //                     <a href="form.html" className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
//         //                 </div>
//         //             </Carousel.Caption>
//         //         </Carousel.Item>
//         //         <Carousel.Item className="carousel-item">
//         //             <img className="d-block w-100" src={img2} alt="Second slide" />
//         //             <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
//         //                 <div className="p-3" style={{ maxWidth: '900px' }}>
//         //                     <h4 className="text-white text-uppercase mb-md-3">Laundry & Dry Cleaning</h4>
//         //                     <h1 className="display-3 text-white mb-md-4">Highly Professional Staff</h1>
//         //                     <a href="form.html" className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
//         //                 </div>
//         //             </Carousel.Caption>
//         //         </Carousel.Item>
//         //     </Carousel>
//         // </div>
//         <div class="container-fluid p-0">
//         <div id="header-carousel" class="carousel slide" data-ride="carousel">
//             <div class="carousel-inner">
//                 <div class="carousel-item active">
//                     <img class="w-100" src="img/carousel-1.jpg" alt="Image">
//                     <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
//                         <div class="p-3" style="max-width: 900px;">
//                             <h4 class="text-white text-uppercase mb-md-3">Laundry & Dry Cleaning</h4>
//                             <h1 class="display-3 text-white mb-md-4">Best For Laundry Services</h1>
//                             <a href="form.html" class="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="carousel-item">
//                     <img class="w-100" src="img/carousel-2.jpg" alt="Image">
//                     <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
//                         <div class="p-3" style="max-width: 900px;">
//                             <h4 class="text-white text-uppercase mb-md-3">Laundry & Dry Cleaning</h4>
//                             <h1 class="display-3 text-white mb-md-4">Highly Professional Staff</h1>
//                             <a href="form.html" class="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
//                 <div class="btn btn-secondary" style="width: 45px; height: 45px;">
//                     <span class="carousel-control-prev-icon mb-n2"></span>
//                 </div>
//             </a>
//             <a class="carousel-control-next" href="#header-carousel" data-slide="next">
//                 <div class="btn btn-secondary" style="width: 45px; height: 45px;">
//                     <span class="carousel-control-next-icon mb-n2"></span>
//                 </div>
//             </a>
//         </div>
//     </div>
//     );
// }

// export default Carrousel;

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import img1 from '../../assets/img/carousel-1.jpg';
import img2 from '../../assets/img/carousel-2.jpg';
import H4 from '../atoms/h4';
import H1 from '../atoms/h1';
import A from '../atoms/a';
function Carrousel() {
    return (
        <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src={img1} alt="First slide" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '900px' }}>
                                <H4 className="text-white text-uppercase mb-md-3"texto="Laundry & Dry Cleaning"></H4>
                                <H1 className="display-3 text-white mb-md-4" texto="Best For Laundry Services"></H1>
                                <A href="form.html" className="btn btn-primary py-md-3 px-md-5 mt-2" textoA="Learn More"></A>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src={img2} alt="Second slide" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '900px' }}>
                                <H4 className="text-white text-uppercase mb-md-3" texto="Laundry & Dry Cleaning"></H4>
                                <H1 className="display-3 text-white mb-md-4" texto="Highly Professional Staff"></H1>
                                <A href="form.html" className="btn btn-primary py-md-3 px-md-5 mt-2" textoA="Learn More"></A>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#header-carousel" role="button" data-slide="prev">
                    <div className="btn btn-secondary" style={{ width: '45px', height: '45px' }}>
                        <span className="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#header-carousel" role="button" data-slide="next">
                    <div className="btn btn-secondary" style={{ width: '45px', height: '45px' }}>
                        <span className="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Carrousel;

