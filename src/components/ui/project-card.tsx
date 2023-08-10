'use client';

import { motion } from 'framer-motion';

import { Icons } from '../icons';

export interface ProjectCardProps {
    id: number;
    title: string;
    desc: string;
    role: string;
    lang: string;
    link: string;
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <>
            <motion.a
                key={props.id}
                href={props.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, translateY: '10px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.3,
                    delay: props.id * 0.05,
                    ease: 'easeIn',
                }}
                className="foldWorkCard group relative top-0 mx-4 mt-5 min-h-fit space-y-2 rounded-md border-transparent bg-blue-600 px-6 py-4 text-left shadow-md transition-all duration-300 ease-in-out hover:-top-1 hover:bg-blue-700 hover:shadow-xl sm:ml-0 sm:mt-0 sm:h-80 sm:w-80 sm:px-10 sm:py-8 md:h-72 md:w-96 md:px-8 lg:h-72 lg:w-[30rem]"
            >
                <div className="flex items-center justify-between">
                    <h2 className="py-5 text-2xl font-semibold leading-6 text-white">
                        {props.title}
                    </h2>
                    <div className="lg:invisible lg:group-hover:visible ">
                        <Icons.link />
                    </div>
                </div>
                <p className="text-lg text-slate-200">{props.desc}</p>
                <p className="text-lg text-slate-200">{props.role}</p>
                <p className="w-11/12 py-1 text-lg text-slate-200 lg:py-2">
                    {props.lang}
                </p>
            </motion.a>
        </>
    );
};

export default ProjectCard;
