"use client"

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

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white py-12 px-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Logo and company info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="flex items-start">
                <div className="text-2xl font-bold">
                  <span className="text-white">SEO</span>
                  <span className="text-white">WP</span>
                </div>
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mt-1">
                DIGITAL
                <br />
                MARKETING
                <br />
                AGENCY
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              With our theme, you no longer need to depend on predesigned footer layouts. Now, you can easily create
              your own with our intuitive drag & drop builder. Choose any columns variation, content element or color
              theme!
            </p>
          </div>
        </div>

        {/* Contact information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center">
            <div className="mr-4 text-gray-500">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xl">+1 (234) 567.890.11</div>
              <div className="text-gray-500 text-sm">MON–FRI 9AM–6PM</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-4 text-gray-500">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xl">sales@example.com</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-4 text-gray-500">
              <Bell className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xl">request a free quote</div>
            </div>
          </div>
        </div>

        {/* Social media and copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-6 md:mb-0">
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

        <div className="text-center mt-8 text-gray-500 text-sm">
          ©2024 SEO & WP Marketing Agency. All Rights Reserved. Part of Blue Astral family
        </div>
      </div>
    </footer>
  )
}

