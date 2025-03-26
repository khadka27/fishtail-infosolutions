"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "This incredible team managed to not only get us top positions on Google for all of our top keywords, but they kept us there, as well! I would highly recommend this company to anyone.",
    author: "Gabriel Townsend",
    company: "Quality Realty Service",
    avatar: "/placeholder.svg?height=60&width=60&text=GT",
  },
  {
    id: 2,
    quote:
      "Working with this team has transformed our online presence. Our website traffic has increased by 200% and our conversion rate has doubled in just three months.",
    author: "Sarah Johnson",
    company: "Innovative Solutions",
    avatar: "/placeholder.svg?height=60&width=60&text=SJ",
  },
  {
    id: 3,
    quote:
      "The content strategy they developed for us has been a game-changer. We're now ranking for keywords we never thought possible and our leads have increased significantly.",
    author: "Michael Chen",
    company: "TechForward Inc.",
    avatar: "/placeholder.svg?height=60&width=60&text=MC",
  },
];

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    websiteUrl: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Testimonial slider state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Thank you! An expert will contact you soon.");

    // Reset form
    setFormData({
      websiteUrl: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      details: "",
    });

    setIsSubmitting(false);
  };

  // Handle testimonial navigation
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance testimonials
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nextTestimonial()
  //   }, 5000)
  //
  //   return () => clearInterval(timer)
  // }, [])

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-red-800">Tell</span>
            <span className="text-gray-800"> us about your </span>
            <span className="text-amber-800">project</span>
          </h1>
          <p className="text-blue-600">
            Let us help you get your business online and grow it with passion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info and Testimonials */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-700 leading-relaxed">
                Attract and persuade your target market and increase your
                website&apos;s visibility in the search engines with the content
                provided by our professional copywriters.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                  Testimonials
                </h2>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  See all testimonials
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 relative overflow-hidden">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.div
                    key={currentTestimonial}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -50 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      opacity: { duration: 0.2 },
                    }}
                    className="min-h-[200px]"
                  >
                    <p className="text-gray-600 italic mb-4">
                      "{testimonials[currentTestimonial].quote}";
                    </p>
                    <div className="flex items-center mt-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={
                            testimonials[currentTestimonial].avatar ||
                            "/placeholder.svg"
                          }
                          alt={testimonials[currentTestimonial].author}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {testimonials[currentTestimonial].author}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-between mt-6">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentTestimonial ? 1 : -1);
                          setCurrentTestimonial(index);
                        }}
                        className={cn(
                          "w-2 h-2 rounded-full transition-colors",
                          index === currentTestimonial
                            ? "bg-blue-600"
                            : "bg-gray-300"
                        )}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="websiteUrl"
                  className="flex items-center text-gray-700"
                >
                  Website URL <Globe className="ml-2 h-4 w-4 text-blue-500" />
                </Label>
                <Input
                  id="websiteUrl"
                  name="websiteUrl"
                  type="url"
                  placeholder="www.yourwebsite.com"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">(optional)</p>
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-700">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">(optional)</p>
                </div>
              </div>

              <div>
                <Label htmlFor="details" className="text-gray-700">
                  Details
                </Label>
                <Textarea
                  id="details"
                  name="details"
                  rows={5}
                  value={formData.details}
                  onChange={handleChange}
                  className="mt-1 resize-none"
                  placeholder="Please let us know any particular things to check and the best time to contact you by phone (if provided)."
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 transition-colors w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Hear from an expert"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
