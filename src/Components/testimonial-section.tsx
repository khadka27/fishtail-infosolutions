"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

// Mock client images - replace with your actual images
const client1 =
     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face";
const client2 =
     "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face";
const client3 =
     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face";
const client4 =
     "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face";
const client5 =
     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face";

interface Testimonial {
     id: number;
     quote: string;
     name: string;
     image: string;
     rating?: number;
     role?: string;
     company?: string;
}

const testimonials: Testimonial[] = [
     {
          id: 1,
          quote: "We've looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they've been awesome to work with.",
          name: "Julian A. Spence",
          role: "Marketing Director",
          company: "TechCorp Inc.",
          image: client1,
          rating: 5,
     },
     {
          id: 2,
          quote: "Fishtail's SEO and ads tripled our leads in 6 months. Their team is strategic, transparent, and results-driven!",
          name: "Patricia H. Dudley",
          role: "CEO",
          company: "GrowthLab",
          image: client2,
          rating: 5,
     },
     {
          id: 3,
          quote: "The web development team at Fishtail exceeded our expectations. Our website is faster, more responsive, and user-friendly. We've seen a significant increase in conversions since the launch!",
          name: "David M. Parker",
          role: "Product Manager",
          company: "StartupHub",
          image: client3,
          rating: 5,
     },
     {
          id: 4,
          quote: "The team at Fishtail delivered exceptional results for our business. Our website's performance has dramatically improved, and the user experience is top-notch. We've seen a noticeable rise in customer engagement since the redesign!",
          name: "Rajesh Kumar",
          role: "CTO",
          company: "InnovateTech",
          image: client4,
          rating: 5,
     },
     {
          id: 5,
          quote: "Fishtail's web development services have been outstanding. Our website is now much faster, mobile-friendly, and intuitive. We've noticed a sharp increase in user retention and overall satisfaction!",
          name: "Sita Thapa",
          role: "Founder",
          company: "Digital Solutions",
          image: client5,
          rating: 5,
     },
];

export default function TestimonialsSection() {
     const [currentIndex, setCurrentIndex] = useState(0);
     const [direction, setDirection] = useState(0);
     const [isAnimating, setIsAnimating] = useState(false);
     const [isPaused, setIsPaused] = useState(false);
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
                    goToNext();
               } else if (touchEndX - touchStartX > swipeThreshold) {
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
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
               },
          },
          exit: (direction: number) => ({
               x: direction < 0 ? 300 : -300,
               opacity: 0,
               scale: 0.9,
               transition: {
                    duration: 0.3,
                    ease: [0.55, 0.085, 0.68, 0.53],
               },
          }),
     };

     const renderStars = (rating = 5) => {
          return (
               <div className="flex justify-center md:justify-start mb-3">
                    {[...Array(5)].map((_, i) => (
                         <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: i * 0.1, duration: 0.4 }}
                         >
                              <Star
                                   className={`w-4 h-4 mx-0.5 ${
                                        i < rating
                                             ? "text-amber-400 fill-amber-400"
                                             : "text-gray-300"
                                   }`}
                              />
                         </motion.div>
                    ))}
               </div>
          );
     };

     return (
          <section
               className="relative pt-2 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
               onMouseEnter={() => setIsPaused(true)}
               onMouseLeave={() => setIsPaused(false)}
               ref={containerRef}
          >
               {/* Compact Background decorative elements */}
               <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 left-4 w-12 h-12 bg-blue-200/20 rounded-full blur-xl"></div>
                    <div className="absolute top-8 right-8 w-16 h-16 bg-indigo-200/15 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 left-1/4 w-10 h-10 bg-purple-200/20 rounded-full blur-lg"></div>
                    <div className="absolute bottom-8 right-4 w-8 h-8 bg-blue-300/25 rounded-full blur-md"></div>
               </div>

               <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    {/* Compact Header */}
                    <motion.div
                         className="text-center mb-4 lg:mb-6"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6 }}
                    >
                         <motion.h2
                              className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-2"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                         >
                              What Our Clients Say
                         </motion.h2>
                         <motion.p
                              className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                         >
                              Discover why businesses trust us to transform
                              their digital presence
                         </motion.p>
                    </motion.div>

                    {/* Compact testimonial carousel */}
                    <div className="relative max-w-4xl mx-auto">
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
                                   className="relative"
                              >
                                   <div className="bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-lg border border-white/20 overflow-hidden">
                                        <div className="p-4 sm:p-6 lg:p-8">
                                             <div className="flex flex-col md:flex-row items-center md:items-start gap-4 lg:gap-6">
                                                  {/* Compact Avatar section */}
                                                  <div className="relative flex-shrink-0">
                                                       <motion.div
                                                            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-20"
                                                            style={{
                                                                 transform:
                                                                      "scale(1.1)",
                                                            }}
                                                            animate={{
                                                                 rotate: 360,
                                                            }}
                                                            transition={{
                                                                 duration: 15,
                                                                 repeat: Infinity,
                                                                 ease: "linear",
                                                            }}
                                                       ></motion.div>
                                                       <div className="relative z-10">
                                                            <motion.div
                                                                 whileHover={{
                                                                      scale: 1.05,
                                                                 }}
                                                                 transition={{
                                                                      duration: 0.3,
                                                                 }}
                                                            >
                                                                 <img
                                                                      src={
                                                                           testimonials[
                                                                                currentIndex
                                                                           ]
                                                                                .image
                                                                      }
                                                                      alt={
                                                                           testimonials[
                                                                                currentIndex
                                                                           ]
                                                                                .name
                                                                      }
                                                                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-3 border-white shadow-lg"
                                                                 />
                                                            </motion.div>
                                                       </div>
                                                  </div>

                                                  {/* Compact Content section */}
                                                  <div className="flex-1 text-center md:text-left">
                                                       <motion.div
                                                            initial={{
                                                                 scale: 0,
                                                                 rotate: -90,
                                                            }}
                                                            animate={{
                                                                 scale: 1,
                                                                 rotate: 0,
                                                            }}
                                                            transition={{
                                                                 duration: 0.4,
                                                                 delay: 0.1,
                                                            }}
                                                       >
                                                            <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500/30 mb-2 mx-auto md:mx-0" />
                                                       </motion.div>

                                                       {renderStars(
                                                            testimonials[
                                                                 currentIndex
                                                            ].rating
                                                       )}

                                                       <motion.blockquote
                                                            className="text-sm sm:text-base lg:text-lg font-medium mb-4 leading-relaxed text-gray-700 italic line-clamp-3"
                                                            initial={{
                                                                 opacity: 0,
                                                                 y: 10,
                                                            }}
                                                            animate={{
                                                                 opacity: 1,
                                                                 y: 0,
                                                            }}
                                                            transition={{
                                                                 duration: 0.5,
                                                                 delay: 0.2,
                                                            }}
                                                       >
                                                            "
                                                            {
                                                                 testimonials[
                                                                      currentIndex
                                                                 ].quote
                                                            }
                                                            "
                                                       </motion.blockquote>

                                                       <motion.div
                                                            className="space-y-1"
                                                            initial={{
                                                                 opacity: 0,
                                                                 x: -10,
                                                            }}
                                                            animate={{
                                                                 opacity: 1,
                                                                 x: 0,
                                                            }}
                                                            transition={{
                                                                 duration: 0.5,
                                                                 delay: 0.3,
                                                            }}
                                                       >
                                                            <p className="font-bold text-base lg:text-lg text-gray-900">
                                                                 {
                                                                      testimonials[
                                                                           currentIndex
                                                                      ].name
                                                                 }
                                                            </p>
                                                            <p className="text-xs lg:text-sm text-blue-600 font-medium">
                                                                 {
                                                                      testimonials[
                                                                           currentIndex
                                                                      ].role
                                                                 }
                                                            </p>
                                                            <p className="text-xs lg:text-sm text-gray-500">
                                                                 {
                                                                      testimonials[
                                                                           currentIndex
                                                                      ].company
                                                                 }
                                                            </p>
                                                       </motion.div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         </AnimatePresence>

                         {/* Compact Navigation buttons */}
                         <motion.button
                              onClick={goToPrevious}
                              className="absolute left-1 sm:left-2 lg:-left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full p-2 lg:p-3 shadow-lg border border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 z-20"
                              aria-label="Previous testimonial"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                         >
                              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
                         </motion.button>

                         <motion.button
                              onClick={goToNext}
                              className="absolute right-1 sm:right-2 lg:-right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full p-2 lg:p-3 shadow-lg border border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 z-20"
                              aria-label="Next testimonial"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                         >
                              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
                         </motion.button>
                    </div>

                    {/* Compact Navigation dots */}
                    <div className="flex justify-center mt-4 lg:mt-6 space-x-2">
                         {testimonials.map((_, index) => (
                              <motion.button
                                   key={index}
                                   onClick={() => goToSlide(index)}
                                   className={`relative transition-all duration-300 ${
                                        currentIndex === index
                                             ? "w-8 h-2"
                                             : "w-2 h-2"
                                   }`}
                                   aria-label={`Go to testimonial ${index + 1}`}
                                   whileHover={{ scale: 1.2 }}
                                   whileTap={{ scale: 0.9 }}
                              >
                                   <div
                                        className={`w-full h-full rounded-full transition-all duration-300 ${
                                             currentIndex === index
                                                  ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                                                  : "bg-gray-300 hover:bg-blue-400"
                                        }`}
                                   />
                                   {currentIndex === index && (
                                        <motion.div
                                             className="absolute inset-0 rounded-full bg-white/30"
                                             initial={{ scale: 0 }}
                                             animate={{ scale: 1 }}
                                             transition={{ duration: 0.3 }}
                                        />
                                   )}
                              </motion.button>
                         ))}
                    </div>
               </div>
          </section>
     );
}
