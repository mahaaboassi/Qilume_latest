"use client"
import HeroForPages from "../sections/hero/heroForPages"
import Style from "./page.module.css"
import Ready from "../sections/ready/page"
import { contact } from "../data/data"
import Heading from "../component/heading/heading"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Contact = ()=>{
    return(<div>
        <HeroForPages title="Contact Us" description="Ready to begin your transformation? Reach out to us for a consultation or any questions you may have about our services."/>
        <div className={`flex flex-col gap-10 md:gap-20 ${Style.container}`}>
            <div className="flex flex-col gap-5 layout-doc">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-10">
                    {contact.map((e,idx)=>(<div key={`Contact_page_${idx}`} className={`bg-[var(--third)] rounded-xl flex gap-3 flex-col items-center p-5 ${Style.card}`}>
                        <div className="w-[60px] h-[60px] rounded-xl bg-[var(--light)] flex justify-center items-center">{e.icon}</div>
                        <h2 className="!text-sm font-semibold heading">{e.name}</h2>
                        <p className="text-[0.9rem] font-medium text-center">{e.value}</p>
                    </div>))}

                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 layout-doc">
                <form className="flex flex-col gap-10 bg-[var(--grey)] p-5 rounded-xl">
                    <div className="flex flex-col gap-2">
                        <h2 className="!text-2xl md:!text-3xl heading">We'd Love to Hear from You</h2>
                        <p className="text-[0.8rem] md:text-sm"> Have a question, a project in mind, or just want to say hello?  
                            We’re here to listen and ready to help.</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <Label>Full Name</Label>
                                <Input type="text" placeholder="Name" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Full Name</Label>
                                <Input type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <Label>Phone</Label>
                                <Input type="number" placeholder="Phone" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Date</Label>
                                <Input type="date" placeholder="Date" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 select">
                            <Label>Select Service</Label>
                            <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Services</SelectLabel>
                                <SelectItem value="Botox">Botox</SelectItem>
                                <SelectItem value="Fillers">Fillers</SelectItem>
                                <SelectItem value="Thread Lifts">Thread Lifts</SelectItem>
                                <SelectItem value="HIFU">HIFU</SelectItem>
                                <SelectItem value="Laser Skin Toning">Laser Skin Toning</SelectItem>
                                <SelectItem value="Cryo T-Shock">Cryo T-Shock</SelectItem>
                                <SelectItem value="Laser Hair Reduction">Laser Hair Reduction</SelectItem>
                                <SelectItem value="Dermaplaning">Dermaplaning</SelectItem>
                                <SelectItem value="MediFacials">MediFacials</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <button className="w-full justify-center items-center flex"> Submit</button>
                        </div>
                    </div>
                </form>
                <div>
                    <iframe className="w-full h-full rounded-xl min-h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7016.228867761749!2d77.06204794345076!3d28.445966603068324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19593455e077%3A0x73a856c8aa5c70ab!2sQilum%C3%A9%20Aesthetics%20Skin%20Care%20Clinic%20in%20Gurgaon%20%7C%20Best%20Skin%20Specialist%20in%20Gurgaon%20%7C%20Laser%20Hair%20Removal%20in%20Gurgaon!5e0!3m2!1sen!2sae!4v1766875527194!5m2!1sen!2sae" loading="lazy"></iframe>
                </div>

            </div>
            <Ready title="Prefer to Book Directly?" description="Call us now to schedule your consultation with one of our expert aestheticians." 
            label={<div className="flex gap-2 items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 70 70" fill="none">
                        <g clipPath="url(#clip0_2127_1485)">
                        <path d="M24.3928 30.4929C25.9053 33.2347 27.6484 35.8662 29.9116 38.2658C32.1821 40.6801 35.0056 42.8774 38.6605 44.7544C38.9314 44.8869 39.1877 44.8869 39.4185 44.7949C39.7664 44.6623 40.1216 44.3716 40.4695 44.022C40.7404 43.7495 41.0774 43.3153 41.4289 42.8405C42.8351 40.982 44.5746 38.6744 47.0321 39.83C47.087 39.8557 47.1272 39.8851 47.1821 39.9072L55.378 44.6439C55.4036 44.6585 55.4329 44.6844 55.4549 44.699C56.5352 45.4462 56.982 46.5982 56.9928 47.9048C56.9928 49.2334 56.5059 50.7277 55.7918 51.9899C54.847 53.6572 53.4554 54.7612 51.8513 55.49C50.3243 56.1965 48.6251 56.5756 46.9918 56.8186C44.4281 57.1978 42.0258 56.9548 39.5686 56.1965C37.1663 55.4495 34.7457 54.2165 32.1015 52.5751L31.9075 52.45C30.6953 51.6882 29.3843 50.8748 28.0989 49.9143C23.3967 46.3442 18.603 41.1881 15.4792 35.5129C12.8608 30.7505 11.4326 25.609 12.2126 20.7104C12.6448 18.0237 13.791 15.58 15.7905 13.968C17.5337 12.5547 19.8811 11.7818 22.9206 12.0542C23.2685 12.0799 23.5798 12.2823 23.7446 12.5841L28.9997 21.5127C29.7688 22.5138 29.864 23.5075 29.4429 24.5012C29.095 25.3146 28.3918 26.0654 27.4324 26.7646C27.1504 27.0075 26.8135 27.2541 26.4582 27.5117C25.2827 28.3693 23.946 29.3593 24.4038 30.5223L24.3928 30.4929Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2127_1485">
                        <rect width="45" height="45" fill="white" transform="translate(12 12)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                +91 96679 29992
            </div>} />
        </div>
    </div>)
}
export default Contact