"use client"

import HeroForPages from "@/app/sections/hero/heroForPages"
import Image from "next/image"
import { redirect, useParams } from "next/navigation"
import { motion, AnimatePresence, type Variants } from "framer-motion";
import ContactForm from "@/app/component/contactForm/contact";
import Ready from "@/app/sections/ready/ready";
import { servicesData, servicesRef } from "@/app/data/data";
import { useEffect, useState } from "react";

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

const ServiceDetails = ()=>{
      const params = useParams()
      const slug = params.slug as string
      if (!slug) {
        redirect("/")
      }
        
      const article = servicesData.find(item => item.link.split("/").pop() === slug)
      // ❌ If slug not found → go back to news page
      if (!article) {
        redirect("/")
      }
      const [ images, setImages ] = useState<string[]>([])
      useEffect(()=>{
        function getRandomImages(data:any, count = 5) {
            const shuffled = [...data].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }
        let category:any = {}
        servicesRef.forEach((element)=>{
          const data  = element.services.find(e=> e.name == article.name ) 
          if(data) category = element

        })
        // Usage
        if(category) setImages(getRandomImages(category?.images || [], 2))
      },[article])
    return(<div>
        <HeroForPages
        title={article.name}
        description={article.main_desc}
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
                        Service 
                      </span>
                      <h2 className="heading !text-4xl">About the treatment</h2>
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
                  {images[0] && <Image
                    className="w-full h-[350px] rounded-xl object-cover"
                    src={images[0]}
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
         <motion.div
              key={`Our_Service_`}
              className="flex flex-col gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* ===== Service Block ===== */}
              <div className={`flex md:grid flex-col-reverse md:grid-cols-2 gap-10 `}>
                 {/* IMAGE */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  {images[1] && <Image
                    className="w-full h-[350px] rounded-xl object-cover"
                    src={images[1]}
                    alt={"Image 2"}
                    width={500}
                    height={500}
                  />}
                </motion.div>
                {/* TEXT */}
                {(
                  <motion.div
                    variants={sectionVariants("right")}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <span className="text-[var(--main)]">
                        Service 
                      </span>
                      <h2 className="heading !text-4xl">Benefits</h2>
                    </div>

                    <ul className="flex flex-col gap-2 text-sm md:text-md xl:text-[1rem] font-medium">
                      {article.benefits.map((ele, i) => (
                        <li
                          key={`Benefits_${ele}_${i}`}
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
                    <p className="flex flex-wrap gap-2">
                        <span className="heading !text-xl">Treatment Areas</span>
                        <ul className="flex gap-2 flex-wrap">
                            {article.areas.map((e,idx)=>(<li key={`Areas_${e}_${idx}`} className="bg-[var(--second)] rounded py-1 px-2 text-[var(--light)] text-sm">{e}</li>))}
                        </ul>
                    </p>
                  </motion.div>
                )}

               
              </div>

              {/* Divider */}
               
                <motion.div
                  className="h-[2px] bg-[var(--main)] w-full origin-left"
                  variants={dividerVariants}
                />
              
            </motion.div>
            <div className="flex flex-col gap-10">
                <h2 className="heading !text-4xl text-center">Before & After Care</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-5 bg-[var(--third)] rounded-xl p-5 ">
                        <h3 className="heading !text-xl">Before Treatment</h3>
                        <ul className="flex flex-col gap-2 text-sm md:text-md xl:text-[0.95rem] font-medium">
                        {article.before.map((ele, i) => (
                            <li
                            key={`Before_${ele}_${i}`}
                            className="flex gap-2 items-center"
                            >
                            <div>
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
                            </div>
                            <div>{ele}</div>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5 bg-[var(--third)] rounded-xl p-5 ">
                        <h3 className="heading !text-xl">After Treatment</h3>
                        <ul className="flex flex-col gap-2 text-sm md:text-md xl:text-[0.95rem] font-medium">
                        {article.after.map((ele, i) => (
                            <li
                            key={`After_${ele}_${i}`}
                            className="flex gap-2 items-center"
                            >
                            <div>
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
                            </div>
                            <div>{ele}</div>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 bg-[var(--third)] relative rounded-xl pt-5 px-5">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="flex items-end"><Image className="w-full object-cover" width={500} height={400} alt="FAQ Banner" src="/images/faq.png" /></div>
                    <div className="flex flex-col gap-10 justify-center">
                        <h2 className="heading !text-4xl">Frequently Asked Questions</h2>
                         <ul className="flex flex-col gap-2 pb-4 text-sm md:text-md xl:text-[0.95rem] font-medium">
                            {article.questions.map((ele,idx)=>(<li key={`FAQ_${ele.ques}_${idx}`} className="flex flex-col gap-2 ">
                                 <div className="font-bold">{ele.ques}</div>
                                 <div>{ele.answer}</div>
                            </li>))}
                        </ul>
                    </div>
                </div>
            </div>
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