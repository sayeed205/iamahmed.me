import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
    name: 'Sayed Ahmed',
    description: 'Full Stack Web Developer',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    ogImage: 'https://iamahmed.me/og-image.png',
    links: {
        github: 'https://github.com/sayeed205/iamahmed.me',
        twitter: 'https://twitter.com',
    },
};

export const homeConfig = {
    homeNav: [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Contact', href: '/contact' },
    ],
};
