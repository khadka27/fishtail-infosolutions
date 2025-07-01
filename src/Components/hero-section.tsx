/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import React, { useState, useEffect, useRef } from "react";
import {
     ChevronLeft,
     ChevronRight,
     Monitor,
     Smartphone,
     Search,
     Target,
     Globe,
     TrendingUp,
} from "lucide-react";

export function HeroSection() {
     const [currentSlide, setCurrentSlide] = useState(0);
     const [animationReset, setAnimationReset] = useState(false);
     const [progress, setProgress] = useState(0);
     const [touchStart, setTouchStart] = useState(0);
     const [touchEnd, setTouchEnd] = useState(0);
     const slideInterval = useRef(null);
     const progressInterval = useRef(null);
     const totalSlides = 3;
     const slideDuration = 6000;

     const slides = [
          {
               title: "Custom Web Development",
               description:
                    "Boost your online presence with custom web development. Our team creates responsive, user-friendly websites designed to enhance your brand's digital experience.",
               color: "from-blue-600 to-blue-800",
               badges: ["SEO", "SMM", "CRO"],
               icon: Monitor,
               link: "/Services/web-development",
          },
          {
               title: "Search Engine Optimization",
               description:
                    "Maximize your search engine visibility and drive organic traffic. Our SEO services optimize your website to rank higher and reach your target audience.",
               color: "from-indigo-700 to-purple-800",
               badges: ["PPC", "Responsive Ads", "SMM"],
               icon: Search,
               link: "/Services/local-seo",
          },
          {
               title: "Targeted Lead Generation",
               description:
                    "Generate high-quality leads that convert. We employ data-driven strategies to attract and nurture prospects, turning them into loyal customers.",
               color: "from-purple-600 to-pink-700",
               badges: ["Analytics", "Conversion", "Growth"],
               icon: Target,
               link: "/Services/lead-generation",
          },
     ];

     const resetIntervals = () => {
          if (slideInterval.current) clearInterval(slideInterval.current);
          if (progressInterval.current) clearInterval(progressInterval.current);
          setProgress(0);
          startIntervals();
     };

     const startIntervals = () => {
          slideInterval.current = setInterval(() => {
               nextSlide();
          }, slideDuration);

          progressInterval.current = setInterval(() => {
               setProgress((prev) => {
                    if (prev >= 100) return 0;
                    return prev + 100 / (slideDuration / 100);
               });
          }, 100);
     };

     const nextSlide = () => {
          setAnimationReset(true);
          setTimeout(() => {
               setCurrentSlide((prev) =>
                    prev === totalSlides - 1 ? 0 : prev + 1
               );
               setAnimationReset(false);
          }, 100);
     };

     const prevSlide = () => {
          setAnimationReset(true);
          setTimeout(() => {
               setCurrentSlide((prev) =>
                    prev === 0 ? totalSlides - 1 : prev - 1
               );
               setAnimationReset(false);
          }, 100);
     };

     const goToSlide = (index) => {
          setAnimationReset(true);
          setTimeout(() => {
               setCurrentSlide(index);
               setAnimationReset(false);
          }, 100);
     };

     const handleTouchStart = (e) => {
          setTouchStart(e.touches[0].clientX);
     };

     const handleTouchMove = (e) => {
          setTouchEnd(e.touches[0].clientX);
     };

     const handleTouchEnd = () => {
          if (touchStart - touchEnd > 100) {
               nextSlide();
          } else if (touchStart - touchEnd < -100) {
               prevSlide();
          }
          setTouchStart(0);
          setTouchEnd(0);
     };

     useEffect(() => {
          startIntervals();
          return () => {
               if (slideInterval.current) clearInterval(slideInterval.current);
               if (progressInterval.current)
                    clearInterval(progressInterval.current);
          };
     }, []);

     useEffect(() => {
          resetIntervals();
     }, [currentSlide]);

     const currentSlideData = slides[currentSlide];
     const IconComponent = currentSlideData.icon;

     return (
          <section
               className="relative overflow-hidden h-[50vh] min-h-[400px] max-h-[600px]"
               onTouchStart={handleTouchStart}
               onTouchMove={handleTouchMove}
               onTouchEnd={handleTouchEnd}
          >
               {/* Background with animated gradient */}
               <div
                    className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.color} transition-all duration-1000`}
               >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] animate-pulse"></div>
                         <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_49%,_rgba(255,255,255,0.03)_50%,_transparent_51%)] bg-[length:20px_20px]"></div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute inset-0 overflow-hidden">
                         <div
                              className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce"
                              style={{ animationDelay: "0s" }}
                         ></div>
                         <div
                              className="absolute top-40 right-20 w-3 h-3 bg-white/15 rounded-full animate-bounce"
                              style={{ animationDelay: "1s" }}
                         ></div>
                         <div
                              className="absolute bottom-32 left-1/4 w-1 h-1 bg-white/25 rounded-full animate-bounce"
                              style={{ animationDelay: "2s" }}
                         ></div>
                         <div
                              className="absolute bottom-20 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-bounce"
                              style={{ animationDelay: "0.5s" }}
                         ></div>
                    </div>
               </div>

               {/* Navigation arrows */}
               <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all duration-300 group"
                    aria-label="Previous slide"
               >
                    <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
               </button>

               <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all duration-300 group"
                    aria-label="Next slide"
               >
                    <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
               </button>

               {/* Main content */}
               <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
                              {/* Text Content */}
                              <div
                                   className={`space-y-6 text-center lg:text-left ${
                                        animationReset
                                             ? "opacity-0"
                                             : "animate-fadeIn"
                                   }`}
                              >
                                   <div className="flex justify-center lg:justify-start mb-4">
                                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                                             <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                        </div>
                                   </div>

                                   <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                        {currentSlideData.title}
                                   </h1>

                                   <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                        {currentSlideData.description}
                                   </p>

                                   {/* Badges */}
                                   <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                        {currentSlideData.badges.map(
                                             (badge, index) => (
                                                  <span
                                                       key={badge}
                                                       className={`px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer ${
                                                            animationReset
                                                                 ? "opacity-0"
                                                                 : ""
                                                       }`}
                                                       style={{
                                                            animationDelay: `${
                                                                 index * 0.2
                                                            }s`,
                                                       }}
                                                  >
                                                       {badge}
                                                  </span>
                                             )
                                        )}
                                   </div>

                                   <div className="pt-4">
                                        <a
                                             href={currentSlideData.link}
                                             className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg hover:shadow-xl"
                                        >
                                             Learn More
                                             <TrendingUp className="w-4 h-4" />
                                        </a>
                                   </div>
                              </div>

                              {/* Visual Elements */}
                              <div
                                   className={`hidden lg:block relative ${
                                        animationReset
                                             ? "opacity-0"
                                             : "animate-fadeIn"
                                   }`}
                              >
                                   <div className="relative h-96 flex items-center justify-center">
                                        {/* Slide 1 - Web Development */}
                                        {currentSlide === 0 && (
                                             <div className="relative w-full h-full flex items-center justify-center">
                                                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/20 rounded-3xl backdrop-blur-sm"></div>
                                                  <div className="relative z-10 grid grid-cols-2 gap-4 p-8">
                                                       <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl transform hover:scale-105 transition-transform duration-500">
                                                            <Monitor className="w-12 h-12 text-white mb-4" />
                                                            <div className="space-y-2">
                                                                 <div className="h-2 bg-white/30 rounded"></div>
                                                                 <div className="h-2 bg-white/20 rounded w-3/4"></div>
                                                            </div>
                                                       </div>
                                                       <div
                                                            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl transform hover:scale-105 transition-transform duration-500"
                                                            style={{
                                                                 animationDelay:
                                                                      "0.2s",
                                                            }}
                                                       >
                                                            <Smartphone className="w-12 h-12 text-white mb-4" />
                                                            <div className="space-y-2">
                                                                 <div className="h-2 bg-white/30 rounded"></div>
                                                                 <div className="h-2 bg-white/20 rounded w-2/3"></div>
                                                            </div>
                                                       </div>
                                                       <div
                                                            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl transform hover:scale-105 transition-transform duration-500"
                                                            style={{
                                                                 animationDelay:
                                                                      "0.4s",
                                                            }}
                                                       >
                                                            <Globe className="w-12 h-12 text-white mb-4" />
                                                            <div className="space-y-2">
                                                                 <div className="h-2 bg-white/30 rounded"></div>
                                                                 <div className="h-2 bg-white/20 rounded w-4/5"></div>
                                                            </div>
                                                       </div>
                                                       <div
                                                            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl transform hover:scale-105 transition-transform duration-500"
                                                            style={{
                                                                 animationDelay:
                                                                      "0.6s",
                                                            }}
                                                       >
                                                            <TrendingUp className="w-12 h-12 text-white mb-4" />
                                                            <div className="space-y-2">
                                                                 <div className="h-2 bg-white/30 rounded"></div>
                                                                 <div className="h-2 bg-white/20 rounded w-1/2"></div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        )}

                                        {/* Slide 2 - SEO */}
                                        {currentSlide === 1 && (
                                             <div className="relative w-full h-full flex items-center justify-center">
                                                  <div className="relative">
                                                       <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                            <Search className="w-24 h-24 text-white" />
                                                       </div>
                                                       {/* Orbiting elements */}
                                                       <div
                                                            className="absolute inset-0 animate-spin"
                                                            style={{
                                                                 animationDuration:
                                                                      "20s",
                                                            }}
                                                       >
                                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                                                                 <div className="w-2 h-2 bg-white rounded-full"></div>
                                                            </div>
                                                            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                                                                 <div className="w-2 h-2 bg-white rounded-full"></div>
                                                            </div>
                                                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                                                                 <div className="w-2 h-2 bg-white rounded-full"></div>
                                                            </div>
                                                            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                                                                 <div className="w-2 h-2 bg-white rounded-full"></div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        )}

                                        {/* Slide 3 - Lead Generation */}
                                        {currentSlide === 2 && (
                                             <div className="relative w-full h-full flex items-center justify-center">
                                                  <div className="grid grid-cols-3 gap-4 items-center">
                                                       <div className="space-y-4">
                                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                                                                 <div className="w-8 h-8 bg-white/50 rounded-full"></div>
                                                            </div>
                                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                                                                 <div className="w-8 h-8 bg-white/50 rounded-full"></div>
                                                            </div>
                                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                                                                 <div className="w-8 h-8 bg-white/50 rounded-full"></div>
                                                            </div>
                                                       </div>
                                                       <div className="flex flex-col items-center">
                                                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                                                                 <Target className="w-10 h-10 text-white" />
                                                            </div>
                                                            <div className="w-1 h-16 bg-white/30 rounded-full"></div>
                                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mt-4">
                                                                 <TrendingUp className="w-8 h-8 text-white" />
                                                            </div>
                                                       </div>
                                                       <div className="space-y-4">
                                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                                                                 <div className="w-8 h-8 bg-white/50 rounded-full"></div>
                                                            </div>
                                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                                                                 <div className="w-8 h-8 bg-white/50 rounded-full"></div>
                                                            </div>
                                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                                                                 <div className="w-8 h-8 bg-white/50 rounded-full"></div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        )}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Progress indicators */}
               <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="flex items-center space-x-4">
                         {/* Dots */}
                         <div className="flex space-x-2">
                              {Array.from({ length: totalSlides }).map(
                                   (_, index) => (
                                        <button
                                             key={index}
                                             onClick={() => goToSlide(index)}
                                             className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                  index === currentSlide
                                                       ? "bg-white scale-125"
                                                       : "bg-white/40 hover:bg-white/60"
                                             }`}
                                             aria-label={`Go to slide ${
                                                  index + 1
                                             }`}
                                        />
                                   )
                              )}
                         </div>

                         {/* Progress bar */}
                         <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                              <div
                                   className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
                                   style={{ width: `${progress}%` }}
                              />
                         </div>
                    </div>
               </div>

               {/* Custom animations */}
               <style jsx>{`
                    @keyframes fadeIn {
                         from {
                              opacity: 0;
                              transform: translateY(20px);
                         }
                         to {
                              opacity: 1;
                              transform: translateY(0);
                         }
                    }

                    .animate-fadeIn {
                         animation: fadeIn 0.8s ease-out forwards;
                    }
               `}</style>
          </section>
     );
}
