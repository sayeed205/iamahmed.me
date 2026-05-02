import { createFileRoute, redirect } from "@tanstack/react-router";

const resumeURL = import.meta.env.VITE_RESUME_URL;

export const Route = createFileRoute("/resume")({
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
