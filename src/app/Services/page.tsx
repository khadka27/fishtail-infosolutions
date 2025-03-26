"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/Components/Header";
import ServiceCard from "@/Components/Services/service-card";
import ServiceIconCard from "@/Components/Services/service-icon-card";
import TestimonialSlider from "@/Components/Services/testimonial-slider";
import CaseStudyCard from "@/Components/Services/case-study-card";
import { Footer } from "@/Components/footer";
import {
  MapPin,
  Search,
  LinkIcon,
  DollarSign,
  Layout,
  Mail,
  MessageCircle,
  FileText,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

// Main service cards data
const mainServices = [
  {
    title: "Social Media Marketing",
    description:
      "Establish relationships and develop through social media. Engagement, growth, and brand recognition are the focus of our social media strategies.",
    icon: "/placeholder.svg?height=60&width=60&text=SMM&fg=ffffff",
    bgColor: "bg-blue-700",
    learnMoreLink: "/services/social-media-marketing",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Search engine optimization is essential. We'll help you increase your rankings in the major search engines and drive targeted traffic to your website.",
    icon: "/placeholder.svg?height=60&width=60&text=SEO&fg=ffffff",
    bgColor: "bg-amber-500",
    learnMoreLink: "/services/search-engine-optimization",
  },
  {
    title: "Advanced Web Analytics",
    description:
      "Get actionable insights of reports to analyze, test, and modify your website to increase your conversion rates and leads or sales for your business.",
    icon: "/placeholder.svg?height=60&width=60&text=AWA&fg=ffffff",
    bgColor: "bg-green-500",
    learnMoreLink: "/services/advanced-web-analytics",
  },
  {
    title: "Email Marketing",
    description:
      "Our custom email marketing services can help you stay top of mind with your customers and prospects, build credibility and increase sales.",
    icon: "/placeholder.svg?height=60&width=60&text=EM&fg=ffffff",
    bgColor: "bg-blue-500",
    learnMoreLink: "/services/email-marketing",
  },
  {
    title: "Pay Per Click",
    description:
      "Pay-per-click marketing is one of the most effective ways to generate targeted traffic and qualified leads to your website in a short period of time.",
    icon: "/placeholder.svg?height=60&width=60&text=PPC&fg=ffffff",
    bgColor: "bg-red-500",
    learnMoreLink: "/services/pay-per-click",
  },
  {
    title: "Content Strategy",
    description:
      "We help you determine the right content strategy through your digital marketing channels to attract, engage, and convert your target audience.",
    icon: "/placeholder.svg?height=60&width=60&text=CS&fg=ffffff",
    bgColor: "bg-teal-500",
    learnMoreLink: "/services/content-strategy",
  },
];

// Additional services data
const additionalServices = [
  {
    title: "Local Search Strategy",
    description:
      "Maximize your presence on search engines for local searches on a small scale.",
    icon: <MapPin className="h-8 w-8 text-blue-500" />,
    learnMoreLink: "/services/local-search-strategy",
  },
  {
    title: "Maps Search Optimization",
    description:
      "Google Maps optimization is an important part of any successful local SEO campaign.",
    icon: <Search className="h-8 w-8 text-blue-500" />,
    learnMoreLink: "/services/maps-search-optimization",
  },
  {
    title: "Link Building & Content",
    description:
      "Link building is a critical component of any successful SEO campaign.",
    icon: <LinkIcon className="h-8 w-8 text-blue-500" />,
    learnMoreLink: "/services/link-building-content",
  },
  {
    title: "Paid Search Advertising",
    description:
      "PPC brings in quality traffic that converts into leads and sales for your business.",
    icon: <DollarSign className="h-8 w-8 text-blue-500" />,
    learnMoreLink: "/services/paid-search-advertising",
  },
  {
    title: "Custom Website Design",
    description:
      "Our team specializes in affordable custom design and development.",
    icon: <Layout className="h-8 w-8 text-blue-500" />,
    learnMoreLink: "/services/custom-website-design",
  },
  {
    title: "Custom Email Design",
    description:
      "Custom email templates that work with your business and integrate with your website.",
    icon: <Mail className="h-8 w-8 text-blue-500" />,
    learnMoreLink: "/services/custom-email-design",
  },
];

// Case studies data
const caseStudies = [
  {
    title: "Opertray Division",
    description:
      'This website achieved Google ranking in four months: Ranks #1-#3 for keyword "Opertray"',
    image:
      "/placeholder.svg?height=300&width=400&text=Opertray+Division&bg=36b9cc",
    link: "/case-studies/opertray-division",
  },
  {
    title: "Tremely Designs",
    description:
      "This site applies a smart SEO strategy to acquire online clients via long-tail search...",
    image:
      "/placeholder.svg?height=300&width=400&text=Tremely+Designs&bg=2c5282",
    link: "/case-studies/tremely-designs",
  },
  {
    title: "Plainst Tech",
    description:
      "Currently, 65% of the total traffic on the site and most of the online...",
    image: "/placeholder.svg?height=300&width=400&text=Plainst+Tech&bg=b5c731",
    link: "/case-studies/plainst-tech",
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("call-to-action");

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-light text-gray-700 mb-4">
            Full Service Digital Creative Agency
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We pride ourselves on delivering compelling, digital marketing
            solutions. Our winning solutions and experiences help many of our
            clients interact and engage with their customers in the best
            possible way.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                bgColor={service.bgColor}
                learnMoreLink={service.learnMoreLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {additionalServices.map((service, index) => (
              <ServiceIconCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                learnMoreLink={service.learnMoreLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-700 mb-4">
              We use strategy and experience to generate results
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team specializes in strategic digital SEO that we work hard to
              develop a proven track record in increasing search engine rankings
              for our clients. Our strategies are designed to achieve one or
              more of the following goals:
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center mb-12">
            <button
              className={`px-6 py-2 ${
                activeTab === "call-to-action"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("call-to-action")}
            >
              Call To Action
            </button>
            <button
              className={`px-6 py-2 ${
                activeTab === "engage"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("engage")}
            >
              Engage
            </button>
            <button
              className={`px-6 py-2 ${
                activeTab === "inspire"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("inspire")}
            >
              Inspire
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeTab === "call-to-action" && (
              <motion.div
                className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <div className="mb-4">
                    <MessageCircle className="h-12 w-12 text-blue-500 mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Call To Action
                  </h3>
                  <p className="text-gray-600">
                    Inspire stronger actions from your audience through
                    compelling calls-to-action in your content.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 mb-4">
                    We can help you achieve great results across several key
                    areas including:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Creating compelling CTAs that drive conversions</li>
                    <li>Optimizing landing pages for maximum engagement</li>
                    <li>
                      A/B testing different approaches to find what works best
                    </li>
                    <li>Implementing strategic placement of calls-to-action</li>
                    <li>Developing persuasive content that motivates action</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === "engage" && (
              <motion.div
                className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <div className="mb-4">
                    <MessageCircle className="h-12 w-12 text-blue-500 mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Engage
                  </h3>
                  <p className="text-gray-600">
                    Meaningful dialogue and engagement with your audience
                    creates lasting relationships.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 mb-4">
                    We combine market insight with our experience in search
                    techniques to:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Create content that sparks conversations and shares</li>
                    <li>
                      Develop community management strategies that foster
                      engagement
                    </li>
                    <li>
                      Implement social listening to understand audience needs
                    </li>
                    <li>
                      Design interactive elements that encourage participation
                    </li>
                    <li>
                      Build meaningful relationships with your customers through
                      consistent engagement
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === "inspire" && (
              <motion.div
                className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <div className="mb-4">
                    <MessageCircle className="h-12 w-12 text-blue-500 mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Inspire
                  </h3>
                  <p className="text-gray-600">
                    Inspire the target audience to visit your website and take
                    desired actions.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 mb-4">
                    Our approach to creating inspiring content includes:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>
                      Crafting compelling brand stories that resonate with your
                      audience
                    </li>
                    <li>
                      Developing visually stunning content that captures
                      attention
                    </li>
                    <li>
                      Creating thought leadership content that establishes
                      authority
                    </li>
                    <li>Implementing emotional triggers that inspire action</li>
                    <li>
                      Designing user experiences that delight and motivate
                      visitors
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSlider />

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-light text-white">Our case studies</h2>
            <a href="/case-studies" className="text-blue-400 hover:underline">
              See all projects
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                title={study.title}
                description={study.description}
                image={study.image}
                link={study.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-blue-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white border border-white/20"
              size="lg"
            >
              <FileText className="mr-2 h-5 w-5" />
              Free SEO Consultation
            </Button>

            <Button
              className="bg-amber-500 hover:bg-amber-600 text-white"
              size="lg"
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Request a Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
