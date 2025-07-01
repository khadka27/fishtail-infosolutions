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
                    timerRef.current = setTimeout(goToNext, 6000);
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
               x: direction > 0 ? 400 : -400,
               opacity: 0,
               scale: 0.85,
               rotateY: direction > 0 ? 25 : -25,
          }),
          center: {
               x: 0,
               opacity: 1,
               scale: 1,
               rotateY: 0,
               transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
               },
          },
          exit: (direction: number) => ({
               x: direction < 0 ? 400 : -400,
               opacity: 0,
               scale: 0.85,
               rotateY: direction < 0 ? 25 : -25,
               transition: {
                    duration: 0.4,
                    ease: [0.55, 0.085, 0.68, 0.53],
               },
          }),
     };

     const renderStars = (rating = 5) => {
          return (
               <div className="flex justify-center md:justify-start mb-4 lg:mb-6">
                    {[...Array(5)].map((_, i) => (
                         <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: i * 0.1, duration: 0.4 }}
                         >
                              <Star
                                   className={`w-5 h-5 mx-0.5 ${
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
               className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
               onMouseEnter={() => setIsPaused(true)}
               onMouseLeave={() => setIsPaused(false)}
               ref={containerRef}
          >
               {/* Background decorative elements */}
               <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
                    <div className="absolute top-32 right-20 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-200/25 rounded-full blur-xl"></div>
                    <div className="absolute bottom-32 right-10 w-16 h-16 bg-blue-300/30 rounded-full blur-lg"></div>
               </div>

               <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                         className="text-center mb-12 lg:mb-16"
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6 }}
                    >
                         <motion.h2
                              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                         >
                              What Our Clients Say
                         </motion.h2>
                         <motion.p
                              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                         >
                              Discover why businesses trust us to transform
                              their digital presence
                         </motion.p>
                    </motion.div>

                    {/* Main testimonial carousel */}
                    <div className="relative max-w-6xl mx-auto">
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
                                   onMouseEnter={() => setIsHovered(true)}
                                   onMouseLeave={() => setIsHovered(false)}
                              >
                                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                                        <div className="p-6 sm:p-8 lg:p-12">
                                             <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                                                  {/* Avatar section */}
                                                  <div className="relative flex-shrink-0">
                                                       <motion.div
                                                            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-20"
                                                            style={{
                                                                 transform:
                                                                      "scale(1.2)",
                                                            }}
                                                            animate={{
                                                                 rotate: 360,
                                                            }}
                                                            transition={{
                                                                 duration: 20,
                                                                 repeat: Infinity,
                                                                 ease: "linear",
                                                            }}
                                                       ></motion.div>
                                                       <motion.div
                                                            className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-10"
                                                            style={{
                                                                 transform:
                                                                      "scale(1.4)",
                                                            }}
                                                            animate={{
                                                                 rotate: -360,
                                                            }}
                                                            transition={{
                                                                 duration: 25,
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
                                                                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-xl"
                                                                 />
                                                            </motion.div>
                                                       </div>
                                                  </div>

                                                  {/* Content section */}
                                                  <div className="flex-1 text-center lg:text-left">
                                                       <motion.div
                                                            initial={{
                                                                 scale: 0,
                                                                 rotate: -180,
                                                            }}
                                                            animate={{
                                                                 scale: 1,
                                                                 rotate: 0,
                                                            }}
                                                            transition={{
                                                                 duration: 0.5,
                                                                 delay: 0.2,
                                                            }}
                                                       >
                                                            <Quote className="w-8 h-8 lg:w-12 lg:h-12 text-blue-500/30 mb-4 mx-auto lg:mx-0" />
                                                       </motion.div>

                                                       {renderStars(
                                                            testimonials[
                                                                 currentIndex
                                                            ].rating
                                                       )}

                                                       <motion.blockquote
                                                            className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light mb-6 lg:mb-8 leading-relaxed text-gray-700 italic"
                                                            initial={{
                                                                 opacity: 0,
                                                                 y: 20,
                                                            }}
                                                            animate={{
                                                                 opacity: 1,
                                                                 y: 0,
                                                            }}
                                                            transition={{
                                                                 duration: 0.6,
                                                                 delay: 0.3,
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
                                                            className="space-y-2"
                                                            initial={{
                                                                 opacity: 0,
                                                                 x: -20,
                                                            }}
                                                            animate={{
                                                                 opacity: 1,
                                                                 x: 0,
                                                            }}
                                                            transition={{
                                                                 duration: 0.6,
                                                                 delay: 0.4,
                                                            }}
                                                       >
                                                            <p className="font-bold text-xl lg:text-2xl text-gray-900">
                                                                 {
                                                                      testimonials[
                                                                           currentIndex
                                                                      ].name
                                                                 }
                                                            </p>
                                                            <p className="text-sm lg:text-base text-blue-600 font-medium">
                                                                 {
                                                                      testimonials[
                                                                           currentIndex
                                                                      ].role
                                                                 }
                                                            </p>
                                                            <p className="text-sm lg:text-base text-gray-500">
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

                         {/* Navigation buttons */}
                         <motion.button
                              onClick={goToPrevious}
                              className="absolute left-2 sm:left-4 lg:-left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full p-3 lg:p-4 shadow-xl border border-white/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 z-20"
                              aria-label="Previous testimonial"
                              whileHover={{
                                   scale: 1.1,
                                   backgroundColor: "rgba(255,255,255,1)",
                                   boxShadow:
                                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                              }}
                              whileTap={{ scale: 0.95 }}
                         >
                              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                         </motion.button>

                         <motion.button
                              onClick={goToNext}
                              className="absolute right-2 sm:right-4 lg:-right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full p-3 lg:p-4 shadow-xl border border-white/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 z-20"
                              aria-label="Next testimonial"
                              whileHover={{
                                   scale: 1.1,
                                   backgroundColor: "rgba(255,255,255,1)",
                                   boxShadow:
                                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                              }}
                              whileTap={{ scale: 0.95 }}
                         >
                              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                         </motion.button>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-8 lg:mt-12 space-x-3">
                         {testimonials.map((_, index) => (
                              <motion.button
                                   key={index}
                                   onClick={() => goToSlide(index)}
                                   className={`relative transition-all duration-300 ${
                                        currentIndex === index
                                             ? "w-12 h-3"
                                             : "w-3 h-3"
                                   }`}
                                   aria-label={`Go to testimonial ${index + 1}`}
                                   aria-current={
                                        currentIndex === index
                                             ? "true"
                                             : "false"
                                   }
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

                    {/* Progress indicator */}
                    <div className="flex justify-center mt-6">
                         <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                   className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                                   initial={{ width: "0%" }}
                                   animate={{
                                        width: `${
                                             ((currentIndex + 1) /
                                                  testimonials.length) *
                                             100
                                        }%`,
                                   }}
                                   transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                   }}
                              />
                         </div>
                    </div>
               </div>
          </section>
     );
}
