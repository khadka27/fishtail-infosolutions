/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: any;
};

type TestimonialSliderProps = {
  testimonials: Testimonial[];
};

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevTestimonial}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextTestimonial}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="flex flex-col md:flex-row items-center bg-gray-700/30 p-8 rounded-2xl backdrop-blur-sm"
          >
            <div className="md:w-3/4 pr-0 md:pr-8">
              <div className="relative">
                <Quote className="h-10 w-10 text-blue-400 mb-4 opacity-50 absolute -left-2 -top-2 transform -scale-x-100" />
                <p className="text-xl md:text-2xl font-light italic mb-6 leading-relaxed pl-8 pt-4">
                  {testimonials[currentIndex].quote}
                </p>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="font-medium text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonials[currentIndex].title}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 flex justify-center mt-8 md:mt-0">
              <motion.div
                className="relative"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                }}
              >
                <div className="absolute inset-0 rounded-full bg-blue-400 blur-md opacity-30 transform -rotate-6"></div>
                <Image
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={100}
                  height={100}
                  unoptimized
                  className="rounded-full border-2 border-white relative z-10"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            } transition-colors duration-300`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
