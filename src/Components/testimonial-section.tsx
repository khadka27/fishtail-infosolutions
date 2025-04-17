/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the testimonial type for better type safety
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "We've looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they've been awesome to work with.",
    name: "Irene Warner",
    title: "CEO & Founder",
    image: "/images/testimonial-avatar.png",
  },
  {
    id: 2,
    quote:
      "Their SEO expertise has transformed our online presence. Our organic traffic has increased by 200% in just six months.",
    name: "Michael Chen",
    title: "Marketing Director",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    quote:
      "The team's attention to detail and data-driven approach has made all the difference for our business.",
    name: "Sarah Johnson",
    title: "E-commerce Manager",
    image: "/placeholder.svg?height=80&width=80",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
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

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAnimating(true);
  };

  useEffect(() => {
    const resetTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (!isPaused) {
        timerRef.current = setTimeout(goToNext, 5000);
      }
    };

    resetTimer();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    }),
  };

  return (
    <section
      className="py-16 bg-[#8cc63f]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          What Our Clients Say
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="wait"
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="relative flex-shrink-0">
                    <div
                      className="absolute inset-0 bg-gray-200 rounded-full"
                      style={{ transform: "scale(1.15)" }}
                    ></div>
                    <div className="relative z-10">
                      <Image
                        src={
                          testimonials[currentIndex].image || "/placeholder.svg"
                        }
                        alt={testimonials[currentIndex].name}
                        width={100}
                        height={100}
                        className="rounded-full border-4 border-white shadow-md"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <blockquote className="text-xl md:text-2xl font-light mb-6 leading-relaxed text-gray-700 italic">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    <div className="mt-4">
                      <p className="font-semibold text-xl text-gray-900">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8cc63f] z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8cc63f] z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
