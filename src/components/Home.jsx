import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "NorBec Landscaping Booking Site",
    description:
      "A booking platform built to increase qualified inquiries, automate scheduling, and strengthen lead conversion.",
    stack: "React • Vite • Calendly • Zapier • Google Sheets",
    image: "/assets/norbec booking/norbec.jpg",
    demo: "https://norbec-landscaping-website.onrender.com/",
    github: "https://github.com/WebAlchemistLabs/norbec-landscaping-website",
  },
  {
    title: "Web Alchemist Labs E-commerce",
    description:
      "A complete E-commerce application that covers product workflows, checkout, payments, automated order emails, and administrative operations.",
    stack: "React • Firebase • Stripe • Firestore • Zapier",
    demo: "https://webalchemistlabs-ecommerce.vercel.app",
    image: "/assets/ecommerce/ecommerce.jpg",
    github: "https://github.com/WebAlchemistLabs/web-alchemist-labs-ecommerce",
  },
  {
    title: "IT Help Desk Ticket System",
    description:
      "An internal support application for ticket routing, priority handling, status management, and team operations.",
    stack: "React • Firebase • Authentication • Ticket Management • Dashboard",
    image: "/assets/helpdesk.jpg",
    demo: "#",
    github: "#",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-bg-orb hero-bg-orb-left" aria-hidden="true" />
        <div className="hero-bg-orb hero-bg-orb-right" aria-hidden="true" />
        <div className="hero-grid-pattern" aria-hidden="true" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Web Application Developer, Software Developer, Business Solutions</p>
            <h1 className="hero-title">
              I build web applications and digital systems that improve operations, user experience, and business performance.
            </h1>
            <p className="hero-text">
              I am Marlon Haynes, a developer focused on application driven products including booking systems,
              E-commerce workflows, internal dashboards, support tools, and process automation platforms.
              I deliver polished interfaces with practical logic and reliable business workflows.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="primary-btn">
                View Application Projects
              </Link>
              <Link to="/contact" className="secondary-btn">
                Discuss Opportunities
              </Link>
              <a
                href="/assets/Marlon-Haynes-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                Open Resume
              </a>
            </div>
          </div>

          <div className="hero-visual-shell" aria-hidden="true">
            <div className="hero-visual-card hero-visual-main">
              <p>Application Focus</p>
              <h3>Business workflow systems</h3>
              <ul>
                <li>Booking and scheduling automation</li>
                <li>E-commerce and payment workflows</li>
                <li>Support dashboards and operations tools</li>
              </ul>
            </div>

            <div className="hero-visual-card hero-visual-side">
              <p>Delivery Standard</p>
              <h4>Reliable interface architecture</h4>
              <span>Clean UX, practical logic, measurable value</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-head">
            <h2>Featured Projects</h2>
            <p>
              Three portfolio applications that demonstrate software development,
              workflow design, and business focused implementation.
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
              I build digital products that solve operational and customer facing challenges.
              My work includes booking platforms, E-commerce systems, dashboards, internal tools,
              authentication flows, payment workflows, and database connected applications with
              interfaces designed for real business usage.
            </p>
          </div>

          <div className="focus-list">
            <span>Booking & Scheduling Systems</span>
            <span>E-commerce Platforms</span>
            <span>SaaS Dashboards</span>
            <span>Help Desk & Ticket Systems</span>
            <span>Admin Management Systems</span>
            <span>Automation & Integrations</span>
            <span>Authentication and Payments</span>
            <span>Database Driven Applications</span>
            <span>Business Workflow Solutions</span>
            <span>Responsive UI</span>
          </div>
        </div>
      </section>
    </div>
  );
}