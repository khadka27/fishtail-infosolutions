/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Seoptimize from "@/Images/seo_specialist_workplace-optimized.png"

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "We've looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they've been awesome to work with.",
    author: "Irene Warner",
    position: "CEO & Founder",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    quote:
      "Their SEO analysis helped us increase our organic traffic by 45% in just three months. The insights were practical and easy to implement.",
    author: "Michael Chen",
    position: "Marketing Director",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    quote:
      "The team provided actionable recommendations that made an immediate impact on our search rankings. Highly recommended!",
    author: "Sarah Johnson",
    position: "E-commerce Manager",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function SeoAnalysisSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    websiteUrl: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    details: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // You would typically send this data to your backend or API
  }

  return (
    <section className="bg-white">
      {/* Yellow header section */}
      <div className="bg-amber-300 py-8 px-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">FREE website SEO analysis</h2>
              <p className="text-lg text-gray-700">
                Our team is ready to review your website&apos;s SEO aspects and provide some tips to help you increase
                traffic, drive leads and maximize revenue.
              </p>
            </div>
            <div className="flex justify-start mr-50  md:justify-end">
              <Image
                src={Seoptimize}
                alt="SEO Analysis Illustration"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form and testimonials section */}
      <div className="container mx-auto px-40 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form section - takes up 2/3 on large screens */}
          <div className="lg:col-span-2">
            <p className="text-sm text-gray-500 mb-6">
              Fields marked with an <span className="text-red-500">*</span> are required
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Website URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="websiteUrl"
                  name="websiteUrl"
                  placeholder="www.yourwebsite.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.websiteUrl}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <p className="text-xs text-gray-500 mt-1">(optional)</p>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                  <p className="text-xs text-gray-500 mt-1">(optional)</p>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                  Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.details}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <p className="text-sm text-gray-500 mb-6">
                Please, let us know any particular things to check and the best time to contact you by phone (if
                provided).
              </p>

              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Hear from an expert
              </button>
            </form>
          </div>

          {/* Testimonials section - takes up 1/3 on large screens */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-light text-green-600">Testimonials</h3>
              <Link href="/testimonials" className="text-blue-500 hover:underline text-sm flex items-center">
                See all testimonials <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="min-h-[200px]">
                <p className="text-gray-700 italic mb-6">"{testimonials[activeTestimonial].quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonials[activeTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[activeTestimonial].author}
                    width={60}
                    height={60}
                    unoptimized
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium">{testimonials[activeTestimonial].author}</p>
                    <p className="text-sm text-gray-500">{testimonials[activeTestimonial].position}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full ${activeTestimonial === index ? "bg-blue-500" : "bg-gray-300"}`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

