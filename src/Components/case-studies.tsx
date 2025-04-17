/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Search, Filter, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { projects, categories, testimonials, marketingStats, approachSteps } from "@/data/project-data"

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cyan-500 text-white py-8 md:py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 md:mb-6">Case Studies</h1>
              <p className="text-base md:text-lg">
                Our digital marketing agency helps over 80 companies to increase consumer loyalty and find new customers
                online. Here, you&apos;ll find a selection of our expert work. Take a look at some of the results
                we&apos;ve delivered....
              </p>
            </div>
            <div className="flex justify-center mt-4 md:mt-0">
              <Image
                src={projects[0].image || "/placeholder.svg"}
                alt="Digital Marketing Illustration"
                width={400}
                height={300}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8 md:py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-600 mb-4 md:mb-0">Featured Projects</h2>

            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 sm:px-4 md:px-6 py-1.5 md:py-2 text-xs sm:text-sm md:text-base rounded-md transition-colors ${
                    activeCategory === category ? "bg-blue-500 text-white" : "bg-white text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="px-0 sm:px-4 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mx-auto max-w-6xl">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group block overflow-hidden bg-white rounded-lg shadow-md transition-transform hover:-translate-y-2"
                >
                  <div className={`relative ${project.bgColor}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-auto object-contain"
                      width={300}
                      height={100}
                    />
                  </div>
                  <div className="p-4 md:p-6 bg-white">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm">{project.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={logo.image || "/placeholder.svg"}
                  alt={logo.name}
                  width={120}
                  height={80}
                  className="opacity-60 hover:opacity-100 transition-opacity max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 md:mt-8">
            <div className="flex space-x-2">
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-500"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

