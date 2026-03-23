export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3 className="footer-title">Web Alchemist</h3>
          <p className="footer-copy">
            Web Alchemist is a portfolio and business brand focused on building
            modern, user focused digital projects across web development, automation,
            business workflows, and practical software solutions.
          </p>
        </div>

        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/education">Education</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-links">
            <a href="mailto:Webalchemistlabs@gmail.com">Webalchemistlabs@gmail.com</a>
            <a
              href="https://github.com/WebAlchemistLabs"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/marlon-haynes-3bb010391/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Web Alchemist. All rights reserved.</p>
      </div>
    </footer>
  );
}