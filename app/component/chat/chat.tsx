import { contact } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import Style from "./page.module.css"

const Chat = () => {
    return(<div className="overflow-hidden">
        <div className="fixed bottom-5 md:bottom-1/2 md:-tranlate-y-1/2 left-2 z-100 cursor-pointer">
            <div className="flex flex-col gap-2">
                {
                    contact.map((e,idx)=>{
                        const delay = idx * 150;
                    if(e.name != "Working Hours" && e.name != "Find Us")
                        return<Link style={{
                            // animation: ``,
                            animationDelay: `${delay}ms`,
                        }} className={`${Style.icon}`} href={e.link}><div className="flex items-center gap-2" key={`Contact_${e.name}_${idx}`}>
                            <div className={` w-[40px] h-[40px] rounded-[10px] bg-[var(--second)] flex justify-center items-center`}>
                                {e.icon}
                            </div>
                        </div>
                        </Link>
                    })
                }
            </div>
        </div>

        {/* <div className="fixed bottom-2 right-2 md:bottom-5 md:right-5 z-100 cursor-pointer">
            <Link href={"https://wa.me/+919667929992"} target="_blank">
                <Image className="!w-[60px] md:!w-[70px]" alt="Whatsapp" src={"/images/whatsapp_image.png"} width={70} height={70} /> 
            </Link>
        </div> */}
    </div>)
}

export default Chat;