import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "NorBec Landscaping Booking Site",
    description:
      "A booking-focused business website designed to improve customer inquiries, automate lead flow, and streamline scheduling.",
    stack: "React • Vite • Calendly • Zapier • Google Sheets",
    image: "/assets/norbec.jpg",
    demo: "https://norbec-landscaping-website.onrender.com/",
    github: "https://github.com/WebAlchemistLabs/norbec-landscaping-website",
  },
  {
    title: "Web Alchemist Labs E-commerce",
    description:
      "A modern e-commerce platform built to showcase product systems, shopping flow, payments, and clean storefront design.",
    stack: "React • Firebase • Stripe • Authentication • Zapier",
    demo: "https://webalchemistlabs-ecommerce.vercel.app",
    image: "/assets/ecommerce.jpg",
    github: "https://github.com/WebAlchemistLabs/web-alchemist-labs-ecommerce",
  },
  {
    title: "IT Help Desk Ticket System",
    description:
      "An internal support system built for ticket creation, priority tracking, status management, comments, and admin workflow handling.",
    stack: "React • Firebase • Admin Dashboard • Ticket Workflow",
    image: "/assets/helpdesk.jpg",
    demo: "#",
    github: "#",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container hero-grid single-column-hero">
          <div className="hero-copy">
            <p className="eyebrow">Software Developer • Web Developer • Business-Focused Builder</p>
            <h1 className="hero-title">
              I build practical digital products that combine clean design, strong functionality, and real business value.
            </h1>
            <p className="hero-text">
              I’m Marlon Haynes, the developer behind Web Alchemist, where I build
              business-focused digital projects such as booking systems, e-commerce
              platforms, dashboards, internal tools, and workflow-driven web solutions.
              My focus is creating work that looks professional, functions smoothly,
              and solves real-world business problems.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="primary-btn">
                Explore Projects
              </Link>
              <Link to="/contact" className="secondary-btn">
                Get In Touch
              </Link>
              <a
                href="/assets/Marlon-Haynes-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-head">
            <h2>Featured Projects</h2>
            <p>
              Three polished projects that demonstrate frontend development,
              business-focused thinking, and practical problem solving.
            </p>
          </div>

          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <article className="feature-card" key={project.title}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="feature-image"
                />
                <div className="feature-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="stack-badge">{project.stack}</span>

                  <div className="feature-links">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="primary-btn"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-btn"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/projects" className="primary-btn">
              See All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container short-about-card">
          <div>
            <h2>What I Focus On</h2>
            <p>
              I build practical, business-focused digital projects that go beyond basic
              websites. My work includes booking and scheduling systems, e-commerce
              platforms, SaaS dashboards, help desk and ticketing systems, admin
              management tools, automation workflows, integrations, authentication,
              payment systems, database-connected applications, and responsive user
              interfaces designed for real-world use.
            </p>
          </div>

          <div className="focus-list">
            <span>Booking & Scheduling Systems</span>
            <span>E-commerce Platforms</span>
            <span>SaaS Dashboards</span>
            <span>Help Desk & Ticket Systems</span>
            <span>Admin Management Systems</span>
            <span>Automation & Integrations</span>
            <span>Authentication & Payments</span>
            <span>Database-Driven Applications</span>
            <span>Business Workflow Solutions</span>
            <span>Responsive UI</span>
          </div>
        </div>
      </section>
    </div>
  );
}