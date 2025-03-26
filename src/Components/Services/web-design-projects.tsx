"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { cn } from "@/lib/utils"

// Project data
const projects = [
  {
    id: "opertray-division",
    title: "Opertray Division",
    description: 'This website achieved Google ranking in four months: Ranks #1-#3 for keyword "Opertray"',
    imageUrl: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-cyan-500",
  },
  {
    id: "tremely-designs",
    title: "Tremely Designs",
    description: "This site applies a smart SEO strategy to acquire online clients via long-tail search...",
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-blue-800",
  },
  {
    id: "plainst-tech",
    title: "Plainst Tech",
    description: "Currently, 65% of the total traffic on the site and most of the online...",
    imageUrl: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-lime-500",
  },
  {
    id: "maindex-solutions",
    title: "Maindex Solutions",
    description: "Increased conversion rates by 45% through strategic UX improvements and responsive design",
    imageUrl: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-sky-500",
  },
  {
    id: "existernal-ltd",
    title: "Existernal Ltd.",
    description: "Implemented advanced analytics tracking resulting in 30% increase in user engagement",
    imageUrl: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-emerald-600",
  },
  {
    id: "coderama",
    title: "Coderama",
    description: "Mobile-first approach led to 50,000+ app downloads in the first month of launch",
    imageUrl: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-orange-500",
  },
]

export default function WebDesignProjects() {
  const [currentPage, setCurrentPage] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const projectsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }

  const totalPages = Math.ceil(projects.length / projectsPerPage.desktop)

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const visibleProjects = () => {
    const start = currentPage * projectsPerPage.desktop
    return projects.slice(start, start + projectsPerPage.desktop)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-10">
          <h2 className="text-3xl font-light text-gray-600">Our web design projects</h2>
          <Link href="/projects" className="text-blue-500 hover:text-blue-700 transition-colors flex items-center">
            See all projects
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Carousel (1 item) */}
        <div className="md:hidden relative">
          <div className="overflow-hidden" ref={containerRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-2">
                  <ProjectCard
                    project={project}
                    isHovered={hoveredProject === project.id}
                    onHover={() => setHoveredProject(project.id)}
                    onLeave={() => setHoveredProject(null)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(projects.length / projectsPerPage.mobile) }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  currentPage === index ? "bg-blue-600" : "bg-gray-300",
                )}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Tablet Carousel (2 items) */}
        <div className="hidden md:block lg:hidden relative">
          <div className="overflow-hidden" ref={containerRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(projects.length / projectsPerPage.tablet) }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="flex gap-6">
                    {projects
                      .slice(pageIndex * projectsPerPage.tablet, (pageIndex + 1) * projectsPerPage.tablet)
                      .map((project) => (
                        <div key={project.id} className="w-1/2">
                          <ProjectCard
                            project={project}
                            isHovered={hoveredProject === project.id}
                            onHover={() => setHoveredProject(project.id)}
                            onLeave={() => setHoveredProject(null)}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(projects.length / projectsPerPage.tablet) }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  currentPage === index ? "bg-blue-600" : "bg-gray-300",
                )}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid (3 items) */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-3 gap-6">
            {visibleProjects().map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredProject === project.id}
                onHover={() => setHoveredProject(project.id)}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              <button
                onClick={handlePrevPage}
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors self-center",
                    currentPage === index ? "bg-blue-600" : "bg-gray-300",
                  )}
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}

              <button
                onClick={handleNextPage}
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        {/* Buy Theme Banner */}
        <div className="mt-16 relative">
          <div className="absolute right-0 top-0 z-10">
            <div className="bg-lime-500 text-white px-4 py-1 text-sm font-bold">SALE</div>
          </div>
          <Link href="#" className="block">
            <Button className="w-full bg-lime-500 hover:bg-lime-600 text-white py-3 text-lg">
              Buy this SEO WP theme
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    imageUrl: string
    bgColor: string
  }
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

function ProjectCard({ project, isHovered, onHover, onLeave }: ProjectCardProps) {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
      whileHover={{ y: -5 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Link href={`/projects/${project.id}`} className="block">
        <div className={`${project.bgColor} h-48 relative overflow-hidden`}>
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-4 transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        </div>
        <div className="bg-white p-6">
          <h3 className="text-xl font-medium text-gray-800 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm">{project.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}

