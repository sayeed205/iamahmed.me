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
		title: "iamahmed.me",
		desc: "Personal portfolio website with a focused responsive interface.",
		role: "Design, development, and deployment",
		lang: "TanStack Start, React, TypeScript, Tailwind CSS",
		link: "https://github.com/sayeed205/iamahmed.me",
	},
	{
		id: 2,
		title: "GitHub Projects",
		desc: "Open-source experiments, apps, and developer tooling.",
		role: "Full-stack development",
		lang: "TypeScript, React, Node.js, Cloudflare",
		link: "https://github.com/sayeed205",
	},
	{
		id: 3,
		title: "Bio Link",
		desc: "A central profile page for social links and contact points.",
		role: "Frontend development",
		lang: "React, Tailwind CSS",
		link: "https://hitarashi.bio.link/",
	},
	{
		id: 4,
		title: "Developer Portfolio",
		desc: "A concise snapshot of recent work, skills, and ways to connect.",
		role: "Product and interface engineering",
		lang: "React, TypeScript, Motion, Tailwind CSS",
		link: "https://iamahmed.me",
	},
];

export const skills: SkillInfo[] = [
	{
		id: 1,
		title: "Frontend",
		language: "React, TanStack Start, Next.js, TypeScript, Tailwind CSS",
	},
	{
		id: 2,
		title: "Backend",
		language: "Node.js, API design, server functions, databases",
	},
	{
		id: 3,
		title: "Cloud",
		language: "Cloudflare Workers, Vercel, deployments, observability",
	},
	{
		id: 4,
		title: "Tooling",
		language: "Vite, Bun, pnpm, Biome, Git, CI workflows",
	},
	{
		id: 5,
		title: "UI Engineering",
		language: "Responsive layouts, animation, accessibility, design systems",
	},
	{
		id: 6,
		title: "Languages",
		language: "TypeScript, JavaScript, HTML, CSS, SQL",
	},
];
