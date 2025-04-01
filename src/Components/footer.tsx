"use client"

import { useState } from "react"
import {
  Phone,
  Mail,
  Bell,
  ArrowUp,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  Github,
  GalleryThumbnailsIcon as Flickr,
} from "lucide-react"
import Image from "next/image"
import logo1 from "@/Images/Logo-Fishtail-Infosolutions.png"
import { QuotePopup } from "./quote-popup"

export function Footer() {
  const [showQuotePopup, setShowQuotePopup] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const toggleQuotePopup = () => {
    setShowQuotePopup((prev) => !prev)
  }

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 px-4 sm:px-8 md:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-16">
          <Image src={logo1 || "/placeholder.svg"} alt="Logo" width={150} height={50} className="mb-4" />

          {/* Description */}
          <div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              With our theme, you no longer need to depend on predesigned footer layouts. Now, you can easily create
              your own with our intuitive drag & drop builder. Choose any columns variation, content element or color
              theme!
            </p>
          </div>
        </div>

        {/* Contact information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
          <div className="flex items-center">
            <div className="mr-3 md:mr-4 text-gray-500">
              <Phone className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <div>
              <div className="text-lg md:text-xl">+1 (234) 567.890.11</div>
              <div className="text-gray-500 text-xs sm:text-sm">MON–FRI 9AM–6PM</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-3 md:mr-4 text-gray-500">
              <Mail className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <div>
              <div className="text-lg md:text-xl">sales@example.com</div>
            </div>
          </div>

          <div className="flex items-center sm:col-span-2 md:col-span-1">
            <div className="mr-3 md:mr-4 text-gray-500">
              <Bell className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <div>
              <button
                onClick={toggleQuotePopup}
                className="text-lg md:text-xl hover:text-[#1ab5b3] transition-colors cursor-pointer"
              >
                request a free quote
              </button>
            </div>
          </div>
        </div>

        {/* Social media and copyright */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Flickr className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-6 md:mt-8 text-gray-500 text-xs sm:text-sm">
          ©2024 SEO & WP Marketing Agency. All Rights Reserved. Part of Blue Astral family
        </div>
      </div>

      {/* Quote Popup */}
      <QuotePopup isOpen={showQuotePopup} onClose={() => setShowQuotePopup(false)} />
    </footer>
  )
}

