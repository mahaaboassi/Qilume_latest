import { social } from "@/app/data/data"
import { ReactNode } from "react"
import styles from './Marquee.module.css';

type SocialItem  = {
    name: string,
    link: string,
    icon: ReactNode
}
const Marquee = ()=>{
    return(<div className="bg-[var(--main)] py-5 text-[var(--light)] layout-doc !py-5 flex justify-between items-center">
        <div>
            <p>⁠Safe and Effective Skin Treatments guided by Global Aesthetic Experts</p>
        </div>
        <div className="flex gap-4">
            {social.map((item: SocialItem, idx: number)=>(<div className={styles.icon} key={`Social_${item.name}_${idx}`}>
                {item.icon}
            </div>))}
        </div>
    </div>)
}
export default Marquee