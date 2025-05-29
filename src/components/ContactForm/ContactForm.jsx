import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"

import "./ContactForm.css"

export default function ContactForm() {
    const form = useRef();
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setSuccess(true)
            setError(false)
            form.current.reset()
            setTimeout(() => {
                setSuccess(false)
            }, 4000)
        }).catch(() => {
            setError(true)
            setSuccess(false)
            setTimeout(() => {
              setError(false);
            }, 4000);
        });

    }

  return (
    <div className="contact-form-container">
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" placeholder="Enter your name" required />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <label>Message</label>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="4"
          placeholder="Enter your message"
          required
        ></textarea>
        <button className="form-btn" type="sumbit">
          Send
        </button>
      </form>

      {success && <div>Message sent successfully!</div>}
      {error && <div>Something went wrong.</div>}
    </div>
  );
}
