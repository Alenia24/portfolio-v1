import { useState } from "react";
import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import git from "../../assets/git2.png";


import "./About.css";

export default function About() {
  const [selectedSection, setSelectedSection] = useState("education");

  return (
    <div>
      <NavBar />
      <div className="about-container">
        <div className="about">
          <h1 className="about-title">About Me</h1>

          <p>
            Hey! I'm a full stack developer who loves building cool, functional
            web apps from start to finish. I work with both front-end and
            back-end technologies, like JavaScript, React, Node.js, Express and
            databases like MongoDB. I enjoy solving real world problems with
            clean code and thoughtful design. Whether it's creating smooth user
            experiences or building solid APIs behind the scenes, I'm all about
            making things that work well and look good.
          </p>

          <p>Always learning, always building!</p>

          <p>
            One of my favorite quotes that inspires how I work and connect with
            others:
          </p>
          <blockquote>
            <q className="quote">
              People will forget what you said, people will forget what you did,
              but people will never forget how you made them feed.
            </q>
            <cite className="author">- Maya Angelou</cite>
          </blockquote>
        </div>

        <div className="skill-section">
          <div className="section-tabs">
            <button
              onClick={() => setSelectedSection("education")}
              className="tab"
            >
              Education
            </button>
            <button
              onClick={() => setSelectedSection("skills")}
              className="tab"
            >
              Toolkit
            </button>
            <button
              onClick={() => setSelectedSection("experience")}
              className="tab"
            >
              Experience
            </button>
          </div>

          <div className="tab-content">
            {selectedSection === "education" && (
              <div className="education-container">
                <h3 className="section-title">Education <FontAwesomeIcon icon={faGraduationCap}/></h3>
                <div>
                  <p className="date">February 2025 - May 2025</p>
                  <h4>MERN Software Engineering Program</h4>
                  <h5>Per Scholas</h5>
                </div>

                <div>
                  <p className="date">August 2017 - June 2022</p>
                  <h4>
                    Bachelors in Computer Science and Information Engineering
                  </h4>
                  <h5>Tamkang University</h5>
                </div>
              </div>
            )}

            {selectedSection === "skills" && (
              <div className="skills-container">
                <h3 className="section-title">Toolkit <FontAwesomeIcon icon={faScrewdriverWrench}/></h3>
                <div className="skills">
                  <div className="skill"><img src={git} alt="" /></div>
                  <div></div>
                </div>
              </div>
            )}

            {selectedSection === "experience" && (
              <div className="experience-container">
                <h3 className="section-title">Experience <FontAwesomeIcon icon={faBriefcase}/></h3>
                <p></p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
