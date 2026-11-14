/**
 * Portfolio projects. Each project automatically gets its own page at /projects/<slug>/.
 * Order here = order on the website. Set `featured: true` to show a "Featured" badge.
 */
import type { ImageMetadata } from 'astro';

import wootix from '../assets/projects/wootix.png';
import wootixHome from '../assets/projects/wootix-home.png';
import inviteHome from '../assets/projects/invite-home.png';
import inviteMainStage from '../assets/projects/invite-main-stage.png';
import inviteCandiBentar from '../assets/projects/invite-candi-bentar.png';
import inviteGlassSlipper from '../assets/projects/invite-glass-slipper.png';
import inviteCherryDisco from '../assets/projects/invite-cherry-disco.png';
import inviteMuseum from '../assets/projects/invite-museum-after-dark.png';
import inviteMaroonSatin from '../assets/projects/invite-maroon-satin.png';
import equitekHome from '../assets/projects/equitek-home.png';
import emgHome from '../assets/projects/emgexpo-home.png';
import emgProduct from '../assets/projects/emgexpo-product.png';
import emgEvents from '../assets/projects/emgexpo-events.png';
import emgQuiz from '../assets/projects/emgexpo-quiz.png';
import ciberian from '../assets/projects/ciberian-landingpage.png';
import ciberianDash from '../assets/projects/cibarian-dashboard.png';
import gnet from '../assets/projects/gnet-product-page.png';
import gbjCover from '../assets/projects/gbj-1.jpg';
import gbj2 from '../assets/projects/gbj-5.jpg';
import bukuaku from '../assets/projects/bukuaku.png';
import bukuaku2 from '../assets/projects/bukuaku-2.png';
import bukuaku3 from '../assets/projects/bukuaku-3.png';
import bukuakuMeet from '../assets/projects/meet-bukuaku.png';
import most from '../assets/projects/most.png';
import papierflieger from '../assets/projects/papierflieger.png';
import reactBcr from '../assets/projects/react-bcr.png';
import reactBcr1 from '../assets/projects/react-bcr-1.png';
import reactBcr2 from '../assets/projects/react-bcr-2.png';
import bcr from '../assets/projects/bcr.png';
import beniq from '../assets/projects/beniq.png';
import beniqLogin from '../assets/projects/beniq-login.png';
import beniqHome from '../assets/projects/beniq-home.png';
import beniqCart from '../assets/projects/beniq-cart.png';
import beniqCo from '../assets/projects/beniq-co.png';

export type Category = 'fullstack' | 'backend' | 'frontend';

export const categoryLabels: Record<Category, string> = {
  fullstack: 'Full-Stack',
  backend: 'Back-End',
  frontend: 'Front-End',
};

export type ProjectLink = { label: string; href: string; icon: string };

export type Project = {
  slug: string;
  title: string;
  /** One-line description shown on the card */
  tagline: string;
  category: Category;
  /** Short context: year, client, or project type */
  context: string;
  role: string;
  featured?: boolean;
  /** Cover image. Leave empty to show a styled placeholder with `icon`. */
  cover?: ImageMetadata;
  icon?: string;
  gallery?: { src: ImageMetadata; alt: string }[];
  stack: string[];
  links?: ProjectLink[];
  overview: string;
  highlights?: string[];
  metrics?: { value: string; label: string }[];
  note?: string;
};

const live = (href: string): ProjectLink => ({ label: 'Live site', href, icon: 'bx:link-external' });
const repo = (href: string, label = 'Source code'): ProjectLink => ({ label, href, icon: 'bx:bxl-github' });

export const projects: Project[] = [
  {
    slug: 'wootix',
    title: 'Wootix Ticketing',
    tagline: 'Production event-ticketing API with 5 payment gateways, a real-time waiting room, and financial reporting.',
    category: 'backend',
    context: '2024 – Present · Wootix',
    role: 'Back-End Developer — core API',
    featured: true,
    cover: wootixHome,
    gallery: [
      { src: wootixHome, alt: 'Wootix ticketing homepage with new events' },
      { src: wootix, alt: 'Wootix community events listing' },
    ],
    stack: ['Node.js', 'Express', 'TypeScript', 'MySQL', 'Socket.IO', 'Next.js', 'GitHub Actions', 'Grafana', 'Jest', 'GA4', 'Search Console'],
    links: [live('https://www.wootix.id/')],
    metrics: [
      { value: '400+', label: 'events' },
      { value: '9.7K+', label: 'registered users' },
      { value: '59K+', label: 'unique ticket buyers' },
      { value: '65K+', label: 'transactions processed' },
    ],
    overview:
      'Wootix is a live event-ticketing platform where every request can be someone’s payment. I engineer its core API — the services behind events, orders, payments, settlements, and ticket check-in — and the back-office reports the operations team relies on every day.',
    highlights: [
      'Engineered the core ticketing API (events, orders, payments, ticket verification) with Node.js, TypeScript, and MySQL.',
      'Integrated <b>5 Indonesian payment gateways</b> processing <b>65,000+ transactions</b>, including direct <b>BCA Virtual Account (SNAP API)</b>, refunds, settlements, and withdrawals.',
      'Built a <b>real-time virtual waiting room</b> for high-demand sales with Next.js and Socket.IO — buyers see their live queue position and are admitted to checkout in order.',
      'Delivered <b>reporting modules</b> for sales, finance, settlements, and ticket usage in the API and the Next.js back office.',
      'Added <b>audit logs</b> so every critical data change is traceable — making support and debugging much faster.',
      'Migrated production servers to a new cloud provider and improved reliability with MySQL connection pooling, <b>Grafana Cloud</b> monitoring, GitHub Actions deployment, and Jest unit tests.',
      'Beyond the back end: connected <b>GA4</b> and <b>Google Search Console</b>, and handled SEO — structured data for events and the organization, sitemap, canonical, and Open Graph tags.',
    ],
    note: 'Some technical details are simplified here for clarity and privacy.',
  },
  {
    slug: 'wootix-invitation',
    title: 'Wootix Invitation',
    tagline: 'Digital invitations with RSVP, QR check-in, WhatsApp chatbot, and guest management for weddings and events.',
    category: 'fullstack',
    context: 'Ongoing · Wootix',
    role: 'Full-Stack Developer — main contributor',
    featured: true,
    cover: inviteHome,
    gallery: [
      { src: inviteHome, alt: 'Wootix Invitation landing page' },
      { src: inviteMainStage, alt: 'Main Stage — corporate gala invitation with a VIP lanyard pass' },
      { src: inviteCandiBentar, alt: 'Candi Bentar — Balinese wedding invitation' },
      { src: inviteGlassSlipper, alt: 'Glass Slipper — fairytale castle wedding invitation' },
      { src: inviteCherryDisco, alt: 'Cherry Disco — sweet seventeen party invitation' },
      { src: inviteMuseum, alt: 'Museum After Dark — evening wedding invitation' },
      { src: inviteMaroonSatin, alt: 'Maroon Satin — wax-sealed envelope wedding invitation' },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Zustand', 'Tailwind CSS', 'Node.js', 'WhatsApp Business API'],
    links: [live('https://invite.wootix.id/')],
    metrics: [
      { value: '13', label: 'of 24 live designs built by me' },
      { value: '2', label: 'major versions shipped' },
      { value: '99', label: 'Lighthouse performance (desktop)' },
      { value: '100', label: 'Lighthouse SEO' },
    ],
    overview:
      'Wootix Invitation takes care of guests from start to finish: invitations sent over WhatsApp, RSVPs that collect themselves, QR check-in at the door, and attendance reports. It’s used for weddings, engagements, birthdays, graduations, and corporate events. I worked across the whole product over two major versions — the landing page, the invitation template system and many of its designs, the organizer dashboard, and the API behind it.',
    highlights: [
      'Built the <b>v2 invitation template system</b>: one shared content schema, a template registry and renderer, and a live template editor — so hosts can switch designs without losing what they wrote.',
      'Designed and built <b>13 of the 24 invitation designs</b> in the live catalog — from a Balinese temple gate and a fairytale castle to a corporate VIP pass — and contributed to several others.',
      'Built the product <b>landing page</b> and optimized it for speed and search — Lighthouse <b>99 Performance</b> (desktop), <b>100 SEO</b>, 100 Best Practices, and 96 Accessibility — with GA4 tracking and FAQ structured data.',
      '<b>RSVP & guest management</b> with custom guest fields, guestbook, wishes, and Excel/PDF exports.',
      '<b>QR-based check-in</b> with a check-in page builder, seating plans, label printing, and check-in reports.',
      '<b>Lucky draws</b> with a configurable spin wheel and doorprize reports, plus <b>digital gift (e-angpao) payments</b>.',
      'A <b>WhatsApp RSVP chatbot</b> powered by a visual, dynamic flow engine, plus scheduled broadcasts with retry queues and rate-limited OTP across multiple providers.',
    ],
  },
  {
    slug: 'equitek-lms',
    title: 'Equitek LMS',
    tagline: 'Paid-course LMS for business and strategy classes — assessments, subscriptions, and protected content.',
    category: 'fullstack',
    context: '2025 – Present · PT Aero Technology Persada',
    role: 'Freelance Full-Stack Developer — end to end',
    featured: true,
    cover: equitekHome,
    gallery: [{ src: equitekHome, alt: 'Equitek LMS landing page with free class previews' }],
    stack: ['Laravel', 'PHP', 'MySQL', 'Materialize CSS', 'Xendit', 'FPDF', 'Google OAuth'],
    links: [live('https://learning.equitek.id/')],
    overview:
      'Equitek needed an LMS for its business and strategy classes. Instead of starting from zero, we used the Ciberian Academy codebase I had built earlier as the foundation, then developed it into a separate platform for Equitek: a public landing page with free class previews, a lighter UI, and the assessment, billing, and content-protection features below.',
    highlights: [
      '<b>Course management</b> with sections, videos, PDF/Excel materials, progress tracking, intensive-class booking and scheduling.',
      'An <b>assessment module</b> with question banks, exam blueprints, scheduled exams, quizzes, competency-based assessments, certificates, and surveys.',
      '<b>Subscription plans & billing</b>: automated invoice and expiry emails, payment status checks, manual payments, and billing exports.',
      '<b>Content protection</b> for paid videos and materials: temporary signed URLs, watermarking, and blocked download and print.',
      'A <b>sales portal with referral tracking</b> and a sales dashboard.',
    ],
  },
  {
    slug: 'ciberian-academy',
    title: 'Ciberian Academy',
    tagline: 'Online course platform for digital skills — the LMS codebase that later became the foundation for Equitek.',
    category: 'fullstack',
    context: '2025 · PT Aero Technology Persada',
    role: 'Freelance Full-Stack Developer',
    cover: ciberian,
    gallery: [
      { src: ciberian, alt: 'Ciberian Academy landing page' },
      { src: ciberianDash, alt: 'Ciberian Academy student dashboard' },
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Materialize CSS'],
    links: [live('https://ciberian-id.com/')],
    overview:
      'Ciberian Academy is an online course and intensive-class platform for digital skills. As the freelance full-stack developer, I built its core and structured it so new features could be added without a rewrite — which paid off when its codebase became the starting point for Equitek LMS.',
    highlights: [
      'Developed core modules: user management, course management, enrollments, and access control.',
      'Designed a relational MySQL schema that supports modular course content and future growth.',
      'Built data-driven pages and forms on top of a Materialize CSS template.',
      'Worked directly with stakeholders to turn requirements into structured, maintainable features.',
    ],
    note: 'Still live as its own platform, with a small user base.',
  },
  {
    slug: 'emg-expo',
    title: 'EMG Expo',
    tagline: 'Always-on virtual industrial exhibition with a product catalog, quotation requests, quizzes, and a chatbot.',
    category: 'fullstack',
    context: '2025 – 2026 · Freelance',
    role: 'Full-Stack Developer — main contributor',
    featured: true,
    cover: emgHome,
    gallery: [
      { src: emgHome, alt: 'EMG Expo virtual exhibition homepage' },
      { src: emgProduct, alt: 'EMG Expo product page' },
      { src: emgQuiz, alt: 'EMG Expo quiz hub with reward vault' },
      { src: emgEvents, alt: 'EMG Expo events and webinar page' },
    ],
    stack: ['Laravel 12', 'Livewire', 'Tailwind CSS', 'MySQL', 'Editor.js', 'PhpSpreadsheet', 'GitHub Actions'],
    links: [live('https://emgexpo.id/')],
    overview:
      'A virtual exhibition for Expand Market Gemilang, an industrial machinery importer. Instead of visiting a physical booth, buyers can browse compressors, pumps, sensors, and other equipment 24/7, request quotations, join webinars, and take technical quizzes. I built the public site and the admin CMS behind it.',
    highlights: [
      '<b>Product catalog</b> with categories, suppliers, tags, and an explorer with filters and pagination.',
      '<b>Quotation & contact requests</b> with email forwarding (including attachments) and Excel export for the sales team.',
      '<b>Quiz hub</b> that unlocks exclusive explanations and resources after completion, plus submission reports.',
      '<b>Events & webinars</b> with registration, an event archive, and registration reports.',
      'An in-site <b>chatbot</b> with a versioned flow builder (nodes, options, triggers) and conversation reports.',
      'Block-based <b>CMS</b> (Editor.js) for pages, products, and events, a document manager, admin audit logs, and daily traffic stats.',
    ],
  },
  {
    slug: 'geprek-bang-jess',
    title: 'Geprek Bang Jess PWA',
    tagline: 'Installable sales-recording app for a local restaurant — my undergraduate thesis project.',
    category: 'fullstack',
    context: '2024 · Thesis',
    role: 'Solo Full-Stack Developer',
    cover: gbjCover,
    gallery: [
      { src: gbjCover, alt: 'Geprek Bang Jess app — dashboard and new sale screen' },
      { src: gbj2, alt: 'Geprek Bang Jess app screens' },
    ],
    stack: ['Vue.js', 'Vite', 'Pinia', 'Vuetify', 'PWA', 'Express.js', 'PostgreSQL', 'ExcelJS'],
    links: [live('https://geprekbangjess.vercel.app')],
    overview:
      'A Progressive Web App that replaces paper sales notes for Geprek Bang Jess, a local fried-chicken restaurant. Staff can install it on their phones, record sales and expenses, and export reports. For my thesis, I designed a fuzzy-logic approach to cache management so the app stays fast and usable on unstable connections.',
    highlights: [
      'Sales, expenses, products & categories — full CRUD with search.',
      'Daily sales and expense reports with <b>one-click Excel export</b>.',
      'Fuzzy-based caching strategy that decides what to keep offline (thesis research).',
      'Authentication with email verification and password reset.',
    ],
  },
  {
    slug: 'gnet-indonesia',
    title: 'GNET Indonesia',
    tagline: 'Company website revamp with faster page loads through image optimization and caching.',
    category: 'fullstack',
    context: '2023 – 2024 · via PT Incubus Cyberindo Persada',
    role: 'Freelance Web Developer',
    cover: gnet,
    gallery: [{ src: gnet, alt: 'GNET Indonesia product page' }],
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    links: [live('https://gnetindonesia.com')],
    overview:
      'A revamp of the GNET Indonesia company website, delivered through a development partner. I worked on the Laravel codebase and focused on making the new site noticeably faster.',
    highlights: [
      'Contributed to building revamped pages in Laravel and Bootstrap.',
      'Improved load performance through image optimization and caching.',
    ],
  },
  {
    slug: 'bukuaku',
    title: 'BukuAku',
    tagline: 'Promo/trial code and event features for a digital-book platform, built during my Suitmedia internship.',
    category: 'frontend',
    context: '2023 · Suitmedia internship',
    role: 'Front-End Developer Intern',
    cover: bukuaku,
    gallery: [
      { src: bukuaku, alt: 'BukuAku homepage' },
      { src: bukuaku2, alt: 'BukuAku promo feature' },
      { src: bukuaku3, alt: 'BukuAku event page' },
      { src: bukuakuMeet, alt: 'BukuAku meeting with the team' },
    ],
    stack: ['Nuxt.js', 'Vue', 'SASS', 'jQuery', 'Vuelidate', 'vue-slick-carousel'],
    links: [live('https://bukuaku.id/')],
    overview:
      'A client project at Suitmedia. I shipped new user-facing features end to end on the front end — from UI slicing to API integration — with a system analyst testing every feature before release.',
    highlights: [
      'Built the <b>event</b> and <b>promo / trial code</b> features, including UI slicing and API integration.',
      'Extended login so students can sign in with a <b>student code</b>, not just phone number or email.',
      'Joined weekly meetings with the team and the client to align on scope and feedback.',
    ],
  },
  {
    slug: 'certificate-management',
    title: 'Training Certificate Manager',
    tagline: 'Internal web app to store and manage training-certificate files for a government training center.',
    category: 'fullstack',
    context: '2023 · UPT BLK Surabaya internship',
    role: 'Web Developer Intern',
    icon: 'bx:certification',
    stack: ['Express.js', 'EJS', 'React', 'MySQL'],
    overview:
      'An internal tool built during my internship at UPT Balai Latihan Kerja Surabaya, a public vocational training center. It helps staff store, organize, and find training-certificate files instead of digging through folders.',
    highlights: [
      'Worked on both the back end (Express.js, MySQL) and the front end (EJS, React).',
      'Built file management for training certificates so records are easier to find and maintain.',
    ],
    note: 'Internal system — no public demo or screenshots available.',
  },
  {
    slug: 'papierflieger',
    title: 'Papierflieger',
    tagline: 'Bootcamp final project — one REST API serving both a web app and a mobile app.',
    category: 'backend',
    context: '2022 · Binar Academy',
    role: 'Scrum Master & Back-End Developer',
    cover: papierflieger,
    gallery: [{ src: papierflieger, alt: 'Papierflieger web app' }],
    stack: ['Express.js', 'PostgreSQL', 'Swagger', 'Jest', 'React', 'Redux', 'Bootstrap'],
    links: [
      repo('https://github.com/bregsiaju/Papierflieger-be', 'API repo'),
      repo('https://github.com/bregsiaju/Papierflieger-fe', 'Web repo'),
      {
        label: 'Feature docs',
        href: 'https://drive.google.com/file/d/157s8PqMg6LRUTDiYOc-dbcx0eY64dHdq/view?usp=sharing',
        icon: 'bx:file',
      },
    ],
    overview:
      'The graduation project of Binar Academy’s Full-Stack Web Development bootcamp, built with SCRUM in collaboration with the Mobile Development class. One API served both the web app and the mobile app.',
    highlights: [
      'Led the team as <b>Scrum Master</b> — managed the backlog in Trello and delivered every feature before the deadline.',
      'Built the REST API used by both web and mobile clients, documented with <b>Swagger</b>.',
      'Wrote automated unit tests with <b>Jest</b>.',
      'Polished the responsive layout of the web front end.',
    ],
    note: 'The live demo is offline because the back-end hosting subscription has ended.',
  },
  {
    slug: 'most-redevelop',
    title: 'MOST Redevelop',
    tagline: 'Responsive page redevelopment exercise built with Nuxt.js during my internship.',
    category: 'frontend',
    context: '2023 · Suitmedia internship',
    role: 'Front-End Developer Intern',
    cover: most,
    gallery: [{ src: most, alt: 'MOST redevelop homepage' }],
    stack: ['Nuxt.js', 'Vue', 'SCSS'],
    links: [live('https://bregsi-most-redevelop.netlify.app/')],
    overview:
      'A front-end redevelopment exercise from my Suitmedia internship: rebuilding an existing website’s pages as responsive, component-based Nuxt.js pages.',
  },
  {
    slug: 'react-bcr',
    title: 'Binar Car Rental — React',
    tagline: 'Car-rental web app with Google OAuth sign-in and Redux state management.',
    category: 'frontend',
    context: '2022 · Binar Academy',
    role: 'Front-End Developer',
    cover: reactBcr,
    gallery: [
      { src: reactBcr1, alt: 'React BCR sign-in page' },
      { src: reactBcr, alt: 'React BCR car list' },
      { src: reactBcr2, alt: 'React BCR car detail' },
    ],
    stack: ['React', 'Redux', 'Bootstrap', 'OAuth'],
    links: [repo('https://github.com/bregsiaju/react-binar-car-rental'), live('https://react-bcr.netlify.app/')],
    overview:
      'A bootcamp challenge (chapter 7) focused on implementing OAuth login in a React + Redux app. Fully responsive on mobile and desktop.',
    note: 'Install Redux DevTools in your browser before opening the live demo.',
  },
  {
    slug: 'binar-rental-car',
    title: 'Binar Car Rental — Landing Page',
    tagline: 'Responsive car-rental landing page built with plain HTML, CSS, and JavaScript.',
    category: 'frontend',
    context: '2022 · Binar Academy',
    role: 'Front-End Developer',
    cover: bcr,
    gallery: [{ src: bcr, alt: 'Binar Car Rental landing page' }],
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    links: [repo('https://github.com/bregsiaju/binar-rental-car'), live('https://bregsiaju.github.io/binar-rental-car/')],
    overview: 'A Binar Academy bootcamp challenge: building a responsive landing page from scratch, without a front-end framework.',
  },
  {
    slug: 'beniq-store',
    title: 'BENIQ Store',
    tagline: 'Online tailoring-service store with cart, checkout, shipping-cost API, and PayPal payments.',
    category: 'fullstack',
    context: 'Coursework · Web Programming',
    role: 'UI Slicing & Database (team of 4)',
    cover: beniq,
    gallery: [
      { src: beniqLogin, alt: 'BENIQ Store login page' },
      { src: beniqHome, alt: 'BENIQ Store homepage' },
      { src: beniqCart, alt: 'BENIQ Store cart' },
      { src: beniqCo, alt: 'BENIQ Store checkout' },
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'PayPal'],
    links: [repo('https://github.com/bregsiaju/beniqstore')],
    overview:
      'A team final project for the Web Programming course: an online store for ordering tailoring services, integrated with a public shipping-cost API and PayPal. I handled UI slicing and the database.',
    highlights: [
      'Authentication, product search, and category filters.',
      'Cart and checkout with shipping-cost calculation and PayPal payment.',
      'Profile editing and an admin page.',
    ],
  },
];
