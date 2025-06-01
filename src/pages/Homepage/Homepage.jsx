import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";

import ProjectItem from "../../components/ProjectItem/ProjectItem.jsx";

import solara from "../../assets/projectimages/solara.png";
import weather from "../../assets/projectimages/weather.png";
import dog from "../../assets/projectimages/dog.png";

import photo from "../../assets/me.png";
import "./Homepage.css";

export default function Homepage() {
  const nav = useNavigate();
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

      <div className="homepage-projects-container">
        <h1 className="homepage-projects-title">Projects</h1>
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
        <button className="view-all-projects-btn"
          onClick={() => {
            nav("/about");
          }}
        >
          View All Projects
        </button>
      </div>
      <Footer />
    </div>
  );
}
