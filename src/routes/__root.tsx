import { TanStackDevtools } from "@tanstack/react-devtools";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import BlobAnimation from "@/components/blob-animation";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import Cursor from "@/components/ui/cursor";
import { Footer } from "@/components/ui/footer";
import Header from "@/components/ui/header";
import appCss from "../styles.css?url";

const siteURL = import.meta.env.VITE_PUBLIC_URL || "https://iahmed.qzz.io";
const showDevtools = import.meta.env.DEV;
const ogImageURL = `${siteURL}/api/og`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Sayed Ahmed",
      },
      {
        name: "description",
        content:
          "Full-stack developer specializing in Node.js, AdonisJS, React, Inertia.js, and PostgreSQL.",
      },
      {
        name: "keywords",
        content:
          "Portfolio, Node.js, AdonisJS, React, Inertia.js, PostgreSQL, TypeScript, SaaS, Web Developer, Backend Developer, Sayed Ahmed, Sayeed Ahmed, hitarashi, sayeed205",
      },
      {
        name: "author",
        content: "Sayed Ahmed",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:locale",
        content: "en_US",
      },
      {
        property: "og:url",
        content: siteURL,
      },
      {
        property: "og:title",
        content: "Sayed Ahmed's Portfolio",
      },
      {
        property: "og:description",
        content:
          "Full-stack developer specializing in Node.js, AdonisJS, React, Inertia.js, and PostgreSQL.",
      },
      {
        property: "og:site_name",
        content: "Sayed Ahmed's Portfolio",
      },
      {
        property: "og:image",
        content: ogImageURL,
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:type",
        content: "image/png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:url",
        content: siteURL,
      },
      {
        name: "twitter:site",
        content: "@sayeed205",
      },
      {
        name: "twitter:creator",
        content: "@sayeed205",
      },
      {
        name: "twitter:title",
        content: "Sayed Ahmed's Portfolio",
      },
      {
        name: "twitter:description",
        content:
          "Full-stack developer specializing in Node.js, AdonisJS, React, Inertia.js, and PostgreSQL.",
      },
      {
        name: "twitter:image",
        content: ogImageURL,
      },
      {
        name: "theme-color",
        media: "(prefers-color-scheme: light)",
        content: "white",
      },
      {
        name: "theme-color",
        media: "(prefers-color-scheme: dark)",
        content: "black",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "shortcut icon", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      {
        src: "https://static.cloudflareinsights.com/beacon.min.js?token=25de00b46ae445d692f2557c2bb27122",
        defer: true,
        "data-cf-beacon": '{"token": "25de00b46ae445d692f2557c2bb27122"}',
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-0YVK7WX631",
        async: true,
      },
      {
        children:
          "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-0YVK7WX631');",
      },
    ],
  }),
  component: () => <Outlet />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BlobAnimation />
          <Header />
          {children}
          <Footer />
          <Cursor />
          <TailwindIndicator />
        </ThemeProvider>
        {showDevtools ? (
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        ) : null}
        <Scripts />
      </body>
    </html>
  );
}
