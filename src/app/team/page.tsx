/* eslint-disable react/no-unescaped-entities */

"use client";

import { useState, useEffect } from "react";
// import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
     Search,
     Filter,
     ChevronRight,
     Mail,
     Linkedin,
     Twitter,
     Users,
} from "lucide-react";
import { teamMembers } from "@/data/team-members";

// export const metadata: Metadata = {
//   title: "Our Team | Meet the Experts",
//   description:
//     "Meet our team of digital marketing experts who are passionate about helping businesses grow online through innovative strategies and solutions.",
// };

// Get all unique departments from team members
const departments = Array.from(
     new Set(teamMembers.map((member) => member.department))
).filter(Boolean) as string[];

export default function TeamPage() {
     const [searchTerm, setSearchTerm] = useState("");
     const [selectedDepartment, setSelectedDepartment] = useState<
          string | null
     >(null);
     const [filteredMembers, setFilteredMembers] = useState(teamMembers);
     const [isLoaded, setIsLoaded] = useState(false);

     // Filter team members based on search term and selected department
     useEffect(() => {
          const filtered = teamMembers.filter((member) => {
               const matchesSearch =
                    member.name
                         .toLowerCase()
                         .includes(searchTerm.toLowerCase()) ||
                    member.position
                         .toLowerCase()
                         .includes(searchTerm.toLowerCase());
               const matchesDepartment =
                    !selectedDepartment ||
                    member.department === selectedDepartment;
               return matchesSearch && matchesDepartment;
          });
          setFilteredMembers(filtered);
     }, [searchTerm, selectedDepartment]);

     // Set loaded state after initial render for animations
     useEffect(() => {
          setIsLoaded(true);
     }, []);

     return (
          <div className="max-w-7xl mx-auto py-12 px-4 bg-gray-50">
               {/* Compact Hero Section */}
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
               >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-blue-700 text-sm font-medium mb-6">
                         <Users className="w-4 h-4" />
                         Our Team
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4">
                         Meet Our
                         <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {" "}
                              Expert Team
                         </span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                         Our talented professionals are dedicated to helping
                         your business succeed online with innovative digital
                         marketing strategies.
                    </p>
               </motion.div>

               {/* Compact Filters Section */}
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                         opacity: isLoaded ? 1 : 0,
                         y: isLoaded ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 space-y-4"
               >
                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto">
                         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                         <input
                              type="text"
                              placeholder="Search team members..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white shadow-sm"
                         />
                    </div>

                    {/* Department Filter */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                         <div className="flex items-center gap-2 text-gray-600 text-sm">
                              <Filter className="h-4 w-4" />
                              <span>Filter:</span>
                         </div>
                         <div className="flex flex-wrap justify-center gap-2">
                              <button
                                   onClick={() => setSelectedDepartment(null)}
                                   className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                                        selectedDepartment === null
                                             ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                                             : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 hover:border-gray-300"
                                   }`}
                              >
                                   All
                              </button>
                              {departments.map((dept) => (
                                   <button
                                        key={dept}
                                        onClick={() =>
                                             setSelectedDepartment(dept)
                                        }
                                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                                             selectedDepartment === dept
                                                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                                                  : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 hover:border-gray-300"
                                        }`}
                                   >
                                        {dept}
                                   </button>
                              ))}
                         </div>
                    </div>
               </motion.div>

               {/* Team Members Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredMembers.length > 0 ? (
                         filteredMembers.map((member, index) => (
                              <motion.div
                                   key={member.slug}
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{
                                        opacity: isLoaded ? 1 : 0,
                                        y: isLoaded ? 0 : 20,
                                   }}
                                   transition={{
                                        duration: 0.5,
                                        delay: 0.1 * (index % 4) + 0.3,
                                   }}
                                   whileHover={{ y: -5, scale: 1.02 }}
                                   className="group"
                              >
                                   <Link
                                        href={`/team/${member.slug}`}
                                        className="block"
                                   >
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                                             {/* Image Section */}
                                             <div className="relative overflow-hidden h-64 sm:h-72">
                                                  <Image
                                                       src={
                                                            member.avatar ||
                                                            "/placeholder.svg"
                                                       }
                                                       alt={member.name}
                                                       width={400}
                                                       height={400}
                                                       unoptimized
                                                       className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                                  />

                                                  {/* Gradient Overlay */}
                                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                                                  {/* Social Links Overlay - Now at Bottom */}
                                                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                       <div className="flex justify-center gap-3">
                                                            {member.email && (
                                                                 <motion.a
                                                                      href={`mailto:${member.email}`}
                                                                      initial={{
                                                                           scale: 0,
                                                                           y: 20,
                                                                      }}
                                                                      animate={{
                                                                           scale: 1,
                                                                           y: 0,
                                                                      }}
                                                                      whileHover={{
                                                                           scale: 1.1,
                                                                           y: -2,
                                                                      }}
                                                                      className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-200 shadow-lg"
                                                                      onClick={(
                                                                           e
                                                                      ) =>
                                                                           e.stopPropagation()
                                                                      }
                                                                 >
                                                                      <Mail className="h-4 w-4" />
                                                                 </motion.a>
                                                            )}
                                                            {member.linkedin && (
                                                                 <motion.a
                                                                      href={
                                                                           member.linkedin
                                                                      }
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      initial={{
                                                                           scale: 0,
                                                                           y: 20,
                                                                      }}
                                                                      animate={{
                                                                           scale: 1,
                                                                           y: 0,
                                                                      }}
                                                                      whileHover={{
                                                                           scale: 1.1,
                                                                           y: -2,
                                                                      }}
                                                                      className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-lg"
                                                                      onClick={(
                                                                           e
                                                                      ) =>
                                                                           e.stopPropagation()
                                                                      }
                                                                 >
                                                                      <Linkedin className="h-4 w-4" />
                                                                 </motion.a>
                                                            )}
                                                            {member.twitter && (
                                                                 <motion.a
                                                                      href={
                                                                           member.twitter
                                                                      }
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      initial={{
                                                                           scale: 0,
                                                                           y: 20,
                                                                      }}
                                                                      animate={{
                                                                           scale: 1,
                                                                           y: 0,
                                                                      }}
                                                                      whileHover={{
                                                                           scale: 1.1,
                                                                           y: -2,
                                                                      }}
                                                                      className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-700 hover:bg-blue-400 hover:text-white transition-all duration-200 shadow-lg"
                                                                      onClick={(
                                                                           e
                                                                      ) =>
                                                                           e.stopPropagation()
                                                                      }
                                                                 >
                                                                      <Twitter className="h-4 w-4" />
                                                                 </motion.a>
                                                            )}
                                                       </div>
                                                  </div>
                                             </div>

                                             {/* Content Section */}
                                             <div className="p-4 sm:p-6">
                                                  <div className="text-center mb-4">
                                                       <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                            {member.name}
                                                       </h3>
                                                       <p className="text-blue-600 text-sm sm:text-base font-medium mb-3">
                                                            {member.position}
                                                       </p>

                                                       {member.department && (
                                                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
                                                                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                                 {
                                                                      member.department
                                                                 }
                                                            </div>
                                                       )}
                                                  </div>

                                                  {/* View Profile CTA */}
                                                  <div className="flex items-center justify-center">
                                                       <div className="group/cta inline-flex items-center gap-2 text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-all duration-300 hover:gap-3">
                                                            <span>
                                                                 View Profile
                                                            </span>
                                                            <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover/cta:translate-x-2 group-hover/cta:scale-110 transition-all duration-300" />
                                                       </div>
                                                  </div>
                                             </div>

                                             {/* Decorative Bottom Border */}
                                             <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                        </div>
                                   </Link>
                              </motion.div>
                         ))
                    ) : (
                         <div className="col-span-full py-12 text-center">
                              <p className="text-gray-500 text-lg">
                                   No team members found matching your criteria.
                              </p>
                              <button
                                   onClick={() => {
                                        setSearchTerm("");
                                        setSelectedDepartment(null);
                                   }}
                                   className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                              >
                                   Reset Filters
                              </button>
                         </div>
                    )}
               </div>

               {/* Join Our Team Section */}
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                         opacity: isLoaded ? 1 : 0,
                         y: isLoaded ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl"
               >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                         Join Our Team
                    </h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                         We're always looking for talented individuals to join
                         our growing team. Check out our current openings and
                         apply today!
                    </p>
                    <Link
                         href="/careers"
                         className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
                    >
                         View Open Positions
                         <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
               </motion.div>

               {/* Back Link */}
               <div className="mt-12 text-center">
                    <Link
                         href="/about"
                         className="text-blue-500 hover:text-blue-700 hover:underline inline-flex items-center"
                    >
                         <span>Back to About Page</span>
                    </Link>
               </div>
          </div>
     );
}
