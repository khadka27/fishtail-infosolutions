/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
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
     Sparkles,
     TrendingUp,
     Users,
     Award,
     Globe,
     Target,
     Calendar,
     MapPin,
     ExternalLink,
     Eye,
     Heart,
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
     const isFeaturedInView = useInView(featuredRef, {
          once: false,
          amount: 0.2,
     });

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

     useEffect(() => {
          const interval = setInterval(() => {
               setActiveTestimonial((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1
               );
          }, 5000);

          return () => clearInterval(interval);
     }, []);

     // Filter projects
     const filteredProjects = projects.filter((project) => {
          const matchesCategory =
               activeCategory === "All" ||
               project.category === activeCategory ||
               project.subcategory === activeCategory;
          const matchesSearch =
               searchTerm === "" ||
               project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               project.category
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
               project.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

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

     return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
               {/* Compact Hero Section */}
               <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                         <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
                         <div
                              className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse"
                              style={{ animationDelay: "2s" }}
                         ></div>
                    </div>

                    <div className="container mx-auto max-w-6xl px-4 relative z-10">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              className="text-center mb-12"
                         >
                              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-blue-700 text-sm font-medium mb-6">
                                   <Sparkles className="w-4 h-4" />
                                   Success Stories & Case Studies
                              </div>
                              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4">
                                   Our Success
                                   <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {" "}
                                        Stories
                                   </span>
                              </h1>
                              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                                   Discover how we've helped leading educational
                                   institutions increase enrollment, generate
                                   qualified leads, and optimize their marketing
                                   ROI through data-driven strategies.
                              </p>

                              {/* Quick Stats */}
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                                   {marketingStats.map((stat, index) => (
                                        <motion.div
                                             key={index}
                                             initial={{ opacity: 0, y: 20 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{
                                                  delay: index * 0.1,
                                                  duration: 0.5,
                                             }}
                                             className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md border border-white/50"
                                        >
                                             <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                                                  {stat.value}
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  {stat.label}
                                             </div>
                                        </motion.div>
                                   ))}
                              </div>

                              <div className="flex flex-col sm:flex-row justify-center gap-4">
                                   <a
                                        href="#projects"
                                        className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg group"
                                   >
                                        View Case Studies
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                   </a>
                                   <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200"
                                   >
                                        <Heart className="mr-2 w-4 h-4 text-red-500" />
                                        Get in Touch
                                   </Link>
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Compact Filter Section */}
               <section className="py-8 bg-white/50">
                    <div className="container mx-auto max-w-6xl px-4">
                         <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                              {/* Search */}
                              <div className="relative flex-1 max-w-md">
                                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                   <input
                                        type="text"
                                        placeholder="Search case studies..."
                                        value={searchTerm}
                                        onChange={(e) =>
                                             setSearchTerm(e.target.value)
                                        }
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                                   />
                              </div>

                              {/* Category Filter */}
                              <div className="flex flex-wrap gap-2">
                                   {categories.map((category) => (
                                        <button
                                             key={category}
                                             onClick={() =>
                                                  setActiveCategory(category)
                                             }
                                             className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                                                  activeCategory === category
                                                       ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                                                       : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-blue-300"
                                             }`}
                                        >
                                             {category}
                                        </button>
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>

               {/* Projects Grid */}
               <section id="projects" className="py-12">
                    <div className="container mx-auto max-w-6xl px-4">
                         <motion.div
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                         >
                              {filteredProjects.map((project) => (
                                   <motion.div
                                        key={project.id}
                                        variants={itemVariants}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                                        onMouseEnter={() =>
                                             setHoveredProject(project.id)
                                        }
                                        onMouseLeave={() =>
                                             setHoveredProject(null)
                                        }
                                   >
                                        {/* Image Section */}
                                        <div className="relative h-48 overflow-hidden">
                                             {project.featured && (
                                                  <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                                                       <Award className="w-3 h-3" />
                                                       Featured
                                                  </div>
                                             )}

                                             <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                                                  {project.category}
                                             </div>

                                             <Image
                                                  src={
                                                       project.image ||
                                                       "/placeholder.svg"
                                                  }
                                                  alt={project.title}
                                                  width={400}
                                                  height={200}
                                                  className={`w-full h-full object-cover transition-all duration-500 ${
                                                       hoveredProject ===
                                                       project.id
                                                            ? "scale-110 brightness-110"
                                                            : "scale-100"
                                                  }`}
                                             />

                                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                                             {/* Hover Overlay */}
                                             <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                                  <div className="text-center text-white">
                                                       <Eye className="w-8 h-8 mx-auto mb-2" />
                                                       <div className="font-medium">
                                                            View Details
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-6">
                                             <div className="flex items-start justify-between mb-3">
                                                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                                       {project.title}
                                                  </h3>
                                             </div>

                                             <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                                  {project.description}
                                             </p>

                                             {/* Stats */}
                                             <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 mb-4">
                                                  <div className="flex items-center gap-2 text-blue-700">
                                                       <TrendingUp className="w-4 h-4" />
                                                       <span className="font-semibold text-sm">
                                                            {project.stats}
                                                       </span>
                                                  </div>
                                             </div>

                                             {/* Meta Info */}
                                             <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                                  <div className="flex items-center gap-1">
                                                       <MapPin className="w-3 h-3" />
                                                       {project.location}
                                                  </div>
                                                  <div className="flex items-center gap-1">
                                                       <Calendar className="w-3 h-3" />
                                                       {project.duration}
                                                  </div>
                                             </div>

                                             {/* CTA */}
                                             <Link
                                                  href={`/project/${project.id}`}
                                                  className="group/link inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 hover:gap-3"
                                             >
                                                  <span>View Case Study</span>
                                                  <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/link:translate-x-1" />
                                             </Link>
                                        </div>
                                   </motion.div>
                              ))}
                         </motion.div>

                         {/* No Results */}
                         {filteredProjects.length === 0 && (
                              <div className="text-center py-12">
                                   <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Search className="w-8 h-8 text-gray-400" />
                                   </div>
                                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        No Results Found
                                   </h3>
                                   <p className="text-gray-600">
                                        Try adjusting your search or filter
                                        criteria.
                                   </p>
                              </div>
                         )}
                    </div>
               </section>

               {/* Compact Testimonials */}
               <section className="py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <div className="container mx-auto max-w-4xl px-4">
                         <div className="text-center mb-8">
                              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
                                   <Users className="w-4 h-4" />
                                   Client Testimonials
                              </div>
                              <h2 className="text-2xl sm:text-3xl font-light mb-4">
                                   What Our Clients Say
                              </h2>
                         </div>

                         <AnimatePresence mode="wait">
                              <motion.div
                                   key={activeTestimonial}
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   exit={{ opacity: 0, y: -20 }}
                                   transition={{ duration: 0.5 }}
                                   className="text-center"
                              >
                                   <blockquote className="text-lg sm:text-xl font-light mb-6 max-w-3xl mx-auto">
                                        "
                                        {testimonials[activeTestimonial]?.quote}
                                        "
                                   </blockquote>
                                   <div className="font-semibold">
                                        {testimonials[activeTestimonial]?.name}
                                   </div>
                                   <div className="text-blue-100 text-sm">
                                        {testimonials[activeTestimonial]?.role}{" "}
                                        at{" "}
                                        {
                                             testimonials[activeTestimonial]
                                                  ?.institution
                                        }
                                   </div>
                              </motion.div>
                         </AnimatePresence>

                         {/* Dots */}
                         <div className="flex justify-center gap-2 mt-8">
                              {testimonials.map((_, index) => (
                                   <button
                                        key={index}
                                        onClick={() =>
                                             setActiveTestimonial(index)
                                        }
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                             activeTestimonial === index
                                                  ? "bg-white w-8"
                                                  : "bg-white/40 hover:bg-white/60"
                                        }`}
                                   />
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-12 bg-white">
                    <div className="container mx-auto max-w-4xl px-4">
                         <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 sm:p-8 text-white text-center shadow-xl"
                         >
                              <div className="flex items-center justify-center gap-2 mb-4">
                                   <Globe className="w-6 h-6" />
                                   <span className="text-sm font-medium">
                                        Ready to Get Started?
                                   </span>
                              </div>
                              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                                   Start Your Success Story Today
                              </h2>
                              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                   Join the ranks of successful educational
                                   institutions that have transformed their
                                   marketing with our proven strategies.
                              </p>
                              <div className="flex flex-col sm:flex-row justify-center gap-3">
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200"
                                   >
                                        <Link href="/contact">
                                             Get Free Consultation
                                        </Link>
                                   </motion.button>
                                   <Link
                                        href="/contact"
                                        className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-200"
                                   >
                                        Schedule a Call
                                   </Link>
                              </div>
                         </motion.div>
                    </div>
               </section>
          </div>
     );
}
