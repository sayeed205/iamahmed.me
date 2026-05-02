import { createFileRoute } from "@tanstack/react-router";

import { ProjectHeading } from "@/components/heading";
import ProjectCard from "@/components/ui/project-card";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({ component: Projects });

function Projects() {
	return (
		<main className="min-h-screen pt-24 pb-32 text-center sm:pb-20 md:pb-10">
			<ProjectHeading />
			<section className="flex items-center justify-center">
				<div className="relative grid grid-rows-4 gap-2 md:mb-12 md:grid-cols-2 md:grid-rows-2 lg:gap-3">
					{projects.map((props) => (
						<ProjectCard key={props.id} {...props} />
					))}
				</div>
			</section>
		</main>
	);
}
