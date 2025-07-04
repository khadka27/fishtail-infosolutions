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
     Star,
     Users,
     Award,
     Sparkles,
     Heart,
     Globe,
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

// Simplified FAQ data
const faqs = [
     {
          question: "Is Search Engine Submission Necessary?",
          answer: "No, search engine submission isn't necessary. Google and other major search engines crawl and index pages by following links from previously indexed pages.",
     },
     {
          question: "What's The Deal With Paid Search Submissions?",
          answer: "Beware of paid search submissions - it's completely free to get indexed by major search engines. You don't even need to submit your site manually.",
     },
     {
          question: "Can Inbound Linking Hurt My Ranking?",
          answer: "No, inbound linking cannot hurt your search ranking. Google cannot penalize your site for links you don't control, as competitors could abuse this.",
     },
     {
          question: "Are Blogs Good for SEO?",
          answer: "Content quality matters more than the platform. Blogs are simply publishing tools, but they make it easier to create ongoing, high-quality content.",
     },
];

// Simplified package features
const packageFeatures = {
     free: [
          { name: "Keyword Research & Selection", included: true },
          { name: "SEO Ranking Report", included: true },
          { name: "Basic On-Page Optimization", included: true },
          { name: "XML Sitemap Submission", included: true },
          { name: "Google Console Setup", included: true },
     ],
     small: [
          { name: "Everything in Free", included: true },
          { name: "Advanced On-Page SEO", included: true },
          { name: "Social Media Optimization", included: true },
          { name: "Monthly SEO Reports", included: true },
          { name: "Email Support", included: true },
          { name: "Content Optimization", included: true },
     ],
     enterprise: [
          { name: "Everything in Small Business", included: true },
          { name: "Advanced Analytics & Tracking", included: true },
          { name: "Priority Support & Chat", included: true },
          { name: "Blog Creation & Promotion", included: true },
          { name: "Competitor Analysis", included: true },
          { name: "Custom SEO Strategy", included: true },
          { name: "Monthly Strategy Calls", included: true },
     ],
};

// Testimonials data
const testimonials = [
     {
          quote: "Outstanding results! Our organic traffic increased by 150% in just three months.",
          name: "Sarah Johnson",
          title: "Marketing Director",
          avatar: avatar,
     },
     {
          quote: "Professional team with excellent communication. Highly recommend their services.",
          name: "Michael Chen",
          title: "Business Owner",
          avatar: avatar,
     },
     {
          quote: "Clear reporting and transparent pricing. Great value for our investment.",
          name: "Emma Rodriguez",
          title: "Startup Founder",
          avatar: avatar,
     },
];

type PlanType = "free" | "small" | "enterprise";

export default function PricingPage() {
     const [orderFormOpen, setOrderFormOpen] = useState(false);
     const [quotePopupOpen, setQuotePopupOpen] = useState(false);
     const [selectedPlan, setSelectedPlan] = useState<PlanType>("free");
     const [isScrolled, setIsScrolled] = useState(false);
     const [activePlan, setActivePlan] = useState<PlanType | null>(null);
     const topRef = useRef<HTMLDivElement>(null);

     const openOrderForm = (plan: PlanType) => {
          setSelectedPlan(plan);
          setOrderFormOpen(true);
     };

     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 200);
          };

          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     const scrollToTop = () => {
          topRef.current?.scrollIntoView({ behavior: "smooth" });
     };

     return (
          <div
               className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50"
               ref={topRef}
          >
               {/* Compact Sticky CTA */}
               <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{
                         y: isScrolled ? 0 : -100,
                         opacity: isScrolled ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg py-2 px-4 flex justify-between items-center"
               >
                    <div className="text-sm font-medium text-gray-800">
                         Ready to boost your SEO?
                    </div>
                    <button
                         onClick={() => setQuotePopupOpen(true)}
                         className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 shadow-md"
                    >
                         Get Quote
                    </button>
               </motion.div>

               {/* Modals */}
               <OrderForm
                    isOpen={orderFormOpen}
                    onClose={() => setOrderFormOpen(false)}
                    selectedPlan={selectedPlan}
               />

               <QuotePopup
                    isOpen={quotePopupOpen}
                    onClose={() => setQuotePopupOpen(false)}
               />

               {/* Compact Hero Section */}
               <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
                    {/* Light Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
                    <div className="absolute inset-0 opacity-20">
                         <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
                         <div
                              className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl animate-pulse"
                              style={{ animationDelay: "2s" }}
                         ></div>
                    </div>

                    <div className="container mx-auto max-w-6xl px-4 relative z-10">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              className="text-center mb-12"
                         >
                              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-blue-700 text-sm font-medium mb-6">
                                   <Sparkles className="w-4 h-4" />
                                   Simple & Transparent Pricing
                              </div>
                              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4">
                                   Choose Your
                                   <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {" "}
                                        SEO Plan
                                   </span>
                              </h1>
                              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                   Professional SEO services tailored to your
                                   business size and goals. Start free, scale as
                                   you grow.
                              </p>
                         </motion.div>

                         {/* Compact Pricing Cards */}
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                         >
                              {/* Free Plan */}
                              <motion.div
                                   whileHover={{ y: -5, scale: 1.02 }}
                                   className="relative group"
                                   onMouseEnter={() => setActivePlan("free")}
                                   onMouseLeave={() => setActivePlan(null)}
                              >
                                   <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                                        <div className="text-center mb-6">
                                             <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                                  <Flag className="w-6 h-6 text-white" />
                                             </div>
                                             <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                                  Free Trial
                                             </h3>
                                             <div className="text-3xl font-bold text-gray-800 mb-1">
                                                  FREE
                                             </div>
                                             <p className="text-sm text-gray-500">
                                                  No hidden fees
                                             </p>
                                        </div>

                                        <ul className="space-y-3 mb-6">
                                             {packageFeatures.free.map(
                                                  (feature, index) => (
                                                       <li
                                                            key={index}
                                                            className="flex items-center text-sm"
                                                       >
                                                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                                            {feature.name}
                                                       </li>
                                                  )
                                             )}
                                        </ul>

                                        <button
                                             onClick={() =>
                                                  openOrderForm("free")
                                             }
                                             className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                                        >
                                             Start Free Trial
                                        </button>
                                   </div>
                              </motion.div>

                              {/* Small Business Plan */}
                              <motion.div
                                   whileHover={{ y: -5, scale: 1.02 }}
                                   className="relative group"
                                   onMouseEnter={() => setActivePlan("small")}
                                   onMouseLeave={() => setActivePlan(null)}
                              >
                                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                                             Most Popular
                                        </span>
                                   </div>
                                   <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-blue-200 h-full">
                                        <div className="text-center mb-6">
                                             <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                                  <BarChart2 className="w-6 h-6 text-white" />
                                             </div>
                                             <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                                  Small Business
                                             </h3>
                                             <div className="text-3xl font-bold text-gray-800 mb-1">
                                                  £49.99
                                             </div>
                                             <p className="text-sm text-gray-500">
                                                  Perfect for growing businesses
                                             </p>
                                        </div>

                                        <ul className="space-y-3 mb-6">
                                             {packageFeatures.small.map(
                                                  (feature, index) => (
                                                       <li
                                                            key={index}
                                                            className="flex items-center text-sm"
                                                       >
                                                            <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                                                            {feature.name}
                                                       </li>
                                                  )
                                             )}
                                        </ul>

                                        <button
                                             onClick={() =>
                                                  openOrderForm("small")
                                             }
                                             className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                                        >
                                             Choose Plan
                                        </button>
                                   </div>
                              </motion.div>

                              {/* Enterprise Plan */}
                              <motion.div
                                   whileHover={{ y: -5, scale: 1.02 }}
                                   className="relative group"
                                   onMouseEnter={() =>
                                        setActivePlan("enterprise")
                                   }
                                   onMouseLeave={() => setActivePlan(null)}
                              >
                                   <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                                        <div className="text-center mb-6">
                                             <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                                  <Zap className="w-6 h-6 text-white" />
                                             </div>
                                             <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                                  Enterprise
                                             </h3>
                                             <div className="text-3xl font-bold text-gray-800 mb-1">
                                                  £129.99
                                             </div>
                                             <p className="text-sm text-gray-500">
                                                  For large companies
                                             </p>
                                        </div>

                                        <ul className="space-y-3 mb-6">
                                             {packageFeatures.enterprise.map(
                                                  (feature, index) => (
                                                       <li
                                                            key={index}
                                                            className="flex items-center text-sm"
                                                       >
                                                            <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                                                            {feature.name}
                                                       </li>
                                                  )
                                             )}
                                        </ul>

                                        <button
                                             onClick={() =>
                                                  openOrderForm("enterprise")
                                             }
                                             className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                                        >
                                             Choose Plan
                                        </button>
                                   </div>
                              </motion.div>
                         </motion.div>

                         {/* Compact CTA Buttons */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              className="flex flex-col sm:flex-row justify-center gap-4 text-center"
                         >
                              <Link
                                   href="/contact"
                                   className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg group"
                              >
                                   Free SEO Consultation
                                   <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                              <button
                                   onClick={() => setQuotePopupOpen(true)}
                                   className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200"
                              >
                                   <Heart className="mr-2 w-4 h-4 text-red-500" />
                                   Get Custom Quote
                              </button>
                         </motion.div>
                    </div>
               </section>

               {/* Compact Client Logos */}
               <section className="py-8 bg-white/50">
                    <div className="container mx-auto px-4">
                         <div className="text-center mb-6">
                              <div className="inline-flex items-center gap-2 text-gray-600 text-sm">
                                   <Users className="w-4 h-4" />
                                   Trusted by 500+ businesses
                              </div>
                         </div>
                         <LogoCarousel logos={clientLogos} />
                    </div>
               </section>

               {/* Compact FAQ Section */}
               <section className="py-12 bg-white">
                    <div className="container mx-auto max-w-4xl px-4">
                         <div className="text-center mb-8">
                              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-blue-100 px-4 py-2 rounded-full text-gray-700 text-sm font-medium mb-4">
                                   <Award className="w-4 h-4" />
                                   Common Questions
                              </div>
                              <h2 className="text-2xl sm:text-3xl font-light text-gray-800 mb-4">
                                   Frequently Asked Questions
                              </h2>
                         </div>
                         <FAQAccordion faqs={faqs} />
                    </div>
               </section>

               {/* Compact Testimonials */}
               <section className="py-12 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
                    <div className="container mx-auto max-w-4xl px-4">
                         <div className="text-center mb-8">
                              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
                                   <Star className="w-4 h-4" />
                                   Client Success Stories
                              </div>
                         </div>
                         <TestimonialSlider testimonials={testimonials} />
                    </div>
               </section>

               {/* Compact Final CTA */}
               <section className="py-12 bg-white">
                    <div className="container mx-auto max-w-4xl px-4">
                         <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 sm:p-8 text-white text-center shadow-xl"
                         >
                              <div className="flex items-center justify-center gap-2 mb-4">
                                   <Globe className="w-6 h-6" />
                                   <span className="text-sm font-medium">
                                        Ready to Grow?
                                   </span>
                              </div>
                              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                                   Transform Your Online Presence Today
                              </h2>
                              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                   Join thousands of businesses that have
                                   boosted their SEO with our proven strategies.
                              </p>
                              <div className="flex flex-col sm:flex-row justify-center gap-3">
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setQuotePopupOpen(true)}
                                        className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200"
                                   >
                                        Get Started Free
                                   </motion.button>
                                   <Link
                                        href="/contact"
                                        className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-200"
                                   >
                                        Schedule Consultation
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
                              className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-40"
                              onClick={scrollToTop}
                              aria-label="Scroll to top"
                         >
                              <ChevronUp className="h-5 w-5" />
                         </motion.button>
                    )}
               </AnimatePresence>
          </div>
     );
}
