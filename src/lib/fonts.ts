import localFont from 'next/font/local';

export const fontSans = localFont({
    src: [
        { path: '../../public/fonts/raisonne.woff2' },
        { path: '../../public/fonts/raisonne.woff' },
    ],
    display: 'swap',
    weight: '400',
    style: 'normal',
    variable: '--font-sans',
});
