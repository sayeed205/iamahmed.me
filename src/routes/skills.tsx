import { createFileRoute } from "@tanstack/react-router";

import { SkillsHeading } from "@/components/heading";
import SkillCard from "@/components/ui/skill-card";
import { skills } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({ component: Skills });

function Skills() {
	return (
		<main className="min-h-screen pt-24 pb-32 text-center sm:pb-20 md:pb-10">
			<SkillsHeading />
			<section className="flex items-center justify-center align-middle">
				<div className="relative grid grid-cols-1 gap-2 sm:mx-14 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
					{skills.map((props) => (
						<SkillCard key={props.id} {...props} />
					))}
				</div>
			</section>
		</main>
	);
}
