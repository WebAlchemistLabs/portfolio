import { useEffect, useState } from "react";

const projects = [
  {
    title: "NorBec Landscaping Booking Site",
    image: "/assets/norbec.jpg",
    summary:
      "A business focused booking and lead generation system designed to streamline customer inquiries, automate scheduling, and improve conversion from website traffic to booked services.",
    tech: ["React", "Vite", "Calendly", "Zapier", "Google Sheets"],
    role:
      "Designed and developed a responsive frontend experience integrated with scheduling and automation tools, creating a seamless flow from user interaction to booking confirmation.",
    problem:
      "Many service based businesses lose potential customers due to unclear navigation and manual booking processes. This system demonstrates how structured UI, automation, and integrations can convert visitors into actual leads and bookings efficiently.",
    demo: "https://norbec-landscaping-website.onrender.com/",
    github: "https://github.com/WebAlchemistLabs/norbec-landscaping-website",
    gallery: [
      {
        src: "/assets/norbec-gallery/Live site booking 1.png",
        title: "Live Booking Form",
      },
      {
        src: "/assets/norbec-gallery/Live site booking.png",
        title: "Calendly Date Selection",
      },
      {
        src: "/assets/norbec-gallery/Google calendar.png",
        title: "Google Calendar Event Created",
      },
      {
        src: "/assets/norbec-gallery/Sheets.png",
        title: "Google Sheets Booking Record",
      },
      {
        src: "/assets/norbec-gallery/Zapier workflow.png",
        title: "Zapier Workflow Automation",
      },
    ],
  },
  {
    title: "Web Alchemist Labs E-commerce",
    image: "/assets/ecommerce.jpg",
    summary:
      "A full e-commerce system designed to simulate a real online store, including product management, shopping flow, authentication, and payment integration.",
    tech: ["React", "Firebase", "Stripe", "Authentication", "Zapier"],
    role:
      "Built a complete storefront experience including product browsing, cart functionality, user authentication, and payment processing, focusing on usability, structure, and real-world application flow.",
    problem:
      "This project demonstrates how modern e-commerce platforms handle product interaction, user sessions, and secure payments, showcasing the ability to build scalable, real world digital commerce systems.",
    demo: "https://webalchemistlabs-ecommerce.vercel.app",
    github: "https://github.com/WebAlchemistLabs/web-alchemist-labs-ecommerce",
    gallery: [],
  },
  {
    title: "IT Help Desk Ticket System",
    image: "/assets/helpdesk.jpg",
    summary:
      "An internal help desk system designed to manage support workflows through structured ticket creation, priority tracking, status updates, and admin-side management.",
    tech: ["React", "Firebase", "Admin Dashboard", "Ticket Workflow"],
    role:
      "Designed and built a ticket based workflow system including user submission, status tracking, priority handling, and admin dashboard functionality for managing and resolving support requests.",
    problem:
      "Organizations rely on structured support systems to manage internal issues efficiently. This project demonstrates how ticket workflows, status visibility, and role-based management can improve communication, organization, and issue resolution.",
    demo: "#",
    github: "#",
    gallery: [],
  },
];

export default function Projects() {
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function openGallery(project, index = 0) {
    setActiveGallery(project);
    setActiveImageIndex(index);
  }

  function closeGallery() {
    setActiveGallery(null);
    setActiveImageIndex(0);
  }

  function showNextImage() {
    if (!activeGallery || activeGallery.gallery.length === 0) return;
    setActiveImageIndex((prev) => (prev + 1) % activeGallery.gallery.length);
  }

  function showPrevImage() {
    if (!activeGallery || activeGallery.gallery.length === 0) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? activeGallery.gallery.length - 1 : prev - 1
    );
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (!activeGallery) return;

      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "ArrowLeft") showPrevImage();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGallery]);

  const activeImage =
    activeGallery && activeGallery.gallery.length > 0
      ? activeGallery.gallery[activeImageIndex]
      : null;

  return (
    <>
      <section className="container projects-page">
        <div className="section-head projects-head">
          <p className="eyebrow">Projects</p>
          <h1>Selected Work</h1>
          <p>
            These projects demonstrate practical software development,
            business workflow thinking, and real-world digital problem solving.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-showcase" key={project.title}>
              <div className="project-showcase-top">
                <div className="project-showcase-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-showcase-image"
                  />
                </div>

                <div className="project-showcase-body">
                  <h2>{project.title}</h2>
                  <p className="project-summary">{project.summary}</p>

                  <div className="tag-wrap">
                    {project.tech.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="project-detail-block">
                    <h4>What I did</h4>
                    <p>{project.role}</p>
                  </div>

                  <div className="project-detail-block">
                    <h4>What it solves</h4>
                    <p>{project.problem}</p>
                  </div>

                  <div className="project-links">
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

                    {project.gallery.length > 0 && (
                      <button
                        type="button"
                        className="secondary-btn"
                        onClick={() => openGallery(project, 0)}
                      >
                        View System Setup
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {project.gallery.length > 0 && (
                <div className="project-workflow-strip">
                  <div className="project-workflow-head">
                    <h3>System Workflow Screens</h3>
                    <p>Click any screen to enlarge and browse the full setup.</p>
                  </div>

                  <div className="project-gallery-preview">
                    {project.gallery.map((item, index) => (
                      <button
                        key={item.src}
                        type="button"
                        className="gallery-thumb-btn"
                        onClick={() => openGallery(project, index)}
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          className="gallery-thumb-image"
                        />
                        <span className="gallery-thumb-title">{item.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {activeGallery && activeImage && (
        <div
          className="gallery-modal-overlay"
          onClick={closeGallery}
        >
          <div
            className="gallery-lightbox"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-close-btn"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              ×
            </button>

            <button
              type="button"
              className="gallery-nav-btn gallery-nav-left"
              onClick={showPrevImage}
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className="gallery-lightbox-content">
              <p className="gallery-lightbox-project">{activeGallery.title}</p>
              <h3 className="gallery-lightbox-title">{activeImage.title}</h3>

              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="gallery-lightbox-image"
              />

              <p className="gallery-lightbox-count">
                {activeImageIndex + 1} / {activeGallery.gallery.length}
              </p>
            </div>

            <button
              type="button"
              className="gallery-nav-btn gallery-nav-right"
              onClick={showNextImage}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}