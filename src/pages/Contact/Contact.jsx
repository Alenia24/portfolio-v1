import ContactForm from "../../components/ContactForm/ContactForm.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import NavBar from "../../components/NavBar/NavBar.jsx"
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contactpage">
      <NavBar/>
      <div className="contact-container">
        <h1 className="contact-title">Contact</h1>
        <h3>Let's Connect</h3>
        <p>I'm open to freelance work, job opportunities, and creative collaborations.
          If you have something in mind or just want to say hello, drop a message below.
          I would love to hear from you.
        </p>
        <ContactForm />
      </div>
      <Footer/>
    </div>
  )
}
