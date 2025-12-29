import Link from "next/link"
import Heading from "../component/heading/heading"
import HeroForPages from "../sections/hero/heroForPages"

const TermsAndConditions = ()=>{
    return(<div>
        <HeroForPages title="Terms And Conditions" description="Last Updated: Nov 3, 2025" />
        <section className="layout-doc flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <p className="text-sm md:text-md lg:text-[1rem]">Welcome to QiLumé. By accessing or using our website and services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Use of Our Services</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">Our website provides information about our beauty and skincare services. You agree to use it only for lawful purposes and not in a way that may harm QiLumé, its clients, or its reputation.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Appointments and Payments</h2>
                <ul className="flex flex-col gap-1 text-sm md:text-md lg:text-[1rem]">
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Appointments can be booked online or in person, subject to availability.</div></li>
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Cancellations or rescheduling must be made at least 24 hours in advance.</div></li>
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Payments for services and treatments must be completed before or immediately after the session, depending on our clinic’s policy.</div></li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Medical Disclaimer</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">All skincare and aesthetic treatments are performed by qualified professionals. However, results may vary for each individual. The information on this website is for general knowledge and does not replace professional medical advice.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Intellectual Property</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">All content on this website, including images, text, and design, is the property of QiLumé and protected by copyright laws. You may not copy, reproduce, or distribute any content without prior written consent.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Limitation of Liability</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">QiLumé will not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our website or services. While we strive for accuracy, we do not guarantee that all information on our site is complete or error-free.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Privacy</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">Please refer to our <Link className="underline hover:text-[var(--main)]" href={"/privacy-policy"}>Privacy Policy</Link> for information on how we handle your personal data.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Contact Us</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">For any questions about these Terms and Conditions, please contact us at <Link className="underline hover:text-[var(--main)]" href={"mailto:info@qilumeaesthetics.com"}>info@qilumeaesthetics.com</Link></p>
            </div>
        </section>
    </div>)
}
export default TermsAndConditions