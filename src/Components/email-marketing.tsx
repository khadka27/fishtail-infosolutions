/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  BarChart2,
  Users,
  FileText,
  ArrowDown,
  DollarSign,
  PieChart,
  Clock,
  Target,
  Zap,
  Repeat,
  CheckCircle,
  Inbox,
  Send,
  Settings,
} from "lucide-react";
import Form from "./form";
import { QuotePopup } from "./quote-popup";
import image1 from "@/Images/services-analytics-alt-colors-optimized.png";
import image2 from "@/Images/services-seo-alt-colors-optimized.png";
import image3 from "@/Images/services-payperclick-alt-colors-optimized.png";
import emailMarketing from "@/Images/email-marketing.png";

// Define email marketing features
const emailFeatures = [
  {
    title: "Email Strategy Development",
    description:
      "Custom email marketing strategies aligned with your business goals, audience segments, and customer journey.",
    icon: Target,
    color: "blue",
  },
  {
    title: "Campaign Creation & Management",
    description:
      "End-to-end campaign development including design, copywriting, testing, deployment, and performance tracking.",
    icon: Send,
    color: "green",
  },
  {
    title: "Automated Email Sequences",
    description:
      "Strategic automation workflows that deliver the right message at the right time based on user behavior and triggers.",
    icon: Repeat,
    color: "purple",
  },
  {
    title: "List Growth & Management",
    description:
      "Effective strategies to grow your email list with engaged subscribers and maintain list health and deliverability.",
    icon: Users,
    color: "orange",
  },
  {
    title: "A/B Testing & Optimization",
    description:
      "Data-driven testing of subject lines, content, design, and send times to continuously improve performance.",
    icon: Settings,
    color: "red",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Comprehensive performance tracking with actionable insights and regular reporting on key email metrics.",
    icon: BarChart2,
    color: "teal",
  },
];

// Define email marketing process steps
const emailSteps = [
  {
    title: "Strategy & Planning",
    description:
      "We develop a customized email marketing strategy aligned with your business goals and target audience.",
    icon: Target,
  },
  {
    title: "List Building & Segmentation",
    description:
      "We help you grow and segment your email list to ensure messages reach the right audience at the right time.",
    icon: Users,
  },
  {
    title: "Content Creation",
    description:
      "We create compelling email content including copy, design, and CTAs that drive engagement and conversions.",
    icon: FileText,
  },
  {
    title: "Campaign Setup & Testing",
    description:
      "We set up your campaigns with proper tracking, conduct thorough testing, and optimize for deliverability.",
    icon: Settings,
  },
  {
    title: "Deployment & Monitoring",
    description:
      "We launch your campaigns and closely monitor performance in real-time to address any issues immediately.",
    icon: Send,
  },
  {
    title: "Analysis & Optimization",
    description:
      "We analyze campaign results, provide detailed reports, and implement data-driven improvements.",
    icon: PieChart,
  },
];

// Define case studies
const caseStudies = [
  {
    title: "E-commerce Revenue Growth",
    description:
      "Increased email-driven revenue by 187% for an online retailer through strategic segmentation and automated flows.",
    image: image1,
    bgColor: "bg-[#0084ff]",
    stats: { value: "187%", label: "Revenue Increase" },
  },
  {
    title: "SaaS Conversion Optimization",
    description:
      "Boosted trial-to-paid conversion rate by 43% for a SaaS company through targeted onboarding and nurture sequences.",
    image: image2,
    bgColor: "bg-[#00a0b0]",
    stats: { value: "43%", label: "Conversion Increase" },
  },
  {
    title: "Nonprofit Donor Engagement",
    description:
      "Increased donation frequency by 76% for a nonprofit through personalized donor nurturing and impact storytelling.",
    image: image3,
    bgColor: "bg-[#6b5b95]",
    stats: { value: "76%", label: "Donation Increase" },
  },
  {
    title: "B2B Lead Nurturing",
    description:
      "Generated 128 qualified sales opportunities for a B2B company through strategic lead nurturing campaigns.",
    image: "/b2b-email-marketing.png",
    bgColor: "bg-[#88b04b]",
    stats: { value: "128", label: "Sales Opportunities" },
  },
  {
    title: "Retail Customer Retention",
    description:
      "Reduced customer churn by 34% for a retail brand through personalized re-engagement and loyalty campaigns.",
    image: image3,
    bgColor: "bg-[#dd4124]",
    stats: { value: "34%", label: "Churn Reduction" },
  },
];

const EmailMarketing = () => {
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
        className="bg-gradient-to-r from-[#0084ff] to-[#00a0b0] text-white py-16 px-4 text-center"
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
                src={emailMarketing || "/placeholder.svg?key=rzxyn"}
                alt="Email Marketing Services"
                width={256}
                height={256}
                className="object-contain"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-[#0084ff] px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                4200% Average ROI
              </motion.div>
            </div>
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-light mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Email Marketing Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We help your business{" "}
            <span className="font-bold">
              connect directly with your audience
            </span>
            , drive <span className="font-bold">consistent revenue</span>, and
            build lasting customer relationships through strategic email
            marketing.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              className="bg-white text-[#0084ff] hover:bg-gray-100 py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={scrollToForm}
            >
              <span className="font-medium">
                Get a Free Email Marketing Audit
              </span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              className="bg-[#00a0b0] hover:bg-[#008a99] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
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
            Comprehensive Email Marketing Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our email marketing services are designed to help your business
            build meaningful connections with your audience, drive consistent
            revenue, and maximize customer lifetime value.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {emailFeatures.map((feature, index) => (
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

      {/* Why Email Marketing Matters Section */}
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
              Why Email Marketing Matters
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Email marketing remains one of the most effective digital
              marketing channels. Here&apos;s why investing in email marketing
              is crucial for your business growth.
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
              <div className="w-12 h-12 rounded-full bg-[#0084ff]/10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-[#0084ff]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                4200% Average ROI
              </h3>
              <p className="text-gray-600 text-sm">
                Email marketing generates an average return of $42 for every $1
                spent, making it one of the highest-ROI marketing channels
                available.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#00a0b0]/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#00a0b0]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                4.3 Billion Email Users Worldwide
              </h3>
              <p className="text-gray-600 text-sm">
                With over half the world&apos;s population using email, it
                provides unparalleled reach for your marketing messages.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#6b5b95]/10 flex items-center justify-center mb-4">
                <Inbox className="w-6 h-6 text-[#6b5b95]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                99% Daily Email Checking
              </h3>
              <p className="text-gray-600 text-sm">
                Nearly all email users check their inbox at least once daily,
                with many checking multiple times throughout the day.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#88b04b]/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#88b04b]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                60% Higher Conversion Rate
              </h3>
              <p className="text-gray-600 text-sm">
                Email marketing drives conversions at a rate 60% higher than
                social media and other marketing channels.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#dd4124]/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#dd4124]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Segmented Emails Drive 760% More Revenue
              </h3>
              <p className="text-gray-600 text-sm">
                Targeted, segmented email campaigns generate significantly
                higher revenue than generic, one-size-fits-all approaches.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#0084ff]/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#0084ff]" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Automated Emails Generate 320% More Revenue
              </h3>
              <p className="text-gray-600 text-sm">
                Automated email sequences deliver timely, relevant messages that
                drive significantly higher revenue than manual campaigns.
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
              Our Email Marketing Process
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We follow a proven, data-driven approach to email marketing that
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
              {emailSteps.map((step, index) => (
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
                        activeStep === index ? "ring-2 ring-[#0084ff]" : ""
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
                            <step.icon className="w-5 h-5 ml-2 text-[#0084ff]" />
                          </>
                        ) : (
                          <>
                            <step.icon className="w-5 h-5 mr-2 text-[#0084ff]" />
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
                      className="w-8 h-8 rounded-full bg-[#0084ff] text-white flex items-center justify-center z-10 relative"
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
            Our Email Marketing Impact
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We&apos;ve helped hundreds of businesses achieve significant growth
            through strategic email marketing. Here&apos;s our track record of
            success.
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
            <div className="text-4xl font-light text-[#0084ff] mb-2">400+</div>
            <div className="text-sm text-gray-600">Email Campaigns</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#00a0b0] mb-2">28%</div>
            <div className="text-sm text-gray-600">Avg. Open Rate</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#6b5b95] mb-2">3.2%</div>
            <div className="text-sm text-gray-600">Avg. Click Rate</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#88b04b] mb-2">96%</div>
            <div className="text-sm text-gray-600">Client Retention</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#dd4124] mb-2">18+</div>
            <div className="text-sm text-gray-600">Industries Served</div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-light text-[#0084ff] mb-2">154%</div>
            <div className="text-sm text-gray-600">Avg. ROI</div>
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
          className="bg-[#0084ff] hover:bg-[#0073e6] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={scrollToForm}
        >
          <Mail className="mr-2 h-5 w-5" />
          <span>Get your free email marketing audit</span>
        </button>
        <button
          className="bg-[#00a0b0] hover:bg-[#008a99] text-white py-3 px-6 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={toggleQuotePopup}
        >
          <Zap className="mr-2 h-5 w-5" />
          <span>Boost your email performance today</span>
        </button>
      </motion.div>

      {/* Email Marketing Benefits */}
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
            Benefits of Email Marketing
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Investing in email marketing provides numerous advantages for
            businesses of all sizes. Here&apos;s how strategic email marketing
            can benefit your business.
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
              <CheckCircle className="w-5 h-5 mr-2 text-[#0084ff]" />
              <span>Highest ROI of Any Marketing Channel</span>
            </h3>
            <p className="text-gray-600">
              Email marketing consistently delivers the highest return on
              investment compared to other marketing channels, with an average
              of $42 for every $1 spent.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#0084ff]" />
              <span>Direct Access to Your Audience</span>
            </h3>
            <p className="text-gray-600">
              Email provides direct access to your audience&apos;s inbox,
              without algorithm changes or platform restrictions that affect
              social media and other channels.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#0084ff]" />
              <span>Highly Personalized Communication</span>
            </h3>
            <p className="text-gray-600">
              Email allows for deep personalization based on customer data,
              behaviors, and preferences, creating more relevant and engaging
              experiences.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#0084ff]" />
              <span>Automated Customer Journeys</span>
            </h3>
            <p className="text-gray-600">
              Automation enables you to deliver the right message at the right
              time based on customer actions, creating efficient, scalable
              marketing workflows.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#0084ff]" />
              <span>Measurable Results & Insights</span>
            </h3>
            <p className="text-gray-600">
              Email provides detailed metrics and analytics that allow you to
              measure performance, test strategies, and continuously improve
              results.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#0084ff]" />
              <span>Increased Customer Lifetime Value</span>
            </h3>
            <p className="text-gray-600">
              Regular, valuable communication through email helps build stronger
              customer relationships, increasing retention, repeat purchases,
              and lifetime value.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#0084ff]" />
              <span>Ownership of Your Audience</span>
            </h3>
            <p className="text-gray-600">
              Unlike social media followers, your email list is an owned asset
              that can&apos;t be affected by platform changes, providing
              long-term marketing stability.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#0084ff]" />
              <span>Scalable for Businesses of All Sizes</span>
            </h3>
            <p className="text-gray-600">
              Email marketing can be effectively implemented by businesses of
              any size, from small startups to large enterprises, with
              strategies that scale with your growth.
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
              Get Your Free Email Marketing Audit
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how your email marketing is performing and receive
              actionable recommendations to improve your open rates,
              click-through rates, and conversions.
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

export default EmailMarketing;
