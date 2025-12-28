"use client"
import { useParams } from "next/navigation"
import { redirect } from "next/navigation"
import HeroForPages from "@/app/sections/hero/heroForPages"
import { news } from "@/app/data/data"




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
    <div>
      <HeroForPages
        title={article.title}
        description={article.hint}
      />

      {/* Content */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">
          {article.section.title_1}
        </h2>
        <p className="text-gray-600 mb-8">
          {article.section.desc_1}
        </p>

        {/* You can continue rendering sections dynamically */}
      </section>
    </div>
  )
}

export default NewsDetails
