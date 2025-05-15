"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  BarChart,
  Target,
  MousePointerClick,
  LayoutGrid,
  Eye,
  Lightbulb,
  Gauge,
  ArrowUpRight,
  CheckCircle2,
  
} from "lucide-react";
import { QuotePopup } from "./quote-popup";
import Form from "./form";

import research from "@/Images/research.jpg";
import hypothesis from "@/Images/Types-of-hypotheses.jpg";
import testDesign from "@/Images/test.jpg";
import implementation from "@/Images/implementation.webp";
import analysis from "@/Images/analysis.jpg";
// import ecommerce from "@/Images/Ecommerce-Services.webp";
// import saas from "@/Images/saas.jpg";
// import financial from "@/Images/finance.webp";
import testing from "@/Images/testing.png";

export default function ConversionRateOptimization() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/data-visualization-pattern.png')] bg-repeat opacity-10"></div>
          <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
            {Array.from({ length: 72 }).map((_, i) => (
              <div
                key={i}
                className="border border-white/5 flex items-center justify-center"
              >
                {Math.random() > 0.92 && (
                  <div
                    className={`w-2 h-2 rounded-full bg-green-400 opacity-${
                      Math.floor(Math.random() * 80) + 20
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Turn <span className="text-green-400">Visitors</span> Into{" "}
                <span className="text-green-400">Customers</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-200">
                Data-driven conversion rate optimization that boosts your bottom
                line with scientific precision
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
                >
                  Get a Free CRO Audit
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium transition-all border border-white/30"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Introduction Section */}
      {/* Key Metrics Section */}
      <section className="py-16 px-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-sm border border-purple-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">149%</h3>
              <p className="text-gray-600">
                Average conversion rate improvement for our clients
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl shadow-sm border border-indigo-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <LineChart className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">$4.2M</h3>
              <p className="text-gray-600">
                Additional revenue generated through our CRO strategies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-sm border border-blue-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MousePointerClick className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">312+</h3>
              <p className="text-gray-600">
                Successful A/B tests conducted in the last year
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Conversion Optimization Services
            </h2>
            <p className="text-lg text-gray-600">
              We use data-driven strategies to identify and eliminate conversion
              barriers, creating frictionless paths to purchase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-6 h-6 text-purple-600" />,
                title: "User Experience Analysis",
                description:
                  "Comprehensive analysis of user behavior, identifying friction points and opportunities for improvement",
                color: "purple",
              },
              {
                icon: <LayoutGrid className="w-6 h-6 text-indigo-600" />,
                title: "A/B & Multivariate Testing",
                description:
                  "Rigorous testing of design elements, copy, and functionality to determine optimal conversion paths",
                color: "indigo",
              },
              {
                icon: <LineChart className="w-6 h-6 text-blue-600" />,
                title: "Analytics Implementation",
                description:
                  "Advanced tracking setup to capture meaningful data about user behavior and conversion funnels",
                color: "blue",
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-green-600" />,
                title: "Landing Page Optimization",
                description:
                  "Strategic redesign of landing pages to maximize relevance, clarity, and conversion potential",
                color: "green",
              },
              {
                icon: <Gauge className="w-6 h-6 text-teal-600" />,
                title: "Conversion Funnel Analysis",
                description:
                  "In-depth examination of your conversion paths to identify and fix leaks in your sales funnel",
                color: "teal",
              },
              {
                icon: <BarChart className="w-6 h-6 text-cyan-600" />,
                title: "Personalization Strategies",
                description:
                  "Tailored user experiences based on behavior, demographics, and preferences to boost conversions",
                color: "cyan",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white p-8 rounded-xl shadow-sm border border-${service.color}-100 hover:shadow-md transition-all group`}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 bg-${service.color}-100 rounded-lg mb-6 group-hover:bg-${service.color}-200 transition-colors`}
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
                  Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Data-Driven CRO Process
            </h2>
            <p className="text-lg text-gray-600">
              A methodical approach to understanding user behavior and
              systematically improving conversion rates
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100 hidden md:block"></div>

            {[
              {
                title: "Research & Discovery",
                description:
                  "We analyze your analytics data, conduct user research, and perform heuristic evaluations to identify conversion barriers",
                image: research,
              },
              {
                title: "Hypothesis Formation",
                description:
                  "Based on research findings, we develop data-backed hypotheses about what changes will improve conversion rates",
                image: hypothesis,
              },
              {
                title: "Test Design & Development",
                description:
                  "We create variations of your pages with strategic changes designed to test our hypotheses",
                image: testDesign,
              },
              {
                title: "A/B Testing",
                description:
                  "We implement rigorous split tests to measure the impact of changes on your conversion metrics",
                image: testing,
              },
              {
                title: "Analysis & Learning",
                description:
                  "We analyze test results to determine winners and extract insights about user behavior",
                image: analysis,
              },
              {
                title: "Implementation & Iteration",
                description:
                  "We implement winning variations and use learnings to inform the next round of optimization",
                image: implementation,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center mb-12 md:mb-24 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2 p-4">
                  <div
                    className={`p-6 rounded-xl bg-gradient-to-br ${
                      index % 2 === 0
                        ? "from-purple-50 to-indigo-50 border border-purple-100"
                        : "from-indigo-50 to-blue-50 border border-indigo-100"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${
                          index % 2 === 0 ? "bg-purple-600" : "bg-indigo-600"
                        } text-white font-bold text-lg mr-4`}
                      >
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4 flex justify-center">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-xl transform rotate-3"></div>
                    <Image
                      src={
                        step.image ||
                        `/placeholder.svg?height=300&width=400&query=data visualization for ${step.title}`
                      }
                      alt={step.title}
                      width={400}
                      height={300}
                      unoptimized
                      className="relative z-10 rounded-xl shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {/* <section className="py-20 px-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-lg text-indigo-200">
              See how our conversion rate optimization strategies have
              transformed businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "E-commerce",
                title: "187% Increase in Add-to-Cart Conversions",
                description:
                  "Redesigned product pages with enhanced visuals, social proof, and streamlined checkout process",
                stats: [
                  { label: "Conversion Lift", value: "187%" },
                  { label: "Revenue Increase", value: "$1.2M" },
                ],
                image: ecommerce,
              },
              {
                industry: "SaaS",
                title: "94% More Trial Signups",
                description:
                  "Optimized landing pages with clearer value proposition and simplified signup forms",
                stats: [
                  { label: "Signup Increase", value: "94%" },
                  { label: "CAC Reduction", value: "32%" },
                ],
                image: saas,
              },
              {
                industry: "Financial Services",
                title: "63% Higher Lead Quality",
                description:
                  "Implemented progressive profiling and personalized content to attract qualified prospects",
                stats: [
                  { label: "Lead Quality", value: "+63%" },
                  { label: "Conversion Rate", value: "8.7%" },
                ],
                image: financial,
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={
                      study.image ||
                      `/placeholder.svg?height=300&width=500&query=data visualization for ${
                        study.industry || "/placeholder.svg"
                      } business`
                    }
                    alt={study.title}
                    width={500}
                    height={300}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-indigo-300 text-sm font-medium mb-2">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-indigo-100 mb-4">{study.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-3">
                        <div className="text-sm text-indigo-200">
                          {stat.label}
                        </div>
                        <div className="text-xl font-bold">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/project"
                    className="inline-flex items-center text-indigo-300 hover:text-indigo-200 font-medium"
                  >
                    View case study <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="py-20 px-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Why Invest in Conversion Rate Optimization?
            </h2>
            <p className="text-lg text-gray-600">
              CRO delivers measurable improvements to your bottom line without
              increasing ad spend
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Maximize Existing Traffic",
                description:
                  "Get more customers without increasing your marketing budget",
              },
              {
                title: "Reduce Acquisition Costs",
                description:
                  "Lower your cost per acquisition by converting more visitors",
              },
              {
                title: "Increase Customer Lifetime Value",
                description:
                  "Optimize not just for first purchase, but for long-term customer relationships",
              },
              {
                title: "Data-Driven Decisions",
                description:
                  "Replace guesswork with scientific testing and concrete results",
              },
              {
                title: "Improve User Experience",
                description:
                  "Create smoother, more intuitive paths to conversion",
              },
              {
                title: "Gain Competitive Edge",
                description:
                  "Outperform competitors by converting more of your shared audience",
              },
              {
                title: "Scalable Results",
                description:
                  "Improvements compound over time as you implement more optimizations",
              },
              {
                title: "Higher ROI Than Acquisition",
                description:
                  "Often delivers better returns than spending more on traffic generation",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-indigo-50 p-6 rounded-xl border border-indigo-100"
              >
                <CheckCircle2 className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-8 md:py-16  px-10 md:px-20 bg-slate-50">
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
                  Ready to Boost Your Conversion Rates?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get a free CRO audit and discover untapped revenue
                  opportunities on your website. Our team will analyze your
                  current conversion funnels and identify high-impact
                  optimization opportunities.
                </p>
                <div className="bg-indigo-100 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3 text-indigo-800">
                    What You&apos;ll Get:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Comprehensive analysis of your current conversion rates",
                      "Identification of critical conversion barriers",
                      "Prioritized list of optimization opportunities",
                      "Competitive benchmark analysis",
                      "Actionable recommendations you can implement immediately",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all"
                  >
                    Request a Custom Quote
                  </button>
                  <a
                    href="/contact"
                    className="px-6 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-all text-center"
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
                className="bg-white rounded-xl shadow-sm p-8 border border-slate-200"
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
