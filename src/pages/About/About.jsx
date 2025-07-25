import { useState, useEffect } from "react";

import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import git from "../../assets/brandLogos/git.svg";
import html from "../../assets/brandLogos/html.png";
import css from "../../assets/brandLogos/css.png";
import js from "../../assets/brandLogos/js.png";
import ts from "../../assets/brandLogos/typescript.png";
import react from "../../assets/brandLogos/reactlogo.png";
import tailwind from "../../assets/brandLogos/tailwind.svg";
import github from "../../assets/brandLogos/github.png";
import reactrouters from "../../assets/brandLogos/react-router.svg";
import bootstrap from "../../assets/brandLogos/bootstrap.png";
import express from "../../assets/brandLogos/express.png";
import node from "../../assets/brandLogos/node.png";

import "./About.css";

export default function About() {
  const [selectedSection, setSelectedSection] = useState("education");

  useEffect(() => {
    document.title = "About | Alenia Allen";
  });

  return (
    <div className="aboutpage">
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
              First, solve the problem. Then, write the code.
            </q>
            <cite className="author">- John Johnson</cite>
          </blockquote>

          {/* <p>
            This quote reminds me that good software isn't just about writing
            code, its about deeply undestanding the problem, designing
            thoughtful solutions, and building with purpose. It reflects how I
            approach challenges in both collaborative and independent settings.
          </p> */}
        </div>

        <div className="skill-section">
          <div className="section-tabs">
            <button
              onClick={() => setSelectedSection("education")}
              className={selectedSection === "education" ? "selected" : ""}
            >
              Education
            </button>
            <button
              onClick={() => setSelectedSection("skills")}
              className={selectedSection === "skills" ? "selected" : ""}
            >
              Toolkit
            </button>
            <button
              onClick={() => setSelectedSection("experience")}
              className={selectedSection === "experience" ? "selected" : ""}
            >
              Experience
            </button>
          </div>

          <div className="tab-content">
            {selectedSection === "education" && (
              <div className="education-container">
                <h3 className="section-title">
                  Education <FontAwesomeIcon icon={faGraduationCap} />
                </h3>
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
                <h3 className="section-title">
                  Toolkit <FontAwesomeIcon icon={faScrewdriverWrench} />
                </h3>
                <div className="skills">
                  <div className="skill">
                    <img src={html} alt="" width={60} height={60} />
                    <div className="tooltip">HTML</div>
                  </div>
                  <div className="skill">
                    <img src={css} alt="" width={60} height={60} />
                    <div className="tooltip">CSS</div>
                  </div>
                  <div className="skill">
                    <img src={bootstrap} alt="" width={60} height={60} />
                    <div className="tooltip">Bootstrap</div>
                  </div>
                  <div className="skill">
                    <img src={tailwind} alt="" width={60} height={60} />
                    <div className="tooltip">Tailwind CSS</div>
                  </div>
                  <div className="skill">
                    <img src={js} alt="" width={60} height={60} />
                    <div className="tooltip">JavaScript</div>
                  </div>
                  <div className="skill">
                    <img src={ts} alt="" width={60} height={60} />
                    <div className="tooltip">TypeScript</div>
                  </div>
                  <div className="skill">
                    <img src={react} alt="" width={60} height={60} />
                    <div className="tooltip">React</div>
                  </div>
                  <div className="skill">
                    <img src={reactrouters} alt="" width={60} height={60} />
                    <div className="tooltip">React Routers</div>
                  </div>
                  <div className="skill">
                    <img src={node} alt="" width={60} height={60} />
                    <div className="tooltip">Node</div>
                  </div>
                  <div className="skill">
                    <img src={express} alt="" width={60} height={60} />
                    <div className="tooltip">Express</div>
                  </div>
                  <div className="skill">
                    <img src={git} alt="" width={60} height={60} />
                    <div className="tooltip">Git</div>
                  </div>
                  <div className="skill">
                    <img src={github} alt="" width={60} height={60} />
                    <div className="tooltip">Github</div>
                  </div>
                </div>
              </div>
            )}

            {selectedSection === "experience" && (
              <div className="experience-container">
                <h3 className="section-title">
                  Experience <FontAwesomeIcon icon={faBriefcase} />
                </h3>
                <div>
                  <p className="date">September 2024 - Present</p>
                  <p className="location">Remote</p>
                  <h4>Freelance Web Developer</h4>
                  <p className="job-description">
                    Developed custom websites for clients accross various
                    industries. Skilled in front-end and back-end development.
                    Developed responsive, secure, and SEO friendly solutions.
                    Experiencied in API integration, cloud deployment and client
                    collaboration from concept to launch.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
