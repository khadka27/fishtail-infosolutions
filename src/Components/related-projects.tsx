"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/project-data"

export default function RelatedProjects({ currentProjectId }: { currentProjectId: string }) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  // Filter out current project and get 3 related projects
  const relatedProjects = projects
    .filter((project) => project.id !== currentProjectId && project.category === "Lead Generation")
    .slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
          className="bg-white rounded-xl shadow-sm overflow-hidden h-full"
        >
          <div className={`h-48 ${project.bgColor} relative overflow-hidden`}>
            <motion.div
              animate={{
                scale: hoveredProject === project.id ? 1.05 : 1,
              }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                unoptimized
                className="object-cover w-full h-full"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                {project.category}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
            >
              View Case Study
              <motion.span
                animate={{
                  x: hoveredProject === project.id ? 5 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
