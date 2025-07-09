"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
     ChevronLeft,
     ChevronRight,
     Mail,
     Linkedin,
     Twitter,
     Facebook,
     Award,
     BookOpen,
     Briefcase,
     Calendar,
     Star,
     ArrowRight,
     MapPin,
     Clock,
     Users,
     Zap,
} from "lucide-react";
import type { TeamMember } from "@/data/team-members";
import TestimonialSection from "@/Components/testimonial-section";

// Skills component
const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
     return (
          <div className="mb-6">
               <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-800">
                         {skill}
                    </span>
                    <span className="text-sm font-medium text-blue-600">
                         {level}%
                    </span>
               </div>
               <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                         className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                         initial={{ width: 0 }}
                         animate={{ width: `${level}%` }}
                         transition={{ duration: 1, delay: 0.2 }}
                    />
               </div>
          </div>
     );
};

interface TeamMemberClientProps {
     teamMember: TeamMember;
     prevMember: TeamMember;
     nextMember: TeamMember;
}

export default function TeamMemberClient({
     teamMember,
     prevMember,
     nextMember,
}: TeamMemberClientProps) {
     const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
          setIsVisible(true);
     }, []);

     return (
          <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
               {/* Hero Section */}
               <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 md:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{
                                   opacity: isVisible ? 1 : 0,
                                   y: isVisible ? 0 : 20,
                              }}
                              transition={{ duration: 0.5 }}
                              className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
                         >
                              {/* Profile Image - Left Column */}
                              <div className="w-full lg:w-2/5">
                                   <div className="relative flex justify-center">
                                        {/* Background decorative elements */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full transform translate-x-6 translate-y-6 -z-10 blur-xl opacity-30"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-full transform -translate-x-4 -translate-y-4 -z-10"></div>

                                        <motion.div
                                             whileHover={{ scale: 1.05 }}
                                             transition={{
                                                  type: "spring",
                                                  stiffness: 300,
                                             }}
                                             className="relative z-10"
                                        >
                                             <div className="relative">
                                                  {/* Gradient border */}
                                                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-2">
                                                       <div className="w-full h-full rounded-full overflow-hidden bg-white">
                                                            <Image
                                                                 src={
                                                                      teamMember.avatar ||
                                                                      "/placeholder.svg"
                                                                 }
                                                                 alt={
                                                                      teamMember.name
                                                                 }
                                                                 width={400}
                                                                 height={400}
                                                                 className="w-full h-full object-cover rounded-full"
                                                                 unoptimized
                                                            />
                                                       </div>
                                                  </div>

                                                  {/* Department badge */}
                                                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                                                       <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white text-blue-600 shadow-lg border border-blue-100">
                                                            {
                                                                 teamMember.department
                                                            }
                                                       </span>
                                                  </div>
                                             </div>
                                        </motion.div>
                                   </div>

                                   {/* Social Links */}
                                   <div className="flex justify-center mt-8 space-x-6">
                                        {teamMember.linkedin && (
                                             <motion.a
                                                  whileHover={{
                                                       y: -3,
                                                       scale: 1.1,
                                                  }}
                                                  href={teamMember.linkedin}
                                                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-600 transition-all duration-300"
                                             >
                                                  <Linkedin className="h-6 w-6" />
                                             </motion.a>
                                        )}
                                        {teamMember.twitter && (
                                             <motion.a
                                                  whileHover={{
                                                       y: -3,
                                                       scale: 1.1,
                                                  }}
                                                  href={teamMember.twitter}
                                                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-400 transition-all duration-300"
                                             >
                                                  <Twitter className="h-6 w-6" />
                                             </motion.a>
                                        )}
                                        {teamMember.facebook && (
                                             <motion.a
                                                  whileHover={{
                                                       y: -3,
                                                       scale: 1.1,
                                                  }}
                                                  href={teamMember.facebook}
                                                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-800 transition-all duration-300"
                                             >
                                                  <Facebook className="h-6 w-6" />
                                             </motion.a>
                                        )}
                                        {teamMember.email && (
                                             <motion.a
                                                  whileHover={{
                                                       y: -3,
                                                       scale: 1.1,
                                                  }}
                                                  href={`mailto:${teamMember.email}`}
                                                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-red-500 transition-all duration-300"
                                             >
                                                  <Mail className="h-6 w-6" />
                                             </motion.a>
                                        )}
                                   </div>
                              </div>

                              {/* Profile Content - Right Column */}
                              <div className="w-full lg:w-3/5">
                                   <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                             opacity: isVisible ? 1 : 0,
                                             y: isVisible ? 0 : 20,
                                        }}
                                        transition={{
                                             duration: 0.5,
                                             delay: 0.2,
                                        }}
                                   >
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
                                             <Briefcase className="w-4 h-4" />
                                             {teamMember.position}
                                        </div>

                                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text break-words leading-tight">
                                             {teamMember.name}
                                        </h1>

                                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
                                             {teamMember.bio ||
                                                  "Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."}
                                        </p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                                             <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                                  <Briefcase className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" />
                                                  <div className="min-w-0">
                                                       <div className="font-semibold text-gray-800 text-sm">
                                                            {teamMember
                                                                 .experience?.[0] ||
                                                                 "5+ years"}
                                                       </div>
                                                       <div className="text-xs text-gray-500">
                                                            Experience
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                                  <BookOpen className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                                                  <div className="min-w-0">
                                                       <div className="font-semibold text-gray-800 text-sm">
                                                            {teamMember
                                                                 .projects?.[0] ||
                                                                 "20+ Projects"}
                                                       </div>
                                                       <div className="text-xs text-gray-500">
                                                            Completed
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </motion.div>
                              </div>
                         </motion.div>
                    </div>
               </div>

               {/* Skills & Expertise Section */}
               <div className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                         >
                              <div className="text-center mb-16">
                                   <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text ">
                                        Skills & Expertise
                                   </h2>
                                   <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                        Comprehensive expertise across multiple
                                        domains to deliver exceptional results
                                   </p>
                              </div>

                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                   <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                                             <Zap className="w-6 h-6 text-blue-500" />
                                             Core Competencies
                                        </h3>
                                        {teamMember.skills?.map(
                                             (skill, index) => (
                                                  <SkillBar
                                                       key={index}
                                                       skill={skill.skill}
                                                       level={skill.level}
                                                  />
                                             )
                                        )}
                                   </div>

                                   <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                                             <Star className="w-6 h-6 text-purple-500" />
                                             Areas of Expertise
                                        </h3>
                                        <div className="space-y-6">
                                             {teamMember.expertise
                                                  ? teamMember.expertise.map(
                                                         (area, index) => (
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
                                                                   viewport={{
                                                                        once: true,
                                                                   }}
                                                                   transition={{
                                                                        duration: 0.3,
                                                                        delay:
                                                                             index *
                                                                             0.1,
                                                                   }}
                                                                   className="flex items-start p-4 bg-white rounded-xl shadow-sm"
                                                              >
                                                                   <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full mr-4">
                                                                        <Star className="h-5 w-5 text-white" />
                                                                   </div>
                                                                   <div>
                                                                        <h4 className="font-semibold text-gray-800 text-lg">
                                                                             {
                                                                                  area
                                                                             }
                                                                        </h4>
                                                                   </div>
                                                              </motion.div>
                                                         )
                                                    )
                                                  : [
                                                         "Search Engine Optimization",
                                                         "Content Strategy",
                                                         "Digital Marketing",
                                                         "Social Media Management",
                                                         "Analytics & Reporting",
                                                    ].map((area, index) => (
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
                                                              viewport={{
                                                                   once: true,
                                                              }}
                                                              transition={{
                                                                   duration: 0.3,
                                                                   delay:
                                                                        index *
                                                                        0.1,
                                                              }}
                                                              className="flex items-start p-4 bg-white rounded-xl shadow-sm"
                                                         >
                                                              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full mr-4">
                                                                   <Star className="h-5 w-5 text-white" />
                                                              </div>
                                                              <div>
                                                                   <h4 className="font-semibold text-gray-800 text-lg">
                                                                        {area}
                                                                   </h4>
                                                              </div>
                                                         </motion.div>
                                                    ))}
                                        </div>
                                   </div>
                              </div>
                         </motion.div>
                    </div>
               </div>

               <TestimonialSection />

               {/* Navigation */}
               <div className="border-t border-gray-200 py-8 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                              <motion.div whileHover={{ x: -3 }}>
                                   <Link
                                        href={`/team/${prevMember.slug}`}
                                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium"
                                   >
                                        <ChevronLeft className="h-5 w-5 mr-2" />
                                        <span>Previous: {prevMember.name}</span>
                                   </Link>
                              </motion.div>

                              <motion.div whileHover={{ y: -2 }}>
                                   <Link
                                        href="/team"
                                        className="text-blue-600 hover:text-blue-700 transition-colors px-6 py-3 border-2 border-blue-200 rounded-xl hover:bg-blue-50 font-medium"
                                   >
                                        View All Team Members
                                   </Link>
                              </motion.div>

                              <motion.div whileHover={{ x: 3 }}>
                                   <Link
                                        href={`/team/${nextMember.slug}`}
                                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium"
                                   >
                                        <span>Next: {nextMember.name}</span>
                                        <ChevronRight className="h-5 w-5 ml-2" />
                                   </Link>
                              </motion.div>
                         </div>
                    </div>
               </div>

               {/* Contact CTA Section */}
               <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                         >
                              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                                   Ready to work with {teamMember.name}?
                              </h2>
                              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                                   Get in touch today to discuss how{" "}
                                   {teamMember.name.split(" ")[0]} can help your
                                   business achieve its digital marketing goals
                                   and drive measurable results.
                              </p>
                              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                   >
                                        Schedule a Consultation
                                        <Calendar className="w-5 h-5" />
                                   </motion.button>
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-200 flex items-center justify-center gap-2"
                                   >
                                        Send Message
                                        <Mail className="w-5 h-5" />
                                   </motion.button>
                              </div>
                         </motion.div>
                    </div>
               </div>

               {/* Calendar Section */}
               <div className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                         >
                              <div className="w-full lg:w-1/2">
                                   <div className="flex items-center mb-8">
                                        <Calendar className="h-8 w-8 text-blue-500 mr-4" />
                                        <h2 className="text-3xl font-bold text-gray-800">
                                             Schedule a Meeting
                                        </h2>
                                   </div>
                                   <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                        Choose a convenient time to discuss your
                                        project with {teamMember.name}. Our
                                        calendar is updated in real-time to show
                                        availability and we'll confirm your
                                        appointment within 24 hours.
                                   </p>
                                   <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                                   >
                                        View Calendar
                                        <ArrowRight className="w-5 h-5" />
                                   </motion.button>
                              </div>

                              <div className="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                                   <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl mb-6">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                             April 2025
                                        </h3>
                                        <p className="text-gray-600">
                                             Select your preferred date
                                        </p>
                                   </div>
                                   <div className="grid grid-cols-7 gap-2">
                                        {[
                                             "M",
                                             "T",
                                             "W",
                                             "T",
                                             "F",
                                             "S",
                                             "S",
                                        ].map((day, i) => (
                                             <div
                                                  key={i}
                                                  className="text-center text-sm font-semibold text-gray-500 py-3"
                                             >
                                                  {day}
                                             </div>
                                        ))}
                                        {Array.from({ length: 30 }, (_, i) => (
                                             <motion.div
                                                  key={i}
                                                  whileHover={{
                                                       scale: 1.1,
                                                       backgroundColor:
                                                            "#EBF5FF",
                                                  }}
                                                  className={`text-center py-3 rounded-lg cursor-pointer font-medium transition-all duration-200 ${
                                                       [
                                                            2, 5, 12, 15, 22,
                                                            25,
                                                       ].includes(i)
                                                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                                                            : "text-gray-700 hover:bg-blue-50"
                                                  }`}
                                             >
                                                  {i + 1}
                                             </motion.div>
                                        ))}
                                   </div>
                              </div>
                         </motion.div>
                    </div>
               </div>
          </div>
     );
}
