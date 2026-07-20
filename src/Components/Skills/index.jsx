import "./style.css";
import {
  FaSearch,
  FaChartLine,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaAws,
} from "react-icons/fa";

import {
  SiGoogleanalytics,
  SiGoogleads,
  SiMysql,
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h5>MY SKILLS</h5>
        <h2>Technologies & Expertise</h2>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <FaSearch className="icon" />
          <h3>SEO</h3>
          <p>Keyword Research, Technical SEO, Local SEO, On-Page SEO</p>
        </div>

        <div className="skill-card">
          <FaChartLine className="icon" />
          <h3>Digital Marketing</h3>
          <p>Content Strategy, Analytics, Meta Ads, Campaign Planning</p>
        </div>

        <div className="skill-card">
          <FaWordpress className="icon" />
          <h3>WordPress</h3>
          <p>Website Management, Elementor, CPanel, Optimization</p>
        </div>

        <div className="skill-card">
          <SiGoogleanalytics className="icon" />
          <h3>Google Tools</h3>
          <p>Analytics, Search Console, Business Profile</p>
        </div>

        <div className="skill-card">
          <FaHtml5 className="icon" />
          <h3>Frontend</h3>
          <p>HTML5, CSS3, Responsive Design</p>
        </div>

        <div className="skill-card">
          <FaPython className="icon" />
          <h3>Programming</h3>
          <p>Python, SQL, AWS Cloud</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;