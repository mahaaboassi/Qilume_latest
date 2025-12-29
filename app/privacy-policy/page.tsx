import Link from "next/link"
import Heading from "../component/heading/heading"
import HeroForPages from "../sections/hero/heroForPages"

const PravicyPolicy = ()=>{
    return(<div>
        <HeroForPages title="Privacy Policy" description="Last Updated: Nov 3, 2025" />
        <section className="layout-doc flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <p className="text-sm md:text-md lg:text-[1rem]">At Qilume, we value your trust and are committed to protecting your personal information.</p>
                <p className="text-sm md:text-md lg:text-[1rem]">This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website, contact us, or use our services.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Information We Collect</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">We may collect the following types of information:</p>
                <ul className="flex flex-col gap-1 text-sm md:text-md lg:text-[1rem]">
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Personal Information: Your name, phone number, email address, and other contact details provided through our website forms, bookings, or consultations.</div></li>
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Medical or Skin Details (if applicable): Information you share during appointments or online consultations to help us provide personalized treatments.</div></li>
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Website Usage Data: Information such as IP address, browser type, and pages visited — collected through cookies or analytics tools to improve our services.</div></li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">How We Use Your Information</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">We use your information to:</p>
                <ul className="flex flex-col gap-1 text-sm md:text-md lg:text-[1rem]">
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Schedule and manage your appointments</div></li>
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Provide personalized skincare or beauty treatments</div></li>
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Respond to your inquiries or requests</div></li>
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Send updates, offers, or reminders (only if you’ve opted in)</div></li>
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Improve our website and client experience</div></li> 
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Comply with legal or regulatory obligations</div></li> 
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Maintain accurate health records to ensure treatment safety and effectiveness</div></li>  
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Data Protection</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">We take appropriate technical and organizational measures to protect your information against unauthorized access, disclosure, or loss.</p>
                <p className="text-sm md:text-md lg:text-[1rem]">Your information is stored securely and only accessible to authorized staff members.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Sharing Your Information</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">We may share limited data only with:</p>
                <ul className="flex flex-col gap-1 text-sm md:text-md lg:text-[1rem]">
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Medical or skincare specialists working under Qilume (for your treatment)</div></li>
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Payment processors (for billing)</div></li>
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Service providers that support our operations (e.g. website hosting, email systems) All partners are required to maintain strict confidentiality and data protection standards.</div></li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Cookies & Analytics</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">Our website may use cookies to enhance your browsing experience and understand site usage. You can adjust your browser settings to refuse cookies if you prefer.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Your Rights</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">You have the right to:</p>
                <ul className="flex flex-col gap-1 text-sm md:text-md lg:text-[1rem]">
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Ask us what data we hold about you</div></li>
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Request corrections or updates</div></li>
                    <li className="flex items-center gap-2"><div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div><div className="w-full">Opt out of promotional messages at any time</div></li>
                </ul>
                <p className="text-sm md:text-md">To exercise any of these rights, please contact us at info@qilumeaesthetics.com</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Updates to This Policy</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">We may update this Privacy Policy periodically. Any changes will be posted on our website with the updated “Last Updated” date.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="heading !text-3xl text-[var(--main)]">Contact Us</h2>
                <p className="text-sm md:text-md lg:text-[1rem]">If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us: <Link className="underline hover:text-[var(--main)]" href={"mailto:info@qilumeaesthetics.com"}>info@qilumeaesthetics.com</Link></p>
            </div>
        </section>
    </div>)
}
export default PravicyPolicy