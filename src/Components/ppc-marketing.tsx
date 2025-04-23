/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  MousePointer,
  BarChart2,
  Target,
  FileText,
  ArrowDown,
  DollarSign,
  Search,
  Zap,
  TrendingUp,
  CheckCircle,
  Settings,
  LineChart,
  Users,
  Globe,
} from "lucide-react";
import Form from "./form";
import { QuotePopup } from "./quote-popup";
import image1 from "@/Images/services-analytics-alt-colors-optimized.png";
import image2 from "@/Images/services-seo-alt-colors-optimized.png";
import image3 from "@/Images/services-payperclick-alt-colors-optimized.png";

// Define PPC marketing features
const ppcFeatures = [
  {
    title: "Google Ads Management",
    description:
      "Strategic management of Google Search, Display, Shopping, and YouTube ad campaigns to maximize ROI.",
    icon: Search,
    color: "blue",
  },
  {
    title: "Social Media Advertising",
    description:
      "Targeted advertising on Facebook, Instagram, LinkedIn, Twitter, and other social platforms to reach your ideal audience.",
    icon: Users,
    color: "purple",
  },
  {
    title: "Remarketing Campaigns",
    description:
      "Strategic remarketing to re-engage website visitors, abandoned carts, and past customers to boost conversions.",
    icon: Zap,
    color: "green",
  },
  {
    title: "Landing Page Optimization",
    description:
      "Conversion-focused landing page design and optimization to maximize the performance of your PPC campaigns.",
    icon: MousePointer,
    color: "orange",
  },
  {
    title: "Conversion Tracking",
    description:
      "Comprehensive tracking setup to measure and attribute conversions, revenue, and ROI across all campaigns.",
    icon: LineChart,
    color: "red",
  },
  {
    title: "PPC Analytics & Reporting",
    description:
      "Detailed performance analysis and reporting with actionable insights to continuously improve campaign results.",
    icon: BarChart2,
    color: "teal",
  },
];

// Define PPC marketing process steps
const ppcSteps = [
  {
    title: "Account & Competitor Analysis",
    description:
      "We analyze your existing accounts and competitors to identify opportunities and establish performance benchmarks.",
    icon: Search,
  },
  {
    title: "Strategy Development",
    description:
      "We create a customized PPC strategy aligned with your business goals, target audience, and competitive landscape.",
    icon: Target,
  },
  {
    title: "Campaign Structure & Setup",
    description:
      "We build optimized campaign structures with strategic keyword targeting, ad groups, and audience segmentation.",
    icon: Settings,
  },
  {
    title: "Ad Creation & Testing",
    description:
      "We develop compelling ad copy and creative assets, implementing systematic testing to identify top performers.",
    icon: FileText,
  },
  {
    title: "Bid & Budget Management",
    description:
      "We implement strategic bidding strategies and budget allocation to maximize results while controlling costs.",
    icon: DollarSign,
  },
  {
    title: "Optimization & Scaling",
    description:
      "We continuously optimize campaigns based on performance data and scale successful strategies to drive growth.",
    icon: TrendingUp,
  },
];

// Define case studies
const caseStudies = [
  {
    title: "E-commerce ROAS Improvement",
    description:
      "Increased return on ad spend (ROAS) from 3.2x to 8.7x for an e-commerce store through strategic campaign restructuring.",
    image: image1,
    bgColor: "bg-[#4285f4]",
    stats: { value: "8.7x", label: "ROAS" },
  },
  {
    title: "B2B Lead Generation",
    description:
      "Reduced cost per lead by 64% while increasing lead quality for a B2B software company through audience refinement.",
    image: image2,
    bgColor: "bg-[#34a853]",
    stats: { value: "-64%", label: "Cost Per Lead" },
  },
  {
    title: "Local Service Business Growth",
    description:
      "Generated 143 new customers per month for a local service business through targeted local PPC campaigns.",
    image: image3,
    bgColor: "bg-[#fbbc05]",
    stats: { value: "143", label: "New Customers/Mo" },
  },
  {
    title: "SaaS Subscription Acquisition",
    description:
      "Scaled new trial signups from 87 to 342 per month while maintaining acquisition costs for a growing SaaS company.",
    image: image1,
    bgColor: "bg-[#ea4335]",
    stats: { value: "293%", label: "Signup Increase" },
  },
  {
    title: "Multi-location Retail Expansion",
    description:
      "Supported successful expansion into 3 new markets for a retail chain through geo-targeted PPC campaigns.",
    image: image2,
    bgColor: "bg-[#673ab7]",
    stats: { value: "3", label: "New Markets" },
  },
];

const PPCMarketing = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [showQuotePopup, setShowQuotePopup] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleQuotePopup = () => {
    setShowQuotePopup((prev) => !prev);
  };

  // Auto-rotate case studies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCaseIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Check if element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col" ref={sectionRef}>
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-[#4285f4] to-[#34a853] text-white py-16 px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64">
              <Image
                src={image3 || "/ppc-performance-overview.png"}
                alt="PPC Marketing Services"
                width={256}
                height={256}
                unoptimized
                className="object-contain"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-[#4285f4] px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                Instant Results
              </motion.div>
            </div>
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-light mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Pay-Per-Click (PPC) Marketing Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We help your business{" "}
            <span className="font-bold">drive targeted traffic</span>, generate{" "}
            <span className="font-bold">qualified leads</span>, and increase
            conversions through strategic pay-per-click advertising campaigns.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              className="bg-white text-[#4285f4] hover:bg-gray-100 py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={scrollToForm}
            >
              <span className="font-medium">Get a Free PPC Audit</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              className="bg-[#fbbc05] hover:bg-[#f9b208] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={toggleQuotePopup}
            >
              <span className="font-medium">Request a Quote</span>
              <DollarSign className="ml-2 h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <ArrowDown className="h-8 w-8 mx-auto text-white/70 animate-bounce" />
          </motion.div>
        </div>
      </motion.div>

      {/* PPC Platforms */}
      <motion.div
        className="py-12 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-light text-gray-700">
            We manage all major PPC platforms
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#4285f4]/10 flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#4285f4]"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">Google Ads</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#1877F2]/10 flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#1877F2]"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">Facebook Ads</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#0A66C2]"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">LinkedIn Ads</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#FF0000]/10 flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#FF0000]"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">YouTube Ads</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#1DA1F2]"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">Twitter Ads</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#FF6600]/10 flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#FF6600]"
              >
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">Microsoft Ads</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="py-16 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-light text-gray-700 mb-4">
            Comprehensive PPC Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our pay-per-click marketing services are designed to help your
            business drive targeted traffic, generate qualified leads, and
            maximize return on ad spend across all major platforms.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {ppcFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                activeFeature === index
                  ? `ring-2 ring-${feature.color}-500`
                  : ""
              }`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() =>
                setActiveFeature(activeFeature === index ? null : index)
              }
            >
              <div
                className={`w-12 h-12 rounded-full bg-${feature.color}-100 flex items-center justify-center mb-4`}
              >
                <feature.icon className={`w-6 h-6 text-${feature.color}-500`} />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                {feature.title}
              </h3>

              <AnimatePresence>
                {activeFeature === index && (
                  <motion.p
                    className="text-gray-600 text-sm"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                )}
              </AnimatePresence>

              {activeFeature !== index && (
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Why PPC Marketing Matters Section */}
      <motion.div
        className="py-16 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-light text-gray-700 mb-4">
              Why PPC Marketing Matters
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Pay-per-click advertising offers unique advantages that make it an
              essential component of a comprehensive digital marketing strategy.
              Here&apos;s why investing in PPC is crucial for your business
              growth.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#4285f4]/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#4285f4]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Immediate Results
              </h3>
              <p className="text-gray-600 text-sm">
                Unlike SEO, PPC delivers immediate visibility and traffic,
                allowing you to generate leads and sales from day one of
                campaign launch.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#34a853]/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#34a853]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Precise Targeting
              </h3>
              <p className="text-gray-600 text-sm">
                PPC allows for highly specific audience targeting based on
                demographics, interests, behaviors, and search intent, ensuring
                your ads reach the right people.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#fbbc05]/10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-[#fbbc05]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Controlled Budget & Costs
              </h3>
              <p className="text-gray-600 text-sm">
                With PPC, you have complete control over your advertising
                budget, with the ability to set daily or monthly limits and
                adjust in real-time.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#ea4335]/10 flex items-center justify-center mb-4">
                <BarChart2 className="w-6 h-6 text-[#ea4335]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Measurable ROI
              </h3>
              <p className="text-gray-600 text-sm">
                PPC provides detailed performance metrics and conversion
                tracking, allowing you to measure exact return on investment for
                every dollar spent.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#673ab7]/10 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-[#673ab7]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Testing & Optimization
              </h3>
              <p className="text-gray-600 text-sm">
                PPC enables rapid testing of different messages, offers, and
                landing pages, providing valuable insights that can improve all
                marketing efforts.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#4285f4]/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#4285f4]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Competitive Advantage
              </h3>
              <p className="text-gray-600 text-sm">
                PPC allows you to compete effectively with larger competitors by
                appearing alongside them in search results and targeted
                placements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div
        className="py-16 px-4 bg-white"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-light text-gray-700 mb-4">
              Our PPC Management Process
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We follow a proven, data-driven approach to PPC management that
              consistently delivers results for businesses across industries and
              markets.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

            <motion.div
              className="space-y-12 md:space-y-0"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {ppcSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } items-center gap-8`}
                  variants={itemVariants}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <motion.div
                      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                        activeStep === index ? "ring-2 ring-[#4285f4]" : ""
                      }`}
                      whileHover={{ scale: 1.03 }}
                      onClick={() =>
                        setActiveStep(activeStep === index ? null : index)
                      }
                    >
                      <h3 className="text-xl font-medium mb-2 text-gray-800 flex items-center">
                        {index % 2 === 0 ? (
                          <>
                            <span>{step.title}</span>
                            <step.icon className="w-5 h-5 ml-2 text-[#4285f4]" />
                          </>
                        ) : (
                          <>
                            <step.icon className="w-5 h-5 mr-2 text-[#4285f4]" />
                            <span>{step.title}</span>
                          </>
                        )}
                      </h3>

                      <AnimatePresence>
                        {activeStep === index && (
                          <motion.p
                            className="text-gray-600"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {activeStep !== index && (
                        <div
                          className={`flex items-center text-sm text-gray-500 mt-2 ${
                            index % 2 === 0 ? "" : "justify-end"
                          }`}
                        >
                          {index % 2 === 0 ? (
                            <>
                              <span>Learn more</span>
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </>
                          ) : (
                            <>
                              <ChevronRight className="w-4 h-4 mr-1 transform rotate-180" />
                              <span>Learn more</span>
                            </>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  <div className="relative md:w-8 md:h-8">
                    <motion.div
                      className="w-8 h-8 rounded-full bg-[#4285f4] text-white flex items-center justify-center z-10 relative"
                      whileHover={{ scale: 1.2 }}
                      onClick={() =>
                        setActiveStep(activeStep === index ? null : index)
                      }
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        className="py-16 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-light text-gray-700 mb-4">
            Our PPC Marketing Impact
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We&apos;ve helped hundreds of businesses achieve significant growth
            through strategic pay-per-click advertising. Here&apos;s our track
            record of success.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#4285f4] mb-2">350+</div>
            <div className="text-sm text-gray-600">PPC Campaigns</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#34a853] mb-2">6.4x</div>
            <div className="text-sm text-gray-600">Avg. ROAS</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#fbbc05] mb-2">-42%</div>
            <div className="text-sm text-gray-600">Avg. Cost Per Lead</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#ea4335] mb-2">95%</div>
            <div className="text-sm text-gray-600">Client Retention</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#673ab7] mb-2">20+</div>
            <div className="text-sm text-gray-600">Industries Served</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#4285f4] mb-2">167%</div>
            <div className="text-sm text-gray-600">
              Avg. Conversion Increase
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="py-12 px-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button
          className="bg-[#4285f4] hover:bg-[#3b78e7] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={scrollToForm}
        >
          <Search className="mr-2 h-5 w-5" />
          <span>Get your free PPC audit</span>
        </button>
        <button
          className="bg-[#fbbc05] hover:bg-[#f9b208] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={toggleQuotePopup}
        >
          <TrendingUp className="mr-2 h-5 w-5" />
          <span>Boost your ad performance today</span>
        </button>
      </motion.div>

      {/* PPC Benefits */}
      <motion.div
        className="py-16 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-light text-gray-700 mb-4">
            Benefits of PPC Marketing
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Investing in pay-per-click marketing provides numerous advantages
            for businesses of all sizes. Here&apos;s how strategic PPC can
            benefit your business.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#4285f4]" />
              <span>Immediate Visibility & Traffic</span>
            </h3>
            <p className="text-gray-600">
              PPC delivers instant visibility in search results and ad
              placements, driving immediate traffic to your website without
              waiting for organic SEO results.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#4285f4]" />
              <span>Highly Targeted Audience Reach</span>
            </h3>
            <p className="text-gray-600">
              PPC allows you to target specific demographics, locations,
              interests, behaviors, and search intent, ensuring your ads reach
              the most relevant potential customers.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#4285f4]" />
              <span>Complete Budget Control</span>
            </h3>
            <p className="text-gray-600">
              With PPC, you set your own budget and only pay when someone clicks
              your ad, giving you complete control over your advertising costs
              and spending.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#4285f4]" />
              <span>Measurable Performance & ROI</span>
            </h3>
            <p className="text-gray-600">
              PPC provides detailed metrics on impressions, clicks, conversions,
              and costs, allowing you to measure exact return on investment and
              optimize for better results.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#4285f4]" />
              <span>Rapid Testing & Optimization</span>
            </h3>
            <p className="text-gray-600">
              PPC enables quick testing of different ad copy, headlines, offers,
              and landing pages, providing valuable insights that can be applied
              to improve all marketing efforts.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#4285f4]" />
              <span>Rapid Testing & Optimization</span>
            </h3>
            <p className="text-gray-600">
              PPC enables quick testing of different ad copy, headlines, offers,
              and landing pages, providing valuable insights that can be applied
              to improve all marketing efforts.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#4285f4]" />
              <span>Competitive Advantage</span>
            </h3>
            <p className="text-gray-600">
              PPC allows businesses of any size to compete effectively with
              larger competitors by appearing alongside them in search results
              and targeted placements.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#4285f4]" />
              <span>Remarketing Opportunities</span>
            </h3>
            <p className="text-gray-600">
              PPC enables remarketing to people who have previously visited your
              website, viewed specific products, or taken certain actions,
              significantly increasing conversion rates.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#4285f4]" />
              <span>Complementary to SEO</span>
            </h3>
            <p className="text-gray-600">
              PPC works synergistically with SEO efforts, providing immediate
              visibility while you build organic rankings, and offering valuable
              keyword and conversion data to inform SEO strategy.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Form Section with Ref */}
      <div ref={formRef} className="bg-gray-50 py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-gray-700 mb-4">
              Get Your Free PPC Audit
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how your PPC campaigns are performing and receive
              actionable recommendations to improve your click-through rates,
              quality scores, and conversions.
            </p>
          </div>
          <Form />
        </motion.div>
      </div>

      {/* Quote Popup */}
      <QuotePopup isOpen={showQuotePopup} onClose={toggleQuotePopup} />
    </div>
  );
};

export default PPCMarketing;
