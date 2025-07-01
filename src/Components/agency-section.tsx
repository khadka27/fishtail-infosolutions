"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
     Twitter,
     Facebook,
     Instagram,
     Linkedin,
     Award,
     BarChart2,
     Mail,
     Trophy,
     User,
     Search,
     Clock,
     Calendar,
     Mic,
     Coffee,
     ArrowRight,
     Sparkles,
     Target,
     Globe,
     Zap,
     Heart,
     Star,
} from "lucide-react";
import image1 from "@/Images/services-analytics-alt-colors-optimized.png";

import type { TeamMember } from "@/data/team-members";

// Enhanced stats data with colors and animations
const stats = [
     {
          value: 10,
          suffix: "+",
          label: "Years in Digital Solutions",
          icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
          gradient: "from-red-500 to-pink-500",
          bgGradient: "from-red-50 to-pink-50",
     },
     {
          value: 230,
          suffix: "+",
          label: "Web Projects Delivered",
          icon: <BarChart2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
          gradient: "from-orange-500 to-red-500",
          bgGradient: "from-orange-50 to-red-50",
     },
     {
          value: 85,
          suffix: "+",
          label: "Successful Email Campaigns",
          icon: <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
          gradient: "from-yellow-500 to-orange-500",
          bgGradient: "from-yellow-50 to-orange-50",
     },
     {
          value: 54,
          suffix: "+",
          label: "Top Google Rankings",
          icon: <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
          gradient: "from-green-500 to-emerald-500",
          bgGradient: "from-green-50 to-emerald-50",
     },
     {
          value: 16,
          suffix: "+",
          label: "Dedicated Team Members",
          icon: <User className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
          gradient: "from-teal-500 to-cyan-500",
          bgGradient: "from-teal-50 to-cyan-50",
     },
     {
          value: 120,
          suffix: "+",
          label: "SEO Campaigns Executed",
          icon: <Search className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
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
          icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />,
          color: "text-blue-400",
     },
     {
          value: 30,
          suffix: "+",
          label: "Workshops & Webinars",
          icon: <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />,
          color: "text-purple-400",
     },
     {
          value: 50,
          suffix: "+",
          label: "Industry Talks Delivered",
          icon: <Mic className="h-5 w-5 sm:h-6 sm:w-6" />,
          color: "text-green-400",
     },
     {
          value: "1.5K",
          suffix: "+",
          label: "Cups of Coffee (and Coding)",
          icon: <Coffee className="h-5 w-5 sm:h-6 sm:w-6" />,
          color: "text-orange-400",
     },
];

export default function AgencyPage({
     teamMembers,
}: {
     teamMembers: TeamMember[];
}) {
     const [isVisible, setIsVisible] = useState(false);
     const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
     const [animatedBottomStats, setAnimatedBottomStats] = useState(
          bottomStats.map((stat) =>
               typeof stat.value === "number" ? 0 : stat.value
          )
     );
     const statsRef = useRef<HTMLDivElement>(null);
     const bottomStatsRef = useRef<HTMLDivElement>(null);

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
                         if (current >= stat.value) {
                              current = stat.value;
                              clearInterval(timer);
                         }
                         setAnimatedBottomStats((prev) => {
                              const newStats = [...prev];
                              newStats[index] = Math.floor(current);
                              return newStats;
                         });
                    }, 50);
               }
          });
     };

     return (
          <div className="flex flex-col min-h-screen">
               {/* Enhanced Hero Section */}
               <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
                    {/* Enhanced Background Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
                         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-300/10 to-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-300/5 to-pink-300/5 rounded-full blur-3xl animate-pulse delay-500"></div>

                         {/* Floating particles */}
                         <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
                         <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300/40 rounded-full animate-bounce delay-300"></div>
                         <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cyan-300/35 rounded-full animate-bounce delay-700"></div>
                    </div>

                    <div className="container mx-auto relative z-10">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                              <motion.div
                                   initial={{ opacity: 0, x: -50 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8 }}
                                   className="space-y-6 lg:space-y-8"
                              >
                                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-4">
                                        <Sparkles className="w-4 h-4" />
                                        Digital Excellence
                                        <Star className="w-4 h-4" />
                                   </div>

                                   <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
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

                                   <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/90 leading-relaxed max-w-2xl">
                                        Our team develops effective content
                                        strategies for forward-thinking
                                        companies. We have a proven track record
                                        in increasing search engine rankings and
                                        driving measurable business growth.
                                   </p>

                                   <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <Link
                                             href="/Services"
                                             className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 relative overflow-hidden"
                                        >
                                             <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                             <span className="relative">
                                                  Our Services
                                             </span>
                                             <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative" />
                                        </Link>

                                        <Link
                                             href="/contact"
                                             className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105"
                                        >
                                             <span>Get Started</span>
                                             <Target className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
                                        </Link>
                                   </div>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, x: 50 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   className="flex justify-center lg:justify-end"
                              >
                                   <div className="relative group">
                                        {/* Glowing border effect */}
                                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                                        {/* Image container */}
                                        <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                                             <Image
                                                  src={
                                                       image1 ||
                                                       "/placeholder.svg"
                                                  }
                                                  alt="Digital Marketing Illustration"
                                                  width={500}
                                                  height={400}
                                                  className="object-contain max-w-full h-auto transform transition-transform duration-500 hover:scale-105"
                                             />

                                             {/* Floating badges */}
                                             <div className="absolute -top-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                                                  <Globe className="w-4 h-4 inline mr-2" />
                                                  Global Reach
                                             </div>
                                             <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce delay-500">
                                                  <Zap className="w-4 h-4 inline mr-2" />
                                                  Fast Results
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* Enhanced Mission Statement */}
               <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
                    <div className="container mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: true }}
                              className="max-w-5xl mx-auto relative -mt-16 lg:-mt-24"
                         >
                              {/* Glass morphism card */}
                              <div className="relative bg-white/80 backdrop-blur-lg border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
                                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl"></div>

                                   <div className="relative text-center">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 text-sm font-medium mb-6">
                                             <Heart className="w-4 h-4" />
                                             Our Mission
                                             <Sparkles className="w-4 h-4" />
                                        </div>

                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                                             Building Lasting Relationships
                                        </h2>

                                        <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed">
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
               <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
                    <div className="container mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: true }}
                              className="text-center mb-12 lg:mb-16"
                         >
                              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 text-sm font-medium mb-6">
                                   <Target className="w-4 h-4" />
                                   What We Do
                                   <Sparkles className="w-4 h-4" />
                              </div>

                              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                                   Our Expertise
                              </h2>
                         </motion.div>

                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                              <motion.div
                                   initial={{ opacity: 0, x: -30 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8 }}
                                   viewport={{ once: true }}
                                   className="group relative"
                              >
                                   <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 lg:p-10 rounded-3xl border border-blue-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02]">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative">
                                             <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                                  <BarChart2 className="w-8 h-8 text-white" />
                                             </div>

                                             <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                                  Strategic Marketing
                                             </h3>

                                             <p className="text-slate-600 text-lg leading-relaxed">
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
                                   <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 lg:p-10 rounded-3xl border border-purple-100 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-[1.02]">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative">
                                             <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                                  <Zap className="w-8 h-8 text-white" />
                                             </div>

                                             <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                                                  Digital Excellence
                                             </h3>

                                             <p className="text-slate-600 text-lg leading-relaxed">
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
                    className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50"
               >
                    <div className="container mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: true }}
                              className="text-center mb-12 lg:mb-16"
                         >
                              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 text-sm font-medium mb-6">
                                   <Trophy className="w-4 h-4" />
                                   Our Track Record
                                   <Award className="w-4 h-4" />
                              </div>

                              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                                   Numbers That Matter
                              </h2>
                         </motion.div>

                         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
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
                                             className={`relative bg-gradient-to-br ${stat.gradient} p-6 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
                                        >
                                             <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                             <div className="relative text-center text-white">
                                                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                                       {stat.icon}
                                                  </div>
                                                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
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

               {/* Enhanced Team Section */}
               <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
                    <div className="container mx-auto">
                         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-16 gap-6">
                              <motion.div
                                   initial={{ opacity: 0, x: -30 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8 }}
                                   viewport={{ once: true }}
                              >
                                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium mb-4">
                                        <User className="w-4 h-4" />
                                        Meet Our Team
                                        <Heart className="w-4 h-4" />
                                   </div>

                                   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                                        Our Amazing Team
                                   </h2>

                                   <p className="text-blue-100/80 text-lg max-w-2xl">
                                        Meet the talented individuals who make
                                        the magic happen every day.
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
                                        className="group inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105"
                                   >
                                        <span>View All Team Members</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                   </Link>
                              </motion.div>
                         </div>

                         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                              {teamMembers.slice(0, 8).map((member, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.6,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="group relative"
                                   >
                                        <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-2">
                                             <div className="relative overflow-hidden">
                                                  <Image
                                                       src={
                                                            member.avatar ||
                                                            "/placeholder.svg?height=300&width=300"
                                                       }
                                                       alt={member.name}
                                                       width={300}
                                                       height={300}
                                                       unoptimized
                                                       className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                                  />
                                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                                  {/* Social icons overlay */}
                                                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                       <div className="flex space-x-3">
                                                            <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                                                                 <Twitter className="h-4 w-4" />
                                                            </button>
                                                            <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                                                                 <Linkedin className="h-4 w-4" />
                                                            </button>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="p-6">
                                                  <Link
                                                       href={`/team/${member.slug}`}
                                                       className="block"
                                                  >
                                                       <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2">
                                                            {member.name}
                                                       </h3>
                                                       <p className="text-blue-100/80 text-sm mb-4">
                                                            {member.position}
                                                       </p>
                                                  </Link>
                                             </div>
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Enhanced Bottom Stats */}
               <section
                    ref={bottomStatsRef}
                    className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white"
               >
                    <div className="container mx-auto">
                         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                                        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-3 sm:space-y-0 sm:space-x-4 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
                                             <div
                                                  className={`flex-shrink-0 ${stat.color} p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                                             >
                                                  {stat.icon}
                                             </div>
                                             <div className="text-center sm:text-left">
                                                  <div className="text-2xl lg:text-3xl font-bold">
                                                       {typeof stat.value ===
                                                       "number"
                                                            ? animatedBottomStats[
                                                                   index
                                                              ]
                                                            : stat.value}
                                                       {stat.suffix}
                                                  </div>
                                                  <div className="text-sm lg:text-base text-white/80 font-medium">
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
               <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
                    <div className="container mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: true }}
                              className="text-center max-w-5xl mx-auto"
                         >
                              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 text-sm font-medium mb-8">
                                   <Globe className="w-4 h-4" />
                                   Our Vision
                                   <Sparkles className="w-4 h-4" />
                              </div>

                              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                                   Shaping the Future
                              </h2>

                              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-600 leading-relaxed mb-8">
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

                              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                   <Link
                                        href="/contact"
                                        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
                                   >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                        <span className="relative">
                                             Work With Us
                                        </span>
                                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative" />
                                   </Link>

                                   <Link
                                        href="/about"
                                        className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-blue-200 text-blue-600 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:scale-105"
                                   >
                                        <span>Learn More</span>
                                        <Globe className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                                   </Link>
                              </div>
                         </motion.div>
                    </div>
               </section>
          </div>
     );
}
