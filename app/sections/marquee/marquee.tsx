"use client"
import { social } from "@/app/data/data"
import { ReactNode } from "react"
import styles from './Marquee.module.css';
import Link from "next/link";
import { motion } from "framer-motion"

type SocialItem  = {
    name: string,
    link: string,
    icon: ReactNode
}
const texts = [
  "Safe • Natural • Expert-Led Aesthetic Care",
  "Advanced Skin • Hair • Body Treatments",
  "Globally Trained Aesthetic Specialists",
  "Science-Backed Beauty & Wellness",
]
const Marquee = ()=>{
    return(<div className="bg-[var(--main)] py-5 text-[var(--light)] layout-doc gap-2 md:gap-5 !py-5 flex flex-col md:flex-row justify-between items-center">
        {/* <div>
            <p className="text-center !text-[var(--light)]  md:text-start text-sm md:text-lg">⁠Safe and Effective Skin Treatments guided by Global Aesthetic Experts</p>
        </div> */}
        {/* Text Marquee */}
        <div className="relative  w-full md:w-3/4 overflow-hidden">
          <motion.div
            className="flex gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...texts, ...texts].map((text, i) => (
              <p
                key={i}
                className="text-sm md:text-lg !text-[var(--light)] font-light tracking-wide"
              >
                {text}
              </p>
            ))}
          </motion.div>
        </div>
        <div className="flex gap-4">
            {social.map((item: SocialItem, idx: number)=>(<Link key={`Social_${item.name}_${idx}`} href={item.link} target="_blank" aria-label={item.name}>
            <div className={styles.icon}>
                {item.icon}
            </div>
            </Link>))}
        </div>
    </div>)
}
export default Marquee