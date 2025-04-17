"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    // Find all headings in the article
    const articleHeadings = Array.from(document.querySelectorAll("h2, h3, h4")).map((heading) => {
      // Add IDs to headings if they don't have one
      if (!heading.id) {
        const id =
          heading.textContent
            ?.toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "") || `heading-${Math.random().toString(36).substr(2, 9)}`
        heading.id = id
      }

      return {
        id: heading.id,
        text: heading.textContent || "",
        level: Number.parseInt(heading.tagName.substring(1)), // Get the heading level (2 for h2, 3 for h3, etc.)
      }
    })

    setHeadings(articleHeadings)

    // Set up intersection observer to highlight active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    // Observe all headings
    articleHeadings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => {
      articleHeadings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 p-4 rounded-lg"
    >
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Table of Contents</h3>
      <nav>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHeading(heading.id)
                }}
                className={`block py-1 border-l-2 pl-2 hover:text-[#0084FF] transition-colors ${
                  activeId === heading.id
                    ? "border-[#0084FF] text-[#0084FF] font-medium"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  )
}
