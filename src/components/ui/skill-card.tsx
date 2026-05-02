import { motion } from "motion/react";

import type { SkillInfo } from "@/data/portfolio";

const SkillCard = (props: SkillInfo) => (
	<motion.div
		key={props.id}
		initial={{ opacity: 0, translateY: "10px" }}
		whileInView={{ opacity: 1, translateY: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.3, delay: props.id * 0.05, ease: "easeIn" }}
		className="foldSkillCard mt-4 w-full space-y-2 text-clip rounded-md p-8 text-left sm:mt-0 sm:w-72 md:w-80 xl:w-88 2xl:w-96"
	>
		<h2 className="py-5 font-semibold text-2xl text-black leading-6 dark:text-white">
			{props.title}
		</h2>
		<p className="text-lg text-slate-800 dark:text-slate-200">
			{props.language}
		</p>
	</motion.div>
);

export default SkillCard;
