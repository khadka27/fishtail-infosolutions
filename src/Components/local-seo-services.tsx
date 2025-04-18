"use client"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Star,
  Building,
  Phone,
  ArrowDown,
  DollarSign,
  Search,
  FileText,
  Users,
  BarChart2,
  Smartphone,
  Globe,
  CheckCircle,
  Link2,
} from "lucide-react"
import Form from "./form"
import { QuotePopup } from "./quote-popup"
import image3 from "@/Images/services-analytics-alt-colors-optimized.png"
import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
import image2 from "@/Images/services-seo-alt-colors-optimized.png"
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png"


// Define local SEO features
const localSeoFeatures = [
  {
    title: "Google Business Profile Optimization",
    description:
      "Comprehensive optimization of your Google Business Profile to improve local visibility and attract nearby customers.",
    icon: Building,
    color: "blue",
  },
  {
    title: "Local Citation Building",
    description:
      "Strategic creation and management of business listings across directories to strengthen local search presence.",
    icon: Globe,
    color: "green",
  },
  {
    title: "Review Management",
    description: "Proactive acquisition and management of customer reviews to build trust and improve local rankings.",
    icon: Star,
    color: "yellow",
  },
  {
    title: "Local Content Strategy",
    description:
      "Creation of location-specific content that resonates with local audiences and improves relevance for local searches.",
    icon: FileText,
    color: "purple",
  },
  {
    title: "Local Link Building",
    description:
      "Development of local backlinks from community organizations, business partners, and local media outlets.",
    icon: Link2,
    color: "red",
  },
  {
    title: "Local SEO Analytics",
    description:
      "Comprehensive tracking and analysis of local search performance with actionable insights for continuous improvement.",
    icon: BarChart2,
    color: "teal",
  },
]

// Define local SEO process steps
const localSeoSteps = [
  {
    title: "Local SEO Audit",
    description:
      "We analyze your current local search presence, Google Business Profile, citations, and local competitors.",
    icon: Search,
  },
  {
    title: "Google Business Profile Optimization",
    description:
      "We optimize your Google Business Profile with accurate information, compelling descriptions, and engaging photos.",
    icon: Building,
  },
  {
    title: "Citation Building & Cleanup",
    description:
      "We create and correct business listings across directories to ensure consistent NAP (Name, Address, Phone) information.",
    icon: Globe,
  },
  {
    title: "Review Strategy Implementation",
    description:
      "We implement systems to generate positive reviews and develop strategies to respond to all customer feedback.",
    icon: Star,
  },
  {
    title: "Local Content Development",
    description:
      "We create location-specific content that resonates with your local audience and improves local search relevance.",
    icon: FileText,
  },
  {
    title: "Ongoing Optimization & Reporting",
    description:
      "We continuously monitor performance, make data-driven adjustments, and provide regular reports on your local SEO progress.",
    icon: BarChart2,
  },
]

// Define case studies
const caseStudies = [
  {
    title: "Multi-Location Restaurant Chain",
    description:
      "Increased local visibility for 12 restaurant locations, resulting in 143% more direction requests and 87% more calls.",
    image: image1,
    bgColor: "bg-[#4285f4]",
    stats: { value: "143%", label: "More Directions" },
  },
  {
    title: "Local Law Firm Growth",
    description:
      "Boosted a law firm's local search visibility, leading to 94% more local leads and 67% increase in consultation bookings.",
    image: image2,
    bgColor: "bg-[#34a853]",
    stats: { value: "94%", label: "More Local Leads" },
  },
  {
    title: "Dental Practice Expansion",
    description:
      "Helped a dental practice dominate local search in a competitive market, resulting in 112% more new patient appointments.",
    image: image3,
    bgColor: "bg-[#fbbc05]",
    stats: { value: "112%", label: "New Patients" },
  },
  {
    title: "Home Services Company",
    description:
      "Transformed local visibility for a plumbing company, generating 215% more service calls directly from Google Business Profile.",
    image: image4,
    bgColor: "bg-[#ea4335]",
    stats: { value: "215%", label: "More Service Calls" },
  },
  {
    title: "Retail Store Chain",
    description:
      "Increased foot traffic by 78% across 5 retail locations through comprehensive local SEO and Google Business Profile optimization.",
    image: image1,
    bgColor: "bg-[#9b59b6]",
    stats: { value: "78%", label: "Foot Traffic Increase" },
  },
]

const LocalSEOServices = () => {
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
        className="bg-gradient-to-r from-[#ea4335] to-[#fbbc05] text-white py-16 px-4 text-center"
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
                src={image1 || "/local-seo-map-pins.png"}
                alt="Local SEO Services"
                width={256}
                height={256}
                className="object-contain"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-[#ea4335] px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                Dominate Local Search
              </motion.div>
            </div>
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-light mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Local SEO Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We help your business <span className="font-bold">dominate local search results</span>, attract{" "}
            <span className="font-bold">nearby customers</span>, and drive more foot traffic, calls, and local leads.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              className="bg-white text-[#ea4335] hover:bg-gray-100 py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={scrollToForm}
            >
              <span className="font-medium">Get a Free Local SEO Audit</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              className="bg-[#34a853] hover:bg-[#2d9249] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={toggleQuotePopup}
            >
              <span className="font-medium">Request Local SEO Quote</span>
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Comprehensive Local SEO Solutions</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our local SEO services are designed to help your business stand out in local search results, attract nearby
            customers, and outrank local competitors.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {localSeoFeatures.map((feature, index) => (
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

      {/* Why Local SEO Matters Section */}
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
            <h2 className="text-3xl font-light text-gray-700 mb-4">Why Local SEO Matters</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Local SEO is essential for businesses that serve specific geographic areas. Here&apos;s why investing in local
              search optimization is crucial for your business growth.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="w-12 h-12 rounded-full bg-[#ea4335]/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#ea4335]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">46% of All Google Searches are Local</h3>
              <p className="text-gray-600 text-sm">
                Nearly half of all Google searches have local intent, with users looking for nearby businesses,
                products, and services.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="w-12 h-12 rounded-full bg-[#34a853]/10 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-[#34a853]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">76% of Local Searches Result in Store Visits</h3>
              <p className="text-gray-600 text-sm">
                Over three-quarters of people who search for something nearby on their smartphone visit a related
                business within a day.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="w-12 h-12 rounded-full bg-[#fbbc05]/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#fbbc05]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">28% of Local Searches Lead to Purchases</h3>
              <p className="text-gray-600 text-sm">
                More than a quarter of local searches result in a purchase, making local SEO a direct driver of revenue
                for businesses.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="w-12 h-12 rounded-full bg-[#4285f4]/10 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-[#4285f4]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                88% Trust Online Reviews as Much as Personal Recommendations
              </h3>
              <p className="text-gray-600 text-sm">
                The vast majority of consumers trust online reviews as much as personal recommendations, making review
                management a critical component of local SEO.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="w-12 h-12 rounded-full bg-[#ea4335]/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#ea4335]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                97% of Consumers Search Online for Local Businesses
              </h3>
              <p className="text-gray-600 text-sm">
                Almost all consumers use the internet to find local businesses, making local search visibility essential
                for attracting new customers.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="w-12 h-12 rounded-full bg-[#34a853]/10 flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-[#34a853]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Local Businesses with Complete GBP Get 7x More Clicks
              </h3>
              <p className="text-gray-600 text-sm">
                Businesses with complete Google Business Profiles receive 7 times more clicks than those with incomplete
                listings, highlighting the importance of profile optimization.
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
            <h2 className="text-3xl font-light text-gray-700 mb-4">Our Local SEO Process</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We follow a proven, data-driven approach to local SEO that consistently delivers results for businesses
              across industries and markets.
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
              {localSeoSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
                  variants={itemVariants}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <motion.div
                      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                        activeStep === index ? "ring-2 ring-[#ea4335]" : ""
                      }`}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setActiveStep(activeStep === index ? null : index)}
                    >
                      <h3 className="text-xl font-medium mb-2 text-gray-800 flex items-center">
                        {index % 2 === 0 ? (
                          <>
                            <span>{step.title}</span>
                            <step.icon className="w-5 h-5 ml-2 text-[#ea4335]" />
                          </>
                        ) : (
                          <>
                            <step.icon className="w-5 h-5 mr-2 text-[#ea4335]" />
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
                      className="w-8 h-8 rounded-full bg-[#ea4335] text-white flex items-center justify-center z-10 relative"
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Our Local SEO Impact</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We&apos;ve helped hundreds of local businesses achieve significant growth through strategic local search
            optimization. Here&apos;s our track record of success.
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
            <div className="text-4xl font-light text-[#ea4335] mb-2">450+</div>
            <div className="text-sm text-gray-600">Local Businesses</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#34a853] mb-2">156%</div>
            <div className="text-sm text-gray-600">Avg. Map Views</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#fbbc05] mb-2">12K+</div>
            <div className="text-sm text-gray-600">Reviews Generated</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#4285f4] mb-2">89%</div>
            <div className="text-sm text-gray-600">Local Ranking Improvement</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#ea4335] mb-2">18+</div>
            <div className="text-sm text-gray-600">Local Industries</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#34a853] mb-2">132%</div>
            <div className="text-sm text-gray-600">Avg. Call Increase</div>
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
          className="bg-[#ea4335] hover:bg-[#d32f2f] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={scrollToForm}
        >
          <MapPin className="mr-2 h-5 w-5" />
          <span>Get your free local SEO audit</span>
        </button>
        <button
          className="bg-[#34a853] hover:bg-[#2d9249] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={toggleQuotePopup}
        >
          <Building className="mr-2 h-5 w-5" />
          <span>Boost your local visibility today</span>
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
            <h2 className="text-2xl font-light text-gray-700">Local SEO success stories</h2>
            <Link href="/case-studies" className="text-[#ea4335] text-sm hover:underline flex items-center">
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
                          caseStudy.image || "/placeholder.svg?height=150&width=200&query=local business map listing"
                        }
                        alt={caseStudy.title}
                        width={200}
                        height={150}
                        className="object-contain"
                      />
                      <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center">
                        <MapPin className="w-3 h-3 mr-1 text-[#ea4335]" />
                        <span className="font-bold text-gray-800">{caseStudy.stats.value}</span>
                        <span className="ml-1 text-gray-600 text-[10px]">{caseStudy.stats.label}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-2">{caseStudy.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{caseStudy.description}</p>
                      <Link
                        href={`/case-studies/${caseStudy.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-[#ea4335] text-sm font-medium"
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
                    Math.floor(currentCaseIndex / 3) === Math.floor(index / 3) ? "w-6 bg-[#ea4335]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentCaseIndex(index)}
                  aria-label={`Go to case study set ${Math.floor(index / 3) + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Local SEO Benefits */}
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Benefits of Local SEO</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Investing in local SEO provides numerous advantages for businesses that serve specific geographic areas.
            Here&apos;s how local search optimization can benefit your business.
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
              <CheckCircle className="w-5 h-5 mr-2 text-[#34a853]" />
              <span>Increased Local Visibility</span>
            </h3>
            <p className="text-gray-600">
              Appear prominently in local search results, Google Maps, and the local pack when nearby customers search
              for your products or services.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#34a853]" />
              <span>More Qualified Traffic</span>
            </h3>
            <p className="text-gray-600">
              Attract visitors who are specifically looking for your products or services in your area, resulting in
              higher conversion rates.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#34a853]" />
              <span>Increased Foot Traffic</span>
            </h3>
            <p className="text-gray-600">
              Drive more in-store visits as local searchers are often looking for businesses they can visit immediately
              or in the near future.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#34a853]" />
              <span>More Phone Calls</span>
            </h3>
            <p className="text-gray-600">
              Generate more direct phone inquiries as local searchers often call businesses directly from search
              results.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#34a853]" />
              <span>Enhanced Trust & Credibility</span>
            </h3>
            <p className="text-gray-600">
              Build trust with potential customers through positive reviews, accurate business information, and
              prominent local search visibility.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#34a853]" />
              <span>Competitive Advantage</span>
            </h3>
            <p className="text-gray-600">
              Outrank local competitors in search results, making your business the first choice for potential customers
              in your area.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#34a853]" />
              <span>Higher Conversion Rates</span>
            </h3>
            <p className="text-gray-600">
              Convert more visitors into customers as local searchers typically have higher purchase intent and are
              further along in the buying process.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#34a853]" />
              <span>Cost-Effective Marketing</span>
            </h3>
            <p className="text-gray-600">
              Achieve a higher return on investment compared to traditional advertising methods by targeting customers
              who are actively searching for your services.
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
            <h2 className="text-3xl font-light text-gray-700 mb-4">Get Your Free Local SEO Audit</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how your business is performing in local search and receive actionable recommendations to improve
              your local visibility and attract more nearby customers.
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

export default LocalSEOServices
