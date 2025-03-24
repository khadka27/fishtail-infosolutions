"use client"

import { useState } from "react"
import { Heart, Phone, Mail, Share2 } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { MobileMenu } from "./mobile-menu"
import { SocialMediaDropdown } from "./social-media-dropdown"

// Define the dropdown menu items for each navigation link
const menuItems = {
  about: [
    { label: "Our Story", href: "/about/story" },
    { label: "Our Team", href: "/about/team" },
    { label: "Testimonials", href: "/about/testimonials" },
    { label: "Careers", href: "/about/careers" },
  ],
  services: [
    { label: "SEO Optimization", href: "/services/seo" },
    { label: "PPC Management", href: "/services/ppc" },
    { label: "Social Media Marketing", href: "/services/social-media" },
    { label: "Content Marketing", href: "/services/content" },
    { label: "Email Marketing", href: "/services/email" },
  ],
  projects: [
    { label: "Case Studies", href: "/projects/case-studies" },
    { label: "Portfolio", href: "/projects/portfolio" },
    { label: "Success Stories", href: "/projects/success-stories" },
  ],
  blog: [
    { label: "Latest Articles", href: "/blog/latest" },
    { label: "SEO Tips", href: "/blog/seo-tips" },
    { label: "Industry News", href: "/blog/news" },
    { label: "Guides & Tutorials", href: "/blog/guides" },
  ],
  contact: [
    { label: "Get in Touch", href: "/contact/get-in-touch" },
    { label: "Request a Quote", href: "/contact/quote" },
    { label: "Support", href: "/contact/support" },
    { label: "Locations", href: "/contact/locations" },
  ],
}

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [showSocialMenu, setShowSocialMenu] = useState(false)

  // Function to handle mouse enter on menu items
  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu)
  }

  // Function to handle mouse leave on menu items
  const handleMouseLeave = () => {
    setActiveMenu(null)
  }

  // Functions to handle social media dropdown
  const handleSocialMouseEnter = () => {
    setShowSocialMenu(true)
  }

  const handleSocialMouseLeave = () => {
    setShowSocialMenu(false)
  }

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="w-full bg-blue-500 text-white py-4 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Heart className="h-5 w-5 mr-3" />
            <span className="text-base">Easy to use theme with exciting features</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-base">0 (877) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <Link href="mailto:info@yoursite.com" className="text-base hover:underline">
                info@yoursite.com
              </Link>
            </div>
            <div className="relative flex items-center">
              <Share2 className="h-4 w-4 mr-2" />
              <span className="text-base cursor-pointer hover:underline" onMouseEnter={handleSocialMouseEnter}>
                follow us
              </span>

              {showSocialMenu && (
                <div
                  className="absolute right-0 top-full mt-2 bg-white rounded-md shadow-lg py-2 z-10 w-48 animate-in fade-in slide-in-from-top-5 duration-200"
                  onMouseEnter={handleSocialMouseEnter}
                  onMouseLeave={handleSocialMouseLeave}
                >
                  <SocialMediaDropdown />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white py-6 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-blue-800 font-bold text-3xl">SEO</span>
                  <span className="text-blue-400 font-bold text-3xl">WP</span>
                  <span className="text-blue-400 font-bold text-3xl">THEME</span>
                </div>
                <span className="text-gray-400 text-sm tracking-wider">DIGITAL MARKETING</span>
              </div>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-10 mr-10">
              {/* About dropdown */}
              <div className="relative">
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 font-medium text-lg"
                  onMouseEnter={() => handleMouseEnter("about")}
                >
                  About
                </Link>
                {activeMenu === "about" && (
                  <div
                    className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10 animate-in fade-in slide-in-from-top-5 duration-200"
                    onMouseEnter={() => handleMouseEnter("about")}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuItems.about.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services dropdown */}
              <div className="relative">
                <Link
                  href="#services"
                  className="text-gray-700 hover:text-blue-600 font-medium text-lg"
                  onMouseEnter={() => handleMouseEnter("services")}
                >
                  Services
                </Link>
                {activeMenu === "services" && (
                  <div
                    className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10 animate-in fade-in slide-in-from-top-5 duration-200"
                    onMouseEnter={() => handleMouseEnter("services")}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuItems.services.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Projects dropdown */}
              <div className="relative">
                <Link
                  href="#projects"
                  className="text-gray-700 hover:text-blue-600 font-medium text-lg"
                  onMouseEnter={() => handleMouseEnter("projects")}
                >
                  Projects
                </Link>
                {activeMenu === "projects" && (
                  <div
                    className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10 animate-in fade-in slide-in-from-top-5 duration-200"
                    onMouseEnter={() => handleMouseEnter("projects")}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuItems.projects.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Blog dropdown */}
              <div className="relative">
                <Link
                  href="#blog"
                  className="text-gray-700 hover:text-blue-600 font-medium text-lg"
                  onMouseEnter={() => handleMouseEnter("blog")}
                >
                  Blog
                </Link>
                {activeMenu === "blog" && (
                  <div
                    className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10 animate-in fade-in slide-in-from-top-5 duration-200"
                    onMouseEnter={() => handleMouseEnter("blog")}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuItems.blog.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact dropdown */}
              <div className="relative">
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 font-medium text-lg"
                  onMouseEnter={() => handleMouseEnter("contact")}
                >
                  Contact
                </Link>
                {activeMenu === "contact" && (
                  <div
                    className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10 animate-in fade-in slide-in-from-top-5 duration-200"
                    onMouseEnter={() => handleMouseEnter("contact")}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuItems.contact.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 h-auto text-base rounded-md flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                FREE QUOTE
              </Button>

              <div className="md:hidden">
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

