import "./NavBar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-transparent nav-bar" data-bs-theme="dark">
        <Container className="py-2 px-5">
          <div className="logo-container">
            <Nav.Link as={Link} to={"/"} className="logo">A</Nav.Link>
            <Nav.Link as={Link} to={"/"} className="logo right">A</Nav.Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
              <Nav.Link as={Link} to={"/projects"}>Projects</Nav.Link>
              <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
