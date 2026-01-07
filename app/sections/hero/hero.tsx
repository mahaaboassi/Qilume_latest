"use client"
import styles from "./Hero.module.css"
const Hero = ()=>{
    return(<div className="!pt-15 md:!pt-20 ">
        <div className={`top-0 -z-5 w-full ${styles.videoContainer}`}>
            <video autoPlay loop muted className="w-full h-full object-cover">
                <source src="/videos/qilume.mp4" type="video/mp4" />
            </video>
        </div>
        <div className={styles.overlay}>
        </div>
    </div>)
}
export default Hero