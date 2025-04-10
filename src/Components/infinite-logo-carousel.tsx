/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import logo1 from "@/Images/logo1.png";
import logo2 from "@/Images/logo2.png";
import logo3 from "@/Images/logo3.png";
import logo4 from "@/Images/logo4.png";
import logo5 from "@/Images/logo5.png";
import logo6 from "@/Images/logo-6.png";

const logos = [
  { name: "University", url: logo1 },
  { name: "Academy", url: logo2 },
  { name: "University Academy", url: logo3 },
  { name: "Athletics", url: logo4 },
  { name: "University Shield", url: logo5 },
  { name: "Cross Sport", url: logo6 },
];

// Duplicate logos for infinite effect
const duplicatedLogos = [...logos, ...logos, ...logos];

export default function InfiniteLogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white dark:bg-black border-b border-[#F5F5F5] dark:border-[#1A1A1A]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-3 text-[#003C8F] dark:text-[#0084FF]"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We've helped <span className="font-bold text-[#0084FF]">200+</span>{" "}
            organizations achieve their digital marketing goals
          </motion.p>
        </div>

        <div className="relative overflow-hidden" ref={containerRef}>
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white dark:from-black to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white dark:from-black to-transparent"></div>

          {/* First row - moves left */}
          <motion.div
            className="flex py-4"
            initial={{ x: 0 }}
            animate={{ x: "-33.33%" }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 30,
              ease: "linear",
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-[150px] mx-6 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.url || "/placeholder.svg"}
                  alt={logo.name}
                  width={150}
                  height={80}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>

          {/* Second row - moves right */}
          <motion.div
            className="flex py-4"
            initial={{ x: "-33.33%" }}
            animate={{ x: 0 }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 30,
              ease: "linear",
            }}
          >
            {duplicatedLogos.reverse().map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-[150px] mx-6 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.url || "/placeholder.svg"}
                  alt={logo.name}
                  width={150}
                  height={80}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="px-6 py-2 bg-[#0084FF] hover:bg-[#003C8F] text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Join Our Client List
          </button>
        </motion.div>
      </div>
    </section>
  );
}
