/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Search,
  Filter,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  projects,
  categories,
  testimonials,
  marketingStats,
  approachSteps,
} from "@/data/project-data";

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const featuredRef = useRef<HTMLDivElement>(null);
  const isFeaturedInView = useInView(featuredRef, { once: false, amount: 0.2 });

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Filter projects based on selected category and search term
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" ||
      project.category === activeCategory ||
      project.subcategory === activeCategory;
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter((project) => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const handleProjectClick = (id: string) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-10"></div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4"
              >
                Education Lead Generation Experts
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
              >
                Transforming Education Marketing
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base md:text-lg opacity-90 mb-6"
              >
                Discover how we&apos;ve helped leading educational institutions
                increase enrollment, generate qualified leads, and optimize
                their marketing ROI through data-driven strategies.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-opacity-90 transition-all hover:shadow-md"
                >
                  View Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-transparent border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex justify-center mt-4 md:mt-0"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/20 rounded-2xl shadow-lg blur-sm"></div>
                <div className="relative z-10 bg-white p-6 rounded-xl shadow-md">
                  <div className="grid grid-cols-2 gap-4">
                    {featuredProjects.slice(0, 4).map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        className="flex flex-col items-center"
                      >
                        <div
                          className={`w-16 h-16 rounded-lg ${project.bgColor} flex items-center justify-center mb-2`}
                        >
                          <span className="text-2xl font-bold text-blue-600">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <p className="text-blue-800 text-xs font-medium text-center">
                          {project.title}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="text-gray-800 text-sm font-medium">
                        Success Rate
                      </div>
                      <div className="text-green-600 font-bold">48.5%</div>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "48.5%" }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="h-full bg-green-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {marketingStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <motion.section
        className={`py-4 bg-white shadow-sm sticky top-0 z-20 transition-all ${
          scrollY > 100 ? "shadow-md" : ""
        }`}
        animate={{
          padding: scrollY > 100 ? "0.5rem 0" : "1rem 0",
          backgroundColor:
            scrollY > 100 ? "rgba(255, 255, 255, 0.95)" : "white",
        }}
      >
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <div className="w-full md:w-auto">
              <div className="md:hidden">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <span className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter: {activeCategory}
                  </span>
                  {isFilterOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                <AnimatePresence>
                  {isFilterOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2 p-2 bg-gray-50 rounded-lg">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => {
                              setActiveCategory(category);
                              setIsFilterOpen(false);
                            }}
                            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                              activeCategory === category
                                ? "bg-blue-500 text-white"
                                : "bg-white text-gray-600 hover:bg-gray-200 border border-gray-200"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="hidden md:flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 text-sm rounded-full transition-colors ${
                      activeCategory === category
                        ? "bg-blue-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <section ref={featuredRef} className="py-12 md:py-20 bg-gray-50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how we&apos;ve helped these leading educational
              institutions achieve remarkable results through our tailored
              digital marketing strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
              >
                <div
                  className={`${project.bgColor} relative overflow-hidden h-48`}
                >
                  <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={isFeaturedInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-white/90 p-4 rounded-lg shadow-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        unoptimized
                        className="object-contain h-20 w-auto"
                      />
                    </div>
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                      {project.category}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        Success Metric
                      </span>
                      <span className="text-sm font-medium text-green-600">
                        {project.stats}
                      </span>
                    </div>
                    <Link
                      href={`/project/${project.id}`}
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section
        id="projects"
        className="py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-white"
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center"
          >
            All Case Studies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            {filteredProjects.length > 0
              ? `Showing ${filteredProjects.length} ${
                  activeCategory !== "All" ? activeCategory : ""
                } projects`
              : "No projects found matching your criteria"}
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => handleProjectClick(project.id)}
                  className="h-full cursor-pointer"
                >
                  <div
                    className={`group block h-full overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 ${
                      activeProject === project.id ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden ${project.bgColor} h-40`}
                    >
                      <motion.div
                        animate={{
                          scale: hoveredProject === project.id ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                        className="p-6 flex items-center justify-center h-full"
                      >
                        <div className="bg-white/90 p-4 rounded-lg shadow-sm">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={160}
                            height={80}
                            unoptimized
                            className="object-contain h-16 w-auto"
                          />
                        </div>
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 bg-white h-full flex flex-col">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        {project.description}
                      </p>

                      <AnimatePresence>
                        {activeProject === project.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-4 overflow-hidden"
                          >
                            <div className="pt-4 border-t border-gray-100">
                              <h4 className="font-medium text-gray-800 mb-2">
                                Key Results:
                              </h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {project.results ? (
                                  project.results.map((result, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <span className="text-green-500 mr-2">
                                        ✓
                                      </span>
                                      {result.title}: {result.description}
                                    </li>
                                  ))
                                ) : (
                                  <>
                                    <li className="flex items-start">
                                      <span className="text-green-500 mr-2">
                                        ✓
                                      </span>
                                      {project.stats}
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-green-500 mr-2">
                                        ✓
                                      </span>
                                      Improved brand visibility and engagement
                                    </li>
                                    <li className="flex items-start">
                                      <span className="text-green-500 mr-2">
                                        ✓
                                      </span>
                                      Enhanced digital marketing ROI
                                    </li>
                                  </>
                                )}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex items-center text-blue-500 text-sm font-medium mt-auto">
                        {activeProject === project.id ? (
                          <span>View less</span>
                        ) : (
                          <span>View details</span>
                        )}
                        <motion.span
                          animate={{
                            x: hoveredProject === project.id ? 5 : 0,
                            rotate: activeProject === project.id ? 90 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Approach to Education Marketing
              </h2>
              <p className="text-gray-600">
                We follow a proven methodology to help educational institutions
                attract, engage, and convert prospective students.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approachSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full ${step.color} mb-4 text-white`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container px-4">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, index) =>
                index === activeTestimonial && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-2 bg-blue-600 p-8 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                            <span>{testimonial.avatar}</span>
                          </div>
                          <div className="text-white">
                            <div className="font-bold text-xl">
                              {testimonial.name}
                            </div>
                            <div className="text-blue-100">
                              {testimonial.role}
                            </div>
                            <div className="text-blue-200 text-sm">
                              {testimonial.institution}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-3 p-8 text-white">
                        <svg
                          className="w-10 h-10 text-white/30 mb-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-lg mb-6 leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className={`w-5 h-5 ${
                                  star <= testimonial.rating
                                    ? "text-yellow-300"
                                    : "text-white/30"
                                } fill-current`}
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-2 text-white/80 text-sm">
                            {testimonial.rating}.0 Rating
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeTestimonial === index
                      ? "w-8 bg-blue-500"
                      : "bg-gray-300 hover:bg-gray-400 w-2"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Education Marketing?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let&apos;s discuss how our proven strategies can help your
              institution attract more qualified students and increase
              enrollment.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
              >
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <p className="mt-4 text-sm text-gray-500">
              No obligation. Learn how we can help you grow.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
