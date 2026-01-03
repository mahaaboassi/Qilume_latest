import Heading from "../heading/heading"
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
const ContactForm = ()=>{
    return(<div className="grid md:grid-cols-2 gap-10">
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

            </div>)
}
export default ContactForm