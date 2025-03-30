/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, FileText, Lightbulb, Mic, FileSpreadsheet, FileCheck } from "lucide-react"
import bigImage from "@/Images/services-seo-alt-colors-optimized.png"
import project1 from "@/Images/services-seo-optimized.png"
import project2 from "@/Images/services-payperclick-alt-colors-optimized.png"


interface FormData {
  name: string
  email: string
  phone: string
  company: string
  website: string
  details: string
}

const ContentMarketingStrategy = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    details: "",
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-[#1ab5b3] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64">
              <Image
                src={bigImage}
                alt="Content Marketing Strategy"
                width={256}
                height={256}
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-light mb-4">Content Marketing Strategy</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We tailor a bespoke content marketing strategy for each client. Our experienced copywriters know exactly how
            to make words sell.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 leading-relaxed">
              Content Marketing builds communities, inspires engagement and increases rankings via creation and sharing
              of high quality, problem-solving relevant information, aiming to satisfy business objectives. It helps
              influence consumer behavior, with the end goal of boosting sales and increasing interaction between the
              brand and customers.
            </p>
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed">
              Content Marketing is an effective way to encourage conversions and its main objective is to build a
              content strategy to meet the needs of your target audience. It helps you stand out from the competition,
              provides a great resource to your customers and is highly shareable. Content Marketing is meant to improve
              your brand&apos;s profile and strengthen your online presence.
            </p>
          </div>
        </div>
      </div>

      {/* SEO Integration Section */}
      <div className="py-8 px-4 max-w-6xl mx-auto text-center">
        <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Our full-service SEO team integrates content into a complex strategy to increase your site&apos;s visibility and
          conversions.
        </p>
      </div>

      {/* Services Section - First Row */}
      <div className="py-8 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Industry News */}
          <div className="flex">
            <div className="mr-4 text-[#1ab5b3]">
              <BookOpen className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Industry News</h3>
              <p className="text-gray-600 text-sm">
                Up-to-date industry related posts that inform, educate and entertain readers leading to an increase in
                social media engagement, improvement in your search engine rankings and increased website traffic.
              </p>
            </div>
          </div>

          {/* Case Studies */}
          <div className="flex">
            <div className="mr-4 text-[#1ab5b3]">
              <FileText className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Case Studies</h3>
              <p className="text-gray-600 text-sm">
                In-depth analysis of your target audience and market segments to promote projects that you&apos;ve delivered
                successfully, making potential customers aware of your products and services.
              </p>
            </div>
          </div>

          {/* Content Strategy */}
          <div className="flex">
            <div className="mr-4 text-[#1ab5b3]">
              <Lightbulb className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Content Strategy</h3>
              <p className="text-gray-600 text-sm">
                A detailed content strategy aligned with a comprehensive marketing strategy creates consistency and
                results in a unified brand message that improves conversion rates.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Interviews Writing */}
          <div className="flex">
            <div className="mr-4 text-[#1ab5b3]">
              <Mic className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Interviews Writing</h3>
              <p className="text-gray-600 text-sm">
                Our writers carry industry experience by sharing conversations with experts. Share their expertise and
                you will immediately see feedback from your audience.
              </p>
            </div>
          </div>

          {/* Press Releases */}
          <div className="flex">
            <div className="mr-4 text-[#1ab5b3]">
              <FileSpreadsheet className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Press Releases</h3>
              <p className="text-gray-600 text-sm">
                Boost your online profile and increase your brand awareness with outstanding newsworthy stories about
                your brand, submitted to news portals and press release distribution services.
              </p>
            </div>
          </div>

          {/* White Papers */}
          <div className="flex">
            <div className="mr-4 text-[#1ab5b3]">
              <FileCheck className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">White Papers</h3>
              <p className="text-gray-600 text-sm">
                Promote your business with high-quality white paper marketing that will substantially increase your site
                traffic, engage with your audience and establish your position as an industry leader.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="py-8 px-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-[#1ab5b3] hover:bg-[#159e9c] text-white py-3 px-6 rounded flex items-center justify-center">
          <span>Tell us about your project</span>
        </button>
        <button className="bg-[#f39c12] hover:bg-[#e67e22] text-white py-3 px-6 rounded flex items-center justify-center">
          <span>Request a free quote now</span>
        </button>
      </div>

      {/* Web Design Projects */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-light text-gray-700">Our web design projects</h2>
            <Link href="/projects" className="text-[#1ab5b3] text-sm hover:underline">
              View all projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Project 1 */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="h-48 bg-[#1ab5b3] flex items-center justify-center">
                <Image
                  src={project1}
                  alt="Creative Design"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 text-center">Creative Design</h3>
                <p className="text-gray-600 text-sm text-center">
                  This website showcases creative marketing that inspires, builds and strengthens brands.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="h-48 bg-[#2c3e50] flex items-center justify-center">
                <Image
                  src={project2}
                  alt="Strategic Designs"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 text-center">Strategic Designs</h3>
                <p className="text-gray-600 text-sm text-center">
                  This site applies a smart SEO strategy to ensure online visibility to target clients.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="h-48 bg-[#8bc34a] flex items-center justify-center">
                <Image
                  src={project2}
                  alt="Elegant Tech"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 text-center">Elegant Tech</h3>
                <p className="text-gray-600 text-sm text-center">
                  Creating UX of the high order, on the site and inside of the system.
                </p>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#1ab5b3]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-light text-[#1ab5b3] mb-2">116</div>
            <div className="text-sm text-gray-600">Articles Written</div>
          </div>
          <div>
            <div className="text-4xl font-light text-[#1ab5b3] mb-2">248</div>
            <div className="text-sm text-gray-600">Case Studies</div>
          </div>
          <div>
            <div className="text-4xl font-light text-[#f39c12] mb-2">43</div>
            <div className="text-sm text-gray-600">Successful Content Strategies</div>
          </div>
          <div>
            <div className="text-4xl font-light text-[#f39c12] mb-2">35</div>
            <div className="text-sm text-gray-600">Interviews Taken</div>
          </div>
        </div>
      </div>

      {/* Content Importance Section */}
      <div className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are aware of the importance of a successful content marketing campaign which is why we create
              informative, engaging and persuasive content that captures attention and encourages further action. We
              tailor a bespoke content marketing strategy for each of our clients.
            </p>
          </div>
          <div className="flex">
            <div className="mr-6">
              <Image
                src={bigImage}
                alt="Content Marketing"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                We provide content that will convince web users to click through to your website for special offers, to
                purchase your products or contact you about your services, because our experienced copywriters know
                exactly how to make words sell.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-700 mb-4">Tell us about your project</h2>
            <p className="text-gray-600">Let us help you get your business online and grow it with passion</p>
          </div>

          <div className="bg-white p-8 rounded-md shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1ab5b3] focus:border-[#1ab5b3]"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1ab5b3] focus:border-[#1ab5b3]"
                    required
                  />
                </div>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1ab5b3] focus:border-[#1ab5b3]"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1ab5b3] focus:border-[#1ab5b3]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1ab5b3] focus:border-[#1ab5b3]"
                />
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1ab5b3] focus:border-[#1ab5b3]"
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-[#1ab5b3] hover:bg-[#159e9c] text-white py-3 px-8 rounded-md">
                  Talk to an expert
                </button>
              </div>
            </form>
          </div>

          {/* Testimonials */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-light text-gray-700">Testimonials</h3>
              <Link href="/testimonials" className="text-[#1ab5b3] text-sm hover:underline">
                See all testimonials
              </Link>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm">
              <blockquote className="text-gray-700 italic mb-4">
                "We've looked at a lot of SEO solutions but these guys were so far ahead of the competition it was an
                easy choice. They have the right strategy and they&apos;ve been awesome to work with."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/images/avatar.png" alt="Jane Warner" width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">Jane Warner</div>
                  <div className="text-sm text-gray-600">CEO, Company Name</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentMarketingStrategy

