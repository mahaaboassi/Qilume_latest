"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import styles from "./Hero.module.css";

type Props = {
  title: string;
  description: string;
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.15,
    },
  },
};

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function HeroForPages({ title, description }: Props) {
  return (
    <div className="!pt-15 md:!pt-20 ">
      <motion.div
        className={`flex justify-center items-center h-[300px] md:h-[350px] xl:h-[420px] ${styles.container} layout-doc`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center gap-4 md:gap-6 flex-col"
          variants={containerVariants}
        >
          <motion.h1
            className="heading text-3xl xs:text-5xl md:text-7xl font-bold text-center"
            variants={titleVariants}
          >
            <span className="text-[var(--main)]">{title}</span>
          </motion.h1>
          <div className="w-[100px] bg-[var(--main)] m-auto h-[3.5px]"></div>
          <motion.p
            className="text-[0.8rem] sm:text-[1rem] md:w-3/4 text-center md:text-[1.2rem]"
            variants={textVariants}
          >
            {description}
          </motion.p>
          
        </motion.div>
      </motion.div>
    </div>
  );
}
