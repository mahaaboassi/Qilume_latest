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
    const [formData, setFormData] = React.useState({
        key: "contact",
        name: "",
        email: "",
        message: "",
        phone: "",
        service: "",
        date: ""
    })
    const [errors, setErrors] = React.useState<{ [key: string]: string }>({})
    const [submitting, setSubmitting] = React.useState(false)
    const [success, setSuccess] = React.useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: "" }) // clear error when editing
    }
    const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value })
    setErrors({ ...errors, service: "" })
    }
    const validate = () => {
        const newErrors: { [key: string]: string } = {}
        if (!formData.name.trim()) newErrors.name = "Name is required."
        if (!formData.email.trim()) newErrors.email = "Email is required."
        // if (!formData.phone.trim()) newErrors.phone = "Phone is required."
        // if (!formData.service.trim()) newErrors.service = "Service is required."
        // if (!formData.date.trim()) newErrors.date = "Date is required."
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address."
        if (!formData.message.trim()) newErrors.message = "Message is required."
        return newErrors
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        return
        }
        
        setSubmitting(true)
        setSuccess(false)
        
        try {
        const res = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })

        const data = await res.json()

        if (res.ok) {
            setFormData({ key: "contact", name: "", email: "", message: "", service: "", date: "", phone: "" })
            setSuccess(true)
            // Clear success message after 5 seconds
            setTimeout(() => setSuccess(false), 5000)
        } else {
            setErrors({ submit: data.message || "Failed to send message" })
        }
        } catch (error) {
        console.error(error)
        setErrors({ submit: "Network error. Please try again." })
        } finally {
        setSubmitting(false)
        }
    }
    return(<div className="grid md:grid-cols-2 gap-10">
                <form onSubmit={handleSubmit}  className="flex flex-col gap-10 bg-[var(--grey)] p-5 rounded-xl">
                    <div className="flex flex-col gap-2">
                        <h2 className="!text-2xl md:!text-3xl heading">We'd Love to Hear from You</h2>
                        <p className="text-[0.8rem] md:text-sm"> Have a question, a project in mind, or just want to say hello?  
                            We’re here to listen and ready to help.</p>
                    </div>
                    {success && (
                        <div className="p-2 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
                        <span className="font-medium">Message sent successfully! We will get back to you soon.</span>
                        </div>
                    )}

                    {errors.submit && (
                        <div className="p-2 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        <span className="font-medium">{errors.submit}</span>
                        </div>
                    )}
                    <div className="flex flex-col gap-5">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <Label>Full Name</Label>
                                <Input              
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange} 
                                    type="text" placeholder="Name" />
                                {errors.name && <span className="text-red-500 text-sm w-full">{errors.name}</span>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Email</Label>
                                <Input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="text" placeholder="Email" />
                                {errors.email && <span className="text-red-500 text-sm w-full">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <Label>Phone</Label>
                                <Input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="tel"
                                    placeholder="Phone" />
                                {errors.phone && <span className="text-red-500 text-sm w-full">{errors.phone}</span>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Date</Label>
                                <Input
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    type="date" placeholder="Date" />
                                {errors.date && <span className="text-red-500 text-sm w-full">{errors.date}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 select">
                            <Label>Select Service</Label>
                            <Select value={formData.service} onValueChange={handleSelectChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>Treatment</SelectLabel>
                                    <SelectItem value="Beauty Services">Beauty Services</SelectItem>
                                    <SelectItem value="Salon">Salon</SelectItem>
                                    <SelectItem value="Laser Removal">Laser Removal</SelectItem>
                                    <SelectItem value="Ayurveda">Ayurveda</SelectItem>
                                    <SelectItem value="LSkin">Skin</SelectItem>
                                    <SelectItem value="Slimming">Slimming</SelectItem>
                                    <SelectItem value="Hair">Hair</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {errors.service && <span className="text-red-500 text-sm w-full">{errors.service}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Message</Label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message"
                                className="min-h-[80px] bg-[var(--light)]  rounded-md border p-3 text-sm"
                            />
                            {errors.message && <span className="text-red-500 text-sm w-full">{errors.message}</span>}
                        </div>
                        <div>
                            <button className="w-full justify-center items-center flex"> {submitting ? "Sending..." : "Submit"}</button>
                        </div>
                    </div>
                    
                </form>
                <div>
                    <iframe className="w-full h-full rounded-xl min-h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7016.228867761749!2d77.06204794345076!3d28.445966603068324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19593455e077%3A0x73a856c8aa5c70ab!2sQilum%C3%A9%20Aesthetics%20Skin%20Care%20Clinic%20in%20Gurgaon%20%7C%20Best%20Skin%20Specialist%20in%20Gurgaon%20%7C%20Laser%20Hair%20Removal%20in%20Gurgaon!5e0!3m2!1sen!2sae!4v1766875527194!5m2!1sen!2sae" loading="lazy"></iframe>
                </div>

            </div>)
}
export default ContactForm