import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

function TheNav() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <div className="theBrand">
        <Navbar.Brand  href="#home">Water Rock Cafe</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#action/3.1">About</Nav.Link>
              <Nav.Link href="#action/3.3">Cart</Nav.Link>
            <div className="button1">
          <Button variant="light">Order</Button>
        </div>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default TheNav;