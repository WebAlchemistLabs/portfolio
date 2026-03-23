// src/components/Services.jsx
export default function Services() {
  const offerings = [
    {
      title: "Web Development",
      text: "Responsive websites and single-page apps using React, Vite, and Node.js.",
      img: "/assets/web.jpg",
    },
    {
      title: "General Programming",
      text: "Java, C#, and JavaScript programming for academic or freelance projects.",
      img: "/assets/prog.jpg",
    },
    {
      title: "Mobile Apps",
      text: "Cross-platform mobile apps using React Native and REST APIs.",
      img: "/assets/mobile.jpg",
    },
  ];

  return (
    <main className="container container--narrow">
      <header className="page-header">
        <h1>Services</h1>
        <p className="muted">
          Key services and skills I provide to help bring projects to life.
        </p>
      </header>

      <section className="offer-grid">
        {offerings.map((o, idx) => (
          <article className="offer-card" key={idx}>
            <div className="offer-image-wrap">
              <img
                src={o.img}
                alt={o.title}
                className="offer-image"
              />
            </div>
            <h3>{o.title}</h3>
            <p className="muted">{o.text}</p>
          </article>
        ))}
      </section>

      <style jsx="true">{`
        .offer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }
        .offer-card {
          background: #121621;
          border-radius: 12px;
          padding: 16px;
          text-align: center;
        }
        .offer-image-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 12px;
        }
        .offer-image {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          object-fit: cover;
        }
      `}</style>
    </main>
  );
}
