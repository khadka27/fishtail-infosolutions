/* eslint-disable react/no-unescaped-entities */


"use client";

import { useState, useEffect } from "react";
import {
  Shield,
  BarChart3,
  LineChart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { link } from "fs";
import Link from "next/link";


export function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: Shield,
      title: "Web Development",
      description:
        "We design fast, secure, and scalable websites with intuitive UX, CMS integration, and e-commerce functionality to drive engagement.",
        extendedDescription: 
        "Our full-stack developers leverage modern frameworks (React, Laravel, Shopify) to create custom sites aligned with your brand and business goals.",
      
      benefits: [
        "Mobile-First Design",
        "CMS & E-Commerce",
        "API Integrations",
        "Performance Optimization",
      ],
      link: "/Services/web-development",
    },
    {
      icon: BarChart3,
      title: "SEO Services",
      description:
        "Dominate search rankings with keyword research, on-page SEO, and technical audits to boost organic traffic and authority.",
      extendedDescription:
        "Our CRO process uses advanced analytics and A/B testing to pinpoint and eliminate conversion roadblocks, resulting in measurable improvements in your lead and sales funnel.",
      benefits: [
        "Keyword research & optimization",
        "On-page SEO improvements",
        "Technical SEO audits",
        "Content strategy & marketing",
      ],
      link: "/Services/local-seo",
    },
    {
      icon: LineChart,
      title: "Lead Generation",
      description:
        "Convert prospects into customers with targeted ads, email campaigns, and CRM-driven strategies for steady pipeline growth.",
      extendedDescription:
        "Gain a competitive edge with our real-time analytics dashboards—providing instant access to engagement metrics, audience behavior, and content performance trends, all in one place.",
      benefits: [
        "Data-driven prospect targeting",
        "Conversion-focused campaigns",
        "Automated lead nurturing",
        "Multi-channel outreach strategies",
      ],
      link: "/Services/lead-generation",
    },
  ];

  const handleCardClick = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  // Animate stats when visible
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setStats((prev) => {
          const newStats = { ...prev };
          if (newStats.clients < 200) newStats.clients += 2;
          if (newStats.projects < 500) newStats.projects += 5;
          if (newStats.satisfaction < 98) newStats.satisfaction += 1;

          if (
            newStats.clients >= 200 &&
            newStats.projects >= 500 &&
            newStats.satisfaction >= 98
          ) {
            clearInterval(interval);
          }
          return newStats;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

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

    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white border-b border-[#F5F5F5]">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#003C8F]">
          Our Core Services
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
        Elevate your digital presence with cutting-edge web solutions, search engine dominance, and laser-focused lead generation—all designed for measurable success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl border border-[#F5F5F5] bg-white p-6 transition-all duration-300 ${
                hoveredCard === index
                  ? "shadow-lg shadow-[#0084FF]/10 scale-[1.02] z-10"
                  : "shadow-md"
              } ${
                expandedCard === index ? "sm:col-span-2 md:col-span-3" : ""
              } cursor-pointer`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`absolute top-0 left-0 h-1 bg-[#0084FF] transition-all duration-500 ${
                  hoveredCard === index || expandedCard === index
                    ? "w-full"
                    : "w-0"
                }`}
              ></div>

              <div
                className={`flex ${
                  expandedCard === index ? "flex-col md:flex-row" : "flex-col"
                } items-center`}
              >
                <div
                  className={`${
                    expandedCard === index
                      ? "md:w-1/3 text-left"
                      : "text-center w-full"
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0084FF]/10 mb-4 transition-transform duration-300 ${
                      hoveredCard === index ? "rotate-12" : ""
                    }`}
                  >
                    <feature.icon className="text-[#0084FF] w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-[#003C8F]">
                    {feature.title}
                  </h3>

                  <p
                    className={`text-gray-600 ${
                      expandedCard === index ? "md:pr-6" : ""
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>

                {expandedCard === index && (
                  <div className="mt-6 md:mt-0 md:w-2/3 md:pl-6 md:border-l border-[#F5F5F5]">
                    <h4 className="text-lg font-medium mb-3 text-[#0084FF]">
                      How it works
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {feature.extendedDescription}
                    </p>

                    <h5 className="text-md font-medium mb-2 text-[#003C8F]">
                      Key Benefits:
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-[#0084FF]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <Link href={feature.link}className="flex items-center text-[#0084FF] hover:text-[#003C8F] transition-colors">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>

              {/* {!expandedCard && (
                <div
                  className={`mt-4 flex justify-center transition-opacity duration-300 ${
                    hoveredCard === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button className="flex items-center text-[#0084FF] hover:text-[#003C8F] transition-colors text-sm">
                    Learn more <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>
              )} */}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div id="stats-section" className="mt-16 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#F5F5F5] rounded-xl p-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0084FF] mb-2">
                {stats.clients}+
              </div>
              <div className="text-[#003C8F] font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0084FF] mb-2">
                {stats.projects}+
              </div>
              <div className="text-[#003C8F] font-medium">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0084FF] mb-2">
                {stats.satisfaction}%
              </div>
              <div className="text-[#003C8F] font-medium">
                Client Retention
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
  <a
    href="/Services"
    className="inline-block px-6 py-3 bg-[#0084FF] hover:bg-[#003C8F] text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0084FF] focus:ring-offset-2"
  >
    Explore All Services
  </a>
</div>
      </div>
    </section>
  );
}
