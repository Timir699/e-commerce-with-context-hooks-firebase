import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { user, logout } = useAuth()

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {/* <img src={"https://www.pinclipart.com/picdir/middle/444-4440792_amazon-png-transparent-image-amazon-logo-hd-png.png"} alt="" srcset="" /> */}
                    <Navbar.Brand href="#home">Timir's E-Commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} className="mr-3" to="/">Products</Nav.Link>
                            <Nav.Link as={Link} className="mr-3" to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} className="mr-3" to="/cart">Cart</Nav.Link>
                            <Nav.Link as={Link} className="mr-3" to="/shipping">Shipping</Nav.Link>
                            <Nav.Link style={{ display: user?.email ? "none" : "block" }} as={Link} className="mr-3" to="/login">Log in</Nav.Link>
                            {user?.email && <Navbar.Text >
                                Signed in as: <a className="mx-1" href="#login">{user?.displayName || user?.name}</a>
                            </Navbar.Text>}
                            {user?.email && <Button className="mx-3" variant="warning" onClick={logout}>Log Out</Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    );
};

export default Header;