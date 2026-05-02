import { motion } from "motion/react";

const headingClass =
  "heading py-5 font-extrabold text-2xl text-black dark:text-white md:text-4xl xl:mx-80 2xl:mx-110";

export const ProjectHeading = () => (
  <motion.h2
    initial={{ opacity: 0, translateY: "30px" }}
    whileInView={{ opacity: 1, translateY: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={headingClass}
  >
    Recent Works & Projects
  </motion.h2>
);

export const SkillsHeading = () => (
  <motion.h2
    initial={{ opacity: 0, translateY: "30px" }}
    whileInView={{ opacity: 1, translateY: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={headingClass}
  >
    Skills
  </motion.h2>
);

export const ContactHeading = () => (
  <motion.h2
    initial={{ opacity: 0, translateY: "30px" }}
    whileInView={{ opacity: 1, translateY: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={headingClass}
  >
    Connect with me
  </motion.h2>
);
