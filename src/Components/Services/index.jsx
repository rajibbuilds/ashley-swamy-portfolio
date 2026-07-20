import "./style.css";
import {
  FaSearch,
  FaWordpress,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description:
        "On-page SEO, Technical SEO, Keyword Research, Local SEO and competitor analysis.",
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Management",
      description:
        "Website updates, Elementor, CPanel, speed optimization and maintenance.",
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description:
        "Google Business Profile, Meta Ads, Analytics and content strategy.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      description:
        "Responsive websites using HTML, CSS and WordPress with SEO-friendly structure.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="section-title">
        <h5>SERVICES</h5>
        <h2>What I Can Do</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;