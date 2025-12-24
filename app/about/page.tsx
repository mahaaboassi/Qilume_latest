import Image from "next/image"
import Heading from "../component/heading/heading"
import HeroForPages from "../sections/hero/heroForPages"

type Item = {
    image: "",
    desc
}
const About = ()=>{
    return(<div>
        <HeroForPages/>
        <div className="layout-doc">
            <Heading title="MEET THE FOUNDERS" />
            <div className="grid grid-cols-2">
                <div>
                    <h2>Surbhi Sikri</h2>
                    <h3>Founder & CEO, QiLumé Aesthetics</h3>
                    <p>Surbhi Sikri is a TEDx speaker, digital content creator, and marketing strategist with an audience of over one million across platforms. With a background in storytelling, branding, and aesthetic consultancy, she brings a fresh, intuitive approach to beauty and business.</p>
                    <p>Having spent the last three years working alongside leading aesthetic clinics, Surbhi understands the evolving needs of modern clients. Her role at QiLumé goes beyond brand building she curates experiences that are inclusive, elevated, and emotionally resonant. At the intersection of creativity and strategy, she ensures that QiLumé isn’t just a clinic; it’s a movement.</p>
                </div>
                <div>
                    <Image src={"/images/surbhi.webp"} alt="Founder" width={400} height={300} />
                </div>

            </div>
            
        </div>
    </div>)
}
export default About