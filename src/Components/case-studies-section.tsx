"use client"

import { useState } from "react"
import Image from "next/image"
import casestudy1 from "@/Images/case1.png"
import casestudy2 from "@/Images/case2.png"
import casestudy3 from "@/Images/case3.png"
import casestudy4 from "@/Images/case1.png" // Replace with your actual 4th image
import casestudy5 from "@/Images/case2.png" // Replace with your actual 5th image
import casestudy6 from "@/Images/case3.png" // Replace with your actual 6th image

// Define case study data
const caseStudies = [
  [
    {
      image: casestudy1,
      title: "Openray Division",
      description: "This website achieved 45% growth in organic traffic year-over-year.",
      bgColor: "bg-blue-400",
    },
    {
      image: casestudy2,
      title: "Timely Designs",
      description: "This site applied a mobile-first strategy to improve conversions.",
      bgColor: "bg-blue-600",
    },
    {
      image: casestudy3,
      title: "Planet Tech",
      description: "Capturing 65% of the market through a targeted SEO strategy that drives organic growth, improves search visibility.",
      bgColor: "bg-blue-400",
    },
  ],
  [
    {
      image: casestudy4,
      title: "Tremely Designs",
      description: "This site applies a smart SEO strategy to acquire online clients via long-tail search.",
      bgColor: "bg-blue-600",
    },
    {
      image: casestudy5,
      title: "Plainst Tech",
      description: "Currently, 65% of the total traffic on the site and most of the online.",
      bgColor: "bg-blue-400",
    },
    {
      image: casestudy6,
      title: "Maindex Solutions",
      description: "55% of sales come from organic search. Search traffic is the biggest revenue source.",
      bgColor: "bg-blue-600",
    },
  ],
]

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const totalSlides = caseStudies.length

  const goToSlide = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex(index)
    setTimeout(() => setIsAnimating(false), 500) // Match this with your transition duration
  }

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-800">
      <div className="container ">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Our case studies</h2>
          <a href="/project" className="text-sm text-gray-300 hover:text-white transition-colors">
            See all projects
          </a>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {caseStudies.map((slideGroup, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6">
                {slideGroup.map((study, studyIndex) => (
                  <div key={studyIndex} className={`bg-white rounded-lg overflow-hidden`}>
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={`Case Study ${studyIndex + 1}`}
                      width={400}
                      height={200}
                      className="w-full"
                    />
                    <div className="p-6 bg-white text-gray-800">
                      <h3 className="font-semibold mb-2">{study.title}</h3>
                      <p className="text-sm text-gray-600">{study.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-white" : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

