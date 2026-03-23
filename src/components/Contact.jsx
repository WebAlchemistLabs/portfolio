
export default function Contact() {
  return (
    <section className="container contact-page">
      <div className="contact-shell">
        <aside className="contact-left">
          <p className="eyebrow">Contact</p>
          <h1>Work With Web Alchemist</h1>
          <p className="contact-text">
            Book a call, send me an email, or connect with me directly to talk
            about web development, software projects, business systems, and
            digital solutions.
          </p>

          <div className="contact-info-block">
            <h4>Email</h4>
            <a href="mailto:Webalchemistlabs@gmail.com">
              Webalchemistlabs@gmail.com
            </a>
          </div>

          <div className="contact-info-block">
            <h4>GitHub</h4>
            <a
              href="https://github.com/WebAlchemistLabs"
              target="_blank"
              rel="noreferrer"
            >
              github.com/WebAlchemistLabs
            </a>
          </div>

          <div className="contact-info-block">
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/marlon-haynes-3bb010391/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/marlon-haynes-3bb010391
            </a>
          </div>

          <div className="contact-info-block">
            <h4>Prefer email?</h4>
            <p className="contact-text-small">
              You can also email me directly for project inquiries, freelance
              work, or collaboration.
            </p>
          </div>
        </aside>

        <div className="contact-form calendly-panel">
          <div className="calendly-head">
            <h2>Book a Call</h2>
            <p>
              Schedule a call to discuss your project, business needs, or collaboration
              opportunity.
            </p>
          </div>

          <div className="contact-cta-box">
            <a
              href="https://calendly.com/webalchemistlabs/30-minute-web-development-consultation"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Open Calendly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}