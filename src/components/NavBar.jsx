import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
const NavBar = () => {
  return (
    <div>
      <Navbar className="navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Todo List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/TodoList">Todo List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
