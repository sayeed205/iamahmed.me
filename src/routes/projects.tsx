import { createFileRoute } from "@tanstack/react-router";

import { ProjectHeading } from "@/components/heading";
import ProjectCard from "@/components/ui/project-card";
import { projects } from "@/data/portfolio";

const siteURL = import.meta.env.VITE_PUBLIC_URL || "https://iahmed.qzz.io";
const pageURL = `${siteURL}/projects`;
const ogImageURL = `${siteURL}/api/og?variant=projects`;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Sayed Ahmed" },
      {
        name: "description",
        content:
          "Selected full-stack SaaS, admin, travel, ecommerce, and integration projects by Sayed Ahmed.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageURL },
      { property: "og:title", content: "Projects | Sayed Ahmed" },
      {
        property: "og:description",
        content:
          "Selected SaaS, admin, travel, ecommerce, and integration projects built with Node.js, AdonisJS, React, Inertia, and PostgreSQL.",
      },
      { property: "og:image", content: ogImageURL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: pageURL },
      { name: "twitter:site", content: "@sayeed205" },
      { name: "twitter:creator", content: "@sayeed205" },
      { name: "twitter:title", content: "Projects | Sayed Ahmed" },
      {
        name: "twitter:description",
        content:
          "Selected SaaS, admin, travel, ecommerce, and integration projects built with Node.js, AdonisJS, React, Inertia, and PostgreSQL.",
      },
      { name: "twitter:image", content: ogImageURL },
    ],
  }),
  component: Projects,
});

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
