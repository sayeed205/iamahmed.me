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
		username: "@sayeed205",
		link: "https://x.com/sayeed205",
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

const siteURL = import.meta.env.VITE_PUBLIC_URL || "https://iahmed.qzz.io";
const pageURL = `${siteURL}/contact`;
const ogImageURL = `${siteURL}/api/og?variant=contact`;

export const Route = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact | Sayed Ahmed" },
			{
				name: "description",
				content:
					"Contact Sayed Ahmed through LinkedIn, GitHub, X, Telegram, email, or phone.",
			},
			{ property: "og:type", content: "website" },
			{ property: "og:url", content: pageURL },
			{ property: "og:title", content: "Contact | Sayed Ahmed" },
			{
				property: "og:description",
				content:
					"Reach Sayed Ahmed on LinkedIn, GitHub, X, Telegram, email, or phone for full-stack development work.",
			},
			{ property: "og:image", content: ogImageURL },
			{ property: "og:image:width", content: "1200" },
			{ property: "og:image:height", content: "630" },
			{ property: "og:image:type", content: "image/png" },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:url", content: pageURL },
			{ name: "twitter:site", content: "@sayeed205" },
			{ name: "twitter:creator", content: "@sayeed205" },
			{ name: "twitter:title", content: "Contact | Sayed Ahmed" },
			{
				name: "twitter:description",
				content:
					"Reach Sayed Ahmed on LinkedIn, GitHub, X, Telegram, email, or phone for full-stack development work.",
			},
			{ name: "twitter:image", content: ogImageURL },
		],
	}),
	component: Contacts,
});

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
