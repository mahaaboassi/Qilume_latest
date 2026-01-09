import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
    return (<div className="grid gap-5 lg:grid-cols-2 layout-doc">
          <div className="flex justify-center items-center relative">
              <Image className="lg:w-full w-[400px] md:w-[700px] " src={"/images/clinic.png"} alt="Clinic" width={500} height={400} />
          </div>
          <div className="flex flex-col lg:items-start items-center text-center lg:text-start justify-center gap-5">
              <h2 className="heading !text-xl lg:!text-3xl xl:!text-4xl">About
                  <br/> <span className="text-[var(--main)]">QILUMÈ Aesthetics</span>
              </h2>
              <p className="text-[0.7rem] xxs:text-sm md:text-md xl:text-[1.1rem] font-medium">QILUMÈ is an emerging integrative beauty and wellness clinic in India, combining advanced aesthetic science with holistic care. Designed for beauty and grounded in wellness, we deliver personalized skin, hair, and body treatments led by expert professionals and medical-grade technology.</p>
              <p className="text-[0.7rem] xxs:text-sm md:text-md xl:text-[1.1rem] font-medium">Our approach focuses on natural results, safety, and long-term confidence enhancing what’s already yours, not covering it.</p>
              <div><Link href={"/contact"}><button>Book an Appointment</button></Link></div>
          </div>
               
                
      </div>
    );
}
export default AboutSection;