export type Project = {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  problem: string
  solution: string
  impact: string
  tags: string[]
  link?: string
  github?: string
  image?: string
  featured: boolean
  badge?: string
}

export const projects: Project[] = [
  {
    id: 'clientpulse',
    slug: 'clientpulse',
    title: 'ClientPulse',
    tagline: 'Multi-client SaaS reporting platform',
    description:
      'A premium SaaS platform built for agencies and freelancers to manage client reporting, analytics dashboards, and performance tracking in one place.',
    problem:
      'Agencies spend hours manually compiling client reports across disconnected tools. No single product provides a clean, real-time view of all client performance data.',
    solution:
      'Built a multi-tenant SaaS dashboard with Firebase Auth, Firestore real-time listeners, role-based access for admins and clients, custom reporting modules, and data visualization charts.',
    impact:
      'Agencies can deliver live client dashboards instead of static PDFs, reducing reporting time by hours each week and improving client retention through full transparency.',
    tags: ['React', 'Next.js', 'Firebase', 'Firestore', 'Tailwind CSS', 'TypeScript'],
    link: 'https://clientpulse-six.vercel.app/login',
    github: 'https://github.com/WebAlchemistLabs/CLIENTPULSE',
    image: '/clientpulse1.png',
    featured: true,
    badge: 'SaaS',
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'E-Commerce Platform',
    tagline: 'Full-stack store with Stripe payments',
    description:
      'A fully functional e-commerce web application with product listings, cart management, user authentication, and live Stripe checkout — production-ready from day one.',
    problem:
      'Most e-commerce demos stop at the UI layer. Building a real store requires auth, a live database, payment processing, webhooks, and order management — all connected.',
    solution:
      'Built end-to-end with Firebase Auth for accounts, Firestore for product and order data, and Stripe for secure checkout with webhook-based order confirmation.',
    impact:
      'Proves ability to integrate payment APIs, handle sensitive data securely, and deliver a complete full-stack application that a real business could use immediately.',
    tags: ['React', 'Firebase', 'Stripe', 'Node.js', 'Tailwind CSS'],
    link: 'https://webalchemistlabs-ecommerce.vercel.app/',
    github: 'https://github.com/WebAlchemistLabs/web-alchemist-labs-ecommerce',
    image: '/ecommerce.png',
    featured: true,
    badge: 'Full-Stack',
  },
  {
    id: 'help-desk',
    slug: 'help-desk',
    title: 'Help Desk System',
    tagline: 'IT support ticket management platform',
    description:
      'A web-based IT ticketing system with user submission, agent dashboards, ticket lifecycle management, priority tagging, and status tracking built for real support teams.',
    problem:
      'Small IT teams rely on email threads and spreadsheets to manage support requests, leading to slow resolution times, lost tickets, and zero visibility into agent performance.',
    solution:
      'Built a full ticket management system with submission forms, an agent command dashboard, ticket status workflow from open through to resolved, and priority classification.',
    impact:
      'Directly targets IT support and help desk roles, demonstrating a solid understanding of real enterprise tooling and the ability to build internal productivity systems.',
    tags: ['React', 'MySQL', 'Node.js', 'REST API', 'Tailwind CSS'],
    link: 'https://helpdesk-pro-scrr.onrender.com/',
    github: 'https://github.com/WebAlchemistLabs/helpdesk-pro',
    image: '/helpdesk.png',
    featured: true,
    badge: 'IT / Support',
  },
  {
    id: 'booking',
    slug: 'booking',
    title: 'NorBec Landscaping',
    tagline: 'Online booking platform for service-based businesses',
    description:
      'A production-ready booking platform built for a local landscaping company, enabling customers to browse services and submit booking requests online.',
    problem:
      'The business had no online presence and relied entirely on referrals. Potential customers searching for landscaping services could not find them, resulting in lost revenue.',
    solution:
      'Designed and developed a mobile-first, SEO-optimised website with a service catalogue, a structured booking request form, and a clean visual identity aligned with the company brand.',
    impact:
      'Delivered a client-ready product that established the business online, gave customers a clear path to book services, and demonstrated the ability to translate a real business need into a functional digital product.',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design', 'SEO', 'Vercel'],
    link: 'https://norbec-landscaping-website.onrender.com',
    github: 'https://github.com/WebAlchemistLabs/norbec-landscaping-website',
    image: '/booking.png',
    featured: true,
    badge: 'Client Work',
  },
]