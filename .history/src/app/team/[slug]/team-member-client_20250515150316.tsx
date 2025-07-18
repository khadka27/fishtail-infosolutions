
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
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
} from "lucide-react"
import type { TeamMember } from "@/data/team-members"
import TestimonialSection from "@/Components/testimonial-section"

// Skills component
const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-blue-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  )
}

interface TeamMemberClientProps {
  teamMember: TeamMember
  prevMember: TeamMember
  nextMember: TeamMember
}

export default function TeamMemberClient({ teamMember, prevMember, nextMember }: TeamMemberClientProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])




  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 items-center"
          >
            {/* Profile Image - Left Column */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-full transform translate-x-4 translate-y-4 -z-10"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <Image
                    src={teamMember.avatar || "/placeholder.svg"}
                    alt={teamMember.name}
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-full shadow-xl"
                    unoptimized
                  />
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center mt-6 space-x-4">
                <motion.a
                  whileHover={{ y: -3, color: "#0077B5" }}
                  href={teamMember.linkedin}
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, color: "#1DA1F2" }}
                  href={teamMember.twitter}
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, color: "#4267B2" }}
                  href={teamMember.facebook}
                  className="text-gray-500 hover:text-blue-800 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, color: "#EA4335" }}
                  href={`mailto:${teamMember.email}`}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </div>

            {/* Profile Content - Right Column */}
            <div className="w-full md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  {teamMember.position}
                </div>
                <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">{teamMember.name}</h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {teamMember.bio ||
                    "Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-5 w-5 mr-2 text-blue-500" />
                    <span>{teamMember.experience ?? "0+ years experience"}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 mr-2 text-blue-500" />
                    <span>Google Analytics Certified</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                    <span>{teamMember.projects ?? "Working projects"}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md"
                >
                  Contact {teamMember.name.split(" ")[0]}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills & Expertise Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-light text-gray-800 mb-12 text-center">Skills & Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-6">Core Competencies</h3>
                {teamMember.skills?.map((skill, index) => (
                  <SkillBar key={index} skill={skill.skill} level={skill.level} />
                ))}
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-6">Areas of Expertise</h3>
                <div className="space-y-4">
                  {teamMember.expertise
                    ? teamMember.expertise.map((area, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="bg-blue-100 p-2 rounded-full mr-4">
                            <Star className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{area}</h4>
                          </div>
                        </motion.div>
                      ))
                    : [
                        "Search Engine Optimization",
                        "Content Strategy",
                        "Digital Marketing",
                        "Social Media Management",
                        "Analytics & Reporting",
                      ].map((area, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="bg-blue-100 p-2 rounded-full mr-4">
                            <Star className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{area}</h4>
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
      <div className="border-t border-b border-gray-200 py-4 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div whileHover={{ x: -3 }}>
              <Link
                href={`/team/${prevMember.slug}`}
                className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span>Previous Team Member</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }}>
              <Link
                href="/team"
                className="text-blue-500 hover:text-blue-700 transition-colors px-4 py-2 border border-blue-200 rounded-md hover:bg-blue-50"
              >
                All Team Members
              </Link>
            </motion.div>

            <motion.div whileHover={{ x: 3 }}>
              <Link
                href={`/team/${nextMember.slug}`}
                className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
              >
                <span>Next Team Member</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-light text-gray-800 mb-6">Ready to work with {teamMember.name}?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch today to discuss how {teamMember.name.split(" ")[0]} can help your business achieve its
              digital marketing goals and drive measurable results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-6">
                <Calendar className="h-6 w-6 text-blue-500 mr-3" />
                <h2 className="text-2xl font-light text-gray-800">Schedule a Meeting</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Choose a convenient time to discuss your project with {teamMember.name}. Our calendar is updated in
                real-time to show availability.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors shadow-md flex items-center"
              >
                View Calendar <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>

            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="text-center p-4 bg-blue-50 rounded-md mb-4">
                <h3 className="font-medium text-gray-800">April 2025</h3>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                  <div key={i} className="text-center text-sm text-gray-500 py-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 30 }, (_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, backgroundColor: "#EBF5FF" }}
                    className={`text-center py-2 rounded-md cursor-pointer ${
                      [2, 5, 12, 15, 22, 25].includes(i) ? "bg-blue-100 text-blue-600" : "text-gray-700"
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
  )
}
