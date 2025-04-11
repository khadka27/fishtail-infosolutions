"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getRelatedProjects } from "@/data/project-data";
import type { Project } from "@/data/type";

export default function RelatedProjects({
  currentProjectId,
}: {
  currentProjectId: string;
}) {
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    const projects = getRelatedProjects(currentProjectId, 3);
    setRelatedProjects(projects);
  }, [currentProjectId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <Link href={`/project/${project.id}`}>
            <div
              className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${project.bgColor}`}
            >
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover"
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 rounded-md text-xs font-medium">
                  {project.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">
                    {project.stats}
                  </span>
                  <span className="text-sm text-gray-500">
                    View Case Study →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
