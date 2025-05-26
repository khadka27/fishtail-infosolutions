/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
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
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { useInView } from "react-intersection-observer"
import image3 from "@/Images/services-analytics-alt-colors-optimized.png"
import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
import image2 from "@/Images/services-seo-alt-colors-optimized.png"
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png"
import { CaseStudiesSection } from "./case-studies-section"
import { QuotePopup } from "./quote-popup"
import { Button } from "@/Components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import { useMobile } from "@/hooks/use-mobile"

// Define service categories
const categories = [
  { id: "all", name: "All Services" },
  { id: "marketing", name: "Marketing" },
  { id: "seo", name: "SEO" },
  { id: "design", name: "Design" },
]

// Define main services
const mainServices = [
  {
    id: 1,
    title: "Social Media Marketing",
    description:
      "Customers are interacting with brands through social media. If implemented correctly, social can bring immediate success to your business.",
    icon: <MessageCircle className="h-6 w-6" />,
    color: "#1d4e6f",
    textColor: "text-blue-100",
    image: image1,
    category: "marketing",
    link: "/Services/social-media",
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    description:
      "Search Engine Optimization is fundamental. Our SEO strategies can grant you a high-ranking placement in search results.",
    icon: <Search className="h-6 w-6" />,
    color: "#f5b642",
    textColor: "text-yellow-100",
    image: image2,
    category: "seo",
    link: "/Services/search-engine",
  },
  {
    id: 3,
    title: "Advanced Web Analytics",
    description:
      "Our services cover all aspects of Google Analytics, from initial setup to training, advanced tracking solutions and custom features.",
    icon: <BarChart className="h-6 w-6" />,
    color: "#8aad2d",
    textColor: "text-green-100",
    image: image3,
    category: "marketing",
    link: "/Services/content-marketing",
  },
  {
    id: 4,
    title: "Email Marketing",
    description: "Our custom Email Marketing services can help you save time and money.",
    icon: <Mail className="h-6 w-6" />,
    color: "#2e74b5",
    textColor: "text-blue-100",
    image: image4,
    category: "marketing",
    link: "/Services/email-marketing",
  },
  {
    id: 5,
    title: "Pay Per Click",
    description: "Pay Per Click marketing is easy and cost effective. We know everything about PPC.",
    icon: <DollarSign className="h-6 w-6" />,
    color: "#d9472b",
    textColor: "text-red-100",
    image: image1,
    category: "marketing",
    link: "/Services/ppc-marketing",
  },
  {
    id: 6,
    title: "Content Strategy",
    description: "Engage with your audience through great, original content.",
    icon: <FileText className="h-6 w-6" />,
    color: "#00a79d",
    textColor: "text-teal-100",
    image: image2,
    category: "marketing",
    link: "/Services/content-marketing",
  },
]

// Define additional services
const additionalServices = [
  {
    id: 7,
    title: "Local Search Strategy",
    description: "Maximize your presence on search engine results pages on a local scale.",
    icon: <MapPin className="h-6 w-6" />,
    category: "seo",
    link: "/Services/local-seo",
  },
  {
    id: 8,
    title: "Maps Search Optimization",
    description: "Google Maps Optimization is an important part of any successful local marketing strategy.",
    icon: <Map className="h-6 w-6" />,
    category: "seo",
    link: "/Services/search-engine",
  },
  {
    id: 9,
    title: "Link Building & Content",
    description:
      "Link building is and will continue to be a tremendously important component of Search Engine Optimization.",
    icon: <Link2 className="h-6 w-6" />,
    category: "seo",
    link: "/Services/content-marketing",
  },
  {
    id: 10,
    title: "Paid Search Advertising",
    description: "Paid listings on Google AdWords and Microsoft AdCenter can help you reach new customers.",
    icon: <Target className="h-6 w-6" />,
    category: "marketing",
    link: "/Services/search-engine",
  },
  {
    id: 11,
    title: "Custom Website Design",
    description: "Our team specializes in affordable web design and e-commerce.",
    icon: <Layout className="h-6 w-6" />,
    category: "design",
    link: "/Services/web-design",
  },
  {
    id: 12,
    title: "Custom Email Design",
    description: "Custom email templates that speak to your customers and resonate with your brand.",
    icon: <AtSign className="h-6 w-6" />,
    category: "design",
    link: "/Services/email-marketing",
  },
]

// Define testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "My company's Google rankings and overall site traffic improved dramatically after just a few months of working with this agency. The service we've received from their team has consistently been above and beyond our expectations.",
    name: "Matthew Lee",
    image: "/confident-professional.png",
  },
  {
    id: 2,
    quote:
      "Their team took the time to understand our business goals and created a tailored strategy that delivered real results. Our online presence has never been stronger.",
    name: "Sarah Johnson",
    image: "/confident-leader.png",
  },
  {
    id: 3,
    quote:
      "The ROI we've seen from their SEO and PPC campaigns has been incredible. They're transparent, data-driven, and truly care about our success.",
    name: "David Chen",
    image: "/confident-asian-executive.png",
  },
]

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const ServicesShowcase = () => {
  const [showQuotePopup, setShowQuotePopup] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredServices, setFilteredServices] = useState(mainServices)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const isMobile = useMobile()

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [additionalRef, additionalInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [strategyRef, strategyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleQuotePopup = () => {
    setShowQuotePopup((prev) => !prev)
  }

  const toggleServiceExpand = (id: number) => {
    if (expandedService === id) {
      setExpandedService(null)
    } else {
      setExpandedService(id)
    }
  }

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredServices(mainServices)
    } else {
      setFilteredServices(mainServices.filter((service) => service.category === selectedCategory))
    }
  }, [selectedCategory])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto px-4 py-16 md:py-24"
        >
          <h1 className="text-3xl md:text-5xl font-light text-gray-700 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Full Service Digital Creative Agency
            </span>
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            We pride ourselves on delivering compelling, digital marketing solutions. Our winning solutions and
            experiences help many of our clients interact and engage with their customers in the best possible way.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="w-full max-w-6xl mx-auto px-4 mb-8">
          <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setSelectedCategory(value)}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Main Services Grid */}
        <motion.div
          ref={servicesRef}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeIn}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-300"
              style={{ backgroundColor: service.color }}
            >
              <div className="p-6 text-white h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-white/20 mr-3">{service.icon}</div>
                  <h3 className="text-xl font-medium">{service.title}</h3>
                </div>

                <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <p className={`text-sm ${service.textColor} mb-4 flex-grow`}>{service.description}</p>

                <Link href={service.link} className="inline-flex items-center text-sm group">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services Section */}
        <motion.div
          ref={additionalRef}
          initial="hidden"
          animate={additionalInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="w-full bg-gradient-to-r from-[#1a2a3a] to-[#2c3e50] text-white py-16 "
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">Additional Specialized Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
              {additionalServices.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cursor-pointer overflow-hidden"
                  onClick={() => toggleServiceExpand(service.id)}
                >
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                        {expandedService === service.id ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </div>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: expandedService === service.id ? "auto" : 0,
                          opacity: expandedService === service.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-300 mb-3">{service.description}</p>
                        <Link
                          href={service.link}
                          className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded inline-block transition-colors"
                        >
                          Learn more
                        </Link>
                      </motion.div>

                      {expandedService !== service.id && (
                        <p className="text-sm text-gray-300 truncate">{service.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
              whileInView={{
                opacity: [0, 1],
                y: [20, 0],
              }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                className="bg-[#3498db] hover:bg-[#2980b9] text-white py-3 px-6 rounded flex items-center justify-center"
                size="lg"
              >
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Free SEO Consultation
                </Link>
              </Button>
              <Button
                onClick={toggleQuotePopup}
                className="bg-[#f39c12] hover:bg-[#e67e22] text-white py-3 px-6 rounded flex items-center justify-center"
                size="lg"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Request a Free Quote
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Strategy Section */}
        <motion.div
          ref={strategyRef}
          initial="hidden"
          animate={strategyInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="w-full max-w-6xl mx-auto px-4 py-16"
        >
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Call To Action */}
            <motion.div
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 text-pink-500">
                <Bell className="w-full h-full" />
              </div>
              <h3 className="text-xl font-medium mb-2">Call To Action</h3>
              <p className="text-gray-600">Inspire the target audience from social networks to visit your website.</p>
            </motion.div>

            {/* Engage */}
            <motion.div
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 text-orange-500">
                <MessageCircle className="w-full h-full" />
              </div>
              <h3 className="text-xl font-medium mb-2">Engage</h3>
              <p className="text-gray-600">Encourage dialogue and coverage from influential people and sites.</p>
            </motion.div>

            {/* Inspire */}
            <motion.div
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 text-blue-500">
                <Heart className="w-full h-full" />
              </div>
              <h3 className="text-xl font-medium mb-2">Inspire</h3>
              <p className="text-gray-600">Inspire the target audience to visit your website from social networks.</p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-4">
                We can help you achieve great results across several key areas including Search Engine Optimization,
                Social Media Marketing, Email Marketing and Digital Marketing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-4">
                We combine creative ideas with our vast experience in search technologies to deliver measurable results
                for our clients. We can help you build a sustainable, meaningful relationship with your clients by
                engaging them with your brand using social media platforms.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <div className="w-full bg-gradient-to-r from-[#2980b9] to-[#3498db] text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl font-light mb-4 md:mb-0">Our customers</h2>
              <Link href="/testimonials" className="text-sm underline">
                Read all testimonials
              </Link>
            </div>

            <div className="relative h-[300px] overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center gap-8 p-6"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: activeTestimonial === index ? 1 : 0,
                    x: activeTestimonial === index ? 0 : 100,
                    pointerEvents: activeTestimonial === index ? "auto" : "none",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex-1">
                    <blockquote className="text-xl italic">&quot;{testimonial.quote}&ldquo;</blockquote>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-white overflow-hidden mb-2 border-2 border-white">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <p className="font-medium">{testimonial.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 mx-1 rounded-full ${activeTestimonial === index ? "bg-white" : "bg-white/40"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <CaseStudiesSection />

      {/* Quote Popup */}
      <QuotePopup isOpen={showQuotePopup} onClose={toggleQuotePopup} />
    </>
  )
}

export default ServicesShowcase
