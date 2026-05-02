import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const resumeUrl =
	"https://drive.google.com/file/d/1mY5dK8rdJ_V_c25nCAFPYTUqaU1xtI2B/view?usp=sharing";

export const Route = createFileRoute("/resume")({ component: ResumeRedirect });

function ResumeRedirect() {
	useEffect(() => {
		window.location.replace(resumeUrl);
	}, []);

	return (
		<main className="flex h-screen items-center justify-center px-6 text-center">
			<p className="text-lg text-foreground">
				Redirecting to resume.{" "}
				<a
					className="font-medium underline underline-offset-4"
					href={resumeUrl}
				>
					Open it here
				</a>
				.
			</p>
		</main>
	);
}
