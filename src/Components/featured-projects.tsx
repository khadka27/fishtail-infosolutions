"use client";

import { useState } from "react";
import ProjectCard from "./project-card";
import { Button } from "@/Components/ui/button";

// Sample project data
const projects = [
  {
    id: "opertray-division",
    title: "Opertray Division",
    category: "Web Design",
    imageUrl:
      "/placeholder.svg?height=300&width=400&text=Opertray+Division&bg=36b9cc",
  },
  {
    id: "tremely-designs",
    title: "Tremely Designs",
    category: "SEO Optimization",
    imageUrl:
      "/placeholder.svg?height=300&width=400&text=Tremely+Designs&bg=2c5282",
  },
  {
    id: "plainst-tech",
    title: "Plainst Tech",
    category: "Digital Marketing",
    imageUrl:
      "/placeholder.svg?height=300&width=400&text=Plainst+Tech&bg=b5c731",
  },
  {
    id: "maindex-solutions",
    title: "Maindex Solutions",
    category: "Web Development",
    imageUrl:
      "/placeholder.svg?height=300&width=400&text=Maindex+Solutions&bg=4299e1",
  },
  {
    id: "existernal-ltd",
    title: "Existernal Ltd.",
    category: "Analytics",
    imageUrl:
      "/placeholder.svg?height=300&width=400&text=Existernal+Ltd&bg=9dc431",
  },
  {
    id: "coderama",
    title: "Coderama",
    category: "App Development",
    imageUrl: "/placeholder.svg?height=300&width=400&text=Coderama&bg=ed8936",
  },
];

// All unique categories
const allCategories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
