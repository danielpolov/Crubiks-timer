import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";

const NavigationBar = () =>{
    return (
        <>
            <Navbar expand="lg" data-bs-theme="dark" className="">
                <Container>
                    <Navbar.Brand href="#home">Chrubiks</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/learn">Learn</Nav.Link>
                        <NavDropdown title="Play" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Play Solo</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Challenge a Friend
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default NavigationBar;