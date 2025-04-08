"use client"

import Image from "next/image"
import Link from "next/link"
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
} from "lucide-react"
import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
import type { TeamMember } from "@/data/team-members"

// Stats data
const stats = [
  {
    value: 12,
    label: "Years in Marketing",
    icon: <Clock className="h-8 w-8 text-white" />,
    bgColor: "bg-red-400",
  },
  {
    value: 143,
    label: "Web Analytics",
    icon: <BarChart2 className="h-8 w-8 text-white" />,
    bgColor: "bg-orange-400",
  },
  {
    value: 76,
    label: "Email Campaigns",
    icon: <Mail className="h-8 w-8 text-white" />,
    bgColor: "bg-yellow-400",
  },
  {
    value: 41,
    label: "First Position",
    icon: <Trophy className="h-8 w-8 text-white" />,
    bgColor: "bg-green-400",
  },
  {
    value: 16,
    label: "Team Members",
    icon: <User className="h-8 w-8 text-white" />,
    bgColor: "bg-teal-400",
  },
  {
    value: 96,
    label: "SEO Campaigns",
    icon: <Search className="h-8 w-8 text-white" />,
    bgColor: "bg-blue-400",
  },
]

// Bottom stats
const bottomStats = [
  {
    value: 89,
    label: "Clients Served",
    icon: <Award className="h-6 w-6 text-white" />,
  },
  {
    value: 25,
    label: "Events Organized",
    icon: <Calendar className="h-6 w-6 text-white" />,
  },
  {
    value: 43,
    label: "Public Speeches",
    icon: <Mic className="h-6 w-6 text-white" />,
  },
  {
    value: "+1,200",
    label: "Coffee Cups",
    icon: <Coffee className="h-6 w-6 text-white" />,
  },
]

// Update the component to accept teamMembers as a prop
export default function AgencyPage({ teamMembers }: { teamMembers: TeamMember[] }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-8 md:py-16 px-4 md:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">
                A full service digital marketing agency
              </h1>
              <p className="text-lg md:text-xl">
                Our team develops effective content strategies for forward thinking companies. We have a proven track
                record in increasing search engine rankings.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src={image1 || "/placeholder.svg"}
                alt="Digital Marketing Illustration"
                width={300}
                height={200}
                className="object-contain max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gray-50 py-8 md:py-12 px-4 md:px-12">
        <div className="container mx-auto">
          <p className="text-lg md:text-xl text-center text-gray-700 max-w-4xl mx-auto">
            We pursue relationships based on transparency, persistence, mutual trust, and integrity with our employees,
            customers and other business partners.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 md:py-16 px-4 md:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div>
              <p className="text-gray-700 mb-6">
                Our team of specialists consistently delivers outstanding results combining creative ideas with our vast
                experience. We can help you build a sustainable, meaningful relationship with your clients by engaging
                them with your brand using social media.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                We work in areas as diverse as search engine optimization, social media marketing, email marketing and
                digital marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 md:py-8 px-4 md:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgColor} p-4 md:p-8 flex flex-col items-center justify-center text-white`}
              >
                <div className="mb-2 md:mb-4">{stat.icon}</div>
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8 md:py-16 px-4 md:px-24 bg-gray-800 text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-light">Our Team</h2>
            <Link href="/team" className="text-blue-300 hover:text-blue-100">
              View All Team Members
            </Link>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col hover:transform hover:scale-105 transition-transform duration-200"
              >
                <div className={`${member.bgColor} rounded-t-lg relative h-64 overflow-hidden`}>
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover"
                    priority={index < 4}
                  />
                </div>
                <div className="bg-gray-700 p-4 rounded-b-lg">
                  <div className="flex justify-center space-x-3 mb-3">
                    <button className="text-gray-400 hover:text-white">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <Facebook className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <Instagram className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </button>
                  </div>
                  <Link href={`/team/${member.slug}`} className="block">
                    <h3 className="text-center font-medium hover:text-blue-300">{member.name}</h3>
                    <p className="text-center text-sm text-gray-400">{member.position}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Stats */}
      <section className="py-6 md:py-8 px-4 md:px-16 bg-gray-700 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {bottomStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 p-2">
                <div className="flex-shrink-0">{stat.icon}</div>
                <div>
                  <div className="text-lg md:text-xl font-bold">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-8 md:py-12 px-4 bg-blue-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-lg md:text-xl uppercase tracking-wider mb-4 md:mb-6">Our Vision</h2>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto px-2">
            The most respected Internet marketing agency. We want to change the way businesses{" "}
            <span className="font-medium">speak</span>, <span className="font-medium">listen</span> and{" "}
            <span className="font-medium">share</span> online.
          </p>
        </div>
      </section>
    </div>
  )
}

