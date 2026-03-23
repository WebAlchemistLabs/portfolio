import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validateForm() {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Please enter a message.";

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    console.log("Portfolio contact form submitted:", form);
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <section className="container contact-page">
      <div className="contact-shell">
        <aside className="contact-left">
          <p className="eyebrow">Contact</p>
            <h1>Work With Web Alchemist</h1>
          <p className="contact-text">
            Web Alchemist is open to software development, web development,
            technical support, UX-related, and project-based opportunities.
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
        </aside>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2>Send a Message</h2>

          {submitted && (
            <p className="success-message">
              Your message was submitted successfully.
            </p>
          )}

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span className="form-error">{errors.firstName}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <span className="form-error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone (Optional)</label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="7"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          <button type="submit" className="primary-btn form-submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}