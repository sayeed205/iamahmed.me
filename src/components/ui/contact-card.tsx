import { motion } from "motion/react";

import type { ContactInfo } from "@/data/portfolio";

const ContactCard = (props: ContactInfo) => (
	<motion.a
		key={props.id}
		href={props.link}
		target="_blank"
		rel="noopener noreferrer"
		initial={{ opacity: 0, translateY: "8px" }}
		whileInView={{ opacity: 1, translateY: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.25, delay: props.id * 0.05, ease: "easeIn" }}
		className="relative top-0 mt-5 flex w-84 items-center space-y-2 rounded-md border-transparent bg-blue-600 p-8 px-7 text-left shadow-md transition-all duration-300 ease-in-out hover:-top-1 hover:bg-blue-700 hover:shadow-xl sm:ml-0 sm:h-40 sm:w-80 lg:w-[30rem]"
	>
		{props.image}
		<div className="flex flex-col px-5 lg:px-9">
			<h2 className="py-1 font-semibold text-2xl text-white leading-6">
				{props.social}
			</h2>
			<p className="text-lg text-slate-200">{props.username}</p>
		</div>
	</motion.a>
);

export default ContactCard;
