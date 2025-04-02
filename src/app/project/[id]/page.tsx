import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projects } from "@/lib/project-data"

// Generate metadata for each project dynamically
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | ${project.category} Case Study`,
    description:
      project.description ||
      `Explore our ${project.category} case study for ${project.title}. See how we delivered exceptional results through our digital marketing expertise.`,
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/projects" className="text-blue-500 hover:underline mb-8 inline-block">
        ← Back to Case Studies
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
        <div className={`${project.bgColor} p-6 flex justify-center`}>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={500}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <div className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm mb-6">
            {project.category}
          </div>

          <p className="text-gray-700 mb-6">{project.description || "Detailed case study information coming soon."}</p>

          {/* Additional project details would go here */}
          <div className="border-t pt-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Project Details</h2>
            {/* Project details content */}
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

