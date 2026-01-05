"use client"
import Heading from "@/app/component/heading/heading"
import Image from "next/image"
import { useEffect, useRef, useState } from "react";

const Instagram = ()=>{
    const slides = [{
        video: "/videos/reel_small_size_1.mp4",
        image: "",
        name: "",
        id: 1
    },{
        video: "/videos/reel_small_size_2.mp4",
        image: "",
        name: "",
        id: 2
    },{
        video: "/videos/reel_small_size_3.mp4",
        image: "",
        name: "",
        id: 3
    },{
        video: "/videos/reel_small_size_4.mp4",
        image: "",
        name: "",
        id: 4
    },{
        video: "/videos/reel_small_size_5.mp4",
        image: "",
        name: "",
        id: 5
    },{
        video: "/videos/reel_small_size_6.mp4",
        image: "",
        name: "",
        id: 6
    }]
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(2); // 
    useEffect(() => {
      videoRefs.current.forEach((video, index) => {
        if (!video) return;
        if (video && index !== activeIndex) {
          video.pause();
          video.currentTime = 0; // optional reset
        }
        if (index === activeIndex) {
          video.play().catch(() => {});
        }
      });
    }, [activeIndex]);
    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    return(<div className="layout-doc">
    <Heading title="Follow us on Instagram" /> 
    <div className="relative w-full flex flex-col items-center mt-10">
      <div className="relative w-full flex justify-center items-center gap-4 h-[300px] xxs:h-[380px] xs:h-[450px] md:h-[600px]">
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
                ${offset <= -2 ? "-translate-x-[80%] scale-80 hidden md:flex border border-[2px] border-[var(--light)] " : ""}
                ${offset >= 2 ? "translate-x-[80%] scale-80 hidden md:flex border border-[2px] border-[var(--light)]" : ""}
                rounded-xl 
                ${isActive ? "w-[200px] xxs:w-[250px] xs:w-[300px] sm:w-[430px] md:w-[350px] lg:w-[420px] xl:w-[550px]" : "w-[180px] xxs:w-[200px] xs:w-[250px] sm:w-[380px] md:w-[300px] lg:w-[380px] xl:w-[500px]"} h-[300px] xxs:h-[350px] xs:h-[450px] md:h-[600px]
              `}
            >
                {!isActive && <div className="absolute inset-0 bg-gradient-to-r bg-[var(--dark)]  opacity-80" ></div>}
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el; 
                  }}
                  onClick={() => window.open("https://www.instagram.com/qilumeaesthetics/", "_blank")}
                  width={400}
                  height={400}
                  src={slide.video}
                  className={`video-player !w-full !h-full object-cover rounded-xl  ${isActive? "relative z-1" : ""}`}
                  controls={true}
                  muted
                  loop
                  playsInline
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