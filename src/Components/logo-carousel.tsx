/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type Logo = {
     name: string;
     image: any;
};

type LogoCarouselProps = {
     logos: Logo[];
};

export function LogoCarousel({ logos }: LogoCarouselProps) {
     const [currentPage, setCurrentPage] = useState(0);
     const [autoplay, setAutoplay] = useState(true);
     const [width, setWidth] = useState(0);
     const carousel = useRef<HTMLDivElement>(null);

     // Determine logos per page based on screen width
     const getLogosPerPage = () => {
          if (width < 640) return 2;
          if (width < 1024) return 3;
          return 6;
     };

     const logosPerPage = getLogosPerPage();
     const totalPages = Math.ceil(logos.length / logosPerPage);

     useEffect(() => {
          // Update width on mount and resize
          const handleResize = () => {
               setWidth(window.innerWidth);
          };

          handleResize(); // Set initial width
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
     }, []);

     useEffect(() => {
          if (!autoplay) return;

          const interval = setInterval(() => {
               setCurrentPage((prev) => (prev + 1) % totalPages);
          }, 3000);

          return () => clearInterval(interval);
     }, [autoplay, totalPages]);

     return (
          <div className="relative">
               <div
                    className="overflow-hidden"
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                    ref={carousel}
               >
                    <motion.div
                         className="flex"
                         initial={{ x: 0 }}
                         animate={{ x: `-${currentPage * 100}%` }}
                         transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                         <div className="flex min-w-full justify-around items-center">
                              {logos.map((logo, index) => (
                                   <motion.div
                                        key={index}
                                        className="flex justify-center px-4"
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        transition={{
                                             type: "spring",
                                             stiffness: 300,
                                        }}
                                   >
                                        <Image
                                             src={
                                                  logo.image ||
                                                  "/placeholder.svg"
                                             }
                                             alt={logo.name}
                                             width={120}
                                             height={80}
                                             className="opacity-60 hover:opacity-100 transition-opacity max-w-[100px] sm:max-w-[120px] filter grayscale hover:grayscale-0 duration-300"
                                        />
                                   </motion.div>
                              ))}
                         </div>
                    </motion.div>
               </div>

               <div className="flex justify-center mt-6">
                    {Array.from({ length: totalPages }).map((_, index) => (
                         <motion.button
                              key={index}
                              className={`w-2 h-2 rounded-full mx-1 ${
                                   currentPage === index
                                        ? "bg-blue-500"
                                        : "bg-gray-300"
                              }`}
                              onClick={() => setCurrentPage(index)}
                              aria-label={`Go to slide ${index + 1}`}
                              whileHover={{ scale: 1.5 }}
                              whileTap={{ scale: 0.9 }}
                         />
                    ))}
               </div>
          </div>
     );
}
