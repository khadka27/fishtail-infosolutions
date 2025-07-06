"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
     ArrowRight,
     Instagram,
     Facebook,
     Twitter,
     Linkedin,
     Youtube,
     TrendingUp,
     Users,
     MessageCircle,
     DollarSign,
     BarChart2,
     Target,
     ImageIcon,
     Award,
     Search,
     FileText,
     PieChart,
     CheckCircle,
     Sparkles,
     Clock,
     Share2,
     Heart,
} from "lucide-react";
import Form from "./form";
import { QuotePopup } from "./quote-popup";
import socialmarketing from "@/Images/social-marketing.png";

// Simplified services data
const services = [
     {
          title: "Strategy Development",
          description:
               "Custom social media strategies aligned with your business goals and target audience.",
          icon: Target,
     },
     {
          title: "Content Creation",
          description:
               "Engaging, on-brand content including graphics, videos, and compelling captions.",
          icon: ImageIcon,
     },
     {
          title: "Community Management",
          description:
               "Active engagement with your audience through comments, messages, and community building.",
          icon: Users,
     },
     {
          title: "Paid Social Advertising",
          description:
               "Strategic paid campaigns with advanced targeting and optimization for maximum ROI.",
          icon: TrendingUp,
     },
     {
          title: "Analytics & Reporting",
          description:
               "Comprehensive performance tracking with actionable insights and regular reporting.",
          icon: BarChart2,
     },
     {
          title: "Influencer Marketing",
          description:
               "Strategic partnerships with relevant influencers to expand reach and build credibility.",
          icon: Award,
     },
];

// Simplified process steps
const processSteps = [
     {
          title: "Discovery & Audit",
          description:
               "Analyze current presence, competitors, and opportunities",
          icon: Search,
     },
     {
          title: "Strategy Development",
          description:
               "Create customized social media strategy and content plan",
          icon: Target,
     },
     {
          title: "Content Creation",
          description:
               "Develop high-quality, engaging content for your audience",
          icon: ImageIcon,
     },
     {
          title: "Community Management",
          description:
               "Engage with audience and build meaningful relationships",
          icon: MessageCircle,
     },
     {
          title: "Performance Analysis",
          description:
               "Monitor results and optimize strategy for better performance",
          icon: PieChart,
     },
];

// Benefits data
const benefits = [
     {
          title: "4.8B Social Media Users",
          description: "Access to massive global audience",
          icon: Users,
          stat: "60%",
          label: "of world population",
     },
     {
          title: "Higher Engagement",
          description: "Build meaningful customer relationships",
          icon: Heart,
          stat: "76%",
          label: "higher conversion rates",
     },
     {
          title: "Brand Awareness",
          description: "Increase visibility and recognition",
          icon: TrendingUp,
          stat: "3x",
          label: "higher brand recall",
     },
     {
          title: "Customer Insights",
          description: "Understand your audience better",
          icon: BarChart2,
          stat: "54%",
          label: "research products socially",
     },
];

const SocialMediaMarketing = () => {
     const formRef = useRef<HTMLDivElement>(null);
     const [showQuotePopup, setShowQuotePopup] = useState(false);

     const scrollToForm = () => {
          formRef.current?.scrollIntoView({ behavior: "smooth" });
     };

     return (
          <div className="flex flex-col">
               {/* Hero Section */}
               <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 px-4 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl"></div>

                    <div className="max-w-7xl mx-auto text-center relative">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              className="flex justify-center mb-8"
                         >
                              <div className="relative">
                                   <Image
                                        src={socialmarketing}
                                        alt="Social Media Marketing"
                                        width={200}
                                        height={200}
                                        className="object-contain"
                                   />
                                   <div className="absolute -top-2 -right-2 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                        <Sparkles className="w-4 h-4 inline mr-1" />
                                        Grow
                                   </div>
                              </div>
                         </motion.div>

                         <motion.h1
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.1 }}
                              className="text-4xl md:text-6xl font-bold mb-6"
                         >
                              Social Media Marketing
                              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                                   That Drives Results
                              </span>
                         </motion.h1>

                         <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed"
                         >
                              Build a powerful social presence, engage your
                              audience, and drive measurable business growth
                              across all major platforms.
                         </motion.p>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              className="flex flex-col sm:flex-row gap-4 justify-center"
                         >
                              <button
                                   onClick={scrollToForm}
                                   className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center"
                              >
                                   Get Free Social Audit
                                   <ArrowRight className="ml-2 w-5 h-5" />
                              </button>
                              <button
                                   onClick={() => setShowQuotePopup(true)}
                                   className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                              >
                                   <DollarSign className="mr-2 w-5 h-5" />
                                   Get Quote
                              </button>
                         </motion.div>
                    </div>
               </section>

               {/* Platform Icons */}
               <section className="py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-center mb-12"
                         >
                              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                   We Manage All Major Platforms
                              </h2>
                              <p className="text-gray-600 max-w-2xl mx-auto">
                                   From Facebook to TikTok, we help you succeed
                                   across every social media platform that
                                   matters to your business.
                              </p>
                         </motion.div>

                         <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                              {[
                                   {
                                        icon: Facebook,
                                        name: "Facebook",
                                        color: "text-blue-600",
                                   },
                                   {
                                        icon: Instagram,
                                        name: "Instagram",
                                        color: "text-pink-600",
                                   },
                                   {
                                        icon: Twitter,
                                        name: "Twitter",
                                        color: "text-blue-400",
                                   },
                                   {
                                        icon: Linkedin,
                                        name: "LinkedIn",
                                        color: "text-blue-700",
                                   },
                                   {
                                        icon: Youtube,
                                        name: "YouTube",
                                        color: "text-red-600",
                                   },
                                   {
                                        icon: MessageCircle,
                                        name: "TikTok",
                                        color: "text-black",
                                   },
                              ].map((platform, index) => (
                                   <motion.div
                                        key={platform.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                                   >
                                        <platform.icon
                                             className={`w-8 h-8 ${platform.color} mb-3`}
                                        />
                                        <span className="text-sm font-medium text-gray-700">
                                             {platform.name}
                                        </span>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Services Section */}
               <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
                    <div className="max-w-7xl mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-center mb-16"
                         >
                              <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full text-blue-800 font-semibold mb-6">
                                   <Sparkles className="w-5 h-5" />
                                   Our Services
                              </div>
                              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                   Complete Social Media Solutions
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   From strategy to execution, we provide
                                   end-to-end social media marketing services
                                   that drive real business results.
                              </p>
                         </motion.div>

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
                                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                   >
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                                             <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                                             {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                             {service.description}
                                        </p>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Benefits Section */}
               <section className="py-20 px-4 bg-white">
                    <div className="max-w-7xl mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-center mb-16"
                         >
                              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                   Why Social Media Marketing Matters
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   Social media is essential for modern business
                                   success. Here's why your business needs a
                                   strong social presence.
                              </p>
                         </motion.div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {benefits.map((benefit, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="text-center p-6"
                                   >
                                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                             <benefit.icon className="w-10 h-10 text-white" />
                                        </div>
                                        <div className="text-4xl font-bold text-blue-600 mb-2">
                                             {benefit.stat}
                                        </div>
                                        <div className="text-sm text-gray-500 mb-4">
                                             {benefit.label}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                                             {benefit.title}
                                        </h3>
                                        <p className="text-gray-600">
                                             {benefit.description}
                                        </p>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Process Section */}
               <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl"></div>
                    <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl"></div>

                    <div className="max-w-7xl mx-auto relative">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-center mb-20"
                         >
                              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 rounded-full text-blue-800 font-semibold mb-6 shadow-lg">
                                   <Target className="w-5 h-5" />
                                   Our Process
                              </div>
                              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                   Strategic Social Media Process
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   Our proven methodology ensures your social
                                   media strategy delivers measurable results
                                   and sustainable growth.
                              </p>
                         </motion.div>

                         <div className="relative">
                              {/* Animated SVG path for connection line */}
                              <div className="hidden lg:block absolute inset-0 pointer-events-none">
                                   <svg
                                        className="w-full h-full"
                                        viewBox="0 0 1200 400"
                                        preserveAspectRatio="none"
                                   >
                                        <motion.path
                                             d="M120,200 Q300,100 480,200 T840,200 Q960,100 1080,200"
                                             fill="none"
                                             stroke="url(#gradient)"
                                             strokeWidth="3"
                                             strokeDasharray="10,5"
                                             initial={{ pathLength: 0 }}
                                             whileInView={{ pathLength: 1 }}
                                             transition={{
                                                  duration: 2,
                                                  ease: "easeInOut",
                                             }}
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
                                                       stopColor="#8B5CF6"
                                                  />
                                                  <stop
                                                       offset="100%"
                                                       stopColor="#6366F1"
                                                  />
                                             </linearGradient>
                                        </defs>
                                   </svg>
                              </div>

                              {/* Process steps */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                                   {processSteps.map((step, index) => (
                                        <motion.div
                                             key={index}
                                             initial={{
                                                  opacity: 0,
                                                  y: 40,
                                                  scale: 0.9,
                                             }}
                                             whileInView={{
                                                  opacity: 1,
                                                  y: 0,
                                                  scale: 1,
                                             }}
                                             transition={{
                                                  duration: 0.6,
                                                  delay: index * 0.1,
                                             }}
                                             viewport={{ once: true }}
                                             className="relative"
                                        >
                                             {/* Card container */}
                                             <div className="bg-white/80 backdrop-blur-sm px-6 py-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 relative overflow-hidden group">
                                                  {/* Gradient overlay on hover */}
                                                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                                                  {/* Step number and icon */}
                                                  <div className="relative z-10 text-center">
                                                       <div className="relative mx-auto mb-6">
                                                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl relative group-hover:scale-110 transition-transform duration-300">
                                                                 <step.icon className="w-10 h-10 text-white" />
                                                            </div>
                                                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-sm shadow-lg border-2 border-blue-100">
                                                                 {index + 1}
                                                            </div>
                                                       </div>

                                                       <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                                            {step.title}
                                                       </h3>
                                                       <p className="text-gray-600 text-sm leading-relaxed">
                                                            {step.description}
                                                       </p>
                                                  </div>

                                                  {/* Process arrow for mobile/tablet */}
                                                  {index <
                                                       processSteps.length -
                                                            1 && (
                                                       <div className="lg:hidden flex justify-center mt-6">
                                                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                                                 <ArrowRight className="w-4 h-4 text-white rotate-90 md:rotate-0" />
                                                            </div>
                                                       </div>
                                                  )}
                                             </div>

                                             {/* Floating elements */}
                                             <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-300 rounded-full opacity-60 animate-pulse"></div>
                                             <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
                                        </motion.div>
                                   ))}
                              </div>

                              {/* Additional process benefits */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: 0.8 }}
                                   viewport={{ once: true }}
                                   className="mt-16 text-center"
                              >
                                   <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                             Why Our Process Works
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                             <div className="flex items-center justify-center space-x-3">
                                                  <CheckCircle className="w-6 h-6 text-green-500" />
                                                  <span className="text-gray-700 font-medium">
                                                       Data-Driven Decisions
                                                  </span>
                                             </div>
                                             <div className="flex items-center justify-center space-x-3">
                                                  <CheckCircle className="w-6 h-6 text-green-500" />
                                                  <span className="text-gray-700 font-medium">
                                                       Continuous Optimization
                                                  </span>
                                             </div>
                                             <div className="flex items-center justify-center space-x-3">
                                                  <CheckCircle className="w-6 h-6 text-green-500" />
                                                  <span className="text-gray-700 font-medium">
                                                       Measurable Results
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                         >
                              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                   Ready to Grow Your Social Presence?
                              </h2>
                              <p className="text-xl mb-10 opacity-90">
                                   Get a free social media audit and discover
                                   how we can help your business succeed on
                                   social media.
                              </p>
                              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                   <button
                                        onClick={scrollToForm}
                                        className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center"
                                   >
                                        <Search className="mr-2 w-5 h-5" />
                                        Get Free Audit
                                   </button>
                                   <button
                                        onClick={() => setShowQuotePopup(true)}
                                        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                                   >
                                        <MessageCircle className="mr-2 w-5 h-5" />
                                        Start Project
                                   </button>
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Contact Form */}
               <section ref={formRef} className="py-20 px-4 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-center mb-12"
                         >
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                   Get Your Free Social Media Audit
                              </h2>
                              <p className="text-xl text-gray-600">
                                   Discover how your business is performing on
                                   social media and get actionable
                                   recommendations for improvement.
                              </p>
                         </motion.div>
                         <Form />
                    </div>
               </section>

               <QuotePopup
                    isOpen={showQuotePopup}
                    onClose={() => setShowQuotePopup(false)}
               />
          </div>
     );
};

export default SocialMediaMarketing;
