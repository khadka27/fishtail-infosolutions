"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
     MapPin,
     Map,
     Link2,
     Target,
     PenTool,
     Mail,
     ArrowRight,
     Plus,
     ChevronRight,
     Check,
     Star,
     Users,
     BarChart,
     TrendingUp,
     Sparkles,
     Globe,
     Zap,
     Heart,
     Award,
     Clock,
     Shield,
     Lightbulb,
     Rocket,
} from "lucide-react";
import image1 from "@/Images/seo_specialist_workplace-optimized.png";
import image2 from "@/Images/services-seo-alt-colors-optimized.png";
import image3 from "@/Images/services-analytics-alt-colors-optimized.png";
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png";
import { QuotePopup } from "./quote-popup";

export function ServicesSection() {
     const [drawerOpen, setDrawerOpen] = useState(false);
     const [quotePopupOpen, setQuotePopupOpen] = useState(false);
     const [activeCard, setActiveCard] = useState<number | null>(null);
     const [activeService, setActiveService] = useState<number | null>(null);
     const [isVisible, setIsVisible] = useState(false);
     const [selectedTab, setSelectedTab] = useState(0);
     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
     const sectionRef = useRef<HTMLDivElement>(null);

     // Enhanced service cards data
     const serviceCards = [
          {
               title: "Lead Generation",
               image: image1,
               gradient: "from-blue-600 via-blue-700 to-indigo-800",
               description:
                    "Turn clicks into customers with hyper-targeted ads, LinkedIn outreach, and high-converting funnels.",
               features: [
                    "PPC Campaigns",
                    "Email Automation",
                    "LinkedIn Ads",
                    "Conversion Tracking",
               ],
               stats: { value: "4.2x", label: "Engagement Increase" },
               link: "/Services/lead-generation",
               icon: Rocket,
               badge: "Most Popular",
          },
          {
               title: "Organic SEO",
               image: image2,
               gradient: "from-emerald-600 via-teal-700 to-cyan-800",
               description:
                    "Sustainable growth through keyword mastery, backlink building, and content that ranks.",
               features: [
                    "Keyword Research",
                    "On-Page SEO",
                    "Link Building",
                    "Content Strategy",
               ],
               stats: { value: "187%", label: "Traffic Growth" },
               link: "/Services/local-seo",
               icon: TrendingUp,
               badge: "Best ROI",
          },
          {
               title: "Performance Analytics",
               image: image3,
               gradient: "from-purple-600 via-violet-700 to-purple-800",
               description:
                    "Track KPIs, user behavior, and campaign ROI with real-time dashboards and granular reports.",
               features: [
                    "Real-time Tracking",
                    "A/B Testing",
                    "Heatmaps",
                    "Custom Reports",
               ],
               stats: { value: "3.5x", label: "ROI Improvement" },
               link: "/Services/web-development",
               icon: BarChart,
               badge: "Data-Driven",
          },
          {
               title: "PPC Advertising",
               image: image4,
               gradient: "from-orange-600 via-red-600 to-pink-700",
               description:
                    "Immediate traffic with Google, Meta, and LinkedIn ads optimized for conversions.",
               features: [
                    "Search Ads",
                    "Display Ads",
                    "Remarketing",
                    "Shopping Ads",
               ],
               stats: { value: "68%", label: "Cost Reduction" },
               link: "/Services/ppc-marketing",
               icon: Target,
               badge: "Quick Results",
          },
     ];

     // Enhanced additional services
     const additionalServices = [
          {
               title: "Web Development",
               description:
                    "Lightning-fast, responsive websites built with modern technologies and best practices.",
               icon: Globe,
               gradient: "from-blue-500 to-cyan-600",
               details: "Custom websites using React, Next.js, and modern frameworks for optimal performance.",
               redirect: "/Services/web-development",
               features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
          },
          {
               title: "SEO Strategy",
               description:
                    "Comprehensive SEO audits and strategies to dominate search rankings.",
               icon: TrendingUp,
               gradient: "from-green-500 to-emerald-600",
               details: "Technical SEO, content optimization, and link building strategies that deliver results.",
               redirect: "/Services/local-seo",
               features: [
                    "Technical Audit",
                    "Content Strategy",
                    "Link Building",
               ],
          },
          {
               title: "Lead Funnels",
               description:
                    "Automated lead capture and nurturing systems that convert prospects into customers.",
               icon: Zap,
               gradient: "from-purple-500 to-violet-600",
               details: "Multi-step funnels with email automation, retargeting, and conversion optimization.",
               redirect: "/Services/lead-generation",
               features: ["Email Automation", "Retargeting", "A/B Testing"],
          },
          {
               title: "Paid Advertising",
               description:
                    "Strategic ad campaigns across Google, Facebook, LinkedIn, and other platforms.",
               icon: Target,
               gradient: "from-orange-500 to-red-600",
               details: "Data-driven campaigns optimized for maximum ROI and conversions.",
               redirect: "/Services/ppc-marketing",
               features: [
                    "Multi-Platform",
                    "ROI Focused",
                    "Real-time Optimization",
               ],
          },
          {
               title: "Custom Solutions",
               description:
                    "Tailored digital solutions for unique business challenges and requirements.",
               icon: Lightbulb,
               gradient: "from-indigo-500 to-purple-600",
               details: "Custom web applications, integrations, and digital tools built for your specific needs.",
               redirect: "/Services/web-development",
               features: [
                    "Custom Development",
                    "API Integration",
                    "Scalable Solutions",
               ],
          },
          {
               title: "Email Marketing",
               description:
                    "Engaging email campaigns that drive opens, clicks, and conversions.",
               icon: Mail,
               gradient: "from-pink-500 to-rose-600",
               details: "Automated email sequences, segmentation, and performance tracking for maximum engagement.",
               redirect: "/Services/email-marketing",
               features: ["Automation", "Segmentation", "Analytics"],
          },
     ];

     // Enhanced service tabs
     const serviceTabs = [
          {
               title: "For Startups",
               icon: Rocket,
               gradient: "from-blue-500 to-purple-600",
               content: "Launch and scale your startup with cost-effective digital marketing strategies designed for rapid growth.",
               services: [
                    "MVP Development",
                    "Growth Hacking",
                    "Social Media",
                    "Content Marketing",
               ],
               benefits: ["Quick Setup", "Affordable Pricing", "Growth Focus"],
          },
          {
               title: "For E-commerce",
               icon: BarChart,
               gradient: "from-green-500 to-blue-600",
               content: "Boost your online store's visibility, traffic, and sales with specialized e-commerce strategies.",
               services: [
                    "Product SEO",
                    "Shopping Ads",
                    "Conversion Optimization",
                    "Email Automation",
               ],
               benefits: [
                    "Increased Sales",
                    "Better ROI",
                    "Customer Retention",
               ],
          },
          {
               title: "For Enterprise",
               icon: Shield,
               gradient: "from-purple-500 to-pink-600",
               content: "Enterprise-grade solutions with advanced analytics, automation, and multi-channel strategies.",
               services: [
                    "Enterprise SEO",
                    "Marketing Automation",
                    "Advanced Analytics",
                    "Custom Solutions",
               ],
               benefits: [
                    "Scalable Solutions",
                    "Advanced Features",
                    "Dedicated Support",
               ],
          },
     ];

     // Mouse tracking for interactive effects
     const handleMouseMove = (e: React.MouseEvent) => {
          setMousePosition({ x: e.clientX, y: e.clientY });
     };

     // Open quote popup
     const openQuotePopup = (e: React.MouseEvent) => {
          e.preventDefault();
          setQuotePopupOpen(true);
          if (drawerOpen) {
               setDrawerOpen(false);
          }
     };

     // Intersection observer for animations
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

     return (
          <section
               ref={sectionRef}
               className="relative pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 pb-2 sm:pb-4 md:pb-6 lg:pb-8 xl:pb-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
               onMouseMove={handleMouseMove}
          >
               {/* Enhanced Background Elements */}
               <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
                    <div
                         className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse"
                         style={{ animationDelay: "2s" }}
                    ></div>
                    <div
                         className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-200/20 rounded-full blur-2xl animate-pulse"
                         style={{ animationDelay: "1s" }}
                    ></div>

                    {/* Floating particles */}
                    <div className="absolute inset-0">
                         {[...Array(20)].map((_, i) => (
                              <div
                                   key={i}
                                   className="absolute w-1 h-1 bg-blue-300/30 rounded-full animate-bounce"
                                   style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 3}s`,
                                        animationDuration: `${
                                             2 + Math.random() * 2
                                        }s`,
                                   }}
                              />
                         ))}
                    </div>
               </div>

               <div className="container mx-auto relative z-10">
                    {/* Enhanced Header */}
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={isVisible ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.8 }}
                         className="text-center mb-8 sm:mb-12 lg:mb-16"
                    >
                         <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-blue-800 mb-4">
                              <Sparkles className="w-4 h-4" />
                              Full-Service Digital Agency
                         </div>
                         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent break-words leading-tight px-4">
                              Transform Your Digital Presence
                         </h2>
                         <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                              From web development to lead generation, we blend
                              creativity with data-driven strategies to fuel
                              sustainable growth and maximize your ROI.
                         </p>
                    </motion.div>

                    {/* Enhanced Service Tabs */}
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={isVisible ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.8, delay: 0.2 }}
                         className="mb-8 sm:mb-12 lg:mb-16"
                    >
                         <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                              {serviceTabs.map((tab, index) => (
                                   <button
                                        key={index}
                                        className={`px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 ${
                                             selectedTab === index
                                                  ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg shadow-blue-200/50`
                                                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white shadow-sm border border-gray-200/50"
                                        }`}
                                        onClick={() => setSelectedTab(index)}
                                   >
                                        <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                                        {tab.title}
                                   </button>
                              ))}
                         </div>

                         <AnimatePresence mode="wait">
                              <motion.div
                                   key={selectedTab}
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   exit={{ opacity: 0, y: -20 }}
                                   transition={{ duration: 0.5 }}
                                   className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-200/50"
                              >
                                   <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 text-center">
                                        {serviceTabs[selectedTab].content}
                                   </p>
                                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
                                        {serviceTabs[selectedTab].services.map(
                                             (service, index) => (
                                                  <div
                                                       key={index}
                                                       className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 sm:p-3 rounded-lg flex items-center text-xs sm:text-sm text-gray-700 hover:scale-105 transition-transform duration-300"
                                                  >
                                                       <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500" />
                                                       {service}
                                                  </div>
                                             )
                                        )}
                                   </div>
                                   <div className="flex flex-wrap justify-center gap-2">
                                        {serviceTabs[selectedTab].benefits.map(
                                             (benefit, index) => (
                                                  <span
                                                       key={index}
                                                       className="px-2 sm:px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs rounded-full font-medium"
                                                  >
                                                       <Award className="w-3 h-3 inline mr-1" />
                                                       {benefit}
                                                  </span>
                                             )
                                        )}
                                   </div>
                              </motion.div>
                         </AnimatePresence>
                    </motion.div>

                    {/* Enhanced Service Cards */}
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={isVisible ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.8, delay: 0.4 }}
                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16"
                    >
                         {serviceCards.map((service, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, y: 30 }}
                                   animate={
                                        isVisible ? { opacity: 1, y: 0 } : {}
                                   }
                                   transition={{
                                        duration: 0.8,
                                        delay: 0.1 * index,
                                   }}
                                   className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 cursor-pointer group ${
                                        activeCard === index
                                             ? "scale-105 z-10"
                                             : "hover:scale-102"
                                   }`}
                                   onMouseEnter={() => setActiveCard(index)}
                                   onMouseLeave={() => setActiveCard(null)}
                              >
                                   <div
                                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}
                                   ></div>
                                   <div className="absolute inset-0 bg-black/20"></div>

                                   {/* Animated background pattern */}
                                   <div className="absolute inset-0 opacity-20">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] animate-pulse"></div>
                                   </div>

                                   <div className="relative z-10 p-4 sm:p-6 flex flex-col h-full">
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white flex items-center">
                                             <service.icon className="w-3 h-3 mr-1" />
                                             {service.badge}
                                        </div>

                                        {/* Stats */}
                                        <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white flex items-center">
                                             <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                                             <span className="font-bold">
                                                  {service.stats.value}
                                             </span>
                                        </div>

                                        <div className="flex-1 flex flex-col items-center text-center">
                                             <div className="mb-3 sm:mb-4 transform transition-transform duration-500 group-hover:scale-110">
                                                  <Image
                                                       src={service.image}
                                                       alt={service.title}
                                                       width={120}
                                                       height={120}
                                                       className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                                                  />
                                             </div>

                                             <h3 className="font-bold text-sm sm:text-base md:text-lg text-white mb-2">
                                                  {service.title}
                                             </h3>

                                             {/* Fixed: Only expand the content for the specific hovered card */}
                                             <div
                                                  className={`overflow-hidden transition-all duration-500 ${
                                                       activeCard === index
                                                            ? "max-h-96 opacity-100"
                                                            : "max-h-0 opacity-0"
                                                  }`}
                                             >
                                                  <p className="text-white/90 text-xs sm:text-sm mb-3 leading-relaxed">
                                                       {service.description}
                                                  </p>
                                                  <div className="space-y-1 mb-4">
                                                       {service.features.map(
                                                            (feature, i) => (
                                                                 <div
                                                                      key={i}
                                                                      className="flex items-center text-white/90 text-xs"
                                                                 >
                                                                      <ChevronRight className="w-3 h-3 mr-1" />
                                                                      {feature}
                                                                 </div>
                                                            )
                                                       )}
                                                  </div>
                                                  <Link
                                                       href={service.link}
                                                       className="inline-flex items-center text-white hover:text-white/80 transition-colors text-xs bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-white/30"
                                                  >
                                                       Learn More{" "}
                                                       <ArrowRight className="ml-1 w-3 h-3" />
                                                  </Link>
                                             </div>

                                             {/* Show plus icon only for non-active cards */}
                                             {activeCard !== index && (
                                                  <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                       <Plus className="w-3 h-3 text-white" />
                                                  </div>
                                             )}
                                        </div>
                                   </div>
                              </motion.div>
                         ))}
                    </motion.div>

                    {/* Enhanced Additional Services */}
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={isVisible ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.8, delay: 0.6 }}
                         className="mb-8 sm:mb-12 lg:mb-16"
                    >
                         <div className="text-center mb-6 sm:mb-8">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                   Specialized Services
                              </h3>
                              <p className="text-gray-600 text-sm sm:text-base">
                                   Tailored solutions for your unique business
                                   needs
                              </p>
                         </div>

                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                              {additionalServices.map((service, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={
                                             isVisible
                                                  ? { opacity: 1, y: 0 }
                                                  : {}
                                        }
                                        transition={{
                                             duration: 0.8,
                                             delay: 0.1 * index,
                                        }}
                                        className={`p-4 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer border border-gray-200/50 hover:shadow-lg ${
                                             activeService === index
                                                  ? "bg-white shadow-xl scale-105"
                                                  : "bg-white/80 backdrop-blur-sm hover:bg-white"
                                        }`}
                                        onMouseEnter={() =>
                                             setActiveService(index)
                                        }
                                        onMouseLeave={() =>
                                             setActiveService(null)
                                        }
                                   >
                                        <div className="flex items-start gap-4">
                                             <div
                                                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${
                                                       service.gradient
                                                  } transition-all duration-300 ${
                                                       activeService === index
                                                            ? "scale-110"
                                                            : ""
                                                  }`}
                                             >
                                                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                             </div>
                                             <div className="flex-1">
                                                  <h4 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 mb-2">
                                                       {service.title}
                                                  </h4>
                                                  <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed">
                                                       {service.description}
                                                  </p>

                                                  <div className="flex flex-wrap gap-1 mb-3">
                                                       {service.features.map(
                                                            (feature, i) => (
                                                                 <span
                                                                      key={i}
                                                                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                                                 >
                                                                      {feature}
                                                                 </span>
                                                            )
                                                       )}
                                                  </div>

                                                  <AnimatePresence>
                                                       {activeService ===
                                                            index && (
                                                            <motion.div
                                                                 initial={{
                                                                      opacity: 0,
                                                                      height: 0,
                                                                 }}
                                                                 animate={{
                                                                      opacity: 1,
                                                                      height: "auto",
                                                                 }}
                                                                 exit={{
                                                                      opacity: 0,
                                                                      height: 0,
                                                                 }}
                                                                 transition={{
                                                                      duration: 0.3,
                                                                 }}
                                                                 className="overflow-hidden"
                                                            >
                                                                 <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed">
                                                                      {
                                                                           service.details
                                                                      }
                                                                 </p>
                                                                 <Link
                                                                      href={
                                                                           service.redirect
                                                                      }
                                                                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-xs sm:text-sm font-medium"
                                                                 >
                                                                      Learn More{" "}
                                                                      <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                                                                 </Link>
                                                            </motion.div>
                                                       )}
                                                  </AnimatePresence>
                                             </div>
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </motion.div>

                    {/* Enhanced CTA Section */}
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={isVisible ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.8, delay: 0.8 }}
                         className="text-center"
                    >
                         <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
                              <div className="absolute inset-0 bg-black/20"></div>
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] animate-pulse"></div>

                              <div className="relative z-10">
                                   <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                                        <Heart className="w-4 h-4" />
                                        Ready to Get Started?
                                   </div>
                                   <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                                        Let's Transform Your Business Together
                                   </h3>
                                   <p className="text-white/90 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
                                        Get a free consultation and discover how
                                        our digital marketing strategies can
                                        accelerate your growth.
                                   </p>

                                   <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                                        <Link
                                             href="/contact"
                                             className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                        >
                                             <Clock className="w-4 h-4" />
                                             Free Consultation
                                        </Link>
                                        <button
                                             onClick={openQuotePopup}
                                             className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30"
                                        >
                                             <Sparkles className="w-4 h-4" />
                                             Get Free Quote
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </motion.div>
               </div>

               {/* Quote Popup */}
               <QuotePopup
                    isOpen={quotePopupOpen}
                    onClose={() => setQuotePopupOpen(false)}
               />
          </section>
     );
}
