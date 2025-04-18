"use client"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ChevronRight,
  Code,
  Database,
  Server,
  Globe,
  Zap,
  Users,
  Clock,
  ArrowDown,
  MessageSquare,
  DollarSign,
  Shield,
  Layers,
  GitBranch,
  Settings,
} from "lucide-react"
import Form from "./form"


import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
import image2 from "@/Images/services-seo-alt-colors-optimized.png"
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png"
import { QuotePopup } from "./quote-popup"

// Define development features
const developmentFeatures = [
  {
    title: "Custom Web Applications",
    description:
      "Tailored web applications built to solve your specific business challenges and streamline operations.",
    icon: Code,
    color: "blue",
  },
  {
    title: "E-commerce Development",
    description: "Powerful online stores with secure payment gateways, inventory management, and customer analytics.",
    icon: Globe,
    color: "red",
  },
  {
    title: "API Development & Integration",
    description: "Connect your systems and third-party services with custom APIs and seamless integrations.",
    icon: Server,
    color: "green",
  },
  {
    title: "Database Design & Management",
    description: "Efficient database architecture that ensures data integrity, security, and optimal performance.",
    icon: Database,
    color: "purple",
  },
  {
    title: "Progressive Web Apps (PWAs)",
    description: "Fast, reliable, and engaging web applications that work offline and feel like native apps.",
    icon: Zap,
    color: "orange",
  },
  {
    title: "CMS Development",
    description: "Custom content management systems that make updating your website simple and intuitive.",
    icon: Layers,
    color: "teal",
  },
]

// Define development process steps
const developmentSteps = [
  {
    title: "Discovery & Planning",
    description: "We analyze your requirements, define project scope, and create a detailed development roadmap.",
    icon: Users,
  },
  {
    title: "Architecture & Design",
    description: "Our architects design the technical foundation and data structures for your application.",
    icon: Layers,
  },
  {
    title: "Development",
    description: "Our developers build your application using modern frameworks and best coding practices.",
    icon: Code,
  },
  {
    title: "Testing & QA",
    description: "Rigorous testing ensures your application is bug-free, secure, and performs optimally.",
    icon: Shield,
  },
  {
    title: "Deployment",
    description: "We deploy your application to production servers with minimal downtime and disruption.",
    icon: GitBranch,
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing support, updates, and improvements to keep your application running smoothly.",
    icon: Settings,
  },
]

// Define projects
const projects = [
  {
    title: "Enterprise CRM System",
    description: "Custom CRM solution with integrated analytics and automated workflow management.",
    image: image2,
    bgColor: "bg-[#1ab5b3]",
    stats: { value: "35%", label: "Efficiency Increase" },
  },
  {
    title: "E-commerce Platform",
    description: "Scalable online store with inventory management and multi-payment gateway integration.",
    image: image1,
    bgColor: "bg-[#2c3e50]",
    stats: { value: "3x", label: "Sales Growth" },
  },
  {
    title: "Healthcare Portal",
    description: "HIPAA-compliant patient management system with secure data handling and reporting.",
    image: image4,
    bgColor: "bg-[#8bc34a]",
    stats: { value: "40%", label: "Admin Time Saved" },
  },
  {
    title: "Financial Dashboard",
    description: "Real-time analytics platform with data visualization and predictive modeling capabilities.",
    image: image1,
    bgColor: "bg-[#e74c3c]",
    stats: { value: "99.9%", label: "Uptime" },
  },
  {
    title: "Logistics Management System",
    description: "End-to-end supply chain management solution with GPS tracking and inventory forecasting.",
    image: image2,
    bgColor: "bg-[#9b59b6]",
    stats: { value: "28%", label: "Cost Reduction" },
  },
]

const WebDevelopmentServices = () => {
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
        className="bg-gradient-to-r from-[#3498db] to-[#2980b9] text-white py-16 px-4 text-center"
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
                src={image2 || "/placeholder.svg"}
                alt="Web Development Services"
                width={256}
                height={256}
                className="object-contain"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-[#3498db] px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                Enterprise Solutions
              </motion.div>
            </div>
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-light mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Web Development Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We build <span className="font-bold">powerful web applications</span> that solve complex business challenges
            and deliver <span className="font-bold">exceptional user experiences</span> with clean, efficient code.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              className="bg-white text-[#3498db] hover:bg-gray-100 py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={scrollToForm}
            >
              <span className="font-medium">Start Your Project</span>
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Custom Web Development Solutions for Your Business</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We build scalable, secure, and high-performance web applications that help businesses streamline operations,
            increase efficiency, and drive growth.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {developmentFeatures.map((feature, index) => (
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

      {/* Development Process Section */}
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
            <h2 className="text-3xl font-light text-gray-700 mb-4">Our Development Process</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We follow a structured, transparent development process to ensure your project is delivered on time,
              within budget, and to the highest quality standards.
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
              {developmentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
                  variants={itemVariants}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <motion.div
                      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                        activeStep === index ? "ring-2 ring-[#3498db]" : ""
                      }`}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setActiveStep(activeStep === index ? null : index)}
                    >
                      <h3 className="text-xl font-medium mb-2 text-gray-800 flex items-center">
                        {index % 2 === 0 ? (
                          <>
                            <span>{step.title}</span>
                            <step.icon className="w-5 h-5 ml-2 text-[#3498db]" />
                          </>
                        ) : (
                          <>
                            <step.icon className="w-5 h-5 mr-2 text-[#3498db]" />
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
                      className="w-8 h-8 rounded-full bg-[#3498db] text-white flex items-center justify-center z-10 relative"
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Our Development Expertise</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We've delivered hundreds of successful web development projects across various industries. Here&apos;s a snapshot
            of our work.
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
            <div className="text-4xl font-light text-[#3498db] mb-2">120+</div>
            <div className="text-sm text-gray-600">Web Applications</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#1abc9c] mb-2">45</div>
            <div className="text-sm text-gray-600">E-commerce Platforms</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#2ecc71] mb-2">200+</div>
            <div className="text-sm text-gray-600">API Integrations</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#f1c40f] mb-2">30+</div>
            <div className="text-sm text-gray-600">Enterprise Solutions</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#e67e22] mb-2">15</div>
            <div className="text-sm text-gray-600">Industries Served</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#e84393] mb-2">99%</div>
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
          className="bg-[#3498db] hover:bg-[#2980b9] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={scrollToForm}
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          <span>Discuss your project</span>
        </button>
        <button
          className="bg-[#2c3e50] hover:bg-[#34495e] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={toggleQuotePopup}
        >
          <DollarSign className="mr-2 h-5 w-5" />
          <span>Request a development quote</span>
        </button>
      </motion.div>

      {/* Web Development Projects */}
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
            <h2 className="text-2xl font-light text-gray-700">Our development projects</h2>
            <Link href="/projects" className="text-[#3498db] text-sm hover:underline flex items-center">
              <span>See all projects</span>
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
                        <Clock className="w-3 h-3 mr-1 text-[#3498db]" />
                        <span className="font-bold text-gray-800">{project.stats.value}</span>
                        <span className="ml-1 text-gray-600 text-[10px]">{project.stats.label}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                      <Link
                        href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-[#3498db] text-sm font-medium"
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
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentProjectIndex / 3) === Math.floor(index / 3) ? "w-6 bg-[#3498db]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentProjectIndex(index)}
                  aria-label={`Go to project set ${Math.floor(index / 3) + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Technology Stack Section */}
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Our Technology Stack</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We use modern, reliable technologies to build scalable, high-performance web applications.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Frontend Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#3498db] mr-2"></div>
                <span className="text-gray-700">React.js</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#3498db] mr-2"></div>
                <span className="text-gray-700">Next.js</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#3498db] mr-2"></div>
                <span className="text-gray-700">Vue.js</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#3498db] mr-2"></div>
                <span className="text-gray-700">Angular</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#3498db] mr-2"></div>
                <span className="text-gray-700">TypeScript</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#3498db] mr-2"></div>
                <span className="text-gray-700">Tailwind CSS</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Backend Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#2ecc71] mr-2"></div>
                <span className="text-gray-700">Node.js</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#2ecc71] mr-2"></div>
                <span className="text-gray-700">Express.js</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#2ecc71] mr-2"></div>
                <span className="text-gray-700">Python/Django</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#2ecc71] mr-2"></div>
                <span className="text-gray-700">PHP/Laravel</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#2ecc71] mr-2"></div>
                <span className="text-gray-700">GraphQL</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#2ecc71] mr-2"></div>
                <span className="text-gray-700">RESTful APIs</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Database Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#e74c3c] mr-2"></div>
                <span className="text-gray-700">MongoDB</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#e74c3c] mr-2"></div>
                <span className="text-gray-700">PostgreSQL</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#e74c3c] mr-2"></div>
                <span className="text-gray-700">MySQL</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#e74c3c] mr-2"></div>
                <span className="text-gray-700">Firebase</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#e74c3c] mr-2"></div>
                <span className="text-gray-700">Redis</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#e74c3c] mr-2"></div>
                <span className="text-gray-700">Elasticsearch</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">DevOps & Infrastructure</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#9b59b6] mr-2"></div>
                <span className="text-gray-700">AWS</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#9b59b6] mr-2"></div>
                <span className="text-gray-700">Docker</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#9b59b6] mr-2"></div>
                <span className="text-gray-700">Kubernetes</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#9b59b6] mr-2"></div>
                <span className="text-gray-700">CI/CD</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#9b59b6] mr-2"></div>
                <span className="text-gray-700">Vercel</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#9b59b6] mr-2"></div>
                <span className="text-gray-700">Netlify</span>
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
            <h2 className="text-3xl font-light text-gray-700 mb-4">Start Your Development Project</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tell us about your project requirements and we&apos;ll get back to you with a detailed proposal and timeline.
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

export default WebDevelopmentServices
