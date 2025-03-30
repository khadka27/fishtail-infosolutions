"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface BlogPostCardProps {
  id: string
  title: string
  date: string
  excerpt: string
  imageUrl: any
  onClick: (id: string) => void
}

class BlogPostCard extends React.Component<BlogPostCardProps> {
  state = {
    isHovered: false,
  }

  setIsHovered = (value: boolean) => {
    this.setState({ isHovered: value })
  }

  render() {
    const { id, title, date, excerpt, imageUrl, onClick } = this.props
    const { isHovered } = this.state

    return (
      <div
        className="flex flex-col md:flex-row gap-6 mb-8 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
        onMouseEnter={() => this.setIsHovered(true)}
        onMouseLeave={() => this.setIsHovered(false)}
        onClick={() => onClick(id)}
      >
        <div className="md:w-1/3 overflow-hidden">
          <motion.div className="h-48 md:h-full w-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              className="ml-10 object-cover"
              width={250}
              height={250}
            />
          </motion.div>
        </div>

        <div className="md:w-2/3 p-6">
          <h2 className="text-xl md:text-3xl  mb-2 hover:text-blue-600 transition-colors">{title}</h2>
          <p className="text-gray-500 text-sm mb-3">{date}</p>
          <p className="text-gray-700 mb-4">{excerpt}</p>
          <div className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors">
            Continue reading
            <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.span>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPostCard

