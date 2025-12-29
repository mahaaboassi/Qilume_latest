"use client"
import Image from "next/image"
import styles from "./Hero.module.css"
import Link from "next/link"
const Hero = ()=>{
    return(<div className="!pt-20 ">
        <div className="h-[500px] md:h-[650px] xl:h-[720px] fixed top-0 -z-5 w-full">
            <Image fill className="object-cover" src={"/images/bg_banner.png"} alt="banner" />
        </div>
        <div className={styles.overlay}>
            
        </div>
        <div className="flex justify-between items-center h-[400px] md:h-[550px] xl:h-[620px]  layout-doc">
            <div className="flex gap-4 md:gap-6 flex-col ">
                <h1 className="heading text-5xl md:text-7xl font-bold">
                    <span className="text-[var(--main)]">QILUMÈ</span>
                </h1>
                <h2 className="!text-[1.2rem] sm:!text-xl md:!text-3xl font-medium">Designed for Beauty, Grounded in Wellness</h2>
                <p className="text-sm sm:text-[1rem] md:text-[1.2rem]">India’s Emerging Integrative Beauty & Wellness House</p>
                <div>
                    <Link href={"/contact"}>
                        <button className="h-[60px]">
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
            <div className="hidden md:flex">
                <Image width={400} height={400} className="object-cover bg-[var(--main)] rounded-xl" src={"/images/banner.png"} alt="banner" />
            </div>
        </div>
    </div>)
}
export default Hero