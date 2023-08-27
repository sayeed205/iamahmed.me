import { Metadata } from 'next';
import Script from 'next/script';

import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Cursor from '@/components/ui/cursor';
import { Footer } from '@/components/ui/footer';
import Header from '@/components/ui/header';
import { Analytics } from '@/components/analytics';
import BlobAnimation from '@/components/blob-animation';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';

import '@/styles/globals.css';

interface RootLayoutProps {
    children: React.ReactNode;
}

const siteURL = process.env.NEXT_PUBLIC_URL as string;

export const metadata: Metadata = {
    title: {
        default: 'Sayed Ahmed',
        template: `Sayed Ahmed's %s`,
    },
    description: 'Full Stack Web Developer, based in WB, India.',
    metadataBase: new URL(siteURL),
    keywords: [
        'Portfolio',
        'Next.js',
        'React',
        'Tailwind CSS',
        'Server Components',
        'Radix UI',
        'TypeScript',
        'Web Developer',
        'Backend Developer',
    ],
    authors: [
        {
            name: 'Sayed Ahmed',
            url: 'https://github.com/sayeed205',
        },
    ],
    creator: 'Sayed Ahmed',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteURL,
        title: "Sayed Ahmed's Portfolio",
        description: 'Full Stack Web Developer, based in WB, India.',
        siteName: "Sayed Ahmed's Portfolio",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Sayed Ahmed's Portfolio",
        description: 'Full Stack Web Developer, based in WB, India.',
        images: [`${siteURL}/og.png`],
        creator: 'Sayed Ahmed',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: `${siteURL}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head />
            <body
                className={cn(
                    'h-screen max-h-screen min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <BlobAnimation />
                    <Header />
                    {children}
                    <Footer />
                    <Cursor />
                    <Analytics />
                    <TailwindIndicator />
                </ThemeProvider>
                <Script
                    defer
                    src="https://static.cloudflareinsights.com/beacon.min.js?token=25de00b46ae445d692f2557c2bb27122"
                    data-cf-beacon='{"token": "25de00b46ae445d692f2557c2bb27122"}'
                />
            </body>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-0YVK7WX631"
            />
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', 'G-0YVK7WX631');
                `}
            </Script>
        </html>
    );
}
