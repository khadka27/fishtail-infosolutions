/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
     ArrowRight,
     ChevronRight,
     Code,
     Database,
     Server,
     Globe,
     Zap,
     Users,
     ArrowDown,
     MessageSquare,
     DollarSign,
     Shield,
     Layers,
     GitBranch,
     Settings,
     CheckCircle,
     Sparkles,
     Target,
     TrendingUp,
     Award,
     Rocket,
} from "lucide-react";
import Form from "./form";

import image1 from "@/Images/services-analytics-alt-colors-optimized.png";
import image2 from "@/Images/services-seo-alt-colors-optimized.png";
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png";
import webdev from "@/Images/web-dev.png";
import { QuotePopup } from "./quote-popup";
import { projects } from "@/data/project-data";

// Simplified development features
const developmentFeatures = [
     {
          title: "Custom Web Applications",
          description:
               "Scalable applications built with modern technologies to solve your business challenges.",
          icon: Code,
          color: "blue",
     },
     {
          title: "E-commerce Solutions",
          description:
               "Powerful online stores with secure payments and inventory management systems.",
          icon: Globe,
          color: "green",
     },
     {
          title: "API Development",
          description:
               "Robust APIs and seamless third-party integrations for connected experiences.",
          icon: Server,
          color: "purple",
     },
     {
          title: "Database Design",
          description:
               "Efficient database architecture ensuring data security and optimal performance.",
          icon: Database,
          color: "orange",
     },
     {
          title: "Progressive Web Apps",
          description:
               "Fast, reliable web applications that work offline and feel like native apps.",
          icon: Zap,
          color: "pink",
     },
     {
          title: "CMS Development",
          description:
               "User-friendly content management systems for easy website updates.",
          icon: Layers,
          color: "teal",
     },
];

// Technology stack
const techStack = [
     {
          category: "Frontend",
          technologies: [
               "React.js",
               "Next.js",
               "Vue.js",
               "TypeScript",
               "Tailwind CSS",
               "Angular",
          ],
          color: "blue",
     },
     {
          category: "Backend",
          technologies: [
               "Node.js",
               "Python",
               "PHP",
               "Express.js",
               "Django",
               "Laravel",
          ],
          color: "green",
     },
     {
          category: "Database",
          technologies: [
               "MongoDB",
               "PostgreSQL",
               "MySQL",
               "Firebase",
               "Redis",
               "Elasticsearch",
          ],
          color: "purple",
     },
     {
          category: "DevOps",
          technologies: [
               "AWS",
               "Docker",
               "Kubernetes",
               "CI/CD",
               "Vercel",
               "Netlify",
          ],
          color: "orange",
     },
];

// Process steps
const processSteps = [
     {
          title: "Discovery & Planning",
          description: "Requirements analysis and project roadmap",
          icon: Target,
     },
     {
          title: "Architecture Design",
          description: "Technical foundation and system design",
          icon: Layers,
     },
     {
          title: "Development & Testing",
          description: "Coding with rigorous quality assurance",
          icon: Code,
     },
     {
          title: "Deployment & Support",
          description: "Launch and ongoing maintenance",
          icon: Rocket,
     },
];

// Key benefits
const benefits = [
     "Scalable architecture that grows with your business",
     "Modern, secure coding practices and technologies",
     "Cross-platform compatibility and responsiveness",
     "Performance optimization for fast loading times",
     "SEO-friendly development for better visibility",
     "Comprehensive testing and quality assurance",
];

// Statistics
const stats = [
     { value: "150+", label: "Applications Built", icon: Code },
     { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
     { value: "24/7", label: "Support Available", icon: Users },
     { value: "15+", label: "Industries Served", icon: Award },
];

const WebDevelopmentServices = () => {
     const formRef = useRef<HTMLDivElement>(null);
     const [showQuotePopup, setShowQuotePopup] = useState(false);
     const [activeFeature, setActiveFeature] = useState<number | null>(null);
     const [activeStep, setActiveStep] = useState<number | null>(null);
     const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
     const [isVisible, setIsVisible] = useState(false);
     const sectionRef = useRef<HTMLDivElement>(null);

     const scrollToForm = () => {
          formRef.current?.scrollIntoView({ behavior: "smooth" });
     };

     const toggleQuotePopup = () => {
          setShowQuotePopup((prev) => !prev);
     };

     // Auto-rotate projects
     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
          }, 5000);
          return () => clearInterval(interval);
     }, []);

     // Check if element is in viewport
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

     // Animation variants
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
               transition: { duration: 0.5 },
          },
     };

     return (
          <div className="flex flex-col" ref={sectionRef}>
               {/* Hero Section */}
               <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-16 md:py-24 px-4 overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>

                    <div className="relative max-w-6xl mx-auto">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              {/* Content */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   className="text-center lg:text-left"
                              >
                                   <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6">
                                        <Sparkles className="w-4 h-4" />
                                        Enterprise Development
                                   </div>

                                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                        Powerful Web
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300">
                                             Applications
                                        </span>
                                   </h1>

                                   <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                        Build scalable, secure web applications
                                        that solve complex business challenges
                                        and deliver exceptional user experiences
                                        with cutting-edge technology.
                                   </p>

                                   <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                        <button
                                             onClick={scrollToForm}
                                             className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                        >
                                             Start Your Project
                                             <ArrowRight className="ml-2 h-5 w-5" />
                                        </button>
                                        <button
                                             onClick={() =>
                                                  setShowQuotePopup(true)
                                             }
                                             className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300"
                                        >
                                             Get Free Quote
                                             <DollarSign className="ml-2 h-5 w-5" />
                                        </button>
                                   </div>

                                   {/* Quick stats */}
                                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {stats.map((stat, index) => (
                                             <div
                                                  key={index}
                                                  className="text-center group"
                                             >
                                                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white/20 transition-all duration-300">
                                                       <stat.icon className="w-6 h-6 text-white" />
                                                  </div>
                                                  <div className="text-2xl font-bold text-cyan-300">
                                                       {stat.value}
                                                  </div>
                                                  <div className="text-sm text-white/80">
                                                       {stat.label}
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </motion.div>

                              {/* Image */}
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.8 }}
                                   animate={{ opacity: 1, scale: 1 }}
                                   transition={{ duration: 0.6, delay: 0.2 }}
                                   className="relative"
                              >
                                   <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                        <Image
                                             src={webdev}
                                             alt="Web Development Services"
                                             width={500}
                                             height={400}
                                             className="object-contain w-full h-auto"
                                             priority
                                        />
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* Features Section */}
               <section className="py-16 md:py-24 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Custom Development Solutions
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   We build scalable, secure web applications
                                   using modern technologies that drive business
                                   growth and operational efficiency.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {developmentFeatures.map((feature, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                                   >
                                        <div
                                             className={`w-12 h-12 rounded-lg bg-${feature.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                             <feature.icon
                                                  className={`w-6 h-6 text-${feature.color}-600`}
                                             />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                             {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                             {feature.description}
                                        </p>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Process Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                    <div className="max-w-7xl mx-auto">
                         <div className="text-center mb-20">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 rounded-full text-blue-800 text-sm font-semibold mb-6 shadow-sm"
                              >
                                   <Target className="w-4 h-4" />
                                   Proven Development Methodology
                              </motion.div>
                              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                   Our Development{" "}
                                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                                        Process
                                   </span>
                              </h2>
                              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                                   From concept to deployment, we follow a
                                   strategic methodology that ensures your
                                   application is delivered on time, within
                                   budget, and exceeds expectations.
                              </p>
                         </div>

                         <div className="relative">
                              {/* Animated background elements */}
                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                   <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
                                   <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
                              </div>

                              {/* Desktop Process Flow */}
                              <div className="hidden lg:block relative">
                                   {/* Animated connection path */}
                                   <svg
                                        className="absolute top-24 left-0 w-full h-2 z-0"
                                        viewBox="0 0 1000 20"
                                   >
                                        <defs>
                                             <linearGradient
                                                  id="devProcessGradient"
                                                  x1="0%"
                                                  y1="0%"
                                                  x2="100%"
                                                  y2="0%"
                                             >
                                                  <stop
                                                       offset="0%"
                                                       stopColor="#3B82F6"
                                                  />
                                                  <stop
                                                       offset="33%"
                                                       stopColor="#6366F1"
                                                  />
                                                  <stop
                                                       offset="66%"
                                                       stopColor="#8B5CF6"
                                                  />
                                                  <stop
                                                       offset="100%"
                                                       stopColor="#6366F1"
                                                  />
                                             </linearGradient>
                                        </defs>
                                        <motion.path
                                             d="M50 10 Q250 10 450 10 T950 10"
                                             stroke="url(#devProcessGradient)"
                                             strokeWidth="4"
                                             fill="none"
                                             strokeLinecap="round"
                                             initial={{
                                                  pathLength: 0,
                                                  opacity: 0,
                                             }}
                                             whileInView={{
                                                  pathLength: 1,
                                                  opacity: 1,
                                             }}
                                             transition={{
                                                  duration: 2,
                                                  ease: "easeInOut",
                                             }}
                                             viewport={{ once: true }}
                                        />
                                   </svg>

                                   <div className="grid grid-cols-4 gap-8 relative z-10">
                                        {[
                                             {
                                                  title: "Discovery & Planning",
                                                  description:
                                                       "We analyze your requirements, define project scope, and create a detailed development roadmap with timelines.",
                                                  icon: Target,
                                                  details: [
                                                       "Requirements analysis",
                                                       "Technical planning",
                                                       "Project roadmap",
                                                       "Timeline creation",
                                                  ],
                                                  color: {
                                                       bg: "from-blue-500 to-blue-600",
                                                       ring: "ring-blue-200",
                                                  },
                                             },
                                             {
                                                  title: "Architecture & Design",
                                                  description:
                                                       "Our architects design the technical foundation, database structure, and system architecture for scalability.",
                                                  icon: Layers,
                                                  details: [
                                                       "System architecture",
                                                       "Database design",
                                                       "API planning",
                                                       "Security framework",
                                                  ],
                                                  color: {
                                                       bg: "from-indigo-500 to-indigo-600",
                                                       ring: "ring-indigo-200",
                                                  },
                                             },
                                             {
                                                  title: "Development & Testing",
                                                  description:
                                                       "Expert developers build your application using modern frameworks with continuous testing and quality assurance.",
                                                  icon: Code,
                                                  details: [
                                                       "Clean code development",
                                                       "Unit testing",
                                                       "Integration testing",
                                                       "Performance optimization",
                                                  ],
                                                  color: {
                                                       bg: "from-purple-500 to-purple-600",
                                                       ring: "ring-purple-200",
                                                  },
                                             },
                                             {
                                                  title: "Deployment & Support",
                                                  description:
                                                       "We deploy your application to production and provide ongoing support, monitoring, and maintenance.",
                                                  icon: Rocket,
                                                  details: [
                                                       "Production deployment",
                                                       "Performance monitoring",
                                                       "Bug fixes & updates",
                                                       "Technical support",
                                                  ],
                                                  color: {
                                                       bg: "from-blue-600 to-indigo-600",
                                                       ring: "ring-blue-200",
                                                  },
                                             },
                                        ].map((step, index) => (
                                             <motion.div
                                                  key={index}
                                                  initial={{
                                                       opacity: 0,
                                                       y: 50,
                                                  }}
                                                  whileInView={{
                                                       opacity: 1,
                                                       y: 0,
                                                  }}
                                                  transition={{
                                                       duration: 0.6,
                                                       delay: index * 0.15,
                                                  }}
                                                  viewport={{ once: true }}
                                                  className="relative group"
                                             >
                                                  {/* Step Card */}
                                                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 group-hover:scale-105">
                                                       {/* Icon Container */}
                                                       <div className="relative mb-6">
                                                            <div
                                                                 className={`w-20 h-20 bg-gradient-to-br ${step.color.bg} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 ${step.color.ring} ring-8 ring-opacity-30`}
                                                            >
                                                                 <step.icon className="w-10 h-10 text-white" />
                                                            </div>
                                                            {/* Step number */}
                                                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-md">
                                                                 {index + 1}
                                                            </div>
                                                       </div>

                                                       {/* Content */}
                                                       <div className="text-center">
                                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                                                                 {step.title}
                                                            </h3>
                                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                                 {
                                                                      step.description
                                                                 }
                                                            </p>

                                                            {/* Details list */}
                                                            <div className="space-y-2">
                                                                 {step.details.map(
                                                                      (
                                                                           detail,
                                                                           detailIndex
                                                                      ) => (
                                                                           <div
                                                                                key={
                                                                                     detailIndex
                                                                                }
                                                                                className="flex items-center justify-center gap-2 text-xs text-gray-500"
                                                                           >
                                                                                <CheckCircle className="w-3 h-3 text-blue-500" />
                                                                                <span>
                                                                                     {
                                                                                          detail
                                                                                     }
                                                                                </span>
                                                                           </div>
                                                                      )
                                                                 )}
                                                            </div>
                                                       </div>

                                                       {/* Hover indicator */}
                                                       <div
                                                            className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r ${step.color.bg} rounded-full transition-all duration-300 transform -translate-x-1/2 group-hover:w-full`}
                                                       ></div>
                                                  </div>

                                                  {/* Floating elements */}
                                                  <div
                                                       className={`absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r ${step.color.bg} rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300 animate-pulse`}
                                                  ></div>
                                                  <div
                                                       className={`absolute -bottom-3 -right-3 w-4 h-4 bg-gradient-to-r ${step.color.bg} rounded-full opacity-0 group-hover:opacity-30 transition-all duration-300 delay-100 animate-pulse`}
                                                  ></div>
                                             </motion.div>
                                        ))}
                                   </div>
                              </div>

                              {/* Mobile Process Flow */}
                              <div className="lg:hidden space-y-8">
                                   {[
                                        {
                                             title: "Discovery & Planning",
                                             description:
                                                  "Requirements analysis and detailed project roadmap creation with clear timelines.",
                                             icon: Target,
                                             color: {
                                                  bg: "from-blue-500 to-blue-600",
                                                  ring: "ring-blue-200",
                                             },
                                        },
                                        {
                                             title: "Architecture & Design",
                                             description:
                                                  "Technical foundation design with scalable system architecture and database planning.",
                                             icon: Layers,
                                             color: {
                                                  bg: "from-indigo-500 to-indigo-600",
                                                  ring: "ring-indigo-200",
                                             },
                                        },
                                        {
                                             title: "Development & Testing",
                                             description:
                                                  "Expert coding with continuous testing and quality assurance throughout development.",
                                             icon: Code,
                                             color: {
                                                  bg: "from-purple-500 to-purple-600",
                                                  ring: "ring-purple-200",
                                             },
                                        },
                                        {
                                             title: "Deployment & Support",
                                             description:
                                                  "Production deployment with ongoing monitoring, maintenance, and technical support.",
                                             icon: Rocket,
                                             color: {
                                                  bg: "from-blue-600 to-indigo-600",
                                                  ring: "ring-blue-200",
                                             },
                                        },
                                   ].map((step, index) => (
                                        <motion.div
                                             key={index}
                                             initial={{ opacity: 0, x: -30 }}
                                             whileInView={{ opacity: 1, x: 0 }}
                                             transition={{
                                                  duration: 0.6,
                                                  delay: index * 0.1,
                                             }}
                                             viewport={{ once: true }}
                                             className="relative"
                                        >
                                             <div className="flex items-center gap-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                                  {/* Icon */}
                                                  <div
                                                       className={`w-16 h-16 bg-gradient-to-br ${step.color.bg} rounded-xl flex items-center justify-center shadow-lg ${step.color.ring} ring-4 ring-opacity-30 flex-shrink-0`}
                                                  >
                                                       <step.icon className="w-8 h-8 text-white" />
                                                  </div>

                                                  {/* Content */}
                                                  <div className="flex-1">
                                                       <div className="flex items-center gap-3 mb-2">
                                                            <span className="text-2xl font-bold text-gray-400">
                                                                 0{index + 1}
                                                            </span>
                                                            <h3 className="text-lg font-bold text-gray-900">
                                                                 {step.title}
                                                            </h3>
                                                       </div>
                                                       <p className="text-gray-600 text-sm leading-relaxed">
                                                            {step.description}
                                                       </p>
                                                  </div>
                                             </div>

                                             {/* Connection line for mobile */}
                                             {index < 3 && (
                                                  <div className="flex justify-center py-4">
                                                       <div className="w-0.5 h-8 bg-gradient-to-b from-blue-300 to-indigo-300 rounded-full"></div>
                                                  </div>
                                             )}
                                        </motion.div>
                                   ))}
                              </div>
                         </div>

                         {/* Bottom CTA */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.8 }}
                              viewport={{ once: true }}
                              className="text-center mt-16"
                         >
                              <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-white/50">
                                   <span className="text-gray-700 font-medium">
                                        Ready to start development?
                                   </span>
                                   <button
                                        onClick={scrollToForm}
                                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
                                   >
                                        Let's Begin
                                        <ArrowRight className="ml-2 h-4 w-4 inline" />
                                   </button>
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Technology Stack Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Modern Technology Stack
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   We use cutting-edge technologies and proven
                                   frameworks to build robust, scalable
                                   applications.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {techStack.map((category, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                                   >
                                        <h3
                                             className={`text-lg font-semibold text-${category.color}-600 mb-4`}
                                        >
                                             {category.category}
                                        </h3>
                                        <div className="space-y-3">
                                             {category.technologies.map(
                                                  (tech, techIndex) => (
                                                       <div
                                                            key={techIndex}
                                                            className="flex items-center gap-3"
                                                       >
                                                            <div
                                                                 className={`w-2 h-2 rounded-full bg-${category.color}-500`}
                                                            ></div>
                                                            <span className="text-sm text-gray-700">
                                                                 {tech}
                                                            </span>
                                                       </div>
                                                  )
                                             )}
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Benefits Section */}
               <section className="py-16 md:py-24 px-4">
                    <div className="max-w-6xl mx-auto">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              <motion.div
                                   initial={{ opacity: 0, x: -20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                              >
                                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        Why Choose Our Development Services?
                                   </h2>
                                   <p className="text-lg text-gray-600 mb-8">
                                        Our experienced development team
                                        delivers high-quality solutions that are
                                        secure, scalable, and built to last
                                        using industry best practices.
                                   </p>

                                   <div className="space-y-4">
                                        {benefits.map((benefit, index) => (
                                             <motion.div
                                                  key={index}
                                                  initial={{
                                                       opacity: 0,
                                                       x: -20,
                                                  }}
                                                  whileInView={{
                                                       opacity: 1,
                                                       x: 0,
                                                  }}
                                                  transition={{
                                                       duration: 0.5,
                                                       delay: index * 0.1,
                                                  }}
                                                  viewport={{ once: true }}
                                                  className="flex items-center gap-3"
                                             >
                                                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                                  <span className="text-gray-700">
                                                       {benefit}
                                                  </span>
                                             </motion.div>
                                        ))}
                                   </div>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, x: 20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="grid grid-cols-2 gap-6"
                              >
                                   <div className="space-y-6">
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-blue-600 mb-2">
                                                  120+
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Applications delivered
                                             </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-indigo-600 mb-2">
                                                  99%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Client satisfaction rate
                                             </div>
                                        </div>
                                   </div>
                                   <div className="space-y-6 pt-8">
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-purple-600 mb-2">
                                                  45
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  E-commerce platforms
                                             </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-blue-500 mb-2">
                                                  24/7
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Technical support
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                         >
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                   Ready to Build Your Application?
                              </h2>
                              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                   Let's turn your ideas into powerful web
                                   applications that drive business growth. Get
                                   started with a free project consultation
                                   today.
                              </p>

                              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                   <button
                                        onClick={scrollToForm}
                                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                   >
                                        <MessageSquare className="mr-2 h-5 w-5" />
                                        Discuss Your Project
                                   </button>
                                   <button
                                        onClick={() => setShowQuotePopup(true)}
                                        className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300"
                                   >
                                        <DollarSign className="mr-2 h-5 w-5" />
                                        Get Development Quote
                                   </button>
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Contact Form Section */}
               <section
                    ref={formRef}
                    className="py-16 md:py-24 px-4 bg-gray-50"
               >
                    <div className="max-w-4xl mx-auto">
                         <div className="text-center mb-12">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Start Your Development Journey
                              </h2>
                              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                   Tell us about your project requirements and
                                   we'll provide a detailed proposal with
                                   timeline and cost estimates.
                              </p>
                         </div>
                         <Form />
                    </div>
               </section>

               {/* Quote Popup */}
               <QuotePopup
                    isOpen={showQuotePopup}
                    onClose={() => setShowQuotePopup(false)}
               />
          </div>
     );
};

export default WebDevelopmentServices;
