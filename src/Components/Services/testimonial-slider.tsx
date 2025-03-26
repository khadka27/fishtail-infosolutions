"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "My company's Google rankings and overall site traffic improved dramatically after just a few months of working with this agency. The service was exceptional, and the results far exceeded my expectations.",
    author: "Matthew Lee",
    company: "Tech Solutions Inc.",
    avatar: "/placeholder.svg?height=80&width=80&text=ML",
  },
  {
    id: 2,
    quote:
      "The SEO strategy they implemented for our business has transformed our online presence. We're now ranking on the first page for all of our target keywords.",
    author: "Sarah Johnson",
    company: "Retail Innovations",
    avatar: "/placeholder.svg?height=80&width=80&text=SJ",
  },
  {
    id: 3,
    quote:
      "Working with this team has been a game-changer for our digital marketing efforts. Their expertise and dedication to our success is unmatched.",
    author: "David Chen",
    company: "Global Enterprises",
    avatar: "/placeholder.svg?height=80&width=80&text=DC",
  },
]

export default function TestimonialSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-blue-400 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentTestimonial}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 },
              }}
              className="text-center"
            >
              <p className="text-white text-xl md:text-2xl italic mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </p>

              <div className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-full overflow-hidden mb-4 border-2 border-white">
                  <img
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h4 className="text-white font-bold">{testimonials[currentTestimonial].author}</h4>
                <p className="text-white/80">{testimonials[currentTestimonial].company}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentTestimonial ? 1 : -1)
                  setCurrentTestimonial(index)
                }}
                className={cn(
                  "w-3 h-3 rounded-full mx-1 transition-colors",
                  index === currentTestimonial ? "bg-white" : "bg-white/40",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

