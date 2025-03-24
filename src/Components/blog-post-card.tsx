"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface BlogPostCardProps {
  id: string
  title: string
  date: string
  excerpt: string
  imageUrl: string
}

export default function BlogPostCard({ id, title, date, excerpt, imageUrl }: BlogPostCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex flex-col md:flex-row gap-6 mb-8 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/blog/${id}`} className="md:w-1/3 overflow-hidden">
        <motion.div className="h-48 md:h-full w-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </motion.div>
      </Link>

      <div className="md:w-2/3 p-6">
        <Link href={`/blog/${id}`}>
          <h2 className="text-xl md:text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">{title}</h2>
        </Link>
        <p className="text-gray-500 text-sm mb-3">{date}</p>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <Link
          href={`/blog/${id}`}
          className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors"
        >
          Continue reading
          <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.span>
        </Link>
      </div>
    </div>
  )
}

