'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

export default function Home() {
    return (
        <main className="relative pb-20 pt-28 text-center">
            <motion.h2
                initial={{ opacity: 0, translateY: '30px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading py-5 text-4xl font-extrabold text-black dark:text-white md:text-6xl lg:text-8xl xl:mx-40 "
            >
                Hi! I&apos;m Sayed Ahmed
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, translateY: '50px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="2xl:mx-110 heading px-3 py-8 text-base text-black dark:text-white md:text-2xl xl:mx-80"
            >
                a Full Stack Web developer, based in India
            </motion.p>
            <Link
                className={cn(
                    'rounded-full bg-white px-8 py-6 text-2xl font-bold text-primary hover:bg-primary hover:text-white'
                )}
                href="/projects"
            >
                Check out my works
            </Link>
        </main>
    );
}
