'use client';

import { motion } from 'framer-motion';

import ProjectCard, { ProjectCardProps } from '@/components/ui/project-card';

const ProjectsData: ProjectCardProps[] = [
    {
        id: 1,
        title: 'MonkeyPaste',
        desc: 'A simple code sharing platform',
        role: 'Lead Developer',
        lang: 'React, Next.js, TypeScript, Tailwind CSS, MongoDB',
        link: 'https://github.com/sayeed205/monkey-paste',
    },
    {
        id: 2,
        title: 'MonkeyPaste',
        desc: 'A simple code sharing platform',
        role: 'Lead Developer',
        lang: 'React, Next.js, TypeScript, Tailwind CSS, MongoDB',
        link: 'https://github.com/sayeed205/monkey-paste',
    },
    {
        id: 3,
        title: 'MonkeyPaste',
        desc: 'A simple code sharing platform',
        role: 'Lead Developer',
        lang: 'React, Next.js, TypeScript, Tailwind CSS, MongoDB',
        link: 'https://github.com/sayeed205/monkey-paste',
    },
    {
        id: 4,
        title: 'MonkeyPaste',
        desc: 'A simple code sharing platform',
        role: 'Lead Developer',
        lang: 'React, Next.js, TypeScript, Tailwind CSS, MongoDB',
        link: 'https://github.com/sayeed205/monkey-paste',
    },
    {
        id: 5,
        title: 'MonkeyPaste',
        desc: 'A simple code sharing platform',
        role: 'Lead Developer',
        lang: 'React, Next.js, TypeScript, Tailwind CSS, MongoDB',
        link: 'https://github.com/sayeed205/monkey-paste',
    },
];

const Projects = () => {
    return (
        <main className="mb-7 h-[calc(100vh-12rem)] overflow-auto pt-5 text-center">
            <motion.h2
                initial={{ opacity: 0, translateY: '30px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="2xl:mx-110 heading py-5 text-2xl font-extrabold text-black dark:text-white md:text-4xl xl:mx-80"
            >
                Recent Works & Projects
            </motion.h2>

            <section className="z-50 flex items-center justify-center">
                <div className="lg:grid-col-2 relative z-50 grid grid-rows-6 gap-2 overflow-hidden sm:mt-12 sm:grid-cols-2 sm:grid-rows-3 sm:gap-4 lg:gap-6 xl:gap-8">
                    {ProjectsData.map((props) => (
                        <ProjectCard
                            key={props.id}
                            title={props.title}
                            desc={props.desc}
                            role={props.role}
                            lang={props.lang}
                            link={props.link}
                            id={props.id}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Projects;
