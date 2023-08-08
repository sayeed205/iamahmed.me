'use client';

import { motion } from 'framer-motion';

export default function Home() {
    return (
        <main className="relative pb-20 pt-28 text-center">
            <motion.h2
                initial={{ opacity: 0, translateY: '30px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading py-5 text-2xl font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl xl:mx-40 2xl:mx-80"
            >
                Hi! I&apos;m Sayed Ahmed
            </motion.h2>
        </main>
    );
}
