import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    <Navbar.Brand className='fw-bold fs-3 text-info' as={Link} to='/' >The Fitness Folk</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link as={Link} to='/' href='#home'>Home</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;