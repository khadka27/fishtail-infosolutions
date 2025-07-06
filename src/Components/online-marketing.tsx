/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
     ArrowRight,
     Search,
     BarChart,
     Share2,
     Mail,
     TrendingUp,
     MessageSquare,
     DollarSign,
     Target,
     Globe,
     Megaphone,
     PenTool,
     CheckCircle,
     Sparkles,
     Users,
     Award,
     Zap,
} from "lucide-react";
import Form from "./form";
import image1 from "@/Images/services-analytics-alt-colors-optimized.png";
import { QuotePopup } from "./quote-popup";

// Simplified marketing features
const marketingFeatures = [
     {
          title: "Search Engine Optimization",
          description:
               "Boost your organic visibility and drive qualified traffic that converts.",
          icon: Search,
          color: "purple",
     },
     {
          title: "Pay-Per-Click Advertising",
          description:
               "Strategic ad campaigns that target your ideal customers and maximize ROI.",
          icon: Target,
          color: "blue",
     },
     {
          title: "Social Media Marketing",
          description:
               "Engage your audience and build brand loyalty across all social platforms.",
          icon: Share2,
          color: "green",
     },
     {
          title: "Content Marketing",
          description:
               "Create valuable content that attracts, engages, and converts your audience.",
          icon: PenTool,
          color: "orange",
     },
     {
          title: "Email Marketing",
          description:
               "Nurture leads and drive conversions with personalized email campaigns.",
          icon: Mail,
          color: "pink",
     },
     {
          title: "Analytics & Reporting",
          description:
               "Data-driven insights to continuously optimize your marketing performance.",
          icon: BarChart,
          color: "teal",
     },
];

// Process steps
const processSteps = [
     {
          title: "Discovery & Research",
          description: "Analyze your business and competitive landscape",
          icon: Search,
     },
     {
          title: "Strategy Development",
          description: "Create comprehensive marketing roadmap",
          icon: Target,
     },
     {
          title: "Campaign Implementation",
          description: "Execute across all relevant channels",
          icon: Megaphone,
     },
     {
          title: "Optimization & Scaling",
          description: "Continuous improvement and growth",
          icon: TrendingUp,
     },
];

// Key benefits
const benefits = [
     "Increased organic search visibility and traffic",
     "Higher conversion rates and customer acquisition",
     "Improved brand awareness and recognition",
     "Better customer engagement and loyalty",
     "Measurable ROI and performance tracking",
     "Multi-channel marketing integration",
];

// Statistics
const stats = [
     { value: "250%", label: "Avg. Traffic Increase", icon: TrendingUp },
     { value: "180%", label: "ROI Improvement", icon: Award },
     { value: "500+", label: "Campaigns Launched", icon: Megaphone },
     { value: "95%", label: "Client Retention", icon: Users },
];

const OnlineMarketingServices = () => {
     const formRef = useRef<HTMLDivElement>(null);
     const [showQuotePopup, setShowQuotePopup] = useState(false);

     const scrollToForm = () => {
          formRef.current?.scrollIntoView({ behavior: "smooth" });
     };

     return (
          <div className="flex flex-col">
               {/* Hero Section */}
               <section className="relative bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800 text-white py-16 md:py-24 px-4 overflow-hidden">
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
                                        Results-Driven Marketing
                                   </div>

                                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                        Digital Marketing
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                                             That Delivers
                                        </span>
                                   </h1>

                                   <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                        Drive measurable growth with data-driven
                                        marketing strategies that attract,
                                        engage, and convert your ideal customers
                                        across all digital channels.
                                   </p>

                                   <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                        <button
                                             onClick={scrollToForm}
                                             className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                        >
                                             Get Marketing Plan
                                             <ArrowRight className="ml-2 h-5 w-5" />
                                        </button>
                                        <button
                                             onClick={() =>
                                                  setShowQuotePopup(true)
                                             }
                                             className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300"
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
                                                  <div className="text-2xl font-bold text-yellow-300">
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
                                             src={image1}
                                             alt="Online Marketing Services"
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

               {/* Services Section */}
               <section className="py-16 md:py-24 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Comprehensive Marketing Solutions
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   Our integrated approach ensures your
                                   marketing efforts work together to maximize
                                   visibility, engagement, and conversions.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {marketingFeatures.map((feature, index) => (
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
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 via-purple-50 to-violet-100 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <div className="absolute bottom-20 right-10 w-64 h-64 bg-violet-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

                    <div className="max-w-7xl mx-auto relative">
                         <div className="text-center mb-20">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-violet-100 px-6 py-3 rounded-full text-purple-800 text-sm font-semibold mb-6 shadow-sm"
                              >
                                   <Target className="w-4 h-4" />
                                   Proven Methodology
                              </motion.div>
                              <motion.h2
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: 0.1 }}
                                   viewport={{ once: true }}
                                   className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                              >
                                   Our Marketing Process
                              </motion.h2>
                              <motion.p
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: 0.2 }}
                                   viewport={{ once: true }}
                                   className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                              >
                                   A data-driven methodology that consistently
                                   delivers measurable results and sustainable
                                   growth for businesses across all industries.
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
                                                  stopColor="#A855F7"
                                             />
                                             <stop
                                                  offset="100%"
                                                  stopColor="#C084FC"
                                             />
                                        </linearGradient>
                                   </defs>
                              </svg>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                   {[
                                        {
                                             title: "Discovery & Research",
                                             description:
                                                  "Deep dive into your business goals, target audience, and competitive landscape",
                                             icon: Search,
                                             features: [
                                                  "Market Analysis",
                                                  "Competitor Research",
                                                  "Audience Insights",
                                                  "Goal Setting",
                                             ],
                                             gradient:
                                                  "from-purple-500 to-violet-600",
                                        },
                                        {
                                             title: "Strategy Development",
                                             description:
                                                  "Create comprehensive marketing roadmap with clear objectives and KPIs",
                                             icon: Target,
                                             features: [
                                                  "Strategic Planning",
                                                  "Channel Selection",
                                                  "Budget Allocation",
                                                  "Timeline Creation",
                                             ],
                                             gradient:
                                                  "from-violet-500 to-purple-600",
                                        },
                                        {
                                             title: "Campaign Implementation",
                                             description:
                                                  "Execute integrated campaigns across all relevant digital channels",
                                             icon: Megaphone,
                                             features: [
                                                  "Content Creation",
                                                  "Ad Campaigns",
                                                  "SEO Implementation",
                                                  "Social Media",
                                             ],
                                             gradient:
                                                  "from-purple-600 to-indigo-600",
                                        },
                                        {
                                             title: "Optimization & Scaling",
                                             description:
                                                  "Continuous improvement through data analysis and performance optimization",
                                             icon: TrendingUp,
                                             features: [
                                                  "Performance Analysis",
                                                  "A/B Testing",
                                                  "Campaign Refinement",
                                                  "Scale Strategies",
                                             ],
                                             gradient:
                                                  "from-indigo-600 to-violet-600",
                                        },
                                   ].map((step, index) => (
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
                                                       className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                                  >
                                                       <step.icon className="w-8 h-8 text-white" />
                                                  </div>

                                                  <div className="text-sm text-purple-600 font-bold mb-2">
                                                       PHASE {index + 1}
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
                                             <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                                  {index + 1}
                                             </div>
                                        </motion.div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>

               {/* Benefits & Results Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-purple-50 to-violet-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              <motion.div
                                   initial={{ opacity: 0, x: -20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                              >
                                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        Why Choose Our Marketing Services?
                                   </h2>
                                   <p className="text-lg text-gray-600 mb-8">
                                        Our data-driven approach and integrated
                                        strategies deliver consistent,
                                        measurable results that drive real
                                        business growth and ROI.
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
                                                  285%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Average ROI increase
                                             </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-violet-600 mb-2">
                                                  67%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Conversion improvement
                                             </div>
                                        </div>
                                   </div>
                                   <div className="space-y-6 pt-8">
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-indigo-600 mb-2">
                                                  180%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Traffic growth
                                             </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-purple-500 mb-2">
                                                  95%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Client satisfaction
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* Marketing Channels Section */}
               <section className="py-16 md:py-24 px-4">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Multi-Channel Marketing Expertise
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   We leverage the power of integrated marketing
                                   across all digital channels to maximize your
                                   reach and impact.
                              </p>
                         </div>

                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                              {[
                                   {
                                        channel: "SEO",
                                        metric: "157%",
                                        label: "Organic Growth",
                                   },
                                   {
                                        channel: "PPC",
                                        metric: "320%",
                                        label: "ROAS",
                                   },
                                   {
                                        channel: "Social",
                                        metric: "85%",
                                        label: "Engagement+",
                                   },
                                   {
                                        channel: "Email",
                                        metric: "45%",
                                        label: "Open Rate",
                                   },
                                   {
                                        channel: "Content",
                                        metric: "230%",
                                        label: "Leads Generated",
                                   },
                                   {
                                        channel: "Analytics",
                                        metric: "24/7",
                                        label: "Monitoring",
                                   },
                              ].map((item, index) => (
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
                                        <div className="text-sm font-semibold text-purple-600 mb-2">
                                             {item.channel}
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900 mb-1">
                                             {item.metric}
                                        </div>
                                        <div className="text-xs text-gray-600">
                                             {item.label}
                                        </div>
                                   </motion.div>
                              ))}
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
                                   Ready to Accelerate Your Growth?
                              </h2>
                              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                   Let's create a comprehensive marketing
                                   strategy that drives real results. Get
                                   started with a free marketing audit and
                                   custom growth plan.
                              </p>

                              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                   <button
                                        onClick={scrollToForm}
                                        className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                   >
                                        <MessageSquare className="mr-2 h-5 w-5" />
                                        Get Free Marketing Audit
                                   </button>
                                   <button
                                        onClick={() => setShowQuotePopup(true)}
                                        className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300"
                                   >
                                        <DollarSign className="mr-2 h-5 w-5" />
                                        Request Custom Pricing
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
                                   Start Your Marketing Journey
                              </h2>
                              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                   Tell us about your business goals and
                                   challenges, and we'll create a custom
                                   marketing strategy to help you achieve them.
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

export default OnlineMarketingServices;
