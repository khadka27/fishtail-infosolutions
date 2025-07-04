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
     const slideInterval = useRef<NodeJS.Timeout | null>(null);
     const progressInterval = useRef<NodeJS.Timeout | null>(null);
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
               color: "from-blue-800 to-indigo-700",
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
          }, slideDuration) as unknown as null;

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

     const goToSlide = (index: any) => {
          setAnimationReset(true);
          setTimeout(() => {
               setCurrentSlide(index);
               setAnimationReset(false);
          }, 100);
     };

     const handleTouchStart = (e: any) => {
          setTouchStart(e.touches[0].clientX);
     };

     const handleTouchMove = (e: any) => {
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
               className="relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-screen flex items-center"
               onTouchStart={handleTouchStart}
               onTouchMove={handleTouchMove}
               onTouchEnd={handleTouchEnd}
          >
               {/* Enhanced Background with animated gradient */}
               <div
                    className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.color} transition-all duration-1000`}
               >
                    {/* Enhanced animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.15)_0%,_transparent_50%)] animate-pulse"></div>
                         <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_49%,_rgba(255,255,255,0.05)_50%,_transparent_51%)] bg-[length:30px_30px] md:bg-[length:40px_40px]"></div>
                    </div>

                    {/* Enhanced floating elements */}
                    <div className="absolute inset-0 overflow-hidden">
                         <div
                              className="absolute top-10 sm:top-20 left-4 sm:left-10 w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full animate-bounce"
                              style={{ animationDelay: "0s" }}
                         ></div>
                         <div
                              className="absolute top-20 sm:top-40 right-8 sm:right-20 w-2 h-2 sm:w-3 sm:h-3 bg-white/15 rounded-full animate-bounce"
                              style={{ animationDelay: "1s" }}
                         ></div>
                         <div
                              className="absolute bottom-16 sm:bottom-32 left-1/4 w-1 h-1 bg-white/25 rounded-full animate-bounce"
                              style={{ animationDelay: "2s" }}
                         ></div>
                         <div
                              className="absolute bottom-10 sm:bottom-20 right-1/3 w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full animate-bounce"
                              style={{ animationDelay: "0.5s" }}
                         ></div>
                         <div
                              className="absolute top-1/3 left-1/6 w-1 h-1 bg-white/30 rounded-full animate-bounce"
                              style={{ animationDelay: "1.5s" }}
                         ></div>
                         <div
                              className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-white/25 rounded-full animate-bounce"
                              style={{ animationDelay: "3s" }}
                         ></div>
                    </div>

                    {/* Grid overlay for larger screens */}
                    <div className="hidden lg:block absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
               </div>

               {/* Enhanced Navigation arrows - responsive positioning */}
               <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 sm:p-3 rounded-full transition-all duration-300 group hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Previous slide"
               >
                    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
               </button>

               <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 sm:p-3 rounded-full transition-all duration-300 group hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Next slide"
               >
                    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
               </button>

               {/* Enhanced Main content with better responsive layout */}
               <div className="relative z-10 w-full">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
                              {/* Enhanced Text Content */}
                              <div
                                   className={`space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left ${
                                        animationReset
                                             ? "opacity-0"
                                             : "animate-fadeIn"
                                   }`}
                              >
                                   {/* Enhanced Icon container */}
                                   <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                                        <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-5 rounded-2xl lg:rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                             <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" />
                                        </div>
                                   </div>

                                   {/* Enhanced responsive heading */}
                                   <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight sm:leading-tight lg:leading-tight">
                                        <span className="block sm:inline">
                                             {currentSlideData.title
                                                  .split(" ")
                                                  .slice(0, 2)
                                                  .join(" ")}
                                        </span>
                                        <span className="block sm:inline text-blue-200 ml-0 sm:ml-2">
                                             {currentSlideData.title
                                                  .split(" ")
                                                  .slice(2)
                                                  .join(" ")}
                                        </span>
                                   </h1>

                                   {/* Enhanced description with better typography */}
                                   <p className="text-white/90 text-sm sm:text-base lg:text-lg xl:text-xl max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed lg:leading-relaxed">
                                        {currentSlideData.description}
                                   </p>

                                   {/* Enhanced responsive badges */}
                                   <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                                        {currentSlideData.badges.map(
                                             (badge, index) => (
                                                  <span
                                                       key={badge}
                                                       className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105 ${
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

                                   {/* Enhanced CTA button */}
                                   <div className="pt-4 sm:pt-6">
                                        <a
                                             href={currentSlideData.link}
                                             className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-full font-semibold text-sm sm:text-base hover:bg-white/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg hover:shadow-xl relative overflow-hidden group"
                                        >
                                             <span className="relative z-10">
                                                  Learn More
                                             </span>
                                             <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                                             <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                        </a>
                                   </div>
                              </div>

                              {/* Enhanced Visual Elements - responsive and improved */}
                              <div
                                   className={`relative order-first lg:order-last ${
                                        animationReset
                                             ? "opacity-0"
                                             : "animate-fadeIn"
                                   }`}
                              >
                                   <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] flex items-center justify-center">
                                        {/* Slide 1 - Enhanced Web Development */}
                                        {currentSlide === 0 && (
                                             <div className="relative w-full h-full flex items-center justify-center">
                                                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/20 rounded-2xl lg:rounded-3xl backdrop-blur-sm border border-white/10"></div>
                                                  <div className="relative z-10 grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 p-4 sm:p-6 lg:p-8">
                                                       <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl transform hover:scale-105 transition-transform duration-500 border border-white/20">
                                                            <Monitor className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-white mb-2 sm:mb-3 lg:mb-4" />
                                                            <div className="space-y-1 sm:space-y-2">
                                                                 <div className="h-1 sm:h-2 bg-white/30 rounded"></div>
                                                                 <div className="h-1 sm:h-2 bg-white/20 rounded w-3/4"></div>
                                                            </div>
                                                       </div>
                                                       <div
                                                            className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl transform hover:scale-105 transition-transform duration-500 border border-white/20"
                                                            style={{
                                                                 animationDelay:
                                                                      "0.2s",
                                                            }}
                                                       >
                                                            <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-white mb-2 sm:mb-3 lg:mb-4" />
                                                            <div className="space-y-1 sm:space-y-2">
                                                                 <div className="h-1 sm:h-2 bg-white/30 rounded"></div>
                                                                 <div className="h-1 sm:h-2 bg-white/20 rounded w-2/3"></div>
                                                            </div>
                                                       </div>
                                                       <div
                                                            className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl transform hover:scale-105 transition-transform duration-500 border border-white/20"
                                                            style={{
                                                                 animationDelay:
                                                                      "0.4s",
                                                            }}
                                                       >
                                                            <Globe className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-white mb-2 sm:mb-3 lg:mb-4" />
                                                            <div className="space-y-1 sm:space-y-2">
                                                                 <div className="h-1 sm:h-2 bg-white/30 rounded"></div>
                                                                 <div className="h-1 sm:h-2 bg-white/20 rounded w-4/5"></div>
                                                            </div>
                                                       </div>
                                                       <div
                                                            className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl transform hover:scale-105 transition-transform duration-500 border border-white/20"
                                                            style={{
                                                                 animationDelay:
                                                                      "0.6s",
                                                            }}
                                                       >
                                                            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-white mb-2 sm:mb-3 lg:mb-4" />
                                                            <div className="space-y-1 sm:space-y-2">
                                                                 <div className="h-1 sm:h-2 bg-white/30 rounded"></div>
                                                                 <div className="h-1 sm:h-2 bg-white/20 rounded w-1/2"></div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        )}

                                        {/* Slide 2 - Enhanced SEO */}
                                        {currentSlide === 1 && (
                                             <div className="relative w-full h-full flex items-center justify-center">
                                                  <div className="relative">
                                                       <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                                                            <Search className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 text-white" />
                                                       </div>
                                                       {/* Enhanced orbiting elements */}
                                                       <div
                                                            className="absolute inset-0 animate-spin"
                                                            style={{
                                                                 animationDuration:
                                                                      "20s",
                                                            }}
                                                       >
                                                            <div className="absolute -top-2 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm p-1 sm:p-2 rounded-full border border-white/30">
                                                                 <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                                            </div>
                                                            <div className="absolute top-1/2 -right-2 sm:-right-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-1 sm:p-2 rounded-full border border-white/30">
                                                                 <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                                            </div>
                                                            <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm p-1 sm:p-2 rounded-full border border-white/30">
                                                                 <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                                            </div>
                                                            <div className="absolute top-1/2 -left-2 sm:-left-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-1 sm:p-2 rounded-full border border-white/30">
                                                                 <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        )}

                                        {/* Slide 3 - Enhanced Lead Generation */}
                                        {currentSlide === 2 && (
                                             <div className="relative w-full h-full flex items-center justify-center">
                                                  <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 items-center">
                                                       <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                                                            <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform border border-white/20">
                                                                 <div className="w-3 h-3 sm:w-5 sm:h-5 lg:w-8 lg:h-8 bg-white/50 rounded-full"></div>
                                                            </div>
                                                            <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform border border-white/20">
                                                                 <div className="w-3 h-3 sm:w-5 sm:h-5 lg:w-8 lg:h-8 bg-white/50 rounded-full"></div>
                                                            </div>
                                                            <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform border border-white/20">
                                                                 <div className="w-3 h-3 sm:w-5 sm:h-5 lg:w-8 lg:h-8 bg-white/50 rounded-full"></div>
                                                            </div>
                                                       </div>
                                                       <div className="flex flex-col items-center">
                                                            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 border border-white/30">
                                                                 <Target className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                                                            </div>
                                                            <div className="w-0.5 sm:w-1 h-8 sm:h-12 lg:h-16 bg-white/30 rounded-full"></div>
                                                            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mt-2 sm:mt-3 lg:mt-4 border border-white/30">
                                                                 <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                                                            </div>
                                                       </div>
                                                       <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                                                            <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform border border-white/20">
                                                                 <div className="w-3 h-3 sm:w-5 sm:h-5 lg:w-8 lg:h-8 bg-white/50 rounded-full"></div>
                                                            </div>
                                                            <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform border border-white/20">
                                                                 <div className="w-3 h-3 sm:w-5 sm:h-5 lg:w-8 lg:h-8 bg-white/50 rounded-full"></div>
                                                            </div>
                                                            <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform border border-white/20">
                                                                 <div className="w-3 h-3 sm:w-5 sm:h-5 lg:w-8 lg:h-8 bg-white/50 rounded-full"></div>
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

               {/* Enhanced Progress indicators - responsive positioning */}
               <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                         {/* Enhanced dots */}
                         <div className="flex space-x-1.5 sm:space-x-2">
                              {Array.from({ length: totalSlides }).map(
                                   (_, index) => (
                                        <button
                                             key={index}
                                             onClick={() => goToSlide(index)}
                                             className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                                                  index === currentSlide
                                                       ? "bg-white scale-125 shadow-lg"
                                                       : "bg-white/40 hover:bg-white/60 hover:scale-110"
                                             }`}
                                             aria-label={`Go to slide ${
                                                  index + 1
                                             }`}
                                        />
                                   )
                              )}
                         </div>

                         {/* Enhanced progress bar */}
                         <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-white/20 rounded-full overflow-hidden">
                              <div
                                   className="h-full bg-white rounded-full transition-all duration-100 ease-linear shadow-sm"
                                   style={{ width: `${progress}%` }}
                              />
                         </div>
                    </div>
               </div>

               {/* Enhanced custom animations */}
               <style jsx>{`
                    @keyframes fadeIn {
                         from {
                              opacity: 0;
                              transform: translateY(30px);
                         }
                         to {
                              opacity: 1;
                              transform: translateY(0);
                         }
                    }

                    .animate-fadeIn {
                         animation: fadeIn 0.8s ease-out forwards;
                    }

                    @media (max-width: 640px) {
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
                    }
               `}</style>
          </section>
     );
}
