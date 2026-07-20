import "./style.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="logo">
        Ashley<span>Swami</span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <a href="#hero" onClick={closeMenu}>Home</a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>

        <li>
          <a href="#experience" onClick={closeMenu}>Experience</a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>

        <li>
          <a href="#services" onClick={closeMenu}>Services</a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>

        <li className="mobile-resume">
          <a href="/resume.pdf">Resume</a>
        </li>

      </ul>

      <a href="/resume.pdf" className="resume-btn">
        Resume
      </a>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </header>
  );
}

export default Navbar;