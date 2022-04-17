import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    <Navbar.Brand className='fw-bold fs-3 text-info' href="#home">Fitting-Man</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="#features">Packages</Nav.Link>
                            <Nav.Link href="#deets">About</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                            <Nav.Link href="#deets">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Header;