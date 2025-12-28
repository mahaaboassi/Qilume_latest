"use client";

import Image from "next/image";
import HeroForPages from "../sections/hero/heroForPages";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Ready from "../sections/ready/page";
import { news } from "../data/data";
import Link from "next/link";

/* =======================
   Animation Variants
======================= */

const sectionVariants = (direction: "left" | "right"): Variants => ({
  hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
});

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* =======================
   Component
======================= */

const News = () => {
  const [isOpenVideo, setIsOpenVideo] = useState(false);

  return (
    <div>
      <HeroForPages
        title="Our News"
        description="Stay informed with the latest in aesthetic treatments, skincare tips, and wellness insights from our experts."
      />

      <div className="flex flex-col gap-10 md:gap-20 layout-doc">
        {/* ===== Featured News ===== */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 bg-[var(--grey)] rounded-xl overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={sectionVariants("left")}
        >
          <motion.div variants={imageVariants}>
            <Image
              className="h-[350px] md:h-[450px] w-full object-cover"
              width={400}
              height={400}
              src={news[0].img}
              alt={news[0].title}
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-5 p-4 justify-center"
            variants={sectionVariants("right")}
          >
            <div className="flex gap-3 items-center">
              <div className="text-[var(--main)] heading text-sm uppercase">{news[0].category}</div>
              <div className="flex justify-center text-xs items-center gap-2 text-[var(--grey_dark)]">
                <div className="w-[8px] h-[8px] rounded-full bg-[var(--grey_dark)]"></div>
                {news[0].time}
              </div>
            </div>
            <h2 className="heading !text-3xl">{news[0].title}</h2>
            <p className="text-[0.7rem] xxs:text-sm md:text-md xl:text-[1rem]">{news[0].hint}</p>
            <Link href={news[0].link}>
              <motion.div
                className="text-[var(--main)] hover:underline cursor-pointer"
                whileHover={{ scale: 1.05, textDecoration: "underline" }}
              >
                Read Article
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* ===== News Grid ===== */}
        <motion.div
          className="grid xs:grid-cols-2 md:grid-cols-3 gap-5"
          initial="hidden"
          animate="visible"
          variants={gridVariants}
        >
          {news.slice(1).map((ele) => (
            <Link key={ele.title} href={ele.link}>
              <motion.div
                className="flex flex-col gap-2 cursor-pointer hover:shadow-lg hover:scale-105 transition-transform rounded-xl overflow-hidden"
                variants={cardVariants}
              >
                <Image
                  className="h-[200px] md:h-[300px] rounded-xl w-full object-cover"
                  width={400}
                  height={400}
                  src={ele.img}
                  alt={ele.title}
                />
                <div className="flex flex-col gap-2 justify-center p-2">
                  <div className="flex gap-3 items-center">
                    <div style={{ wordSpacing: "60px" }} className="text-[var(--main)] heading text-sm uppercase">
                      {ele.category}
                    </div>
                    <div className="flex justify-center text-xs items-center gap-2 text-[var(--grey_dark)]">
                      <div className="w-[8px] h-[8px] rounded-full bg-[var(--grey_dark)]"></div>
                      {ele.time}
                    </div>
                  </div>
                  <h2 className="heading !text-lg md:!text-xl">{ele.title}</h2>
                  <p className="text-[0.7rem] xs:text-[0.8rem] lg:text-sm">{ele.hint}</p>
                  <div className="text-sm text-[var(--grey_dark)]">{ele.date}</div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* ===== Ready Section ===== */}
        <Ready
          title="Ready to Begin Your Transformation?"
          description="Schedule a consultation with our expert team and discover how we can help you achieve your aesthetic and wellness goals."
          label="Book Your Consultation"
        />
      </div>

      {/* ===== Video Modal ===== */}
      <AnimatePresence>
        {isOpenVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpenVideo(false)}
          >
            <motion.div
              className="relative w-[90%] md:w-3/4 aspect-video bg-black rounded-xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/elE50fXfJms?autoplay=1&controls=0&modestbranding=1&rel=0"
                title="About Us Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default News;
