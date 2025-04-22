/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ChevronRight,
  Code,
  Layout,
  Smartphone,
  Monitor,
  Zap,
  Users,
  Award,
  ArrowDown,
  MessageSquare,
  DollarSign,
} from "lucide-react"
import Form from "./form"

import image3 from "@/Images/services-analytics-alt-colors-optimized.png"
import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
import image2 from "@/Images/services-seo-alt-colors-optimized.png"
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png"
import design from "@/Images/design.png"
import { QuotePopup } from "./quote-popup"

// Define service features
const designFeatures = [
  {
    title: "Branding and logo design",
    description: "Create a unique visual identity that represents your brand values and resonates with your audience.",
    icon: Award,
    color: "blue",
  },
  {
    title: "Graphic and UI design",
    description: "Intuitive user interfaces with beautiful graphics that enhance user experience and engagement.",
    icon: Layout,
    color: "red",
  },
  {
    title: "Mobile applications design",
    description: "Responsive designs that work flawlessly across all devices and screen sizes.",
    icon: Smartphone,
    color: "green",
  },
  {
    title: "Custom website development",
    description: "Tailored solutions built with modern technologies to meet your specific business needs.",
    icon: Code,
    color: "purple",
  },
  {
    title: "E-commerce solutions",
    description: "Powerful online stores with secure payment gateways and intuitive product management.",
    icon: Zap,
    color: "orange",
  },
  {
    title: "SEO optimization",
    description: "Ensure your website ranks well in search engines and attracts organic traffic.",
    icon: ChevronRight,
    color: "teal",
  },
]

// Define process steps
const processSteps = [
  {
    title: "Discovery",
    description: "We learn about your business, goals, and target audience to create a strategic plan.",
    icon: Users,
  },
  {
    title: "Design",
    description: "Our designers create wireframes and visual concepts based on your brand and requirements.",
    icon: Layout,
  },
  {
    title: "Development",
    description: "Our developers build your website using modern technologies and best practices.",
    icon: Code,
  },
  {
    title: "Testing",
    description: "We thoroughly test your website to ensure it works perfectly across all devices and browsers.",
    icon: Monitor,
  },
  {
    title: "Launch",
    description: "We deploy your website and provide training on how to manage and update it.",
    icon: Zap,
  },
  {
    title: "Support",
    description: "We offer ongoing support and maintenance to keep your website running smoothly.",
    icon: MessageSquare,
  },
]

// Define projects
const projects = [
  {
    title: "Opentray Division",
    description: 'This website achieved Google ranking in four months, thanks to all the keyword "Opentray".',
    image: image2,
    bgColor: "bg-[#1ab5b3]",
    stats: { value: "4", label: "Months to Top Ranking" },
  },
  {
    title: "Tremely Designs",
    description: "This site applies a smart SEO strategy to acquire online clients via long tail search.",
    image: image3,
    bgColor: "bg-[#2c3e50]",
    stats: { value: "68%", label: "Organic Traffic" },
  },
  {
    title: "Plainst Tech",
    description: "Currently 60% of the total traffic on the site and inside of the system.",
    image: image4,
    bgColor: "bg-[#8bc34a]",
    stats: { value: "60%", label: "System Traffic" },
  },
  {
    title: "Nexus Platform",
    description: "E-commerce solution with integrated payment systems and inventory management.",
    image: image1,
    bgColor: "bg-[#e74c3c]",
    stats: { value: "3.5x", label: "Sales Increase" },
  },
  {
    title: "Vertex Media",
    description: "Media platform with advanced content management and user engagement features.",
    image: image2,
    bgColor: "bg-[#9b59b6]",
    stats: { value: "12min", label: "Avg. Session Time" },
  },
]

const WebDesignServices = () => {
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
        className="bg-gradient-to-r from-[#f47b20] to-[#f39c12] text-white py-16 px-4 text-center"
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
            <div className="relative ">
              <Image
                src={design || "/placeholder.svg"}
                alt="Web Design Services"
                width={256}
                height={256}
                className="object-contain "
               
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-[#f47b20] px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                Premium Service
              </motion.div>
            </div>
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-light mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Web Design Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A website should not just draw attention. The role of a website is{" "}
            <span className="font-bold">to attract and engage the user</span>, as well as communicate{" "}
            <span className="font-bold">your brand</span> and raise awareness about a product or service.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              className="bg-white text-[#f47b20] hover:bg-gray-100 py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
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

      {/* First Impression Section */}
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">
            Your customers will not give you a second chance to make a first impression
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            In a digital world, first impressions are vital and an outstanding web design is the key to success. Users
            enjoy visiting sites that are aesthetically appealing and easy to navigate.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {designFeatures.map((feature, index) => (
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
            <h2 className="text-3xl font-light text-gray-700 mb-4">Our Design Process</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Every project presents its own goals, audience, and opportunities. Our approach to great projects begins
              with a time-tested process that discovers and addresses the unexpected.
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
                        activeStep === index ? "ring-2 ring-[#f47b20]" : ""
                      }`}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setActiveStep(activeStep === index ? null : index)}
                    >
                      <h3 className="text-xl font-medium mb-2 text-gray-800 flex items-center">
                        {index % 2 === 0 ? (
                          <>
                            <span>{step.title}</span>
                            <step.icon className="w-5 h-5 ml-2 text-[#f47b20]" />
                          </>
                        ) : (
                          <>
                            <step.icon className="w-5 h-5 mr-2 text-[#f47b20]" />
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
                      className="w-8 h-8 rounded-full bg-[#f47b20] text-white flex items-center justify-center z-10 relative"
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Our Experience by the Numbers</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We&apos;ve helped businesses of all sizes achieve their digital goals. Here&apos;s a snapshot of our work over the
            years.
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
            <div className="text-4xl font-light text-[#3498db] mb-2">25+</div>
            <div className="text-sm text-gray-600">E-commerce solutions</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#1abc9c] mb-2">12</div>
            <div className="text-sm text-gray-600">Websites for Top 100 companies</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#2ecc71] mb-2">17</div>
            <div className="text-sm text-gray-600">Complex intranets for corporations</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#f1c40f] mb-2">97</div>
            <div className="text-sm text-gray-600">Popular Facebook applications</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#e67e22] mb-2">74</div>
            <div className="text-sm text-gray-600">E-mail marketing strategies</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#e84393] mb-2">36</div>
            <div className="text-sm text-gray-600">Experienced web development teams</div>
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
          <span>Tell us about your project</span>
        </button>
        <button
          className="bg-[#f39c12] hover:bg-[#e67e22] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={toggleQuotePopup}
        >
          <DollarSign className="mr-2 h-5 w-5" />
          <span>Request a free quote now</span>
        </button>
      </motion.div>

      {/* Web Design Projects */}
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
            <h2 className="text-2xl font-light text-gray-700">Our web design projects</h2>
            <Link href="/project" className="text-[#3498db] text-sm hover:underline flex items-center">
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
                        href={`/project/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Our Approach</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Collaborative Design Process</h3>
            <p className="text-gray-700 leading-relaxed">
              Our agency will get your business noticed in the digital world by using design ingenuity for creating
              brand personality with a long-lasting impact. We provide various customizable design sets and focus on
              creating a website to fit your brand while engaging your visitors. Our team presents, revises and
              collaborates with you until we finalize the perfect design for your needs.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Results-Driven Strategy</h3>
            <p className="text-gray-700 leading-relaxed">
              We believe that a close collaboration is the foundation for an outstanding result. Starting with content
              audits when we assess your needs and requirements to competitive analysis outlining opportunities, we
              collaborate at each step of the process to ensure your website not only looks great but delivers
              measurable results.
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
            <h2 className="text-3xl font-light text-gray-700 mb-4">Start Your Project Today</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tell us about your project and we&apos;ll get back to you within 24 hours with a free consultation and quote.
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

export default WebDesignServices
