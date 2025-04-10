/* eslint-disable react/no-unescaped-entities */
// "use client";

// import { useRef } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import logo1 from "@/Images/logo1.png";
// import logo2 from "@/Images/logo2.png";
// import logo3 from "@/Images/logo3.png";
// import logo4 from "@/Images/logo4.png";
// import logo5 from "@/Images/logo5.png";
// import logo6 from "@/Images/logo-6.png";

// const logos = [
//   {
//     name: "University",
//     url: logo1,
//   },
//   { name: "Academy", url: logo2 },
//   {
//     name: "University Academy",
//     url: logo3,
//   },
//   {
//     name: "Athletics",
//     url: logo4,
//   },
//   {
//     name: "University Shield",
//     url: logo5,
//   },
//   {
//     name: "Cross Sport",
//     url: logo6,
//   },
// ];

// export default function ClientLogos() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   return (
//     <section className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white">
//       <div className="container mx-auto">
//         <div className="overflow-hidden" ref={containerRef}>
//           <motion.div
//             className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             {logos.map((logo, index) => (
//               <motion.div
//                 key={index}
//                 className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <Image
//                   src={logo.url || "/placeholder.svg"}
//                   alt={logo.name}
//                   width={150}
//                   height={150}
//                   className="w-16 h-auto sm:w-20 md:w-24 lg:w-32"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import logo1 from "@/Images/logo1.png";
import logo2 from "@/Images/logo2.png";
import logo3 from "@/Images/logo3.png";
import logo4 from "@/Images/logo4.png";
import logo5 from "@/Images/logo5.png";
import logo6 from "@/Images/logo-6.png";

const clients = [
  {
    name: "University",
    logo: logo1,
    description: "Leading educational institution with over 20,000 students",
    industry: "Education",
    testimonial: {
      quote:
        "The digital marketing strategies implemented by the team have significantly increased our enrollment numbers and campus engagement.",
      author: "Dr. Sarah Johnson",
      title: "Director of Admissions",
      rating: 5,
    },
  },
  {
    name: "Academy",
    logo: logo2,
    description: "Premier training academy for professional development",
    industry: "Professional Training",
    testimonial: {
      quote:
        "Our online course registrations have doubled since implementing their SEO and PPC campaigns. Exceptional results!",
      author: "Michael Chen",
      title: "Marketing Director",
      rating: 5,
    },
  },
  {
    name: "University Academy",
    logo: logo3,
    description: "Specialized academy offering advanced degree programs",
    industry: "Higher Education",
    testimonial: {
      quote:
        "Their team's understanding of the education sector is impressive. They've helped us reach our target audience with precision.",
      author: "Amanda Rodriguez",
      title: "Dean of Students",
      rating: 4,
    },
  },
  {
    name: "Athletics",
    logo: logo4,
    description: "National sports organization with Olympic-level training",
    industry: "Sports",
    testimonial: {
      quote:
        "The social media campaign they created for our annual tournament increased attendance by 75% compared to previous years.",
      author: "James Wilson",
      title: "Events Manager",
      rating: 5,
    },
  },
  {
    name: "University Shield",
    logo: logo5,
    description: "Historic university with prestigious research programs",
    industry: "Research & Education",
    testimonial: {
      quote:
        "Their content marketing strategy has helped us showcase our research achievements and attract top-tier talent globally.",
      author: "Prof. Elizabeth Taylor",
      title: "Head of Research",
      rating: 5,
    },
  },
  {
    name: "Cross Sport",
    logo: logo6,
    description: "Multi-sport training facility for professional athletes",
    industry: "Sports Training",
    testimonial: {
      quote:
        "The targeted local SEO campaign they implemented has brought us a steady stream of new members month after month.",
      author: "Robert Martinez",
      title: "Facility Director",
      rating: 4,
    },
  },
];

export default function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [activeClient, setActiveClient] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Handle animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      // Animate client counter
      const targetCount = 200;
      const duration = 2000; // 2 seconds
      const interval = 20; // Update every 20ms
      const steps = duration / interval;
      const increment = targetCount / steps;

      let count = 0;
      const timer = setInterval(() => {
        count += increment;
        if (count >= targetCount) {
          setClientCount(targetCount);
          clearInterval(timer);
        } else {
          setClientCount(Math.floor(count));
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView, controls]);

  // Autoplay testimonials
  useEffect(() => {
    if (!autoplay || isHovering) return;

    const interval = setInterval(() => {
      setActiveClient((prev) => (prev + 1) % clients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, isHovering, clients.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handlePrev = () => {
    setActiveClient((prev) => (prev - 1 + clients.length) % clients.length);
    setAutoplay(false);
  };

  const handleNext = () => {
    setActiveClient((prev) => (prev + 1) % clients.length);
    setAutoplay(false);
  };

  const handleLogoClick = (index: number) => {
    setActiveClient(index);
    setAutoplay(false);
  };

  return (
    <section
      ref={sectionRef}
      className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white border-b border-[#F5F5F5]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-3 text-[#003C8F]"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We've helped{" "}
            <span className="font-bold text-[#0084FF]">{clientCount}+</span>{" "}
            organizations achieve their digital marketing goals with proven
            strategies and measurable results
          </motion.p>
        </div>

        {/* Client Logos Carousel */}
        <div
          className="mb-12 overflow-hidden"
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeClient === index ? "scale-110 z-10" : ""
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleLogoClick(index)}
              >
                <div
                  className={`w-full aspect-square flex items-center justify-center p-4 rounded-lg transition-all duration-300 ${
                    activeClient === index
                      ? "bg-[#0084FF]/10 shadow-lg"
                      : "bg-[#F5F5F5] hover:shadow-md"
                  }`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={150}
                      height={150}
                      className={`w-16 h-auto sm:w-20 md:w-24 max-h-full object-contain transition-all duration-500 ${
                        activeClient === index
                          ? "grayscale-0"
                          : "grayscale hover:grayscale-0"
                      }`}
                    />

                    {/* Industry badge */}
                    <div
                      className={`absolute -top-2 -right-2 bg-[#0084FF] text-white text-xs px-2 py-1 rounded-full transition-all duration-300 ${
                        activeClient === index
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      {client.industry}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonial Section */}
        <div className="relative bg-[#F5F5F5] rounded-xl p-6 md:p-8 mb-8 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
            <Quote className="w-full h-full text-[#0084FF]" />
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-[#0084FF]/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#003C8F]" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-[#0084FF]/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-[#003C8F]" />
            </button>
          </div>

          {/* Testimonial carousel */}
          <div
            className="overflow-hidden"
            ref={carouselRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClient}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"
              >
                {/* Client logo */}
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-white rounded-lg p-4 flex items-center justify-center">
                  <Image
                    src={clients[activeClient].logo || "/placeholder.svg"}
                    alt={clients[activeClient].name}
                    width={100}
                    height={100}
                    className="w-16 md:w-20 h-auto object-contain"
                  />
                </div>

                {/* Testimonial content */}
                <div className="flex-1">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < clients[activeClient].testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-[#003C8F] italic mb-4 text-lg">
                    "{clients[activeClient].testimonial.quote}"
                  </p>

                  <div>
                    <p className="font-semibold text-[#0084FF]">
                      {clients[activeClient].testimonial.author}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {clients[activeClient].testimonial.title},{" "}
                      {clients[activeClient].name}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 gap-2">
            {clients.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeClient === index
                    ? "bg-[#0084FF] w-4"
                    : "bg-gray-300 hover:bg-[#0084FF]/50"
                }`}
                onClick={() => handleLogoClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">
            Join our growing list of satisfied clients and experience the
            difference
          </p>
          <button className="px-6 py-2 bg-[#0084FF] hover:bg-[#003C8F] text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Request a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
