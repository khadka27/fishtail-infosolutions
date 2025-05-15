
"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  Bell,
  ArrowUp,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  MapPin,
  ChevronRight,
  Send,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "@/Images/fishtailfotter.png";
import { QuotePopup } from "./quote-popup";

export function Footer() {
  const [showQuotePopup, setShowQuotePopup] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);

  // Show scroll to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      // Check if newsletter is in view
      if (newsletterRef.current) {
        const rect = newsletterRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInView) {
          newsletterRef.current.classList.add("animate-pulse-subtle");
          setTimeout(() => {
            if (newsletterRef.current) {
              newsletterRef.current.classList.remove("animate-pulse-subtle");
            }
          }, 1000);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleQuotePopup = () => {
    setShowQuotePopup((prev) => !prev);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue) {
      // Simulate subscription
      setTimeout(() => {
        setIsSubscribed(true);
        setEmailValue("");

        // Reset after 3 seconds
        setTimeout(() => {
          setIsSubscribed(false);
        }, 3000);
      }, 500);
    }
  };

  // Quick links for the footer
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Services links
  const serviceLinks = [
    { name: "SEO Optimization", href: "/Services/local-seo" },
    { name: "Social Media Marketing", href: "/Services/social-media" },
    { name: "PPC Campaigns", href: "/Services/ppc" },
    { name: "Content Marketing", href: "/services/content" },
    { name: "Email Marketing", href: "/services/email" },
    { name: "Analytics & Reporting", href: "/services/analytics" },
  ];

  // Social media links with hover colors
  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://x.com/fishtailinfo",
      hoverColor: "#1DA1F2",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      href: "https://www.facebook.com/share/16Hxkk7xAb/?mibextid=wwXIfr",
      hoverColor: "#4267B2",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/fishtailinfosolutions/",
      hoverColor: "#0077B5",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://www.instagram.com/fishtailinfosolutions/",
      hoverColor: "#E1306C",
    },
  ];

  return (
    <footer className="bg-[#003C8F] text-white pt-12 pb-6 relative">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="mb-6 transform transition-transform duration-300 hover:scale-105">
              <Image
                src={logo1 || "/placeholder.svg"}
                alt="Fishtail Infosolutions Logo"
                width={180}
                height={60}
                unoptimized

                className="h-auto"
              />
            </div>
            <p className="text-white/80 mb-6">
              With our expert digital marketing solutions, we help businesses
              increase their online visibility, drive targeted traffic, and
              achieve measurable growth in sales and conversions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: social.hoverColor,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-[#0084FF] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6 text-white relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#0084FF]"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  onHoverStart={() => setActiveLink(link.name)}
                  onHoverEnd={() => setActiveLink(null)}
                >
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white flex items-center group transition-colors duration-300"
                  >
                    <ChevronRight
                      className={`w-4 h-4 mr-2 text-[#0084FF] transition-transform duration-300 ${
                        activeLink === link.name ? "translate-x-1" : ""
                      }`}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6 text-white relative">
              <span className="relative z-10">Our Services</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#0084FF]"></span>
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  onHoverStart={() => setActiveLink(link.name)}
                  onHoverEnd={() => setActiveLink(null)}
                >
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white flex items-center group transition-colors duration-300"
                  >
                    <ChevronRight
                      className={`w-4 h-4 mr-2 text-[#0084FF] transition-transform duration-300 ${
                        activeLink === link.name ? "translate-x-1" : ""
                      }`}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6 text-white relative">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#0084FF]"></span>
            </h3>

            <div className="space-y-4">
              <motion.div whileHover={{ x: 5 }} className="flex items-start">
                <div className="mr-3 text-[#0084FF] mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-white">+910 8771234567</div>
                  <div className="text-white/60 text-sm">Sun–FRI 9AM–6PM</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start">
                <div className="mr-3 text-[#0084FF] mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-white">info@fishtailinfosolutions.com</div>
                  <div className="text-white/60 text-sm">
                    We reply within 24 hours
                  </div>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start">
                <div className="mr-3 text-[#0084FF] mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-white">604 Carson Dr CAK-953</div>
                  <div className="text-white/60 text-sm">
                    Bear, DE 19701-1450
                  </div>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleQuotePopup}
                className="mt-4 bg-[#0084FF] hover:bg-white text-white hover:text-[#0084FF] px-6 py-3 rounded-full transition-colors duration-300 flex items-center shadow-md hover:shadow-lg"
              >
                <Bell className="h-5 w-5 mr-2" />
                Request a Free Quote
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Newsletter subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          ref={newsletterRef}
          className="bg-[#0084FF]/10 rounded-xl p-6 mb-12 border border-[#0084FF]/20 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <h4 className="text-xl font-bold text-white">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-white/80 text-sm mt-2">
                Get the latest news and updates delivered to your inbox
              </p>
            </div>
            <div className="md:col-span-2">
              <AnimatePresence mode="wait">
                {isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-green-500/20 text-white rounded-lg p-4 flex items-center justify-center"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Thank you for subscribing!</span>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col sm:flex-row gap-3"
                    onSubmit={handleSubscribe}
                  >
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-300"
                      required
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="bg-white text-[#0084FF] hover:bg-[#0084FF] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                    >
                      <span>Subscribe</span>
                      <Send className="w-4 h-4 ml-2" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Copyright and bottom links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-white/60 text-sm mb-4 md:mb-0 text-center md:text-left">
            ©2024 Fishtail Infosolutions. All Rights Reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            <Link
              href="/"
              className="text-white/60 hover:text-white text-sm transition-colors duration-300 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-white/60 hover:text-white text-sm transition-colors duration-300 hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="text-white/60 hover:text-white text-sm transition-colors duration-300 hover:underline"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed right-6 bottom-6 bg-[#0084FF] hover:bg-white text-white hover:text-[#0084FF] w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Quote Popup */}
      <QuotePopup
        isOpen={showQuotePopup}
        onClose={() => setShowQuotePopup(false)}
      />
    </footer>
  );
}
