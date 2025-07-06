"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
     ChevronLeft,
     ChevronRight,
     ExternalLink,
     Sparkles,
     TrendingUp,
     Award,
     ArrowRight,
     Eye,
} from "lucide-react";
import { projects } from "@/data/project-data";

export function CaseStudiesSection() {
     const [activeIndex, setActiveIndex] = useState(0);
     const [isAnimating, setIsAnimating] = useState(false);
     const [isHovering, setIsHovering] = useState<number | null>(null);
     const [autoplay, setAutoplay] = useState(true);
     const [isVisible, setIsVisible] = useState(false);
     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

     // Responsive project grouping
     const [projectsPerSlide, setProjectsPerSlide] = useState(3);

     // Generate stable growth numbers for each project
     const [projectGrowthData, setProjectGrowthData] = useState<{
          [key: string]: number;
     }>({});

     useEffect(() => {
          const updateProjectsPerSlide = () => {
               if (window.innerWidth < 640) {
                    setProjectsPerSlide(1);
               } else if (window.innerWidth < 1024) {
                    setProjectsPerSlide(2);
               } else {
                    setProjectsPerSlide(3);
               }
          };

          updateProjectsPerSlide();
          window.addEventListener("resize", updateProjectsPerSlide);
          return () =>
               window.removeEventListener("resize", updateProjectsPerSlide);
     }, []);

     // Split projects into groups dynamically
     const projectGroups = [];
     for (let i = 0; i < projects.length; i += projectsPerSlide) {
          projectGroups.push(projects.slice(i, i + projectsPerSlide));
     }

     const totalSlides = projectGroups.length;
     const containerRef = useRef<HTMLDivElement>(null);
     const sectionRef = useRef<HTMLDivElement>(null);

     // Intersection Observer for animations
     useEffect(() => {
          const observer = new IntersectionObserver(
               (entries) => {
                    if (entries[0].isIntersecting) {
                         setIsVisible(true);
                    }
               },
               { threshold: 0.1 }
          );

          if (sectionRef.current) {
               observer.observe(sectionRef.current);
          }

          return () => {
               if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
               }
          };
     }, []);

     // Mouse tracking for interactive effects
     const handleMouseMove = (e: React.MouseEvent) => {
          const rect = sectionRef.current?.getBoundingClientRect();
          if (rect) {
               setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
               });
          }
     };

     // Autoplay functionality
     useEffect(() => {
          if (!autoplay) return;

          const interval = setInterval(() => {
               goToSlide((activeIndex + 1) % totalSlides);
          }, 7000);

          return () => clearInterval(interval);
     }, [activeIndex, autoplay, totalSlides]);

     // Generate stable growth percentages for each project once
     useEffect(() => {
          const growthData: { [key: string]: number } = {};
          projects.forEach((project) => {
               // Use project id as seed for consistent random numbers
               const seed = project.id
                    .split("")
                    .reduce((a, b) => a + b.charCodeAt(0), 0);
               growthData[project.id] = Math.floor((seed % 200) + 50); // Range: 50-249%
          });
          setProjectGrowthData(growthData);
     }, []);

     const goToSlide = (index: number) => {
          if (isAnimating) return;
          setIsAnimating(true);
          setActiveIndex(index);
          setTimeout(() => setIsAnimating(false), 600);
     };

     const handlePrev = () => {
          setAutoplay(false);
          goToSlide((activeIndex - 1 + totalSlides) % totalSlides);
     };

     const handleNext = () => {
          setAutoplay(false);
          goToSlide((activeIndex + 1) % totalSlides);
     };

     return (
          <section
               ref={sectionRef}
               className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
               onMouseMove={handleMouseMove}
          >
               {/* Enhanced Background Elements */}
               <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Animated gradient orbs */}
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>

                    {/* Floating particles */}
                    <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"></div>
                    <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce delay-300"></div>
                    <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400/35 rounded-full animate-bounce delay-700"></div>
               </div>

               {/* Interactive cursor effect */}
               <div
                    className="absolute pointer-events-none opacity-20 transition-opacity duration-300"
                    style={{
                         left: mousePosition.x - 100,
                         top: mousePosition.y - 100,
                         background:
                              "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
                         width: "200px",
                         height: "200px",
                         borderRadius: "50%",
                    }}
               />

               <div className="container mx-auto relative z-10">
                    {/* Enhanced Header Section */}
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={isVisible ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.8 }}
                         className="text-center mb-12 lg:mb-16"
                    >
                         <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium mb-6">
                              <Award className="w-4 h-4" />
                              Success Stories
                              <Sparkles className="w-4 h-4" />
                         </div>

                         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                                   Our Case
                              </span>
                              <br className="sm:hidden" />
                              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                   {" "}
                                   Studies
                              </span>
                         </h2>

                         <p className="text-lg sm:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed mb-8">
                              Real results for real businesses. Discover how our
                              innovative strategies and cutting-edge solutions
                              drive measurable growth and success.
                         </p>

                         <Link
                              href="/project"
                              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-xl font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 hover:text-white hover:scale-105"
                         >
                              <span>View All Projects</span>
                              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                         </Link>
                    </motion.div>

                    {/* Enhanced Navigation Buttons */}
                    <div className="hidden lg:block">
                         <button
                              onClick={handlePrev}
                              className="absolute left-4 xl:left-8 top-1/2 z-30 transform -translate-y-1/2 group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                              aria-label="Previous slide"
                         >
                              <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
                         </button>
                         <button
                              onClick={handleNext}
                              className="absolute right-4 xl:right-8 top-1/2 z-30 transform -translate-y-1/2 group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                              aria-label="Next slide"
                         >
                              <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
                         </button>
                    </div>

                    {/* Enhanced Carousel Container */}
                    <div
                         className="relative overflow-hidden rounded-2xl"
                         ref={containerRef}
                         onMouseEnter={() => setAutoplay(false)}
                         onMouseLeave={() => setAutoplay(true)}
                    >
                         <AnimatePresence mode="wait">
                              <motion.div
                                   key={activeIndex}
                                   initial={{ opacity: 0, x: 100 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   exit={{ opacity: 0, x: -100 }}
                                   transition={{
                                        duration: 0.6,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                   }}
                                   className="w-full"
                              >
                                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                        {projectGroups[activeIndex]?.map(
                                             (project, projectIndex) => (
                                                  <motion.div
                                                       key={project.id}
                                                       initial={{
                                                            opacity: 0,
                                                            y: 30,
                                                            scale: 0.95,
                                                       }}
                                                       animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                            scale: 1,
                                                       }}
                                                       transition={{
                                                            duration: 0.6,
                                                            delay:
                                                                 projectIndex *
                                                                 0.15,
                                                            ease: [
                                                                 0.25, 0.46,
                                                                 0.45, 0.94,
                                                            ],
                                                       }}
                                                       className="group relative"
                                                       onMouseEnter={() =>
                                                            setIsHovering(
                                                                 projectIndex
                                                            )
                                                       }
                                                       onMouseLeave={() =>
                                                            setIsHovering(null)
                                                       }
                                                  >
                                                       {/* Enhanced Card with Glass Morphism */}
                                                       <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] hover:-translate-y-2">
                                                            {/* Gradient border effect */}
                                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                                            {/* Image Container */}
                                                            <div className="relative overflow-hidden h-48 sm:h-52 md:h-56">
                                                                 {/* Category Badge */}
                                                                 <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg">
                                                                      {
                                                                           project.category
                                                                      }
                                                                 </div>

                                                                 {/* Featured Badge */}
                                                                 <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg flex items-center gap-1">
                                                                      <Award className="w-3 h-3" />
                                                                      Featured
                                                                 </div>

                                                                 {/* Main Image */}
                                                                 <Image
                                                                      src={
                                                                           project.image ||
                                                                           "/placeholder.svg"
                                                                      }
                                                                      alt={`Case Study: ${project.title}`}
                                                                      width={
                                                                           400
                                                                      }
                                                                      height={
                                                                           250
                                                                      }
                                                                      className={`w-full h-full object-cover transition-all duration-700 ${
                                                                           isHovering ===
                                                                           projectIndex
                                                                                ? "scale-110 brightness-110"
                                                                                : "scale-100"
                                                                      }`}
                                                                 />

                                                                 {/* Enhanced Overlay */}
                                                                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                                                 {/* Hover Overlay with Icon */}
                                                                 <div
                                                                      className={`absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent flex items-center justify-center transition-all duration-500 ${
                                                                           isHovering ===
                                                                           projectIndex
                                                                                ? "opacity-100"
                                                                                : "opacity-0"
                                                                      }`}
                                                                 >
                                                                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                                                                           <Eye className="w-8 h-8 text-white" />
                                                                      </div>
                                                                 </div>

                                                                 {/* Fixed Floating Metrics */}
                                                                 <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2 text-white text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                                      <TrendingUp className="w-4 h-4 text-green-400" />
                                                                      <span>
                                                                           +
                                                                           {projectGrowthData[
                                                                                project
                                                                                     .id
                                                                           ] ||
                                                                                150}
                                                                           %
                                                                           Growth
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            {/* Enhanced Content */}
                                                            <div className="p-6 lg:p-8 flex flex-col flex-grow">
                                                                 <h3 className="font-bold text-xl lg:text-2xl mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                                                                      {
                                                                           project.title
                                                                      }
                                                                 </h3>

                                                                 <p className="text-blue-100/80 text-sm lg:text-base leading-relaxed flex-grow mb-6">
                                                                      {
                                                                           project.description
                                                                      }
                                                                 </p>

                                                                 {/* Enhanced CTA Button */}
                                                                 <Link
                                                                      href={`/project/${project.id}`}
                                                                      className="group/link inline-flex items-center gap-2 text-blue-300 hover:text-white font-semibold text-sm lg:text-base transition-all duration-300 hover:gap-3"
                                                                 >
                                                                      <span>
                                                                           View
                                                                           Case
                                                                           Study
                                                                      </span>
                                                                      <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:scale-110" />
                                                                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover/link:w-full transition-all duration-300"></div>
                                                                 </Link>
                                                            </div>
                                                       </div>
                                                  </motion.div>
                                             )
                                        )}
                                   </div>
                              </motion.div>
                         </AnimatePresence>

                         {/* Enhanced Mobile Navigation */}
                         <div className="flex justify-between items-center mt-8 lg:hidden">
                              <button
                                   onClick={handlePrev}
                                   className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
                                   aria-label="Previous slide"
                              >
                                   <ChevronLeft className="w-5 h-5" />
                              </button>

                              <div className="flex items-center space-x-2">
                                   {Array.from({ length: totalSlides }).map(
                                        (_, index) => (
                                             <button
                                                  key={index}
                                                  onClick={() => {
                                                       goToSlide(index);
                                                       setAutoplay(false);
                                                  }}
                                                  className={`transition-all duration-300 ${
                                                       activeIndex === index
                                                            ? "bg-gradient-to-r from-blue-400 to-purple-400 w-8 h-2 rounded-full"
                                                            : "bg-white/30 hover:bg-white/50 w-2 h-2 rounded-full"
                                                  }`}
                                                  aria-label={`Go to slide ${
                                                       index + 1
                                                  }`}
                                             />
                                        )
                                   )}
                              </div>

                              <button
                                   onClick={handleNext}
                                   className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
                                   aria-label="Next slide"
                              >
                                   <ChevronRight className="w-5 h-5" />
                              </button>
                         </div>

                         {/* Enhanced Desktop Dots Navigation */}
                         <div className="hidden lg:flex justify-center mt-12 space-x-3">
                              {Array.from({ length: totalSlides }).map(
                                   (_, index) => (
                                        <button
                                             key={index}
                                             onClick={() => {
                                                  goToSlide(index);
                                                  setAutoplay(false);
                                             }}
                                             className={`transition-all duration-300 ${
                                                  activeIndex === index
                                                       ? "bg-gradient-to-r from-blue-400 to-purple-400 w-12 h-3 rounded-full shadow-lg shadow-blue-500/50"
                                                       : "bg-white/30 hover:bg-white/50 w-3 h-3 rounded-full hover:scale-125"
                                             }`}
                                             aria-label={`Go to slide ${
                                                  index + 1
                                             }`}
                                        />
                                   )
                              )}
                         </div>
                    </div>

                    {/* Enhanced CTA Section */}
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={isVisible ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.8, delay: 0.5 }}
                         className="mt-16 text-center"
                    >
                         <Link
                              href="/contact"
                              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
                         >
                              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                              <span className="relative">
                                   Start Your Success Story
                              </span>
                              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative" />
                         </Link>
                    </motion.div>
               </div>
          </section>
     );
}
