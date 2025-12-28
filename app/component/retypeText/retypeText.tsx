"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const TypingText = ({ text }: { text: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.p
      ref={ref}
      className="text-[var(--light)] !text-[var(--light)]  heading text-[1rem] md:text-[1.6rem] flex flex-wrap justify-center text-center leading-relaxed"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.025,
          },
        },
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  )
}
export default TypingText