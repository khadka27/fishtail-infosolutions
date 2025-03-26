"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo1 from "@/Images/logo1.png"
import logo2 from "@/Images/logo2.png"
import logo3 from "@/Images/logo3.png"
import logo4 from "@/Images/logo4.png"
import logo5 from "@/Images/logo5.png"
import logo6 from "@/Images/logo-6.png"

const logos = [
  {
    name: "University",
    url: logo1,
  },
  { name: "Academy", url: logo2 },
  {
    name: "University Academy",
    url: logo3,
  },
  {
    name: "Athletics",
    url: logo4,
  },
  {
    name: "University Shield",
    url: logo5,
  },
  {
    name: "Cross Sport",
    url: logo6,
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
                <Image
                  src={logo.url || "/placeholder.svg"}
                  alt={logo.name}
                  
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
