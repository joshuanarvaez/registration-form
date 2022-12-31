import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo2.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container fluid>
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} width="250" height="250" className="d-inline-block align-top" alt="Logo" />
        </Link>
      </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" onClick={toggleNavbar} />
        <Navbar.Collapse id="navbarNav" show={isOpen}>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/account">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
