import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";

import ProjectItem from "../../components/ProjectItem/ProjectItem.jsx";

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

import solara from "../../assets/projectimages/solara.png";
import weather from "../../assets/projectimages/weather.png";

import photo from "../../assets/me.png";
import "./Homepage.css";

export default function Homepage() {
  const nav = useNavigate();

  useEffect(() => {
    document.title = "Alenia Allen";
  });
  return (
    <div className="homepage">
      <NavBar />
      <div className="title-container">
        <div className="title-heading">
          <h1 className="title">
            Hello, I'm <br /> <span className="highlight"> Alenia!</span>
          </h1>
          <p>I'm a Software Engineer focused on full stack web development. </p>
          <button
            className="learn-more-btn"
            onClick={() => {
              nav("/about");
            }}
          >
            Learn more about me
          </button>
        </div>
        <div className="title-image">
          <img
            className="img-fluid homepage-image"
            src={photo}
            alt="Photo of Alenia"
            width={250}
          />
        </div>
      </div>

      <div className="homepage-about-container">
        <h2 className="homepage-about-title">About Me</h2>
        <p>
          Hey! I'm a full stack developer passionate about building functional,
          user-friendly web apps using technologies like JavaScript, React,
          Node.js, Express, and MongoDB, with a focus on clean code, thoughtful
          design, and real-world problem solving.
        </p>
        <div className="homepage-about-skills">
          <div className="homepage-skill">
            <img src={html} alt="" width={20} height={20} />
            HTML
          </div>
          <div className="homepage-skill">
            <img src={css} alt="" width={20} height={20} />
            CSS
          </div>
          <div className="homepage-skill">
            <img src={bootstrap} alt="" width={20} height={20} />
            Bootstrap
          </div>
          <div className="homepage-skill">
            <img src={tailwind} alt="" width={20} height={20} />
            Tailwind CSS
          </div>
          <div className="homepage-skill">
            <img src={js} alt="" width={20} height={20} />
            JavaScript
          </div>
          <div className="homepage-skill">
            <img src={ts} alt="" width={20} height={20} />
            TypeScript
          </div>
          <div className="homepage-skill">
            <img src={react} alt="" width={20} height={20} />
            React
          </div>
          <div className="homepage-skill">
            <img src={reactrouters} alt="" width={20} height={20} />
            React Routers
          </div>
          <div className="homepage-skill">
            <img src={node} alt="" width={20} height={20} />
            Node.js
          </div>
          <div className="homepage-skill">
            <img src={express} alt="" width={20} height={20} />
            Express
          </div>
          <div className="homepage-skill">
            <img src={git} alt="" width={20} height={20} />
            Git
          </div>
          <div className="homepage-skill">
            <img src={github} alt="" width={20} height={20} />
            Github
          </div>
        </div>
        <button
          className="view-about-me-btn"
          onClick={() => {
            nav("/about");
          }}
        >
          About Me
        </button>
      </div>

      <div className="homepage-projects-container">
        <h2 className="homepage-projects-title">Projects</h2>
        <p>
          Here's a bunch of projects that I've worked on recently, while
          learning, experimenting and solving real world problems.
        </p>

        <div className="homepage-projects">
          <ProjectItem
            title="Solara Escapes"
            image={solara}
            description="Solara Escapes is a full stack travel booking platform where users can browse,
                      book, and review trips. Admins mall all trip listings through a secure dashboard."
            liveLink="https://solaraescapes.onrender.com/"
            githubLink="https://github.com/Alenia24/Allen_Alenia_TravelAgency_React_Capstone"
            projectTools={[
              "Node.js",
              "Express",
              "JavaScript",
              "MongoDB",
              "Mongoose",
              "React",
              "JWT",
              "Bcrypt",
              "Multer",
              "Cloudinary",
            ]}
          />

          <ProjectItem
            title="Weather Application"
            image={weather}
            description="A responsive weather application that allows users to search by city and view current
                      weather conditions along with a 5 day forescat, using data fetched from a weather API. "
            liveLink="https://weatherforecastapppp.netlify.app/"
            githubLink="https://github.com/Alenia24/Weather-App"
            projectTools={["Html", "CSS", "JavaScript", "API"]}
          />
        </div>
        <button
          className="view-all-projects-btn"
          onClick={() => {
            nav("/projects");
          }}
        >
          View All Projects
        </button>
      </div>
      <Footer />
    </div>
  );
}
