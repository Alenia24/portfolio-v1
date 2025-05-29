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
        <ContactForm />
      </div>
      <Footer/>
    </div>
  )
}
