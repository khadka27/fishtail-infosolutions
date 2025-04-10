// /* eslint-disable react/no-unescaped-entities */
// "use client"

// import { useState } from "react"
// import Image from "next/image"

// export default function TestimonialsSection() {
//   const [activeSlide, setActiveSlide] = useState(0)

//   const testimonials = [
//     {
//       quote:
//         "We've looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they've been awesome to work with.",
//       name: "Irene Warner",
//       title: "CEO & Founder",
//       image: "/images/testimonial-avatar.png",
//     },
//     {
//       quote:
//         "Their SEO expertise has transformed our online presence. Our organic traffic has increased by 200% in just six months.",
//       name: "Michael Chen",
//       title: "Marketing Director",
//       image: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       quote: "The team's attention to detail and data-driven approach has made all the difference for our business.",
//       name: "Sarah Johnson",
//       title: "E-commerce Manager",
//       image: "/placeholder.svg?height=80&width=80",
//     },
//   ]

//   return (
//     <section className="py-12 bg-[#8cc63f] text-white">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           <div className="md:w-3/5 lg:w-2/3">
//             <blockquote className="text-xl md:text-2xl font-light mb-6 leading-relaxed">
//               "{testimonials[activeSlide].quote}"
//             </blockquote>
//           </div>

//           <div className="md:w-2/5 lg:w-1/3 flex flex-col items-center md:items-end">
//             <div className="flex items-center mb-6 md:mb-0">
//               {/* Gray circular background for the image */}
//               <div className="relative mr-4">
//                 <div className="absolute inset-0 bg-gray-300 rounded-full" style={{ transform: "scale(1.15)" }}></div>
//                 <div className="relative z-10">
//                   <Image
//                     src={testimonials[activeSlide].image || "/placeholder.svg"}
//                     alt={testimonials[activeSlide].name}
//                     width={80}
//                     height={80}
//                     className="rounded-full border-2 border-white"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <p className="font-semibold text-lg">{testimonials[activeSlide].name}</p>
//                 <p className="text-white text-opacity-90">{testimonials[activeSlide].title}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation dots */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveSlide(index)}
//               className={`w-3 h-3 rounded-full ${activeSlide === index ? "bg-white" : "bg-white bg-opacity-50"}`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, Company A",
    quote:
      "This is a fantastic product! It has revolutionized the way we do business.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Manager, Company B",
    quote:
      "I highly recommend this service. The support team is excellent and always ready to help.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Peter Jones",
    title: "Software Engineer, Company C",
    quote:
      "The software is easy to use and has saved us a lot of time and money.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Alice Brown",
    title: "Project Manager, Company D",
    quote:
      "I am very impressed with the quality of this product. It has exceeded my expectations.",
    image: "https://via.placeholder.com/150",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrevious = () => {
    if (isAnimating) return;
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAnimating(true);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAnimating(true);
  };

  useEffect(() => {
    const resetTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current as unknown as NodeJS.Timeout);
      }
      timerRef.current = setTimeout(goToNext, 5000);
    };

    resetTimer();

    return () => {
      clearTimeout(timerRef.current as unknown as number);
    };
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <section className="bg-[#8cc63f] py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-white">
          What Our Clients Say
        </h2>
        <div className="relative">
          <AnimatePresence
            initial={false}
            custom={direction}
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto"
            >
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="rounded-full w-20 h-20 mx-auto mb-4"
              />
              <p className="text-gray-700 italic mb-4">
                "{testimonials[currentIndex].quote}"
              </p>
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-500">
                {testimonials[currentIndex].title}
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
