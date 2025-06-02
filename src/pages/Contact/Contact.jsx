import { Helmet } from "react-helmet";

import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="contactpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | Alenia Allen</title>
      </Helmet>
      <NavBar />
      <div className="contact-container">
        <h1 className="contact-title">Let's Connect</h1>
        <p>
          I'm open to freelance work, job opportunities, and creative
          collaborations. If you have something in mind or just want to say
          hello, drop a message below. I would love to hear from you.
        </p>
        <div className="contact-info-container">
          <ContactForm />
          <div className="contact-socials-info">
            <h3 className="contact-socials-title">Socials</h3>
            <p>
              If forms aren't your thing, just drop a message on one of these
              platforms.
            </p>
            <div className="social-contact">
              <div>
                <a
                  href="https://www.linkedin.com/in/aleniaallen"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>

              <div>
                <a href="mailto:alenia.allenn@gmail.com" className="email">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>

              <div>
                <a
                  href="https://github.com/Alenia24"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
