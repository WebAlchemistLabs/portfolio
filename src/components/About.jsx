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
            Software Developer based in Toronto, Canada
          </p>

          <div className="chip-row">
            <span className="chip">Software Development</span>
            <span className="chip">Web Development</span>
            <span className="chip">UX</span>
            <span className="chip">Responsive Design</span>
          </div>

          <p className="about-text">
            I’m a software developer focused on building responsive,
            user friendly digital projects that combine strong design,
            practical functionality, and real world usefulness. I enjoy
            creating work that looks professional, feels polished, and
            solves actual problems.
          </p>

          <p className="about-text">
            I completed the Software Engineering Technician diploma and I’m
            continuing to grow my skills through hands-on projects, portfolio
            development, and technical problem solving. My goal is to build a
            strong body of work that helps me stand out for software, web,
            support, and UX related opportunities.
          </p>

          <ul className="highlight-list">
            <li>Responsive websites and digital projects built with modern tools</li>
            <li>Clean layouts and structured development</li>
            <li>Business focused projects with real world use cases</li>
            <li>Strong focus on presentation, usability, and polish</li>
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