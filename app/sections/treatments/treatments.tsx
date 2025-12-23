import { CarouselSize } from "@/app/component/carousel/carousel"
import Heading from "@/app/component/heading/heading"

const Treatments = ()=>{
    return(<div className="layout-doc flex flex-col gap-10">
        <Heading title="Our Treatments" />
        <div className="flex justify-center">
            <CarouselSize/>
        </div>
    </div>)
} 
export default Treatments