"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
     Users,
     Target,
     TrendingUp,
     Award,
     Globe,
     Zap,
     ArrowRight,
     CheckCircle,
     Star,
     Mail,
     MapPin,
     Clock,
     DollarSign,
     BarChart3,
     Shield,
     Lightbulb,
     Settings,
     MessageSquare,
     Share2,
     Eye,
     MousePointer,
     Filter,
     X,
     Trophy,
     User,
     Search,
     Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
     Twitter,
     Facebook,
     Instagram,
     Linkedin,
     BarChart2,
     Sparkles,
     Calendar,
     Mic,
     Coffee,
     Building2,
     PenTool,
     Code,
     Megaphone,
     Users as UsersIcon,
     Briefcase,
     GraduationCap,
     MapPin as MapPinIcon,
     Phone as PhoneIcon,
     Mail as MailIcon,
     Globe as GlobeIcon,
     Clock as ClockIcon,
     DollarSign as DollarSignIcon,
     BarChart3 as BarChart3Icon,
     Shield as ShieldIcon,
     Lightbulb as LightbulbIcon,
     Settings as SettingsIcon,
     MessageSquare as MessageSquareIcon,
     Share2 as Share2Icon,
     Eye as EyeIcon,
     MousePointer as MousePointerIcon,
     Filter as FilterIcon,
     X as XIcon,
} from "lucide-react";
import image1 from "@/Images/services-analytics-alt-colors-optimized.png";
import marketingimage from "@/Images/digitalpic.png";

import type { TeamMember } from "@/data/team-members";

// Enhanced stats data with colors and animations
const stats = [
     {
          value: 10,
          suffix: "+",
          label: "Years in Digital Solutions",
          icon: (
               <Clock className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
          ),
          gradient: "from-red-500 to-pink-500",
          bgGradient: "from-red-50 to-pink-50",
     },
     {
          value: 230,
          suffix: "+",
          label: "Web Projects Delivered",
          icon: (
               <BarChart2 className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
          ),
          gradient: "from-orange-500 to-red-500",
          bgGradient: "from-orange-50 to-red-50",
     },
     {
          value: 85,
          suffix: "+",
          label: "Successful Email Campaigns",
          icon: (
               <Mail className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
          ),
          gradient: "from-yellow-500 to-orange-500",
          bgGradient: "from-yellow-50 to-orange-50",
     },
     {
          value: 54,
          suffix: "+",
          label: "Top Google Rankings",
          icon: (
               <Trophy className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
          ),
          gradient: "from-green-500 to-emerald-500",
          bgGradient: "from-green-50 to-emerald-50",
     },
     {
          value: 16,
          suffix: "+",
          label: "Dedicated Team Members",
          icon: (
               <User className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
          ),
          gradient: "from-teal-500 to-cyan-500",
          bgGradient: "from-teal-50 to-cyan-50",
     },
     {
          value: 120,
          suffix: "+",
          label: "SEO Campaigns Executed",
          icon: (
               <Search className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
          ),
          gradient: "from-blue-500 to-indigo-500",
          bgGradient: "from-blue-50 to-indigo-50",
     },
];

// Enhanced bottom stats
const bottomStats = [
     {
          value: 89,
          suffix: "+",
          label: "Clients Served Globally",
          icon: <Award className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />,
          color: "text-blue-400",
     },
     {
          value: 30,
          suffix: "+",
          label: "Workshops & Webinars",
          icon: <Calendar className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />,
          color: "text-purple-400",
     },
     {
          value: 50,
          suffix: "+",
          label: "Industry Talks Delivered",
          icon: <Mic className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />,
          color: "text-green-400",
     },
     {
          value: "1.5K",
          suffix: "+",
          label: "Cups of Coffee (and Coding)",
          icon: <Coffee className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />,
          color: "text-orange-400",
     },
];

// Department configuration with icons and colors
const departmentConfig = {
     Management: {
          icon: Building2,
          color: "from-purple-500 to-pink-500",
          bgColor: "from-purple-50 to-pink-50",
          borderColor: "border-purple-200",
     },
     SEO: {
          icon: Search,
          color: "from-blue-500 to-cyan-500",
          bgColor: "from-blue-50 to-cyan-50",
          borderColor: "border-blue-200",
     },
     Content: {
          icon: PenTool,
          color: "from-emerald-500 to-teal-500",
          bgColor: "from-emerald-50 to-teal-50",
          borderColor: "border-emerald-200",
     },
     Development: {
          icon: Code,
          color: "from-orange-500 to-red-500",
          bgColor: "from-orange-50 to-red-50",
          borderColor: "border-orange-200",
     },
     HR: {
          icon: Users,
          color: "from-indigo-500 to-purple-500",
          bgColor: "from-indigo-50 to-purple-50",
          borderColor: "border-indigo-200",
     },
     Marketing: {
          icon: Megaphone,
          color: "from-green-500 to-emerald-500",
          bgColor: "from-green-50 to-emerald-50",
          borderColor: "border-green-200",
     },
};

export default function AgencyPage({
     teamMembers,
}: {
     teamMembers: TeamMember[];
}) {
     const [currentSlide, setCurrentSlide] = useState(0);
     const [isVisible, setIsVisible] = useState(false);
     const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
     const [animatedBottomStats, setAnimatedBottomStats] = useState(
          bottomStats.map((stat) =>
               typeof stat.value === "number" ? 0 : stat.value
          )
     );
     const statsRef = useRef<HTMLDivElement>(null);
     const bottomStatsRef = useRef<HTMLDivElement>(null);
     const sectionRef = useRef<HTMLDivElement>(null);

     // Intersection Observer for animations
     useEffect(() => {
          const observer = new IntersectionObserver(
               (entries) => {
                    entries.forEach((entry) => {
                         if (entry.isIntersecting) {
                              if (entry.target === statsRef.current) {
                                   animateStats();
                              } else if (
                                   entry.target === bottomStatsRef.current
                              ) {
                                   animateBottomStats();
                              }
                         }
                    });
               },
               { threshold: 0.3 }
          );

          if (statsRef.current) observer.observe(statsRef.current);
          if (bottomStatsRef.current) observer.observe(bottomStatsRef.current);

          return () => observer.disconnect();
     }, []);

     const animateStats = () => {
          stats.forEach((stat, index) => {
               let current = 0;
               const increment = stat.value / 50;
               const timer = setInterval(() => {
                    current += increment;
                    if (current >= stat.value) {
                         current = stat.value;
                         clearInterval(timer);
                    }
                    setAnimatedStats((prev) => {
                         const newStats = [...prev];
                         newStats[index] = Math.floor(current);
                         return newStats;
                    });
               }, 40);
          });
     };

     const animateBottomStats = () => {
          bottomStats.forEach((stat, index) => {
               if (typeof stat.value === "number") {
                    let current = 0;
                    const increment = stat.value / 30;
                    const timer = setInterval(() => {
                         current += increment;
                         if (current >= Number(stat.value)) {
                              current = Number(stat.value);
                              clearInterval(timer);
                         }
                         setAnimatedBottomStats((prev) => {
                              const newStats = [...prev];
                              newStats[index] = Math.floor(current).toString();
                              return newStats;
                         });
                    }, 50);
               }
          });
     };

     return (
          <div className="flex flex-col min-h-screen">
               {/* Enhanced Hero Section */}
               <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
                    {/* Enhanced Background Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                         <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-white/10 to-blue-300/10 rounded-full blur-2xl sm:blur-3xl"></div>
                         <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-300/10 to-white/10 rounded-full blur-2xl sm:blur-3xl"></div>
                         <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-purple-300/5 to-pink-300/5 rounded-full blur-2xl sm:blur-3xl"></div>

                         {/* Floating particles - hidden on mobile */}
                         <div className="hidden sm:block absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
                         <div className="hidden sm:block absolute top-40 right-32 w-1 h-1 bg-blue-300/40 rounded-full animate-bounce delay-300"></div>
                         <div className="hidden sm:block absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cyan-300/35 rounded-full animate-bounce delay-700"></div>
                    </div>

                    <div className="container mx-auto relative z-10">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
                              <motion.div
                                   initial={{ opacity: 0, x: -50 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8 }}
                                   className="space-y-4 sm:space-y-6 lg:space-y-8"
                              >
                                   <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                                        Digital Excellence
                                        <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                                   </div>

                                   <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                                        <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                             A full service
                                        </span>
                                        <br />
                                        <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                                             digital marketing
                                        </span>
                                        <br />
                                        <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                             agency
                                        </span>
                                   </h1>

                                   <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100/90 leading-relaxed max-w-2xl">
                                        Our team develops effective content
                                        strategies for forward-thinking
                                        companies. We have a proven track record
                                        in increasing search engine rankings and
                                        driving measurable business growth.
                                   </p>

                                   <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                                        <Link
                                             href="/Services"
                                             className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 relative overflow-hidden"
                                        >
                                             <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                             <span className="relative">
                                                  Our Services
                                             </span>
                                             <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 relative" />
                                        </Link>

                                        <Link
                                             href="/contact"
                                             className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105"
                                        >
                                             <span>Get Started</span>
                                             <Target className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-90" />
                                        </Link>
                                   </div>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, x: 50 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   className="flex justify-center lg:justify-end order-first lg:order-last"
                              >
                                   <div className="relative group">
                                        {/* Glowing border effect - reduced on mobile */}
                                        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-2xl sm:rounded-3xl blur opacity-20 sm:opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                                        {/* Image container */}
                                        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20">
                                             <Image
                                                  src={
                                                       marketingimage ||
                                                       "/placeholder.svg"
                                                  }
                                                  alt="Digital Marketing Illustration"
                                                  width={500}
                                                  height={400}
                                                  className="object-contain max-w-full h-auto w-full sm:max-w-md lg:max-w-lg transform transition-transform duration-500 hover:scale-105"
                                             />

                                             {/* Floating badges - hidden on mobile */}
                                             <div className="hidden sm:block absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-bounce">
                                                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                                                  Global Reach
                                             </div>
                                             <div className="hidden sm:block absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-bounce delay-500">
                                                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                                                  Fast Results
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* Enhanced Mission Statement */}
               <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
                    <div className="container mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: true }}
                              className="max-w-5xl mx-auto relative -mt-8 sm:-mt-12 lg:-mt-16 xl:-mt-24"
                         >
                              {/* Glass morphism card */}
                              <div className="relative bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
                                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl sm:rounded-3xl"></div>

                                   <div className="relative text-center">
                                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                                             <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                                             Our Mission
                                             <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>

                                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                                             Building Lasting Relationships
                                        </h2>

                                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed">
                                             We pursue relationships based on
                                             transparency, persistence, mutual
                                             trust, and integrity with our
                                             employees, customers and other
                                             business partners. Our commitment
                                             goes beyond delivering results—we
                                             build partnerships that last.
                                        </p>
                                   </div>
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Enhanced Services Section */}
               <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
                    <div className="container mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: true }}
                              className="text-center mb-8 sm:mb-12 lg:mb-16"
                         >
                              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                                   <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                                   What We Do
                                   <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                              </div>

                              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                                   Our Expertise
                              </h2>
                         </motion.div>

                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                              <motion.div
                                   initial={{ opacity: 0, x: -30 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8 }}
                                   viewport={{ once: true }}
                                   className="group relative"
                              >
                                   <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-blue-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02]">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative">
                                             <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                                  <BarChart2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                             </div>

                                             <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                                  Strategic Marketing
                                             </h3>

                                             <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                                                  Our team of specialists
                                                  consistently delivers
                                                  outstanding results combining
                                                  creative ideas with our vast
                                                  experience. We can help you
                                                  build a sustainable,
                                                  meaningful relationship with
                                                  your clients by engaging them
                                                  with your brand using social
                                                  media and data-driven
                                                  strategies.
                                             </p>
                                        </div>
                                   </div>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, x: 30 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   viewport={{ once: true }}
                                   className="group relative"
                              >
                                   <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-purple-100 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-[1.02]">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative">
                                             <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                             </div>

                                             <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors duration-300">
                                                  Digital Excellence
                                             </h3>

                                             <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                                                  We work in areas as diverse as
                                                  search engine optimization,
                                                  social media marketing, email
                                                  marketing and digital
                                                  marketing. Our comprehensive
                                                  approach ensures your brand
                                                  stands out in the digital
                                                  landscape with measurable
                                                  results.
                                             </p>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* Enhanced Stats Section */}
               <section
                    ref={statsRef}
                    className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50"
               >
                    <div className="container mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: true }}
                              className="text-center mb-8 sm:mb-12 lg:mb-16"
                         >
                              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                                   <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
                                   Our Track Record
                                   <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                              </div>

                              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                                   Numbers That Matter
                              </h2>
                         </motion.div>

                         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
                              {stats.map((stat, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{
                                             opacity: 0,
                                             y: 30,
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
                                        className="group relative"
                                   >
                                        <div
                                             className={`relative bg-gradient-to-br ${stat.gradient} p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
                                        >
                                             <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                             <div className="relative text-center text-white">
                                                  <div className="mb-3 sm:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                                       {stat.icon}
                                                  </div>
                                                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2">
                                                       {animatedStats[index]}
                                                       {stat.suffix}
                                                  </div>
                                                  <div className="text-xs sm:text-sm font-medium opacity-90 leading-tight">
                                                       {stat.label}
                                                  </div>
                                             </div>
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Enhanced Team Section - Categorized */}
               <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
                    <div className="container mx-auto">
                         {/* Section Header */}
                         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6">
                              <motion.div
                                   initial={{ opacity: 0, x: -30 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8 }}
                                   viewport={{ once: true }}
                              >
                                   <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                                        <User className="w-3 h-3 sm:w-4 sm:h-4" />
                                        Meet Our Team
                                        <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                                   </div>

                                   <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                                        Our Amazing Team
                                   </h2>

                                   <p className="text-sm sm:text-base md:text-lg text-blue-100/80 max-w-2xl">
                                        Meet the talented individuals who make
                                        the magic happen every day, organized by
                                        departments.
                                   </p>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, x: 30 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   viewport={{ once: true }}
                              >
                                   <Link
                                        href="/team"
                                        className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105"
                                   >
                                        <span>View All Team Members</span>
                                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                   </Link>
                              </motion.div>
                         </div>

                         {/* Department Categories */}
                         {(() => {
                              // Group team members by department
                              const groupedMembers = teamMembers.reduce(
                                   (acc, member) => {
                                        const dept = member.department;
                                        if (!acc[dept]) {
                                             acc[dept] = [];
                                        }
                                        acc[dept].push(member);
                                        return acc;
                                   },
                                   {} as Record<string, typeof teamMembers>
                              );

                              // Sort departments by priority (Management first, then alphabetically)
                              const sortedDepartments = Object.keys(
                                   groupedMembers
                              ).sort((a, b) => {
                                   if (a === "Management") return -1;
                                   if (b === "Management") return 1;
                                   return a.localeCompare(b);
                              });

                              return (
                                   <div className="space-y-12 lg:space-y-16">
                                        {sortedDepartments.map(
                                             (department, deptIndex) => {
                                                  const members =
                                                       groupedMembers[
                                                            department
                                                       ];

                                                  return (
                                                       <motion.div
                                                            key={department}
                                                            initial={{
                                                                 opacity: 0,
                                                                 y: 30,
                                                            }}
                                                            whileInView={{
                                                                 opacity: 1,
                                                                 y: 0,
                                                            }}
                                                            transition={{
                                                                 duration: 0.8,
                                                                 delay:
                                                                      deptIndex *
                                                                      0.1,
                                                            }}
                                                            viewport={{
                                                                 once: true,
                                                            }}
                                                            className="relative"
                                                       >
                                                            {/* Department Header */}
                                                            <div className="mb-6 lg:mb-8">
                                                                 <div className="flex items-center gap-4 mb-4">
                                                                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center shadow-lg">
                                                                           <User className="w-6 h-6 text-blue-300" />
                                                                      </div>
                                                                      <div>
                                                                           <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                                                                                {
                                                                                     department
                                                                                }
                                                                           </h3>
                                                                           <p className="text-blue-200/80 text-sm sm:text-base">
                                                                                {
                                                                                     members.length
                                                                                }{" "}
                                                                                team
                                                                                member
                                                                                {members.length !==
                                                                                1
                                                                                     ? "s"
                                                                                     : ""}
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>

                                                            {/* Team Members Grid */}
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                                                                 {members.map(
                                                                      (
                                                                           member,
                                                                           memberIndex
                                                                      ) => (
                                                                           <motion.div
                                                                                key={
                                                                                     member.slug
                                                                                }
                                                                                initial={{
                                                                                     opacity: 0,
                                                                                     y: 20,
                                                                                }}
                                                                                whileInView={{
                                                                                     opacity: 1,
                                                                                     y: 0,
                                                                                }}
                                                                                transition={{
                                                                                     duration: 0.6,
                                                                                     delay:
                                                                                          deptIndex *
                                                                                               0.1 +
                                                                                          memberIndex *
                                                                                               0.05,
                                                                                }}
                                                                                viewport={{
                                                                                     once: true,
                                                                                }}
                                                                                className="group relative"
                                                                           >
                                                                                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-2">
                                                                                     <div className="relative overflow-hidden">
                                                                                          <Image
                                                                                               src={
                                                                                                    member.avatar ||
                                                                                                    "/placeholder.svg?height=300&width=300"
                                                                                               }
                                                                                               alt={
                                                                                                    member.name
                                                                                               }
                                                                                               width={
                                                                                                    300
                                                                                               }
                                                                                               height={
                                                                                                    300
                                                                                               }
                                                                                               unoptimized
                                                                                               className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                                                                          />
                                                                                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                                                                          {/* Social icons overlay */}
                                                                                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                                                               <div className="flex space-x-2 sm:space-x-3">
                                                                                                    {member.email && (
                                                                                                         <a
                                                                                                              href={`mailto:${member.email}`}
                                                                                                              className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                                                                                                              onClick={(
                                                                                                                   e
                                                                                                              ) =>
                                                                                                                   e.stopPropagation()
                                                                                                              }
                                                                                                         >
                                                                                                              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                                                                                                         </a>
                                                                                                    )}
                                                                                                    {member.linkedin && (
                                                                                                         <a
                                                                                                              href={
                                                                                                                   member.linkedin
                                                                                                              }
                                                                                                              target="_blank"
                                                                                                              rel="noopener noreferrer"
                                                                                                              className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                                                                                                              onClick={(
                                                                                                                   e
                                                                                                              ) =>
                                                                                                                   e.stopPropagation()
                                                                                                              }
                                                                                                         >
                                                                                                              <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                                                                                                         </a>
                                                                                                    )}
                                                                                                    {member.twitter && (
                                                                                                         <a
                                                                                                              href={
                                                                                                                   member.twitter
                                                                                                              }
                                                                                                              target="_blank"
                                                                                                              rel="noopener noreferrer"
                                                                                                              className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                                                                                                              onClick={(
                                                                                                                   e
                                                                                                              ) =>
                                                                                                                   e.stopPropagation()
                                                                                                              }
                                                                                                         >
                                                                                                              <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
                                                                                                         </a>
                                                                                                    )}
                                                                                               </div>
                                                                                          </div>
                                                                                     </div>

                                                                                     <div className="p-4 sm:p-6">
                                                                                          <Link
                                                                                               href={`/team/${member.slug}`}
                                                                                               className="block"
                                                                                          >
                                                                                               <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-1 sm:mb-2">
                                                                                                    {
                                                                                                         member.name
                                                                                                    }
                                                                                               </h3>
                                                                                               <p className="text-blue-100/80 text-xs sm:text-sm mb-3 sm:mb-4">
                                                                                                    {
                                                                                                         member.position
                                                                                                    }
                                                                                               </p>
                                                                                          </Link>

                                                                                          {/* Department Badge */}
                                                                                          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 text-xs font-medium px-2 py-1 rounded-full">
                                                                                               <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                                                                               {
                                                                                                    member.department
                                                                                               }
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </motion.div>
                                                                      )
                                                                 )}
                                                            </div>
                                                       </motion.div>
                                                  );
                                             }
                                        )}
                                   </div>
                              );
                         })()}
                    </div>
               </section>

               {/* Enhanced Bottom Stats */}
               <section
                    ref={bottomStatsRef}
                    className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white"
               >
                    <div className="container mx-auto">
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                              {bottomStats.map((stat, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.6,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="group"
                                   >
                                        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4 p-4 sm:p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
                                             <div
                                                  className={`flex-shrink-0 ${stat.color} p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300`}
                                             >
                                                  {stat.icon}
                                             </div>
                                             <div className="text-center sm:text-left">
                                                  <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">
                                                       {typeof stat.value ===
                                                       "number"
                                                            ? animatedBottomStats[
                                                                   index
                                                              ]
                                                            : stat.value}
                                                       {stat.suffix}
                                                  </div>
                                                  <div className="text-xs sm:text-sm lg:text-base text-white/80 font-medium">
                                                       {stat.label}
                                                  </div>
                                             </div>
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Enhanced Vision Section */}
               <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">
                    <div className="container mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: true }}
                              className="text-center max-w-6xl mx-auto"
                         >
                              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6 md:mb-8">
                                   <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                                   Our Vision
                                   <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                              </div>

                              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
                                   Shaping the Future
                              </h2>

                              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-light text-slate-600 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-4">
                                   The most respected Internet marketing agency.
                                   We want to change the way businesses{" "}
                                   <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        speak
                                   </span>
                                   ,{" "}
                                   <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        listen
                                   </span>{" "}
                                   and{" "}
                                   <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        share
                                   </span>{" "}
                                   online.
                              </p>

                              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 max-w-lg sm:max-w-none mx-auto">
                                   <Link
                                        href="/contact"
                                        className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
                                   >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                        <span className="relative">
                                             Work With Us
                                        </span>
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 relative" />
                                   </Link>

                                   <Link
                                        href="/about"
                                        className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-blue-200 text-blue-600 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:scale-105"
                                   >
                                        <span>Learn More</span>
                                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-180" />
                                   </Link>
                              </div>
                         </motion.div>
                    </div>
               </section>
          </div>
     );
}
