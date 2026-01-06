import { ReactNode } from "react"
import Style from "./page.module.css"
import Link from "next/link"

type Props = {
    title: string,
    description: string,
    link: string,
    label: ReactNode
}

const Ready = ({ title, description, label, link}: Props)=>{
    return(<section className={`layout-doc flex flex-col gap-5 justify-center items-center !py-10 ${Style.container}`}>
        <h2 className="heading text-center">{title}</h2>
        <p className="text-[0.7rem]  xxs:text-sm text-center md:text-md xl:text-[1.1rem] font-medium">{description}</p>
        <div>
            <Link href={link}><button>{label}</button></Link>
        </div>
    </section>)
}
export default Ready