/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link"; // Import Link from next/link
// import casestudy1 from "@/Images/case1.png";
// import casestudy2 from "@/Images/case2.png";
// import casestudy3 from "@/Images/case3.png";
// import casestudy4 from "@/Images/case1.png"; // Replace with your actual 4th image
// import casestudy5 from "@/Images/case2.png"; // Replace with your actual 5th image
// import casestudy6 from "@/Images/case3.png"; // Replace with your actual 6th image

// // Define case study data
// const caseStudies = [
//   [
//     {
//       image: casestudy1,
//       title: "Openray Division",
//       description:
//         "This website achieved 45% growth in organic traffic year-over-year.",
//       bgColor: "bg-blue-400",
//     },
//     {
//       image: casestudy2,
//       title: "Timely Designs",
//       description:
//         "This site applied a mobile-first strategy to improve conversions.",
//       bgColor: "bg-blue-600",
//     },
//     {
//       image: casestudy3,
//       title: "Planet Tech",
//       description:
//         "Capturing 65% of the market through a targeted SEO strategy that drives organic growth, improves search visibility.",
//       bgColor: "bg-blue-400",
//     },
//   ],
//   [
//     {
//       image: casestudy4,
//       title: "Tremely Designs",
//       description:
//         "This site applies a smart SEO strategy to acquire online clients via long-tail search.",
//       bgColor: "bg-blue-600",
//     },
//     {
//       image: casestudy5,
//       title: "Plainst Tech",
//       description:
//         "Currently, 65% of the total traffic on the site and most of the online.",
//       bgColor: "bg-blue-400",
//     },
//     {
//       image: casestudy6,
//       title: "Maindex Solutions",
//       description:
//         "55% of sales come from organic search. Search traffic is the biggest revenue source.",
//       bgColor: "bg-blue-600",
//     },
//   ],
// ];

// export function CaseStudiesSection() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const totalSlides = caseStudies.length;

//   const goToSlide = (index: number) => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveIndex(index);
//     setTimeout(() => setIsAnimating(false), 500); // Match this with your transition duration
//   };

//   return (
//     <section className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-800">
//       <div className="container ">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-2xl font-bold text-white">Our case studies</h2>
//           {/* Replace <a> with <Link> */}
//           <Link
//             href="/project"
//             className="text-sm text-gray-300 hover:text-white transition-colors"
//           >
//             See all projects
//           </Link>
//         </div>

//         <div className="relative overflow-hidden">
//           <div
//             className="transition-transform duration-500 ease-in-out flex"
//             style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//           >
//             {caseStudies.map((slideGroup, slideIndex) => (
//               <div
//                 key={slideIndex}
//                 className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6"
//               >
//                 {slideGroup.map((study, studyIndex) => (
//                   <div
//                     key={studyIndex}
//                     className={`bg-white rounded-lg overflow-hidden`}
//                   >
//                     <Image
//                       src={study.image || "/placeholder.svg"}
//                       alt={`Case Study ${studyIndex + 1}`}
//                       width={400}
//                       height={200}
//                       className="w-full"
//                     />
//                     <div className="p-6 bg-white text-gray-800">
//                       <h3 className="font-semibold mb-2">{study.title}</h3>
//                       <p className="text-sm text-gray-600">
//                         {study.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>

//           {/* Dots navigation */}
//           <div className="flex justify-center mt-8 space-x-2">
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-colors ${
//                   activeIndex === index
//                     ? "bg-white"
//                     : "bg-gray-500 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import casestudy1 from "@/Images/case1.png";
import casestudy2 from "@/Images/case2.png";
import casestudy3 from "@/Images/case3.png";
import casestudy4 from "@/Images/case1.png";
import casestudy5 from "@/Images/case2.png";
import casestudy6 from "@/Images/case3.png";

// Define case study data with additional fields
const caseStudies = [
  [
    {
      image: casestudy1,
      title: "Openray Division",
      description:
        "This website achieved 45% growth in organic traffic year-over-year.",
      category: "SEO Optimization",
      stats: "45% Growth",
      link: "/case-studies/openray",
    },
    {
      image: casestudy2,
      title: "Timely Designs",
      description:
        "This site applied a mobile-first strategy to improve conversions.",
      category: "Mobile Optimization",
      stats: "32% Conversion Rate",
      link: "/case-studies/timely",
    },
    {
      image: casestudy3,
      title: "Planet Tech",
      description:
        "Capturing 65% of the market through a targeted SEO strategy that drives organic growth, improves search visibility.",
      category: "Market Expansion",
      stats: "65% Market Share",
      link: "/case-studies/planet-tech",
    },
  ],
  [
    {
      image: casestudy4,
      title: "Tremely Designs",
      description:
        "This site applies a smart SEO strategy to acquire online clients via long-tail search.",
      category: "Long-tail SEO",
      stats: "78% Organic Traffic",
      link: "/case-studies/tremely",
    },
    {
      image: casestudy5,
      title: "Plainst Tech",
      description:
        "Currently, 65% of the total traffic on the site and most of the online.",
      category: "Traffic Growth",
      stats: "65% Traffic Increase",
      link: "/case-studies/plainst",
    },
    {
      image: casestudy6,
      title: "Maindex Solutions",
      description:
        "55% of sales come from organic search. Search traffic is the biggest revenue source.",
      category: "Revenue Growth",
      stats: "55% Sales from Search",
      link: "/case-studies/maindex",
    },
  ],
];

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [autoplay, setAutoplay] = useState(true);
  const totalSlides = caseStudies.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      goToSlide((activeIndex + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex, autoplay, totalSlides]);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    setAutoplay(false);
    goToSlide((activeIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setAutoplay(false);
    goToSlide((activeIndex + 1) % totalSlides);
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-[#003C8F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0084FF]/10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#0084FF]/10 rounded-tr-full"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Our Case Studies
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-md">
              Real results for real businesses. See how our strategies drive
              growth.
            </p>
          </div>
          <Link
            href="/project"
            className="mt-4 sm:mt-0 group flex items-center text-white hover:text-[#0084FF] transition-colors"
          >
            <span>See all projects</span>
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Navigation buttons - desktop */}
        <div className="hidden md:block">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 z-20 transform -translate-y-1/2 -translate-x-4 lg:translate-x-0 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 z-20 transform -translate-y-1/2 translate-x-4 lg:translate-x-0 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div
          className="relative overflow-hidden"
          ref={containerRef}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {caseStudies[activeIndex].map((study, studyIndex) => (
                  <motion.div
                    key={studyIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: studyIndex * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                    onMouseEnter={() => setIsHovering(studyIndex)}
                    onMouseLeave={() => setIsHovering(null)}
                  >
                    <div className="relative overflow-hidden">
                      <div className="absolute top-4 left-4 z-10 bg-[#0084FF] text-white text-xs px-2 py-1 rounded-full">
                        {study.category}
                      </div>
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={`Case Study: ${study.title}`}
                        width={400}
                        height={200}
                        className={`w-full h-48 object-cover transition-transform duration-500 ${
                          isHovering === studyIndex ? "scale-110" : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 right-4 bg-white text-[#0084FF] font-bold text-sm px-3 py-1 rounded-full">
                        {study.stats}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg mb-2 text-[#003C8F]">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow">
                        {study.description}
                      </p>
                      <Link
                        href={study.link}
                        className="mt-4 inline-flex items-center text-[#0084FF] hover:text-[#003C8F] text-sm font-medium"
                      >
                        View case study
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - mobile */}
          <div className="flex justify-between mt-6 md:hidden">
            <button
              onClick={handlePrev}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    goToSlide(index);
                    setAutoplay(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-white w-4"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots navigation - desktop */}
          <div className="hidden md:flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  setAutoplay(false);
                }}
                className={`transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-white w-8 h-2 rounded-full"
                    : "bg-white/50 hover:bg-white/70 w-2 h-2 rounded-full"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#0084FF] hover:bg-[#0065c8] text-white rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Success Story
          </Link>
        </div>
      </div>
    </section>
  );
}
