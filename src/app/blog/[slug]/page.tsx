// src/app/project/[id]/page.tsx
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlogPageComponent from "@/Components/blog-page";

// Sample projects data
const projects = [
  {
    id: "project-1",
    title: "Project One",
    description: "This is project one description.",
  },
  {
    id: "project-2",
    title: "Project Two",
    description: "This is project two description.",
  },
  // ... add more projects if needed
];

async function getProject(id: string) {
  return projects.find((project) => project.id === id);
}

// Generate static params for pre-rendering
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }
  return {
    title: `${project.title} | My Projects`,
    description: project.description,
  };
}

// Loading component
function Loading() {
  return <div className="p-4">Loading project...</div>;
}

// Project page content component
function ProjectPage({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-8">{project.description}</p>
      <BlogPageComponent />
    </div>
  );
}

// Main page component
export default async function ProjectPageWrapper({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) {
    notFound();
  }
  return (
    <Suspense fallback={<Loading />}>
      <ProjectPage project={project} />
    </Suspense>
  );
}
