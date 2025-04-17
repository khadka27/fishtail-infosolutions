"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface CategoryFilterProps {
  categories: string[]
  defaultCategory?: string
}

export default function CategoryFilter({ categories, defaultCategory = "All" }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
          onClick={() => setSelectedCategory(category)}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            selectedCategory === category ? "bg-[#0084FF] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
}
