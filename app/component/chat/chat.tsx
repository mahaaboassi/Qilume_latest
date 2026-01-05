import Image from "next/image";
import Link from "next/link";

const Chat = () => {
    return(<div className="fixed bottom-2 right-2 md:bottom-5 md:right-5 z-100 cursor-pointer">
        <Link href={"https://wa.me/+919667929992"} target="_blank">
            <Image className="!w-[60px] md:!w-[70px]" alt="Whatsapp" src={"/images/whatsapp_image.png"} width={70} height={70} /> 
        </Link>
    </div>)
}

export default Chat;