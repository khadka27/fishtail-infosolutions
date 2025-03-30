/* eslint-disable react/no-unescaped-entities */
"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  MessageCircle,
  Search,
  BarChart,
  Mail,
  DollarSign,
  FileText,
  MapPin,
  Map,
  Link2,
  Target,
  Layout,
  AtSign,
  MessageSquare,
  Bell,
  Heart,
} from "lucide-react"
import image3 from "@/Images/services-analytics-alt-colors-optimized.png"
import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
import image2 from "@/Images/services-seo-alt-colors-optimized.png"
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png"
import { CaseStudiesSection } from "./case-studies-section"


class ServicesShowcase extends React.Component {
  render() {
    return (
        <>
      <div className="flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-light text-gray-700 mb-4">Full Service Digital Creative Agency</h1>
          <p className="text-gray-600 leading-relaxed">
            We pride ourselves on delivering compelling, digital marketing solutions. Our winning solutions and
            experiences help many of our clients interact and engage with their customers in the best possible way.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Social Media Marketing */}
          <div className="bg-[#1d4e6f] text-white rounded-md overflow-hidden">
            <div className="p-6">
              <div className="h-40 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <Image
                    src={image1}
                    alt="Social Media Marketing"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                  <MessageCircle className="absolute top-0 right-0 h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Social Media Marketing</h3>
              <p className="text-sm text-blue-100 mb-4">
                Customers are interacting with brands through social media. If implemented correctly, social can bring
                immediate success to your business.
              </p>
              <Link href="/services/social-media-marketing" className="inline-flex items-center text-sm">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Search Engine Optimization */}
          <div className="bg-[#f5b642] text-white rounded-md overflow-hidden">
            <div className="p-6">
              <div className="h-40 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <Image
                    src={image2}
                    alt="Search Engine Optimization"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                  <Search className="absolute top-0 right-0 h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Search Engine Optimization</h3>
              <p className="text-sm text-yellow-100 mb-4">
                Search Engine Optimization is fundamental. Our SEO strategies can grant you a high-ranking placement in
                search results.
              </p>
              <Link href="/services/seo" className="inline-flex items-center text-sm">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Advanced Web Analytics */}
          <div className="bg-[#8aad2d] text-white rounded-md overflow-hidden">
            <div className="p-6">
              <div className="h-40 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <Image
                    src={image3}
                    alt="Advanced Web Analytics"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                  <BarChart className="absolute top-0 right-0 h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Advanced Web Analytics</h3>
              <p className="text-sm text-green-100 mb-4">
                Our services cover all aspects of Google Analytics, from initial setup to training, advanced tracking
                solutions and custom features.
              </p>
              <Link href="/services/web-analytics" className="inline-flex items-center text-sm">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Email Marketing */}
          <div className="bg-[#2e74b5] text-white rounded-md overflow-hidden">
            <div className="p-6">
              <div className="h-40 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <Image
                    src={image4}
                    alt="Email Marketing"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                  <Mail className="absolute top-0 right-0 h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Email Marketing</h3>
              <p className="text-sm text-blue-100 mb-4">
                Our custom Email Marketing services can help you save time and money.
              </p>
              <Link href="/services/email-marketing" className="inline-flex items-center text-sm">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Pay Per Click */}
          <div className="bg-[#d9472b] text-white rounded-md overflow-hidden">
            <div className="p-6">
              <div className="h-40 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <Image
                    src={image1}
                    alt="Pay Per Click"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                  <DollarSign className="absolute top-0 right-0 h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Pay Per Click</h3>
              <p className="text-sm text-red-100 mb-4">
                Pay Per Click marketing is easy and cost effective. We know everything about PPC.
              </p>
              <Link href="/services/ppc" className="inline-flex items-center text-sm">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Content Strategy */}
          <div className="bg-[#00a79d] text-white rounded-md overflow-hidden">
            <div className="p-6">
              <div className="h-40 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <Image
                    src={image2}
                    alt="Content Strategy"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                  <FileText className="absolute top-0 right-0 h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Content Strategy</h3>
              <p className="text-sm text-teal-100 mb-4">Engage with your audience through great, original content.</p>
              <Link href="/services/content-strategy" className="inline-flex items-center text-sm">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="w-full bg-[#2c3e50] text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Local Search Strategy */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Local Search Strategy</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Maximize your presence on search engine results pages on a local scale.
                  </p>
                  <Link
                    href="/services/local-search"
                    className="text-sm bg-gray-700 px-3 py-1 rounded inline-block hover:bg-gray-600"
                  >
                    Learn more
                  </Link>
                </div>
              </div>

              {/* Maps Search Optimization */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                    <Map className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Maps Search Optimization</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Google Maps Optimization is an important part of any successful local marketing strategy.
                  </p>
                  <Link
                    href="/services/maps-optimization"
                    className="text-sm bg-gray-700 px-3 py-1 rounded inline-block hover:bg-gray-600"
                  >
                    Learn more
                  </Link>
                </div>
              </div>

              {/* Link Building & Content */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                    <Link2 className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Link Building & Content</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Link building is and will continue to be a tremendously important component of Search Engine
                    Optimization.
                  </p>
                  <Link
                    href="/services/link-building"
                    className="text-sm bg-gray-700 px-3 py-1 rounded inline-block hover:bg-gray-600"
                  >
                    Learn more
                  </Link>
                </div>
              </div>

              {/* Paid Search Advertising */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                    <Target className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Paid Search Advertising</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Paid listings on Google AdWords and Microsoft AdCenter can help you reach new customers.
                  </p>
                  <Link
                    href="/services/paid-search"
                    className="text-sm bg-gray-700 px-3 py-1 rounded inline-block hover:bg-gray-600"
                  >
                    Learn more
                  </Link>
                </div>
              </div>

              {/* Custom Website Design */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                    <Layout className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Custom Website Design</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Our team specializes in affordable web design and e-commerce.
                  </p>
                  <Link
                    href="/services/website-design"
                    className="text-sm bg-gray-700 px-3 py-1 rounded inline-block hover:bg-gray-600"
                  >
                    Learn more
                  </Link>
                </div>
              </div>

              {/* Custom Email Design */}
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                    <AtSign className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Custom Email Design</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Custom email templates that speak to your customers and resonate with your brand.
                  </p>
                  <Link
                    href="/services/email-design"
                    className="text-sm bg-gray-700 px-3 py-1 rounded inline-block hover:bg-gray-600"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <Link
                href="/consultation"
                className="bg-[#3498db] hover:bg-[#2980b9] text-white py-3 px-6 rounded flex items-center justify-center"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Free SEO Consultation
              </Link>
              <Link
                href="/quote"
                className="bg-[#f39c12] hover:bg-[#e67e22] text-white py-3 px-6 rounded flex items-center justify-center"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Request a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Strategy Section */}
        <div className="w-full max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-700 mb-4">
              We use strategy and experience to generate results
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team specializes in on-page and off-page SEO as well as PPC. We have a proven track record in
              increasing search engine rankings for our clients. Our strategies are designed to achieve one or more of
              the following goals:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Call To Action */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-pink-500">
                <Bell className="w-full h-full" />
              </div>
              <h3 className="text-xl font-medium mb-2">Call To Action</h3>
              <p className="text-gray-600">Inspire the target audience from social networks to visit your website.</p>
            </div>

            {/* Engage */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-orange-500">
                <MessageCircle className="w-full h-full" />
              </div>
              <h3 className="text-xl font-medium mb-2">Engage</h3>
              <p className="text-gray-600">Encourage dialogue and coverage from influential people and sites.</p>
            </div>

            {/* Inspire */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-blue-500">
                <Heart className="w-full h-full" />
              </div>
              <h3 className="text-xl font-medium mb-2">Inspire</h3>
              <p className="text-gray-600">Inspire the target audience to visit your website from social networks.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                We can help you achieve great results across several key areas including Search Engine Optimization,
                Social Media Marketing, Email Marketing and Digital Marketing.
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-4">
                We combine creative ideas with our vast experience in search technologies to deliver measurable results
                for our clients. We can help you build a sustainable, meaningful relationship with your clients by
                engaging them with your brand using social media platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="w-full bg-[#3498db] text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl font-light mb-4 md:mb-0">Our customers</h2>
              <Link href="/testimonials" className="text-sm underline">
                Read all testimonials
              </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <blockquote className="text-xl italic">
                  "My company's Google rankings and overall site traffic improved dramatically after just a few months
                  of working with this agency. The service we've received from their team has consistently been above
                  and beyond our expectations."
                </blockquote>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white overflow-hidden mb-2">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Matthew Lee"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <p className="font-medium">Matthew Lee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CaseStudiesSection/>
      </>
    )
  }
}

export default ServicesShowcase

