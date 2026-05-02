import { createFileRoute } from "@tanstack/react-router";

import { ContactHeading } from "@/components/heading";
import { Icons } from "@/components/icons";
import ContactCard from "@/components/ui/contact-card";
import type { ContactInfo } from "@/data/portfolio";

const ContactData: ContactInfo[] = [
	{
		id: 1,
		social: "LinkedIn",
		username: "@sayeed205",
		link: "https://www.linkedin.com/in/sayeed205/",
		image: <Icons.linkedin size="2em" />,
	},
	{
		id: 2,
		social: "GitHub",
		username: "@sayeed205",
		link: "https://github.com/sayeed205",
		image: <Icons.gitHub size="2em" />,
	},
	{
		id: 3,
		social: "Telegram",
		username: "@sayeed69",
		link: "https://t.me/sayeed69",
		image: <Icons.telegram size="2em" />,
	},
	{
		id: 4,
		social: "Twitter",
		username: "@Sayeed81828980",
		link: "https://twitter.com/Sayeed81828980",
		image: <Icons.twitter size="2em" />,
	},
	{
		id: 5,
		social: "Email",
		username: "sayeed205@gmail.com",
		link: "mailto:sayeed205@gmail.com",
		image: <Icons.mail size="2em" />,
	},
	{
		id: 6,
		social: "Phone",
		username: "+91 9851305775",
		link: "tel:+919851305775",
		image: <Icons.phone size="2em" />,
	},
	{
		id: 7,
		social: "Bio.link",
		username: "@hitarashi",
		link: "https://hitarashi.bio.link/",
		image: <Icons.bio />,
	},
];

export const Route = createFileRoute("/contact")({ component: Contacts });

function Contacts() {
	return (
		<main className="min-h-screen pt-24 pb-32 text-center sm:pb-20 md:pb-10">
			<ContactHeading />
			<section className="flex items-center justify-center">
				<div className="grid grid-cols-1 gap-4 sm:mt-12 md:grid-cols-2 md:gap-12">
					{ContactData.map((props) => (
						<ContactCard key={props.id} {...props} />
					))}
				</div>
			</section>
		</main>
	);
}
