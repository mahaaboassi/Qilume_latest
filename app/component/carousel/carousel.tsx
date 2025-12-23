
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
      <div className="flex justify-center w-[1px] md:w-[30px] gap-10 absolute -top-10 left-1/2 -translate-x-1/2 z-10">
        <CarouselPrevious className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] !p-0 !rounded-full" />
        <CarouselNext className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]  !p-0 !rounded-full" />
      </div>
      <CarouselContent>
        {services.map((item, index) => (
          <CarouselItem key={index} className="xs:basis-1/2 lg:basis-1/4">
            <div className="p-1 space-y-2">
               <Image className={`object-cover rounded-xl !w-full ${index%2 == 0 ? "!h-[280px] md:!h-[350px]":"!h-[230px] md:!h-[300px]"}`} width={400} height={100} src={item.img} alt={item.name } />
                <h3 className="text-xl font-semibold">{item.name }</h3>
                <p className="text-xs md:text-sm font-medium">{item.desc}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}
