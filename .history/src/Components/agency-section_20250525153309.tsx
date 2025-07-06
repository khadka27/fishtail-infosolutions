
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Award,
  BarChart2,
  Mail,
  Trophy,
  User,
  Search,
  Clock,
  Calendar,
  Mic,
  Coffee,
  ArrowRight,
} from "lucide-react";
import image1 from "@/Images/services-analytics-alt-colors-optimized.png";

import type { TeamMember } from "@/data/team-members";

// Stats data
const stats = [
  {
    value: 10,
    label: "Years in Digital Solutions",
    icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
    bgColor: "bg-red-400",
  },
  {
    value: 230,
    label: "Web Projects Delivered",
    icon: <BarChart2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
    bgColor: "bg-orange-400",
  },
  {
    value: 85,
    label: "Successful Email Campaigns",
    icon: <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
    bgColor: "bg-yellow-400",
  },
  {
    value: 54,
    label: "Top Google Rankings",
    icon: <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
    bgColor: "bg-green-400",
  },
  {
    value: 16,
    label: "Dedicated Team Members",
    icon: <User className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
    bgColor: "bg-teal-400",
  },
  {
    value: 120,
    label: "SEO Campaigns Executed",
    icon: <Search className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
    bgColor: "bg-blue-400",
  },
];

// Bottom stats
const bottomStats = [
  {
    value: 89,
    label: "Clients Served Globally",
    icon: <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
  },
  {
    value: 30,
    label: "Workshops & Webinars",
    icon: <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
  },
  {
    value: 50,
    label: "Industry Talks Delivered",
    icon: <Mic className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
  },
  {
    value: "1,500+",
    label: "Cups of Coffee (and Coding)",
    icon: <Coffee className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
  },
];


// Update the component to accept teamMembers as a prop
export default function AgencyPage({
  teamMembers,
}: {
  teamMembers: TeamMember[];
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0084FF] text-white py-12 md:py-20 px-4 md:px-16 overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">
                A full service digital marketing agency
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Our team develops effective content strategies for forward
                thinking companies. We have a proven track record in increasing
                search engine rankings.
              </p>
              <Link
                href="/Services"
                className="inline-flex items-center bg-white text-[#0084FF] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="flex justify-center md:justify-end animate-fade-in-2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full z-0 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full z-0 animate-pulse"></div>
                <Image
                  src={image1 || "/placeholder.svg"}
                  alt="Digital Marketing Illustration"
                  width={400}
                  height={300}
                  className="object-contain max-w-full h-auto relative z-10 transform transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gray-50 py-12 md:py-16 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md relative -mt-16 md:-mt-24">
            <h2 className="text-xl md:text-2xl font-semibold text-[#003C8F] mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-700">
              We pursue relationships based on transparency, persistence, mutual
              trust, and integrity with our employees, customers and other
              business partners.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-4 md:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#003C8F] mb-8 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-medium text-[#0084FF] mb-4">
                Strategic Marketing
              </h3>
              <p className="text-gray-700">
                Our team of specialists consistently delivers outstanding
                results combining creative ideas with our vast experience. We
                can help you build a sustainable, meaningful relationship with
                your clients by engaging them with your brand using social
                media.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-medium text-[#0084FF] mb-4">
                Digital Excellence
              </h3>
              <p className="text-gray-700">
                We work in areas as diverse as search engine optimization,
                social media marketing, email marketing and digital marketing.
                Our comprehensive approach ensures your brand stands out in the
                digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 px-4 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#003C8F] mb-8 text-center">
            Our Track Record
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgColor} p-4 md:p-6 flex flex-col items-center justify-center text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105`}
              >
                <div className="mb-2 md:mb-4">{stat.icon}</div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-center font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 px-4 md:px-16 bg-[#003C8F] text-white">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 sm:mb-0">
              Our Team
            </h2>
            <Link
              href="/team"
              className="inline-flex items-center text-white bg-[#0084FF] hover:bg-[#0065c8] px-5 py-2 rounded-full transition-colors"
            >
              View All Team Members
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={
                      member.avatar || "/placeholder.svg?height=300&width=300"
                    }
                    alt={member.name}
                    width={300}
                    height={300}
                    unoptimized
                    className="w-full h-auto object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4">
                  <Link href={`/team/${member.slug}`} className="block">
                    <h3 className="text-center font-medium text-[#003C8F] group-hover:text-[#0084FF] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-center text-sm text-gray-600 mb-3">
                      {member.position}
                    </p>
                  </Link>
                  <div className="flex justify-center space-x-3">
                    <button className="text-gray-400 hover:text-[#0084FF] transition-colors">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-[#0084FF] transition-colors">
                      <Facebook className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-[#0084FF] transition-colors">
                      <Instagram className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-[#0084FF] transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Stats */}
      <section className="py-8 md:py-12 px-4 md:px-16 bg-[#0084FF] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bottomStats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="flex-shrink-0 bg-white/20 p-2 rounded-full">
                  {stat.icon}
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl md:text-2xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#003C8F] mb-6">
            Our Vision
          </h2>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto px-2 text-gray-700">
            The most respected Internet marketing agency. We want to change the
            way businesses{" "}
            <span className="font-medium text-[#0084FF]">speak</span>,{" "}
            <span className="font-medium text-[#0084FF]">listen</span> and{" "}
            <span className="font-medium text-[#0084FF]">share</span> online.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#0084FF] text-white px-6 py-3 rounded-full font-medium hover:bg-[#003C8F] transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Work With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
