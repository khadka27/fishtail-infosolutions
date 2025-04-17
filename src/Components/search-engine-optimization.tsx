"use client"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronRight, Search, BarChart2, Globe, LineChart, ArrowUp, Code, ArrowDown, MessageSquare, DollarSign, Award, Zap, Link2, Settings, FileText, Layers, Smartphone } from 'lucide-react'
import Form from "./form"
import { QuotePopup } from "./quote-popup"
import image3 from "@/Images/services-analytics-alt-colors-optimized.png"
import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
import image2 from "@/Images/services-seo-alt-colors-optimized.png"
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png"

// Define SEO features
const seoFeatures = [
  {
    title: "On-Page SEO",
    description:
      "Optimize your website's content, meta tags, and structure to improve relevance and visibility for target keywords.",
    icon: FileText,
    color: "blue",
  },
  {
    title: "Off-Page SEO",
    description: "Build high-quality backlinks and enhance your website's authority through strategic outreach and content promotion.",
    icon: Link2,
    color: "green",
  },
  {
    title: "Technical SEO",
    description: "Improve your website's technical foundation to ensure search engines can crawl, index, and render your pages effectively.",
    icon: Code,
    color: "purple",
  },
  {
    title: "Local SEO",
    description: "Optimize your business for local search to attract nearby customers and improve visibility in location-based searches.",
    icon: Globe,
    color: "orange",
  },
  {
    title: "Content Strategy",
    description: "Develop high-quality, keyword-optimized content that attracts, engages, and converts your target audience.",
    icon: Layers,
    color: "red",
  },
  {
    title: "SEO Analytics",
    description: "Track, analyze, and report on your SEO performance with comprehensive data and actionable insights.",
    icon: BarChart2,
    color: "teal",
  },
]

// Define SEO process steps
const seoSteps = [
  {
    title: "SEO Audit & Analysis",
    description: "We conduct a comprehensive analysis of your website, competitors, and industry to identify opportunities and challenges.",
    icon: Search,
  },
  {
    title: "Keyword Research",
    description: "We identify high-value keywords with optimal search volume and competition levels to target in your SEO campaign.",
    icon: FileText,
  },
  {
    title: "On-Page Optimization",
    description: "We optimize your website's content, meta tags, and structure to improve relevance for target keywords.",
    icon: Settings,
  },
  {
    title: "Technical Optimization",
    description: "We enhance your website's technical foundation to ensure search engines can crawl and index your content effectively.",
    icon: Code,
  },
  {
    title: "Content Development",
    description: "We create and optimize high-quality content that attracts, engages, and converts your target audience.",
    icon: Layers,
  },
  {
    title: "Link Building",
    description: "We build high-quality backlinks to increase your website's authority and improve search rankings.",
    icon: Link2,
  },
]

// Define case studies
const caseStudies = [
  {
    title: "E-commerce Revenue Growth",
    description:
      "Increased organic traffic by 215% and revenue by 175% for an e-commerce store through comprehensive SEO strategy.",
    image: image2,
    bgColor: "bg-[#1ab5b3]",
    stats: { value: "215%", label: "Traffic Increase" },
  },
  {
    title: "Local Business Dominance",
    description:
      "Achieved top 3 rankings for 45 local keywords, resulting in 320% more leads for a service-based business.",
    image: image3,
    bgColor: "bg-[#2c3e50]",
    stats: { value: "320%", label: "Lead Increase" },
  },
  {
    title: "SaaS Subscription Growth",
    description:
      "Doubled organic traffic and increased trial signups by 85% for a SaaS company through technical SEO and content strategy.",
    image: image4,
    bgColor: "bg-[#8bc34a]",
    stats: { value: "85%", label: "Signup Increase" },
  },
  {
    title: "Healthcare Authority Building",
    description:
      "Established a healthcare provider as an industry authority with 1st page rankings for 60+ competitive medical terms.",
    image: image1,
    bgColor: "bg-[#e74c3c]",
    stats: { value: "60+", label: "1st Page Keywords" },
  },
  {
    title: "E-learning Platform Expansion",
    description:
      "Helped an e-learning platform expand to new markets with multilingual SEO, increasing global traffic by 245%.",
    image: image2,
    bgColor: "bg-[#9b59b6]",
    stats: { value: "245%", label: "Global Traffic Growth" },
  },
]

const SearchEngineOptimization = () => {
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
        className="bg-gradient-to-r from-[#4285f4] to-[#34a853] text-white py-16 px-4 text-center"
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
                src={image1 || "/placeholder.svg?key=pwcpa"}
                alt="Search Engine Optimization Services"
                width={256}
                height={256}
                className="object-contain"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-[#4285f4] px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                Rank Higher
              </motion.div>
            </div>
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-light mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Search Engine Optimization Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We help your business <span className="font-bold">rank higher</span> in search results, drive{" "}
            <span className="font-bold">targeted organic traffic</span>, and increase conversions with data-driven SEO
            strategies.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              className="bg-white text-[#4285f4] hover:bg-gray-100 py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={scrollToForm}
            >
              <span className="font-medium">Get a Free SEO Audit</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              className="bg-[#34a853] hover:bg-[#2d9249] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={toggleQuotePopup}
            >
              <span className="font-medium">Request SEO Quote</span>
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Comprehensive SEO Solutions</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our holistic approach to search engine optimization addresses all aspects of your online presence to maximize
            visibility, traffic, and conversions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {seoFeatures.map((feature, index) => (
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
            <h2 className="text-3xl font-light text-gray-700 mb-4">Our SEO Process</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We follow a proven, data-driven approach to SEO that consistently delivers results for businesses across
              industries and markets.
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
              {seoSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
                  variants={itemVariants}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <motion.div
                      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                        activeStep === index ? "ring-2 ring-[#4285f4]" : ""
                      }`}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setActiveStep(activeStep === index ? null : index)}
                    >
                      <h3 className="text-xl font-medium mb-2 text-gray-800 flex items-center">
                        {index % 2 === 0 ? (
                          <>
                            <span>{step.title}</span>
                            <step.icon className="w-5 h-5 ml-2 text-[#4285f4]" />
                          </>
                        ) : (
                          <>
                            <step.icon className="w-5 h-5 mr-2 text-[#4285f4]" />
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
                      className="w-8 h-8 rounded-full bg-[#4285f4] text-white flex items-center justify-center z-10 relative"
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Our SEO Impact</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We&apos;ve helped hundreds of businesses achieve significant growth through strategic search engine optimization.
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
            <div className="text-4xl font-light text-[#4285f4] mb-2">650+</div>
            <div className="text-sm text-gray-600">Websites Optimized</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#34a853] mb-2">187%</div>
            <div className="text-sm text-gray-600">Avg. Traffic Increase</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#ea4335] mb-2">15K+</div>
            <div className="text-sm text-gray-600">Keywords Ranked</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#fbbc05] mb-2">94%</div>
            <div className="text-sm text-gray-600">Client Retention</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#4285f4] mb-2">25+</div>
            <div className="text-sm text-gray-600">Industries Served</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#34a853] mb-2">143%</div>
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
          className="bg-[#4285f4] hover:bg-[#3367d6] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={scrollToForm}
        >
          <Search className="mr-2 h-5 w-5" />
          <span>Get your free SEO audit</span>
        </button>
        <button
          className="bg-[#34a853] hover:bg-[#2d9249] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={toggleQuotePopup}
        >
          <ArrowUp className="mr-2 h-5 w-5" />
          <span>Boost your rankings today</span>
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
            <h2 className="text-2xl font-light text-gray-700">SEO success stories</h2>
            <Link href="/case-studies" className="text-[#4285f4] text-sm hover:underline flex items-center">
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
                        src={caseStudy.image || "/placeholder.svg?height=150&width=200&query=seo analytics dashboard"}
                        alt={caseStudy.title}
                        width={200}
                        height={150}
                        className="object-contain"
                      />
                      <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center">
                        <LineChart className="w-3 h-3 mr-1 text-[#4285f4]" />
                        <span className="font-bold text-gray-800">{caseStudy.stats.value}</span>
                        <span className="ml-1 text-gray-600 text-[10px]">{caseStudy.stats.label}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-2">{caseStudy.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{caseStudy.description}</p>
                      <Link
                        href={`/case-studies/${caseStudy.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-[#4285f4] text-sm font-medium"
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
                    Math.floor(currentCaseIndex / 3) === Math.floor(index / 3) ? "w-6 bg-[#4285f4]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentCaseIndex(index)}
                  aria-label={`Go to case study set ${Math.floor(index / 3) + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* SEO Tools & Technologies */}
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Our SEO Tools & Technologies</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We use industry-leading tools and technologies to analyze, optimize, and track your SEO performance with
            precision and accuracy.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Keyword Research & Analysis</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#4285f4] mr-2"></div>
                <span className="text-gray-700">SEMrush</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#4285f4] mr-2"></div>
                <span className="text-gray-700">Ahrefs</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#4285f4] mr-2"></div>
                <span className="text-gray-700">Moz Pro</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#4285f4] mr-2"></div>
                <span className="text-gray-700">Google Keyword Planner</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#4285f4] mr-2"></div>
                <span className="text-gray-700">Ubersuggest</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#4285f4] mr-2"></div>
                <span className="text-gray-700">KeywordTool.io</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Technical SEO & Auditing</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#34a853] mr-2"></div>
                <span className="text-gray-700">Screaming Frog</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#34a853] mr-2"></div>
                <span className="text-gray-700">Google Search Console</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#34a853] mr-2"></div>
                <span className="text-gray-700">DeepCrawl</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#34a853] mr-2"></div>
                <span className="text-gray-700">Sitebulb</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#34a853] mr-2"></div>
                <span className="text-gray-700">PageSpeed Insights</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#34a853] mr-2"></div>
                <span className="text-gray-700">GTmetrix</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Analytics & Reporting</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#ea4335] mr-2"></div>
                <span className="text-gray-700">Google Analytics</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#ea4335] mr-2"></div>
                <span className="text-gray-700">Google Data Studio</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#ea4335] mr-2"></div>
                <span className="text-gray-700">Tableau</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#ea4335] mr-2"></div>
                <span className="text-gray-700">SEMrush Analytics</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#ea4335] mr-2"></div>
                <span className="text-gray-700">Ahrefs Rank Tracker</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#ea4335] mr-2"></div>
                <span className="text-gray-700">Databox</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Content & Link Building</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#fbbc05] mr-2"></div>
                <span className="text-gray-700">BuzzSumo</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#fbbc05] mr-2"></div>
                <span className="text-gray-700">Surfer SEO</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#fbbc05] mr-2"></div>
                <span className="text-gray-700">Clearscope</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#fbbc05] mr-2"></div>
                <span className="text-gray-700">Pitchbox</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#fbbc05] mr-2"></div>
                <span className="text-gray-700">Hunter.io</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#fbbc05] mr-2"></div>
                <span className="text-gray-700">Grammarly</span>
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
            <h2 className="text-3xl font-light text-gray-700 mb-4">Get Your Free SEO Audit</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how your website is performing in search engines and receive actionable recommendations to improve
              your rankings and traffic.
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

export default SearchEngineOptimization
