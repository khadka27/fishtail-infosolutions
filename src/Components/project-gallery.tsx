"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "LinkedIn Ad Campaign",
    caption: "LinkedIn Ad Campaign targeting professionals",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Google Search Ad",
    caption: "Google Search Ad for MBA program",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Landing Page Design",
    caption: "Custom landing page with optimized conversion elements",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Facebook Retargeting Ad",
    caption: "Facebook retargeting ad for interested prospects",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Campaign Dashboard",
    caption: "Campaign performance dashboard showing key metrics",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Email Nurture Sequence",
    caption: "Email nurture sequence for lead conversion",
  },
]

export default function ProjectGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                width={400}
                height={225}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
              <div className="p-3 w-full bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 z-10"
            aria-label="Previous image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative max-w-4xl max-h-[80vh]">
            <Image
              src={galleryImages[currentImage].src || "/placeholder.svg"}
              alt={galleryImages[currentImage].alt}
              className="max-h-[80vh] w-auto object-contain"
              width={800}
              height={600}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
              <p className="text-white text-center">{galleryImages[currentImage].caption}</p>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 z-10"
            aria-label="Next image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
