"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Newspaper,
  BarChart2,
  TrendingUp,
  MessageSquare,
  FileText,
  Briefcase,
  MessageCircle,
  DollarSign,
} from "lucide-react";
import { Button } from "@/Components/ui/button";

// Service data
const services = [
  {
    id: "industry-news",
    title: "Industry News",
    description:
      "Up-to-date industry related posts that inform, educate and entertain readers leading to an increase in social media engagement, improve your online reputation and gain credibility.",
    icon: Newspaper,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description:
      "Inspire confidence in your target audience with in-depth reports to summarize projects from start to finish and explicitly document the results achieved in performance measures.",
    icon: BarChart2,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    description:
      "Achieve your business objectives with a comprehensive business analysis Content Strategy provided by our highly qualified copywriters and analysts.",
    icon: TrendingUp,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    id: "interviews-writing",
    title: "Interviews Writing",
    description:
      "Gain authority in your industry or business by sharing comments from industry experts. Share their expertise and you will immediately see feedback from your audience.",
    icon: MessageSquare,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    id: "press-releases",
    title: "Press Releases",
    description:
      "Boost your online profile and increase your website traffic with outstanding newsworthy stories about your brand submitted to news portals and press release distribution services.",
    icon: FileText,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
  {
    id: "white-papers",
    title: "White Papers",
    description:
      "Promote your business with high-quality white paper marketing that will substantially increase your social media engagement levels and solidify your position in the industry.",
    icon: Briefcase,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
];

export default function ServicesGrid() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isHovered={hoveredService === service.id}
              onHover={() => setHoveredService(service.id)}
              onLeave={() => setHoveredService(null)}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
            size="lg"
          >
            <Link href="/contact">
              <MessageCircle className="h-5 w-5" />
              Tell us about your project
            </Link>
          </Button>

          <Button
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
            size="lg"
          >
            <Link href="/quote">
              <DollarSign className="h-5 w-5" />
              Request a free quote now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    bgColor: string;
  };
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function ServiceCard({
  service,
  isHovered,
  onHover,
  onLeave,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      className="p-6 rounded-lg border border-gray-100 h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start mb-4">
        <div
          className={`p-3 rounded-lg ${service.bgColor} ${service.color} mr-4`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
      </div>

      <p className="text-gray-600 flex-grow">{service.description}</p>

      <motion.div
        className="mt-4 pt-4 border-t border-gray-100"
        animate={{ opacity: isHovered ? 1 : 0.5 }}
      >
        <Link
          href={`/services/${service.id}`}
          className={`text-sm font-medium ${service.color} hover:underline flex items-center`}
        >
          Learn more
          <motion.span
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
