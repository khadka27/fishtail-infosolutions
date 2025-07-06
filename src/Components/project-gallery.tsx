"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ProjectGallery() {
     const [activeIndex, setActiveIndex] = useState(0);
     const [lightboxOpen, setLightboxOpen] = useState(false);

     // Sample gallery items for EduVersity
     const galleryItems = [
          {
               id: 1,
               title: "LinkedIn Ad Campaign",
               description:
                    "Targeted ad creative for professionals seeking career advancement",
               image: "/placeholder.svg?height=600&width=800",
               type: "image",
          },
          {
               id: 2,
               title: "Landing Page Design",
               description:
                    "High-converting landing page with program details and lead form",
               image: "/placeholder.svg?height=600&width=800",
               type: "image",
          },
          {
               id: 3,
               title: "Facebook Retargeting Ad",
               description:
                    "Retargeting creative for prospects who visited the website",
               image: "/placeholder.svg?height=600&width=800",
               type: "image",
          },
          {
               id: 4,
               title: "Email Nurture Campaign",
               description: "Follow-up email sequence for lead nurturing",
               image: "/placeholder.svg?height=600&width=800",
               type: "image",
          },
          {
               id: 5,
               title: "Google Display Ad",
               description: "Visual ad for the Google Display Network",
               image: "/placeholder.svg?height=600&width=800",
               type: "image",
          },
          {
               id: 6,
               title: "Mobile Landing Page",
               description: "Mobile-optimized version of the landing page",
               image: "/placeholder.svg?height=600&width=800",
               type: "image",
          },
     ];

     const nextSlide = () => {
          setActiveIndex((prev) => (prev + 1) % galleryItems.length);
     };

     const prevSlide = () => {
          setActiveIndex(
               (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
          );
     };

     const openLightbox = (index: number) => {
          setActiveIndex(index);
          setLightboxOpen(true);
     };

     return (
          <>
               {/* Main Gallery Slider */}
               <div className="relative mb-8">
                    <div className="overflow-hidden rounded-lg">
                         <AnimatePresence mode="wait">
                              <motion.div
                                   key={activeIndex}
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   exit={{ opacity: 0 }}
                                   transition={{ duration: 0.5 }}
                                   className="aspect-w-16 aspect-h-9 bg-gray-100"
                              >
                                   <Image
                                        src={
                                             galleryItems[activeIndex].image ||
                                             "/placeholder.svg"
                                        }
                                        alt={galleryItems[activeIndex].title}
                                        fill
                                        className="object-cover"
                                        onClick={() =>
                                             openLightbox(activeIndex)
                                        }
                                   />
                              </motion.div>
                         </AnimatePresence>
                    </div>

                    <button
                         onClick={prevSlide}
                         className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                    >
                         <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>

                    <button
                         onClick={nextSlide}
                         className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                    >
                         <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
               </div>

               <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-800">
                         {galleryItems[activeIndex].title}
                    </h3>
                    <p className="text-gray-600">
                         {galleryItems[activeIndex].description}
                    </p>
               </div>

               {/* Thumbnails */}
               <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {galleryItems.map((item, index) => (
                         <div
                              key={item.id}
                              onClick={() => setActiveIndex(index)}
                              className={`cursor-pointer rounded-md overflow-hidden relative ${
                                   index === activeIndex
                                        ? "ring-2 ring-blue-500"
                                        : ""
                              }`}
                         >
                              <Image
                                   src={item.image || "/placeholder.svg"}
                                   alt={item.title}
                                   width={120}
                                   height={80}
                                   className="object-cover w-full h-16"
                              />
                         </div>
                    ))}
               </div>

               {/* Lightbox */}
               <AnimatePresence>
                    {lightboxOpen && (
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                         >
                              <button
                                   onClick={() => setLightboxOpen(false)}
                                   className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                              >
                                   <X className="w-8 h-8" />
                              </button>

                              <div className="relative max-w-4xl w-full">
                                   <Image
                                        src={
                                             galleryItems[activeIndex].image ||
                                             "/placeholder.svg"
                                        }
                                        alt={galleryItems[activeIndex].title}
                                        width={1200}
                                        height={800}
                                        unoptimized
                                        className="object-contain w-full"
                                   />

                                   <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                                        <h3 className="text-lg font-bold">
                                             {galleryItems[activeIndex].title}
                                        </h3>
                                        <p className="text-gray-300">
                                             {
                                                  galleryItems[activeIndex]
                                                       .description
                                             }
                                        </p>
                                   </div>

                                   <button
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                                   >
                                        <ChevronLeft className="w-8 h-8 text-white" />
                                   </button>

                                   <button
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                                   >
                                        <ChevronRight className="w-8 h-8 text-white" />
                                   </button>
                              </div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </>
     );
}
