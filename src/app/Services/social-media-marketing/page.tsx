"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {Header} from "@/Components/Header";
import {Footer} from "@/Components/footer";
import { Button } from "@/Components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import {
  ArrowLeft,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  TwitterIcon as TikTok,
  Check,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

// Social platforms we work with
const platforms = [
  {
    name: "Facebook",
    icon: <Facebook className="h-8 w-8" />,
    color: "bg-blue-600",
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-8 w-8" />,
    color: "bg-sky-500",
  },
  {
    name: "Instagram",
    icon: <Instagram className="h-8 w-8" />,
    color: "bg-pink-600",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-8 w-8" />,
    color: "bg-blue-700",
  },
  {
    name: "YouTube",
    icon: <Youtube className="h-8 w-8" />,
    color: "bg-red-600",
  },
  { name: "TikTok", icon: <TikTok className="h-8 w-8" />, color: "bg-black" },
];

// Service packages
const packages = [
  {
    name: "Starter",
    price: "$499",
    period: "per month",
    description:
      "Perfect for small businesses just getting started with social media",
    features: [
      "3 social media platforms",
      "12 posts per month",
      "Basic content creation",
      "Monthly performance report",
      "Community management",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$999",
    period: "per month",
    description:
      "Ideal for growing businesses looking to expand their social presence",
    features: [
      "5 social media platforms",
      "20 posts per month",
      "Advanced content creation",
      "Bi-weekly performance reports",
      "Community management",
      "Social media advertising ($300 budget)",
      "Competitor analysis",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$1,999",
    period: "per month",
    description: "Comprehensive solution for established businesses",
    features: [
      "All social media platforms",
      "30 posts per month",
      "Premium content creation",
      "Weekly performance reports",
      "24/7 Community management",
      "Social media advertising ($600 budget)",
      "Competitor analysis",
      "Influencer outreach",
      "Crisis management",
    ],
    popular: false,
  },
];

// Case studies
const caseStudies = [
  {
    client: "Fashion Retailer",
    platform: "Instagram",
    results: "300% increase in engagement, 150% growth in followers",
    image:
      "/placeholder.svg?height=300&width=400&text=Fashion+Case+Study&bg=pink-600",
  },
  {
    client: "B2B Software Company",
    platform: "LinkedIn",
    results: "250% increase in qualified leads, 45% growth in conversion rate",
    image:
      "/placeholder.svg?height=300&width=400&text=B2B+Case+Study&bg=blue-700",
  },
  {
    client: "Food Delivery Service",
    platform: "TikTok & Instagram",
    results: "1M+ video views, 200% increase in app downloads",
    image:
      "/placeholder.svg?height=300&width=400&text=Food+Case+Study&bg=orange-500",
  },
];

export default function SocialMediaMarketingPage() {
  const [activeTab, setActiveTab] = useState("strategy");
  const processRef = useRef(null);
  const isProcessInView = useInView(processRef, { once: true, amount: 0.3 });

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <motion.h1
                className="text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Social Media Marketing
              </motion.h1>

              <motion.p
                className="text-xl text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Customers are interacting with brands through social media. If
                implemented correctly, SMM can bring remarkable success to your
                business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50"
                >
                  Get Started
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=400&width=500&text=Social+Media+Marketing&bg=4338ca"
                alt="Social Media Marketing"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Social Media Marketing Matters
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              In today's digital landscape, social media has become an essential
              tool for businesses to connect with their audience, build brand
              awareness, and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Increase Brand Awareness
              </h3>
              <p className="text-gray-600">
                Build your brand's visibility and recognition through
                consistent, engaging social media presence across multiple
                platforms.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Grow Your Audience
              </h3>
              <p className="text-gray-600">
                Expand your reach and connect with potential customers through
                targeted content and community engagement strategies.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Drive Website Traffic
              </h3>
              <p className="text-gray-600">
                Generate qualified traffic to your website through strategic
                content distribution and call-to-actions.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Increase Conversions
              </h3>
              <p className="text-gray-600">
                Turn followers into customers with targeted campaigns,
                promotions, and personalized engagement strategies.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Build Customer Trust
              </h3>
              <p className="text-gray-600">
                Establish credibility and trust through consistent, authentic
                communication and responsive customer service.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Gain Competitive Edge
              </h3>
              <p className="text-gray-600">
                Stay ahead of competitors by leveraging the latest social media
                trends, features, and best practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Platforms We Work With
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We develop tailored strategies for all major social media
              platforms to maximize your brand's reach and engagement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className={`${platform.color} text-white p-6 rounded-lg flex flex-col items-center text-center`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {platform.icon}
                <h3 className="mt-4 font-medium">{platform.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white" ref={processRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Social Media Marketing Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to develop and implement effective
              social media strategies that drive results.
            </p>
          </div>

          <Tabs defaultValue="strategy" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent">
              <TabsTrigger
                value="strategy"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Strategy
              </TabsTrigger>
              <TabsTrigger
                value="content"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Content Creation
              </TabsTrigger>
              <TabsTrigger
                value="engagement"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Community Engagement
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Analytics & Optimization
              </TabsTrigger>
            </TabsList>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <TabsContent value="strategy" className="mt-0">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Strategic Planning
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We begin by understanding your business goals, target
                      audience, and competitive landscape to develop a
                      customized social media strategy.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Comprehensive audience analysis</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Competitive research and benchmarking</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Platform selection and prioritization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Goal setting and KPI definition</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Content calendar development</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Strategy&bg=blue-100"
                      alt="Strategic Planning"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="content" className="mt-0">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Content Creation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Our creative team develops engaging, on-brand content that
                      resonates with your audience and drives meaningful
                      interactions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>
                          Professional graphic design and video production
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Copywriting and messaging development</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Platform-specific content optimization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Hashtag research and implementation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Content scheduling and publishing</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Content+Creation&bg=pink-100"
                      alt="Content Creation"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="engagement" className="mt-0">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Community Engagement
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We actively manage your social media presence, engaging
                      with your audience to build relationships and foster brand
                      loyalty.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Proactive community management</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Comment and message response</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Social listening and brand monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Influencer outreach and collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Crisis management and reputation protection</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Community+Engagement&bg=green-100"
                      alt="Community Engagement"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="mt-0">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Analytics & Optimization
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We continuously monitor performance, analyze results, and
                      optimize your strategy to maximize ROI and achieve your
                      business goals.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Comprehensive performance tracking</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Regular reporting and insights</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>A/B testing and content optimization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>ROI analysis and budget allocation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Strategy refinement and adaptation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Analytics&bg=purple-100"
                      alt="Analytics & Optimization"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Social Media Marketing Packages
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your business needs and goals.
              All packages can be customized to meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                  pkg.popular ? "ring-2 ring-blue-500" : ""
                }`}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {pkg.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-end mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      {pkg.price}
                    </span>
                    <span className="text-gray-500 ml-1">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Need a custom solution? Contact us for a personalized quote.
            </p>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-50"
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See how our social media marketing strategies have helped
              businesses achieve remarkable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="h-48 relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.client}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {study.client}
                  </h3>
                  <p className="text-blue-600 text-sm mb-3">
                    Platform: {study.platform}
                  </p>
                  <p className="text-gray-600 mb-4">{study.results}</p>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our social media marketing
              services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                How long does it take to see results from social media
                marketing?
              </h3>
              <p className="text-gray-600">
                While some results can be seen within the first month,
                significant improvements in engagement, followers, and
                conversions typically take 3-6 months. Social media marketing is
                a long-term strategy that builds momentum over time.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Which social media platforms should my business be on?
              </h3>
              <p className="text-gray-600">
                This depends on your target audience, industry, and business
                goals. We'll help you identify the platforms where your audience
                is most active and where your content will have the greatest
                impact, rather than spreading your efforts too thin across all
                platforms.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                How do you measure the success of social media campaigns?
              </h3>
              <p className="text-gray-600">
                We track key performance indicators (KPIs) aligned with your
                business goals, such as engagement rate, reach, follower growth,
                website traffic, lead generation, and conversions. We provide
                regular reports with actionable insights to continuously improve
                your strategy.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Do I need to run paid social media ads?
              </h3>
              <p className="text-gray-600">
                While organic social media can be effective, paid social
                advertising allows for more precise targeting, faster results,
                and greater reach. We typically recommend a balanced approach
                that combines organic content with strategic paid campaigns for
                optimal results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Social Media Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's create a customized social media strategy that drives real
            business results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-600"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
