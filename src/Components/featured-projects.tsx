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
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "tremely-designs",
    title: "Tremely Designs",
    category: "SEO Optimization",
    imageUrl:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "plainst-tech",
    title: "Plainst Tech",
    category: "Digital Marketing",
    imageUrl:
      "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "maindex-solutions",
    title: "Maindex Solutions",
    category: "Web Development",
    imageUrl:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "existernal-ltd",
    title: "Existernal Ltd.",
    category: "Analytics",
    imageUrl:
      "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "coderama",
    title: "Coderama",
    category: "App Development",
    imageUrl:
      "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=600",
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
