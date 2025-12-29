"use client"
import { useParams } from "next/navigation"
import { redirect } from "next/navigation"
import HeroForPages from "@/app/sections/hero/heroForPages"
import { news, social } from "@/app/data/data"
import Style from "../page.module.css"
import Link from "next/link"



const NewsDetails = () => {

  const params = useParams()
  const slug = params.slug as string
  if (!slug) {
    redirect("/news")
  }
    
  const article = news.find(item => item.link.split("/").pop() === slug)
  // ❌ If slug not found → go back to news page
  if (!article) {
    redirect("/news")
  }

  return (
    <div className="">
      <HeroForPages
        title={article.title}
        description={article.hint}
      />
      <div className="grid md:grid-cols-3 layout-doc">
        <div className="md:col-span-2 flex flex-col gap-4"> 
          <div className="flex flex-col gap-2">
            <h2 className="heading !text-3xl text-[var(--main)]">
              {article.section.title_1}
            </h2>
            <p className="text-sm md:text-md lg:text-[1rem]">
              {article.section.desc_1}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="heading !text-3xl text-[var(--main)]">
              {article.section.title_2}
            </h2>
            <h3 className="heading text-xl">{article.section.sub_title_1}</h3>
            <p className="text-sm md:text-md lg:text-[1rem]">{article.section.sub_desc_1}</p>
            <h3 className="heading text-xl">{article.section.sub_title_2}</h3>
            <ul className="text-md flex flex-col gap-1 text-sm md:text-md lg:text-[1rem]">
              {article.section.options.map((e,idx)=>(<li className="flex items-center gap-2" key={`Options_${e}_${idx}`}>
                <div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div>
                <div className="w-full">{e}</div>
              </li>))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="heading !text-3xl text-[var(--main)]">
              {article.section.title_3}
            </h2>
            <p className="text-sm md:text-md lg:text-[1rem]">{article.section.desc_3}</p>
            <ul className="text-md flex flex-col gap-1 text-sm md:text-md lg:text-[1rem]">
              {article.section.options_2.map((e,idx)=>(<li className="flex items-center gap-2" key={`Options_${e}_${idx}`}>
                <div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div>
                <div className="w-full">{e}</div>
              </li>))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="heading !text-3xl text-[var(--main)]">
              {article.section.title_4}
            </h2>
            <h3 className="heading text-xl">{article.section.sub_title_3}</h3>
            <ul className="text-md flex flex-col gap-1 text-sm md:text-md lg:text-[1rem]">
              {article.section.options_3.map((e,idx)=>(<li className="flex items-center gap-2" key={`Options_${e}_${idx}`}>
                <div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div>
                <div className="w-full">{e}</div>
              </li>))}
            </ul>
            <h3 className="heading text-xl">{article.section.sub_title_4}</h3>
            <ul className="text-md flex flex-col gap-1 text-sm md:text-md lg:text-[1rem]">
              {article.section.option_4.map((e,idx)=>(<li className="flex items-center gap-2" key={`Options_${e}_${idx}`}>
                <div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div>
                <div className="w-full">{e}</div>
              </li>))}
            </ul>
            <h3 className="heading text-xl">{article.section.sub_title_5}</h3>
            <ul className="text-md flex flex-col gap-1 text-sm md:text-md lg:text-[1rem]">
              {article.section.option_5.map((e,idx)=>(<li className="flex items-center gap-2" key={`Options_${e}_${idx}`}>
                <div className="w-[6px] h-[6px] rounded-xl bg-[var(--main)]"></div>
                <div className="w-full">{e}</div>
              </li>))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="heading !text-3xl text-[var(--main)]">
              {article.section.title_6}
            </h2>
            <p>{article.section.desc_6}</p>
          </div>
        </div>
        <div className="md:col-span-1 relative">
              <div className="p-5 bg-[var(--grey)] rounded-xl flex flex-col justify-center items-center gap-3 sticky top-25">
                <h2 className="heading !text-2xl md:!text-3xl">Ready to begin?</h2>
                <p >Book a consultation with our experts.</p>
                <div>
                  <Link href={"/contact"}><button>Book Now</button></Link>
                </div>
                <div className="h-[1px] bg-[var(--main)] w-3/4 my-5 "></div>
                <div className="flex flex-col gap-2">
                  <h3 className="heading text-center">Follow Us</h3>
                  <div className="flex gap-4">
                      {social.map((item, idx: number)=>(<Link href={item.link} target="_blank" aria-label={item.name}>
                      <div className={Style.icon}  key={`Social_${item.name}_${idx}`}>
                          {item.icon}
                      </div>
                      </Link>))}
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetails
