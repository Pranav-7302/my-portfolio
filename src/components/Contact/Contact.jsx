import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_u179gra',        // Replace with your Service ID
      'template_vmgl0vs',       // Replace with your Template ID
      form.current,
      '_t4AZV3ZOQDliQfVd'     // Replace with your Public Key
    )
    .then(() => {
      alert("Message sent successfully 🚀");
      form.current.reset();
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Oops! Something went wrong 😓");
    });
  };

  return (
    <section id="Contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-intro">Have a project in mind or just want to say hi? Let’s connect 👇</p>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="input-group">
          <FaUser />
          <input type="text" name="from_name" placeholder="Your Name" required />
        </div>
        <div className="input-group">
          <FaEnvelope />
          <input type="email" name="from_email" placeholder="Your Email" required />
        </div>
        <div className="input-group">
          <textarea name="message" placeholder="Your Message" required />
        </div>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>

      <div className="contact-links">
        <p><FaEnvelope />Pranav7302@gmail.com</p>
        <p><FaPhone /> +91 7300574260</p>
      </div>
    </section>
  );
};

export default Contact;
