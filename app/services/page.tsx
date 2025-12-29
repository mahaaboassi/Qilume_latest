"use client";

import Image from "next/image";
import HeroForPages from "../sections/hero/heroForPages";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Ready from "../sections/ready/ready";
import { services } from "../data/data";

/* =======================
   Animation Variants
======================= */

const sectionVariants = (direction: "left" | "right"): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -60 : 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const dividerVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* =======================
   Component
======================= */

const Services = () => {
  const [isOpenVideo, setIsOpenVideo] = useState(false);

  return (
    <div>
      <HeroForPages
        title="Our Services"
        description="Discover our comprehensive range of aesthetic and wellness treatments designed to enhance your natural beauty and well-being."
      />

      <div className="flex flex-col gap-10 md:gap-20 layout-doc">
        {services.map((e, idx) => {
          const direction = idx % 2 === 0 ? "left" : "right";

          return (
            <motion.div
              key={`Our_Service_${e.name}_${idx}`}
              className="flex flex-col gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* ===== Service Block ===== */}
              <div className={` ${idx % 2 === 0? "grid": "flex md:grid flex-col-reverse"} md:grid-cols-2 gap-10 items-center`}>
                {/* TEXT */}
                {idx % 2 === 0 && (
                  <motion.div
                    variants={sectionVariants(direction)}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <span className="text-[var(--main)]">
                        Service 0{idx + 1}
                      </span>
                      <h2 className="heading !text-4xl">{e.name}</h2>
                    </div>

                    <p className="text-sm md:text-md xl:text-[1rem] font-medium">{e.desc}</p>

                    <ul className="flex flex-col gap-2 text-sm md:text-md xl:text-[1rem] font-medium">
                      {e.options.map((ele, i) => (
                        <li
                          key={`Our_Service_${e.name}_Option_${i}`}
                          className="flex gap-2 items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <path
                              d="M15 0C6.716 0 0 6.716 0 15s6.716 15 15 15 15-6.716 15-15S23.284 0 15 0Zm-2.1 21.3-5.7-5.7 1.8-1.8 3.9 3.9 8.4-8.4 1.8 1.8-10.2 10.2Z"
                              fill="#72383D"
                            />
                          </svg>
                          {ele}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* IMAGE */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    className="w-full h-[350px] rounded-xl object-cover"
                    src={e.our_services_img}
                    alt={e.name}
                    width={500}
                    height={500}
                  />
                </motion.div>

                {/* TEXT (Right Side) */}
                {idx % 2 !== 0 && (
                  <motion.div
                    variants={sectionVariants(direction)}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <span className="text-[var(--main)]">
                        Service 0{idx + 1}
                      </span>
                      <h2 className="heading !text-4xl">{e.name}</h2>
                    </div>

                    <p className="text-sm md:text-md xl:text-[1rem] font-medium">{e.desc}</p>

                    <ul className="flex flex-col gap-2 text-sm md:text-md xl:text-[1rem] font-medium">
                      {e.options.map((ele, i) => (
                        <li
                          key={`Our_Service_${e.name}_Option_${i}`}
                          className="flex gap-2 items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <path
                              d="M15 0C6.716 0 0 6.716 0 15s6.716 15 15 15 15-6.716 15-15S23.284 0 15 0Zm-2.1 21.3-5.7-5.7 1.8-1.8 3.9 3.9 8.4-8.4 1.8 1.8-10.2 10.2Z"
                              fill="#72383D"
                            />
                          </svg>
                          {ele}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* Divider */}
              {idx !== services.length - 1 && (
                <motion.div
                  className="h-[2px] bg-[var(--main)] w-full origin-left"
                  variants={dividerVariants}
                />
              )}
            </motion.div>
          );
        })}

        <Ready
          title="Ready to Begin Your Transformation?"
          description="Schedule a consultation with our expert team and discover how we can help you achieve your aesthetic and wellness goals."
          label="Book Your Consultation"
          link= "/contact"
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

export default Services;
