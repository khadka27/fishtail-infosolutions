"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

interface CaseStudyCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function CaseStudyCard({ title, description, image, link }: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-md overflow-hidden shadow-sm"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <Link href={link} className="inline-flex items-center text-blue-600 text-sm font-medium hover:underline">
          <span>View case study</span>
          <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }} className="ml-1">
            →
          </motion.span>
        </Link>
      </div>
    </motion.div>
  )
}

