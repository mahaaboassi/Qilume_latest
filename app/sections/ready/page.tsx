import { ReactNode } from "react"
import Style from "./page.module.css"

type Props = {
    title: string,
    description: string,
    label: ReactNode
}

const Ready = ({ title, description, label}: Props)=>{
    return(<section className={`layout-doc flex flex-col gap-5 justify-center items-center !py-10 ${Style.container}`}>
        <h2 className="heading">{title}</h2>
        <p className="text-[0.7rem] xxs:text-sm text-center md:text-md xl:text-[1.1rem] font-medium">{description}</p>
        <div>
            <button>{label}</button>
        </div>
    </section>)
}
export default Ready