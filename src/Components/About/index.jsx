import "./style.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">
        <img
          src="/images/about-image.png"
          alt="SEO, Digital Marketing & Business Strategy"
          className="about-image"
        />
      </div>

      <div className="about-right">

        <h5>ABOUT ME</h5>

        <h2>
          Helping Businesses Grow
          <br />
          Organically
        </h2>

        <p>
          SEO & Digital Marketing professional with expertise in Keyword Research, Technical SEO, Local SEO, WordPress, Google Analytics, Google Business Profile, website optimization, business analysis, and growth strategy. I help businesses strengthen their digital presence by analyzing business performance, identifying growth opportunities, and developing data-driven marketing strategies that improve search visibility, generate qualified leads, enhance customer engagement, and drive sustainable business growth.
        </p>

        <p>
          Passionate about combining SEO, digital marketing, and strategic business planning to deliver measurable results.
          I enjoy improving website performance, increasing search visibility, analyzing business performance, and developing strategic growth plans that help businesses generate quality leads, strengthen their online presence, and achieve sustainable growth through data-driven digital marketing.
        </p>

        <div className="about-stats">

          <div className="stat-card">
            <h3>2+</h3>
            <span>Years Experience</span>
          </div>

          <div className="stat-card">
            <h3>15+</h3>
            <span>Projects</span>
          </div>

          <div className="stat-card">
            <h3>50+</h3>
            <span>SEO Tasks</span>
          </div>

          <div className="stat-card">
            <h3>25%</h3>
            <span>Growth</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;