"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const logos = [
  {
    name: "University",
    url: "/placeholder.svg?height=80&width=120&text=University",
  },
  { name: "Academy", url: "/placeholder.svg?height=80&width=120&text=Academy" },
  {
    name: "University Academy",
    url: "/placeholder.svg?height=80&width=120&text=University+Academy",
  },
  {
    name: "Athletics",
    url: "/placeholder.svg?height=80&width=120&text=Athletics",
  },
  {
    name: "University Shield",
    url: "/placeholder.svg?height=80&width=120&text=University+Shield",
  },
  {
    name: "Cross Sport",
    url: "/placeholder.svg?height=80&width=120&text=Cross+Sport",
  },
];

export default function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={logo.url || "/placeholder.svg"}
                  alt={logo.name}
                  className="max-w-full max-h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
