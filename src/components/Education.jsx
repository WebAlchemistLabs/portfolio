export default function Education() {
  const educationItems = [
    {
      title: "Software Engineering Technician Diploma",
      institution: "Centennial College • Toronto, Ontario",
      status: "Completed • December 2025",
      description:
        "Completed a software engineering program centered on application development, software architecture, and practical implementation. Built strong hands on experience across programming, databases, testing, and collaborative delivery.",
    },
    {
      title: "Google UX Design Professional Certificate",
      institution: "Google / Coursera • Remote",
      status: "Completed • July 2025",
      description:
        "Completed a UX program focused on user research, interface design, prototyping, and usability testing. Applied UX principles to improve product structure, navigation flow, and clarity across digital experiences.",
    },
    {
      title: "Software Engineering Technology Advanced Diploma",
      institution: "Centennial College • Toronto, Ontario",
      status: "Currently Enrolled",
      description:
        "Currently advancing technical depth in software engineering technology with emphasis on scalable systems, structured software design, and production quality application development.",
    },
  ];

  return (
    <section className="container education-page">
      <div className="education-shell">
        <aside className="education-left">
          <p className="eyebrow">Education</p>
          <h1>Academic Foundation and Professional Growth</h1>
          <p className="education-intro">
            My education path combines software engineering and UX training with
            practical application work. It supports my ability to build reliable
            systems that balance product quality, business value, and user experience.
          </p>

          <div className="education-overview-list">
            <span>Software Engineering</span>
            <span>Application Architecture</span>
            <span>UX and Product Thinking</span>
            <span>Business Workflow Design</span>
          </div>

          <div className="education-actions">
            <a
              href="/assets/Marlon-Haynes-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              View Resume
            </a>
          </div>
        </aside>

        <div className="education-right">
          <div className="education-track">
            {educationItems.map((item) => (
              <article className="education-entry" key={item.title}>
                <div className="education-entry-marker" aria-hidden="true" />
                <div className="education-entry-body">
                  <h3>{item.title}</h3>
                  <p className="education-school">{item.institution}</p>
                  <span className="education-time">{item.status}</span>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}