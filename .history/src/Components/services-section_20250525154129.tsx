/* eslint-disable react/no-unescaped-entities */
// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { MapPin, Map, Link2, Target, PenTool, Mail } from "lucide-react"
// import image3 from "@/Images/services-analytics-alt-colors-optimized.png"
// import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
// import image2 from "@/Images/services-seo-alt-colors-optimized.png"
// import image4 from "@/Images/services-payperclick-alt-colors-optimized.png"
// import { useState } from "react"
// import { QuotePopup } from "./quote-popup"

// export function ServicesSection() {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//    const [quotePopupOpen, setQuotePopupOpen] = useState(false);
//    // Open quote popup
//    const openQuotePopup = (e: React.MouseEvent) => {
//     e.preventDefault();
//     setQuotePopupOpen(true);
//     if (drawerOpen) {
//       setDrawerOpen(false);
//     }
//   };
//   return (
//     <section className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white">
//       <div className="container ">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 lg:mb-4">
//           Full Service Digital Marketing Agency
//         </h2>
//         <p className="text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16">
//           Search Engine & Social Media Optimization Experts
//         </p>

//         {/* Service Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
//           <div className="bg-[#1a4b87] p-4 sm:p-6 lg:p-8 text-white flex flex-col items-center">
//             <Image
//               src={image1 || "/placeholder.svg"}
//               alt="Social Media Marketing"
//               width={150}
//               height={150}
//               className="mb-4 w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
//             />
//             <h3 className="text-center font-semibold text-lg sm:text-xl lg:text-2xl">Social Media Marketing</h3>
//           </div>
//           <div className="bg-[#4ba4d8] p-4 sm:p-6 lg:p-8 text-white flex flex-col items-center">
//             <Image
//               src={image2 || "/placeholder.svg"}
//               alt="Organic Long-Term SEO"
//               width={150}
//               height={150}
//               className="mb-4 w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
//             />
//             <h3 className="text-center font-semibold text-lg sm:text-xl lg:text-2xl">Organic Long-Term SEO</h3>
//           </div>
//           <div className="bg-[#8cc63f] p-4 sm:p-6 lg:p-8 text-white flex flex-col items-center">
//             <Image
//               src={image3 || "/placeholder.svg"}
//               alt="Advanced Analytics"
//               width={150}
//               height={150}
//               className="mb-4 w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
//             />
//             <h3 className="text-center font-semibold text-lg sm:text-xl lg:text-2xl">Advanced Analytics</h3>
//           </div>
//           <div className="bg-[#7ab929] p-4 sm:p-6 lg:p-8 text-white flex flex-col items-center">
//             <Image
//               src={image4 || "/placeholder.svg"}
//               alt="Pay Per Click Strategies"
//               width={150}
//               height={150}
//               className="mb-4 w-[120px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px]"
//             />
//             <h3 className="text-center font-semibold text-lg sm:text-xl lg:text-2xl">Pay Per Click Strategies</h3>
//           </div>
//         </div>

//         {/* First row of services */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
//           <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
//             <div className="w-12 h-12 sm:w-14 md:w-16 lg:w-20 sm:h-14 md:h-16 lg:h-20 bg-[#4ba4d8] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
//               <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2 text-gray-800 text-lg sm:text-xl">Local Search Strategy</h3>
//               <p className="text-sm md:text-base text-gray-600">
//                 Maximize your presence on search engine results pages on a local scale.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
//             <div className="w-12 h-12 sm:w-14 md:w-16 lg:w-20 sm:h-14 md:h-16 lg:h-20 bg-[#8cc63f] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
//               <Map className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2 text-gray-800 text-lg sm:text-xl">Maps Search Optimization</h3>
//               <p className="text-sm md:text-base text-gray-600">
//                 Google Maps Optimization is an important part of any successful local marketing strategy.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
//             <div className="w-12 h-12 sm:w-14 md:w-16 lg:w-20 sm:h-14 md:h-16 lg:h-20 bg-[#f7941d] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
//               <Link2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2 text-gray-800 text-lg sm:text-xl">Link Building & Content</h3>
//               <p className="text-sm md:text-base text-gray-600">
//                 Link building is and will continue to be a tremendously important component of Search Engine
//                 Optimization (SEO).
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Second row of services */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
//           <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
//             <div className="w-12 h-12 sm:w-14 md:w-16 lg:w-20 sm:h-14 md:h-16 lg:h-20 bg-[#1a4b87] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
//               <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2 text-gray-800 text-lg sm:text-xl">Paid Search Advertising</h3>
//               <p className="text-sm md:text-base text-gray-600">
//                 Paid listings on Google AdWords and Microsoft AdCenter can help you reach new customers.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
//             <div className="w-12 h-12 sm:w-14 md:w-16 lg:w-20 sm:h-14 md:h-16 lg:h-20 bg-[#8cc63f] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
//               <PenTool className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2 text-gray-800 text-lg sm:text-xl">Custom Website Design</h3>
//               <p className="text-sm md:text-base text-gray-600">
//                 Our team specializes in affordable web design and e-commerce.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
//             <div className="w-12 h-12 sm:w-14 md:w-16 lg:w-20 sm:h-14 md:h-16 lg:h-20 bg-[#f7941d] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0">
//               <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2 text-gray-800 text-lg sm:text-xl">Custom Email Design</h3>
//               <p className="text-sm md:text-base text-gray-600">
//                 Custom email templates that speak to your customers and resonate with your brand.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-10">
//           <Link
//             href="/contact"
//             className="bg-[#4ba4d8] hover:bg-[#3a93c7] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-md flex items-center justify-center text-sm sm:text-base lg:text-lg"
//           >
//             <span className="mr-2">💬</span>
//             Free SEO Consultation
//           </Link>
//           <Link
//             href="/quote"
//             className="bg-[#8cc63f] hover:bg-[#7ab929] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-md flex items-center justify-center text-sm sm:text-base lg:text-lg"
//             onClick={openQuotePopup}
//           >
//             <span className="mr-2">🔗</span>
//             Request a Free Quote
//           </Link>
//         </div>
//       </div>
//       {/* Quote Popup */}
//             <QuotePopup
//               isOpen={quotePopupOpen}
//               onClose={() => setQuotePopupOpen(false)}
//             />
//     </section>
//   )
// }
"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Map,
  Link2,
  Target,
  PenTool,
  Mail,
  ArrowRight,
  Plus,
  ChevronRight,
  Check,
  Star,
  Users,
  BarChart,
  TrendingUp,
} from "lucide-react";
import image1 from "@/Images/seo_specialist_workplace-optimized.png";
import image2 from "@/Images/services-seo-alt-colors-optimized.png";
import image3 from "@/Images/services-analytics-alt-colors-optimized.png";
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png";
import { QuotePopup } from "./quote-popup";


export function ServicesSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quotePopupOpen, setQuotePopupOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Service cards data
  const serviceCards = [
    {
      title: "Lead Generation",
      image: image1,
      color: "#0084FF",
      description:
        "Turn clicks into customers with hyper-targeted ads, LinkedIn outreach, and high-converting funnels.",
      features: [
        "PPC Campaigns",
        "Email Automation",
        "LinkedIn Ads",
        
      ],
      stats: { value: "4.2x", label: "Engagement Increase" },
    },
    {
      title: "Organic SEO",
      image: image2,
      color: "#003C8F",
      description:
        "Sustainable growth through keyword mastery, backlink building, and content that ranks.",
      features: [
        "Competitor Analysis",
        "On-Page SEO",
        "Backlink Strategy",
        "Blogging",
      ],
      stats: { value: "187%", label: "Traffic Growth" },
    },
    {
      title: "Performance Analytics",
      image: image3,
      color: "#0084FF",
      description:
        "Track KPIs, user behavior, and campaign ROI with real-time dashboards and granular reports.",
      features: [
        "Funnel Tracking",
        "A/B Testing",
        "Heatmaps",
        "ROI Forecasting",
      ],
      stats: { value: "3.5x", label: "ROI Improvement" },
    },
    {
      title: "PPC Advertising",
      image: image4,
      color: "#003C8F",
      description:
        "Immediate traffic with Google, Meta, and LinkedIn ads optimized for conversions.",
      features: [
        "Search Ads",
        "Display Ads",
        "Remarketing",
        "Geo-Targeting",
      ],
      stats: { value: "68%", label: "Cost Reduction" },
    },
  ];

  // Additional services data
  const additionalServices = [
    {
      title: "Web Development",
      description:
        "Custom sites built for speed, security, and scalability—whether it’s SaaS, e-commerce, or CMS.",
      icon: MapPin,
      color: "#0084FF",
      details:
        "We use agile methodologies to deliver pixel-perfect, SEO-friendly websites that align with your business objectives.",
        redirect: "/Services/web-development",
    },
    {
      title: "SEO Strategy",
      description:
        "Climb rankings with technical audits, content optimization, and authoritative backlinks.",
      icon: Map,
      color: "#003C8F",
      details:
        "Our granular approach targets low-hanging keywords, fixes site issues, and builds domain authority.",
                redirect: "/Services/local-seo",

    },
    {
      title: "Lead Funnels",
      description:
        "Capture and nurture leads with automated workflows and high-CTR campaigns.",
      icon: Link2,
      color: "#0084FF",
      details:
        "From LinkedIn outreach to cold email sequencing, we fill your pipeline with qualified prospects.",
                redirect: "/Services/lead",

    },
    {
      title: "Paid Advertising",
      description:
        "Scale growth with Google, Meta, and native ads tuned for maximum conversions.",
      icon: Target,
      color: "#003C8F",
      details:
        "Our paid advertising team crafts high-converting campaigns that focus on targeting the right audience, optimizing ad spend, and maximizing ROI.",
    },
    {
      title: "Custom Web Apps",
      description:
        "Tailored SaaS, portals, and internal tools to streamline operations and engagement.",
      icon: PenTool,
      color: "#0084FF",
      details:
        "Our PPC experts structure campaigns to target buyer intent, reduce CPA, and amplify ROI.",
    },
    {
      title: "Email Marketing",
      description:
        "Drive opens, clicks, and sales with segmented, automated email sequences.",
      icon: Mail,
      color: "#003C8F",
      details:
        "We design mobile-responsive templates and A/B test subject lines to boost deliverability.",
    },
  ];

  // Service tabs
  const serviceTabs = [
    {
      title: "For Startups",
      icon: Users,
      content:
        "Cost-effective web and SEO packages to establish your online presence and attract early adopters.",
      services: [
        "Local SEO",
        "Google Ads",
        "Landing Pages",
        "Basic Web Dev",
      ],
    },
    {
      title: "For E-commerce",
      icon: BarChart,
      content:
        "SEO and PPC strategies to increase product visibility, cart size, and repeat purchases.",
      services: [
        "Shopify SEO",
        "Google Shopping",
        "Checkout Optimization",
        "Retargeting Ads" ,
      ],
    },
    {
      title: "For Enterprise",
      icon: TrendingUp,
      content:
        "Enterprise-grade web solutions, multi-channel SEO, and automation to streamline global operations.",
      services: [
        "Scalable SEO",
        "Omnichannel Marketing",
        "Data Warehousing",
        "API-Driven Tools",
      ],
    },
  ];

  // Open quote popup
  const openQuotePopup = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuotePopupOpen(true);
    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };

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

  return (
    <section
      ref={sectionRef}
      className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white border-b border-[#F5F5F5]"
    >
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 lg:mb-4 text-[#003C8F]">
          Full-Cycle Digital Solutions
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto">
          From web development to lead capture, we merge creativity and analytics to fuel sustainable growth.
          </p>
        </div>

        {/* Service Tabs */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {serviceTabs.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                  selectedTab === index
                    ? "bg-[#0084FF] text-white shadow-md"
                    : "bg-[#F5F5F5] text-[#003C8F] hover:bg-[#0084FF]/10"
                }`}
                onClick={() => setSelectedTab(index)}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-[#F5F5F5] p-6 rounded-lg mb-12">
            <p className="text-[#003C8F] mb-4">
              {serviceTabs[selectedTab].content}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {serviceTabs[selectedTab].services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg flex items-center text-sm text-[#003C8F]"
                >
                  <Check className="w-4 h-4 mr-2 text-[#0084FF]" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-md transition-all duration-300 ${
                activeCard === index
                  ? "scale-[1.03] z-10"
                  : "hover:scale-[1.02]"
              } cursor-pointer group`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ backgroundColor: service.color }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 opacity-60"></div>
              <div className="p-6 flex flex-col items-center h-full relative z-10">
                {/* Stats badge */}
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white flex items-center">
                  <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{service.stats.value}</span>
                  <span className="ml-1 opacity-80 text-[10px]">
                    {service.stats.label}
                  </span>
                </div>

                <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={180}
                    height={180}
                    unoptimized
                    className="w-[120px] h-auto sm:w-[150px] md:w-[160px] lg:w-[180px] object-contain"
                  />
                </div>
                <h3 className="text-center font-semibold text-lg sm:text-xl lg:text-2xl text-white mb-3">
                  {service.title}
                </h3>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeCard === index
                      ? "max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/90 text-sm text-center mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-white/90 text-sm"
                      >
                        <ChevronRight className="w-4 h-4 mr-1 text-white" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex justify-center">
                    <button className="flex items-center text-white hover:text-white/80 transition-colors text-sm bg-white/20 px-3 py-1 rounded-full">
                      Learn more <ArrowRight className="ml-1 w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Plus icon for non-active cards */}
                {activeCard !== index && (
                  <div className="absolute bottom-4 right-4 bg-white/20 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div
          className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 text-[#003C8F]">
            Our Specialized Services
          </h3>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left p-4 rounded-lg transition-all duration-300 ${
                  activeService === index
                    ? "bg-[#F5F5F5] shadow-md"
                    : "hover:bg-[#F5F5F5]/50"
                } cursor-pointer`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 flex-shrink-0 transition-all duration-300 ${
                    activeService === index ? "scale-110" : ""
                  }`}
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-[#003C8F] text-lg">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  {activeService === index && (
                    <div className="mt-3 animate-fadeIn">
                      <p className="text-gray-600 text-sm mb-2">
                        {service.details}
                      </p>
                      <button className="flex items-center text-[#0084FF] hover:text-[#003C8F] transition-colors text-sm">
                        Learn more <ArrowRight className="ml-1 w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div
          className={`mb-12 bg-[#F5F5F5] p-6 rounded-lg transition-all duration-1000 delay-600 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <div className="w-16 h-16 rounded-full bg-[#0084FF] flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
            </div>
            <div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-[#003C8F] italic mb-2">
                "Their digital marketing strategies transformed our online
                presence. We've seen a 200% increase in qualified leads and our
                conversion rates have never been better!"
              </p>
              <p className="text-gray-600 text-sm">
                - John Doe, CEO of TechSolutions Inc.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-10 transition-all duration-1000 delay-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            href="/contact"
            className="bg-[#0084FF] hover:bg-[#003C8F] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full flex items-center justify-center text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">💬</span>
            Free SEO Consultation & Website Audit
          </Link>
          <Link
            href="/quote"
            className="bg-[#003C8F] hover:bg-[#0084FF] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full flex items-center justify-center text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={openQuotePopup}
          >
            <span className="mr-2">🔗</span>
            Request a Free Quote
          </Link>
        </div>
      </div>

      {/* Quote Popup */}
      <QuotePopup
        isOpen={quotePopupOpen}
        onClose={() => setQuotePopupOpen(false)}
      />
    </section>
  );
}
