"use client"

import HeroForPages from "@/app/sections/hero/heroForPages"
import Image from "next/image"
import { redirect, useParams } from "next/navigation"
import { motion, AnimatePresence, type Variants } from "framer-motion";
import ContactForm from "@/app/component/contactForm/contact";
import Ready from "@/app/sections/ready/ready";
import { servicesData, servicesRef } from "@/app/data/data";
import { ReactNode, useEffect, useState } from "react";
import Heading from "../component/heading/heading";
import Link from "next/link";
import Instagram from "../sections/instagram/instagram";

/* =======================
   Animation Variants
======================= */
type Item = {
  name: string;
  link: string;
  description?: string;
  isCat?: boolean;
  section_1: {
    desc_1: string;
    desc_2: string;
    desc_3: string;
  };
  img: string;
  images?: string[];
  icon: ReactNode;
  services: {
    id: number;
    name: string;
    link: string;
  }[];
};
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

const ServiceDetails = ()=>{
      const params = useParams()
      const slug = params.slug as string
      if (!slug) {
        redirect("/")
      }
        
      const article: Item | undefined = servicesRef.find(item => item.link.split("/").pop() === slug)
      // ❌ If slug not found → go back to news page
      if (!article) {
        redirect("/")
      }
    return(<div>
        <HeroForPages
        title={article.name}
        description={article.description}
        />
        <div className="flex flex-col gap-10 md:gap-20 layout-doc">
        <motion.div
              className="flex flex-col gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* ===== Service Block ===== */}
              <div className={`flex md:grid flex-col md:grid-cols-2 gap-10`}>
                {/* TEXT */}
                {
                  <motion.div
                    variants={sectionVariants("left")}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <span className="text-[var(--main)]">
                        {"Treatment"} 
                      </span>
                      <h2 className="heading !text-4xl">About {article?.name}</h2>
                    </div>

                    <p className="text-sm md:text-md xl:text-[1rem] font-medium">{article.section_1.desc_1}</p>
                    <p className="text-sm md:text-md xl:text-[1rem] font-medium">{article.section_1.desc_2}</p>
                    <p className="text-sm md:text-md xl:text-[1rem] font-medium">{article.section_1.desc_3}</p>

                  </motion.div>
                }

                {/* IMAGE */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  {<Image
                    className="w-full h-[350px] rounded-xl object-cover"
                    src={article.img}
                    alt={"Image 1"}
                    width={500}
                    height={500}
                  />}
                </motion.div>
              </div>

              {/* Divider */}
               
                <motion.div
                  className="h-[2px] bg-[var(--main)] w-full origin-left"
                  variants={dividerVariants}
                />
              
            </motion.div>
            {/* Services */}
            <div className="flex flex-col gap-10">
              <Heading title="Our Services" />

              {/* Motion container with stagger */}
              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { 
                      staggerChildren: 0.15, // stagger each card
                    },
                  },
                }}
              >
                {article.services.map((service, index) => (
                  <motion.div
                    key={`Service_${index}`}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                    }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <Link href={service.link}>
                      <div className="group w-full h-full min-h-[100px] border border-[var(--main)] rounded-lg flex items-center justify-center p-5 gap-3 relative overflow-hidden">
                        
                        {/* Card content */}
                        <div className="relative group-hover:bg-[var(--main)] group-hover:text-[var(--light)] transition-all duration-300 border border-[var(--third)] p-5 w-full rounded-l flex items-center justify-center">
                          <h3 className="text-lg sm:!text-xl font-semibold heading text-center">{service.name}</h3>

                          {/* Icon */}
                          <div className="absolute -translate-x-1/2 -bottom-6 left-1/2 rounded-full flex items-center justify-center
                                          opacity-0 scale-50 transition-all duration-300 ease-in-out
                                          group-hover:opacity-100 group-hover:scale-110">
                            <svg style={{ transform: "rotate(-270deg)" }} xmlns="http://www.w3.org/2000/svg" width="10" height="32" viewBox="0 0 40 62" fill="none">
                              <g clipPath="url(#clip0_2224_1343)">
                                <path d="M1.16537 56.1068C-0.418843 57.4792 -0.382974 59.6791 1.24907 61.0162C2.87513 62.3533 5.48162 62.323 7.06584 60.9455L38.8219 33.3008L35.8747 30.884L38.8339 33.3059C40.4181 31.9234 40.3822 29.7185 38.7442 28.3814C38.6964 28.341 38.6486 28.3057 38.6007 28.2704L7.05986 1.05459C5.47564 -0.32285 2.87513 -0.353123 1.24309 0.983954C-0.382974 2.32103 -0.418843 4.51585 1.16537 5.8933L30.1356 30.8941L1.16537 56.1068Z" fill="#72383D"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_2224_1343">
                                  <rect width="40" height="62" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>

                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <Instagram/>
            <ContactForm/>
            <Ready title="Prefer to Book Directly?" description="Call us now to schedule your consultation with one of our expert aestheticians." 
                link= "tel:+919667929992"
                label={<div className="flex gap-2 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 70 70" fill="none">
                            <g clipPath="url(#clip0_2127_1485)">
                            <path d="M24.3928 30.4929C25.9053 33.2347 27.6484 35.8662 29.9116 38.2658C32.1821 40.6801 35.0056 42.8774 38.6605 44.7544C38.9314 44.8869 39.1877 44.8869 39.4185 44.7949C39.7664 44.6623 40.1216 44.3716 40.4695 44.022C40.7404 43.7495 41.0774 43.3153 41.4289 42.8405C42.8351 40.982 44.5746 38.6744 47.0321 39.83C47.087 39.8557 47.1272 39.8851 47.1821 39.9072L55.378 44.6439C55.4036 44.6585 55.4329 44.6844 55.4549 44.699C56.5352 45.4462 56.982 46.5982 56.9928 47.9048C56.9928 49.2334 56.5059 50.7277 55.7918 51.9899C54.847 53.6572 53.4554 54.7612 51.8513 55.49C50.3243 56.1965 48.6251 56.5756 46.9918 56.8186C44.4281 57.1978 42.0258 56.9548 39.5686 56.1965C37.1663 55.4495 34.7457 54.2165 32.1015 52.5751L31.9075 52.45C30.6953 51.6882 29.3843 50.8748 28.0989 49.9143C23.3967 46.3442 18.603 41.1881 15.4792 35.5129C12.8608 30.7505 11.4326 25.609 12.2126 20.7104C12.6448 18.0237 13.791 15.58 15.7905 13.968C17.5337 12.5547 19.8811 11.7818 22.9206 12.0542C23.2685 12.0799 23.5798 12.2823 23.7446 12.5841L28.9997 21.5127C29.7688 22.5138 29.864 23.5075 29.4429 24.5012C29.095 25.3146 28.3918 26.0654 27.4324 26.7646C27.1504 27.0075 26.8135 27.2541 26.4582 27.5117C25.2827 28.3693 23.946 29.3593 24.4038 30.5223L24.3928 30.4929Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2127_1485">
                            <rect width="45" height="45" fill="white" transform="translate(12 12)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                    +91 96679 29992
                </div>} />
        </div>
        

    </div>)
}
export default ServiceDetails