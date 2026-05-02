import { createFileRoute, redirect } from "@tanstack/react-router";

const projectsURL = process.env.VITE_PROJECTS_URL;

export const Route = createFileRoute("/projects.pdf")({
  beforeLoad: () => {
    if (projectsURL) {
      throw redirect({ href: projectsURL });
    }
  },
  component: ProjectsPdfFallback,
});

function ProjectsPdfFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 pt-28 pb-24 text-center sm:px-8 lg:px-16">
      <section className="max-w-xl rounded-2xl border border-border bg-background/85 p-8 shadow-2xl backdrop-blur">
        <h1 className="font-bold text-3xl tracking-tight">Projects PDF</h1>
        <p className="mt-4 text-muted-foreground">
          Projects PDF link is not configured. Set VITE_PROJECTS_URL in the
          environment.
        </p>
      </section>
    </main>
  );
}
