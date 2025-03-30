"use client";

import { useState } from "react";
import { Heart, Phone, Mail, Share2, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { SocialMediaDropdown } from "./social-media-dropdown";
import { ServicesDropdown } from "./services-dropdown";
import { AboutDropdown } from "./about-dropdown";
import { ContactDropdown } from "./contact-dropdown";

// Define the dropdown menu items for each navigation link
const menuItems = {
  blog: [
    { label: "Latest Articles", href: "/blog/latest" },
    { label: "SEO Tips", href: "/blog/seo-tips" },
    { label: "Industry News", href: "/blog/news" },
    { label: "Guides & Tutorials", href: "/blog/guides" },
  ],
};

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle mouse enter on menu items
  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  // Function to handle mouse leave on menu items
  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  // Functions to handle social media dropdown
  const handleSocialMouseEnter = () => {
    setShowSocialMenu(true);
  };

  const handleSocialMouseLeave = () => {
    setShowSocialMenu(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="w-full bg-blue-800 text-white py-3 px-4 md:py-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center text-center md:text-left">
            <Heart className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
            <span className="text-sm md:text-base">
              Easy to use theme with exciting features
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8">
            <div className="flex items-center">
              <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              <span className="text-sm md:text-base">0 (877) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              <Link
                href="mailto:info@yoursite.com"
                className="text-sm md:text-base hover:underline"
              >
                info@yoursite.com
              </Link>
            </div>
            <div className="relative flex items-center">
              <Share2 className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              <span
                className="text-sm md:text-base cursor-pointer hover:underline"
                onMouseEnter={handleSocialMouseEnter}
              >
                follow us
              </span>

              {showSocialMenu && (
                <div
                  className="absolute right-0 top-full mt-2 bg-white rounded-md shadow-lg py-2 z-[100] w-48 animate-in fade-in slide-in-from-top-5 duration-200"
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
      <nav className="bg-white py-3 md:py-6 px-4 md:px-8 lg:px-40 shadow-sm relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-blue-800 font-bold text-xl md:text-2xl lg:text-3xl">
                    SEO
                  </span>
                  <span className="text-blue-400 font-bold text-xl md:text-2xl lg:text-3xl">
                    WP
                  </span>
                  <span className="text-blue-400 font-bold text-xl md:text-2xl lg:text-3xl">
                    THEME
                  </span>
                </div>
                <span className="text-gray-400 text-xs md:text-sm tracking-wider">
                  DIGITAL MARKETING
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-10 mr-6 xl:mr-10">
              {/* About dropdown */}
              <div className="relative">
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 font-medium text-base xl:text-lg"
                  onMouseEnter={() => handleMouseEnter("about")}
                >
                  About
                </Link>
              </div>

              {/* Services dropdown */}
              <div className="relative">
                <Link
                  href="/Services"
                  className="text-gray-700 hover:text-blue-600 font-medium text-base xl:text-lg"
                  onMouseEnter={() => handleMouseEnter("services")}
                >
                  Services
                </Link>
              </div>

              {/* Projects dropdown */}
              <div className="relative">
                <Link
                  href="/project"
                  className="text-gray-700 hover:text-blue-600 font-medium text-base xl:text-lg"
                  onMouseEnter={() => handleMouseEnter("projects")}
                >
                  Projects
                </Link>
              </div>

              {/* Blog dropdown */}
              <div className="relative">
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-blue-600 font-medium text-base xl:text-lg"
                  onMouseEnter={() => handleMouseEnter("blog")}
                >
                  Blog
                </Link>
                {activeMenu === "blog" && (
                  <div
                    className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-[100] animate-in fade-in slide-in-from-top-5 duration-200"
                    onMouseEnter={() => handleMouseEnter("blog")}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuItems.blog.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-sm lg:text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600"
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
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 font-medium text-base xl:text-lg"
                  onMouseEnter={() => handleMouseEnter("contact")}
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <Link href="/quote" className="hidden sm:block">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-8 py-2 md:py-3 h-auto text-xs md:text-sm lg:text-base rounded-md flex items-center">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2"
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
              </Link>

              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 animate-in slide-in-from-top-5 duration-200">
            <div className="py-2 px-4">
              <Link
                href="/about"
                className="block py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                About
              </Link>
              <Link
                href="/Services"
                className="block py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                Services
              </Link>
              <Link
                href="/project"
                className="block py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="block py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                Contact
              </Link>
              <Link href="/quote" className="block py-3 mt-2">
                <Button className="bg-green-500 hover:bg-green-600 text-white w-full py-2 h-auto text-sm rounded-md flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2"
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
              </Link>
            </div>
          </div>
        )}

        {/* Services mega dropdown */}
        {activeMenu === "services" && (
          <div
            className="absolute left-0 right-0 md:left-16 md:right-16 mt-0 bg-white shadow-lg py-6 z-[100] animate-in fade-in slide-in-from-top-5 duration-200"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto px-4 md:px-0">
              <ServicesDropdown />
            </div>
          </div>
        )}

        {/* About dropdown */}
        {activeMenu === "about" && (
          <div
            className="absolute left-0 right-0 md:left-1/2 md:transform md:-translate-x-1/2 mt-0 bg-white shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)] z-[100] animate-in fade-in slide-in-from-top-5 duration-200 md:w-[600px] rounded-md"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <AboutDropdown />
          </div>
        )}

        {/* Contact dropdown */}
        {activeMenu === "contact" && (
          <div
            className="absolute left-0 right-0 md:right-[15%] md:left-auto mt-0 bg-white shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)] z-[100] animate-in fade-in slide-in-from-top-5 duration-200 md:w-[700px] rounded-md"
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={handleMouseLeave}
          >
            <ContactDropdown />
          </div>
        )}
      </nav>
    </header>
  );
}
