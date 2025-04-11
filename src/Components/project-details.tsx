"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, Clock, ChevronUp, Share2, Download } from "lucide-react"
import type { Project } from "@/data/type"
import ResultsChart from "./results-chart"
import ProjectGallery from "./project-gallery"
import RelatedProjects from "./related-projects"
import ContactCTA from "./contact-cta"

export default function ProjectDetail({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState("overview")
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // For EduVersity Academy specifically
  const projectData = {
    title: "EduVersity Academy",
    subtitle: "Strategic Lead Generation Campaign",
    location: "Chennai, India",
    startDate: "1 February 2023",
    endDate: "Ongoing",
    duration: "Ongoing",
    client: "Manipal University",
    category: "Lead Generation",
    subcategory: "Education",
    objective:
      "Drive high-quality leads for the Online MBA program targeting working professionals and recent graduates.",
    challenges:
      "The university faced stiff competition and needed to stand out in a crowded market while ensuring the leads generated were qualified and likely to convert.",
    strategies: [
      {
        title: "LinkedIn Ads",
        description:
          "We crafted targeted LinkedIn campaigns focusing on professionals looking to advance their careers. By refining audience targeting and ad creatives, we increased engagement by 45%.",
      },
      {
        title: "Google Ads",
        description:
          "Implemented search and display campaigns to capture broader interest and direct traffic to a custom landing page designed for conversions.",
      },
      {
        title: "Facebook Ads",
        description:
          "Supported LinkedIn efforts with retargeting campaigns on Facebook, reaching potential candidates who had shown interest but hadn't converted yet.",
      },
      {
        title: "A/B Testing & Optimization",
        description:
          "Continuously tested different ad variations, landing page designs, and messaging to maximize performance.",
      },
      {
        title: "CRM Integration",
        description:
          "Seamlessly integrated with Manipal University's CRM to streamline the lead nurturing and follow-up process, ensuring high conversion rates.",
      },
    ],
    results: [
      {
        title: "Lead Generation",
        value: "50+",
        description: "Increased daily lead count to 50+ high-quality leads.",
      },
      {
        title: "Conversion Rate",
        value: "5-6%",
        description: "Achieved a 5-6% conversion rate, surpassing the industry average.",
      },
      {
        title: "Engagement",
        value: "45%",
        description:
          "Enhanced overall digital engagement, with a significant boost in LinkedIn interactions and improved ad performance across all platforms.",
      },
    ],
    conclusion:
      "This project not only met but exceeded the client's expectations, solidifying their position as a top choice for online MBA programs.",
  }

  return (
    <>
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Case Studies
            </Link>

            <div className="flex items-center mb-4">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">{projectData.category}</span>
              <span className="w-1 h-1 bg-white/40 rounded-full mx-2"></span>
              <span className="text-blue-100">{projectData.subcategory}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">{projectData.title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">{projectData.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-blue-200" />
                  <span className="text-blue-100 text-sm">Location</span>
                </div>
                <p className="font-medium">{projectData.location}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-blue-200" />
                  <span className="text-blue-100 text-sm">Start Date</span>
                </div>
                <p className="font-medium">{projectData.startDate}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 mr-2 text-blue-200" />
                  <span className="text-blue-100 text-sm">Duration</span>
                </div>
                <p className="font-medium">{projectData.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Navigation Tabs - Sticky on scroll */}
      <div
        className={`sticky top-0 z-30 bg-white border-b border-gray-200 transition-all ${scrolled ? "shadow-md" : ""}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "overview" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-900"}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("strategies")}
              className={`px-4 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "strategies" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-900"}`}
            >
              Strategies
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`px-4 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "results" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-900"}`}
            >
              Results
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-4 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "gallery" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-900"}`}
            >
              Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      We collaborated with {projectData.client} to enhance their lead generation efforts for their
                      Online MBA program. Our focus was to increase the volume and quality of leads while optimizing the
                      conversion rate through a multi-platform digital marketing strategy.
                    </p>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Objective</h3>
                      <p className="text-gray-700 leading-relaxed">{projectData.objective}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Challenges</h3>
                      <p className="text-gray-700 leading-relaxed">{projectData.challenges}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Approach</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Our comprehensive approach involved multiple digital channels to reach the target audience
                        effectively:
                      </p>
                      <ul className="space-y-2">
                        {projectData.strategies.map((strategy, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-3">
                              <span className="text-xs font-bold">{index + 1}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-800">{strategy.title}:</span>{" "}
                              {strategy.description}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Conclusion</h3>
                      <p className="text-gray-700 leading-relaxed">{projectData.conclusion}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "strategies" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Strategy</h2>

                    <div className="space-y-8">
                      {projectData.strategies.map((strategy, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="bg-gray-50 rounded-lg p-6 border border-gray-100"
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4">
                              <span className="font-bold">{index + 1}</span>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 mb-2">{strategy.title}</h3>
                              <p className="text-gray-700">{strategy.description}</p>

                              {strategy.title === "LinkedIn Ads" && (
                                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                                  <h4 className="font-medium text-blue-800 mb-2">Key LinkedIn Targeting Parameters:</h4>
                                  <ul className="space-y-1 text-sm text-gray-700">
                                    <li>• Job Titles: Managers, Directors, Team Leads</li>
                                    <li>• Industries: Technology, Finance, Healthcare, Manufacturing</li>
                                    <li>• Experience: 3-15 years</li>
                                    <li>• Education: Bachelor's degree or higher</li>
                                    <li>• Interests: Professional development, career advancement</li>
                                  </ul>
                                </div>
                              )}

                              {strategy.title === "Google Ads" && (
                                <div className="mt-4 bg-green-50 p-4 rounded-lg">
                                  <h4 className="font-medium text-green-800 mb-2">Campaign Structure:</h4>
                                  <ul className="space-y-1 text-sm text-gray-700">
                                    <li>• Search: Targeted keywords related to MBA programs, online education</li>
                                    <li>• Display: Remarketing to website visitors, in-market audiences</li>
                                    <li>• Performance Max: Leveraging Google's AI for cross-channel optimization</li>
                                    <li>• Custom landing pages with program-specific messaging</li>
                                  </ul>
                                </div>
                              )}

                              {strategy.title === "A/B Testing & Optimization" && (
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-medium text-purple-800 mb-2">Elements Tested:</h4>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                      <li>• Ad headlines and descriptions</li>
                                      <li>• Call-to-action buttons</li>
                                      <li>• Landing page layouts</li>
                                      <li>• Form length and fields</li>
                                      <li>• Visual elements and imagery</li>
                                    </ul>
                                  </div>
                                  <div className="bg-amber-50 p-4 rounded-lg">
                                    <h4 className="font-medium text-amber-800 mb-2">Optimization Focus:</h4>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                      <li>• Click-through rate (CTR)</li>
                                      <li>• Form completion rate</li>
                                      <li>• Cost per lead (CPL)</li>
                                      <li>• Lead quality score</li>
                                      <li>• Return on ad spend (ROAS)</li>
                                    </ul>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "results" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Campaign Results</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {projectData.results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="bg-blue-50 rounded-lg p-6 text-center"
                        >
                          <h3 className="text-gray-600 text-sm mb-2">{result.title}</h3>
                          <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{result.value}</div>
                          <p className="text-sm text-gray-600">{result.description}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Metrics</h3>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <ResultsChart />
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">ROI Analysis</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Channel
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Spend
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Leads
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Cost per Lead
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Conversion Rate
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                ROI
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                LinkedIn Ads
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹450,000</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">820</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹549</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5.8%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">3.2x</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Google Ads
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹380,000</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">720</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹528</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4.9%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">2.8x</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Facebook Ads
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹220,000</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">480</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹458</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4.2%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">2.5x</td>
                            </tr>
                            <tr className="bg-blue-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Total</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                ₹1,050,000
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2,020</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">₹520</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5.2%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">2.9x</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Takeaways</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5 mr-3">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-700">
                            LinkedIn proved to be the most effective channel for reaching qualified professionals
                            interested in MBA programs.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5 mr-3">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-700">
                            Continuous A/B testing and optimization led to significant improvements in conversion rates
                            over time.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5 mr-3">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-700">
                            The multi-channel approach created a cohesive brand experience and captured leads at
                            different stages of the decision-making process.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5 mr-3">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-700">
                            CRM integration was crucial for proper lead nurturing and achieving the high conversion
                            rates.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "gallery" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Campaign Gallery</h2>
                    <ProjectGallery />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 sticky top-24">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Project Information</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-500 mb-1">Client</h4>
                    <p className="font-medium text-gray-800">{projectData.client}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-gray-500 mb-1">Industry</h4>
                    <p className="font-medium text-gray-800">Education</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-gray-500 mb-1">Services Provided</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">Lead Generation</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">Digital Marketing</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">CRM Integration</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">A/B Testing</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm text-gray-500 mb-1">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">LinkedIn Ads</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">Google Ads</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">Facebook Ads</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">HubSpot CRM</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">Google Analytics</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <button className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Related Case Studies</h2>
          <RelatedProjects currentProjectId="eduversity-academy" />
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </>
  )
}
