import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectDetail from "@/Components/project-details"
import { getProjectById } from "@/data/project-data"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = getProjectById(params.id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} Case Study | Fishtail InfoSolutions`,
    description: project.description,
    openGraph: {
      title: `${project.title} Case Study | Fishtail InfoSolutions`,
      description: project.description,
      images: project.image,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study`,
      description: project.description,
      images: [project.image],
    },
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
