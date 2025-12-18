import { CarouselSize } from "@/app/component/carousel/carousel"
import Heading from "@/app/component/heading/heading"

const Treatments = ()=>{
    return(<div className="layout-doc">
        <Heading title="Our Treatments" />
        <div className="flex justify-center">
            <CarouselSize/>
        </div>
    </div>)
} 
export default Treatments