/**
 * Personal info, stats, skills, experience, education & certificates.
 * Edit this file to update the website content — no HTML needed.
 */
import type { ImageMetadata } from 'astro';

import bootstrap from '../assets/skills/bootstrap.svg';
import card from '../assets/skills/card.png';
import cplus from '../assets/skills/cplus.svg';
import css from '../assets/skills/css.svg';
import git from '../assets/skills/git.svg';
import html from '../assets/skills/html.svg';
import js from '../assets/skills/javascript.svg';
import laravel from '../assets/skills/laravel.png';
import minimals from '../assets/skills/minimals_ui.svg';
import mysql from '../assets/skills/MySQL.png';
import nextjs from '../assets/skills/nextjs-icon.svg';
import node from '../assets/skills/node.png';
import nuxt from '../assets/skills/nuxt.svg';
import php from '../assets/skills/php.svg';
import postgres from '../assets/skills/postgresql.svg';
import postman from '../assets/skills/postmant.svg';
import python from '../assets/skills/python.svg';
import react from '../assets/skills/react.svg';
import scss from '../assets/skills/sass.png';
import socketio from '../assets/skills/socketio.svg';
import tailwind from '../assets/skills/tailwind.svg';
import ts from '../assets/skills/typescript.png';
import vue from '../assets/skills/vuejs.svg';

export const profile = {
  name: 'Bregsi Atingsari Julastri',
  shortName: 'Bregsi AJ',
  title: 'Back-End Developer',
  roles: ['Back-End Developer', 'Full-Stack Web Developer', 'Payment Integration Builder', 'Computer Science Graduate'],
  tagline:
    'I build the systems behind the screen — ticketing, payments, WhatsApp automation, and reports that real businesses run on every day.',
  location: 'Surabaya, Indonesia',
  email: 'bregsiaju@gmail.com',
  phoneDisplay: '+62 897-3573-999',
  whatsapp: 'https://wa.me/628973573999',
  availability: 'Open to freelance & full-time roles',
  /** Put your CV file at public/cv/Bregsi-AJ-CV.pdf (or change this path / use a Google Drive link) */
  cvUrl: '/cv/Bregsi-AJ-CV.pdf',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bregsiaju/', icon: 'bx:bxl-linkedin' },
    { label: 'GitHub', href: 'https://github.com/bregsiaju', icon: 'bx:bxl-github' },
    { label: 'GitLab', href: 'https://gitlab.com/bregsiaju', icon: 'bx:bxl-gitlab' },
    { label: 'Instagram', href: 'https://www.instagram.com/bregsiaju/', icon: 'bx:bxl-instagram' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCr9lXmCDEWD0IcCv8bVf3Jw/videos', icon: 'bx:bxl-youtube' },
  ],
};

export const about = {
  heading: 'I like building software that quietly keeps a business running.',
  paragraphs: [
    'I’m a backend-focused full-stack developer with 2+ years of production experience, based in Surabaya. At Wootix, I build the core API behind event ticketing and digital invitations — the part people only notice when it breaks: payments, queues, check-ins, and reports.',
    'Outside my main role, I build LMS and virtual-exhibition platforms end to end as a freelancer. I’m happiest designing clean APIs and tidy databases, integrating payment and WhatsApp APIs, and keeping production systems reliable with monitoring and tests.',
  ],
  facts: [
    { label: 'Based in', value: 'Surabaya, Indonesia', icon: 'bx:map' },
    { label: 'Degree', value: 'S.Kom — GPA 3.97 / 4.00', icon: 'bx:book-open' },
    { label: 'Focus', value: 'Back-end & full-stack web', icon: 'bx:server' },
    { label: 'Experience', value: '2+ years in production', icon: 'bx:briefcase' },
    { label: 'Languages', value: 'Indonesian · English · Japanese (N4)', icon: 'bx:globe' },
    { label: 'Status', value: 'Available for freelance', icon: 'bx:check-circle' },
  ],
};

export const stats = [
  { value: '400+', label: 'events powered by the API I build', icon: 'bx:calendar-event' },
  { value: '59K+', label: 'unique ticket buyers served', icon: 'bx:group' },
  { value: '65K+', label: 'payment transactions processed', icon: 'bx:credit-card' },
  { value: '5', label: 'Indonesian payment gateways integrated', icon: 'bx:wallet' },
];

/** Use `logo` for an image file, or `icon` (Boxicons name) when there is no logo file */
export type Skill = { name: string; logo?: ImageMetadata; icon?: string };
export const skillGroups: { title: string; icon: string; items: Skill[] }[] = [
  {
    title: 'Back-End',
    icon: 'bx:server',
    items: [
      { name: 'Node.js (Express)', logo: node },
      { name: 'TypeScript', logo: ts },
      { name: 'Laravel', logo: laravel },
      { name: 'PHP', logo: php },
      { name: 'Socket.IO', logo: socketio },
      { name: 'Python', logo: python },
    ],
  },
  {
    title: 'Integrations & Ops',
    icon: 'bx:plug',
    items: [
      { name: 'Payment Gateways (Xendit, Pivot, BCA SNAP)', logo: card },
      { name: 'WhatsApp Business API', icon: 'bx:bxl-whatsapp' },
      { name: 'Brevo (Email)', icon: 'bx:envelope' },
      { name: 'Google Analytics 4', icon: 'bx:line-chart' },
      { name: 'Google Search Console', icon: 'bx:search-alt' },
      { name: 'SEO & Lighthouse', icon: 'bx:tachometer' },
      { name: 'Cloudinary', icon: 'bx:cloud-upload' },
      { name: 'GitHub Actions', icon: 'bx:bxl-github' },
      { name: 'Grafana', icon: 'bx:pulse' },
      { name: 'Jest', icon: 'bx:test-tube' },
      { name: 'Swagger', icon: 'bx:code-curly' },
    ],
  },
  {
    title: 'Front-End',
    icon: 'bx:layout',
    items: [
      { name: 'JavaScript', logo: js },
      { name: 'React.js', logo: react },
      { name: 'Next.js', logo: nextjs },
      { name: 'Vue.js', logo: vue },
      { name: 'Nuxt.js', logo: nuxt },
      { name: 'HTML', logo: html },
      { name: 'CSS', logo: css },
      { name: 'SCSS', logo: scss },
      { name: 'Tailwind CSS', logo: tailwind },
      { name: 'Bootstrap', logo: bootstrap },
      { name: 'Minimals UI', logo: minimals },
    ],
  },
  {
    title: 'Database & Tools',
    icon: 'bx:data',
    items: [
      { name: 'MySQL', logo: mysql },
      { name: 'PostgreSQL', logo: postgres },
      { name: 'Git', logo: git },
      { name: 'Postman', logo: postman },
      { name: 'C / C++', logo: cplus },
    ],
  },
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  points: string[];
  tech?: string;
  link?: { label: string; href: string };
};

export const experience: TimelineItem[] = [
  {
    title: 'Freelance Full-Stack Developer',
    org: 'PT Aero Technology Persada',
    period: 'Jun 2025 – Present',
    points: [
      'Built <b>Ciberian Academy</b>, a digital-skills course platform — user and course management, enrollments, and access control.',
      'Built <b>Equitek LMS</b> end to end on top of the Ciberian codebase — course management, intensive-class booking and scheduling, and a sales portal with referral tracking.',
      'Designed an assessment module with question banks, scheduled exams, quizzes, competency-based assessments, certificates, and surveys.',
      'Implemented subscription plans and billing: automated invoice and expiry emails, payment status checks, manual payments, and billing exports.',
      'Protected paid videos and course materials with temporary signed URLs, watermarking, and blocked download and print.',
    ],
    tech: 'Laravel, PHP, MySQL, Materialize CSS',
  },
  {
    title: 'Back-End Developer',
    org: 'PT Inovasi Tumbuh Digital (Wootix)',
    period: 'Aug 2024 – Present',
    points: [
      'Engineered the core API of Wootix — event ticketing and digital invitations serving <b>400+ events</b>, <b>9,700+ registered users</b>, and <b>59,000+ unique ticket buyers</b>.',
      'Integrated <b>5 Indonesian payment gateways</b> processing <b>65,000+ transactions</b>, including direct BCA Virtual Account (SNAP API), refunds, settlements, and withdrawals.',
      'Built a <b>real-time virtual waiting room</b> for high-demand ticket sales with Next.js and Socket.IO — live queue positions, buyers admitted to checkout in order.',
      'Developed the digital invitation product across two major versions: RSVP, QR guest check-in, seating plans, lucky draws, and digital gift payments.',
      'Automated guest communication with a <b>WhatsApp RSVP chatbot</b> (dynamic flow engine), scheduled broadcasts with retry queues, and rate-limited OTP across multiple providers.',
      'Delivered sales, finance, settlement, and ticket-usage reports, plus audit logs that make every critical data change traceable.',
      'Migrated production servers to a new cloud provider and improved reliability with MySQL connection pooling, Grafana Cloud monitoring, GitHub Actions deployment, and Jest unit tests.',
      'Set up <b>GA4</b> and <b>Google Search Console</b>, optimized SEO, and tuned the invitation landing page to a <b>99 Lighthouse performance</b> score (desktop) with 100 for SEO.',
    ],
    tech: 'Node.js, TypeScript, MySQL, Next.js, React, Socket.IO',
  },
  {
    title: 'Freelance Web Developer',
    org: 'PT Incubus Cyberindo Persada',
    period: 'Oct 2023 – Mar 2024',
    points: [
      'Contributed to a Laravel website revamp and made pages load faster through image optimization and caching.',
    ],
    tech: 'Laravel, MySQL, Bootstrap',
  },
  {
    title: 'Front-End Developer Intern',
    org: 'PT Suitmedia Kreasi Indonesia',
    period: 'Feb – Jun 2023',
    points: [
      'Shipped responsive pages and REST API integrations for client production projects, including BukuAku.',
    ],
    tech: 'Nuxt.js, Vue, SCSS',
  },
  {
    title: 'Web Developer Intern',
    org: 'UPT Balai Latihan Kerja Surabaya',
    period: 'Feb 2023',
    points: ['Built a web app to manage training-certificate files, handling both the back end and the front end.'],
    tech: 'Express.js, EJS, React, MySQL',
  },
];

export const education: TimelineItem[] = [
  {
    title: 'Bachelor of Informatics (S.Kom)',
    org: 'UPN “Veteran” Jawa Timur',
    period: 'Aug 2020 – Jun 2024',
    points: [
      'Graduated with a <b>GPA of 3.97 / 4.00</b>.',
      'Published 2 informatics research papers in SINTA-indexed journals (SINTA 3 & 4).',
      'Thesis: fuzzy-based cache management for a sales-recording Progressive Web App (case study: Geprek Bang Jess).',
    ],
    link: {
      label: 'View final transcript',
      href: 'https://drive.google.com/file/d/100XvlRWBiOOQSlYK_9sPXPpcWc0K16yk/view?usp=sharing',
    },
  },
  {
    title: 'Full-Stack Web Development Bootcamp',
    org: 'Binar Academy',
    period: 'Aug – Dec 2022',
    points: [
      'Awarded <b>The Most Progressive Student</b> (top 4% of the cohort).',
      'Scrum Master and back-end developer for the final project — REST APIs, Swagger docs, and Jest tests.',
    ],
    link: {
      label: 'View certificate',
      href: 'https://drive.google.com/file/d/1SySVAcLGgj0t3YyAuP5EVWr9ecL5ARvn/view?usp=sharing',
    },
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  /** Optional: link to the credential / certificate file (Google Drive, Credly, Dicoding, etc.) */
  url?: string;
  /** Optional: credential ID shown under the title */
  credentialId?: string;
  tags?: string[];
  /** Optional Boxicons name for the badge (defaults to a certificate icon) */
  icon?: string;
};

/**
 * Add your certificates here. Newest first.
 * Each card shows a "View certificate" button only when `url` is filled in.
 */
export const certificates: Certificate[] = [
  {
    title: 'Japanese-Language Proficiency Test (JLPT) N4',
    issuer: 'The Japan Foundation',
    date: 'Aug 2026',
    url: 'https://drive.google.com/file/d/1sWTpIcNgnhcxJ0AMQdD8oCI7EoRQtcvD/view?usp=sharing',
    tags: ['Japanese', 'Language'],
    icon: 'bx:globe',
  },
  {
    title: 'Cloud and Gen AI Fundamentals on AWS',
    issuer: 'Dicoding Indonesia',
    date: 'Oct 2024',
    url: 'https://www.dicoding.com/certificates/KEXLY9OVRZG2',
    credentialId: 'KEXLY9OVRZG2',
    tags: ['AWS', 'Cloud', 'Gen AI'],
    icon: 'bx:cloud',
  },
  {
    title: 'English Proficiency Test — 507 / 677',
    issuer: 'Global Language Center ITS',
    date: 'Apr 2024',
    url: 'https://drive.google.com/file/d/1AYPWDSK9mnr-ObsZ3WOiXjWN4deFC65T/view?usp=sharing',
    tags: ['English', 'Language'],
    icon: 'bx:globe',
  },
  {
    title: 'Junior Web Programmer',
    issuer: 'BNSP Indonesia',
    date: 'Feb 2024',
    url: 'https://drive.google.com/file/d/1wAfgZvuxjYSqW9FExuVEeF47XosTdHI6/view?usp=sharing',
    tags: ['National Certification', 'Web Development'],
    icon: 'bx:badge-check',
  },
  {
    title: 'Full-Stack Web Development Bootcamp',
    issuer: 'Binar Academy',
    date: 'Dec 2022',
    url: 'https://drive.google.com/file/d/1SySVAcLGgj0t3YyAuP5EVWr9ecL5ARvn/view?usp=sharing',
    tags: ['Node.js', 'React', 'PostgreSQL'],
  },
  {
    title: 'The Most Progressive Student Award',
    issuer: 'Binar Academy',
    date: 'Dec 2022',
    tags: ['Top 4%', 'Award'],
    icon: 'bx:trophy',
  },
];
