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
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );
  const [filteredMembers, setFilteredMembers] = useState(teamMembers);
  const [isLoaded, setIsLoaded] = useState(false);

  // Filter team members based on search term and selected department
  useEffect(() => {
    const filtered = teamMembers.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.position.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment =
        !selectedDepartment || member.department === selectedDepartment;
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
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
          Meet Our Expert Team
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our talented professionals are dedicated to helping your business
          succeed online with innovative digital marketing strategies.
        </p>
      </motion.div>

      {/* Filters Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-6 rounded-xl shadow-sm"
      >
        {/* Search */}
        <div className="relative w-full md:w-auto flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by name or position..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </div>

        {/* Department Filter */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <Filter className="text-gray-500 h-5 w-5" />
          <span className="text-gray-600 mr-2">Filter by:</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDepartment(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedDepartment === null
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDepartment === dept
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 4) + 0.3 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={`/team/${member.slug}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <div className="aspect-w-1 aspect-h-1">
                      <Image
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        width={400}
                        height={400}
                        unoptimized
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex justify-center space-x-3">
                          {member.email && (
                            <motion.a
                              href={`mailto:${member.email}`}
                              whileHover={{ y: -3 }}
                              className="bg-white/90 p-2 rounded-full text-gray-700 hover:bg-blue-500 hover:text-white transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Mail className="h-4 w-4" />
                            </motion.a>
                          )}
                          {member.linkedin && (
                            <motion.a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ y: -3 }}
                              className="bg-white/90 p-2 rounded-full text-gray-700 hover:bg-blue-500 hover:text-white transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Linkedin className="h-4 w-4" />
                            </motion.a>
                          )}
                          {member.twitter && (
                            <motion.a
                              href={member.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ y: -3 }}
                              className="bg-white/90 p-2 rounded-full text-gray-700 hover:bg-blue-500 hover:text-white transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Twitter className="h-4 w-4" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 text-sm mb-3">
                      {member.position}
                    </p>
                    {member.department && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {member.department}
                      </span>
                    )}
                    <div className="mt-4 flex items-center text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                      <span>View Profile</span>
                      <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
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
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our growing
          team. Check out our current openings and apply today!
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
