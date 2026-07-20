import "./style.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>Ashley Harry Swami</h2>

          <p>
            SEO Specialist • Digital Marketing • WordPress • Website
            Optimization
          </p>

        </div>

        <div className="footer-links">

          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <a
            href="https://linkedin.com/in/ashley-swamy-6896b9273"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:ashleyswamy1121@gmail.com">
            <FaEnvelope />
          </a>

          <a href="https://github.com/Ash21ley">
            <FaGithub />
          </a>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Ashley Harry Swami.
          All Rights Reserved.
        </p>

        <a href="#hero" className="top-btn">
          <FaArrowUp />
        </a>

      </div>

    </footer>
  );
}

export default Footer;