/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Heart,
  Phone,
  Mail,
  Share2,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { SocialMediaDropdown } from "./social-media-dropdown";
import { ServicesDropdown } from "./services-dropdown";
import { AboutDropdown } from "./about-dropdown";
import { ContactDropdown } from "./contact-dropdown";
import { QuotePopup } from "./quote-popup";
import logo from "@/Images/fishtail-blue.png";

// Define the dropdown menu items for each navigation link
const menuItems = {
  about: [
    { label: "Our Story", href: "/about/story" },
    { label: "Team", href: "/about/team" },
    { label: "Careers", href: "/about/careers" },
  ],
  services: [
    { label: "SEO", href: "/services/seo" },
    { label: "Content Marketing", href: "/services/content" },
    { label: "Social Media", href: "/services/social" },
    { label: "PPC", href: "/services/ppc" },
  ],
  projects: [
    { label: "Case Studies", href: "/projects/case-studies" },
    { label: "Portfolio", href: "/projects/portfolio" },
  ],
  contact: [
    { label: "Single Address", href: "/contact" },
    { label: "Multi Address", href: "/contact/multiple" },
    { label: "Instant SEO quote", href: "/contact/seo" },
  ],
};

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null
  );
  const [scrolled, setScrolled] = useState(false);
  const [quotePopupOpen, setQuotePopupOpen] = useState(false);

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

  // Toggle mobile drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    if (!drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  // Toggle mobile submenu
  const toggleMobileSubmenu = (menu: string) => {
    setExpandedMobileMenu(expandedMobileMenu === menu ? null : menu);
  };

  // Open quote popup
  const openQuotePopup = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuotePopupOpen(true);
    if (drawerOpen) {
      setDrawerOpen(false);
      document.body.style.overflow = "";
    }
  };
  const phoneNumber = "+9108771234567"; // Formatted for WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleClick = () => {
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && drawerOpen) {
        setDrawerOpen(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawerOpen]);

  const EmailButton: React.FC = () => {
    const handleMailClick = () => {
      window.open("mailto:info@fishtailinfosolutions.com", "_blank");
    };

    return (
      <>
        <header className={`relative z-50 ${scrolled ? "shadow-md" : ""}`}>
          {/* Top bar */}
          <div className="w-full bg-blue-800 text-white py-3 px-4 md:py-4 md:px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <div className="flex items-center text-center md:text-left">
                <Heart className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                <span className="text-sm md:text-base">
                  Easy to use theme with exciting features
                </span>
              </div>
              <div className="flex items-center space-x-4 md:space-x-8">
                <div
                  className="flex items-center cursor-pointer hover:text-primary transition-colors"
                  onClick={handleClick}
                >
                  <Phone className="h-4 w-4 md:h-4 md:w-4 mr-0 md:mr-2" />
                  <span className="hidden md:inline text-sm md:text-base">
                    0 (877) 123-4567
                  </span>
                </div>
                {/* <div className="flex items-center">
                <Mail className="h-4 w-4 md:h-4 md:w-4 mr-0 md:mr-2" />
                <Link href="mailto:info@fishtailinfosolutions.com" className="hidden md:inline text-sm md:text-base hover:underline">

                  fishtailinfosolutions.com
                </Link>
              </div> */}

                <div className="flex items-center">
                  <Mail className="h-4 w-4 md:h-4 md:w-4 mr-0 md:mr-2" />
                  <button
                    onClick={handleMailClick}
                    className="hidden md:inline text-sm md:text-base hover:underline cursor-pointer"
                    type="button"
                  >
                    fishtailinfosolutions.com
                  </button>
                </div>
                <div className="relative flex items-center">
                  <Share2 className="h-4 w-4 md:h-4 md:w-4 mr-0 md:mr-2" />
                  <span
                    className="hidden md:inline text-sm md:text-base cursor-pointer hover:underline"
                    onMouseEnter={handleSocialMouseEnter}
                  >
                    follow us
                  </span>
                  <button
                    className="md:hidden"
                    onClick={() => setShowSocialMenu(!showSocialMenu)}
                    aria-label="Follow us on social media"
                  >
                    <span className="sr-only">Follow us</span>
                  </button>

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
          <nav
            className={`bg-white py-3 md:py-6 px-4 md:px-8 lg:px-40 shadow-sm relative transition-all duration-300 ${
              scrolled ? "py-2 md:py-4" : ""
            }`}
          >
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src={logo || "/placeholder.svg"}
                    width={200}
                    height={100}
                    className="object-contain"
                    alt={""}
                  />
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
                  <Link
                    href="/quote"
                    className="hidden sm:block"
                    onClick={openQuotePopup}
                  >
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
                    onClick={toggleDrawer}
                    className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
                    aria-label={drawerOpen ? "Close menu" : "Open menu"}
                  >
                    <Menu
                      className={`h-6 w-6 ${drawerOpen ? "hidden" : "block"}`}
                    />
                    <X
                      className={`h-6 w-6 ${drawerOpen ? "block" : "hidden"}`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile drawer overlay */}
            {drawerOpen && (
              <div
                className="fixed inset-0 z-40 lg:hidden transition-opacity duration-300"
                onClick={toggleDrawer}
                aria-hidden="true"
              />
            )}

            {/* Mobile drawer */}
            <div
              className={`fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
                drawerOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                  <div className="flex items-center">
                    <span className="text-blue-800 font-bold text-xl">SEO</span>
                    <span className="text-blue-400 font-bold text-xl">WP</span>
                  </div>
                  <button
                    onClick={toggleDrawer}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="py-2">
                    {/* About accordion */}
                    <div className="border-b border-gray-100">
                      <div className="flex items-center justify-between w-full p-4 text-left text-gray-700 hover:bg-gray-50">
                        <Link
                          href="/about"
                          className="font-medium"
                          onClick={toggleDrawer}
                        >
                          About
                        </Link>
                        <button
                          onClick={() => toggleMobileSubmenu("about")}
                          className="p-1"
                        >
                          <ChevronRight
                            className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                              expandedMobileMenu === "about" ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {expandedMobileMenu === "about" && (
                        <div className="bg-gray-50 pl-8 pr-4 py-2 animate-in slide-in-from-top-5 duration-200">
                          {menuItems.about.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                              onClick={toggleDrawer}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Services accordion */}
                    <div className="border-b border-gray-100">
                      <div className="flex items-center justify-between w-full p-4 text-left text-gray-700 hover:bg-gray-50">
                        <Link
                          href="/Services"
                          className="font-medium"
                          onClick={toggleDrawer}
                        >
                          Services
                        </Link>
                        <button
                          onClick={() => toggleMobileSubmenu("services")}
                          className="p-1"
                        >
                          <ChevronRight
                            className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                              expandedMobileMenu === "services"
                                ? "rotate-90"
                                : ""
                            }`}
                          />
                        </button>
                      </div>

                      {expandedMobileMenu === "services" && (
                        <div className="bg-gray-50 pl-8 pr-4 py-2 animate-in slide-in-from-top-5 duration-200">
                          {menuItems.services.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                              onClick={toggleDrawer}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Projects accordion */}
                    <div className="border-b border-gray-100">
                      <div className="flex items-center justify-between w-full p-4 text-left text-gray-700 hover:bg-gray-50">
                        <Link
                          href="/project"
                          className="font-medium"
                          onClick={toggleDrawer}
                        >
                          Projects
                        </Link>
                        <button
                          onClick={() => toggleMobileSubmenu("projects")}
                          className="p-1"
                        >
                          <ChevronRight
                            className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                              expandedMobileMenu === "projects"
                                ? "rotate-90"
                                : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Blog accordion */}
                    <div className="border-b border-gray-100">
                      <div className="flex items-center justify-between w-full p-4 text-left text-gray-700 hover:bg-gray-50">
                        <Link
                          href="/blog"
                          className="font-medium"
                          onClick={toggleDrawer}
                        >
                          Blog
                        </Link>
                        <button
                          onClick={() => toggleMobileSubmenu("blog")}
                          className="p-1"
                        >
                          <ChevronRight
                            className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                              expandedMobileMenu === "blog" ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Contact accordion */}
                    <div className="border-b border-gray-100">
                      <div className="flex items-center justify-between w-full p-4 text-left text-gray-700 hover:bg-gray-50">
                        <Link
                          href="/contact"
                          className="font-medium"
                          onClick={toggleDrawer}
                        >
                          Contact
                        </Link>
                        <button
                          onClick={() => toggleMobileSubmenu("contact")}
                          className="p-1"
                        >
                          <ChevronRight
                            className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                              expandedMobileMenu === "contact"
                                ? "rotate-90"
                                : ""
                            }`}
                          />
                        </button>
                      </div>

                      {expandedMobileMenu === "contact" && (
                        <div className="bg-gray-50 pl-8 pr-4 py-2 animate-in slide-in-from-top-5 duration-200">
                          {menuItems.contact.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                              onClick={toggleDrawer}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t">
                  <button
                    onClick={(e) => {
                      toggleDrawer();
                      openQuotePopup(e);
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white w-full py-3 h-auto text-sm rounded-md flex items-center justify-center"
                  >
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
                  </button>

                  <div className="mt-4 flex items-center justify-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <Phone className="h-5 w-5" />
                    </a>
                    <a
                      href="mailto:info@yoursite.com"
                      className="text-gray-500 hover:text-blue-600"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <Share2 className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

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

        {/* Quote Popup */}
        <QuotePopup
          isOpen={quotePopupOpen}
          onClose={() => setQuotePopupOpen(false)}
        />
      </>
    );
  };
}
