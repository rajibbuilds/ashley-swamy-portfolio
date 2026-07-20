import "./style.css";

const experiences = [
  {
    company: "Digital Marketing Manager",
    organization: "Green Haven (Dalify) | Mumbai",
    duration: "May 2026 - Present",
    description:
      "Worked on SEO, website optimization, Google Business Profile, content planning, and digital marketing strategies."
  },
  {
    company: "IT Support Lead & Digital Marketing",
    organization: "Caviar Classic Sea Food | Dubai",
    duration: "Feb 2026 - Mar 2026",
    description:
      "Managed WordPress websites, analyzed Google Analytics, and supported Meta Ads campaigns."
  },
  {
    company: "Sr.Technical Support Advisor",
    organization: "Concentrix (Dell Technologies)",
    duration: "Feb 2025 - Jan 2026",
    description:
      "Provided enterprise technical support, incident management, and stakeholder communication."
  }
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-title">
        <h5>EXPERIENCE</h5>
        <h2>Professional Journey</h2>
      </div>

      <div className="timeline">
        {experiences.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>{item.duration}</span>

              <h3>{item.company}</h3>

              <h4>{item.organization}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;