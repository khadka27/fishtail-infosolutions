"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronRight, Shield, Search, BarChart, Globe, AlertCircle,  ArrowDown,  DollarSign, Star, Trash2, Eye, Briefcase, FileText } from 'lucide-react'
import Form from "./form"
import { QuotePopup } from "./quote-popup"
import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
import image2 from "@/Images/services-seo-alt-colors-optimized.png"
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png"

// Define reputation management features
const reputationFeatures = [
  {
    title: "Brand Monitoring",
    description:
      "Comprehensive monitoring of your brand mentions across the web, social media, and review platforms.",
    icon: Eye,
    color: "blue",
  },
  {
    title: "Review Management",
    description: "Strategic handling of customer reviews to highlight positive feedback and address negative comments.",
    icon: Star,
    color: "yellow",
  },
  {
    title: "Crisis Management",
    description: "Rapid response strategies to mitigate and resolve reputation threats and PR crises.",
    icon: AlertCircle,
    color: "red",
  },
  {
    title: "Content Removal",
    description: "Legal and technical approaches to remove harmful or inaccurate content about your brand.",
    icon: Trash2,
    color: "purple",
  },
  {
    title: "SEO Reputation",
    description: "Strategic SEO to promote positive content and suppress negative search results.",
    icon: Search,
    color: "green",
  },
  {
    title: "Reputation Reporting",
    description: "Detailed analytics and insights on your brand's reputation across digital channels.",
    icon: BarChart,
    color: "teal",
  },
]

// Define reputation management process steps
const reputationSteps = [
  {
    title: "Reputation Audit",
    description: "We analyze your current online reputation and identify strengths, weaknesses, and potential threats.",
    icon: Search,
  },
  {
    title: "Strategy Development",
    description: "Our experts create a customized reputation management strategy tailored to your specific needs.",
    icon: FileText,
  },
  {
    title: "Content Creation",
    description: "We develop high-quality content that showcases your brand's strengths and expertise.",
    icon: Briefcase,
  },
  {
    title: "Implementation",
    description: "Strategic execution of reputation management tactics across relevant platforms and channels.",
    icon: Globe,
  },
  {
    title: "Monitoring & Response",
    description: "Continuous monitoring of your online presence with rapid response to emerging issues.",
    icon: Eye,
  },
  {
    title: "Reporting & Optimization",
    description: "Regular reporting on progress with data-driven adjustments to maximize results.",
    icon: BarChart,
  },
]

// Define case studies
const caseStudies = [
  {
    title: "Restaurant Chain Recovery",
    description: "Transformed a restaurant chain's reputation after a viral negative incident, increasing ratings by 2.8 stars.",
    image: image1,
    bgColor: "bg-[#1ab5b3]",
    stats: { value: "87%", label: "Positive Reviews" },
  },
  {
    title: "Executive Reputation Rebuild",
    description: "Rebuilt a C-suite executive's digital presence after misleading information damaged their professional image.",
    image: image2,
    bgColor: "bg-[#2c3e50]",
    stats: { value: "4x", label: "Positive Visibility" },
  },
  {
    title: "Healthcare Provider Protection",
    description: "Protected a healthcare provider from coordinated negative review campaigns with strategic response management.",
    image: image4,
    bgColor: "bg-[#8bc34a]",
    stats: { value: "92%", label: "Review Score" },
  },
  {
    title: "E-commerce Trust Restoration",
    description: "Restored consumer trust for an e-commerce brand after product quality concerns emerged on social media.",
    image: image1,
    bgColor: "bg-[#e74c3c]",
    stats: { value: "68%", label: "Trust Increase" },
  },
  {
    title: "Hotel Brand Transformation",
    description: "Transformed a hotel chain's digital reputation through strategic review management and content creation.",
    image: image2,
    bgColor: "bg-[#9b59b6]",
    stats: { value: "3.2★", label: "Rating Increase" },
  },
]

const ReputationManagementServices = () => {
  const formRef = useRef<HTMLDivElement>(null)
  const [showQuotePopup, setShowQuotePopup] = useState(false)
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleQuotePopup = () => {
    setShowQuotePopup((prev) => !prev)
  }

  // Auto-rotate case studies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCaseIndex((prev) => (prev + 1) % caseStudies.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="flex flex-col" ref={sectionRef}>
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-[#3a5998] to-[#192f60] text-white py-16 px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64">
              <Image
                src={image1 || "/placeholder.svg?height=256&width=256&query=reputation management shield"}
                alt="Reputation Management Services"
                width={256}
                height={256}
                className="object-contain"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-[#3a5998] px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                Brand Protection
              </motion.div>
            </div>
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-light mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Reputation Management Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We <span className="font-bold">protect and enhance</span> your online reputation with strategic monitoring,
            content management, and <span className="font-bold">proactive brand defense</span> across all digital
            channels.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              className="bg-white text-[#3a5998] hover:bg-gray-100 py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={scrollToForm}
            >
              <span className="font-medium">Get a Free Audit</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              className="bg-[#192f60] hover:bg-[#0f1d3d] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={toggleQuotePopup}
            >
              <span className="font-medium">Request a Quote</span>
              <DollarSign className="ml-2 h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <ArrowDown className="h-8 w-8 mx-auto text-white/70 animate-bounce" />
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="py-16 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-light text-gray-700 mb-4">Comprehensive Reputation Management Solutions</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We offer a complete suite of reputation management services to protect, repair, and enhance your brand&apos;s
            online presence across all digital channels.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {reputationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                activeFeature === index ? `ring-2 ring-${feature.color}-500` : ""
              }`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => setActiveFeature(activeFeature === index ? null : index)}
            >
              <div className={`w-12 h-12 rounded-full bg-${feature.color}-100 flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-500`} />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">{feature.title}</h3>

              <AnimatePresence>
                {activeFeature === index && (
                  <motion.p
                    className="text-gray-600 text-sm"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                )}
              </AnimatePresence>

              {activeFeature !== index && (
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Process Section */}
      <motion.div
        className="py-16 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-light text-gray-700 mb-4">Our Reputation Management Process</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We follow a structured, data-driven approach to managing and improving your online reputation through
              strategic monitoring, content creation, and proactive response.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

            <motion.div
              className="space-y-12 md:space-y-0"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {reputationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
                  variants={itemVariants}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <motion.div
                      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                        activeStep === index ? "ring-2 ring-[#3a5998]" : ""
                      }`}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setActiveStep(activeStep === index ? null : index)}
                    >
                      <h3 className="text-xl font-medium mb-2 text-gray-800 flex items-center">
                        {index % 2 === 0 ? (
                          <>
                            <span>{step.title}</span>
                            <step.icon className="w-5 h-5 ml-2 text-[#3a5998]" />
                          </>
                        ) : (
                          <>
                            <step.icon className="w-5 h-5 mr-2 text-[#3a5998]" />
                            <span>{step.title}</span>
                          </>
                        )}
                      </h3>

                      <AnimatePresence>
                        {activeStep === index && (
                          <motion.p
                            className="text-gray-600"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {activeStep !== index && (
                        <div
                          className={`flex items-center text-sm text-gray-500 mt-2 ${index % 2 === 0 ? "" : "justify-end"}`}
                        >
                          {index % 2 === 0 ? (
                            <>
                              <span>Learn more</span>
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </>
                          ) : (
                            <>
                              <ChevronRight className="w-4 h-4 mr-1 transform rotate-180" />
                              <span>Learn more</span>
                            </>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  <div className="relative md:w-8 md:h-8">
                    <motion.div
                      className="w-8 h-8 rounded-full bg-[#3a5998] text-white flex items-center justify-center z-10 relative"
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setActiveStep(activeStep === index ? null : index)}
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        className="py-16 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-light text-gray-700 mb-4">Our Reputation Management Impact</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We&apos;ve helped hundreds of businesses and individuals repair, protect, and enhance their online reputations.
            Here&apos;s our track record of success.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#3a5998] mb-2">500+</div>
            <div className="text-sm text-gray-600">Brands Protected</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#1abc9c] mb-2">85%</div>
            <div className="text-sm text-gray-600">Rating Improvement</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#2ecc71] mb-2">10K+</div>
            <div className="text-sm text-gray-600">Reviews Managed</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#f1c40f] mb-2">48</div>
            <div className="text-sm text-gray-600">Hours Response</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#e67e22] mb-2">20+</div>
            <div className="text-sm text-gray-600">Industries Served</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#e84393] mb-2">97%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="py-12 px-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button
          className="bg-[#3a5998] hover:bg-[#2d4373] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={scrollToForm}
        >
          <Shield className="mr-2 h-5 w-5" />
          <span>Protect your reputation</span>
        </button>
        <button
          className="bg-[#192f60] hover:bg-[#0f1d3d] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={toggleQuotePopup}
        >
          <DollarSign className="mr-2 h-5 w-5" />
          <span>Request a reputation audit</span>
        </button>
      </motion.div>

      {/* Case Studies */}
      <motion.div
        className="bg-gray-50 py-16 px-4"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex justify-between items-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-light text-gray-700">Reputation management success stories</h2>
            <Link href="/case-studies" className="text-[#3a5998] text-sm hover:underline flex items-center">
              <span>See all case studies</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          <div className="relative">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[0, 1, 2].map((i) => {
                const caseIndex = (currentCaseIndex + i) % caseStudies.length
                const caseStudy = caseStudies[caseIndex]

                return (
                  <motion.div
                    key={caseIndex}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`h-48 ${caseStudy.bgColor} flex items-center justify-center relative`}>
                      <Image
                        src={caseStudy.image || "/placeholder.svg"}
                        alt={caseStudy.title}
                        width={200}
                        height={150}
                        className="object-contain"
                      />
                      <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center">
                        <Star className="w-3 h-3 mr-1 text-[#f1c40f]" />
                        <span className="font-bold text-gray-800">{caseStudy.stats.value}</span>
                        <span className="ml-1 text-gray-600 text-[10px]">{caseStudy.stats.label}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-2">{caseStudy.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{caseStudy.description}</p>
                      <Link
                        href={`/case-studies/${caseStudy.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-[#3a5998] text-sm font-medium"
                      >
                        <span>View case study</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mb-8">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentCaseIndex / 3) === Math.floor(index / 3) ? "w-6 bg-[#3a5998]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentCaseIndex(index)}
                  aria-label={`Go to case study set ${Math.floor(index / 3) + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Reputation Management Platforms */}
      <motion.div
        className="py-16 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-light text-gray-700 mb-4">Platforms We Monitor & Manage</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We actively monitor and manage your reputation across all major digital platforms where your brand may be
            mentioned, reviewed, or discussed.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Review Platforms</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#3a5998] mr-2"></div>
                <span className="text-gray-700">Google Reviews</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#3a5998] mr-2"></div>
                <span className="text-gray-700">Yelp</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#3a5998] mr-2"></div>
                <span className="text-gray-700">TripAdvisor</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#3a5998] mr-2"></div>
                <span className="text-gray-700">Trustpilot</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#3a5998] mr-2"></div>
                <span className="text-gray-700">BBB</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#3a5998] mr-2"></div>
                <span className="text-gray-700">Industry-Specific</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Social Media Platforms</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#2ecc71] mr-2"></div>
                <span className="text-gray-700">Facebook</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#2ecc71] mr-2"></div>
                <span className="text-gray-700">Twitter/X</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#2ecc71] mr-2"></div>
                <span className="text-gray-700">Instagram</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#2ecc71] mr-2"></div>
                <span className="text-gray-700">LinkedIn</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#2ecc71] mr-2"></div>
                <span className="text-gray-700">YouTube</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#2ecc71] mr-2"></div>
                <span className="text-gray-700">TikTok</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Search & News</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#e74c3c] mr-2"></div>
                <span className="text-gray-700">Google Search</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#e74c3c] mr-2"></div>
                <span className="text-gray-700">Bing</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#e74c3c] mr-2"></div>
                <span className="text-gray-700">News Articles</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#e74c3c] mr-2"></div>
                <span className="text-gray-700">Press Releases</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#e74c3c] mr-2"></div>
                <span className="text-gray-700">Blogs</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#e74c3c] mr-2"></div>
                <span className="text-gray-700">Forums</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Professional & Industry</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#9b59b6] mr-2"></div>
                <span className="text-gray-700">Glassdoor</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#9b59b6] mr-2"></div>
                <span className="text-gray-700">Indeed</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#9b59b6] mr-2"></div>
                <span className="text-gray-700">Industry Directories</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#9b59b6] mr-2"></div>
                <span className="text-gray-700">Professional Boards</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#9b59b6] mr-2"></div>
                <span className="text-gray-700">Trade Publications</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#9b59b6] mr-2"></div>
                <span className="text-gray-700">Complaint Sites</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Form Section with Ref */}
      <div ref={formRef} className="bg-gray-50 py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-gray-700 mb-4">Get Your Free Reputation Audit</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how your brand is perceived online and receive actionable recommendations to improve your
              reputation.
            </p>
          </div>
          <Form />
        </motion.div>
      </div>

      {/* Quote Popup */}
      <QuotePopup isOpen={showQuotePopup} onClose={toggleQuotePopup} />
    </div>
  )
}

export default ReputationManagementServices
