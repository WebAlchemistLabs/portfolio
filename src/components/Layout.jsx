import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "./Footer";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 960) setMenuOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <img src="/assets/logo.png" alt="Logo" className="brand-logo" />
            <span className="brand-text">Web Alchemist</span>
          </NavLink>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="desktop-actions">
            <a
              className="nav-icon-link"
              href="https://github.com/WebAlchemistLabs"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              className="nav-icon-link"
              href="https://www.linkedin.com/in/marlon-haynes-3bb010391/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              className="resume-btn"
              href="/assets/Marlon-Haynes-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>

          <button
            className={`nav-toggle${menuOpen ? " open" : ""}`}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-drawer${menuOpen ? " show" : ""}`}>
          <div className="container mobile-drawer-inner">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `mobile-link${isActive ? " active" : ""}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="mobile-socials">
              <a
                className="mobile-pill"
                href="https://github.com/WebAlchemistLabs"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="mobile-pill"
                href="https://www.linkedin.com/in/marlon-haynes-3bb010391/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="mobile-pill"
                href="/assets/Marlon-Haynes-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}