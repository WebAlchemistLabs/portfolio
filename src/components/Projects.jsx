import { useState } from "react";
import ProjectInsightsOverlay from "./ProjectInsightsOverlay";
import SystemViewer from "./SystemViewer";

const projects = [
  {
    id: "ecommerce-workflow",
    title: "Web Alchemist Labs E-commerce",
    thumbnailImage: {
      src: "/assets/ecommerce/ecommerce.jpg",
      title: "Storefront Experience",
    },
    summary:
      "A full e-commerce system designed to simulate a real online store, including product management, shopping flow, authentication, payment integration, and automated order communication.",
    tech: ["React", "Firebase", "Stripe", "Firestore", "Authentication", "Zapier"],
    techStack: [
      { category: "Frontend", tools: ["React", "Vite"] },
      { category: "Backend", tools: ["Firebase"] },
      { category: "Databases", tools: ["Firestore"] },
      { category: "Payments", tools: ["Stripe"] },
      { category: "Authentication", tools: ["Firebase Auth"] },
      { category: "Automation", tools: ["Zapier", "Order Email Notifications"] },
    ],
    role:
      "Built a complete storefront experience including product browsing, cart functionality, user authentication, payment processing, and automated order email delivery, focusing on usability, structure, and real-world application flow.",
    problem:
      "This project demonstrates how modern e-commerce platforms handle product interaction, user sessions, secure payments, and automated communication, showcasing the ability to build scalable, real world digital commerce systems.",
    demo: "https://webalchemistlabs-ecommerce.vercel.app",
    github: "https://github.com/WebAlchemistLabs/web-alchemist-labs-ecommerce",
    workflowButtonText: "View System Architecture",
    architectureFlow: [
      {
        title: "User",
        subtitle: "Customer enters storefront",
        detail: "Users browse products, select items, and move through a guided purchase experience.",
      },
      {
        title: "Storefront UI",
        subtitle: "Frontend layer",
        detail: "React and Vite power product views, cart controls, and checkout interface routing.",
      },
      {
        title: "Checkout Logic",
        subtitle: "Application processing",
        detail: "Cart totals, order validation, and payment preparation are handled before transaction submission.",
      },
      {
        title: "Stripe",
        subtitle: "Payment service",
        detail: "Secure payment capture and confirmation are processed through Stripe checkout integration.",
      },
      {
        title: "Firebase, Firestore, and Zapier",
        subtitle: "Backend, data, and automation",
        detail: "Order records and product data are stored for retrieval while Zapier triggers automated customer order emails after checkout.",
      },
      {
        title: "Admin Dashboard",
        subtitle: "Business outcome",
        detail: "Teams track and manage orders from a central panel to improve fulfillment and operations.",
      },
    ],
    businessImpact: {
      problem: "Manual order handling and disconnected tools slow operations, delay communication, and create inconsistent customer experiences.",
      solution: "This project combines storefront UX, checkout logic, payments, operational controls, and automated order messaging in one system.",
      value: "It reduces manual processing and gives teams a reliable transaction workflow from purchase to fulfillment and follow up.",
      useCase: "A growing commerce business can use this architecture to scale sales with clearer internal control.",
    },
    microDemo: {
      title: "E-commerce guided product walkthrough",
      summary: "Click each step to simulate the purchase and operations workflow.",
      steps: [
        {
          title: "Try checkout flow",
          preview: "See product to payment journey",
          detail: "A customer moves from cart review into secure payment confirmation and then receives an automated order email after checkout.",
          outcome: "Result: faster checkout completion, clearer transaction visibility, and immediate customer confirmation.",
        },
        {
          title: "View order management",
          preview: "Track order processing",
          detail: "Operations teams review incoming orders, update status, and coordinate fulfillment from one panel.",
          outcome: "Result: less manual coordination and improved response time.",
        },
        {
          title: "Explore admin workflow",
          preview: "Review control points",
          detail: "Admin tools provide oversight on product and order data to maintain quality and consistency.",
          outcome: "Result: stronger operational control for daily commerce workflows.",
        },
      ],
    },
    galleryImages: [
      {
        src: "/assets/ecommerce/ecommerce.jpg",
        title: "Storefront Experience",
        context: [
          "Shows the customer-facing storefront and product discovery flow.",
          "Highlights a clean shopping experience optimized for conversions.",
        ],
      },
      {
        src: "/assets/ecommerce/Checkout form.jpg",
        title: "Stripe Checkout Integration",
        context: [
          "Demonstrates secure payment capture through Stripe checkout.",
          "Validates cart totals and customer billing details in one flow.",
        ],
      },
      {
        src: "/assets/ecommerce/Order Success.jpg",
        title: "Order Confirmation",
        context: [
          "Confirms successful payment and order completion to the customer.",
          "Provides clear next-step messaging after checkout.",
        ],
      },
      {
        src: "/assets/ecommerce/Admin Dashboard.jpg",
        title: "Admin Dashboard",
        context: [
          "Gives operations visibility into store activity and order volume.",
          "Centralizes management actions for faster admin workflows.",
        ],
      },
      {
        src: "/assets/ecommerce/Order Management System.jpg",
        title: "Order Management",
        context: [
          "Tracks order lifecycle and fulfillment status in one interface.",
          "Supports efficient sorting and handling of incoming purchases.",
        ],
      },
      {
        src: "/assets/ecommerce/Order Detail page.jpg",
        title: "Order Detail View",
        context: [
          "Displays complete order metadata for support and operations.",
          "Enables fast troubleshooting with line-item and customer context.",
        ],
      },
      {
        src: "/assets/ecommerce/Product Management.jpg",
        title: "Product Management",
        context: [
          "Shows the internal tool for adding and updating product records.",
          "Improves merchandising speed with a structured admin interface.",
        ],
      },
      {
        src: "/assets/ecommerce/Firebase Database.jpg",
        title: "Firestore Database",
        context: [
          "Illustrates cloud data storage backing orders and product records.",
          "Supports real-time updates and scalable e-commerce data access.",
        ],
      },
    ],
    workflowGridImages: [
      {
        src: "/assets/ecommerce/Checkout form.jpg",
        title: "Stripe Checkout Integration",
        galleryIndex: 1,
      },
      {
        src: "/assets/ecommerce/Order Success.jpg",
        title: "Order Confirmation",
        galleryIndex: 2,
      },
      {
        src: "/assets/ecommerce/Admin Dashboard.jpg",
        title: "Admin Dashboard",
        galleryIndex: 3,
      },
      {
        src: "/assets/ecommerce/Order Management System.jpg",
        title: "Order Management",
        galleryIndex: 4,
      },
      {
        src: "/assets/ecommerce/Order Detail page.jpg",
        title: "Order Detail View",
        galleryIndex: 5,
      },
      {
        src: "/assets/ecommerce/Product Management.jpg",
        title: "Product Management",
        galleryIndex: 6,
      },
      {
        src: "/assets/ecommerce/Firebase Database.jpg",
        title: "Firestore Database",
        galleryIndex: 7,
      },
    ],
  },
  {
    id: "norbec-workflow",
    title: "NorBec Landscaping Booking Site",
    thumbnailImage: {
      src: "/assets/norbec booking/norbec.jpg",
      title: "Main NorBec Project Thumbnail",
    },
    summary:
      "A business focused booking and lead generation system designed to streamline customer inquiries, automate scheduling, and improve conversion from website traffic to booked services.",
    tech: ["React", "Vite", "Calendly", "Zapier", "Google Sheets"],
    techStack: [
      { category: "Frontend", tools: ["React", "Vite"] },
      { category: "Scheduling", tools: ["Calendly", "Google Calendar"] },
      { category: "Automation", tools: ["Zapier", "Gmail"] },
      { category: "Databases", tools: ["Google Sheets"] },
      { category: "Workflow", tools: ["Booking Pipeline", "Lead Capture"] },
    ],
    role:
      "Designed and developed a responsive frontend experience integrated with scheduling and automation tools, creating a seamless flow from user interaction to booking confirmation.",
    problem:
      "Many service based businesses lose potential customers due to unclear navigation and manual booking processes. This system demonstrates how structured UI, automation, and integrations can convert visitors into actual leads and bookings efficiently.",
    demo: "https://norbec-landscaping-website.onrender.com/",
    github: "https://github.com/WebAlchemistLabs/norbec-landscaping-website",
    workflowButtonText: "View System Setup",
    architectureFlow: [
      {
        title: "User",
        subtitle: "Visitor starts booking",
        detail: "A customer enters the booking page and submits request details through a guided form.",
      },
      {
        title: "Booking Page",
        subtitle: "Frontend interaction",
        detail: "The interface captures lead intent and routes users directly into scheduling steps.",
      },
      {
        title: "Calendly",
        subtitle: "Scheduling service",
        detail: "Calendly handles date and time selection based on business availability.",
      },
      {
        title: "Google Services",
        subtitle: "Calendar and record handling",
        detail: "Google Calendar and Google Sheets receive booking details to maintain scheduling and operations logs.",
      },
      {
        title: "Zapier and Gmail",
        subtitle: "Automation and communication",
        detail: "Automations trigger follow ups, notifications, and workflow handoffs with minimal manual work.",
      },
      {
        title: "Business Workflow",
        subtitle: "Outcome",
        detail: "The team receives structured booking data for faster response and smoother service delivery.",
      },
    ],
    businessImpact: {
      problem: "Manual scheduling and follow up steps often delay responses and reduce conversion from incoming leads.",
      solution: "This system connects intake, scheduling, and automation into one consistent booking workflow.",
      value: "It removes repetitive admin tasks while improving lead response speed and appointment reliability.",
      useCase: "A local service business can convert more inquiries into confirmed bookings with less manual effort.",
    },
    microDemo: {
      title: "Booking workflow guided walkthrough",
      summary: "Select a demo step to simulate how users move through booking and automation.",
      steps: [
        {
          title: "Try booking journey",
          preview: "Lead capture to schedule request",
          detail: "A customer submits booking details and progresses to time selection without friction.",
          outcome: "Result: higher lead completion and clearer customer intent.",
        },
        {
          title: "See automation flow",
          preview: "Scheduling to system sync",
          detail: "Booking events sync into calendar and data records while automation triggers communication steps.",
          outcome: "Result: less manual processing and more reliable handoff.",
        },
        {
          title: "Explore scheduling workflow",
          preview: "Operations visibility",
          detail: "The business tracks appointments and follow up actions through integrated workflow tools.",
          outcome: "Result: faster response and smoother day to day scheduling operations.",
        },
      ],
    },
    galleryImages: [
      {
        src: "/assets/norbec booking/norbec.jpg",
        title: "NorBec Booking Overview",
        context: [
          "Introduces the booking-first website structure for lead capture.",
          "Sets the context for the full automation workflow shown next.",
        ],
      },
      {
        src: "/assets/norbec booking/Live site booking 1.png",
        title: "Live Booking Form",
        context: [
          "Shows the form customers use to submit service requests.",
          "Captures booking intent with a clear, guided entry flow.",
        ],
      },
      {
        src: "/assets/norbec booking/Live site booking.png",
        title: "Calendly Date Selection",
        context: [
          "Demonstrates self-serve scheduling directly from the booking funnel.",
          "Reduces back-and-forth by allowing users to select available times.",
        ],
      },
      {
        src: "/assets/norbec booking/Google calendar.png",
        title: "Google Calendar Event Created",
        context: [
          "Confirms that bookings automatically create calendar events.",
          "Keeps service availability and operations synchronized in real time.",
        ],
      },
      {
        src: "/assets/norbec booking/Sheets.png",
        title: "Google Sheets Booking Record",
        context: [
          "Stores customer booking data in a structured operations log.",
          "Supports reporting and follow-up without manual data entry.",
        ],
      },
      {
        src: "/assets/norbec booking/Zapier workflow.png",
        title: "Zapier Workflow Automation",
        context: [
          "Automates data flow between form, calendar, and sheet systems.",
          "Eliminates repetitive admin tasks in the booking pipeline.",
        ],
      },
    ],
    workflowGridImages: [
      {
        src: "/assets/norbec booking/Live site booking 1.png",
        title: "Live Booking Form",
        galleryIndex: 1,
      },
      {
        src: "/assets/norbec booking/Live site booking.png",
        title: "Calendly Date Selection",
        galleryIndex: 2,
      },
      {
        src: "/assets/norbec booking/Google calendar.png",
        title: "Google Calendar Event Created",
        galleryIndex: 3,
      },
      {
        src: "/assets/norbec booking/Sheets.png",
        title: "Google Sheets Booking Record",
        galleryIndex: 4,
      },
      {
        src: "/assets/norbec booking/Zapier workflow.png",
        title: "Zapier Workflow Automation",
        galleryIndex: 5,
      },
    ],
  },
  {
    id: "helpdesk-project",
    title: "IT Help Desk Ticket System",
    thumbnailImage: {
      src: "/assets/helpdesk.jpg",
      title: "IT Help Desk Ticket System",
    },
    summary:
      "An internal help desk system designed to manage support workflows through structured ticket creation, priority tracking, status updates, and admin-side management.",
    tech: [
      "React",
      "Firebase",
      "Authentication",
      "Ticket Management",
      "Dashboard",
    ],
    techStack: [
      { category: "Frontend", tools: ["React"] },
      { category: "Backend", tools: ["Firebase"] },
      { category: "Databases", tools: ["Realtime Data"] },
      { category: "Authentication", tools: ["Firebase Auth"] },
      { category: "Workflow", tools: ["Ticket Management", "Dashboard"] },
    ],
    role:
      "Designed and built a ticket based workflow system including user submission, status tracking, priority handling, and admin dashboard functionality for managing and resolving support requests.",
    problem:
      "Organizations rely on structured support systems to manage internal issues efficiently. This project demonstrates how ticket workflows, status visibility, and role-based management can improve communication, organization, and issue resolution.",
    demo: "#",
    github: "#",
    architectureFlow: [
      {
        title: "User",
        subtitle: "Issue submission",
        detail: "Staff submit support requests with structured ticket details and priority indicators.",
      },
      {
        title: "Support UI",
        subtitle: "Frontend ticket flow",
        detail: "The interface presents ticket creation, status updates, and communication history.",
      },
      {
        title: "Application Logic",
        subtitle: "Routing and priority",
        detail: "Ticket state changes and assignment logic keep requests moving through resolution stages.",
      },
      {
        title: "Firebase",
        subtitle: "Data persistence",
        detail: "Ticket records are stored and synchronized so teams can review current and historical issues.",
      },
      {
        title: "Dashboard",
        subtitle: "Operations layer",
        detail: "Support leads monitor queues, workload, and turnaround metrics from a central dashboard.",
      },
      {
        title: "Business Outcome",
        subtitle: "Reliable support process",
        detail: "Internal teams resolve problems faster with stronger accountability and tracking.",
      },
    ],
    businessImpact: {
      problem: "Unstructured support communication leads to delays, duplicate effort, and limited ticket visibility.",
      solution: "The system centralizes ticket intake, tracking, and admin control in one workflow.",
      value: "It improves response consistency and reduces operational friction across support requests.",
      useCase: "An internal IT team can standardize issue management and improve service quality at scale.",
    },
    microDemo: {
      title: "Support system guided walkthrough",
      summary: "Use the steps below to simulate core ticket workflow interactions.",
      steps: [
        {
          title: "Create ticket",
          preview: "Submit issue and priority",
          detail: "A user logs a request with complete context so support teams can triage accurately.",
          outcome: "Result: clearer issue intake and faster first response.",
        },
        {
          title: "Track status",
          preview: "Follow issue lifecycle",
          detail: "Support teams update ticket progress so stakeholders always know current status.",
          outcome: "Result: improved transparency and fewer communication gaps.",
        },
        {
          title: "Review dashboard",
          preview: "Monitor support operations",
          detail: "Admins evaluate queue load and close tickets through structured operational controls.",
          outcome: "Result: better workflow governance and more consistent resolution quality.",
        },
      ],
    },
    galleryImages: [],
    workflowGridImages: [],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [insightsProject, setInsightsProject] = useState(null);

  function openGallery(project, index = 0) {
    if (!project.galleryImages || project.galleryImages.length === 0) return;
    setActiveProject(project);
    setActiveImageIndex(index);
  }

  function closeGallery() {
    setActiveProject(null);
    setActiveImageIndex(0);
  }

  function showNextImage() {
    if (!activeProject || activeProject.galleryImages.length === 0) return;
    setActiveImageIndex((prev) => (prev + 1) % activeProject.galleryImages.length);
  }

  function showPrevImage() {
    if (!activeProject || activeProject.galleryImages.length === 0) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? activeProject.galleryImages.length - 1 : prev - 1
    );
  }

  function openInsights(project) {
    setInsightsProject(project);
  }

  function closeInsights() {
    setInsightsProject(null);
  }

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
                  {project.galleryImages.length > 0 ? (
                    <button
                      type="button"
                      className="project-showcase-image-button"
                      onClick={() => openGallery(project, 0)}
                      aria-label={`Open ${project.title} gallery`}
                    >
                      <img
                        src={project.thumbnailImage.src}
                        alt={project.thumbnailImage.title}
                        className="project-showcase-image"
                      />
                    </button>
                  ) : (
                    <img
                      src={project.thumbnailImage.src}
                      alt={project.thumbnailImage.title}
                      className="project-showcase-image"
                    />
                  )}
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

                    {project.galleryImages.length > 0 && (
                      <button
                        type="button"
                        className="secondary-btn"
                        onClick={() => openGallery(project, 0)}
                      >
                        {project.workflowButtonText || "View System Setup"}
                      </button>
                    )}

                    <button
                      type="button"
                      className="secondary-btn"
                      onClick={() => openInsights(project)}
                    >
                      View Project Insights
                    </button>
                  </div>
                </div>
              </div>

              {project.workflowGridImages.length > 0 && (
                <div className="project-workflow-strip">
                  <div className="project-workflow-head">
                    <h3>System Workflow Screens</h3>
                    <p>Click any screen to enlarge and browse the full setup.</p>
                  </div>

                  <div className="project-gallery-preview">
                    {project.workflowGridImages.map((item) => (
                      <button
                        key={item.src}
                        type="button"
                        className="gallery-thumb-btn"
                        onClick={() => openGallery(project, item.galleryIndex)}
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

      <SystemViewer
        isOpen={Boolean(activeProject)}
        images={activeProject?.galleryImages || []}
        projectTitle={activeProject?.title || ""}
        techTags={activeProject?.tech || []}
        activeIndex={activeImageIndex}
        onClose={closeGallery}
        onNext={showNextImage}
        onPrev={showPrevImage}
      />

      <ProjectInsightsOverlay
        isOpen={Boolean(insightsProject)}
        project={insightsProject}
        onClose={closeInsights}
      />
    </>
  );
}