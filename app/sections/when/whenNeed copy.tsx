"use client"
import Heading from "@/app/component/heading/heading"
import Metrics from "@/app/component/metrics/metrics"
import Image from "next/image"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
type Item = {
    title: string,
    desc: string,
    img: string
}

const WhenNeed = ()=>{
    const data: Item[] = [{
        title: "Book a Consultation",
        desc: "Schedule your appointment with our specialists.",
        img: "/images/meeting.png"
    },{
        title: "Personalized Treatment",
        desc: "Get a treatment plan tailored to your skin.",
        img: "/images/treatment.png"
    },{
        title: "Enjoy the Results",
        desc: "Relax and enjoy natural-looking results.",
        img: "/images/finalizing.png"
    }] 
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return<div>
        <div className="grid md:grid-cols-2 gap-2  items-center">
            <div className="">
                <Image className="w-auto h-[400px] md:h-[500px] object-cover" src={"/images/indian.png"} alt="banner" width={400} height={400} />
            </div>
            <div className="flex flex-col gap-5 text-center md:text-start  md:items-center !pb-10 md:!pb-0  md:gap-10 md:!pl-0 layout-doc">
                <h2 className="heading">When your skin glows, your confidence shows.</h2>
                <p className="text-xs md:text-sm xl:text-lg">At QiLumé Aesthetics, beauty isn’t covered, it’s revealed. We believe in enhancing what’s already yours through thoughtful, personalized care designed to restore balance, radiance, and self-assurance.</p>
                <p className="w-full text-xs md:text-sm xl:text-lg">Every treatment is guided by expertise, precision, and an understanding that true beauty goes deeper than the surface. The result? Healthy, glowing skin and confidence that feels natural, effortless, and long-lasting far beyond any filter.</p>
                <div className="flex w-full justify-center md:justify-start ">
                    <Link href={"/contact"}>
                        <button>
                            <div>BOOK APPOINTEMENT</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26" fill="none">
                                    <g clipPath="url(#clip0_1867_3955)">
                                    <path d="M12.9999 0C9.41017 0 6.16025 1.45507 3.80765 3.80769C1.45506 6.1603 0 9.41025 0 13C0 16.5898 1.45506 19.8397 3.80765 22.1923C6.16025 24.5447 9.41017 25.9998 12.9999 25.9998C16.5898 25.9998 19.8398 24.5447 22.1923 22.1923C24.5449 19.8397 26 16.5898 26 13C26 9.41004 24.5449 6.16009 22.1923 3.80769C19.8398 1.45507 16.5898 0 12.9999 0ZM10.8976 8.9217C10.5305 8.54423 10.5388 7.94058 10.9162 7.57348C11.2937 7.20638 11.8973 7.21463 12.2646 7.5921L16.8854 12.3572L16.202 13.022L16.8884 12.3564C17.2561 12.7355 17.2466 13.3407 16.8676 13.7084C16.8564 13.719 16.8454 13.7293 16.8342 13.7393L12.2646 18.4115C11.8975 18.789 11.2939 18.7972 10.9162 18.4301C10.5388 18.0632 10.5305 17.4594 10.8976 17.0819L14.8711 13.0193L10.8976 8.9217ZM5.15967 5.15971C7.16612 3.15325 9.93807 1.91231 12.9999 1.91231C16.0617 1.91231 18.8339 3.15325 20.8401 5.15971C22.8468 7.16618 24.0879 9.93815 24.0879 13.0002C24.0879 16.0621 22.847 18.834 20.8401 20.8405C18.8339 22.847 16.0617 24.0881 12.9999 24.0881C9.93807 24.0881 7.16612 22.8472 5.15967 20.8405C3.15323 18.834 1.91229 16.0618 1.91229 13C1.91229 9.93815 3.15323 7.16618 5.15967 5.15971Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_1867_3955">
                                    <rect width="26" height="26" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="bg-[var(--main)] layout-doc !py-2 md:!py-5">
            <Metrics/>
        </div>
        <div className="layout-doc my-10 md:my-20" ref={ref}>
            <Heading title="How It Works?" />
            <div className="relative">
                {/* Animated line */}
                <motion.div
                className="absolute left-1/2 top-0 -translate-x-1/2 z-0 bg-[var(--main)]
                /* Mobile (vertical line) */
                w-[5px] h-full origin-top opacity-50
                /* Desktop (horizontal line) */
                md:top-[100px] md:left-0 md:translate-x-0 md:w-full md:h-[5px] md:origin-left md:opacity-100"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                ></motion.div>
                <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-10 xl:gap-30 relative z-10">
                {data.map((e, idx) => (
                    <div
                    className="flex flex-col gap-2"
                    key={`Card_steps_${e.title}_${idx}`}
                    >
                    <div className="flex justify-center">
                        <div className="md:w-[200px] md:h-[180px] lg:w-[250px] lg:h-[200px] p-4 rounded-xl group border border-[var(--main)] flex justify-center items-center">
                        <Image
                            className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                            alt={e.title}
                            src={e.img}
                            width={200}
                            height={200}
                        />
                        </div>
                    </div>
                    <div className="flex flex-col items-center relative z-10">
                        <h3 className="text-center text-lg font-bold">{e.title}</h3>
                        <p className="text-center text-sm font-medium md:w-[200px] lg:w-[250px]">
                            {e.desc}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        <motion.div
        className="grid md:grid-cols-2 h-[400px] lg:h-[600px] gap-5 xl:gap-10 layout-doc"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
            hidden: {},
            visible: {
            transition: { staggerChildren: 0.2 },
            },
        }}
        >
        {["/images/test_1.png", "/images/test_2.png"].map((src, i) => (
            <motion.div
            key={i}
            className="relative w-full h-full overflow-hidden rounded-xl"
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            >
            <Image
                src={src}
                alt={`Image ${i + 1}`}
                fill
                sizes="50vw"
                className="object-cover"
            />
            </motion.div>
        ))}
        </motion.div>
    </div>
}
export default WhenNeed