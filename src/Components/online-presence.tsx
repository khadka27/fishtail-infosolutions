"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  BarChart3,
  Users,
  MessageSquare,
  Share2,
  Zap,
  Eye,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { QuotePopup } from "./quote-popup";
import Form from "./form";
import Image from "next/image";
import footprint from "@/Images/Footprints.png";

import discovery from "@/Images/data-discovery.jpg";
import audit from "@/Images/comprehensive-audit.webp";
import gapAnalysis from "@/Images/gap-analysis.jpg";
import implementation from "@/Images/implementation-planning.jpg";
import strategy from "@/Images/seo-strategy.webp";

export default function OnlinePresenceAnalysis() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 100}
                cy={Math.random() * 100}
                r={Math.random() * 2 + 0.5}
                fill="white"
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <path
                key={`path-${i}`}
                d={`M${Math.random() * 100},${Math.random() * 100} Q${
                  Math.random() * 100
                },${Math.random() * 100} ${Math.random() * 100},${
                  Math.random() * 100
                }`}
                stroke="white"
                strokeWidth="0.2"
                fill="none"
              />
            ))}
          </svg>
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 mb-12 lg:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Discover Your True{" "}
                <span className="text-teal-300">Digital Footprint</span>
              </h1>
              <p className="text-xl mb-8 text-teal-100 max-w-xl">
                Comprehensive analysis of your entire online presence across
                search, social, and review platforms to uncover opportunities
                and threats
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
                >
                  Get Your Free Analysis
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium transition-all border border-white/30"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 "></div>
                <Image
                  src={footprint || "/digital-presence-dashboard.png"}
                  alt="Online Presence Analysis Dashboard"
                  width={600}
                  height={400}
                  unoptimized
                  className="relative z-10 rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 70C840 80 960 100 1080 100C1200 100 1320 80 1380 70L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Analysis Areas Section */}
      <section className="py-20 px-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Complete Digital Presence Analysis
            </h2>
            <p className="text-lg text-gray-600">
              We analyze every aspect of your online presence to provide a
              comprehensive view of your digital footprint
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-6 h-6 text-teal-600" />,
                title: "Search Visibility Analysis",
                description:
                  "Comprehensive audit of your search engine presence, rankings, and competitive positioning",
                color: "teal",
              },
              {
                icon: <Users className="w-6 h-6 text-emerald-600" />,
                title: "Social Media Presence",
                description:
                  "In-depth analysis of your social profiles, engagement metrics, and audience demographics",
                color: "emerald",
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-green-600" />,
                title: "Review & Reputation Audit",
                description:
                  "Thorough examination of your online reviews, ratings, and overall brand sentiment",
                color: "green",
              },
              {
                icon: <Globe className="w-6 h-6 text-cyan-600" />,
                title: "Website Performance",
                description:
                  "Technical analysis of your website's speed, usability, and conversion optimization opportunities",
                color: "cyan",
              },
              {
                icon: <Share2 className="w-6 h-6 text-blue-600" />,
                title: "Competitor Benchmarking",
                description:
                  "Side-by-side comparison with competitors across all digital channels",
                color: "blue",
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-indigo-600" />,
                title: "Analytics & Tracking Review",
                description:
                  "Evaluation of your analytics setup, data accuracy, and tracking implementation",
                color: "indigo",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white p-8 rounded-xl shadow-sm border-2 border-${service.color}-100 hover:border-${service.color}-300 transition-all group`}
              >
                <div
                  className={`flex items-center justify-center w-14 h-14 bg-${service.color}-100 rounded-full mb-6 group-hover:bg-${service.color}-200 transition-colors`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#"
                  className={`inline-flex items-center text-${service.color}-600 font-medium`}
                >
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Analysis Process
            </h2>
            <p className="text-lg text-gray-600">
              A methodical approach to understanding your complete digital
              footprint
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Discovery & Data Collection",
                description:
                  "We gather information about all your digital properties and collect data from various sources including search engines, social platforms, review sites, and analytics tools.",
                image: discovery,
              },
              {
                title: "Comprehensive Audit",
                description:
                  "Our team conducts a thorough analysis of your online presence, examining search visibility, social engagement, brand sentiment, website performance, and competitive positioning.",
                image: audit,
              },
              {
                title: "Gap Analysis",
                description:
                  "We identify gaps in your digital presence, missed opportunities, and areas where competitors may have an advantage over your brand.",
                image: gapAnalysis,
              },
              {
                title: "Strategic Recommendations",
                description:
                  "Based on our findings, we develop actionable recommendations to improve your online presence, prioritized by potential impact and implementation difficulty.",
                image: strategy,
              },
              {
                title: "Implementation Planning",
                description:
                  "We create a detailed roadmap for implementing our recommendations, including timelines, resource requirements, and expected outcomes.",
                image: implementation,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 relative"
              >
                {index < 4 && (
                  <div className="absolute left-10 top-20 bottom-0 w-1 bg-teal-200 hidden md:block"></div>
                )}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-20 flex-shrink-0 flex items-start justify-center mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold z-10">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                      <div className="md:w-1/3">
                        <Image
                          src={
                            step.image ||
                            `/placeholder.svg?height=150&width=200&query=digital analysis ${step.title}`
                          }
                          alt={step.title}
                          width={250}
                          height={150}

                          className="rounded-lg shadow-sm "

                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our Online Presence Analysis
              service
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question:
                  "What exactly is included in the Online Presence Analysis?",
                answer:
                  "Our comprehensive analysis includes an audit of your search engine visibility, social media presence, online reviews and reputation, website performance, competitor benchmarking, and analytics setup. We examine all aspects of your digital footprint to provide a complete picture of your online presence.",
              },
              {
                question: "How long does the analysis process take?",
                answer:
                  "A complete Online Presence Analysis typically takes 7-10 business days. This allows our team to thoroughly examine all aspects of your digital presence, collect comprehensive data, and develop actionable recommendations based on our findings.",
              },
              {
                question: "How is this different from an SEO audit?",
                answer:
                  "While an SEO audit focuses specifically on search engine optimization factors, our Online Presence Analysis takes a holistic approach to your entire digital footprint. We examine not just search visibility, but also social media presence, online reputation, website performance, and competitive positioning across all digital channels.",
              },
              {
                question: "Will you provide actionable recommendations?",
                answer:
                  "Absolutely. Our analysis isn't just about identifying issues—it's about providing solutions. You'll receive a detailed report with prioritized, actionable recommendations for improving your online presence, along with an implementation roadmap to help you put those recommendations into practice.",
              },
              {
                question:
                  "Do you offer implementation services for your recommendations?",
                answer:
                  "Yes, we offer full-service implementation of all our recommendations. While you're welcome to implement the recommendations yourself or with your existing team, many clients choose to work with us for seamless execution of the strategies we develop.",
              },
              {
                question: "How often should I get an Online Presence Analysis?",
                answer:
                  "We recommend conducting a comprehensive analysis annually, with quarterly check-ins to monitor progress and make adjustments as needed. However, if you're undergoing significant changes (rebranding, website redesign, entering new markets), an additional analysis may be beneficial.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-all ${
                    activeAccordion === index
                      ? "bg-teal-50 border-2 border-teal-200"
                      : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-teal-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {activeAccordion === index && (
                  <div className="p-6 bg-white border-x border-b border-gray-200 rounded-b-lg">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-20 bg-gradient-to-br from-teal-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Analyze Your Online Presence?
            </h2>
            <p className="text-lg text-teal-100">
              A comprehensive analysis provides the foundation for all your
              digital marketing efforts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-8 h-8 text-teal-300" />,
                title: "Complete Visibility",
                description:
                  "Gain a comprehensive understanding of your entire digital footprint across all platforms",
              },
              {
                icon: <Zap className="w-8 h-8 text-teal-300" />,
                title: "Identify Quick Wins",
                description:
                  "Discover high-impact, low-effort improvements you can implement immediately",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-teal-300" />,
                title: "Strategic Direction",
                description:
                  "Develop a data-driven roadmap for improving your digital presence",
              },
              {
                icon: <Users className="w-8 h-8 text-teal-300" />,
                title: "Understand Your Audience",
                description:
                  "Gain insights into how your audience perceives and interacts with your brand online",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-teal-300" />,
                title: "Competitive Intelligence",
                description:
                  "See how you stack up against competitors and identify opportunities to gain an edge",
              },
              {
                icon: <Globe className="w-8 h-8 text-teal-300" />,
                title: "Holistic Perspective",
                description:
                  "Break down silos between channels for a unified view of your digital presence",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-teal-400/20 hover:bg-white/15 transition-all"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-teal-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Ready to Discover Your True Digital Footprint?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get a free initial assessment of your online presence. Our
                  team will analyze your digital footprint and provide a
                  high-level overview of your strengths and opportunities.
                </p>
                <div className="bg-teal-50 rounded-lg p-6 mb-6 border border-teal-100">
                  <h3 className="text-xl font-bold mb-3 text-teal-800">
                    What You&apos;ll Receive:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "High-level assessment of your search visibility",
                      "Overview of your social media presence",
                      "Summary of your online reputation",
                      "Identification of critical gaps and opportunities",
                      "Recommendations for next steps",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-all"
                  >
                    Request a Custom Quote
                  </button>
                  <a
                    href="/contact"
                    className="px-6 py-3 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg font-medium transition-all text-center"
                  >
                    Schedule a Consultation
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-8 border border-gray-200"
              >
                <Form />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <QuotePopup isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
