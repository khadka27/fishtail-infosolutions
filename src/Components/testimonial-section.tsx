/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import Image from "next/image"

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const testimonials = [
    {
      quote:
        "We've looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they've been awesome to work with.",
      name: "Irene Warner",
      title: "CEO & Founder",
      image: "/images/testimonial-avatar.png",
    },
    {
      quote:
        "Their SEO expertise has transformed our online presence. Our organic traffic has increased by 200% in just six months.",
      name: "Michael Chen",
      title: "Marketing Director",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote: "The team's attention to detail and data-driven approach has made all the difference for our business.",
      name: "Sarah Johnson",
      title: "E-commerce Manager",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-12 bg-[#8cc63f] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 lg:w-2/3">
            <blockquote className="text-xl md:text-2xl font-light mb-6 leading-relaxed">
              "{testimonials[activeSlide].quote}"
            </blockquote>
          </div>

          <div className="md:w-2/5 lg:w-1/3 flex flex-col items-center md:items-end">
            <div className="flex items-center mb-6 md:mb-0">
              {/* Gray circular background for the image */}
              <div className="relative mr-4">
                <div className="absolute inset-0 bg-gray-300 rounded-full" style={{ transform: "scale(1.15)" }}></div>
                <div className="relative z-10">
                  <Image
                    src={testimonials[activeSlide].image || "/placeholder.svg"}
                    alt={testimonials[activeSlide].name}
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <div>
                <p className="font-semibold text-lg">{testimonials[activeSlide].name}</p>
                <p className="text-white text-opacity-90">{testimonials[activeSlide].title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full ${activeSlide === index ? "bg-white" : "bg-white bg-opacity-50"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

