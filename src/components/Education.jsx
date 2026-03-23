export default function Education() {
  const educationItems = [
    {
      title: "Software Engineering Technician Diploma",
      school: "Centennial College",
      location: "Toronto, Ontario",
      timeframe: "Completed • December 2025",
      description:
        "Completed a hands-on software engineering program focused on building real-world applications using modern programming, web development, and database technologies. Developed experience in full-stack concepts, system design, debugging, testing, and project-based development while working on structured technical assignments and collaborative projects.",
    },
    {
      title: "Google UX Design Professional Certificate",
      school: "Google / Coursera",
      location: "Remote",
      timeframe: "Completed • July 2025",
      description:
        "Completed a professional UX design program focused on user-centered design, wireframing, prototyping, and usability testing. Gained practical experience designing interfaces, improving user flows, and applying UX principles to create intuitive and effective digital experiences.",
    },
    {
      title: "Software Engineering Technology Advanced Diploma",
      school: "Centennial College",
      location: "Toronto, Ontario",
      timeframe: "Currently Enrolled",
      description:
        "Currently enrolled in an advanced software engineering technology program focused on deeper technical development, system architecture, and real-world application building. Expanding skills in advanced programming, software design, and large-scale project development to prepare for professional software engineering roles.",
    },
  ];

  return (
    <section className="container education-page">
      <div className="section-head">
        <p className="eyebrow">Education</p>
        <h1>Education & Learning</h1>
        <p>
          My academic and self-driven learning background that supports my
          growth in software development, web development, UX, and technical
          project work.
        </p>
      </div>

      <div className="education-grid">
        {educationItems.map((item) => (
          <article className="education-card" key={item.title}>
            <h3>{item.title}</h3>
            <p className="education-school">
              {item.school} • {item.location}
            </p>
            <span className="education-time">{item.timeframe}</span>
            <p>{item.description}</p>
          </article>
        ))}
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
    </section>
  );
}