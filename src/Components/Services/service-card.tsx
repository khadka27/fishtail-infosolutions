"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  bgColor: string
  learnMoreLink: string
}

export default function ServiceCard({ title, description, icon, bgColor, learnMoreLink }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`${bgColor} p-6 rounded-md overflow-hidden h-full flex flex-col`}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4">
        <img src={icon || "/placeholder.svg?height=60&width=60"} alt={title} className="w-16 h-16 object-contain" />
      </div>

      <h3 className="text-white text-xl font-medium mb-2">{title}</h3>

      <p className="text-white/80 text-sm mb-6 flex-grow">{description}</p>

      <Link href={learnMoreLink} className="inline-flex items-center text-white text-sm font-medium hover:underline">
        <span>Learn more</span>
        <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }} className="ml-1">
          →
        </motion.span>
      </Link>
    </motion.div>
  )
}

