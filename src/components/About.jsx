import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
      <section className="container about-hero">
        <div className="about-photo-wrap">
          <img
            src="/assets/M1.jpg"
            alt="Marlon Haynes"
            className="about-photo"
          />
        </div>

        <div className="about-content">
          <p className="eyebrow">About Me</p>
          <h1>Marlon Haynes</h1>
          <p className="about-subtitle">
            Web Application Developer based in Toronto, Canada
          </p>

          <div className="chip-row">
            <span className="chip">Web Application Developer</span>
            <span className="chip">Software Developer</span>
            <span className="chip">Business Focused Solutions</span>
            <span className="chip">UX Minded Interfaces</span>
            <span className="chip">Scalable Digital Products</span>
          </div>

          <p className="about-text">
            I build web applications and digital products designed to solve real operational challenges.
            My work combines interface quality, practical logic, and business value so each product is
            polished, usable, and built for outcomes.
          </p>

          <p className="about-text">
            I completed the Software Engineering Technician diploma and continue to expand my experience
            through hands on application projects. I focus on software development, web application
            development, support systems, and UX related opportunities where product thinking and
            implementation quality both matter.
          </p>

          <ul className="highlight-list">
            <li>Application focused projects with realistic business use cases</li>
            <li>Strong structure across interface, logic, and workflow design</li>
            <li>Polished user experience backed by practical system behavior</li>
            <li>Hands on delivery across booking, commerce, dashboard, and support tools</li>
          </ul>

          <div className="hero-actions">
            <Link to="/projects" className="primary-btn">
              View Projects
            </Link>
            <Link to="/contact" className="secondary-btn">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}