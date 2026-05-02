import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main className="relative py-20 text-center">
			<motion.h2
				initial={{ opacity: 0, translateY: "30px" }}
				whileInView={{ opacity: 1, translateY: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				aria-label="heading"
				className="heading py-5 font-extrabold text-4xl text-black dark:text-white md:text-6xl lg:text-8xl xl:mx-40"
			>
				Hi! I&apos;m Sayed Ahmed
			</motion.h2>
			<motion.p
				initial={{ opacity: 0, translateY: "50px" }}
				whileInView={{ opacity: 1, translateY: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				aria-label="paragraph"
				className="heading px-3 py-8 text-base text-black dark:text-white md:text-2xl xl:mx-80 2xl:mx-110"
			>
				Full-stack developer building SaaS platforms, admin dashboards,
				authentication systems, and production business applications with
				Node.js, AdonisJS, React, Inertia.js, and PostgreSQL.
			</motion.p>
			<Link to="/projects">
				<motion.button
					initial={{ opacity: 0, translateY: "30px" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.2, ease: "easeIn" }}
					aria-label="button"
					className="my-10 rounded-full bg-accent px-7 py-6 text-2xl text-white outline transition duration-200 ease-in-out hover:bg-blue-800 hover:outline-2 hover:outline-black dark:bg-white dark:text-blue-600 dark:outline-none dark:hover:bg-blue-700 dark:hover:text-white md:my-16 md:px-8 md:py-7 md:text-lg xl:my-14 xl:px-10 xl:py-7"
				>
					Check out my works
				</motion.button>
			</Link>
		</main>
	);
}
