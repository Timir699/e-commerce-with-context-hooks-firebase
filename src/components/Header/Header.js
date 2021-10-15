import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Timir's E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} className="mr-3" to="/">Products</Nav.Link>
                            <Nav.Link as={Link} className="mr-3" to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} className="mr-3" to="/cart">Cart</Nav.Link>
                            <Nav.Link as={Link} className="mr-3" to="/shipping">Shipping</Nav.Link>
                            <Nav.Link as={Link} className="mr-3" to="/login">Log in</Nav.Link>
                            <Nav.Link as={Link} className="mr-3" to="/logout">Log out</Nav.Link>
                            <Navbar.Text >
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    );
};

export default Header;