/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Users,
  BarChart,
  DollarSign,
  Mail,
  Zap,
  Award,
  Target,
  Link,
  Settings,
  FileText,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import Form from "./form"
import { LeadGenerationPopup } from "./lead-generation-popup"
import leadGeneration from "@/Images/lead-generation.jpg"
import audience from "@/Images/audience-targeting.jpg"
import leadCapture from "@/Images/lead-capture.jpg"
import leadNurture from "@/Images/nurture.jpg"

// Calendly Widget Component
const CalendlyWidget = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      // Load Calendly script if not already loaded
      if (!document.querySelector('script[src*="calendly.com"]')) {
        const script = document.createElement("script")
        script.src = "https://assets.calendly.com/assets/external/widget.js"
        script.async = true
        document.head.appendChild(script)
      }

      // Initialize Calendly widget
      const timer = setTimeout(() => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/event_types/user", // Replace with your actual Calendly URL
            text: "Schedule time with me",
            color: "#2563eb",
            textColor: "#ffffff",
            branding: true,
          })
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      const handleCalendlyEvent = (e: MessageEvent) => {
        if (e.data.event && e.data.event.indexOf("calendly") === 0) {
          if (e.data.event === "calendly.event_scheduled") {
            // Handle successful booking
            console.log("Event scheduled:", e.data.payload)
            onClose()
          }
        }
      }

      window.addEventListener("message", handleCalendlyEvent)
      return () => window.removeEventListener("message", handleCalendlyEvent)
    }
  }, [isOpen, onClose])

  return null
}

// Calendly Inline Widget Component
const CalendlyInlineWidget = ({ url }: { url: string }) => {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.head.appendChild(script)
    }

    // Initialize inline widget
    const timer = setTimeout(() => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: document.getElementById("calendly-inline-widget"),
          prefill: {},
          utm: {},
        })
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [url])

  return (
    <div
      id="calendly-inline-widget"
      style={{ minWidth: "320px", height: "630px" }}
      className="rounded-lg overflow-hidden"
    />
  )
}

export default function LeadGeneration() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)
  const [showInlineCalendly, setShowInlineCalendly] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/event_types/user", // Replace with your actual Calendly URL
        text: "Schedule time with me",
        color: "#2563eb",
        textColor: "#ffffff",
        branding: true,
      })
    } else {
      // Fallback: load script and try again
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/event_types/user", 
            text: "Schedule time with me",
            color: "#2563eb",
            textColor: "#ffffff",
            branding: true,
          })
        }
      }
      document.head.appendChild(script)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/network-pattern.png')] bg-repeat opacity-10"></div>
          {Array.from({ length: 12 }).map((_, i) => {
            // Use index-based deterministic values instead of Math.random()
            const size = 2 + (i % 4) + 1 // Deterministic size between 3-6rem
            const left = (i * 8.33) % 100 // Distribute evenly across width
            const top = ((i * 13) % 80) + 10 // Distribute across height with padding
            const moveX = ((i % 3) - 1) * 20 // -20, 0, or 20
            const moveY = (((i + 1) % 3) - 1) * 20 // -20, 0, or 20
            const duration = 10 + (i % 5) * 2 // Duration between 10-18s

            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/30 backdrop-blur-sm"
                style={{
                  width: `${size}rem`,
                  height: `${size}rem`,
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                animate={{
                  x: [0, moveX],
                  y: [0, moveY],
                }}
                transition={{
                  duration: duration,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            )
          })}
        </div>

        <div className="container mx-auto py-12 sm:py-16 md:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Transform Visitors into <span className="text-cyan-300">Valuable Leads</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 max-w-xl">
                Strategic lead generation solutions that capture, nurture, and convert your ideal prospects into
                qualified opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="px-6 sm:px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-gray-900 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto text-center"
                >
                  Boost Your Lead Generation
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-6 sm:px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium transition-all border border-white/30 w-full sm:w-auto text-center"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-1/2 mt-8 lg:mt-0"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl transform rotate-3"></div>
                <div className="relative z-10 rounded-xl shadow-2xl overflow-hidden">
                  <Image
                    src={leadGeneration || "/placeholder.svg?height=400&width=600&query=lead generation illustration"}
                    alt="Lead Generation Illustration"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 70C840 80 960 100 1080 100C1200 100 1320 80 1380 70L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-8 md:py-16 px-10 md:px-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-sm border border-blue-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">287%</h3>
              <p className="text-gray-600">Average ROI for our lead gen campaigns</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-sm border border-cyan-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">8,200+</h3>
              <p className="text-gray-600">Qualified leads generated monthly</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl shadow-sm border border-teal-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                <Mail className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">36%</h3>
              <p className="text-gray-600">Average lead-to-opportunity conversion</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-sm border border-purple-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <BarChart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">52%</h3>
              <p className="text-gray-600">Reduction in cost per qualified lead</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 md:py-16 px-10 md:px-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Comprehensive Lead Generation Services
            </h2>
            <p className="text-lg text-gray-600">End-to-end lead generation solutions that drive sustainable growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-6 h-6 text-blue-600" />,
                title: "Strategic Lead Targeting",
                description:
                  "Precision targeting of your ideal customer profiles to attract high-quality leads most likely to convert",
                color: "blue",
              },
              {
                icon: <Mail className="w-6 h-6 text-cyan-600" />,
                title: "Email Lead Generation",
                description:
                  "Sophisticated email campaigns that nurture prospects through personalized journeys to conversion",
                color: "cyan",
              },
              {
                icon: <Award className="w-6 h-6 text-teal-600" />,
                title: "Content Lead Magnets",
                description:
                  "Creation of high-value content assets that attract and capture leads through valuable information exchange",
                color: "teal",
              },
              {
                icon: <Settings className="w-6 h-6 text-purple-600" />,
                title: "Lead Capture Optimization",
                description:
                  "Conversion-focused design and optimization of landing pages and forms to maximize lead capture rates",
                color: "purple",
              },
              {
                icon: <FileText className="w-6 h-6 text-indigo-600" />,
                title: "Lead Qualification & Scoring",
                description:
                  "Implementation of lead scoring systems to identify and prioritize your most valuable prospects",
                color: "indigo",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
                title: "Lead Nurturing Automation",
                description:
                  "Automated workflows that nurture leads through the sales funnel with timely, relevant communications",
                color: "blue",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 bg-${service.color}-100 rounded-lg mb-6 group-hover:bg-${service.color}-200 transition-colors`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className={`inline-flex items-center text-${service.color}-600 font-medium`}>
                  Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8 md:py-16 px-10 md:px-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Lead Generation Process</h2>
            <p className="text-lg text-gray-600">
              A proven methodology for attracting, capturing, and converting high-quality leads
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 rounded-full p-1">
                {["Attract", "Capture", "Nurture"].map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === index ? "bg-blue-500 text-white shadow-sm" : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              {activeTab === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Attract Your Ideal Prospects</h3>
                    <p className="text-gray-600 mb-6">
                      We begin by identifying and attracting your ideal customer profiles through targeted content and
                      multi-channel campaigns.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Audience research & persona development",
                        "SEO-optimized content creation",
                        "Targeted paid advertising campaigns",
                        "Social media engagement strategies",
                        "Thought leadership & industry positioning",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src={audience || "/placeholder.svg?height=300&width=400&query=audience targeting"}
                      alt="Audience Targeting"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg max-w-full h-auto"
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Capture & Convert Visitors</h3>
                    <p className="text-gray-600 mb-6">
                      We implement high-converting lead capture mechanisms that turn website visitors into identified
                      leads in your pipeline.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Conversion-optimized landing pages",
                        "Strategic lead magnet development",
                        "A/B testing of forms and CTAs",
                        "Exit-intent and behavioral triggers",
                        "Social proof and trust elements",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src={leadCapture || "/placeholder.svg?height=300&width=400&query=lead capture"}
                      alt="Lead Capture"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg max-w-full h-auto"
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Nurture & Qualify Leads</h3>
                    <p className="text-gray-600 mb-6">
                      We develop automated nurturing sequences that guide leads through the buyer&apos;s journey and
                      qualify them for sales.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Personalized email nurture sequences",
                        "Lead scoring and qualification",
                        "Behavioral trigger campaigns",
                        "Re-engagement of cold leads",
                        "Sales-ready lead handoff process",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src={leadNurture || "/placeholder.svg?height=300&width=400&query=lead nurturing"}
                      alt="Lead Nurturing"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg max-w-full h-auto"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-16 px-10 md:px-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Why Choose Our Lead Generation Services?
            </h2>
            <p className="text-lg text-gray-600">
              Data-driven lead generation that delivers measurable results and ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-500" />,
                title: "Targeted Approach",
                description: "Focus on attracting only your ideal customers, not just any traffic",
              },
              {
                icon: <Users className="w-8 h-8 text-cyan-500" />,
                title: "Quality Over Quantity",
                description: "Emphasis on generating high-quality leads that convert, not just numbers",
              },
              {
                icon: <Link className="w-8 h-8 text-teal-500" />,
                title: "Multi-Channel Strategy",
                description: "Integrated approach across multiple channels for maximum reach",
              },
              {
                icon: <DollarSign className="w-8 h-8 text-purple-500" />,
                title: "ROI-Focused",
                description: "Clear metrics and reporting that tie directly to revenue impact",
              },
              {
                icon: <Award className="w-8 h-8 text-indigo-500" />,
                title: "Conversion Optimization",
                description: "Continuous testing and improvement of lead capture elements",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
                title: "Scalable Systems",
                description: "Lead generation frameworks that scale with your business growth",
              },
              {
                icon: <Zap className="w-8 h-8 text-cyan-500" />,
                title: "Marketing Automation",
                description: "Efficient systems that nurture leads without manual intervention",
              },
              {
                icon: <BarChart className="w-8 h-8 text-teal-500" />,
                title: "Data-Driven Decisions",
                description: "Analytics-based approach to continuously improve performance",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-blue-100"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Booking Section */}
      <section className="py-8 md:py-16 px-10 md:px-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 mx-auto">
                <Calendar className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Ready to Discuss Your Lead Generation Strategy?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Book a free 30-minute consultation with our lead generation experts. We&rsquo;ll analyze your current approach
                and provide actionable recommendations to boost your lead quality and conversion rates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={openCalendlyPopup}
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Consultation
                </button>
                <button
                  onClick={() => setShowInlineCalendly(!showInlineCalendly)}
                  className="px-8 py-4 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all"
                >
                  {showInlineCalendly ? "Hide Calendar" : "View Available Times"}
                </button>
              </div>

              {showInlineCalendly && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                >
                  <CalendlyInlineWidget url="https://https://calendly.com/event_types/user/me" />
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Free Consultation</h3>
                  <p className="text-gray-600">No cost, no obligation. Just valuable insights for your business.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Personalized Strategy</h3>
                  <p className="text-gray-600">Tailored recommendations based on your specific business needs.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4 mx-auto">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Actionable Insights</h3>
                  <p className="text-gray-600">Walk away with concrete steps to improve your lead generation.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-8 md:py-16 px-10 md:px-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Transform Your Lead Generation?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you&apos;re struggling to generate enough leads or need to improve lead quality, our team of
                  lead generation experts is here to help you achieve your goals.
                </p>
                <div className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-100">
                  <h3 className="text-xl font-bold mb-3 text-blue-800">Our Commitment to You:</h3>
                  <ul className="space-y-3">
                    {[
                      "Dedicated lead generation strategist for your account",
                      "Transparent reporting and performance metrics",
                      "Continuous optimization and A/B testing",
                      "Integration with your CRM and sales processes",
                      "Focus on quality leads that convert to revenue",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsPopupOpen(true)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
                  >
                    Get Your Custom Strategy
                  </button>
                  <button
                    onClick={openCalendlyPopup}
                    className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all text-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Consultation
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-8 border border-gray-200"
              >
                <Form />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Popup */}
      <LeadGenerationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      {/* Calendly Widget */}
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  )
}

// Add TypeScript declarations for Calendly
declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: {
        url: string
        text?: string
        color?: string
        textColor?: string
        branding?: boolean
      }) => void
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement | null
        prefill?: Record<string, any>
        utm?: Record<string, any>
      }) => void
    }
  }
}
