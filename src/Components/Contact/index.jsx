import "./style.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w2a3g4v",
        "template_zcwt4dr",
        form.current,
        "r22Whzu-rlyX34Sak"
      )
      .then(
        () => {
          alert("Thank you! Your message has been sent successfully. I'll get back to you soon.");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h5>CONTACT</h5>
        <h2>Let's Work Together</h2>
      </div>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h3>Get in Touch</h3>

          <p>
            I'm always open to discussing SEO, Digital Marketing,
            Website Optimization, and exciting opportunities.
          </p>

          <div className="info">
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <span>+91 9769948081</span>
            </div>

            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>ashleyswamy1121@gmail.com</span>
            </div>

            <div className="info-item">
              <FaLinkedin className="icon" />
              <span>linkedin.com/in/ashley-swamy-6896b9273</span>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>Mumbai, India</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;