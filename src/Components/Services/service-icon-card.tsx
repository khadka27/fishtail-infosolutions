"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

interface ServiceIconCardProps {
  title: string
  description: string
  icon: React.ReactNode
  learnMoreLink: string
}

export default function ServiceIconCard({ title, description, icon, learnMoreLink }: ServiceIconCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex flex-col items-center text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-full p-4 mb-4 shadow-md">{icon}</div>

      <h3 className="text-white text-lg font-medium mb-2">{title}</h3>

      <p className="text-white/80 text-sm mb-4">{description}</p>

      <Link href={learnMoreLink}>
        <motion.button
          className="text-white text-sm border border-white/30 rounded-md px-3 py-1 hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn more
        </motion.button>
      </Link>
    </div>
  )
}

