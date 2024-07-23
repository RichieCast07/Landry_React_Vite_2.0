import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import BotonNavBar from '../atoms/botonNavBar';
import A from '../atoms/a';
function NavBar() {
    return (
        // <Navbar bg="white" expand="lg" className="p-0 position-relative nav-bar">
        //     <Container fluid className="p-0 px-lg-3">
        //         <Navbar.Brand href="#">
        //             <h1 className="m-0 text-secondary"><span className="text-primary">LAUN</span>RADE</h1>
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="navbarCollapse" />
        //         <Navbar.Collapse id="navbarCollapse" className="justify-content-between px-3">
        //             <Nav className="ml-auto py-0">
        //                 <Nav.Link href="index.html" className="active">Home</Nav.Link>
        //                 <Nav.Link href="about.html">About</Nav.Link>
        //                 <Nav.Link href="service.html">Services</Nav.Link>
        //                 <Nav.Link href="pricing.html">Pricing</Nav.Link>
        //                 <NavDropdown title="Pages" id="basic-nav-dropdown">
        //                     <NavDropdown.Item href="blog.html">Blog Grid</NavDropdown.Item>
        //                     <NavDropdown.Item href="single.html">Blog Detail</NavDropdown.Item>
        //                 </NavDropdown>
        //                 <Nav.Link href="contact.html">Contact</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        <div className="container-fluid position-relative nav-bar p-0" >
            <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 pl-3 pl-lg-5">
                    <a href="/" className="navbar-brand">
                        <h1 className="m-0 text-secondary"><span className="text-primary">LAUN</span>RADE</h1>
                    </a>
                    <BotonNavBar />
                    <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            <A href="/" className="nav-item nav-link active" textoA="Home" />
                            <A href="/about" className="nav-item nav-link" textoA="About" />
                            <A href="service.html" className="nav-item nav-link" textoA="Services" />
                            <A href="pricing.html" className="nav-item nav-link" textoA="Pricing" />

                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    Pages
                                </a>
                                <div className="dropdown-menu border-0 rounded-0 m-0">
                                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                    <a href="single.html" className="dropdown-item">Blog Detail</a>
                                </div>
                            </div>
                            <A href="pricing.html" className="nav-item nav-link" textoA="Contact" />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
