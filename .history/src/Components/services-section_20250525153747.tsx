"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { User, Clock, Trophy, ArrowRight, Check, Search, BarChart, Star, ChevronRight } from "lucide-react"
import seo_specialist from "@/Images/seo_specialist_workplace-optimized.png"

export function GoogleRankingSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [currentTab, setCurrentTab] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: User,
      title: "Pre-Qualified Leads",
      description:
        "We target users actively searching for your services, ensuring higher conversions and lower customer acquisition costs.",
    },
    {
      icon: Clock,
      title: "Maximize ROI",
      description:
        "SEO delivers lasting results at a fraction of traditional ad costs by focusing on high-intent audiences.",
    },
    {
      icon: Trophy,
      title: "10+ Years of Expertise",
      description:
        "Our certified team has helped 200+ businesses achieve top rankings through scalable, ethical SEO strategies.",
    },
  ]

  const tabs = [
    {
      title: "Local SEO",
      content:
        "Attract nearby customers with Google My Business optimization, local citations, and geo-targeted content that drives foot traffic.",
      stats: { value: "78%", label: "More Local Leads" },
    },
    {
      title: "E-commerce SEO",
      content:
        "Optimize product pages, fix crawl errors, and leverage schema markup to boost your online store’s visibility and sales",
      stats: { value: "143%", label: "More Product Views" },
    },
    {
      title: "Technical SEO",
      content:
        "Fix indexing issues, improve Core Web Vitals, and ensure mobile-first crawling to meet Google’s strictest standards.",
      stats: { value: "2.1s", label: "Local Speed" },
    },
  ]

  // Check if element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTab((prev) => (prev + 1) % tabs.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [tabs.length])

  return (
    <section
      ref={sectionRef}
      className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white border-b border-[#F5F5F5]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#003C8F]">Rank #1 on Google!</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our SEO experts optimize every pixel and keyword to propel your site to the top—even in cutthroat
            industries—with white-hat tactics.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          {/* Image container - full width on mobile, half width on desktop */}
          <div
            className={`w-full md:w-1/2 mb-8 md:mb-0 md:pr-4 lg:pr-8 xl:pr-12 flex justify-center md:justify-end transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px] overflow-hidden rounded-lg shadow-lg">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#0084FF]/10 rounded-full z-0 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#0084FF]/10 rounded-full z-0 animate-pulse delay-1000"></div>

              {/* Main image with loading animation */}
              <div className="relative z-10 transform transition-transform duration-500 hover:scale-[1.02]">
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#0084FF]/20 to-[#003C8F]/20 mix-blend-overlay transition-opacity duration-500 ${
                    isImageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
                <Image
                  src={seo_specialist || "/placeholder.svg"}
                  alt="SEO Dashboard"
                  width={450}
                  height={340}
                  className="rounded-lg object-contain"
                  onLoad={() => setIsImageLoaded(true)}
                />
              </div>

              {/* Floating SEO metrics */}
              <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md flex items-center space-x-2 text-xs animate-bounce">
                <Search className="h-3 w-3 text-[#0084FF]" />
                <span className="text-[#003C8F] font-medium">+156% Visibility</span>
              </div>

              <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-md flex items-center space-x-2 text-xs animate-bounce delay-500">
                <BarChart className="h-3 w-3 text-[#0084FF]" />
                <span className="text-[#003C8F] font-medium">Top 3 Rankings</span>
              </div>

              {/* Client testimonial */}
              <div className="absolute -bottom-10 right-10 bg-white p-3 rounded-lg shadow-lg max-w-[200px] text-xs animate-fadeIn delay-1000">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-[#003C8F] italic">&quot;Our traffic increased by 210% in just 3 months!&quot;</p>
                <p className="text-gray-500 mt-1">- John D., E-commerce Owner</p>
              </div>
            </div>
          </div>

          {/* Content container - full width on mobile, half width on desktop */}
          <div
            className={`w-full md:w-1/2 md:pl-4 lg:pl-8 xl:pl-12 transition-transform duration-1000 ${
              isVisible ? "translate-x-0" : "translate-x-8"
            }`}
          >
            {/* Tabs */}
            <div className="mb-8">
              <div className="flex border-b border-[#F5F5F5]">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      currentTab === index
                        ? "text-[#0084FF] border-b-2 border-[#0084FF]"
                        : "text-gray-600 hover:text-[#003C8F]"
                    }`}
                    onClick={() => setCurrentTab(index)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              <div className="p-4 bg-[#F5F5F5] rounded-b-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-[#003C8F]">{tabs[currentTab].title}</h3>
                  <div className="flex items-center bg-white px-2 py-1 rounded text-xs">
                    <span className="text-[#0084FF] font-bold">{tabs[currentTab].stats.value}</span>
                    <span className="text-gray-500 ml-1">{tabs[currentTab].stats.label}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{tabs[currentTab].content}</p>
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start p-3 rounded-lg transition-all duration-300 ${
                    activeFeature === index ? "bg-[#F5F5F5]" : "hover:bg-[#F5F5F5]/50"
                  } cursor-pointer`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 mr-3 sm:mr-4 lg:mr-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      activeFeature === index ? "bg-[#0084FF] text-white" : "bg-[#0084FF]/10 text-[#0084FF]"
                    }`}
                  >
                    <feature.icon
                      className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
                      strokeWidth={activeFeature === index ? 2 : 1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#003C8F] font-medium text-sm sm:text-base lg:text-lg">{feature.title}</h4>
                    {activeFeature === index && (
                      <p className="text-gray-600 text-sm mt-2 animate-fadeIn">{feature.description}</p>
                    )}
                  </div>
                  {activeFeature === index && <Check className="h-5 w-5 text-[#0084FF] flex-shrink-0 animate-fadeIn" />}
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0084FF] hover:bg-[#003C8F] text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0084FF] focus:ring-offset-2 text-sm sm:text-base mb-3 sm:mb-0"
              >
                View Our Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#0084FF] text-[#0084FF] hover:bg-[#0084FF]/5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0084FF] focus:ring-offset-2 text-sm sm:text-base"
              >
                Get a free SEO audit
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
