import "./style.css";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowRight,
  FaDownload,
  FaChartLine,
  FaSearch,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">

        {/* Left */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ⭐ Trusted SEO Professional
          </motion.div>

          <h1>
            Helping Businesses
            <br />
            <span>Grow Organically</span>
          </h1>

          <h2>Ashley Harry Swami</h2>

          <h3 className="typing-text">
            SEO Specialist • WordPress Expert • Digital Marketing Consultant
          </h3>

          <p className="hero-description">
            I help businesses improve their online visibility through
            SEO, WordPress optimization, Google Analytics and
            data-driven digital marketing strategies that generate
            measurable growth.
          </p>

          <div className="hero-features">

            <span>
              <FaCheckCircle />
              SEO Strategy
            </span>

            <span>
              <FaCheckCircle />
              WordPress
            </span>

            <span>
              <FaCheckCircle />
              Google Analytics
            </span>

            <span>
              <FaCheckCircle />
              Technical SEO
            </span>

          </div>

          <div className="hero-buttons">

            <a
              href="https://wa.me/919769948081?text=Hi%20Ashley,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              className="btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
              <FaArrowRight />
            </a>
            <a
              href="/resume.pdf"
              className="btn secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          <div className="hero-stats">

            <motion.div
              whileHover={{ y: -8 }}
            >
              <h4>2+</h4>
              <p>Years Experience</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
            >
              <h4>15+</h4>
              <p>Projects</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
            >
              <h4>25%</h4>
              <p>Business Growth</p>
            </motion.div>

          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="image-card">

            <div className="glow"></div>

            <motion.img
              src="/images/profile.jpg"
              alt="Ashley Harry Swami"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
            />

            <motion.div
              className="floating-card one"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
            >
              <FaSearch />

              <div>
                <h5>SEO Score</h5>
                <span>98%</span>
              </div>

            </motion.div>

            <motion.div
              className="floating-card two"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
            >
              <FaChartLine />

              <div>
                <h5>Traffic</h5>
                <span>+240%</span>
              </div>

            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;