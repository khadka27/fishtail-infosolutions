
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Flag,
  BarChart2,
  Zap,
  ArrowRight,
  CheckCircle,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "@/Images/logo1.png";
import logo2 from "@/Images/logo2.png";
import logo3 from "@/Images/logo3.png";
import logo4 from "@/Images/logo4.png";
import logo5 from "@/Images/logo5.png";
import logo6 from "@/Images/logo-6.png";
import avatar from "@/Images/avatar-4.png";
import OrderForm from "./order-form";
import { QuotePopup } from "./quote-popup";
import { PricingCard } from "./pricing-card";
import { LogoCarousel } from "./logo-carousel";
import { FAQAccordion } from "./faq-accordion";
import { TestimonialSlider } from "./testimonial-slider";

// Client logos
const clientLogos = [
  { name: "University", image: logo1 },
  { name: "Academy", image: logo2 },
  { name: "University", image: logo3 },
  { name: "Athletics", image: logo4 },
  { name: "Academy", image: logo5 },
  { name: "Cross Sport", image: logo6 },
];

// FAQ data
const faqs = [
  {
    question: "Is Search Engine Submission Necessary?",
    answer:
      "The simple answer is no, a search engine submission isn't necessary. The majority of search engines, notably Google, crawl and index pages by following links from previously indexed page will identify your page to the engine.",
  },
  {
    question: "What's The Deal With Paid Search Submissions?",
    answer:
      "Many SEO companies offer paid search submissions but beware: it doesn't cost a penny to get indexed by the major search engines. In fact, it's completely free. As a matter of fact, you don't even need to submit your site to search engines.",
  },
  {
    question: "Can Any Inbound Linking Hurt My Ranking?",
    answer:
      "The answer is simple - inbound linking cannot hurt your search ranking. If inbound were to hurt your rank, your competitors would continually link to your site from link farms. Such a scenario is beyond your control. For this reason, Google cannot penalize your site for any inbound linking.",
  },
  {
    question: "Are Blogs Good for SEO?",
    answer:
      "Whether blogs are good for SEO purposes is actually irrelevant; the content is key. Blogs are simply publishing platforms. Having said that, the ability to produce high quality content on an ongoing basis can be made much easier by leveraging blog software - especially for the less technical user.",
  },
  {
    question: "How Do I Make My Site Search Engine Friendly?",
    answer:
      "The best way to make your site more search engine friendly is often to simply add more text. The engine's primary goal is to provide relevant search results, so creating content with a variety of keywords and phrases for the search engines to crawl. Think of their terms as 'bait' gateways for the engines - the injection of text will provide new doorways for traffic.",
  },
  {
    question: "More about SEO:",
    answer:
      "Inbound linking is very important. In fact, acquiring back-links may be the most important thing in SEO. Nevertheless, a website's content, information architecture and technical SEO if the presented content is interesting, useful, and/or important, there is a natural tendency among web users to share information.",
  },
];

// Package feature type
type Feature = {
  name: string;
  included: boolean;
  description?: string;
};

// Package features
const packageFeatures = {
  free: [
    {
      name: "Keyword Research & Selection",
      included: true,
      description:
        "We identify the most valuable and relevant keywords for your business to target, analyzing search volume, competition, and user intent to maximize your visibility.",
    },
    {
      name: "Baseline SEO Ranking Report",
      included: true,
      description:
        "Get a comprehensive analysis of your current search engine rankings, identifying strengths, weaknesses, and opportunities for improvement.",
    },
    {
      name: "On Page Optimization",
      included: true,
      description:
        "We optimize your website's content, meta tags, headings, and internal linking structure to improve relevance and authority for target keywords.",
    },
    {
      name: "XML Sitemap Generation & Submission",
      included: true,
      description:
        "We create and submit XML sitemaps to search engines, ensuring all your important pages are properly indexed and crawled.",
    },
    {
      name: "Webmaster Tool Management",
      included: true,
      description:
        "We set up and manage Google Search Console and Bing Webmaster Tools to monitor your site's performance and address any issues that arise.",
    },
  ] as Feature[],
  small: [
    {
      name: "Keyword Research & Selection",
      included: true,
      description:
        "We identify the most valuable and relevant keywords for your business to target, analyzing search volume, competition, and user intent to maximize your visibility.",
    },
    {
      name: "Baseline SEO Ranking Report",
      included: true,
      description:
        "Get a comprehensive analysis of your current search engine rankings, identifying strengths, weaknesses, and opportunities for improvement.",
    },
    {
      name: "On Page Optimization",
      included: true,
      description:
        "We optimize your website's content, meta tags, headings, and internal linking structure to improve relevance and authority for target keywords.",
    },
    {
      name: "XML Sitemap Generation & Submission",
      included: true,
      description:
        "We create and submit XML sitemaps to search engines, ensuring all your important pages are properly indexed and crawled.",
    },
    {
      name: "Webmaster Tool Management",
      included: true,
      description:
        "We set up and manage Google Search Console and Bing Webmaster Tools to monitor your site's performance and address any issues that arise.",
    },
    {
      name: "Social Media Optimization",
      included: true,
      description:
        "We optimize your social media profiles and content strategy to increase engagement, brand awareness, and drive traffic to your website.",
    },
    {
      name: "Weekly & Monthly Reporting",
      included: true,
      description:
        "Receive detailed reports on your SEO performance, including rankings, traffic, conversions, and recommendations for continued improvement.",
    },
    {
      name: "24/7 Email Support",
      included: true,
      description:
        "Get answers to your questions and concerns at any time with our round-the-clock email support service.",
    },
  ] as Feature[],
  enterprise: [
    {
      name: "Keyword Research & Selection",
      included: true,
      description:
        "We identify the most valuable and relevant keywords for your business to target, analyzing search volume, competition, and user intent to maximize your visibility.",
    },
    {
      name: "Baseline SEO Ranking Report",
      included: true,
      description:
        "Get a comprehensive analysis of your current search engine rankings, identifying strengths, weaknesses, and opportunities for improvement.",
    },
    {
      name: "On Page Optimization",
      included: true,
      description:
        "We optimize your website's content, meta tags, headings, and internal linking structure to improve relevance and authority for target keywords.",
    },
    {
      name: "XML Sitemap Generation & Submission",
      included: true,
      description:
        "We create and submit XML sitemaps to search engines, ensuring all your important pages are properly indexed and crawled.",
    },
    {
      name: "Webmaster Tool Management",
      included: true,
      description:
        "We set up and manage Google Search Console and Bing Webmaster Tools to monitor your site's performance and address any issues that arise.",
    },
    {
      name: "Social Media Optimization",
      included: true,
      description:
        "We optimize your social media profiles and content strategy to increase engagement, brand awareness, and drive traffic to your website.",
    },
    {
      name: "Weekly & Monthly Reporting",
      included: true,
      description:
        "Receive detailed reports on your SEO performance, including rankings, traffic, conversions, and recommendations for continued improvement.",
    },
    {
      name: "24/7 Email Support",
      included: true,
      description:
        "Get answers to your questions and concerns at any time with our round-the-clock email support service.",
    },
    {
      name: "Online Chat Support",
      included: true,
      description:
        "Enjoy real-time assistance through our live chat support system, providing immediate answers to your questions.",
    },
    {
      name: "Blog Creation & Promotion",
      included: true,
      description:
        "We create high-quality blog content optimized for SEO and promote it across relevant channels to drive traffic and establish thought leadership.",
    },
  ] as Feature[],
};

// Testimonials data
const testimonials = [
  {
    quote:
      "We've looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they've been awesome to work with.",
    name: "Irene Warner",
    title: "CEO at Acme Inc",
    avatar: avatar,
  },
  {
    quote:
      "The team's expertise in SEO has transformed our online presence. Our organic traffic has increased by 150% in just three months!",
    name: "Michael Johnson",
    title: "Marketing Director at TechCorp",
    avatar: avatar,
  },
  {
    quote:
      "Their data-driven approach to SEO has helped us understand exactly what's working and why. Highly recommend their services to any business looking to grow.",
    name: "Sarah Thompson",
    title: "Founder of StyleHub",
    avatar: avatar,
  },
];

// Plan types
type PlanType = "free" | "small" | "enterprise";

export default function PricingPage() {
  const [orderFormOpen, setOrderFormOpen] = useState(false);
  const [quotePopupOpen, setQuotePopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("free");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePlan, setActivePlan] = useState<PlanType | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // Function to open order form with selected plan
  const openOrderForm = (plan: PlanType) => {
    setSelectedPlan(plan);
    setOrderFormOpen(true);
  };

  // Handle scroll for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-gray-50 text-gray-800"
      ref={topRef}
    >
      {/* Sticky CTA */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isScrolled ? 0 : -100, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 px-4 flex justify-between items-center ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-lg font-semibold text-gray-800">
          Ready to boost your SEO?
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setQuotePopupOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Get a Quote
          </button>
        </div>
      </motion.div>

      {/* Order Form Modal */}
      <OrderForm
        isOpen={orderFormOpen}
        onClose={() => setOrderFormOpen(false)}
        selectedPlan={selectedPlan}
      />

      {/* Quote Popup */}
      <QuotePopup
        isOpen={quotePopupOpen}
        onClose={() => setQuotePopupOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 10 L 40 10 M 10 0 L 10 40"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-light mb-6">
              Digital Marketing Pricing Packages
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include
              our core SEO services to help you grow your online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {/* Free Package */}
            <PricingCard
              planType="free"
              title="Free Trial"
              price="FREE"
              description="No hidden fees. No pressure."
              icon={<Flag className="h-10 w-10" />}
              features={packageFeatures.free}
              gradientFrom="lime-400"
              gradientTo="lime-600"
              textColor="white"
              accentColor="lime-600"
              accentBgColor="bg-lime-100"
              onBuyClick={openOrderForm}
              isActive={activePlan === "free"}
              onMouseEnter={() => setActivePlan("free")}
              onMouseLeave={() => setActivePlan(null)}
            />

            {/* Small Business Package */}
            <PricingCard
              planType="small"
              title="Small Business"
              price="£49.99"
              description="Ideal for Bloggers / Start Ups / Small Businesses"
              icon={<BarChart2 className="h-10 w-10" />}
              features={packageFeatures.small}
              popular={true}
              gradientFrom="blue-400"
              gradientTo="blue-600"
              textColor="white"
              accentColor="blue-600"
              accentBgColor="bg-blue-100"
              onBuyClick={openOrderForm}
              isActive={activePlan === "small"}
              onMouseEnter={() => setActivePlan("small")}
              onMouseLeave={() => setActivePlan(null)}
            />

            {/* Enterprise Package */}
            <PricingCard
              planType="enterprise"
              title="Enterprise"
              price="£129.99"
              description="For ecommerce and large companies"
              icon={<Zap className="h-10 w-10" />}
              features={packageFeatures.enterprise}
              gradientFrom="purple-400"
              gradientTo="purple-600"
              textColor="white"
              accentColor="purple-600"
              accentBgColor="bg-purple-100"
              onBuyClick={openOrderForm}
              isActive={activePlan === "enterprise"}
              onMouseEnter={() => setActivePlan("enterprise")}
              onMouseLeave={() => setActivePlan(null)}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-gray-600 mt-12 max-w-3xl mx-auto"
          >
            <p className="text-lg">
              No more page switching to see changes—everything is here in front
              of you! A new era of content creation has reached WordPress!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mt-10"
          >
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 font-medium group"
            >
              Free SEO Consultation
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => setQuotePopupOpen(true)}
              className="bg-lime-500 text-white px-8 py-4 rounded-full hover:bg-lime-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 font-medium group"
            >
              Request a Free Quote
              <CheckCircle className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-2xl text-center text-gray-700 mb-12 font-light">
            Trusted by Leading Brands
          </h2>
          <LogoCarousel logos={clientLogos} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl text-gray-800 font-light mb-4 md:mb-0">
              Frequently Asked Questions
            </h2>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium"
            >
              Ask a question
            </Link>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Boost Your Online Presence?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their digital
              marketing strategy with our SEO services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setQuotePopupOpen(true)}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200"
              >
                Get Started Today
              </motion.button>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to top button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
