import "./style.css";

const projects = [
  {
    title: "Dalify Brand Marketing Campaign",
    image: "/images/dalify.jpg",
    tech: "Brand Strategy • Social Media • SEO • Creative Direction • Content Marketing",
    description:
      "Planned and executed Dalify's digital marketing campaigns by combining SEO, content strategy, product storytelling, and creative design. Built a consistent brand identity across social media, developed engaging campaign creatives, and supported business growth through strategic digital marketing.",
    demo: "#",
    github: "#",
  },

  {
    title: "Dell Technologies - Senior Technical Support Advisor",
    image: "/images/dell.png",
    tech: "Enterprise IT Support • Windows • Networking • Microsoft 365 • Hardware Diagnostics",
    description:
      "Provided enterprise-level technical support by diagnosing and resolving complex hardware, software, operating system, and network issues. Ensured rapid issue resolution, enhanced customer satisfaction, collaborated with internal engineering teams, and delivered reliable technical solutions aligned with Dell's global support standards.",
    demo: "#",
    github: "#",
  },

  {
    title: "Business Growth & Digital Strategy Platform",
    image: "/images/zodiac.webp",
    tech: "WordPress • HTML • CSS • SEO • UI/UX • Google Analytics",
    description:
      "Built modern business websites that combine responsive design, SEO optimization, and conversion-focused user experiences. Integrated analytics, improved website performance, and implemented digital strategies that helped businesses strengthen their online presence and generate quality leads.",
    demo: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="section-title">
        <h5>PROJECTS</h5>
        <h2>Featured Work</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <img src={project.image} alt={project.title} />

            <div className="project-content">

              <h3>{project.title}</h3>

              <span>{project.tech}</span>

              <p>{project.description}</p>

              <div className="project-buttons">

                <a href={project.demo}>Live Demo</a>

                <a href={project.github}>Case Study</a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;