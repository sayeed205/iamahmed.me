import { createFileRoute } from "@tanstack/react-router";

import { SkillsHeading } from "@/components/heading";
import SkillCard from "@/components/ui/skill-card";
import { skills } from "@/data/portfolio";

const siteURL = import.meta.env.VITE_PUBLIC_URL || "https://iahmed.qzz.io";
const pageURL = `${siteURL}/skills`;
const ogImageURL = `${siteURL}/api/og?variant=skills`;

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills | Sayed Ahmed" },
      {
        name: "description",
        content:
          "Full-stack engineering skills across frontend, backend, databases, cloud, mobile, and integrations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageURL },
      { property: "og:title", content: "Skills | Sayed Ahmed" },
      {
        property: "og:description",
        content:
          "Frontend, backend, database, cloud, mobile, and integration skills for building reliable product systems.",
      },
      { property: "og:image", content: ogImageURL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: pageURL },
      { name: "twitter:site", content: "@sayeed205" },
      { name: "twitter:creator", content: "@sayeed205" },
      { name: "twitter:title", content: "Skills | Sayed Ahmed" },
      {
        name: "twitter:description",
        content:
          "Frontend, backend, database, cloud, mobile, and integration skills for building reliable product systems.",
      },
      { name: "twitter:image", content: ogImageURL },
    ],
  }),
  component: Skills,
});

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
