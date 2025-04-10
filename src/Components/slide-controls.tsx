"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  progress: number;
}

export function SlideControls({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onDotClick,
  progress,
}: SlideControlsProps) {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-2 z-30">
      {/* Navigation dots */}
      <div className="flex items-center justify-center space-x-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-110"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? "true" : "false"}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Arrow controls - visible on larger screens */}
      <div className="hidden md:flex items-center justify-between w-full px-6 mt-4">
        <button
          onClick={onPrevious}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={onNext}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
