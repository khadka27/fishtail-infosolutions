"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
     ArrowRight,
     Code,
     Layout,
     Smartphone,
     Monitor,
     Zap,
     Users,
     Award,
     MessageSquare,
     DollarSign,
     CheckCircle,
     Palette,
     Globe,
     Sparkles,
     Target,
     TrendingUp,
     Star,
} from "lucide-react";
import Form from "./form";
import design from "@/Images/design.png";
import { QuotePopup } from "./quote-popup";

// Simplified design features
const designFeatures = [
     {
          title: "Custom Web Design",
          description:
               "Unique, brand-focused designs that capture your vision and engage your audience.",
          icon: Palette,
          color: "orange",
     },
     {
          title: "Responsive Development",
          description:
               "Mobile-first designs that work flawlessly across all devices and screen sizes.",
          icon: Smartphone,
          color: "blue",
     },
     {
          title: "User Experience Focus",
          description:
               "Intuitive interfaces designed to convert visitors into customers.",
          icon: Users,
          color: "green",
     },
     {
          title: "Performance Optimization",
          description:
               "Lightning-fast websites optimized for speed and search engines.",
          icon: Zap,
          color: "purple",
     },
     {
          title: "E-commerce Solutions",
          description:
               "Powerful online stores with secure payment systems and inventory management.",
          icon: Globe,
          color: "pink",
     },
     {
          title: "Ongoing Support",
          description:
               "Continuous maintenance and updates to keep your website running smoothly.",
          icon: Award,
          color: "teal",
     },
];

// Process steps
const processSteps = [
     {
          title: "Discovery & Planning",
          description: "Understanding your goals and target audience",
          icon: Target,
     },
     {
          title: "Design & Wireframing",
          description: "Creating visual concepts and user flows",
          icon: Layout,
     },
     {
          title: "Development & Testing",
          description: "Building with modern technologies",
          icon: Code,
     },
     {
          title: "Launch & Optimization",
          description: "Going live with ongoing improvements",
          icon: TrendingUp,
     },
];

// Key benefits
const benefits = [
     "Professional, modern design that reflects your brand",
     "Mobile-responsive across all devices",
     "Search engine optimized for better visibility",
     "Fast loading speeds and performance",
     "User-friendly content management system",
     "Secure hosting and SSL certificates",
];

// Statistics
const stats = [
     { value: "200+", label: "Websites Created", icon: Globe },
     { value: "98%", label: "Client Satisfaction", icon: Star },
     { value: "3.2s", label: "Avg Load Time", icon: Zap },
     { value: "24/7", label: "Support Available", icon: Award },
];

const WebDesignServices = () => {
     const formRef = useRef<HTMLDivElement>(null);
     const [showQuotePopup, setShowQuotePopup] = useState(false);

     const scrollToForm = () => {
          formRef.current?.scrollIntoView({ behavior: "smooth" });
     };

     return (
          <div className="flex flex-col">
               {/* Hero Section */}
               <section className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-600 text-white py-16 md:py-24 px-4 overflow-hidden">
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
                                        Premium Web Design
                                   </div>

                                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                        Stunning Websites
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
                                             That Convert
                                        </span>
                                   </h1>

                                   <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                        Create a powerful first impression with
                                        professional web design that attracts
                                        visitors, engages users, and drives
                                        business growth.
                                   </p>

                                   <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                        <button
                                             onClick={scrollToForm}
                                             className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                        >
                                             Start Your Project
                                             <ArrowRight className="ml-2 h-5 w-5" />
                                        </button>
                                        <button
                                             onClick={() =>
                                                  setShowQuotePopup(true)
                                             }
                                             className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300"
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
                                                  <div className="text-2xl font-bold text-yellow-200">
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
                                             src={design}
                                             alt="Web Design Services"
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
                                   Why Choose Our Web Design Services?
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   We create more than just beautiful
                                   websites—we build digital experiences that
                                   drive results and grow your business.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {designFeatures.map((feature, index) => (
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
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50">
                    <div className="max-w-7xl mx-auto">
                         <div className="text-center mb-20">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full text-orange-800 text-sm font-semibold mb-6 shadow-sm"
                              >
                                   <Target className="w-4 h-4" />
                                   Proven Methodology
                              </motion.div>
                              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                   Our Design{" "}
                                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                                        Process
                                   </span>
                              </h2>
                              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                                   From concept to launch, we follow a strategic
                                   methodology that ensures your website exceeds
                                   expectations and delivers measurable results.
                              </p>
                         </div>

                         <div className="relative">
                              {/* Animated background elements */}
                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                   <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
                                   <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
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
                                                  id="processGradient"
                                                  x1="0%"
                                                  y1="0%"
                                                  x2="100%"
                                                  y2="0%"
                                             >
                                                  <stop
                                                       offset="0%"
                                                       stopColor="#F97316"
                                                  />
                                                  <stop
                                                       offset="33%"
                                                       stopColor="#F59E0B"
                                                  />
                                                  <stop
                                                       offset="66%"
                                                       stopColor="#EAB308"
                                                  />
                                                  <stop
                                                       offset="100%"
                                                       stopColor="#F59E0B"
                                                  />
                                             </linearGradient>
                                        </defs>
                                        <motion.path
                                             d="M50 10 Q250 10 450 10 T950 10"
                                             stroke="url(#processGradient)"
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
                                                  title: "Discovery & Strategy",
                                                  description:
                                                       "We dive deep into your business goals, target audience, and competitive landscape to create a strategic foundation.",
                                                  icon: Target,
                                                  details: [
                                                       "Business analysis",
                                                       "Audience research",
                                                       "Competitor analysis",
                                                       "Project planning",
                                                  ],
                                                  color: {
                                                       bg: "from-orange-500 to-orange-600",
                                                       ring: "ring-orange-200",
                                                  },
                                             },
                                             {
                                                  title: "Design & Wireframing",
                                                  description:
                                                       "Our designers create intuitive wireframes and stunning visual concepts that align with your brand identity.",
                                                  icon: Layout,
                                                  details: [
                                                       "Wireframe creation",
                                                       "Visual design",
                                                       "Brand integration",
                                                       "User experience mapping",
                                                  ],
                                                  color: {
                                                       bg: "from-amber-500 to-amber-600",
                                                       ring: "ring-amber-200",
                                                  },
                                             },
                                             {
                                                  title: "Development & Testing",
                                                  description:
                                                       "Expert developers bring your design to life with clean, efficient code and rigorous testing across all devices.",
                                                  icon: Code,
                                                  details: [
                                                       "Responsive coding",
                                                       "CMS integration",
                                                       "Performance optimization",
                                                       "Cross-browser testing",
                                                  ],
                                                  color: {
                                                       bg: "from-yellow-500 to-yellow-600",
                                                       ring: "ring-yellow-200",
                                                  },
                                             },
                                             {
                                                  title: "Launch & Support",
                                                  description:
                                                       "We ensure a smooth launch and provide ongoing support to keep your website performing at its best.",
                                                  icon: TrendingUp,
                                                  details: [
                                                       "Site deployment",
                                                       "Staff training",
                                                       "Performance monitoring",
                                                       "Ongoing maintenance",
                                                  ],
                                                  color: {
                                                       bg: "from-orange-600 to-amber-600",
                                                       ring: "ring-orange-200",
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
                                                                                <CheckCircle className="w-3 h-3 text-orange-500" />
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
                                             title: "Discovery & Strategy",
                                             description:
                                                  "Understanding your business goals and target audience to create a strategic foundation.",
                                             icon: Target,
                                             color: {
                                                  bg: "from-orange-500 to-orange-600",
                                                  ring: "ring-orange-200",
                                             },
                                        },
                                        {
                                             title: "Design & Wireframing",
                                             description:
                                                  "Creating intuitive wireframes and stunning visual concepts aligned with your brand.",
                                             icon: Layout,
                                             color: {
                                                  bg: "from-amber-500 to-amber-600",
                                                  ring: "ring-amber-200",
                                             },
                                        },
                                        {
                                             title: "Development & Testing",
                                             description:
                                                  "Building your website with clean code and testing across all devices and browsers.",
                                             icon: Code,
                                             color: {
                                                  bg: "from-yellow-500 to-yellow-600",
                                                  ring: "ring-yellow-200",
                                             },
                                        },
                                        {
                                             title: "Launch & Support",
                                             description:
                                                  "Smooth deployment with ongoing support to keep your website performing optimally.",
                                             icon: TrendingUp,
                                             color: {
                                                  bg: "from-orange-600 to-amber-600",
                                                  ring: "ring-orange-200",
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
                                                       <div className="w-0.5 h-8 bg-gradient-to-b from-orange-300 to-amber-300 rounded-full"></div>
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
                                        Ready to start your project?
                                   </span>
                                   <button
                                        onClick={scrollToForm}
                                        className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
                                   >
                                        Let's Begin
                                        <ArrowRight className="ml-2 h-4 w-4 inline" />
                                   </button>
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Benefits Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              <motion.div
                                   initial={{ opacity: 0, x: -20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                              >
                                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        First Impressions Matter
                                   </h2>
                                   <p className="text-lg text-gray-600 mb-8">
                                        Your website is often the first
                                        interaction potential customers have
                                        with your business. Make it count with
                                        professional design that builds trust
                                        and drives conversions.
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
                                                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
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
                                             <div className="text-3xl font-bold text-orange-600 mb-2">
                                                  85%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Of users judge credibility by
                                                  design
                                             </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-amber-600 mb-2">
                                                  3.2s
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Average site loading time
                                             </div>
                                        </div>
                                   </div>
                                   <div className="space-y-6 pt-8">
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-yellow-600 mb-2">
                                                  94%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  First impressions are
                                                  design-related
                                             </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-orange-500 mb-2">
                                                  200%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  ROI improvement with good
                                                  design
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* Expertise Section */}
               <section className="py-16 md:py-24 px-4">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Our Design Expertise
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   Years of experience creating websites that
                                   not only look amazing but also deliver
                                   exceptional user experiences and business
                                   results.
                              </p>
                         </div>

                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                              {[
                                   { value: "250+", label: "Websites Created" },
                                   { value: "15+", label: "Industries Served" },
                                   { value: "98%", label: "On-Time Delivery" },
                                   { value: "5★", label: "Average Rating" },
                                   { value: "24/7", label: "Support" },
                                   {
                                        value: "100%",
                                        label: "Mobile Responsive",
                                   },
                              ].map((stat, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100"
                                   >
                                        <div className="text-3xl font-bold text-orange-600 mb-2">
                                             {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                             {stat.label}
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-900 to-orange-900 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                         >
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                   Ready to Launch Your Dream Website?
                              </h2>
                              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                   Let's create a stunning website that
                                   represents your brand perfectly and drives
                                   real business results. Get started today with
                                   a free consultation.
                              </p>

                              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                   <button
                                        onClick={scrollToForm}
                                        className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                   >
                                        <MessageSquare className="mr-2 h-5 w-5" />
                                        Start Your Project
                                   </button>
                                   <button
                                        onClick={() => setShowQuotePopup(true)}
                                        className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300"
                                   >
                                        <DollarSign className="mr-2 h-5 w-5" />
                                        Get Custom Quote
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
                                   Let's Bring Your Vision to Life
                              </h2>
                              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                   Ready to get started? Tell us about your
                                   project and we'll provide a detailed proposal
                                   within 24 hours.
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

export default WebDesignServices;
