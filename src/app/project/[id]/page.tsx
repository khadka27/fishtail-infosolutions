import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/Components/project-details";
import { getProjectById } from "@/data/project-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const project = getProjectById((await params).id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  // Convert image to string for metadata
  const imageUrl =
    typeof project.image === "string" ? project.image : project.image.src;

  return {
    title: `${project.title} Case Study | Fishtail InfoSolutions`,
    description: project.description,
    openGraph: {
      title: `${project.title} Case Study | Fishtail InfoSolutions`,
      description: project.description,
      images: [imageUrl],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study`,
      description: project.description,
      images: [imageUrl],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const project = getProjectById((await params).id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
