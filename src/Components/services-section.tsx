"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Map, Link2, Target, PenTool, Mail } from "lucide-react"
import image3 from "@/Images/services-analytics-alt-colors-optimized.png"
import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
import image2 from "@/Images/services-seo-alt-colors-optimized.png"
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png"
import { useState } from "react"
import { QuotePopup } from "./quote-popup"

export function ServicesSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);
   const [quotePopupOpen, setQuotePopupOpen] = useState(false);
   // Open quote popup
   const openQuotePopup = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuotePopupOpen(true);
    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white">
      <div className="container ">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 lg:mb-4">
          Full Service Digital Marketing Agency
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16">
          Search Engine & Social Media Optimization Experts
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="bg-[#1a4b87] p-4 sm:p-6 lg:p-8 text-white flex flex-col items-center">
            <Image
              src={image1 || "/placeholder.svg"}
              alt="Social Media Marketing"
              width={150}
              height={150}
              className="mb-4 w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
            />
            <h3 className="text-center font-semibold text-lg sm:text-xl lg:text-2xl">Social Media Marketing</h3>
          </div>
          <div className="bg-[#4ba4d8] p-4 sm:p-6 lg:p-8 text-white flex flex-col items-center">
            <Image
              src={image2 || "/placeholder.svg"}
              alt="Organic Long-Term SEO"
              width={150}
              height={150}
              className="mb-4 w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
            />
            <h3 className="text-center font-semibold text-lg sm:text-xl lg:text-2xl">Organic Long-Term SEO</h3>
          </div>
          <div className="bg-[#8cc63f] p-4 sm:p-6 lg:p-8 text-white flex flex-col items-center">
            <Image
              src={image3 || "/placeholder.svg"}
              alt="Advanced Analytics"
              width={150}
              height={150}
              className="mb-4 w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
            />
            <h3 className="text-center font-semibold text-lg sm:text-xl lg:text-2xl">Advanced Analytics</h3>
          </div>
          <div className="bg-[#7ab929] p-4 sm:p-6 lg:p-8 text-white flex flex-col items-center">
            <Image
              src={image4 || "/placeholder.svg"}
              alt="Pay Per Click Strategies"
              width={150}
              height={150}
              className="mb-4 w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
            />
            <h3 className="text-center font-semibold text-lg sm:text-xl lg:text-2xl">Pay Per Click Strategies</h3>
          </div>
        </div>

        {/* First row of services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="w-12 h-12 sm:w-14 md:w-16 lg:w-20 sm:h-14 md:h-16 lg:h-20 bg-[#4ba4d8] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 text-lg sm:text-xl">Local Search Strategy</h3>
              <p className="text-sm md:text-base text-gray-600">
                Maximize your presence on search engine results pages on a local scale.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="w-12 h-12 sm:w-14 md:w-16 lg:w-20 sm:h-14 md:h-16 lg:h-20 bg-[#8cc63f] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
              <Map className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 text-lg sm:text-xl">Maps Search Optimization</h3>
              <p className="text-sm md:text-base text-gray-600">
                Google Maps Optimization is an important part of any successful local marketing strategy.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="w-12 h-12 sm:w-14 md:w-16 lg:w-20 sm:h-14 md:h-16 lg:h-20 bg-[#f7941d] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
              <Link2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 text-lg sm:text-xl">Link Building & Content</h3>
              <p className="text-sm md:text-base text-gray-600">
                Link building is and will continue to be a tremendously important component of Search Engine
                Optimization (SEO).
              </p>
            </div>
          </div>
        </div>

        {/* Second row of services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="w-12 h-12 sm:w-14 md:w-16 lg:w-20 sm:h-14 md:h-16 lg:h-20 bg-[#1a4b87] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 text-lg sm:text-xl">Paid Search Advertising</h3>
              <p className="text-sm md:text-base text-gray-600">
                Paid listings on Google AdWords and Microsoft AdCenter can help you reach new customers.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="w-12 h-12 sm:w-14 md:w-16 lg:w-20 sm:h-14 md:h-16 lg:h-20 bg-[#8cc63f] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
              <PenTool className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 text-lg sm:text-xl">Custom Website Design</h3>
              <p className="text-sm md:text-base text-gray-600">
                Our team specializes in affordable web design and e-commerce.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="w-12 h-12 sm:w-14 md:w-16 lg:w-20 sm:h-14 md:h-16 lg:h-20 bg-[#f7941d] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 text-lg sm:text-xl">Custom Email Design</h3>
              <p className="text-sm md:text-base text-gray-600">
                Custom email templates that speak to your customers and resonate with your brand.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-10">
          <Link
            href="/contact"
            className="bg-[#4ba4d8] hover:bg-[#3a93c7] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-md flex items-center justify-center text-sm sm:text-base lg:text-lg"
          >
            <span className="mr-2">💬</span>
            Free SEO Consultation
          </Link>
          <Link
            href="/quote"
            className="bg-[#8cc63f] hover:bg-[#7ab929] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-md flex items-center justify-center text-sm sm:text-base lg:text-lg"
            onClick={openQuotePopup}
          >
            <span className="mr-2">🔗</span>
            Request a Free Quote
          </Link>
        </div>
      </div>
      {/* Quote Popup */}
            <QuotePopup
              isOpen={quotePopupOpen}
              onClose={() => setQuotePopupOpen(false)}
            />
    </section>
  )
}

