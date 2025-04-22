import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, Calendar, Clock, MapPin, Award, ChevronRight } from "lucide-react"
import { projects,getProjectById, getRelatedProjects } from "@/data/project-data"
 // Import projects

// Generate metadata for each project dynamically
export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const project = getProjectById(params.id)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | ${project.category} Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${project.category} Case Study`,
      description: project.description,
      images: [
        {
          url: typeof project.image === "string" ? project.image : "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

// Default page component
export default function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(params.id, 3)

  return (
    <div className="bg-gray-50 min-h-screen pb-16 px-20">
      {/* Hero Section */}
      <div className={`${project.bgColor} py-16 md:py-24`}>
        <div className="container mx-auto px-4">
          <Link
            href="/project"
            className="inline-flex items-center text-blue-800 hover:text-blue-600 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-600/10 backdrop-blur-sm rounded-full text-sm text-blue-800 mb-4">
                {project.category}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">{project.title}</h1>
              <p className="text-blue-800/80 text-lg mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-blue-800/70 text-sm">Location</div>
                  <div className="text-blue-900 font-medium flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    {project.location}
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-blue-800/70 text-sm">Duration</div>
                  <div className="text-blue-900 font-medium flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {project.duration}
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-blue-800/70 text-sm">Results</div>
                  <div className="text-blue-900 font-medium flex items-center">
                    <Award className="mr-2 h-4 w-4" />
                    {project.stats}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-12">
        <div className="max-w-4xl mx-auto">
          {/* Overview Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Overview</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Client</h3>
              <p className="text-gray-600">{project.client}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Objective</h3>
              <p className="text-gray-600">{project.objective}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">The Challenge</h3>
              <p className="text-gray-600">{project.challenges}</p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-8">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <span>Started: {project.startDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                <span>Status: {project.endDate === "Ongoing" ? "Ongoing" : "Completed"}</span>
              </div>
            </div>
          </div>

          {/* Strategies Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Approach</h2>

            <div className="space-y-8">
              {project.strategies.map((strategy, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Results</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {project.results.map((result, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{result.value}</div>
                  <div className="font-medium text-gray-800 mb-1">{result.title}</div>
                  <div className="text-sm text-gray-600">{result.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Conclusion</h3>
              <p className="text-gray-600">{project.conclusion}</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to achieve similar results?</h2>
            <p className="text-white/90 mb-6">
              Let's discuss how our proven strategies can help your educational institution grow.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-md"
            >
              Get in Touch
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Related Case Studies</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/project/${relatedProject.id}`}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className={`${relatedProject.bgColor} p-4 flex justify-center h-40`}>
                  <Image
                    src={relatedProject.image || "/placeholder.svg"}
                    alt={relatedProject.title}
                    width={200}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-800 mb-2">
                    {relatedProject.category}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{relatedProject.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProject.description}</p>
                  <div className="inline-flex items-center text-blue-600 text-sm font-medium">
                    View Case Study
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project: { id: string }) => ({
    id: project.id,
  }))
}
