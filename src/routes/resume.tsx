import { createFileRoute, redirect } from "@tanstack/react-router";

const resumeURL = import.meta.env.VITE_RESUME_URL;
const siteURL = import.meta.env.VITE_PUBLIC_URL || "https://iahmed.qzz.io";
const resumePageURL = `${siteURL}/resume`;
const resumeOgImageURL = `${siteURL}/api/og?variant=resume`;

export const Route = createFileRoute("/resume")({
	head: () => ({
		meta: [
			{ title: "Resume | Sayed Ahmed" },
			{
				name: "description",
				content:
					"Resume of Sayed Ahmed, a full-stack developer specializing in Node.js, React, AdonisJS, and PostgreSQL.",
			},
			{ property: "og:type", content: "profile" },
			{ property: "og:url", content: resumePageURL },
			{ property: "og:title", content: "Resume | Sayed Ahmed" },
			{
				property: "og:description",
				content:
					"Full-stack developer focused on scalable SaaS, backend architecture, and integrations.",
			},
			{ property: "og:image", content: resumeOgImageURL },
			{ property: "og:image:width", content: "1200" },
			{ property: "og:image:height", content: "630" },
			{ property: "og:image:type", content: "image/png" },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:url", content: resumePageURL },
			{ name: "twitter:site", content: "@sayeed205" },
			{ name: "twitter:creator", content: "@sayeed205" },
			{ name: "twitter:title", content: "Resume | Sayed Ahmed" },
			{
				name: "twitter:description",
				content:
					"Full-stack developer focused on scalable SaaS, backend architecture, and integrations.",
			},
			{ name: "twitter:image", content: resumeOgImageURL },
		],
	}),
	beforeLoad: () => {
		if (resumeURL) {
			throw redirect({ href: resumeURL });
		}
	},
	component: ResumeFallback,
});

function ResumeFallback() {
	return (
		<main className="flex min-h-screen items-center justify-center px-4 pt-28 pb-24 text-center sm:px-8 lg:px-16">
			<section className="max-w-xl rounded-2xl border border-border bg-background/85 p-8 shadow-2xl backdrop-blur">
				<h1 className="font-bold text-3xl tracking-tight">Resume</h1>
				<p className="mt-4 text-muted-foreground">
					Resume link is not configured. Set VITE_RESUME_URL in the environment.
				</p>
			</section>
		</main>
	);
}
