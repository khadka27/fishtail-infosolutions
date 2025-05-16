"use client"

import { useEffect, useState } from "react"
import { Link } from "lucide-react"

interface TOCItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Find all headings in the article content
    const article = document.querySelector("article")
    if (!article) return

    const elements = Array.from(article.querySelectorAll("h2, h3, h4"))

    // Generate unique IDs for headings that don't have them
    elements.forEach((el, index) => {
      if (!el.id) {
        // Create a slug from the heading text
        const slug = el.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")

        // Ensure uniqueness by adding index if needed
        el.id = `heading-${slug}-${index}`
      }
    })

    // Create TOC items
    const items = elements.map((el) => {
      const level = Number.parseInt(el.tagName.substring(1)) // Get heading level (2 for h2, 3 for h3, etc.)
      return {
        id: el.id,
        text: el.textContent || "",
        level,
      }
    })

    setHeadings(items)

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

    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-2 text-[#003C8F] font-medium mb-3">
        <Link className="h-4 w-4" />
        <h3>Table of Contents</h3>
      </div>
      <nav>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li key={`toc-${heading.id}`} style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}>
              <a
                href={`#${heading.id}`}
                className={`block py-1 border-l-2 pl-3 hover:text-[#0084FF] transition-colors ${
                  activeId === heading.id
                    ? "border-[#0084FF] text-[#0084FF] font-medium"
                    : "border-gray-200 text-gray-600"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
