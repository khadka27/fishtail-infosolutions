/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
     ArrowRight,
     MessageCircle,
     Search,
     BarChart,
     Mail,
     DollarSign,
     FileText,
     MapPin,
     Map,
     Link2,
     Target,
     Layout,
     AtSign,
     MessageSquare,
     Bell,
     Heart,
     ChevronDown,
     ChevronUp,
     Star,
     Quote,
     Check,
     TrendingUp,
     Clock,
     Users,
     ChevronRight,
     Globe,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import image3 from "@/Images/services-analytics-alt-colors-optimized.png";
import image1 from "@/Images/services-analytics-alt-colors-optimized.png";
import image2 from "@/Images/services-seo-alt-colors-optimized.png";
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png";
import { CaseStudiesSection } from "./case-studies-section";
import { QuotePopup } from "./quote-popup";
import { Button } from "@/Components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { useMobile } from "@/hooks/use-mobile";

// Define service categories
const categories = [
     { id: "all", name: "All Services" },
     { id: "marketing", name: "Marketing" },
     { id: "seo", name: "SEO" },
     { id: "design", name: "Design" },
];

// Define main services
const mainServices = [
     {
          id: 1,
          title: "Social Media Marketing",
          description:
               "Customers are interacting with brands through social media. If implemented correctly, social can bring immediate success to your business.",
          icon: <MessageCircle className="h-6 w-6" />,
          color: "#1d4e6f",
          textColor: "text-blue-100",
          image: image1,
          category: "marketing",
          link: "/Services/social-media",
     },
     {
          id: 2,
          title: "Search Engine Optimization",
          description:
               "Search Engine Optimization is fundamental. Our SEO strategies can grant you a high-ranking placement in search results.",
          icon: <Search className="h-6 w-6" />,
          color: "#f5b642",
          textColor: "text-yellow-100",
          image: image2,
          category: "seo",
          link: "/Services/search-engine",
     },
     {
          id: 3,
          title: "Advanced Web Analytics",
          description:
               "Our services cover all aspects of Google Analytics, from initial setup to training, advanced tracking solutions and custom features.",
          icon: <BarChart className="h-6 w-6" />,
          color: "#8aad2d",
          textColor: "text-green-100",
          image: image3,
          category: "marketing",
          link: "/Services/content-marketing",
     },
     {
          id: 4,
          title: "Email Marketing",
          description:
               "Our custom Email Marketing services can help you save time and money.",
          icon: <Mail className="h-6 w-6" />,
          color: "#2e74b5",
          textColor: "text-blue-100",
          image: image4,
          category: "marketing",
          link: "/Services/email-marketing",
     },
     {
          id: 5,
          title: "Pay Per Click",
          description:
               "Pay Per Click marketing is easy and cost effective. We know everything about PPC.",
          icon: <DollarSign className="h-6 w-6" />,
          color: "#d9472b",
          textColor: "text-red-100",
          image: image1,
          category: "marketing",
          link: "/Services/ppc-marketing",
     },
     {
          id: 6,
          title: "Content Strategy",
          description:
               "Engage with your audience through great, original content.",
          icon: <FileText className="h-6 w-6" />,
          color: "#00a79d",
          textColor: "text-teal-100",
          image: image2,
          category: "marketing",
          link: "/Services/content-marketing",
     },
];

// Define additional services
const additionalServices = [
     {
          id: 7,
          title: "Local Search Strategy",
          description:
               "Maximize your presence on search engine results pages on a local scale.",
          icon: <MapPin className="h-6 w-6" />,
          category: "seo",
          link: "/Services/local-seo",
     },
     {
          id: 8,
          title: "Maps Search Optimization",
          description:
               "Google Maps Optimization is an important part of any successful local marketing strategy.",
          icon: <Map className="h-6 w-6" />,
          category: "seo",
          link: "/Services/search-engine",
     },
     {
          id: 9,
          title: "Link Building & Content",
          description:
               "Link building is and will continue to be a tremendously important component of Search Engine Optimization.",
          icon: <Link2 className="h-6 w-6" />,
          category: "seo",
          link: "/Services/content-marketing",
     },
     {
          id: 10,
          title: "Paid Search Advertising",
          description:
               "Paid listings on Google AdWords and Microsoft AdCenter can help you reach new customers.",
          icon: <Target className="h-6 w-6" />,
          category: "marketing",
          link: "/Services/search-engine",
     },
     {
          id: 11,
          title: "Custom Website Design",
          description:
               "Our team specializes in affordable web design and e-commerce.",
          icon: <Layout className="h-6 w-6" />,
          category: "design",
          link: "/Services/web-design",
     },
     {
          id: 12,
          title: "Custom Email Design",
          description:
               "Custom email templates that speak to your customers and resonate with your brand.",
          icon: <AtSign className="h-6 w-6" />,
          category: "design",
          link: "/Services/email-marketing",
     },
];

// Define testimonials
const testimonials = [
     {
          id: 1,
          quote: "My company's Google rankings and overall site traffic improved dramatically after just a few months of working with this agency. The service we've received from their team has consistently been above and beyond our expectations.",
          name: "Matthew Lee",
          image: "/confident-professional.png",
     },
     {
          id: 2,
          quote: "Their team took the time to understand our business goals and created a tailored strategy that delivered real results. Our online presence has never been stronger.",
          name: "Sarah Johnson",
          image: "/confident-leader.png",
     },
     {
          id: 3,
          quote: "The ROI we've seen from their SEO and PPC campaigns has been incredible. They're transparent, data-driven, and truly care about our success.",
          name: "David Chen",
          image: "/confident-asian-executive.png",
     },
];

// Animation variants
const fadeIn = {
     hidden: { opacity: 0, y: 20 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
     hidden: { opacity: 0 },
     visible: {
          opacity: 1,
          transition: {
               staggerChildren: 0.1,
          },
     },
};

const ServicesShowcase = () => {
     const [showQuotePopup, setShowQuotePopup] = useState(false);
     const [selectedCategory, setSelectedCategory] = useState("all");
     const [filteredServices, setFilteredServices] = useState(mainServices);
     const [activeTestimonial, setActiveTestimonial] = useState(0);
     const [expandedService, setExpandedService] = useState<number | null>(
          null
     );
     const isMobile = useMobile();

     const [headerRef, headerInView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
     });

     const [servicesRef, servicesInView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
     });

     const [additionalRef, additionalInView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
     });

     const [strategyRef, strategyInView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
     });

     const toggleQuotePopup = () => {
          setShowQuotePopup((prev) => !prev);
     };

     const toggleServiceExpand = (id: number) => {
          if (expandedService === id) {
               setExpandedService(null);
          } else {
               setExpandedService(id);
          }
     };

     useEffect(() => {
          if (selectedCategory === "all") {
               setFilteredServices(mainServices);
          } else {
               setFilteredServices(
                    mainServices.filter(
                         (service) => service.category === selectedCategory
                    )
               );
          }
     }, [selectedCategory]);

     useEffect(() => {
          const interval = setInterval(() => {
               setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
          }, 5000);
          return () => clearInterval(interval);
     }, []);

     return (
          <>
               <div className="flex flex-col items-center">
                    {/* Enhanced Header Section */}
                    <motion.div
                         ref={headerRef}
                         initial="hidden"
                         animate={headerInView ? "visible" : "hidden"}
                         variants={fadeIn}
                         className="relative text-center max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
                    >
                         {/* Background Elements */}
                         <div className="absolute inset-0 pointer-events-none">
                              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
                              <div
                                   className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse"
                                   style={{ animationDelay: "2s" }}
                              ></div>
                              <div
                                   className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-200/20 rounded-full blur-2xl animate-pulse"
                                   style={{ animationDelay: "1s" }}
                              ></div>

                              {/* Floating particles */}
                              <div className="absolute inset-0">
                                   {[...Array(15)].map((_, i) => (
                                        <div
                                             key={i}
                                             className="absolute w-1 h-1 bg-blue-300/30 rounded-full animate-bounce"
                                             style={{
                                                  left: `${
                                                       Math.random() * 100
                                                  }%`,
                                                  top: `${
                                                       Math.random() * 100
                                                  }%`,
                                                  animationDelay: `${
                                                       Math.random() * 3
                                                  }s`,
                                                  animationDuration: `${
                                                       2 + Math.random() * 2
                                                  }s`,
                                             }}
                                        />
                                   ))}
                              </div>
                         </div>

                         <div className="relative z-10">
                              {/* Badge */}
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.8 }}
                                   animate={{ opacity: 1, scale: 1 }}
                                   transition={{ duration: 0.6, delay: 0.2 }}
                                   className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 via-purple-100 to-cyan-100 px-4 py-2 rounded-full text-blue-700 text-sm font-medium mb-6 sm:mb-8 shadow-lg backdrop-blur-sm border border-blue-200/50"
                              >
                                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                   <span>Award-Winning Digital Agency</span>
                                   <div
                                        className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                                        style={{ animationDelay: "0.5s" }}
                                   ></div>
                              </motion.div>

                              {/* Main Heading */}
                              <motion.h1
                                   initial={{ opacity: 0, y: 30 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.3 }}
                                   className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
                              >
                                   <span className="block">
                                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                                             Full Service
                                        </span>
                                   </span>
                                   <span className="block">
                                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                                             Digital Creative
                                        </span>
                                   </span>
                                   <span className="block">
                                        <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                             Agency
                                        </span>
                                   </span>
                              </motion.h1>

                              {/* Description */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.5 }}
                                   className="max-w-4xl mx-auto mb-8 sm:mb-12"
                              >
                                   <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl font-light">
                                        We pride ourselves on delivering
                                        compelling, digital marketing solutions.
                                        Our winning solutions and experiences
                                        help many of our clients interact and
                                        engage with their customers in the
                                        <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                             {" "}
                                             best possible way
                                        </span>
                                        .
                                   </p>
                              </motion.div>

                              {/* Enhanced Stats */}
                              <motion.div
                                   initial={{ opacity: 0, y: 30 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.7 }}
                                   className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12"
                              >
                                   {[
                                        {
                                             value: "500+",
                                             label: "Happy Clients",
                                             icon: "👥",
                                        },
                                        {
                                             value: "98%",
                                             label: "Success Rate",
                                             icon: "📈",
                                        },
                                        {
                                             value: "5+",
                                             label: "Years Experience",
                                             icon: "⭐",
                                        },
                                        {
                                             value: "24/7",
                                             label: "Support",
                                             icon: "🚀",
                                        },
                                   ].map((stat, index) => (
                                        <motion.div
                                             key={index}
                                             initial={{
                                                  opacity: 0,
                                                  scale: 0.8,
                                             }}
                                             animate={{ opacity: 1, scale: 1 }}
                                             transition={{
                                                  duration: 0.6,
                                                  delay: 0.8 + index * 0.1,
                                             }}
                                             className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
                                        >
                                             <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                  <span className="mr-2">
                                                       {stat.icon}
                                                  </span>
                                                  {stat.value}
                                             </div>
                                             <div className="text-xs sm:text-sm text-gray-600 font-medium">
                                                  {stat.label}
                                             </div>
                                        </motion.div>
                                   ))}
                              </motion.div>

                              {/* Call to Action Buttons */}
                              <motion.div
                                   initial={{ opacity: 0, y: 30 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.9 }}
                                   className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                              >
                                   <Link
                                        href="/contact"
                                        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden min-w-[200px] justify-center"
                                   >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                        <MessageSquare className="w-5 h-5 relative z-10" />
                                        <span className="relative z-10">
                                             Get Started Today
                                        </span>
                                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                                   </Link>

                                   <Link
                                        href="/Services"
                                        className="group inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-blue-600 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:scale-105 hover:shadow-lg min-w-[200px] justify-center"
                                   >
                                        <Search className="w-5 h-5" />
                                        <span>Explore Services</span>
                                        <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                   </Link>
                              </motion.div>

                              {/* Trust Indicators */}
                              <motion.div
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   transition={{ duration: 0.8, delay: 1.1 }}
                                   className="mt-12 sm:mt-16"
                              >
                                   <p className="text-sm text-gray-500 mb-4">
                                        Trusted by leading brands worldwide
                                   </p>
                                   <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-60">
                                        {[
                                             "Google Partner",
                                             "Meta Certified",
                                             "HubSpot Partner",
                                             "Shopify Plus",
                                        ].map((partner, index) => (
                                             <div
                                                  key={index}
                                                  className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors"
                                             >
                                                  {partner}
                                             </div>
                                        ))}
                                   </div>
                              </motion.div>
                         </div>
                    </motion.div>

                    {/* Enhanced Category Filter */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6 }}
                         viewport={{ once: true }}
                         className="w-full max-w-6xl mx-auto px-4 mb-12 sm:mb-16"
                    >
                         <div className="text-center mb-6 sm:mb-8">
                              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-blue-700 text-sm font-medium mb-4 shadow-md">
                                   <Search className="w-4 h-4" />
                                   Browse Our Services
                              </div>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
                                   Our Digital Solutions
                              </h2>
                              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                                   Discover our comprehensive range of digital
                                   marketing services designed to grow your
                                   business
                              </p>
                         </div>

                         <Tabs
                              defaultValue="all"
                              className="w-full"
                              onValueChange={(value) =>
                                   setSelectedCategory(value)
                              }
                         >
                              <TabsList className="w-full flex flex-wrap justify-center gap-3 sm:gap-4 bg-gradient-to-r from-white via-gray-50 to-white backdrop-blur-sm p-3 sm:p-4 rounded-3xl shadow-2xl border border-gray-200/60">
                                   {categories.map((category) => (
                                        <TabsTrigger
                                             key={category.id}
                                             value={category.id}
                                             className="group relative flex-shrink-0 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:via-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-blue-500/25 data-[state=active]:scale-105 bg-white/80 hover:bg-white text-gray-700 hover:text-blue-600 hover:shadow-lg hover:scale-102 transition-all duration-300 rounded-2xl font-semibold py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base border border-gray-200/50 hover:border-blue-300/50 min-w-0 overflow-hidden"
                                        >
                                             {/* Background shimmer effect */}
                                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                                             <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                                                  {category.id === "all" && (
                                                       <div className="p-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white group-data-[state=active]:from-white/20 group-data-[state=active]:to-white/20">
                                                            <Globe className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                                       </div>
                                                  )}
                                                  {category.id ===
                                                       "marketing" && (
                                                       <div className="p-1 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white group-data-[state=active]:from-white/20 group-data-[state=active]:to-white/20">
                                                            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                                       </div>
                                                  )}
                                                  {category.id === "seo" && (
                                                       <div className="p-1 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white group-data-[state=active]:from-white/20 group-data-[state=active]:to-white/20">
                                                            <Search className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                                       </div>
                                                  )}
                                                  {category.id === "design" && (
                                                       <div className="p-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white group-data-[state=active]:from-white/20 group-data-[state=active]:to-white/20">
                                                            <Layout className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                                       </div>
                                                  )}
                                                  <span className="font-medium tracking-wide">
                                                       {category.name}
                                                  </span>
                                             </span>

                                             {/* Active indicator dot */}
                                             <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-300 shadow-lg">
                                                  <div className="w-full h-full bg-white rounded-full scale-50"></div>
                                             </div>
                                        </TabsTrigger>
                                   ))}
                              </TabsList>
                         </Tabs>
                    </motion.div>

                    {/* Enhanced Main Services Grid */}
                    <motion.div
                         ref={servicesRef}
                         initial="hidden"
                         animate={servicesInView ? "visible" : "hidden"}
                         variants={staggerContainer}
                         className="w-full max-w-7xl mx-auto px-4 mb-16 sm:mb-20"
                    >
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                              {filteredServices.map((service, index) => (
                                   <motion.div
                                        key={service.id}
                                        variants={fadeIn}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.6,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                             scale: 1.03,
                                             transition: { duration: 0.2 },
                                        }}
                                        className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200/50"
                                   >
                                        {/* Gradient Overlay */}
                                        <div
                                             className="absolute inset-0 opacity-90"
                                             style={{
                                                  background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                                             }}
                                        />

                                        {/* Animated Background Pattern */}
                                        <div className="absolute inset-0 opacity-20">
                                             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] animate-pulse"></div>
                                             <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_49%,_rgba(255,255,255,0.05)_50%,_transparent_51%)] bg-[length:20px_20px]"></div>
                                        </div>

                                        <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                                             {/* Header Section */}
                                             <div className="flex items-center justify-between mb-6">
                                                  <div className="flex items-center gap-4">
                                                       <div className="p-3 sm:p-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                                            {service.icon}
                                                       </div>
                                                       <div>
                                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                                                                 {service.title}
                                                            </h3>
                                                            <div className="flex items-center gap-2">
                                                                 <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30">
                                                                      {service.category.toUpperCase()}
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>

                                             {/* Image Section */}
                                             <div className="relative h-48 sm:h-56 mb-6 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
                                                  <Image
                                                       src={
                                                            service.image ||
                                                            "/placeholder.svg"
                                                       }
                                                       alt={service.title}
                                                       fill
                                                       className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                                                  />
                                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                             </div>

                                             {/* Content Section */}
                                             <div className="flex-grow">
                                                  <p
                                                       className={`text-sm sm:text-base ${service.textColor} mb-6 leading-relaxed opacity-90`}
                                                  >
                                                       {service.description}
                                                  </p>
                                             </div>

                                             {/* Footer Section */}
                                             <div className="flex items-center justify-between pt-4 border-t border-white/20">
                                                  <div className="flex items-center gap-2 text-white/80 text-sm">
                                                       <Clock className="w-4 h-4" />
                                                       <span>Quick Setup</span>
                                                  </div>
                                                  <Link
                                                       href={service.link}
                                                       className="group/btn inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 border border-white/30 hover:border-white/50"
                                                  >
                                                       <span>Learn More</span>
                                                       <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                                  </Link>
                                             </div>

                                             {/* Hover Effects */}
                                             <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                                       <ArrowRight className="w-4 h-4 text-white" />
                                                  </div>
                                             </div>
                                        </div>

                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                   </motion.div>
                              ))}
                         </div>

                         {/* Enhanced Bottom CTA */}
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                              viewport={{ once: true }}
                              className="text-center mt-12 sm:mt-16"
                         >
                              <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-gray-200/50">
                                   <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Need a Custom Solution?
                                   </h3>
                                   <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                        Don't see exactly what you're looking
                                        for? We create custom digital marketing
                                        strategies tailored to your unique
                                        business needs.
                                   </p>
                                   <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                        <Link
                                             href="/contact"
                                             className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                                        >
                                             <MessageSquare className="w-4 h-4" />
                                             <span>Discuss Your Project</span>
                                             <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                        <button
                                             onClick={toggleQuotePopup}
                                             className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-blue-200 text-blue-600 rounded-full font-semibold transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:scale-105"
                                        >
                                             <DollarSign className="w-4 h-4" />
                                             <span>Get Custom Quote</span>
                                             <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </button>
                                   </div>
                              </div>
                         </motion.div>
                    </motion.div>

                    {/* Enhanced Additional Services Section */}
                    <motion.div
                         ref={additionalRef}
                         initial="hidden"
                         animate={additionalInView ? "visible" : "hidden"}
                         variants={fadeIn}
                         className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-8 sm:py-12 md:py-16 relative overflow-hidden"
                    >
                         {/* Enhanced Background Elements */}
                         <div className="absolute inset-0 pointer-events-none">
                              <div className="absolute top-10 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
                              <div
                                   className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
                                   style={{ animationDelay: "2s" }}
                              ></div>
                              <div
                                   className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl animate-pulse"
                                   style={{ animationDelay: "1s" }}
                              ></div>

                              {/* Subtle grid pattern */}
                              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
                         </div>

                         <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                              {/* Header - Matching other sections */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="text-center mb-8 sm:mb-12"
                              >
                                   <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-blue-200 mb-4">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        Specialized Services
                                   </div>

                                   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                        Additional Specialized Services
                                   </h2>

                                   <p className="text-blue-200/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                                        Comprehensive digital solutions tailored
                                        to your specific business needs and
                                        goals
                                   </p>
                              </motion.div>

                              {/* Enhanced Services Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                                   {additionalServices.map((service, index) => (
                                        <motion.div
                                             key={service.id}
                                             initial={{ opacity: 0, y: 30 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             transition={{
                                                  duration: 0.6,
                                                  delay: index * 0.1,
                                             }}
                                             viewport={{ once: true }}
                                             className={`group bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-xl ${
                                                  expandedService === service.id
                                                       ? "bg-white/10 scale-105 shadow-xl"
                                                       : ""
                                             }`}
                                             onClick={() =>
                                                  toggleServiceExpand(
                                                       service.id
                                                  )
                                             }
                                        >
                                             <div className="flex items-start gap-4">
                                                  {/* Enhanced Icon */}
                                                  <div
                                                       className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${
                                                            service.category ===
                                                            "seo"
                                                                 ? "from-green-500 to-emerald-600"
                                                                 : service.category ===
                                                                   "marketing"
                                                                 ? "from-blue-500 to-cyan-600"
                                                                 : "from-purple-500 to-pink-600"
                                                       } flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                                                  >
                                                       {service.icon}
                                                  </div>

                                                  <div className="flex-1 min-w-0">
                                                       {/* Header */}
                                                       <div className="flex justify-between items-start mb-2">
                                                            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">
                                                                 {service.title}
                                                            </h3>
                                                            <div
                                                                 className={`transition-transform duration-300 ${
                                                                      expandedService ===
                                                                      service.id
                                                                           ? "rotate-180"
                                                                           : ""
                                                                 }`}
                                                            >
                                                                 <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-blue-300" />
                                                            </div>
                                                       </div>

                                                       {/* Category Badge */}
                                                       <div className="mb-3">
                                                            <span
                                                                 className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                                      service.category ===
                                                                      "seo"
                                                                           ? "bg-green-500/20 text-green-300"
                                                                           : service.category ===
                                                                             "marketing"
                                                                           ? "bg-blue-500/20 text-blue-300"
                                                                           : "bg-purple-500/20 text-purple-300"
                                                                 }`}
                                                            >
                                                                 {service.category.toUpperCase()}
                                                            </span>
                                                       </div>

                                                       {/* Description */}
                                                       <p
                                                            className={`text-xs sm:text-sm text-blue-200/80 leading-relaxed transition-all duration-300 ${
                                                                 expandedService ===
                                                                 service.id
                                                                      ? "mb-4"
                                                                      : "line-clamp-2"
                                                            }`}
                                                       >
                                                            {
                                                                 service.description
                                                            }
                                                       </p>

                                                       {/* Expanded Content */}
                                                       <motion.div
                                                            initial={false}
                                                            animate={{
                                                                 height:
                                                                      expandedService ===
                                                                      service.id
                                                                           ? "auto"
                                                                           : 0,
                                                                 opacity:
                                                                      expandedService ===
                                                                      service.id
                                                                           ? 1
                                                                           : 0,
                                                            }}
                                                            transition={{
                                                                 duration: 0.3,
                                                                 ease: "easeInOut",
                                                            }}
                                                            className="overflow-hidden"
                                                       >
                                                            {expandedService ===
                                                                 service.id && (
                                                                 <div className="space-y-3">
                                                                      {/* Features */}
                                                                      <div className="flex flex-wrap gap-1.5">
                                                                           {[
                                                                                "Strategy",
                                                                                "Implementation",
                                                                                "Analytics",
                                                                                "Support",
                                                                           ].map(
                                                                                (
                                                                                     feature,
                                                                                     i
                                                                                ) => (
                                                                                     <span
                                                                                          key={
                                                                                               i
                                                                                          }
                                                                                          className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                                                                                     >
                                                                                          {
                                                                                               feature
                                                                                          }
                                                                                     </span>
                                                                                )
                                                                           )}
                                                                      </div>

                                                                      {/* CTA Button */}
                                                                      <Link
                                                                           href={
                                                                                service.link
                                                                           }
                                                                           className="inline-flex items-center gap-2 text-xs sm:text-sm bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                                                                           onClick={(
                                                                                e
                                                                           ) =>
                                                                                e.stopPropagation()
                                                                           }
                                                                      >
                                                                           <span>
                                                                                Learn
                                                                                More
                                                                           </span>
                                                                           <ArrowRight className="w-3 h-3" />
                                                                      </Link>
                                                                 </div>
                                                            )}
                                                       </motion.div>

                                                       {/* Hover Indicator */}
                                                       {expandedService !==
                                                            service.id && (
                                                            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                 <div className="flex items-center text-xs text-blue-300">
                                                                      <span>
                                                                           Click
                                                                           to
                                                                           expand
                                                                      </span>
                                                                      <ChevronRight className="w-3 h-3 ml-1" />
                                                                 </div>
                                                            </div>
                                                       )}
                                                  </div>
                                             </div>
                                        </motion.div>
                                   ))}
                              </div>

                              {/* Enhanced CTA Section */}
                              <motion.div
                                   initial={{ opacity: 0, y: 30 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: 0.3 }}
                                   viewport={{ once: true }}
                                   className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
                              >
                                   <div className="text-center mb-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                                             Ready to Get Started?
                                        </h3>
                                        <p className="text-blue-200/80 text-sm sm:text-base">
                                             Let's discuss how our specialized
                                             services can help grow your
                                             business
                                        </p>
                                   </div>

                                   <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                                        <Link
                                             href="/contact"
                                             className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                        >
                                             <MessageSquare className="w-4 h-4" />
                                             <span>Free SEO Consultation</span>
                                             <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                        <button
                                             onClick={toggleQuotePopup}
                                             className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/30"
                                        >
                                             <DollarSign className="w-4 h-4" />
                                             <span>Request a Free Quote</span>
                                             <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </button>
                                   </div>
                              </motion.div>
                         </div>
                    </motion.div>

                    {/* Enhanced Strategy Section - Aligned with Testimonial Design */}
                    <motion.div
                         ref={strategyRef}
                         initial="hidden"
                         animate={strategyInView ? "visible" : "hidden"}
                         variants={fadeIn}
                         className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-8 sm:py-12 md:py-16 relative overflow-hidden"
                    >
                         {/* Enhanced Background Elements */}
                         <div className="absolute inset-0 pointer-events-none">
                              <div className="absolute top-10 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
                              <div
                                   className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
                                   style={{ animationDelay: "2s" }}
                              ></div>
                              <div
                                   className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl animate-pulse"
                                   style={{ animationDelay: "1s" }}
                              ></div>

                              {/* Subtle grid pattern */}
                              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
                         </div>

                         <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                              {/* Header - Matching testimonial style */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="text-center mb-6 sm:mb-8"
                              >
                                   <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-blue-200 mb-3">
                                        <TrendingUp className="w-3 h-3 fill-green-400 text-green-400" />
                                        Our Strategy
                                   </div>

                                   <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                        Results-Driven Approach
                                   </h2>

                                   <p className="text-blue-200/80 text-sm max-w-xl mx-auto">
                                        We combine strategy and experience to
                                        deliver measurable results
                                   </p>
                              </motion.div>

                              {/* Main Content Container - Matching testimonial style */}
                              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 mb-6 sm:mb-8">
                                   {/* Goals Grid */}
                                   <motion.div
                                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                   >
                                        {/* Call To Action */}
                                        <motion.div
                                             className="group text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                                             variants={fadeIn}
                                        >
                                             <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                                  <Bell className="w-6 h-6 sm:w-7 sm:h-7" />
                                             </div>
                                             <h3 className="text-sm sm:text-base font-semibold mb-2 text-white">
                                                  Call To Action
                                             </h3>
                                             <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed">
                                                  Inspire your audience to take
                                                  meaningful action
                                             </p>
                                        </motion.div>

                                        {/* Engage */}
                                        <motion.div
                                             className="group text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                                             variants={fadeIn}
                                        >
                                             <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                                             </div>
                                             <h3 className="text-sm sm:text-base font-semibold mb-2 text-white">
                                                  Engage
                                             </h3>
                                             <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed">
                                                  Build meaningful connections
                                                  with your audience
                                             </p>
                                        </motion.div>

                                        {/* Inspire */}
                                        <motion.div
                                             className="group text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                                             variants={fadeIn}
                                        >
                                             <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                                  <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
                                             </div>
                                             <h3 className="text-sm sm:text-base font-semibold mb-2 text-white">
                                                  Inspire
                                             </h3>
                                             <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed">
                                                  Create compelling content that
                                                  drives visits
                                             </p>
                                        </motion.div>
                                   </motion.div>

                                   {/* Description Section */}
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-center md:text-left mb-6 sm:mb-8">
                                        <div>
                                             <h4 className="text-sm sm:text-base font-semibold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                                                  <Users className="w-4 h-4 text-blue-300" />
                                                  Our Expertise
                                             </h4>
                                             <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed">
                                                  We help you achieve great
                                                  results across Search Engine
                                                  Optimization, Social Media
                                                  Marketing, and Digital
                                                  Marketing.
                                             </p>
                                        </div>
                                        <div>
                                             <h4 className="text-sm sm:text-base font-semibold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                                                  <Target className="w-4 h-4 text-green-300" />
                                                  Our Approach
                                             </h4>
                                             <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed">
                                                  We combine creative ideas with
                                                  vast experience to deliver
                                                  measurable, sustainable
                                                  results for our clients.
                                             </p>
                                        </div>
                                   </div>

                                   {/* Enhanced Stats - Matching testimonial stats style */}
                                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10">
                                        {[
                                             {
                                                  value: "200+",
                                                  label: "Projects",
                                                  gradient:
                                                       "from-blue-400 to-cyan-400",
                                             },
                                             {
                                                  value: "150%",
                                                  label: "Avg Growth",
                                                  gradient:
                                                       "from-green-400 to-emerald-400",
                                             },
                                             {
                                                  value: "95%",
                                                  label: "Client Retention",
                                                  gradient:
                                                       "from-purple-400 to-pink-400",
                                             },
                                             {
                                                  value: "24/7",
                                                  label: "Support",
                                                  gradient:
                                                       "from-orange-400 to-red-400",
                                             },
                                        ].map((stat, index) => (
                                             <div
                                                  key={index}
                                                  className="text-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                                             >
                                                  <div
                                                       className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}
                                                  >
                                                       {stat.value}
                                                  </div>
                                                  <div className="text-blue-200/80 text-xs">
                                                       {stat.label}
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              {/* Call to Action Buttons - Enhanced */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: 0.2 }}
                                   viewport={{ once: true }}
                                   className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
                              >
                                   <Link
                                        href="/contact"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                   >
                                        <MessageSquare className="w-4 h-4" />
                                        <span>Free SEO Consultation</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                   </Link>
                                   <button
                                        onClick={toggleQuotePopup}
                                        className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/30"
                                   >
                                        <DollarSign className="w-4 h-4" />
                                        <span>Get Free Quote</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                   </button>
                              </motion.div>
                         </div>
                    </motion.div>

                    {/* Testimonial Section */}
                    <div className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-6 sm:py-8 md:py-12 relative overflow-hidden">
                         {/* Simplified Background Elements */}
                         <div className="absolute inset-0 pointer-events-none">
                              <div className="absolute top-5 left-5 w-16 h-16 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
                              <div
                                   className="absolute bottom-10 right-10 w-20 h-20 bg-purple-400/10 rounded-full blur-2xl animate-pulse"
                                   style={{ animationDelay: "2s" }}
                              ></div>
                         </div>

                         <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                              {/* Compact Header */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="text-center mb-6 sm:mb-8"
                              >
                                   <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-blue-200 mb-3">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        Client Reviews
                                   </div>

                                   <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                        What Our Clients Say
                                   </h2>

                                   <p className="text-blue-200/80 text-sm max-w-xl mx-auto">
                                        Real feedback from businesses we've
                                        helped grow
                                   </p>
                              </motion.div>

                              {/* Fixed Testimonial Container */}
                              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
                                   <div className="relative min-h-[280px] sm:min-h-[300px] md:min-h-[320px] overflow-hidden">
                                        {testimonials.map(
                                             (testimonial, index) => (
                                                  <motion.div
                                                       key={testimonial.id}
                                                       className="absolute inset-0 w-full h-full"
                                                       initial={{
                                                            opacity: 0,
                                                            x: 50,
                                                       }}
                                                       animate={{
                                                            opacity:
                                                                 activeTestimonial ===
                                                                 index
                                                                      ? 1
                                                                      : 0,
                                                            x:
                                                                 activeTestimonial ===
                                                                 index
                                                                      ? 0
                                                                      : 50,
                                                            pointerEvents:
                                                                 activeTestimonial ===
                                                                 index
                                                                      ? "auto"
                                                                      : "none",
                                                       }}
                                                       transition={{
                                                            duration: 0.5,
                                                       }}
                                                  >
                                                       <div className="flex flex-col items-center text-center h-full justify-center gap-4 py-4">
                                                            {/* Profile Image - Fixed positioning */}
                                                            <div className="relative flex-shrink-0">
                                                                 <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-0.5">
                                                                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                                                                           <Image
                                                                                src={
                                                                                     testimonial.image ||
                                                                                     "/placeholder.svg"
                                                                                }
                                                                                alt={
                                                                                     testimonial.name
                                                                                }
                                                                                width={
                                                                                     80
                                                                                }
                                                                                height={
                                                                                     80
                                                                                }
                                                                                unoptimized
                                                                                className="object-cover w-full h-full"
                                                                           />
                                                                      </div>
                                                                 </div>
                                                                 <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                                                                      <Check className="w-2 h-2 text-white" />
                                                                 </div>
                                                            </div>

                                                            {/* Quote Section */}
                                                            <div className="max-w-2xl flex-1 flex flex-col justify-center">
                                                                 <Quote className="w-6 h-6 text-blue-300/50 mx-auto mb-2" />
                                                                 <blockquote className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-white/90 italic mb-3">
                                                                      "
                                                                      {
                                                                           testimonial.quote
                                                                      }
                                                                      "
                                                                 </blockquote>

                                                                 {/* Rating */}
                                                                 <div className="flex justify-center gap-1 mb-2">
                                                                      {[
                                                                           ...Array(
                                                                                5
                                                                           ),
                                                                      ].map(
                                                                           (
                                                                                _,
                                                                                i
                                                                           ) => (
                                                                                <Star
                                                                                     key={
                                                                                          i
                                                                                     }
                                                                                     className="w-3 h-3 text-yellow-400 fill-yellow-400"
                                                                                />
                                                                           )
                                                                      )}
                                                                 </div>

                                                                 {/* Name & Company */}
                                                                 <div>
                                                                      <p className="font-semibold text-white text-sm sm:text-base">
                                                                           {
                                                                                testimonial.name
                                                                           }
                                                                      </p>
                                                                      <p className="text-blue-200/80 text-xs sm:text-sm">
                                                                           {testimonial.company ||
                                                                                "Verified Client"}
                                                                      </p>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </motion.div>
                                             )
                                        )}
                                   </div>

                                   {/* Simplified Navigation - Centered Dots Only */}
                                   <div className="flex justify-center mt-4 sm:mt-6">
                                        <div className="flex gap-2">
                                             {testimonials.map((_, index) => (
                                                  <button
                                                       key={index}
                                                       onClick={() =>
                                                            setActiveTestimonial(
                                                                 index
                                                            )
                                                       }
                                                       className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                                            activeTestimonial ===
                                                            index
                                                                 ? "bg-white scale-125 shadow-lg"
                                                                 : "bg-white/30 hover:bg-white/50 hover:scale-110"
                                                       }`}
                                                       aria-label={`Go to testimonial ${
                                                            index + 1
                                                       }`}
                                                  />
                                             ))}
                                        </div>
                                   </div>
                              </div>

                              {/* Compact Stats */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: 0.2 }}
                                   viewport={{ once: true }}
                                   className="grid grid-cols-4 gap-2 sm:gap-4 mt-6 sm:mt-8"
                              >
                                   {[
                                        { value: "500+", label: "Clients" },
                                        { value: "98%", label: "Success" },
                                        { value: "4.9", label: "Rating" },
                                        { value: "24/7", label: "Support" },
                                   ].map((stat, index) => (
                                        <div
                                             key={index}
                                             className="text-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                                        >
                                             <div className="text-lg sm:text-xl font-bold text-white">
                                                  {stat.value}
                                             </div>
                                             <div className="text-blue-200/80 text-xs">
                                                  {stat.label}
                                             </div>
                                        </div>
                                   ))}
                              </motion.div>
                         </div>
                    </div>
               </div>

               <CaseStudiesSection />

               {/* Quote Popup */}
               <QuotePopup isOpen={showQuotePopup} onClose={toggleQuotePopup} />
          </>
     );
};

export default ServicesShowcase;
