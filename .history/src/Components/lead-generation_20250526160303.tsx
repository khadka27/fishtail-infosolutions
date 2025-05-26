/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState, useRef, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import {
  Users,
  BarChart,
  DollarSign,
  Mail,
  Award,
  Target,
  Settings,
  FileText,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
  Calendar,
  ExternalLink,
  Clock,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Form from "./form"
import { LeadGenerationPopup } from "./lead-generation-popup"
import leadGeneration from "@/Images/lead-generation.jpg"
import Link from "next/link"

// Enhanced Calendly Hook with better error handling
const useCalendly = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadCalendlyScript = useCallback((): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Check if Calendly is already available
      if (window.Calendly) {
        setIsLoaded(true)
        resolve()
        return
      }

      // Check if script is already in DOM
      const existingScript = document.querySelector('script[src*="calendly.com"]')
      if (existingScript) {
        // Wait for existing script to load
        const checkInterval = setInterval(() => {
          if (window.Calendly) {
            clearInterval(checkInterval)
            setIsLoaded(true)
            resolve()
          }
        }, 100)

        // Timeout after 15 seconds
        setTimeout(() => {
          clearInterval(checkInterval)
          if (!window.Calendly) {
            setError("Calendar service is taking too long to load")
            reject(new Error("Calendly script timeout"))
          }
        }, 15000)
        return
      }

      // Load the script
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.type = "text/javascript"

      script.onload = () => {
        // Give Calendly time to initialize
        setTimeout(() => {
          if (window.Calendly) {
            setIsLoaded(true)
            setError(null)
            resolve()
          } else {
            setError("Calendar service failed to initialize")
            reject(new Error("Calendly object not available"))
          }
        }, 1000)
      }

      script.onerror = () => {
        setError("Failed to load calendar service")
        reject(new Error("Failed to load Calendly script"))
      }

      document.head.appendChild(script)
    })
  }, [])

  const openPopup = useCallback(
    async (url: string) => {
      try {
        setIsLoading(true)
        setError(null)

        // Validate URL first
        try {
          new URL(url)
        } catch {
          throw new Error("Invalid calendar URL")
        }

        await loadCalendlyScript()

        if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
          window.Calendly.initPopupWidget({
            url: url,
            text: "Schedule time with me",
            color: "#2563eb",
            textColor: "#ffffff",
            branding: true,
          })
        } else {
          throw new Error("Calendly popup function not available")
        }
      } catch (err) {
        setError("Unable to open calendar popup")
        // Fallback: open in new tab
        window.open(url, "_blank", "noopener,noreferrer")
      } finally {
        setIsLoading(false)
      }
    },
    [loadCalendlyScript],
  )

  return {
    isLoaded,
    isLoading,
    error,
    openPopup,
    loadScript: loadCalendlyScript,
  }
}

// Calendly Inline Widget Component
const CalendlyInlineWidget = ({ url, onLoad }: { url: string; onLoad?: () => void }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [retryCount, setRetryCount] = useState(0)

  const initializeWidget = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Load script if not already loaded
      if (!window.Calendly) {
        const script = document.createElement("script")
        script.src = "https://assets.calendly.com/assets/external/widget.js"
        script.async = true

        await new Promise<void>((resolve, reject) => {
          script.onload = () => {
            setTimeout(() => {
              if (window.Calendly) {
                resolve()
              } else {
                reject(new Error("Calendly not available"))
              }
            }, 1000)
          }
          script.onerror = () => reject(new Error("Script load failed"))
          document.head.appendChild(script)
        })
      }

      // Initialize the widget
      if (containerRef.current && window.Calendly) {
        // Clear any existing content
        containerRef.current.innerHTML = ""

        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
          if (containerRef.current && window.Calendly) {
            window.Calendly.initInlineWidget({
              url: url,
              parentElement: containerRef.current,
              prefill: {},
              utm: {},
            })

            setIsLoading(false)
            onLoad?.()
          }
        }, 500)
      }
    } catch (err) {
      setError("Unable to load calendar")
      setIsLoading(false)
    }
  }, [url, onLoad])

  useEffect(() => {
    initializeWidget()
  }, [initializeWidget])

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1)
    initializeWidget()
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96 bg-gray-50 rounded-lg border border-gray-200">
        <Calendar className="w-16 h-16 text-gray-400 mb-4" />
        <p className="text-gray-600 mb-4 text-center">{error}</p>
        <div className="flex gap-3">
          <button
            onClick={handleRetry}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry ({retryCount})
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Open in New Tab
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading calendar...</p>
            <p className="text-sm text-gray-500 mt-2">This may take a few seconds</p>
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        style={{ minWidth: "320px", height: "630px" }}
        className="rounded-lg overflow-hidden bg-white border border-gray-200"
      />
    </div>
  )
}

// Quick booking component
const QuickBookingCard = ({ calendlyUrl }: { calendlyUrl: string }) => {
  const { openPopup, isLoading, error } = useCalendly()

  const handleScheduleClick = () => {
    openPopup(calendlyUrl)
  }

  const handleDirectLink = () => {
    window.open(calendlyUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
          <Calendar className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">Quick Schedule</h3>
        <p className="text-gray-600 mb-6">Book a 30-minute consultation instantly</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            30 minutes
          </div>
          <div className="flex items-center justify-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-2" />
            Video call or phone
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <div className="space-y-3">
          <Link
          hre
            onClick={handleScheduleClick}
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-all disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Loading Calendar...
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Now
              </>
            )}
          </Link>

          <button
            onClick={handleDirectLink}
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Open in New Tab
          </button>
        </div>
      </div>
    </div>
  )
}

export default function LeadGeneration() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [showInlineCalendly, setShowInlineCalendly] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const contactRef = useRef<HTMLDivElement>(null)

  const { openPopup, isLoading: calendlyLoading, error: calendlyError } = useCalendly()

  // Your actual Calendly URL
  const CALENDLY_URL = "https://calendly.com/internal-fishtailinfosolutions/30min"

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleScheduleClick = () => {
    openPopup(CALENDLY_URL)
  }

  // Add this useEffect to test the URL on component mount

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/network-pattern.png')] bg-repeat opacity-10"></div>
          {Array.from({ length: 12 }).map((_, i) => {
            const size = 2 + (i % 4) + 1
            const left = (i * 8.33) % 100
            const top = ((i * 13) % 80) + 10
            const moveX = (i % 3) - 1 * 20
            const moveY = ((i + 1) % 3) - 1 * 20
            const duration = 10 + (i % 5) * 2

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
                  onClick={handleScheduleClick}
                  disabled={calendlyLoading}
                  className="px-6 sm:px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium transition-all border border-white/30 w-full sm:w-auto text-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {calendlyLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white inline mr-2"></div>
                      Loading...
                    </>
                  ) : (
                    <>
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Schedule Consultation
                    </>
                  )}
                </button>
              </div>

              {calendlyError && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-300/30 rounded-lg">
                  <p className="text-red-100 text-sm">{calendlyError}</p>
                </div>
              )}
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
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-200 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Calendly Booking Section */}
      <section className="py-8 md:py-16 px-10 md:px-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 mx-auto">
                <Calendar className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Ready to Discuss Your Lead Generation Strategy?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Book a free 30-minute consultation with our lead generation experts. We&apos;ll analyze your current approach
                and provide actionable recommendations to boost your lead quality and conversion rates.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Quick Booking Card */}
              <div className="lg:col-span-1">
                <QuickBookingCard calendlyUrl={CALENDLY_URL} />
              </div>

              {/* Inline Calendar */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Available Times</h3>
                    <button
                      onClick={() => setShowInlineCalendly(!showInlineCalendly)}
                      className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      {showInlineCalendly ? "Hide Calendar" : "Show Calendar"}
                    </button>
                  </div>

                  {showInlineCalendly ? (
                    <CalendlyInlineWidget url={CALENDLY_URL} />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-96 bg-gray-50 rounded-lg">
                      <Calendar className="w-16 h-16 text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-4">Click &quot;Show Calendar&quot; to view available times</p>
                      <button
                        onClick={() => setShowInlineCalendly(true)}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Show Available Times
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    onClick={handleScheduleClick}
                    disabled={calendlyLoading}
                    className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300 rounded-lg font-medium transition-all text-center disabled:cursor-not-allowed"
                  >
                    {calendlyLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                        Loading...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule a Consultation
                      </>
                    )}
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
    </div>
  )
}

// TypeScript declarations for Calendly
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
