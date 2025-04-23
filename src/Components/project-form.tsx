/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { useState, ChangeEvent, FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"

interface ContactFormProps {
  title?: string
  subtitle?: string
  testimonial?: {
    quote: string
    author: string
    position: string
    image: string
  }
}

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  website?: string
  details: string
}

const ContactForm = ({ 
  title = "Tell us about your project", 
  subtitle = "Let us help you get your business online and grow it with passion",
  testimonial = {
    quote: "We've looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they've been awesome to work with.",
    author: "Jane Warner",
    position: "CEO, Company Name",
    image: "/placeholder.svg?height=48&width=48"
  }
}: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    details: ""
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-700 mb-4">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h3 className="text-xl font-light text-gray-700 mb-4">
              Thrive online – get best unbeatable internet/user experience based on the smart design and innovative
              technology. Ready to get started?
            </h3>
            
            <div className="mt-8">
              <h4 className="text-lg font-light text-gray-700 mb-2">
                Testimonials{" "}
                <Link href="/testimonials" className="text-[#3498db] text-sm hover:underline">
                  See all testimonials
                </Link>
              </h4>
              
              <div className="bg-white p-6 rounded-md shadow-sm mt-4">
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.image || "/placeholder.svg"} 
                      alt={testimonial.author} 
                      width={48} 
                      height={48}
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-sm">
              <div className="mb-4">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#3498db] focus:border-[#3498db]"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#3498db] focus:border-[#3498db]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#3498db] focus:border-[#3498db]"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#3498db] focus:border-[#3498db]"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#3498db] focus:border-[#3498db]"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                  Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#3498db] focus:border-[#3498db]"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-[#3498db] hover:bg-[#2980b9] text-white py-3 px-8 rounded-md"
                >
                  Help from an expert
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
