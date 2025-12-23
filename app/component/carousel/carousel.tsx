
import { services } from "@/app/data/data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mt-10 "
    >
      <div className="flex justify-center w-[30px] gap-10 absolute -top-10 left-1/2 -translate-x-1/2 z-10">
        <CarouselPrevious className="w-[50px] h-[50px] p-0 !rounded-full" />
        <CarouselNext className="w-[50px] h-[50px] p-0 !rounded-full" />
      </div>
      <CarouselContent>
        {services.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1 space-y-2">
               <Image className={`object-cover rounded-xl !w-full ${index%2 == 0 ? "!h-[350px]":"!h-[300px]"}`} width={400} height={100} src={item.img} alt={item.name } />
                <h3 className="text-xl font-semibold">{item.name }</h3>
                <p className="text-sm font-medium">{item.desc}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}
