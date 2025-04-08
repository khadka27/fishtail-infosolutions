"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo1 from "Images/logo1.png";
import logo2 from "Images/logo2.png";
import logo3 from "Images/logo3.png";
import logo4 from "Images/logo4.png";
import logo5 from "Images/logo5.png";
import logo6 from "Images/logo6.png";

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
    <section className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white">
      <div className="container mx-auto">
        <div className="overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={logo.url || "/placeholder.svg"}
                  alt={logo.name}
                  width={150}
                  height={150}
                  className="w-16 h-auto sm:w-20 md:w-24 lg:w-32"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
