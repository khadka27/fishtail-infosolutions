/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import client1 from "@/Images/client1.jpeg"
import client2 from "@/Images/client2.jpeg";
import client3 from "@/Images/client3.jpeg"
import client4 from "@/Images/client4.jpeg"
import client5 from "@/Images/client5.jpeg"
// Define the testimonial type for better type safety
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  image: StaticImageData | string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "We've looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they've been awesome to work with.",
    name: "Julian A. Spence",
  
    image: client1,
    rating: 5,
  },
  {
    id: 2,
    quote:
      "“Fishtail’s SEO and ads tripled our leads in 6 months. Their team is strategic, transparent, and results-driven!”",
    name: "Patricia H. Dudley",
    image: client2,
    rating: 5,
  },
  {
    id: 3,
    quote: "“The web development team at Fishtail exceeded our expectations. Our website is faster, more responsive, and user-friendly. We’ve seen a significant increase in conversions since the launch!”",
    name: "David M. Parker",
    image: client3,
    rating: 5
},
{
  id: 4,
  quote: "“The team at Fishtail delivered exceptional results for our business. Our website’s performance has dramatically improved, and the user experience is top-notch. We’ve seen a noticeable rise in customer engagement since the redesign!”",
  name: "Rajesh Kumar",
  image: client4,
  rating: 5
},
{
  id: 5,
  quote: "“Fishtail’s web development services have been outstanding. Our website is now much faster, mobile-friendly, and intuitive. We’ve noticed a sharp increase in user retention and overall satisfaction!”",
  name: "Sita Thapa",
  image: client5,
  rating: 5
}


  
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAnimating]);

  // Handle auto-rotation
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

  // Handle touch events for swipe
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left
        goToNext();
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right
        goToPrevious();
      }
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isAnimating]);

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

  const renderStars = (rating = 5) => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-[#0084FF] fill-[#0084FF]" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      className="py-16 bg-gray-100 text-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={containerRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
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
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="relative flex-shrink-0">
                    <div
                      className="absolute inset-0 bg-[#0084FF]/10 rounded-full"
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
                        unoptimized
                        className="rounded-full border-4 border-white shadow-md"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <Quote className="w-10 h-10 text-[#0084FF]/20 mb-2 mx-auto md:mx-0" />
                    {renderStars(testimonials[currentIndex].rating)}
                    <blockquote className="text-xl md:text-2xl font-light mb-6 leading-relaxed text-gray-700 italic">
                      &quot;{testimonials[currentIndex].quote}&quot;
                    </blockquote>

                    <div className="mt-4">
                      <p className="font-semibold text-xl text-gray-900">
                        {testimonials[currentIndex].name}
                      </p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <motion.button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0084FF] z-10"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-[#0084FF] hover:bg-[#0066cc] text-white rounded-full p-3 shadow-lg transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0084FF] z-10"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#0084FF] scale-125"
                  : "bg-gray-300 hover:bg-[#0084FF]/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
