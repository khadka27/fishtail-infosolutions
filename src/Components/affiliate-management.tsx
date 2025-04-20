"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  Users,
  BarChart,
  DollarSign,
  Briefcase,
  ShoppingCart,
  Zap,
  Award,
  Percent,
  Link,
  Settings,
  FileText,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react"
import { QuotePopup } from "./quote-popup"
import Form from "./form"
import Image from "next/image"

import ecommerce from "@/Images/Ecommerce-Services.webp"
import saas from "@/Images/saas.jpg"
import financial from "@/Images/finance.webp"
import grow from "@/Images/grow-business.jpg"

export default function AffiliateManagement() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-20 overflow-hidden bg-gradient-to-r from-orange-600 to-pink-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/network-pattern.png')] bg-repeat opacity-10"></div>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/30 backdrop-blur-sm"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 40 - 20],
                y: [0, Math.random() * 40 - 20],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 mb-12 lg:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Grow Your Business Through <span className="text-yellow-300">Partner Networks</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100 max-w-xl">
                Expert affiliate program management that builds, optimizes, and scales your partner marketing channels
                for maximum ROI
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
                >
                  Start Your Affiliate Program
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
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl transform rotate-3"></div>
                <Image
                  src={grow || "/affiliate-network-illustration.png"}
                  alt="Affiliate Network Illustration"
                  width={600}
                  height={400}
                  className="relative z-10 rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 70C840 80 960 100 1080 100C1200 100 1320 80 1380 70L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 px-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl shadow-sm border border-orange-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <DollarSign className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">327%</h3>
              <p className="text-gray-600">Average ROI for our affiliate programs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl shadow-sm border border-yellow-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5,400+</h3>
              <p className="text-gray-600">Active affiliates recruited and managed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <ShoppingCart className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">$12.4M</h3>
              <p className="text-gray-600">Revenue generated through affiliate channels</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl shadow-sm border border-red-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <BarChart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">42%</h3>
              <p className="text-gray-600">Average conversion rate improvement</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Comprehensive Affiliate Management Services
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end affiliate program management that drives sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-6 h-6 text-orange-600" />,
                title: "Program Strategy & Setup",
                description:
                  "Custom affiliate program development tailored to your business goals, industry, and target audience",
                color: "orange",
              },
              {
                icon: <Users className="w-6 h-6 text-yellow-600" />,
                title: "Affiliate Recruitment",
                description: "Strategic outreach and onboarding of high-quality affiliates aligned with your brand",
                color: "yellow",
              },
              {
                icon: <Award className="w-6 h-6 text-amber-600" />,
                title: "Incentive Structure Design",
                description:
                  "Development of compelling commission structures and bonus programs to motivate affiliates",
                color: "amber",
              },
              {
                icon: <Settings className="w-6 h-6 text-red-600" />,
                title: "Platform Management",
                description: "Technical setup and ongoing management of your affiliate tracking platform",
                color: "red",
              },
              {
                icon: <FileText className="w-6 h-6 text-pink-600" />,
                title: "Content & Resource Creation",
                description: "Development of high-converting creative assets and marketing materials for affiliates",
                color: "pink",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-rose-600" />,
                title: "Performance Optimization",
                description: "Continuous analysis and optimization of affiliate campaigns to maximize ROI",
                color: "rose",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group`}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 bg-${service.color}-100 rounded-lg mb-6 group-hover:bg-${service.color}-200 transition-colors`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className={`inline-flex items-center text-${service.color}-600 font-medium`}>
                  Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How Our Affiliate Management Works</h2>
            <p className="text-lg text-gray-600">
              A proven process for building and scaling successful affiliate programs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 rounded-full p-1">
                {["Program Setup", "Affiliate Growth", "Optimization"].map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === index ? "bg-orange-500 text-white shadow-sm" : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              {activeTab === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Program Setup & Strategy</h3>
                    <p className="text-gray-600 mb-6">
                      We begin by developing a comprehensive strategy for your affiliate program, including commission
                      structures, terms & conditions, and technical implementation.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Business & market analysis",
                        "Commission structure design",
                        "Program terms & policies creation",
                        "Tracking platform selection & setup",
                        "Integration with your website & systems",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src={ecommerce || "/affiliate-program-setup.png"}
                      alt="Affiliate Program Setup"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg max-w-full h-auto"
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Affiliate Recruitment & Onboarding</h3>
                    <p className="text-gray-600 mb-6">
                      We identify and recruit high-quality affiliates who align with your brand, then provide
                      comprehensive onboarding to set them up for success.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Targeted affiliate research & outreach",
                        "Influencer & content creator partnerships",
                        "Personalized onboarding process",
                        "Marketing materials & resource provision",
                        "Performance expectations & goal setting",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src={saas || "/affiliate-recruitment.png"}
                      alt="Affiliate Recruitment"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg max-w-full h-auto"
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Ongoing Management & Optimization</h3>
                    <p className="text-gray-600 mb-6">
                      We continuously monitor, manage, and optimize your affiliate program to maximize performance and
                      drive sustainable growth.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Performance tracking & analysis",
                        "Affiliate communication & support",
                        "Incentive program management",
                        "Fraud detection & prevention",
                        "Strategic program optimization",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src={financial || "/affiliate-optimization.png"}
                      alt="Affiliate Optimization"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg max-w-full h-auto"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-20 bg-gradient-to-br from-orange-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-orange-100">
              See how our affiliate management services have transformed businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: "E-commerce",
                title: "432% Growth in Affiliate Revenue",
                description:
                  "Revitalized a struggling affiliate program for a fashion retailer, resulting in 432% revenue growth in 12 months",
                stats: [
                  { label: "Revenue Growth", value: "432%" },
                  { label: "Active Affiliates", value: "1,200+" },
                ],
                image: ecommerce,
              },
              {
                industry: "SaaS",
                title: "3.2x Increase in Trial Signups",
                description:
                  "Developed a B2B affiliate program for a SaaS company that tripled trial signups within 6 months",
                stats: [
                  { label: "Signup Increase", value: "3.2x" },
                  { label: "Conversion Rate", value: "18.7%" },
                ],
                image: saas,
              },
              {
                industry: "Health & Wellness",
                title: "$1.8M in New Revenue",
                description:
                  "Built an affiliate program from scratch for a supplement brand, generating $1.8M in first-year revenue",
                stats: [
                  { label: "First Year Revenue", value: "$1.8M" },
                  { label: "Program ROI", value: "412%" },
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
                      `/placeholder.svg?height=300&width=500&query=affiliate marketing for ${study.industry || "/placeholder.svg"} business`
                    }
                    alt={study.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-yellow-300 text-sm font-medium mb-2">{study.industry}</div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-orange-100 mb-4">{study.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-3">
                        <div className="text-sm text-orange-200">{stat.label}</div>
                        <div className="text-xl font-bold">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Why Choose Our Affiliate Management Services?
            </h2>
            <p className="text-lg text-gray-600">
              Expert management that drives sustainable growth through affiliate partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Percent className="w-8 h-8 text-orange-500" />,
                title: "Performance-Based Marketing",
                description: "Pay only for results, making affiliate marketing one of the highest ROI channels",
              },
              {
                icon: <Users className="w-8 h-8 text-yellow-500" />,
                title: "Expanded Reach",
                description: "Tap into new audiences and markets through established affiliate relationships",
              },
              {
                icon: <Link className="w-8 h-8 text-amber-500" />,
                title: "Quality Backlinks",
                description: "Gain valuable backlinks from reputable sites, boosting your SEO efforts",
              },
              {
                icon: <DollarSign className="w-8 h-8 text-red-500" />,
                title: "Cost-Effective Growth",
                description: "Lower customer acquisition costs compared to traditional advertising",
              },
              {
                icon: <Award className="w-8 h-8 text-pink-500" />,
                title: "Brand Advocacy",
                description: "Transform partners into passionate advocates for your brand",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-rose-500" />,
                title: "Scalable Revenue",
                description: "Easily scale your program as you add more high-performing affiliates",
              },
              {
                icon: <Zap className="w-8 h-8 text-orange-500" />,
                title: "Faster Time to Market",
                description: "Quickly launch new products or enter new markets with affiliate support",
              },
              {
                icon: <BarChart className="w-8 h-8 text-yellow-500" />,
                title: "Measurable Results",
                description: "Track every click, conversion, and commission with precise analytics",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-xl border border-orange-100"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-20 bg-gray-50">
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
                  Ready to Launch or Scale Your Affiliate Program?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you&apos;re starting from scratch or looking to optimize an existing program, our team of affiliate
                  marketing experts is here to help you achieve your goals.
                </p>
                <div className="bg-orange-50 rounded-lg p-6 mb-6 border border-orange-100">
                  <h3 className="text-xl font-bold mb-3 text-orange-800">Our Commitment to You:</h3>
                  <ul className="space-y-3">
                    {[
                      "Dedicated affiliate manager for your program",
                      "Transparent reporting and communication",
                      "Proactive affiliate recruitment and management",
                      "Continuous optimization for maximum ROI",
                      "Fraud prevention and quality control",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-all"
                  >
                    Request a Custom Quote
                  </button>
                  <a
                    href="#"
                    className="px-6 py-3 border border-orange-600 text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-center"
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
  )
}
