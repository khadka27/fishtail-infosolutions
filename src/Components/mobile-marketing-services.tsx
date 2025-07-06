"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
     ArrowRight,
     ChevronRight,
     Smartphone,
     MessageCircle,
     Share2,
     BarChart2,
     Zap,
     Award,
     ArrowDown,
     MessageSquare,
     DollarSign,
     Bell,
     Target,
     Compass,
     Layers,
} from "lucide-react";
import Form from "./form";

import image3 from "@/Images/services-analytics-alt-colors-optimized.png";
import image1 from "@/Images/services-analytics-alt-colors-optimized.png";
import image2 from "@/Images/services-seo-alt-colors-optimized.png";
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png";
import { QuotePopup } from "./quote-popup";

// Define mobile marketing features
const mobileFeatures = [
     {
          title: "Mobile App Development",
          description:
               "Custom mobile applications for iOS and Android that engage users and drive business growth.",
          icon: Smartphone,
          color: "blue",
     },
     {
          title: "SMS Marketing",
          description:
               "Direct and effective text message campaigns with high open rates and engagement.",
          icon: MessageCircle,
          color: "red",
     },
     {
          title: "Mobile Social Media",
          description:
               "Targeted social media strategies optimized for mobile users and platforms.",
          icon: Share2,
          color: "green",
     },
     {
          title: "Mobile Analytics",
          description:
               "Comprehensive tracking and analysis of mobile user behavior and campaign performance.",
          icon: BarChart2,
          color: "purple",
     },
     {
          title: "Push Notifications",
          description:
               "Timely, personalized alerts that drive engagement and bring users back to your app.",
          icon: Bell,
          color: "orange",
     },
     {
          title: "Location-Based Marketing",
          description:
               "Geo-targeted campaigns that reach users based on their physical location.",
          icon: Target,
          color: "teal",
     },
];

// Define process steps
const marketingSteps = [
     {
          title: "Research & Strategy",
          description:
               "We analyze your target audience, competitors, and mobile market opportunities.",
          icon: Compass,
     },
     {
          title: "App Design & Development",
          description:
               "Our designers and developers create intuitive, engaging mobile experiences.",
          icon: Smartphone,
     },
     {
          title: "Campaign Creation",
          description:
               "We develop targeted mobile marketing campaigns aligned with your business goals.",
          icon: Target,
     },
     {
          title: "Testing & Optimization",
          description:
               "Rigorous testing ensures your app and campaigns perform optimally across all devices.",
          icon: Layers,
     },
     {
          title: "Launch & Promotion",
          description:
               "We deploy your app and campaigns with strategic promotion to maximize visibility.",
          icon: Zap,
     },
     {
          title: "Analysis & Refinement",
          description:
               "Ongoing monitoring and optimization to improve performance and ROI.",
          icon: BarChart2,
     },
];

// Define projects
const projects = [
     {
          title: "Fitness Tracker App",
          description:
               "Mobile app with personalized workout plans and progress tracking features.",
          image: image2,
          bgColor: "bg-[#1ab5b3]",
          stats: { value: "4.8★", label: "App Store Rating" },
     },
     {
          title: "Retail Loyalty Program",
          description:
               "Mobile loyalty program with location-based offers and personalized rewards.",
          image: image3,
          bgColor: "bg-[#2c3e50]",
          stats: { value: "68%", label: "Engagement Rate" },
     },
     {
          title: "Restaurant Ordering App",
          description:
               "Mobile ordering system with push notifications and loyalty rewards.",
          image: image4,
          bgColor: "bg-[#8bc34a]",
          stats: { value: "3.2x", label: "Order Increase" },
     },
     {
          title: "Travel Companion App",
          description:
               "Location-based travel guide with personalized recommendations and offline maps.",
          image: image1,
          bgColor: "bg-[#e74c3c]",
          stats: { value: "250K+", label: "Downloads" },
     },
     {
          title: "Event Ticketing Platform",
          description:
               "Mobile ticketing system with QR codes, push notifications, and social sharing.",
          image: image2,
          bgColor: "bg-[#9b59b6]",
          stats: { value: "42%", label: "Conversion Rate" },
     },
];

const MobileMarketingServices = () => {
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
               <motion.div
                    className="bg-gradient-to-r from-[#8e44ad] to-[#9b59b6] text-white py-16 px-4 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
               >
                    <div className="max-w-4xl mx-auto">
                         <motion.div
                              className="flex justify-center mb-8"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                         >
                              <div className="relative w-64 h-64">
                                   <Image
                                        src={image1 || "/placeholder.svg"}
                                        alt="Mobile Marketing Services"
                                        width={256}
                                        height={256}
                                        className="object-contain"
                                   />
                                   <motion.div
                                        className="absolute -top-4 -right-4 bg-white text-[#8e44ad] px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                             duration: 0.3,
                                             delay: 0.8,
                                        }}
                                   >
                                        Mobile-First Strategy
                                   </motion.div>
                              </div>
                         </motion.div>
                         <motion.h1
                              className="text-3xl md:text-5xl font-light mb-6"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                         >
                              Mobile Marketing Services
                         </motion.h1>
                         <motion.p
                              className="text-xl max-w-2xl mx-auto"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                         >
                              Reach your customers where they spend the most
                              time - on their mobile devices. Our{" "}
                              <span className="font-bold">
                                   mobile-first strategies
                              </span>{" "}
                              drive engagement, conversions, and{" "}
                              <span className="font-bold">business growth</span>
                              .
                         </motion.p>

                         <motion.div
                              className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.5 }}
                         >
                              <button
                                   className="bg-white text-[#8e44ad] hover:bg-gray-100 py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                   onClick={scrollToForm}
                              >
                                   <span className="font-medium">
                                        Start Your Campaign
                                   </span>
                                   <ArrowRight className="ml-2 h-4 w-4" />
                              </button>
                              <button
                                   className="bg-[#2c3e50] hover:bg-[#34495e] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                   onClick={toggleQuotePopup}
                              >
                                   <span className="font-medium">
                                        Get a Free Quote
                                   </span>
                                   <DollarSign className="ml-2 h-4 w-4" />
                              </button>
                         </motion.div>

                         <motion.div
                              className="mt-12"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.7 }}
                         >
                              <ArrowDown className="h-8 w-8 mx-auto text-white/70 animate-bounce" />
                         </motion.div>
                    </div>
               </motion.div>

               {/* Features Section */}
               <motion.div
                    className="py-16 px-4 max-w-6xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
               >
                    <motion.div
                         className="text-center mb-12"
                         initial={{ y: 20, opacity: 0 }}
                         animate={
                              isVisible
                                   ? { y: 0, opacity: 1 }
                                   : { y: 20, opacity: 0 }
                         }
                         transition={{ duration: 0.5 }}
                    >
                         <h2 className="text-3xl font-light text-gray-700 mb-4">
                              Comprehensive Mobile Marketing Solutions
                         </h2>
                         <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                              From app development to SMS campaigns and
                              location-based marketing, we offer end-to-end
                              mobile solutions to help you connect with your
                              audience.
                         </p>
                    </motion.div>

                    <motion.div
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                         variants={containerVariants}
                         initial="hidden"
                         animate={isVisible ? "visible" : "hidden"}
                    >
                         {mobileFeatures.map((feature, index) => (
                              <motion.div
                                   key={index}
                                   className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                                        activeFeature === index
                                             ? `ring-2 ring-${feature.color}-500`
                                             : ""
                                   }`}
                                   variants={itemVariants}
                                   whileHover={{ y: -5 }}
                                   onClick={() =>
                                        setActiveFeature(
                                             activeFeature === index
                                                  ? null
                                                  : index
                                        )
                                   }
                              >
                                   <div
                                        className={`w-12 h-12 rounded-full bg-${feature.color}-100 flex items-center justify-center mb-4`}
                                   >
                                        <feature.icon
                                             className={`w-6 h-6 text-${feature.color}-500`}
                                        />
                                   </div>
                                   <h3 className="text-lg font-medium mb-2 text-gray-800">
                                        {feature.title}
                                   </h3>

                                   <AnimatePresence>
                                        {activeFeature === index && (
                                             <motion.p
                                                  className="text-gray-600 text-sm"
                                                  initial={{
                                                       height: 0,
                                                       opacity: 0,
                                                  }}
                                                  animate={{
                                                       height: "auto",
                                                       opacity: 1,
                                                  }}
                                                  exit={{
                                                       height: 0,
                                                       opacity: 0,
                                                  }}
                                                  transition={{ duration: 0.3 }}
                                             >
                                                  {feature.description}
                                             </motion.p>
                                        )}
                                   </AnimatePresence>

                                   {activeFeature !== index && (
                                        <div className="flex items-center text-sm text-gray-500 mt-2">
                                             <span>Learn more</span>
                                             <ChevronRight className="w-4 h-4 ml-1" />
                                        </div>
                                   )}
                              </motion.div>
                         ))}
                    </motion.div>
               </motion.div>

               {/* Mobile Stats Section */}
               <motion.div
                    className="py-16 px-4 bg-gray-50"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
               >
                    <div className="max-w-6xl mx-auto">
                         <motion.div
                              className="text-center mb-12"
                              initial={{ y: 20, opacity: 0 }}
                              animate={
                                   isVisible
                                        ? { y: 0, opacity: 1 }
                                        : { y: 20, opacity: 0 }
                              }
                              transition={{ duration: 0.5 }}
                         >
                              <h2 className="text-3xl font-light text-gray-700 mb-4">
                                   Why Mobile Marketing Matters
                              </h2>
                              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                   In today&apos;s digital landscape, mobile is
                                   no longer optional. Here&apos;s why a
                                   mobile-first approach is essential for your
                                   business.
                              </p>
                         </motion.div>

                         <motion.div
                              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                              variants={containerVariants}
                              initial="hidden"
                              animate={isVisible ? "visible" : "hidden"}
                         >
                              <motion.div
                                   className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                                   variants={itemVariants}
                                   whileHover={{ y: -5 }}
                              >
                                   <div className="text-4xl font-light text-[#8e44ad] mb-2">
                                        70%
                                   </div>
                                   <div className="text-sm text-gray-600">
                                        of digital media time is spent on mobile
                                   </div>
                              </motion.div>

                              <motion.div
                                   className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                                   variants={itemVariants}
                                   whileHover={{ y: -5 }}
                              >
                                   <div className="text-4xl font-light text-[#8e44ad] mb-2">
                                        98%
                                   </div>
                                   <div className="text-sm text-gray-600">
                                        SMS open rate compared to 20% for email
                                   </div>
                              </motion.div>

                              <motion.div
                                   className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                                   variants={itemVariants}
                                   whileHover={{ y: -5 }}
                              >
                                   <div className="text-4xl font-light text-[#8e44ad] mb-2">
                                        90%
                                   </div>
                                   <div className="text-sm text-gray-600">
                                        of mobile users act within an hour
                                   </div>
                              </motion.div>

                              <motion.div
                                   className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                                   variants={itemVariants}
                                   whileHover={{ y: -5 }}
                              >
                                   <div className="text-4xl font-light text-[#8e44ad] mb-2">
                                        127%
                                   </div>
                                   <div className="text-sm text-gray-600">
                                        higher conversion rates on
                                        mobile-optimized sites
                                   </div>
                              </motion.div>
                         </motion.div>
                    </div>
               </motion.div>

               {/* Process Section */}
               <motion.div
                    className="py-16 px-4 max-w-6xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
               >
                    <motion.div
                         className="text-center mb-12"
                         initial={{ y: 20, opacity: 0 }}
                         animate={
                              isVisible
                                   ? { y: 0, opacity: 1 }
                                   : { y: 20, opacity: 0 }
                         }
                         transition={{ duration: 0.5 }}
                    >
                         <h2 className="text-3xl font-light text-gray-700 mb-4">
                              Our Mobile Marketing Process
                         </h2>
                         <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                              We follow a structured approach to create mobile
                              marketing strategies that deliver measurable
                              results.
                         </p>
                    </motion.div>

                    <div className="relative">
                         {/* Process timeline line */}
                         <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

                         <motion.div
                              className="space-y-12 md:space-y-0"
                              variants={containerVariants}
                              initial="hidden"
                              animate={isVisible ? "visible" : "hidden"}
                         >
                              {marketingSteps.map((step, index) => (
                                   <motion.div
                                        key={index}
                                        className={`flex flex-col md:flex-row ${
                                             index % 2 === 0
                                                  ? "md:flex-row-reverse"
                                                  : ""
                                        } items-center gap-8`}
                                        variants={itemVariants}
                                   >
                                        <div
                                             className={`w-full md:w-1/2 ${
                                                  index % 2 === 0
                                                       ? "md:text-left"
                                                       : "md:text-right"
                                             }`}
                                        >
                                             <motion.div
                                                  className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                                                       activeStep === index
                                                            ? "ring-2 ring-[#8e44ad]"
                                                            : ""
                                                  }`}
                                                  whileHover={{ scale: 1.03 }}
                                                  onClick={() =>
                                                       setActiveStep(
                                                            activeStep === index
                                                                 ? null
                                                                 : index
                                                       )
                                                  }
                                             >
                                                  <h3 className="text-xl font-medium mb-2 text-gray-800 flex items-center">
                                                       {index % 2 === 0 ? (
                                                            <>
                                                                 <span>
                                                                      {
                                                                           step.title
                                                                      }
                                                                 </span>
                                                                 <step.icon className="w-5 h-5 ml-2 text-[#8e44ad]" />
                                                            </>
                                                       ) : (
                                                            <>
                                                                 <step.icon className="w-5 h-5 mr-2 text-[#8e44ad]" />
                                                                 <span>
                                                                      {
                                                                           step.title
                                                                      }
                                                                 </span>
                                                            </>
                                                       )}
                                                  </h3>

                                                  <AnimatePresence>
                                                       {activeStep ===
                                                            index && (
                                                            <motion.p
                                                                 className="text-gray-600"
                                                                 initial={{
                                                                      height: 0,
                                                                      opacity: 0,
                                                                 }}
                                                                 animate={{
                                                                      height: "auto",
                                                                      opacity: 1,
                                                                 }}
                                                                 exit={{
                                                                      height: 0,
                                                                      opacity: 0,
                                                                 }}
                                                                 transition={{
                                                                      duration: 0.3,
                                                                 }}
                                                            >
                                                                 {
                                                                      step.description
                                                                 }
                                                            </motion.p>
                                                       )}
                                                  </AnimatePresence>

                                                  {activeStep !== index && (
                                                       <div
                                                            className={`flex items-center text-sm text-gray-500 mt-2 ${
                                                                 index % 2 === 0
                                                                      ? ""
                                                                      : "justify-end"
                                                            }`}
                                                       >
                                                            {index % 2 === 0 ? (
                                                                 <>
                                                                      <span>
                                                                           Learn
                                                                           more
                                                                      </span>
                                                                      <ChevronRight className="w-4 h-4 ml-1" />
                                                                 </>
                                                            ) : (
                                                                 <>
                                                                      <ChevronRight className="w-4 h-4 mr-1 transform rotate-180" />
                                                                      <span>
                                                                           Learn
                                                                           more
                                                                      </span>
                                                                 </>
                                                            )}
                                                       </div>
                                                  )}
                                             </motion.div>
                                        </div>

                                        <div className="relative md:w-8 md:h-8">
                                             <motion.div
                                                  className="w-8 h-8 rounded-full bg-[#8e44ad] text-white flex items-center justify-center z-10 relative"
                                                  whileHover={{ scale: 1.2 }}
                                                  onClick={() =>
                                                       setActiveStep(
                                                            activeStep === index
                                                                 ? null
                                                                 : index
                                                       )
                                                  }
                                             >
                                                  {index + 1}
                                             </motion.div>
                                        </div>

                                        <div className="w-full md:w-1/2"></div>
                                   </motion.div>
                              ))}
                         </motion.div>
                    </div>
               </motion.div>

               {/* CTA Buttons */}
               <motion.div
                    className="py-12 px-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                         isVisible
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.4 }}
               >
                    <button
                         className="bg-[#8e44ad] hover:bg-[#9b59b6] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                         onClick={scrollToForm}
                    >
                         <MessageSquare className="mr-2 h-5 w-5" />
                         <span>Discuss your mobile strategy</span>
                    </button>
                    <button
                         className="bg-[#2c3e50] hover:bg-[#34495e] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                         onClick={toggleQuotePopup}
                    >
                         <DollarSign className="mr-2 h-5 w-5" />
                         <span>Request a campaign quote</span>
                    </button>
               </motion.div>

               {/* Mobile Projects */}
               <motion.div
                    className="bg-gray-50 py-16 px-4"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
               >
                    <div className="max-w-6xl mx-auto">
                         <motion.div
                              className="flex justify-between items-center mb-8"
                              initial={{ y: 20, opacity: 0 }}
                              animate={
                                   isVisible
                                        ? { y: 0, opacity: 1 }
                                        : { y: 20, opacity: 0 }
                              }
                              transition={{ duration: 0.5 }}
                         >
                              <h2 className="text-2xl font-light text-gray-700">
                                   Our mobile marketing projects
                              </h2>
                              <Link
                                   href="/projects"
                                   className="text-[#8e44ad] text-sm hover:underline flex items-center"
                              >
                                   <span>See all projects</span>
                                   <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                         </motion.div>

                         <div className="relative">
                              <motion.div
                                   className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   transition={{ duration: 0.5 }}
                              >
                                   {[0, 1, 2].map((i) => {
                                        const projectIndex =
                                             (currentProjectIndex + i) %
                                             projects.length;
                                        const project = projects[projectIndex];

                                        return (
                                             <motion.div
                                                  key={projectIndex}
                                                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                                  initial={{
                                                       opacity: 0,
                                                       y: 20,
                                                  }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{
                                                       duration: 0.5,
                                                       delay: i * 0.1,
                                                  }}
                                                  whileHover={{ y: -5 }}
                                             >
                                                  <div
                                                       className={`h-48 ${project.bgColor} flex items-center justify-center relative`}
                                                  >
                                                       <Image
                                                            src={
                                                                 project.image ||
                                                                 "/placeholder.svg"
                                                            }
                                                            alt={project.title}
                                                            width={200}
                                                            height={150}
                                                            className="object-contain"
                                                       />
                                                       <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center">
                                                            <Award className="w-3 h-3 mr-1 text-[#8e44ad]" />
                                                            <span className="font-bold text-gray-800">
                                                                 {
                                                                      project
                                                                           .stats
                                                                           .value
                                                                 }
                                                            </span>
                                                            <span className="ml-1 text-gray-600 text-[10px]">
                                                                 {
                                                                      project
                                                                           .stats
                                                                           .label
                                                                 }
                                                            </span>
                                                       </div>
                                                  </div>
                                                  <div className="p-6">
                                                       <h3 className="text-lg font-medium mb-2">
                                                            {project.title}
                                                       </h3>
                                                       <p className="text-gray-600 text-sm mb-4">
                                                            {
                                                                 project.description
                                                            }
                                                       </p>
                                                       <Link
                                                            href={`/projects/${project.title
                                                                 .toLowerCase()
                                                                 .replace(
                                                                      /\s+/g,
                                                                      "-"
                                                                 )}`}
                                                            className="inline-flex items-center text-[#8e44ad] text-sm font-medium"
                                                       >
                                                            <span>
                                                                 View case study
                                                            </span>
                                                            <ArrowRight className="ml-1 h-4 w-4" />
                                                       </Link>
                                                  </div>
                                             </motion.div>
                                        );
                                   })}
                              </motion.div>

                              {/* Pagination Dots */}
                              <div className="flex justify-center gap-2 mb-8">
                                   {projects.map((_, index) => (
                                        <button
                                             key={index}
                                             className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                  Math.floor(
                                                       currentProjectIndex / 3
                                                  ) === Math.floor(index / 3)
                                                       ? "w-6 bg-[#8e44ad]"
                                                       : "bg-gray-300"
                                             }`}
                                             onClick={() =>
                                                  setCurrentProjectIndex(index)
                                             }
                                             aria-label={`Go to project set ${
                                                  Math.floor(index / 3) + 1
                                             }`}
                                        />
                                   ))}
                              </div>
                         </div>
                    </div>
               </motion.div>

               {/* Form Section with Ref */}
               <div ref={formRef} className="py-16 px-4">
                    <motion.div
                         className="max-w-4xl mx-auto"
                         initial={{ opacity: 0, y: 20 }}
                         animate={
                              isVisible
                                   ? { opacity: 1, y: 0 }
                                   : { opacity: 0, y: 20 }
                         }
                         transition={{ duration: 0.5, delay: 0.7 }}
                    >
                         <div className="text-center mb-8">
                              <h2 className="text-3xl font-light text-gray-700 mb-4">
                                   Start Your Mobile Marketing Campaign
                              </h2>
                              <p className="text-gray-600 max-w-2xl mx-auto">
                                   Tell us about your business goals and target
                                   audience, and we&apos;ll create a mobile
                                   marketing strategy tailored to your needs.
                              </p>
                         </div>
                         <Form />
                    </motion.div>
               </div>

               {/* Quote Popup */}
               <QuotePopup isOpen={showQuotePopup} onClose={toggleQuotePopup} />
          </div>
     );
};

export default MobileMarketingServices;
