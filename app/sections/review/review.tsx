import Heading from "@/app/component/heading/heading"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const Review = ()=>{
    const data = [
    {
        name: "Shikha Kaushik",
        desc: "I had an absolutely wonderful experience at this place. The hair care was done with great attention and professionalism by Prem bhaiya leaving and giving fresh look. The body massage was extremely relaxing and melt away all my stress by Savita di. The skin care treatment was gentle, effective, and left my skin glowing. The staff is very skilled, friendly, and made me feel comfortable throughout my service 😍😍Highly recommended for those looking for quality service and true pampering. My all time favorite is Kabish, Khushi, Simran, Deb bhaiya and Aparna ❤️❤️",
        rate: 5,
        img: "/images/profile_1.png",
        id: 1
    },
    {
        name: "nikita rohilla",
        desc: "Got body polishing done here and absolutely loved the experience! The staff was incredibly patient, gentle, and so professional throughout. The service felt luxurious, relaxing, and left the skin glowing. Highly recommend this place if you want quality care and real results!",
        rate: 5,
        img: "/images/profile_2.png",
        id: 2
    },
    {
        name: "Anjali Singh",
        desc: "I got my hair colored done from Qilume Aesthetics and it turned out amazing.  There’s this guy named Prem who did my hair — he’s super nice and really humble. Overall, it was such a great experience!",
        rate: 5,
        img: "/images/profile_3.png",
        id: 3
    },
    {
        name: "neha bansal",
        desc: "Services are very nice. Staff is very cooperative. I am taking my laser and routine beauty services from here. And I am very satisfied.",
        rate: 5,
        img: "/images/profile_4.png",
        id: 4
    },
    {
        name: "Raj Kumar",
        desc: "Consultation is excellent. You can connect over call also. Very humble and treats like family. They also understand and negotiate on financial terms. Very few doctors, I have seen many but she is best. I am taking the acne treatment it cures within 6 months.",
        rate: 5,
        img: "/images/profile_5.png",
        id: 5
    },
    {
        name: "Khushii Sidhu",
        desc: "I had a major acne pop out concern two months back. and then came to the rescue team Qilumé🤌🏻... My Skin has started behaving well and now acnes have stopped and marks have also started fading. i truely trust them with my skin. Love the team. All thanks to Dr. Payal and Arpana ji …",
        rate: 5,
        img: "/images/profile_1.png",
        id: 1
    },
    ];


    return(<div className="landing-doc">
        <Heading title="Customer Reviews" />
        <div className="overflow-hidden px-15 xs:px-20 md:px-26 lg:px-40">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full  md:p-10 "
                >
                <CarouselContent>
                    {data.map((item, index) => (
                    <CarouselItem key={index} className="">
                        <div className="p-1 space-y-2 flex gap-2 md:gap-5 flex-col items-center">
                            <div className="object-cover shadow-lg !h-[80px] !w-[80px] md:!h-[100px] md:!w-[100px] rounded-full bg-[var(--second)] uppercase text-[var(--light)] flex justify-center items-center text-3xl">{item.name.substring(0, 2)}</div>
                            {/* <Image className={`object-cover shadow-lg !h-[80px] !w-[80px] md:!h-[120px] md:!w-[120px] rounded-full`} width={100} height={100} src={item.img} alt={item.name } /> */}
                            <div className="flex gap-2">
                                {[...Array(5)].map((_,idx)=><div key={`Star_${idx}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32" fill="none">
                                        <g clipPath="url(#clip0_1896_1864)">
                                        <path d="M16.776 0.528428L20.8671 10.5575L31.2499 11.5303C31.4139 11.5444 31.5702 11.6091 31.6991 11.7163C31.8281 11.8234 31.924 11.9682 31.9747 12.1324C32.0253 12.2967 32.0286 12.473 31.9839 12.6391C31.9393 12.8052 31.8488 12.9538 31.7239 13.0661L23.8645 20.2531L26.1822 30.9107C26.2064 31.0226 26.2093 31.1385 26.1907 31.2517C26.1721 31.3649 26.1324 31.473 26.0738 31.57C26.0153 31.667 25.939 31.7509 25.8495 31.8169C25.7599 31.8829 25.6588 31.9297 25.552 31.9546C25.331 32.0035 25.1006 31.9582 24.9114 31.8289L15.9921 26.2432L7.04939 31.8562C6.95597 31.9156 6.85226 31.9551 6.74424 31.9723C6.63621 31.9895 6.52602 31.9841 6.41999 31.9564C6.31396 31.9287 6.21421 31.8793 6.12647 31.811C6.03873 31.7427 5.96474 31.6568 5.90877 31.5583C5.85271 31.4619 5.81534 31.3548 5.7988 31.2432C5.78227 31.1316 5.78689 31.0177 5.81241 30.9079L8.13273 20.2504L0.283769 13.0661C0.118788 12.9125 0.017684 12.6972 0.00210819 12.4663C-0.0134676 12.2355 0.0577234 12.0074 0.200435 11.8309C0.35772 11.6618 0.571676 11.5638 0.796789 11.5576L11.1405 10.5848L15.2317 0.528428C15.2977 0.37125 15.4058 0.237607 15.5429 0.143782C15.68 0.0499562 15.8401 0 16.0038 0C16.1675 0 16.3276 0.0499562 16.4647 0.143782C16.6018 0.237607 16.71 0.37125 16.776 0.528428Z" fill="#DFDF00"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1896_1864">
                                        <rect width="32" height="32" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>)}
                            </div>
                            <p className="text-xs md:text-sm font-medium text-center md:w-3/4">{item.desc}</p>
                            <hr className="bg-[var(--main)] opacity-30 h-[2px] w-1/2 md:w-1/4" />
                            <h3 className="text-sm md:text-xl font-semibold capitalize">{item.name }</h3>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] !p-0 !rounded-full"/>
                <CarouselNext className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] !p-0 !rounded-full" />
            </Carousel>
        </div>
    </div>)
}
export default Review