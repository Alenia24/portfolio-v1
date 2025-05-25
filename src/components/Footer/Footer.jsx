import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"

import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <div>
      <hr className="mx-5" />
      <div className="footer-container">
        <div className="footer-container-left">
          <div className="footer-logo-container">
            <Nav.Link as={Link} to={"/"} className="footer-logo">
              A
            </Nav.Link>
            <Nav.Link as={Link} to={"/"} className="footer-logo footer-right">
              A
            </Nav.Link>
            <div className="rule"></div>
          </div>
          <div className="content">
            <p>© 2025 Alenia Allen</p>
          </div>
        </div>

        <div className="socials">
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/aleniaallen"
              target="_blank"
              rel="noopener norefferer"
            >
              <FontAwesomeIcon className="linkedin-icon" icon={faLinkedinIn} />
            </a>
          </div>

          <div className="mail">
            <a href="mailto:alenia.allenn@gmail.com" className="email">
              <FontAwesomeIcon className="envelope" icon={faEnvelope} />
            </a>
          </div>

          <div className="github">
            <a href="https://github.com/Alenia24" target="_blank" rel="noopener norefferer">
              <FontAwesomeIcon className="github-icon" icon={faGithubSquare} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
