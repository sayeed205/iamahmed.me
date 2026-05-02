import type { ReactNode } from "react";

export interface ProjectCardProps {
  id: number;
  title: string;
  desc: string;
  role: string;
  lang: string;
  link: string;
}

export interface SkillInfo {
  id: number;
  title: string;
  language: string;
}

export interface ContactInfo {
  id: number;
  link: string;
  image: ReactNode;
  social: string;
  username: string;
}

export const projects: ProjectCardProps[] = [
  {
    id: 1,
    title: "Wanderfly",
    desc: "Workplace wellbeing SaaS with mood tracking, stress check-ins, AI therapy chat, team dashboards, and Slack pulse checks.",
    role: "Freelance full-stack development",
    lang: "AdonisJS, React, Inertia, Tailwind CSS, PostgreSQL, Slack API",
    link: "https://www.wanderfly.in",
  },
  {
    id: 2,
    title: "HSM Jewellers",
    desc: "Network-marketing jewellery platform for onboarding, referral trees, gold wallets, EMI plans, rewards, withdrawals, and admin workflows.",
    role: "Backend architecture and full-stack delivery",
    lang: "AdonisJS, React, Inertia, Tailwind CSS, PostgreSQL, R2, Redis",
    link: "https://hsmjewellers.com",
  },
  {
    id: 3,
    title: "Lets GO",
    desc: "Internal travel operations platform for customers, tours, invoices, vouchers, receipts, reminders, and Android workflows.",
    role: "End-to-end platform and Android integration",
    lang: "AdonisJS, React, Inertia, PostgreSQL, Kotlin, Retrofit, Firebase",
    link: "https://www.exploreletsgo.com",
  },
  {
    id: 4,
    title: "Ankus Food",
    desc: "Multi-outlet food operations platform centralizing staff, kitchen/outlet, manager, and admin workflows.",
    role: "Role-based dashboard and operations tooling",
    lang: "AdonisJS, React, Inertia, Tailwind CSS, PostgreSQL",
    link: "https://ankusfood.com",
  },
];

export const skills: SkillInfo[] = [
  {
    id: 1,
    title: "Frontend",
    language: "React, Inertia.js, TanStack Start, TypeScript, Tailwind CSS",
  },
  {
    id: 2,
    title: "Backend",
    language:
      "Node.js, AdonisJS, REST APIs, WebSockets, authentication systems",
  },
  {
    id: 3,
    title: "Database",
    language: "PostgreSQL, SQL optimization, Redis caching, schema design",
  },
  {
    id: 4,
    title: "Integrations",
    language:
      "Slack API, Discord, Intercom, Freshdesk, Zendesk, Meta Messenger",
  },
  {
    id: 5,
    title: "Cloud & Storage",
    language: "Cloudflare Workers, Cloudflare R2, Vercel, deployments",
  },
  {
    id: 6,
    title: "Languages & Mobile",
    language:
      "TypeScript, JavaScript, SQL, Kotlin, Retrofit, Firebase Cloud Messaging",
  },
];
