/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import sliderImac from "@/Images/falt-illustration-imac.png";
import sliderMacbook from "@/Images/flat-illustration-macbook.png";
import sliderGraph from "@/Images/slider-element-graph.png";
import slide2miniphone from "@/Images/flat-illustration-iphone.png";
import slide2iphone from "@/Images/flat-illustration-iphone.png";
import slide2phone from "@/Images/flat-illustration-ipad.png";
import slideHand from "@/Images/flat-illustration-hand-smaller.png";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationReset, setAnimationReset] = useState(false);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = 3;
  const slideDuration = 6000; // 6 seconds

  const resetIntervals = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    if (progressInterval.current) clearInterval(progressInterval.current);

    // Reset progress
    setProgress(0);

    // Set up new intervals
    startIntervals();
  };

  const startIntervals = () => {
    // Auto-advance slides
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, slideDuration);

    // Progress bar animation
    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / (slideDuration / 100); // Increase by percentage per 100ms
      });
    }, 100);
  };

  const nextSlide = () => {
    setAnimationReset(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      setAnimationReset(false);
    }, 100);
  };

  const prevSlide = () => {
    setAnimationReset(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      setAnimationReset(false);
    }, 100);
  };

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      nextSlide();
    } else if (touchStart - touchEnd < -100) {
      // Swipe right
      prevSlide();
    }

    // Reset touch positions
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Set up intervals on component mount
  useEffect(() => {
    startIntervals();

    // Clean up on unmount
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  // Reset intervals when slide changes
  useEffect(() => {
    resetIntervals();
  }, [currentSlide]);

  return (
    <section
      className="relative overflow-hidden max-h-[430px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* First Slide - Blue */}
      <div
        className={`${
          currentSlide === 0 ? "block" : "hidden"
        } bg-[#0084FF] dark:bg-[#003C8F] py-8 sm:py-12 md:py-16 relative overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] transition-all duration-500`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40 h-full">
          <div className="flex flex-col md:flex-row items-center h-full">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              {/* Text content - appears first */}
              <div
                className={`animate-fade-in ${
                  animationReset ? "opacity-0" : ""
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-6">
                  Custom Web Development
                </h1>
                <p className="text-white text-base sm:text-lg opacity-90 mb-8 max-w-lg">
                  Boost your online presence with custom web development. Our
                  team creates responsive, user-friendly websites designed to
                  enhance your brand&apos;s digital experience. From concept to
                  launch, we ensure your website stands out.
                </p>

                {/* SEO, SMM, CRO badges - visible on mobile */}
                <div className="flex flex-wrap gap-2 md:hidden mb-6">
                  <span className="bg-transparent text-white text-xs px-3 py-1 rounded-full border border-white hover:bg-white/10 transition-colors cursor-pointer">
                    SEO
                  </span>
                  <span className="bg-transparent text-white text-xs px-3 py-1 rounded-full border border-white hover:bg-white/10 transition-colors cursor-pointer">
                    SMM
                  </span>
                  <span className="bg-transparent text-white text-xs px-3 py-1 rounded-full border border-white hover:bg-white/10 transition-colors cursor-pointer">
                    CRO
                  </span>
                </div>

                <a
                  href="/Services/web-development"
                  className="inline-block px-6 py-2.5 bg-white text-[#0084FF] rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0084FF]"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="hidden md:block md:w-1/2 relative">
              <div className="relative">
                {/* SEO, SMM, CRO badges - appears last */}
                <div
                  className={`flex space-x-2 absolute left-2 z-30 animate-fade-in-5 ${
                    animationReset ? "opacity-0" : ""
                  }`}
                >
                  <span className="bg-transparent text-white text-xs px-3 py-1 rounded-full border border-white hover:bg-white/10 transition-colors cursor-pointer">
                    SEO
                  </span>
                  <span className="bg-transparent text-white text-xs px-3 py-1 rounded-full border border-white hover:bg-white/10 transition-colors cursor-pointer">
                    SMM
                  </span>
                  <span className="bg-transparent text-white text-xs px-3 py-1 rounded-full border border-white hover:bg-white/10 transition-colors cursor-pointer">
                    CRO
                  </span>
                </div>

                {/* iMac illustration - appears second */}
                <div
                  className={`absolute right-0 top-0 z-10 animate-fade-in-2 ${
                    animationReset ? "opacity-0" : ""
                  }`}
                >
                  <Image
                    src={sliderImac || "/placeholder.svg"}
                    alt="Desktop computer"
                    width={400}
                    height={300}
                    className="transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* MacBook illustration - appears third */}
                <div
                  className={`absolute left-0 bottom-0 z-0 animate-fade-in-3 ${
                    animationReset ? "opacity-0" : ""
                  }`}
                >
                  <Image
                    src={sliderMacbook || "/placeholder.svg"}
                    alt="Laptop computer"
                    width={350}
                    height={200}
                    className="transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* The graph line overlay - appears fourth */}
                <Image
                  src={sliderGraph || "/placeholder.svg"}
                  alt="Growth graph"
                  width={600}
                  height={300}
                  className={`absolute z-20 top-[130px] right-0 animate-fade-in-4 ${
                    animationReset ? "opacity-0" : ""
                  }`}
                />

                {/* Placeholder div to maintain height */}
                <div className="h-[300px] w-full" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Slide - Deep Blue */}
      <div
        className={`${
          currentSlide === 1 ? "block" : "hidden"
        } bg-[#003C8F] dark:bg-[#0084FF] py-8 sm:py-12 md:py-16 relative overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] transition-all duration-500`}
      >
        {/* Background network pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:15px_15px]"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-full">
          <div className="flex flex-col items-start h-full">
            <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
              {/* Content on mobile (full width) and desktop (right side) */}
              <div className="w-full md:w-1/2 md:order-2 md:pl-8">
                <div
                  className={`animate-fade-in ${
                    animationReset ? "opacity-0" : ""
                  }`}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-6">
                    Search Engine Optimization
                  </h1>
                  <p className="text-white text-base sm:text-lg opacity-90 mb-8 max-w-lg">
                    Maximize your search engine visibility and drive organic
                    traffic. Our SEO services optimize your website to rank
                    higher, ensuring you reach your target audience and increase
                    conversions.
                  </p>

                  {/* PPC, Responsive Ads, SMM badges - visible on mobile */}
                  <div className="flex flex-wrap gap-2 md:hidden mb-6">
                    <span className="bg-transparent text-white text-xs px-3 py-1 rounded-full border border-white/40 hover:bg-white/10 transition-colors cursor-pointer">
                      PPC
                    </span>
                    <span className="bg-transparent text-white text-xs px-3 py-1 rounded-full border border-white/40 hover:bg-white/10 transition-colors cursor-pointer">
                      Responsive Ads
                    </span>
                    <span className="bg-transparent text-white text-xs px-3 py-1 rounded-full border border-white/40 hover:bg-white/10 transition-colors cursor-pointer">
                      SMM
                    </span>
                  </div>

                  <a
                  href="/Services/local-seo"
                  className="inline-block px-6 py-2.5 bg-white text-[#0084FF] rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0084FF]"
                >
                  Learn More
                </a>
                </div>
              </div>

              {/* Mobile devices on left - hidden on mobile */}
              <div className="hidden md:block md:w-1/2 md:order-1 relative mb-10 md:mb-0 flex justify-center">
                <div className="relative h-[300px] w-[600px]">
                  {/* Tablet - right - appears second */}
                  <div
                    className={`absolute ml-4 right-[80px] bottom-2 z-20 animate-fade-in-4 ${
                      animationReset ? "opacity-0" : ""
                    }`}
                  >
                    <Image
                      src={slide2phone || "/placeholder.svg"}
                      alt="iPad"
                      width={180}
                      height={220}
                      className="z-15 transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Small phone - left */}
                  <div
                    className={`absolute left-[50px] bottom-2 z-20 animate-fade-in-2 ${
                      animationReset ? "opacity-0" : ""
                    }`}
                  >
                    <Image
                      src={slide2iphone || "/placeholder.svg"}
                      alt="iPhone"
                      width={80}
                      height={120}
                      className="z-10 transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Medium phone - middle */}
                  <div
                    className={`absolute left-[180px] bottom-2 z-20 animate-fade-in-3 ${
                      animationReset ? "opacity-0" : ""
                    }`}
                  >
                    <div className="relative">
                      <Image
                        src={slide2miniphone || "/placeholder.svg"}
                        alt="Android"
                        width={100}
                        height={160}
                        className="z-20 transform hover:scale-105 transition-transform duration-500"
                      />

                      {/* PPC, Responsive Ads, SMM badges above the middle tablet */}
                      <div
                        className={`flex space-x-3 absolute -top-20 left-[14px] -translate-x-1/2 z-20 animate-fade-in-5 ${
                          animationReset ? "opacity-0" : ""
                        }`}
                      >
                        <span className="bg-transparent text-white text-xs px-2 rounded-full border border-white/40 hover:bg-white/10 transition-colors cursor-pointer">
                          PPC
                        </span>
                        <span className="bg-transparent text-white text-xs px-2 rounded-full border border-white/40 hover:bg-white/10 transition-colors cursor-pointer">
                          Responsive Ads
                        </span>
                        <span className="bg-transparent text-white text-xs px-2 rounded-full border border-white/40 hover:bg-white/10 transition-colors cursor-pointer">
                          SMM
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hand image - appears last */}
                  <div
                    className={`absolute left-[220px] top-[180px] z-30 animate-fade-in-5 ${
                      animationReset ? "opacity-0" : ""
                    }`}
                  >
                    <Image
                      src={slideHand || "/placeholder.svg"}
                      alt="Hand"
                      width={60}
                      height={60}
                      className="z-30 animate-pulse"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Slide - Black (Social Media) */}
      <div
        className={`${
          currentSlide === 2 ? "block" : "hidden"
        } bg-blue-300 dark:bg-blue-300 py-8 sm:py-12 md:py-16 relative overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] transition-all duration-500`}
      >
        {/* Background network pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:15px_15px]"></div>

        {/* SEO, SMM, CRO badges at top center - visible on all devices */}
        <div className="absolute top-8 sm:top-12 md:top-16 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-4 z-30 w-full px-4">
          <div
            className={`animate-fade-in-5 ${animationReset ? "opacity-0" : ""}`}
          >
            <span className="bg-transparent text-white text-xs px-3 py-1 rounded-full border border-white/40 hover:bg-white/10 transition-colors cursor-pointer">
              SEO
            </span>
          </div>
          <div
            className={`animate-fade-in-5 ${animationReset ? "opacity-0" : ""}`}
          >
            <span className="bg-transparent text-white text-xs px-3 py-1 rounded-full border border-white/40 hover:bg-white/10 transition-colors cursor-pointer">
              SMM
            </span>
          </div>
          <div
            className={`animate-fade-in-5 ${animationReset ? "opacity-0" : ""}`}
          >
            <span className="bg-transparent text-white text-xs px-3 py-1 rounded-full border border-white/40 hover:bg-white/10 transition-colors cursor-pointer">
              CRO
            </span>
          </div>
        </div>

        {/* Social media icons - hidden on mobile */}
        <div className="hidden md:block">
          {/* Facebook */}
          <div
            className={`absolute left-[15%] top-[20%] animate-fade-in-2 ${
              animationReset ? "opacity-0" : ""
            }`}
            onMouseEnter={(e) => e.currentTarget.classList.add("scale-110")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("scale-110")}
          >
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg overflow-hidden hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <Image
                src="https://cdn-icons-png.freepik.com/512/5968/5968764.png"
                alt="Facebook"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Twitter/X */}
          <div
            className={`absolute left-[10%] top-[40%] animate-fade-in-3 ${
              animationReset ? "opacity-0" : ""
            }`}
            onMouseEnter={(e) => e.currentTarget.classList.add("scale-110")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("scale-110")}
          >
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg overflow-hidden hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <Image
                src="https://cdn-icons-png.freepik.com/512/5969/5969020.png"
                alt="Twitter"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* LinkedIn */}
          <div
            className={`absolute left-[20%] top-[60%] animate-fade-in-4 ${
              animationReset ? "opacity-0" : ""
            }`}
            onMouseEnter={(e) => e.currentTarget.classList.add("scale-110")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("scale-110")}
          >
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg overflow-hidden hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <Image
                src="https://cdn-icons-png.freepik.com/512/3536/3536505.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* YouTube */}
          <div
            className={`absolute right-[15%] top-[20%] animate-fade-in-2 ${
              animationReset ? "opacity-0" : ""
            }`}
            onMouseEnter={(e) => e.currentTarget.classList.add("scale-110")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("scale-110")}
          >
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg overflow-hidden hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <Image
                src="https://cdn-icons-png.freepik.com/512/1384/1384060.png"
                alt="YouTube"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Instagram */}
          <div
            className={`absolute right-[10%] top-[40%] animate-fade-in-3 ${
              animationReset ? "opacity-0" : ""
            }`}
            onMouseEnter={(e) => e.currentTarget.classList.add("scale-110")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("scale-110")}
          >
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg overflow-hidden hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <Image
                src="https://cdn-icons-png.freepik.com/512/174/174855.png"
                alt="Instagram"
                width={40}
                height={40}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Pinterest */}
          <div
            className={`absolute right-[20%] top-[60%] animate-fade-in-4 ${
              animationReset ? "opacity-0" : ""
            }`}
            onMouseEnter={(e) => e.currentTarget.classList.add("scale-110")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("scale-110")}
          >
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg overflow-hidden hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <Image
                src="https://cdn-icons-png.freepik.com/512/145/145808.png"
                alt="Pinterest"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center max-w-2xl px-4">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-6 animate-fade-in ${
                animationReset ? "opacity-0" : ""
              }`}
            >
              Targeted Lead Generation
            </h1>
            <p
              className={`text-white text-base sm:text-lg opacity-90 mb-8 max-w-lg mx-auto animate-fade-in ${
                animationReset ? "opacity-0" : ""
              }`}
            >
              Generate high-quality leads that convert. We employ data-driven
              strategies to attract and nurture prospects, turning them into
              loyal customers and driving your business growth.
            </p>

            <a
                  href="/Services/led-generation"
                  className="inline-block px-6 py-2.5 bg-white text-[#0084FF] rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0084FF]"
                >
                  Learn More
                </a>
          </div>
        </div>
      </div>

      {/* Slide Controls Component
        <SlideControls
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrevious={prevSlide}
          onNext={nextSlide}
          onDotClick={goToSlide}
          progress={progress}
        /> */}
    </section>
  );
}
