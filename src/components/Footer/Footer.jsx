import { Link } from "react-router-dom"

import "./Footer.css"

import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <div>
      <hr className="mx-5"  />
      <div className="footer-container">
        <div className="footer-logo-container">
            <Nav.Link as={Link} to={"/"} className="footer-logo">A</Nav.Link>
            <Nav.Link as={Link} to={"/"} className="footer-logo footer-right">A</Nav.Link>
        </div>
        <div className="content">
          <p>© 2025 Alenia Allen</p>
        </div>
        <div className="contact">
          
        </div>
        </div>
    </div>
  );
}
