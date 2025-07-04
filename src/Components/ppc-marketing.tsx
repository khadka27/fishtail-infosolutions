"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
     ArrowRight,
     MousePointer,
     BarChart2,
     Target,
     DollarSign,
     Search,
     Zap,
     TrendingUp,
     CheckCircle,
     Settings,
     LineChart,
     Users,
     Globe,
     Sparkles,
     Award,
} from "lucide-react";
import Form from "./form";
import { QuotePopup } from "./quote-popup";
import Image from "next/image";
import image3 from "@/Images/services-payperclick-alt-colors-optimized.png";

// Simplified PPC features
const ppcFeatures = [
     {
          title: "Google Ads Management",
          description:
               "Strategic management of Google Search, Display, Shopping, and YouTube campaigns",
          icon: Search,
          color: "blue",
     },
     {
          title: "Social Media Advertising",
          description:
               "Targeted advertising on Facebook, Instagram, LinkedIn, and other platforms",
          icon: Users,
          color: "purple",
     },
     {
          title: "Remarketing Campaigns",
          description:
               "Re-engage website visitors and past customers to boost conversions",
          icon: Zap,
          color: "indigo",
     },
     {
          title: "Landing Page Optimization",
          description:
               "Conversion-focused landing page design to maximize campaign performance",
          icon: MousePointer,
          color: "violet",
     },
     {
          title: "Conversion Tracking",
          description:
               "Comprehensive tracking to measure ROI across all campaigns",
          icon: LineChart,
          color: "blue",
     },
     {
          title: "PPC Analytics & Reporting",
          description: "Detailed performance analysis with actionable insights",
          icon: BarChart2,
          color: "purple",
     },
];

// Simplified process steps
const processSteps = [
     {
          title: "Account Analysis",
          description:
               "Analyze existing accounts and competitors to identify opportunities",
          icon: Search,
          features: [
               "Competitor Research",
               "Account Audit",
               "Opportunity Mapping",
          ],
     },
     {
          title: "Strategy Development",
          description:
               "Create customized PPC strategy aligned with business goals",
          icon: Target,
          features: ["Goal Setting", "Audience Research", "Budget Planning"],
     },
     {
          title: "Campaign Setup",
          description:
               "Build optimized campaigns with strategic targeting and structure",
          icon: Settings,
          features: ["Campaign Structure", "Keyword Research", "Ad Creation"],
     },
     {
          title: "Optimization & Scaling",
          description: "Continuously optimize and scale successful strategies",
          icon: TrendingUp,
          features: [
               "Performance Monitoring",
               "Bid Optimization",
               "Scale Strategies",
          ],
     },
];

// Key benefits
const benefits = [
     "Get immediate visibility and traffic",
     "Precisely target your ideal customers",
     "Control budget with flexible spending limits",
     "Measure exact ROI and performance",
     "Test and optimize rapidly",
     "Compete with larger businesses effectively",
];

// Statistics
const stats = [
     { value: "6.4x", label: "Average ROAS", icon: DollarSign },
     { value: "350+", label: "PPC Campaigns", icon: BarChart2 },
     { value: "-42%", label: "Avg Cost Per Lead", icon: Target },
     { value: "95%", label: "Client Retention", icon: Award },
];

const PPCMarketing = () => {
     const formRef = useRef<HTMLDivElement>(null);
     const [showQuotePopup, setShowQuotePopup] = useState(false);

     const scrollToForm = () => {
          formRef.current?.scrollIntoView({ behavior: "smooth" });
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
                                        Instant Results
                                   </div>

                                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                        Pay-Per-Click
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                                             Marketing
                                        </span>
                                   </h1>

                                   <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                        Drive targeted traffic, generate
                                        qualified leads, and increase
                                        conversions through strategic
                                        pay-per-click advertising campaigns that
                                        deliver instant results.
                                   </p>

                                   <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                        <button
                                             onClick={scrollToForm}
                                             className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                        >
                                             Get Free PPC Audit
                                             <ArrowRight className="ml-2 h-5 w-5" />
                                        </button>
                                        <button
                                             onClick={() =>
                                                  setShowQuotePopup(true)
                                             }
                                             className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300"
                                        >
                                             Request Quote
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
                                             src={image3}
                                             alt="PPC Marketing Services"
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

               {/* PPC Platforms Section */}
               <section className="py-16 md:py-24 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   We Manage All Major PPC Platforms
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   Strategic campaign management across Google,
                                   Facebook, LinkedIn, and other top advertising
                                   platforms.
                              </p>
                         </div>

                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                              {[
                                   {
                                        name: "Google Ads",
                                        color: "blue",
                                        icon: Search,
                                   },
                                   {
                                        name: "Facebook Ads",
                                        color: "indigo",
                                        icon: Users,
                                   },
                                   {
                                        name: "LinkedIn Ads",
                                        color: "purple",
                                        icon: Users,
                                   },
                                   {
                                        name: "YouTube Ads",
                                        color: "red",
                                        icon: Globe,
                                   },
                                   {
                                        name: "Twitter Ads",
                                        color: "blue",
                                        icon: Globe,
                                   },
                                   {
                                        name: "Microsoft Ads",
                                        color: "green",
                                        icon: Search,
                                   },
                              ].map((platform, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="text-center group"
                                   >
                                        <div
                                             className={`w-16 h-16 mx-auto bg-${platform.color}-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-${platform.color}-200 transition-colors duration-300`}
                                        >
                                             <platform.icon
                                                  className={`w-8 h-8 text-${platform.color}-600`}
                                             />
                                        </div>
                                        <h3 className="text-sm font-medium text-gray-900">
                                             {platform.name}
                                        </h3>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Services Section */}
               <section className="py-16 md:py-24 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Comprehensive PPC Solutions
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   Our pay-per-click marketing services drive
                                   targeted traffic, generate qualified leads,
                                   and maximize return on ad spend.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {ppcFeatures.map((feature, index) => (
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
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

                    <div className="max-w-7xl mx-auto relative">
                         <div className="text-center mb-20">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full text-blue-800 text-sm font-semibold mb-6 shadow-sm"
                              >
                                   <Target className="w-4 h-4" />
                                   Proven PPC Process
                              </motion.div>
                              <motion.h2
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: 0.1 }}
                                   viewport={{ once: true }}
                                   className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                              >
                                   Our PPC Management Process
                              </motion.h2>
                              <motion.p
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: 0.2 }}
                                   viewport={{ once: true }}
                                   className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                              >
                                   A proven, data-driven approach to PPC
                                   management that consistently delivers results
                                   across industries and markets.
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
                                                  stopColor="#3B82F6"
                                             />
                                             <stop
                                                  offset="50%"
                                                  stopColor="#6366F1"
                                             />
                                             <stop
                                                  offset="100%"
                                                  stopColor="#8B5CF6"
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
                                                       className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                                  >
                                                       <step.icon className="w-8 h-8 text-white" />
                                                  </div>

                                                  <div className="text-sm text-blue-600 font-bold mb-2">
                                                       STEP {index + 1}
                                                  </div>

                                                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
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
                                                                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                                      {feature}
                                                                 </div>
                                                            )
                                                       )}
                                                  </div>
                                             </div>

                                             {/* Step number indicator */}
                                             <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                                  {index + 1}
                                             </div>
                                        </motion.div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>

               {/* Benefits & Results Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              <motion.div
                                   initial={{ opacity: 0, x: -20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                              >
                                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        Why Invest in PPC Marketing?
                                   </h2>
                                   <p className="text-lg text-gray-600 mb-8">
                                        PPC delivers immediate visibility and
                                        measurable results. Drive targeted
                                        traffic, control costs, and scale
                                        successful campaigns for maximum ROI.
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
                                                  6.4x
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Average ROAS
                                             </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-indigo-600 mb-2">
                                                  350+
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  PPC Campaigns
                                             </div>
                                        </div>
                                   </div>
                                   <div className="space-y-6 pt-8">
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-purple-600 mb-2">
                                                  -42%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Avg Cost Per Lead
                                             </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-violet-500 mb-2">
                                                  95%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Client Retention
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
                                   Ready to Boost Your Ad Performance?
                              </h2>
                              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                   Get a free PPC audit and discover how to
                                   drive more targeted traffic, reduce costs,
                                   and increase conversions.
                              </p>
                              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                   <button
                                        onClick={scrollToForm}
                                        className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                   >
                                        <Search className="mr-2 h-5 w-5" />
                                        Get Free PPC Audit
                                   </button>
                                   <button
                                        onClick={() => setShowQuotePopup(true)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                   >
                                        <TrendingUp className="mr-2 h-5 w-5" />
                                        Start Campaigns Today
                                   </button>
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Form Section */}
               <div ref={formRef} className="bg-gray-50 py-16 px-4">
                    <div className="max-w-4xl mx-auto">
                         <div className="text-center mb-8">
                              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                   Get Your Free PPC Audit
                              </h2>
                              <p className="text-gray-600 max-w-2xl mx-auto">
                                   Discover how your PPC campaigns are
                                   performing and receive actionable
                                   recommendations to improve click-through
                                   rates and conversions.
                              </p>
                         </div>
                         <Form />
                    </div>
               </div>

               <QuotePopup
                    isOpen={showQuotePopup}
                    onClose={() => setShowQuotePopup(false)}
               />
          </div>
     );
};

export default PPCMarketing;
