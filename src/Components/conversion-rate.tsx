"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
     LineChart,
     BarChart,
     Target,
     MousePointerClick,
     LayoutGrid,
     Eye,
     Lightbulb,
     Gauge,
     ArrowUpRight,
     CheckCircle2,
     ArrowRight,
     CheckCircle,
     Search,
     TrendingUp,
     Users,
     Award,
     Sparkles,
} from "lucide-react";
import { QuotePopup } from "./quote-popup";
import Form from "./form";

import research from "@/Images/research.jpg";
import hypothesis from "@/Images/Types-of-hypotheses.jpg";
import testDesign from "@/Images/test.jpg";
import implementation from "@/Images/implementation.webp";
import analysis from "@/Images/analysis.jpg";
// import ecommerce from "@/Images/Ecommerce-Services.webp";
// import saas from "@/Images/saas.jpg";
// import financial from "@/Images/finance.webp";
import testing from "@/Images/testing.png";

// Simplified services data
const services = [
     {
          title: "User Experience Analysis",
          description:
               "Comprehensive analysis of user behavior and friction points",
          icon: Eye,
          color: "blue",
     },
     {
          title: "A/B Testing",
          description: "Rigorous testing to determine optimal conversion paths",
          icon: BarChart,
          color: "green",
     },
     {
          title: "Landing Page Optimization",
          description: "Strategic redesign to maximize conversion potential",
          icon: Target,
          color: "purple",
     },
     {
          title: "Conversion Funnel Analysis",
          description: "Identify and fix leaks in your sales funnel",
          icon: Gauge,
          color: "orange",
     },
     {
          title: "Analytics Implementation",
          description: "Advanced tracking for meaningful conversion insights",
          icon: LineChart,
          color: "teal",
     },
     {
          title: "Personalization Strategies",
          description: "Tailored experiences to boost individual conversions",
          icon: Lightbulb,
          color: "indigo",
     },
];

// Simplified process steps
const processSteps = [
     {
          title: "Research & Discovery",
          description:
               "Analyze data, conduct user research, and identify conversion barriers",
          icon: Search,
          features: [
               "Analytics Review",
               "User Research",
               "Competitor Analysis",
          ],
     },
     {
          title: "Hypothesis Formation",
          description:
               "Develop data-backed hypotheses about optimization opportunities",
          icon: Lightbulb,
          features: [
               "Problem Identification",
               "Solution Brainstorming",
               "Priority Ranking",
          ],
     },
     {
          title: "Test Design & Implementation",
          description: "Create and execute rigorous A/B tests for optimization",
          icon: BarChart,
          features: [
               "Test Creation",
               "Traffic Allocation",
               "Quality Assurance",
          ],
     },
     {
          title: "Analysis & Optimization",
          description: "Analyze results and implement winning variations",
          icon: TrendingUp,
          features: [
               "Statistical Analysis",
               "Winner Implementation",
               "Continuous Improvement",
          ],
     },
];

// Key benefits
const benefits = [
     "Maximize existing traffic ROI",
     "Reduce customer acquisition costs",
     "Increase average order value",
     "Improve user experience",
     "Make data-driven decisions",
     "Gain competitive advantage",
];

// Statistics
const stats = [
     { value: "149%", label: "Avg. Conversion Increase", icon: Target },
     { value: "$4.2M", label: "Revenue Generated", icon: TrendingUp },
     { value: "312+", label: "A/B Tests Completed", icon: BarChart },
     { value: "97%", label: "Client Satisfaction", icon: Award },
];

export default function ConversionRateOptimization() {
     const [isQuoteOpen, setIsQuoteOpen] = useState(false);
     const contactRef = useRef<HTMLDivElement>(null);

     const scrollToContact = () => {
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
     };

     return (
          <div className="flex flex-col">
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
                                        Data-Driven CRO
                                   </div>

                                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                        Turn Visitors Into
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
                                             Customers
                                        </span>
                                   </h1>

                                   <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                        Boost your conversion rates with
                                        scientific precision. Our data-driven
                                        approach identifies and eliminates
                                        barriers to turn more visitors into
                                        paying customers.
                                   </p>

                                   <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                        <button
                                             onClick={() =>
                                                  setIsQuoteOpen(true)
                                             }
                                             className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                        >
                                             Get Free CRO Audit
                                             <ArrowRight className="ml-2 h-5 w-5" />
                                        </button>
                                        <button
                                             onClick={scrollToContact}
                                             className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300"
                                        >
                                             Learn More
                                             <Target className="ml-2 h-5 w-5" />
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
                                                  <div className="text-2xl font-bold text-green-300">
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
                                             src={testing}
                                             alt="Conversion Rate Optimization"
                                             width={500}
                                             height={900}
                                             className="object-contain w-full h-auto"
                                             priority
                                        />
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* Services Section */}
               <section className="py-16 md:py-24 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Conversion Optimization Services
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   We use data-driven strategies to identify and
                                   eliminate conversion barriers, creating
                                   frictionless paths to purchase.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {services.map((service, index) => (
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
                                             className={`w-12 h-12 rounded-lg bg-${service.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                             <service.icon
                                                  className={`w-6 h-6 text-${service.color}-600`}
                                             />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                             {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                             {service.description}
                                        </p>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Process Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-100 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

                    <div className="max-w-7xl mx-auto relative">
                         <div className="text-center mb-20">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-3 rounded-full text-purple-800 text-sm font-semibold mb-6 shadow-sm"
                              >
                                   <BarChart className="w-4 h-4" />
                                   Proven CRO Process
                              </motion.div>
                              <motion.h2
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: 0.1 }}
                                   viewport={{ once: true }}
                                   className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                              >
                                   Our CRO Methodology
                              </motion.h2>
                              <motion.p
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: 0.2 }}
                                   viewport={{ once: true }}
                                   className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                              >
                                   A systematic approach to understanding user
                                   behavior and optimizing conversion rates
                                   through scientific testing and data analysis.
                              </motion.p>
                         </div>

                         <div className="relative">
                              {/* Animated SVG Connection Path */}
                              <svg
                                   className="absolute inset-0 w-full h-full hidden lg:block"
                                   viewBox="0 0 1000 400"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <motion.path
                                        d="M 125 200 Q 312.5 100 500 200 Q 687.5 300 875 200"
                                        stroke="url(#gradient)"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeDasharray="10,5"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: 0.5 }}
                                        viewport={{ once: true }}
                                   />
                                   <defs>
                                        <linearGradient
                                             id="gradient"
                                             x1="0%"
                                             y1="0%"
                                             x2="100%"
                                             y2="0%"
                                        >
                                             <stop
                                                  offset="0%"
                                                  stopColor="#8B5CF6"
                                             />
                                             <stop
                                                  offset="50%"
                                                  stopColor="#6366F1"
                                             />
                                             <stop
                                                  offset="100%"
                                                  stopColor="#3B82F6"
                                             />
                                        </linearGradient>
                                   </defs>
                              </svg>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                   {processSteps.map((step, index) => (
                                        <motion.div
                                             key={index}
                                             initial={{ opacity: 0, y: 40 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             transition={{
                                                  duration: 0.6,
                                                  delay: index * 0.15,
                                             }}
                                             viewport={{ once: true }}
                                             className="relative group"
                                        >
                                             <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/80 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 h-full">
                                                  <div
                                                       className={`w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                                  >
                                                       <step.icon className="w-8 h-8 text-white" />
                                                  </div>

                                                  <div className="text-sm text-purple-600 font-bold mb-2">
                                                       STEP {index + 1}
                                                  </div>

                                                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                                                       {step.title}
                                                  </h3>

                                                  <p className="text-gray-600 mb-6 leading-relaxed">
                                                       {step.description}
                                                  </p>

                                                  <div className="space-y-2">
                                                       {step.features.map(
                                                            (feature, idx) => (
                                                                 <div
                                                                      key={idx}
                                                                      className="flex items-center gap-2 text-sm text-gray-700"
                                                                 >
                                                                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                                                      {feature}
                                                                 </div>
                                                            )
                                                       )}
                                                  </div>
                                             </div>

                                             {/* Step number indicator */}
                                             <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                                  {index + 1}
                                             </div>
                                        </motion.div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>

               {/* Benefits & Results Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              <motion.div
                                   initial={{ opacity: 0, x: -20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                              >
                                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        Why Invest in CRO?
                                   </h2>
                                   <p className="text-lg text-gray-600 mb-8">
                                        Conversion rate optimization delivers
                                        measurable improvements to your bottom
                                        line without increasing ad spend or
                                        traffic costs.
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
                                                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
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
                                             <div className="text-3xl font-bold text-purple-600 mb-2">
                                                  149%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Avg. Conversion Increase
                                             </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-blue-600 mb-2">
                                                  4.2M
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Revenue Generated
                                             </div>
                                        </div>
                                   </div>
                                   <div className="space-y-6 pt-8">
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-indigo-600 mb-2">
                                                  312+
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  A/B Tests Completed
                                             </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-green-500 mb-2">
                                                  97%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Client Satisfaction
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                         >
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                   Ready to Boost Your Conversion Rates?
                              </h2>
                              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                   Get a free CRO audit and discover untapped
                                   revenue opportunities on your website.
                              </p>
                              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                   <button
                                        onClick={() => setIsQuoteOpen(true)}
                                        className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                   >
                                        <Target className="mr-2 h-5 w-5" />
                                        Get Free CRO Audit
                                   </button>
                                   <button
                                        onClick={scrollToContact}
                                        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                   >
                                        <Users className="mr-2 h-5 w-5" />
                                        Schedule Consultation
                                   </button>
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Contact Section */}
               <section
                    ref={contactRef}
                    className="py-16 md:py-24 px-4 bg-gray-50"
               >
                    <div className="max-w-4xl mx-auto">
                         <div className="text-center mb-8">
                              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                   Start Optimizing Your Conversions
                              </h2>
                              <p className="text-gray-600 max-w-2xl mx-auto">
                                   Get in touch to discuss how we can help you
                                   turn more visitors into customers through
                                   data-driven optimization.
                              </p>
                         </div>
                         <Form />
                    </div>
               </section>

               <QuotePopup
                    isOpen={isQuoteOpen}
                    onClose={() => setIsQuoteOpen(false)}
               />
          </div>
     );
}
