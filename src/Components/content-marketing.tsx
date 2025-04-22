"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
// import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  BookOpen,
  FileText,
  Lightbulb,
  Mic,
  FileSpreadsheet,
  FileCheck,
  ArrowRight,
  ChevronRight,
  ArrowDown,
  MessageSquare,
} from "lucide-react"
import Form from "@/Components/form"
import bigImage from "@/Images/services-seo-alt-colors-optimized.png"
import project1 from "@/Images/services-seo-optimized.png"
import project2 from "@/Images/services-payperclick-alt-colors-optimized.png"
import content from "@/Images/content-marketing.png"

// Define service features
const contentServices = [
  {
    icon: BookOpen,
    title: "Industry News",
    description:
      "Up-to-date industry related posts that inform, educate and entertain readers leading to an increase in social media engagement, improvement in your search engine rankings and increased website traffic.",
  },
  {
    icon: FileText,
    title: "Case Studies",
    description:
      "In-depth analysis of your target audience and market segments to promote projects that you've delivered successfully, making potential customers aware of your products and services.",
  },
  {
    icon: Lightbulb,
    title: "Content Strategy",
    description:
      "A detailed content strategy aligned with a comprehensive marketing strategy creates consistency and results in a unified brand message that improves conversion rates.",
  },
  {
    icon: Mic,
    title: "Interviews Writing",
    description:
      "Our writers carry industry experience by sharing conversations with experts. Share their expertise and you will immediately see feedback from your audience.",
  },
  {
    icon: FileSpreadsheet,
    title: "Press Releases",
    description:
      "Boost your online profile and increase your brand awareness with outstanding newsworthy stories about your brand, submitted to news portals and press release distribution services.",
  },
  {
    icon: FileCheck,
    title: "White Papers",
    description:
      "Promote your business with high-quality white paper marketing that will substantially increase your site traffic, engage with your audience and establish your position as an industry leader.",
  },
]

// Define projects
const projects = [
  {
    title: "Creative Design",
    description: "This website showcases creative marketing that inspires, builds and strengthens brands.",
    image: project1,
    bgColor: "bg-[#1ab5b3]",
  },
  {
    title: "Strategic Designs",
    description: "This site applies a smart SEO strategy to ensure online visibility to target clients.",
    image: project2,
    bgColor: "bg-[#2c3e50]",
  },
  {
    title: "Elegant Tech",
    description: "Creating UX of the high order, on the site and inside of the system.",
    image: project2,
    bgColor: "bg-[#8bc34a]",
  },
  {
    title: "Content First",
    description: "A content-driven approach that puts valuable information at the forefront of the user experience.",
    image: project1,
    bgColor: "bg-[#e74c3c]",
  },
  {
    title: "Narrative Builders",
    description: "Crafting compelling brand stories that resonate with target audiences and drive engagement.",
    image: project2,
    bgColor: "bg-[#9b59b6]",
  },
]

const ContentMarketingStrategy = () => {
  const formRef = useRef<HTMLDivElement>(null)
  const [activeService, setActiveService] = useState<number | null>(null)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
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
        className="bg-gradient-to-r from-[#1ab5b3] to-[#159e9c] text-white py-16 px-4 md:px-8 text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-20"></div>
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/30 backdrop-blur-sm"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 40 - 20],
                y: [0, Math.random() * 40 - 20],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative ">
              <Image
                src={content || "/placeholder.svg?height=256&width=256&query=content marketing"}
                alt="Content Marketing Strategy"
                width={256}
                height={256}
                className="object-contain"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-[#1ab5b3] px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                Strategic Content
              </motion.div>
            </div>
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-light mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Content Marketing Strategy
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We tailor a <span className="font-bold">bespoke content marketing strategy</span> for each client. Our
            experienced copywriters know exactly how to make <span className="font-bold">words sell</span>.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              className="bg-white text-[#1ab5b3] hover:bg-gray-100 py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={scrollToForm}
            >
              <span className="font-medium">Start Your Content Strategy</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="bg-[#f39c12] hover:bg-[#e67e22] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span className="font-medium">View Content Samples</span>
              <ChevronRight className="ml-2 h-4 w-4" />
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

      {/* Benefits Section */}
      <motion.div
        className="py-16 px-4 md:px-8 max-w-6xl mx-auto"
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Why Content Marketing Matters</h2>
          <div className="w-20 h-1 bg-[#1ab5b3] mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <p className="text-gray-700 leading-relaxed">
              Content Marketing builds communities, inspires engagement and increases rankings via creation and sharing
              of high quality, problem-solving relevant information, aiming to satisfy business objectives. It helps
              influence consumer behavior, with the end goal of boosting sales and increasing interaction between the
              brand and customers.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <p className="text-gray-700 leading-relaxed">
              Content Marketing is an effective way to encourage conversions and its main objective is to build a
              content strategy to meet the needs of your target audience. It helps you stand out from the competition,
              provides a great resource to your customers and is highly shareable. Content Marketing is meant to improve
              your brand&apos;s profile and strengthen your online presence.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* SEO Integration Section */}
      <motion.div
        className="py-12 px-4 md:px-8 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#1ab5b3]"
          >
            <h2 className="text-2xl font-light text-gray-700 mb-4">SEO-Driven Content Strategy</h2>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Our full-service SEO team integrates content into a complex strategy to increase your site&apos;s visibility
              and conversions. We create content that ranks well and converts visitors into customers.
            </p>
          </motion.div>
        </div>
      </motion.div>

   
      <motion.div
        className="py-16 px-4 md:px-8 max-w-6xl mx-auto"
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
          <h2 className="text-3xl font-light text-gray-700 mb-4">Our Content Services</h2>
          <div className="w-20 h-1 bg-[#1ab5b3] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of content marketing services to help your business grow
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {contentServices.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                activeService === index ? "ring-2 ring-[#1ab5b3]" : ""
              }`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              <div className="flex items-start">
                <div className="mr-4 text-[#1ab5b3]">
                  <service.icon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">{service.title}</h3>

                  <AnimatePresence>
                    {activeService === index ? (
                      <motion.p
                        className="text-gray-600 text-sm"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.description}
                      </motion.p>
                    ) : (
                      <motion.div
                        className="flex items-center text-sm text-gray-500 mt-2"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <span>Learn more</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div> 

      {/* CTA Buttons */}
      <motion.div
        className="py-12 px-4 md:px-8 bg-gray-50"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="bg-[#1ab5b3] hover:bg-[#159e9c] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={scrollToForm}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            <span>Tell us about your project</span>
          </button>
          <button className="bg-[#f39c12] hover:bg-[#e67e22] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg">
            <span>Request a free quote now</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </motion.div>

      {/* Projects Section */}
      {/* <motion.div
        className="py-16 px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-light text-gray-700 mb-4 md:mb-0">Our content success stories</h2>
            <Link href="/project" className="text-[#1ab5b3] text-sm hover:underline flex items-center group">
              <span>View all projects</span>
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
                        src={project.image || "/placeholder.svg?height=200&width=300&query=content marketing project"}
                        alt={project.title}
                        width={200}
                        height={150}
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-2 text-center">{project.title}</h3>
                      <p className="text-gray-600 text-sm text-center mb-4">{project.description}</p>
                      <div className="flex justify-center">
                        <Link
                          href={`/case-study/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="inline-flex items-center text-[#1ab5b3] text-sm font-medium group"
                        >
                          <span>View case study</span>
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
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
                    Math.floor(currentProjectIndex / 3) === Math.floor(index / 3) ? "w-6 bg-[#1ab5b3]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentProjectIndex(index)}
                  aria-label={`Go to project set ${Math.floor(index / 3) + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div> */}

      {/* Statistics Section */}
      <motion.div
        className="py-16 px-4 md:px-8 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-light text-gray-700 mb-4">Our Content Impact</h2>
            <div className="w-20 h-1 bg-[#1ab5b3] mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl font-light text-[#1ab5b3] mb-2">116</div>
              <div className="text-sm text-gray-600">Articles Written</div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl font-light text-[#1ab5b3] mb-2">248</div>
              <div className="text-sm text-gray-600">Case Studies</div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl font-light text-[#f39c12] mb-2">43</div>
              <div className="text-sm text-gray-600">Content Strategies</div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl font-light text-[#f39c12] mb-2">35</div>
              <div className="text-sm text-gray-600">Interviews Taken</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Importance Section */}
      <motion.div
        className="py-16 px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-light text-gray-700 mb-4">Why Choose Our Content Services</h2>
            <div className="w-20 h-1 bg-[#1ab5b3] mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are aware of the importance of a successful content marketing campaign which is why we create
                informative, engaging and persuasive content that captures attention and encourages further action. We
                tailor a bespoke content marketing strategy for each of our clients.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="mr-0 md:mr-6 mb-6 md:mb-0">
                <Image
                  src={bigImage || "/placeholder.svg?height=150&width=150&query=content marketing"}
                  alt="Content Marketing"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  We provide content that will convince web users to click through to your website for special offers,
                  to purchase your products or contact you about your services, because our experienced copywriters know
                  exactly how to make words sell.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Form Section with Ref */}
      <div ref={formRef}>
        <Form />
      </div>
    </div>
  )
}

export default ContentMarketingStrategy
