/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ChevronRight,
  Search,
  BarChart,
  Share2,
  Mail,
  TrendingUp,
  ArrowDown,
  MessageSquare,
  DollarSign,
  Target,
  Globe,
  Megaphone,
  PenTool,
} from "lucide-react"
import Form from "./form"

import image3 from "@/Images/services-analytics-alt-colors-optimized.png"
import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
import image2 from "@/Images/services-seo-alt-colors-optimized.png"
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png"
import { QuotePopup } from "./quote-popup"

// Define service features
const marketingFeatures = [
  {
    title: "Search Engine Optimization",
    description: "Improve your website's visibility in search results and drive organic traffic that converts.",
    icon: Search,
    color: "blue",
  },
  {
    title: "Pay-Per-Click Advertising",
    description: "Strategic ad campaigns that target your ideal customers and maximize your ROI.",
    icon: Target,
    color: "red",
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience and build brand loyalty through effective social media strategies.",
    icon: Share2,
    color: "green",
  },
  {
    title: "Content Marketing",
    description: "Create valuable content that attracts, engages, and converts your target audience.",
    icon: PenTool,
    color: "purple",
  },
  {
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email campaigns.",
    icon: Mail,
    color: "orange",
  },
  {
    title: "Analytics & Reporting",
    description: "Data-driven insights to continuously optimize your marketing performance.",
    icon: BarChart,
    color: "teal",
  },
]

// Define process steps
const processSteps = [
  {
    title: "Discovery",
    description: "We analyze your business, industry, competitors, and target audience to create a strategic plan.",
    icon: Search,
  },
  {
    title: "Strategy",
    description: "We develop a comprehensive marketing strategy tailored to your specific goals and budget.",
    icon: Target,
  },
  {
    title: "Implementation",
    description: "Our team executes the strategy across all relevant channels with precision and creativity.",
    icon: Megaphone,
  },
  {
    title: "Optimization",
    description: "We continuously test, learn, and refine our approach to maximize performance.",
    icon: TrendingUp,
  },
  {
    title: "Scaling",
    description: "Once we identify what works, we scale successful tactics to amplify your results.",
    icon: Globe,
  },
  {
    title: "Reporting",
    description: "We provide transparent, detailed reports on all key metrics and ROI.",
    icon: BarChart,
  },
]

// Define projects
const projects = [
  {
    title: "Vertex Retail",
    description: "Increased organic traffic by 187% and conversions by 43% through comprehensive SEO strategy.",
    image: image2,
    bgColor: "bg-[#9c27b0]",
    stats: { value: "187%", label: "Traffic Increase" },
  },
  {
    title: "Nexus Finance",
    description: "Achieved 320% ROI on PPC campaigns by optimizing ad spend and improving landing pages.",
    image: image3,
    bgColor: "bg-[#673ab7]",
    stats: { value: "320%", label: "ROI" },
  },
  {
    title: "Alpine Tech",
    description: "Social media strategy increased engagement by 78% and generated 2,500+ qualified leads.",
    image: image4,
    bgColor: "bg-[#3f51b5]",
    stats: { value: "78%", label: "Engagement" },
  },
  {
    title: "Quantum Health",
    description: "Content marketing campaign resulted in 94% increase in organic traffic and 62 backlinks.",
    image: image1,
    bgColor: "bg-[#2196f3]",
    stats: { value: "94%", label: "Traffic Growth" },
  },
  {
    title: "Pulse Media",
    description: "Email marketing automation increased customer retention by 42% and boosted repeat purchases.",
    image: image2,
    bgColor: "bg-[#00bcd4]",
    stats: { value: "42%", label: "Retention Increase" },
  },
]

const OnlineMarketingServices = () => {
  const formRef = useRef<HTMLDivElement>(null)
  const [showQuotePopup, setShowQuotePopup] = useState(false)
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleQuotePopup = () => {
    setShowQuotePopup((prev) => !prev)
  }

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
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
        className="bg-gradient-to-r from-[#673ab7] to-[#9c27b0] text-white py-16 px-4 text-center"
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
                src={image1 || "/placeholder.svg"}
                alt="Online Marketing Services"
                width={256}
                height={256}
                className="object-contain"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-[#673ab7] px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                Results-Driven
              </motion.div>
            </div>
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-light mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Online Marketing Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Drive <span className="font-bold">measurable growth</span> with data-driven marketing strategies that
            attract, engage, and convert your <span className="font-bold">ideal customers</span> across all digital
            channels.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              className="bg-white text-[#673ab7] hover:bg-gray-100 py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={scrollToForm}
            >
              <span className="font-medium">Get Your Marketing Plan</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              className="bg-[#2c3e50] hover:bg-[#34495e] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={toggleQuotePopup}
            >
              <span className="font-medium">Get a Free Quote</span>
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

      {/* Marketing Services Section */}
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Comprehensive Digital Marketing Solutions</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our integrated approach ensures your marketing efforts work together to maximize visibility, engagement, and
            conversions across all digital touchpoints.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {marketingFeatures.map((feature, index) => (
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
            <h2 className="text-3xl font-light text-gray-700 mb-4">Our Marketing Process</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We follow a proven methodology that consistently delivers measurable results for businesses of all sizes
              across industries.
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
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
                  variants={itemVariants}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <motion.div
                      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                        activeStep === index ? "ring-2 ring-[#673ab7]" : ""
                      }`}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setActiveStep(activeStep === index ? null : index)}
                    >
                      <h3 className="text-xl font-medium mb-2 text-gray-800 flex items-center">
                        {index % 2 === 0 ? (
                          <>
                            <span>{step.title}</span>
                            <step.icon className="w-5 h-5 ml-2 text-[#673ab7]" />
                          </>
                        ) : (
                          <>
                            <step.icon className="w-5 h-5 mr-2 text-[#673ab7]" />
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
                      className="w-8 h-8 rounded-full bg-[#673ab7] text-white flex items-center justify-center z-10 relative"
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Our Marketing Impact</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We measure our success by the results we deliver for our clients. Here&apos;s what we&apos;ve achieved across our
            portfolio.
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
            <div className="text-4xl font-light text-[#673ab7] mb-2">157%</div>
            <div className="text-sm text-gray-600">Average traffic increase</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#9c27b0] mb-2">43%</div>
            <div className="text-sm text-gray-600">Conversion rate improvement</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#3f51b5] mb-2">284%</div>
            <div className="text-sm text-gray-600">Average ROI on ad spend</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#2196f3] mb-2">68%</div>
            <div className="text-sm text-gray-600">Social engagement increase</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#00bcd4] mb-2">37%</div>
            <div className="text-sm text-gray-600">Email open rate improvement</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#009688] mb-2">12.4x</div>
            <div className="text-sm text-gray-600">Average lead generation growth</div>
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
          className="bg-[#673ab7] hover:bg-[#5e35b1] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={scrollToForm}
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          <span>Get your free marketing audit</span>
        </button>
        <button
          className="bg-[#9c27b0] hover:bg-[#8e24aa] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={toggleQuotePopup}
        >
          <DollarSign className="mr-2 h-5 w-5" />
          <span>Request custom pricing</span>
        </button>
      </motion.div>

      {/* Marketing Projects */}
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
            <h2 className="text-2xl font-light text-gray-700">Our marketing success stories</h2>
            <Link href="/case-studies" className="text-[#673ab7] text-sm hover:underline flex items-center">
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
                const projectIndex = (currentProjectIndex + i) % projects.length
                const project = projects[projectIndex]

                return (
                  <motion.div
                    key={projectIndex}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`h-48 ${project.bgColor} flex items-center justify-center relative`}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={200}
                        height={150}
                        className="object-contain"
                      />
                      <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1 text-[#673ab7]" />
                        <span className="font-bold text-gray-800">{project.stats.value}</span>
                        <span className="ml-1 text-gray-600 text-[10px]">{project.stats.label}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                      <Link
                        href={`/case-study/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-[#673ab7] text-sm font-medium"
                      >
                        <span>View case study</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

           
            <div className="flex justify-center gap-2 mb-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentProjectIndex / 3) === Math.floor(index / 3) ? "w-6 bg-[#673ab7]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentProjectIndex(index)}
                  aria-label={`Go to project set ${Math.floor(index / 3) + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div> */}

      {/* Approach Section */}
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Our Marketing Philosophy</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Data-Driven Decision Making</h3>
            <p className="text-gray-700 leading-relaxed">
              We believe in letting data guide our marketing strategies. Every campaign begins with thorough research
              and continues with constant monitoring and optimization. We track key performance indicators to ensure
              your marketing budget is always generating the highest possible return on investment. This approach
              eliminates guesswork and allows us to double down on what works while quickly pivoting away from what
              doesn&apos;t.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Integrated Marketing Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              We understand that modern marketing requires a cohesive strategy across multiple channels. Our integrated
              approach ensures that your SEO, PPC, social media, content, and email marketing efforts work together
              harmoniously to create a consistent brand experience and maximize results. By coordinating messaging and
              timing across channels, we create powerful marketing synergies that amplify your reach and impact.
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
            <h2 className="text-3xl font-light text-gray-700 mb-4">Grow Your Business With Strategic Marketing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tell us about your business goals and challenges, and we&apos;ll create a custom marketing strategy to help you
              achieve them.
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

export default OnlineMarketingServices
