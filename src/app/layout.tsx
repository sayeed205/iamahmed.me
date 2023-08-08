import { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Cursor from '@/components/ui/cursor';
import Header from '@/components/ui/header';
import { Analytics } from '@/components/analytics';
import BlobAnimation from '@/components/blob-animation';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';

import '@/styles/globals.css';

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        'Portfolio',
        'Next.js',
        'React',
        'Tailwind CSS',
        'Server Components',
        'Radix UI',
        'TypeScript',
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
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: 'Sayed Ahmed',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head />
            <body
                className={cn(
                    'h-screen max-h-screen min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
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
                    <Cursor />
                    <Analytics />
                    <TailwindIndicator />
                </ThemeProvider>
            </body>
        </html>
    );
}
