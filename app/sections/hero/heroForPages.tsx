"use client"
import styles from "./Hero.module.css"
const HeroForPages = ()=>{
    return(<div className="!pt-20">
        <div className={`flex justify-center items-center h-[300px] ${styles.container}  md:h-[350px] xl:h-[420px]  layout-doc`}>
            <div className="flex items-center gap-4 md:gap-6 flex-col ">
                <h1 className="heading text-5xl md:text-7xl font-bold">
                    <span className="text-[var(--main)]">About QILUMÈ</span>
                </h1>
                <p className="text-sm sm:text-[1rem] w-3/4 text-center md:text-[1.2rem]">
                    Designed for Beauty, Grounded in Wellness  where advanced aesthetic treatments meet holistic care for transformative results.
                </p>

            </div>
        </div>
    </div>)
}
export default HeroForPages