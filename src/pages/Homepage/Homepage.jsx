import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";

import photo from "../../../public/me.png";
import "./Homepage.css";

export default function Homepage() {
  const nav = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="title-container">
        <div className="title-heading">
          <h1 className="title">
            Hello, I'm <br /> <span className="highlight"> Alenia!</span>
          </h1>
          <p>I'm a Software Engineer focused on full stack web development. </p>
          <button className="learn-more-btn" onClick={ (() => { nav("/about")})}>Learn more about me</button>
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
      <Footer />
    </div>
  );
}
