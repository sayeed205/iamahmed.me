'use client';

import { motion } from 'framer-motion';

export interface ContactInfo {
    id: number;
    link: string;
    image: JSX.Element;
    social: string;
    username: string;
}

const ContactCard = (props: ContactInfo) => {
    return (
        <>
            <motion.a
                key={props.id}
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, translateY: '8px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.25,
                    delay: props.id * 0.05,
                    ease: 'easeIn',
                }}
                className="w-84 transtion-all relative top-0 mt-5 flex items-center space-y-2 rounded-md border-transparent bg-blue-600 p-8 px-7 text-left shadow-md duration-300 ease-in-out hover:-top-1 hover:bg-blue-700 hover:shadow-xl sm:ml-0 sm:mt-0 sm:h-40 sm:w-80 lg:w-[30rem]"
            >
                <div className="pt-1.5 lg:pl-2.5 ">{props.image}</div>

                <div className="flex flex-col px-5 lg:px-9">
                    <h2 className="py-1 text-2xl font-semibold leading-6 text-white">
                        {props.social}
                    </h2>
                    <p className="text-lg text-slate-200">{props.username}</p>
                </div>
            </motion.a>
        </>
    );
};

export default ContactCard;
