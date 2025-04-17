"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export default function ProjectCard({
  id,
  title,
  category,
  imageUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/projects/${id}`}>
      <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden h-48">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-blue-600 bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium"
              >
                View Project
              </motion.div>
            )}
          </div>
        </div>
        <div className="p-4 text-center">
          <h3 className="font-bold text-lg text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </motion.div>
    </Link>
  );
}
