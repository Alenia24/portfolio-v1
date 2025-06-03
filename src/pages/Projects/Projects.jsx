import { useEffect } from "react";

import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import ProjectItem from "../../components/ProjectItem/ProjectItem.jsx";

import solara from "../../assets/projectimages/solara.png";
import guessing from "../../assets/projectimages/guessing.png";
import dog from "../../assets/projectimages/dog.png";
import clock from "../../assets/projectimages/clock.png";
import weather from "../../assets/projectimages/weather.png";
import portfolio from "../../assets/projectimages/portfolio.png";
import "./Projects.css";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Alenia Allen";
  });
  return (
    <div className="projectspage">
      <NavBar />
      <div className="projects-container">
        <div className="projects-intro">
          <h1 className="projects-title">Projects</h1>
          <p>
            Here's a bunch of projects that I've worked on recently, while
            learning, experimenting and solving real world problems. Some
            started as personal challenges and coursework. I've woked with tools
            like React, Node.js and different CSS methodologies to bring ideas
            to life. From clean user interfaces to full stack applications. Each
            project taught me something new. I am always looking to build
            better, smarter and more user-friendly experiences.
          </p>
        </div>

        <div className="projects">
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
            title="Portfolio"
            image={portfolio}
            description="Personal portfolio website, designed and devloped to present my projects,
            skills, and experience. "
            liveLink="https://aleniaallen.onrender.com/"
            githubLink="https://github.com/Alenia24/portfolio-v1"
            projectTools={["React", "CSS", "JavaScript", "Bootstrap", "React Router", "Emailjs"]}
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

          <ProjectItem
            title="Guessing Game"
            image={guessing}
            description="A number guessing game where users try to guess the correct number 
          within a set range, with real-time feedback handled through DOM manipulation. "
            liveLink="https://numbers-guess-gamee.netlify.app/"
            githubLink="https://github.com/Alenia24/ALAB316.2.1"
            projectTools={["Html", "CSS", "JavaScript"]}
          />

          <ProjectItem
            title="Pet Rescue"
            image={dog}
            description="A simple pet resue web app that allows users to search for dogs by breeds
            and view all dog breeds using data from the Dog API. "
            liveLink="https://rad-frangipane-97b1ca.netlify.app/"
            githubLink="https://github.com/Alenia24/SBA308A"
            projectTools={["Html", "CSS", "JavaScript", "API"]}
          />

          <ProjectItem
            title="World Clock"
            image={clock}
            description="A real time world clock app that displays the current time for seven major cities,
            updating dynamially using an API for accurate, live time information.. "
            liveLink="https://worldclockdesign.netlify.app/"
            githubLink="https://github.com/Alenia24/world-clock-design"
            projectTools={["Html", "CSS", "JavaScript", "API"]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
