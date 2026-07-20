import "./style.css";

function SectionTitle({ subtitle, title }) {
  return (
    <div className="section-heading">
      <span>{subtitle}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;