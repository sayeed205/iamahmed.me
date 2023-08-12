'use client';

import { motion } from 'framer-motion';

export const ProjectHeading = () => (
    <motion.h2
        initial={{ opacity: 0, translateY: '30px' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="2xl:mx-110 heading py-5 text-2xl font-extrabold text-black dark:text-white md:text-4xl xl:mx-80"
    >
        Recent Works & Projects
    </motion.h2>
);

export const SkillsHeading = () => (
    <motion.h2
        initial={{ opacity: 0, translateY: '30px' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="2xl:mx-110 heading py-5 text-2xl font-extrabold text-black dark:text-white md:text-4xl xl:mx-80"
    >
        Skills
    </motion.h2>
);

export const ContactHeading = () => (
    <motion.h2
        initial={{ opacity: 0, translateY: '30px' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="2xl:mx-110 heading py-5 text-2xl font-extrabold text-black dark:text-white md:text-4xl xl:mx-80"
    >
        Connect with me
    </motion.h2>
);
