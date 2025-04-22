"use client"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronRight, Instagram, Facebook, Twitter, Linkedin, Youtube, TrendingUp, Users, MessageCircle, ArrowDown, DollarSign, BarChart2, PieChart, FileText, ImageIcon, Target, Heart, Share2, CheckCircle, Clock, Award, Search } from 'lucide-react'
import Form from "./form"
import { QuotePopup } from "./quote-popup"
import image3 from "@/Images/services-analytics-alt-colors-optimized.png"
import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
import image2 from "@/Images/services-seo-alt-colors-optimized.png"
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png"
import socialmarketing from "@/Images/social-marketing.png"

// Define social media marketing features
const socialMediaFeatures = [
  {
    title: "Strategy Development",
    description:
      "Custom social media strategies aligned with your business goals, target audience, and industry benchmarks.",
    icon: Target,
    color: "blue",
  },
  {
    title: "Content Creation",
    description:
      "Engaging, on-brand content creation including graphics, videos, captions, and hashtag strategies.",
    icon: ImageIcon,
    color: "purple",
  },
  {
    title: "Community Management",
    description:
      "Active engagement with your audience through comments, messages, and proactive community building.",
    icon: Users,
    color: "green",
  },
  {
    title: "Paid Social Advertising",
    description:
      "Strategic paid campaigns across social platforms with advanced targeting, A/B testing, and optimization.",
    icon: TrendingUp,
    color: "red",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Comprehensive performance tracking with actionable insights and regular reporting on key metrics.",
    icon: BarChart2,
    color: "yellow",
  },
  {
    title: "Influencer Marketing",
    description:
      "Strategic partnerships with relevant influencers to expand reach and build credibility with new audiences.",
    icon: Award,
    color: "teal",
  },
]

// Define social media marketing process steps
const socialMediaSteps = [
  {
    title: "Discovery & Audit",
    description:
      "We analyze your current social presence, competitors, and industry benchmarks to identify opportunities.",
    icon: Search,
  },
  {
    title: "Strategy Development",
    description:
      "We create a customized social media strategy aligned with your business goals and target audience.",
    icon: Target,
  },
  {
    title: "Content Planning",
    description:
      "We develop a content calendar with themes, topics, and posting schedules optimized for each platform.",
    icon: FileText,
  },
  {
    title: "Content Creation",
    description:
      "We produce high-quality, engaging content including graphics, videos, captions, and hashtags.",
    icon: ImageIcon,
  },
  {
    title: "Community Management",
    description:
      "We actively engage with your audience, respond to comments and messages, and build your community.",
    icon: MessageCircle,
  },
  {
    title: "Analysis & Optimization",
    description:
      "We continuously monitor performance, provide detailed reports, and optimize strategy based on results.",
    icon: PieChart,
  },
]

// Define case studies
const caseStudies = [
  {
    title: "Fashion Brand Engagement",
    description:
      "Increased engagement by 287% and followers by 156% for a fashion retailer through strategic content and community management.",
    image: image1,
    bgColor: "bg-[#405DE6]",
    stats: { value: "287%", label: "Engagement Increase" },
  },
  {
    title: "SaaS Lead Generation",
    description:
      "Generated 143 qualified leads per month for a B2B SaaS company through targeted LinkedIn content and advertising.",
    image: image2,
    bgColor: "bg-[#0A66C2]",
    stats: { value: "143", label: "Monthly Leads" },
  },
  {
    title: "Restaurant Chain Awareness",
    description:
      "Boosted local awareness and foot traffic by 92% for a restaurant chain through location-based content and promotions.",
    image: image3,
    bgColor: "bg-[#FF0000]",
    stats: { value: "92%", label: "Traffic Increase" },
  },
  {
    title: "E-commerce Revenue Growth",
    description:
      "Increased social media-driven revenue by 215% for an e-commerce store through shoppable posts and strategic ads.",
    image: image4,
    bgColor: "bg-[#1DB954]",
    stats: { value: "215%", label: "Revenue Growth" },
  },
  {
    title: "Nonprofit Awareness Campaign",
    description:
      "Expanded reach by 327% and donations by 156% for a nonprofit through compelling storytelling and community building.",
    image: image1,
    bgColor: "bg-[#1DA1F2]",
    stats: { value: "327%", label: "Reach Expansion" },
  },
]

const SocialMediaMarketing = () => {
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
        className="bg-gradient-to-r from-[#405DE6] to-[#5851DB] text-white py-16 px-4 text-center"
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
                src={socialmarketing ||"/social-media-marketing-illustration.png"}
                alt="Social Media Marketing Services"
                width={256}
                height={256}
                className="object-contain"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-[#405DE6] px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                Grow Your Brand
              </motion.div>
            </div>
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-light mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Social Media Marketing Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We help your business <span className="font-bold">build a powerful social presence</span>, engage with your{" "}
            <span className="font-bold">target audience</span>, and drive measurable results through strategic social
            media marketing.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              className="bg-white text-[#405DE6] hover:bg-gray-100 py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={scrollToForm}
            >
              <span className="font-medium">Get a Free Social Media Audit</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              className="bg-[#F56040] hover:bg-[#E1483D] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
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

      {/* Social Media Platforms */}
      <motion.div
        className="py-12 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-light text-gray-700">We manage all major social platforms</h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#1877F2]/10 flex items-center justify-center mb-2">
              <Facebook className="w-8 h-8 text-[#1877F2]" />
            </div>
            <span className="text-sm text-gray-600">Facebook</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#405DE6]/10 via-[#5851DB]/10 to-[#E1306C]/10 flex items-center justify-center mb-2">
              <Instagram className="w-8 h-8 text-[#E1306C]" />
            </div>
            <span className="text-sm text-gray-600">Instagram</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center mb-2">
              <Twitter className="w-8 h-8 text-[#1DA1F2]" />
            </div>
            <span className="text-sm text-gray-600">Twitter</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mb-2">
              <Linkedin className="w-8 h-8 text-[#0A66C2]" />
            </div>
            <span className="text-sm text-gray-600">LinkedIn</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#FF0000]/10 flex items-center justify-center mb-2">
              <Youtube className="w-8 h-8 text-[#FF0000]" />
            </div>
            <span className="text-sm text-gray-600">YouTube</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#000000]/10 flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-black"
              >
                <path d="M9 12A3 3 0 1 0 9 6 3 3 0 0 0 9 12zM9 12v8M15 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM15 12v8" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">TikTok</span>
          </motion.div>
        </motion.div>
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Comprehensive Social Media Solutions</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our social media marketing services are designed to help your business build a strong online presence,
            engage with your audience, and drive measurable results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {socialMediaFeatures.map((feature, index) => (
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

      {/* Why Social Media Marketing Matters Section */}
      <motion.div
        className="py-16 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-light text-gray-700 mb-4">Why Social Media Marketing Matters</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              In today&apos;s digital landscape, social media is essential for businesses of all sizes. Here&apos;s why investing
              in social media marketing is crucial for your business growth.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="w-12 h-12 rounded-full bg-[#405DE6]/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#405DE6]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">4.8 Billion Social Media Users Worldwide</h3>
              <p className="text-gray-600 text-sm">
                With over 60% of the world&apos;s population on social media, these platforms provide unparalleled access to
                your target audience.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="w-12 h-12 rounded-full bg-[#F56040]/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#F56040]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">2.5 Hours Daily Average Social Media Usage</h3>
              <p className="text-gray-600 text-sm">
                The average person spends 2.5 hours daily on social media, providing multiple opportunities to engage
                with your brand.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="w-12 h-12 rounded-full bg-[#5851DB]/10 flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-[#5851DB]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">54% Research Products on Social Media</h3>
              <p className="text-gray-600 text-sm">
                Over half of social browsers use social media to research products, making these platforms crucial for
                brand discovery.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="w-12 h-12 rounded-full bg-[#833AB4]/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#833AB4]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">71% Recommend Brands After Positive Experiences</h3>
              <p className="text-gray-600 text-sm">
                Nearly three-quarters of consumers will recommend a brand to others after a positive social media
                experience.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="w-12 h-12 rounded-full bg-[#C13584]/10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-[#C13584]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">76% Higher Conversion Rates</h3>
              <p className="text-gray-600 text-sm">
                Companies with integrated social media marketing enjoy 76% higher conversion rates than those without.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="w-12 h-12 rounded-full bg-[#FCAF45]/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#FCAF45]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">3x Higher Brand Recall</h3>
              <p className="text-gray-600 text-sm">
                Brands active on social media enjoy 3x higher brand recall compared to those with limited or no social
                presence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div
        className="py-16 px-4 bg-white"
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
            <h2 className="text-3xl font-light text-gray-700 mb-4">Our Social Media Marketing Process</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We follow a proven, data-driven approach to social media marketing that consistently delivers results for
              businesses across industries and markets.
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
              {socialMediaSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
                  variants={itemVariants}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <motion.div
                      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                        activeStep === index ? "ring-2 ring-[#405DE6]" : ""
                      }`}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setActiveStep(activeStep === index ? null : index)}
                    >
                      <h3 className="text-xl font-medium mb-2 text-gray-800 flex items-center">
                        {index % 2 === 0 ? (
                          <>
                            <span>{step.title}</span>
                            <step.icon className="w-5 h-5 ml-2 text-[#405DE6]" />
                          </>
                        ) : (
                          <>
                            <step.icon className="w-5 h-5 mr-2 text-[#405DE6]" />
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
                      className="w-8 h-8 rounded-full bg-[#405DE6] text-white flex items-center justify-center z-10 relative"
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Our Social Media Impact</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We&apos;ve helped hundreds of businesses achieve significant growth through strategic social media marketing.
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
            <div className="text-4xl font-light text-[#405DE6] mb-2">500+</div>
            <div className="text-sm text-gray-600">Brands Managed</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#5851DB] mb-2">178%</div>
            <div className="text-sm text-gray-600">Avg. Engagement</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#833AB4] mb-2">15M+</div>
            <div className="text-sm text-gray-600">Audience Reached</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#C13584] mb-2">92%</div>
            <div className="text-sm text-gray-600">Client Retention</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#E1306C] mb-2">22+</div>
            <div className="text-sm text-gray-600">Industries Served</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#FCAF45] mb-2">143%</div>
            <div className="text-sm text-gray-600">Avg. ROI</div>
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
          className="bg-[#405DE6] hover:bg-[#3951C6] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={scrollToForm}
        >
          <Instagram className="mr-2 h-5 w-5" />
          <span>Get your free social media audit</span>
        </button>
        <button
          className="bg-[#F56040] hover:bg-[#E1483D] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={toggleQuotePopup}
        >
          <TrendingUp className="mr-2 h-5 w-5" />
          <span>Boost your social presence today</span>
        </button>
      </motion.div>

      {/* Case Studies */}
      {/* <motion.div
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
            <h2 className="text-2xl font-light text-gray-700">Social media success stories</h2>
            <Link href="/case-studies" className="text-[#405DE6] text-sm hover:underline flex items-center">
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
                        src={
                          caseStudy.image || "/placeholder.svg?height=150&width=200&query=social media marketing dashboard"
                        }
                        alt={caseStudy.title}
                        width={200}
                        height={150}
                        className="object-contain"
                      />
                      <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1 text-[#405DE6]" />
                        <span className="font-bold text-gray-800">{caseStudy.stats.value}</span>
                        <span className="ml-1 text-gray-600 text-[10px]">{caseStudy.stats.label}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-2">{caseStudy.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{caseStudy.description}</p>
                      <Link
                        href={`/case-studies/${caseStudy.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-[#405DE6] text-sm font-medium"
                      >
                        <span>View case study</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div> */}

            {/* Pagination Dots */}
            {/* <div className="flex justify-center gap-2 mb-8">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentCaseIndex / 3) === Math.floor(index / 3) ? "w-6 bg-[#405DE6]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentCaseIndex(index)}
                  aria-label={`Go to case study set ${Math.floor(index / 3) + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div> */}

      {/* Social Media Benefits */}
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Benefits of Social Media Marketing</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Investing in social media marketing provides numerous advantages for businesses of all sizes. Here&apos;s how
            strategic social media can benefit your business.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#405DE6]" />
              <span>Increased Brand Awareness</span>
            </h3>
            <p className="text-gray-600">
              Expand your reach and visibility to new audiences, increasing recognition and recall of your brand in the
              marketplace.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#405DE6]" />
              <span>Higher Engagement & Loyalty</span>
            </h3>
            <p className="text-gray-600">
              Build meaningful relationships with your audience through regular interaction, fostering loyalty and
              creating brand advocates.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#405DE6]" />
              <span>Targeted Advertising</span>
            </h3>
            <p className="text-gray-600">
              Reach specific demographics, interests, and behaviors with precision targeting that traditional
              advertising cannot match.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#405DE6]" />
              <span>Increased Website Traffic</span>
            </h3>
            <p className="text-gray-600">
              Drive more visitors to your website through strategic content sharing and calls-to-action on social
              platforms.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#405DE6]" />
              <span>Improved Customer Insights</span>
            </h3>
            <p className="text-gray-600">
              Gain valuable data about your audience&apos;s preferences, behaviors, and needs through social listening and
              analytics.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#405DE6]" />
              <span>Enhanced Customer Service</span>
            </h3>
            <p className="text-gray-600">
              Provide responsive, public customer support that demonstrates your commitment to customer satisfaction.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#405DE6]" />
              <span>Competitive Advantage</span>
            </h3>
            <p className="text-gray-600">
              Stay ahead of competitors with a strong, strategic social media presence that positions your brand as an
              industry leader.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#405DE6]" />
              <span>Cost-Effective Marketing</span>
            </h3>
            <p className="text-gray-600">
              Achieve significant results with lower investment compared to traditional marketing channels, with
              measurable ROI.
            </p>
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
            <h2 className="text-3xl font-light text-gray-700 mb-4">Get Your Free Social Media Audit</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how your business is performing on social media and receive actionable recommendations to improve
              your social presence and engagement.
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

export default SocialMediaMarketing
