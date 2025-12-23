"use client"
import Heading from "@/app/component/heading/heading"
import Image from "next/image"
import { useState } from "react";

const Instagram = ()=>{
    const slides = [{
        video: "/images/service_1.png",
        name: "",
        id: 1
    },{
        video: "/images/service_4.png",
        name: "",
        id: 2
    },{
        video: "/images/service_3.png",
        name: "",
        id: 3
    },{
        video: "/images/service_2.png",
        name: "",
        id: 4
    },{
        video: "/images/service_1.png",
        name: "",
        id: 5
    },{
        video: "/images/service_3.png",
        name: "",
        id: 6
    },{
        video: "/images/service_2.png",
        name: "",
        id: 7
    },{
        video: "/images/service_1.png",
        name: "",
        id: 8
    }]
    const [activeIndex, setActiveIndex] = useState(2); // 

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    return(<div className="layout-doc">
    <Heading title="Follow us on Instagram" /> 
    <div className="relative w-full flex flex-col items-center mt-10">
      <div className="relative w-full flex justify-center items-center gap-4 h-[200px] xxs:h-[280px] xs:h-[350px] md:h-[500px]">
        {slides.map((slide, index) => {
          // calculate position relative to active
          const isActive = index === activeIndex;
          const offset = index - activeIndex;
          return (
            <div
              key={slide.id}
              className={`
                transition-all duration-500 ease-in-out
                absolute
                overflow-hidden
                ${isActive ? "z-20 scale-100 opacity-100" : "z-10 opacity-100"}
                ${offset === -1 ? "-translate-x-[40%] scale-90  z-11 border border-[2px] border-[var(--light)]" : ""}
                ${offset === 1 ? "translate-x-[40%] scale-90  z-11 border border-[2px] border-[var(--light)]" : ""}
                ${offset <= -2 ? "-translate-x-[80%] scale-80  border border-[2px] border-[var(--light)] " : ""}
                ${offset >= 2 ? "translate-x-[80%] scale-80 border border-[2px] border-[var(--light)]" : ""}
                rounded-xl 
                ${isActive ? "w-[150px] xxs:w-[200px] xs:w-[250px] sm:w-[300] md:w-[350px] lg:w-[400px] xl:w-[550px]" : "w-[120px] xxs:w-[150px] xs:w-[200px] sm:w-[250] md:w-[300px] lg:w-[350px] xl:w-[500px]"} h-[200px] xxs:h-[250px] xs:h-[350px] md:h-[500px]
              `}
            >
                {!isActive && <div className="absolute inset-0 bg-gradient-to-r bg-[var(--dark)]  opacity-80" ></div>}
              <Image
                width={400}
                height={400}
                src={slide.video}
                alt={`Slide ${slide.id}`}
                className="!w-full !h-full object-cover rounded-xl"
              />
              {isActive && (
                <div className="absolute inset-0 flex justify-center items-center text-white text-4xl">
                  {/* <FaInstagram /> */}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] !p-0 cursor-pointer !rounded-full flex justify-center items-center bg-[var(--main)]  text-white hover:bg-[#7a3b3f] transition rotate-[180deg]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 31 25" fill="none">
            <g clipPath="url(#clip0_1896_2002)">
            <path d="M26.5776 13.5668L1.31286e-06 13.6002L1.4074e-06 11.4375L26.8412 11.4035L16.3358 1.59468L17.7642 7.76499e-07L31 12.3595L17.4915 25L16.0624 23.4053L26.5776 13.5668Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_1896_2002">
            <rect width="25" height="31" fill="white" transform="translate(31 1.35505e-06) rotate(90)"/>
            </clipPath>
            </defs>
            </svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] !p-0 !rounded-full cursor-pointer flex justify-center items-center bg-[var(--main)]  text-white hover:bg-[#7a3b3f] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 31 25" fill="none">
            <g clipPath="url(#clip0_1896_2002)">
            <path d="M26.5776 13.5668L1.31286e-06 13.6002L1.4074e-06 11.4375L26.8412 11.4035L16.3358 1.59468L17.7642 7.76499e-07L31 12.3595L17.4915 25L16.0624 23.4053L26.5776 13.5668Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_1896_2002">
            <rect width="25" height="31" fill="white" transform="translate(31 1.35505e-06) rotate(90)"/>
            </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
    </div>)
}
export default Instagram