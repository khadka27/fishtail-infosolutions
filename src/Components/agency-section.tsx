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

               {/* Redesigned Team Members Section */}
               <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
                    <div className="container mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: true }}
                              className="text-center mb-16"
                         >
                              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 text-sm font-medium mb-6">
                                   <Users className="w-4 h-4" />
                                   Meet Our Team
                                   <Sparkles className="w-4 h-4" />
                              </div>

                              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                                   The Minds Behind Our Success
                              </h2>

                              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                                   Our diverse team of experts brings together
                                   creativity, technical excellence, and
                                   strategic thinking to deliver exceptional
                                   results for our clients.
                              </p>
                         </motion.div>

                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
                              {teamMembers.map((member, index) => (
                                   <motion.div
                                        key={member.slug}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.6,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="group"
                                   >
                                        <Link href={`/team/${member.slug}`}>
                                             <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                                                  {/* Background gradient on hover */}
                                                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                  <div className="relative">
                                                       {/* Profile Image Section */}
                                                       <div className="flex justify-center mb-6">
                                                            <div className="relative">
                                                                 {/* Circular gradient border - increased size */}
                                                                 <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-r from-blue-500  to-purple-500 p-1">
                                                                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                                                                           <Image
                                                                                src={
                                                                                     member.avatar
                                                                                }
                                                                                alt={
                                                                                     member.name
                                                                                }
                                                                                width={
                                                                                     160
                                                                                }
                                                                                height={
                                                                                     160
                                                                                }
                                                                                className="w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-0"
                                                                           />
                                                                      </div>
                                                                 </div>

                                                                 {/* Department badge */}
                                                                 <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                                                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                                           {
                                                                                member.department
                                                                           }
                                                                      </span>
                                                                 </div>
                                                            </div>
                                                       </div>

                                                       {/* Member Info */}
                                                       <div className="text-center space-y-3">
                                                            <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                                                                 {member.name}
                                                            </h3>
                                                            <p className="text-sm text-slate-600 font-medium">
                                                                 {
                                                                      member.position
                                                                 }
                                                            </p>

                                                            {/* Bio preview */}
                                                            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                                                                 {member.bio}
                                                            </p>
                                                       </div>

                                                       {/* Social Links */}
                                                       <div className="flex justify-center gap-3 mt-6 pt-4 border-t border-gray-100">
                                                            {member.linkedin && (
                                                                 <a
                                                                      href={
                                                                           member.linkedin
                                                                      }
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                                                                 >
                                                                      <Linkedin className="w-4 h-4" />
                                                                 </a>
                                                            )}
                                                            {member.twitter && (
                                                                 <a
                                                                      href={
                                                                           member.twitter
                                                                      }
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                                                                 >
                                                                      <Twitter className="w-4 h-4" />
                                                                 </a>
                                                            )}
                                                            {member.facebook && (
                                                                 <a
                                                                      href={
                                                                           member.facebook
                                                                      }
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                                                                 >
                                                                      <Facebook className="w-4 h-4" />
                                                                 </a>
                                                            )}
                                                       </div>

                                                       {/* View Profile Button */}
                                                       <div className="mt-6 text-center">
                                                            <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                                                                 View Profile
                                                                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                            </span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Link>
                                   </motion.div>
                              ))}
                         </div>

                         {/* Call to Action */}
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="text-center mt-16"
                         >
                              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                                   <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                        Ready to Work With Our Team?
                                   </h3>
                                   <p className="text-slate-600 mb-6">
                                        Let's discuss how our expertise can help
                                        achieve your digital goals.
                                   </p>
                                   <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                                   >
                                        Get Started Today
                                        <ArrowRight className="w-4 h-4" />
                                   </Link>
                              </div>
                         </motion.div>
                    </div>
               </section>
          </div>
     );
}
