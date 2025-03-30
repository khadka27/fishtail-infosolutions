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
import avatar from "@/Images/avatar-4.png"

// Team member data
const teamMembers = [
  {
    name: "Maria Murphy",
    position: "Marketing Director",
    avatar: avatar,
    bgColor: "bg-red-100",
  },
  {
    name: "Angela Leibius",
    position: "SEO Specialist",
    avatar: avatar,
    bgColor: "bg-blue-300",
  },
  {
    name: "Millie Brown",
    position: "Content Strategist",
    avatar: avatar,
    bgColor: "bg-blue-500",
  },
  {
    name: "Callum Bailey",
    position: "Social Media Manager",
    avatar: avatar,
    bgColor: "bg-green-400",
  },
  {
    name: "Daisy Howarth",
    position: "Human Resources Director",
    avatar: avatar,
    bgColor: "bg-teal-300",
  },
  {
    name: "Abby Banks",
    position: "Marketing Specialist",
    avatar: avatar,
    bgColor: "bg-red-300",
  },
  {
    name: "Maisie Wade",
    position: "SEO and SEM Specialist",
    avatar: avatar,
    bgColor: "bg-blue-200",
  },
  {
    name: "Peter Spencer",
    position: "Web Designer",
    avatar: avatar,
    bgColor: "bg-blue-600",
  },
]

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
  { value: 89, label: "Clients Served", icon: <Award className="h-6 w-6 text-white" /> },
  { value: 25, label: "Events Organized", icon: <Calendar className="h-6 w-6 text-white" /> },
  { value: 43, label: "Public Speeches", icon: <Mic className="h-6 w-6 text-white" /> },
  { value: "+1,200", label: "Coffee Cups", icon: <Coffee className="h-6 w-6 text-white" /> },
]

export default function AgencyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16 px-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-6">A full service digital marketing agency</h1>
              <p className="text-xl">
                Our team develops effective content strategies for forward thinking companies. We have a proven track
                record in increasing search engine rankings.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <Image
                src={image1}
                alt="Digital Marketing Illustration"
                width={300}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gray-50 py-12 px-12">
        <div className="container mx-auto px-6">
          <p className="text-xl text-center text-gray-700 max-w-4xl mx-auto">
            We pursue relationships based on transparency, persistence, mutual trust, and integrity with our employees,
            customers and other business partners.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
      <section className="py-8 px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat, index) => (
              <div key={index} className={`${stat.bgColor} p-8 flex flex-col items-center justify-center text-white`}>
                <div className="mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-24 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col">
                <div className={`${member.bgColor} p-4 rounded-t-lg`}>
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-gray-700 p-4 rounded-b-lg">
                  <div className="flex justify-center space-x-3 mb-3">
                    <Link href="#" className="text-gray-400 hover:text-white">
                      <Twitter className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      <Facebook className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      <Instagram className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </div>
                  <h3 className="text-center font-medium">{member.name}</h3>
                  <p className="text-center text-sm text-gray-400">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Stats */}
      <section className="py-8 px-16 bg-gray-700 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bottomStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <div className="flex-shrink-0">{stat.icon}</div>
                <div>
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 bg-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl uppercase tracking-wider mb-6">Our Vision</h2>
          <p className="text-2xl font-light max-w-3xl mx-auto">
            The most respected Internet marketing agency. We want to change the way businesses{" "}
            <span className="font-medium">speak</span>, <span className="font-medium">listen</span> and{" "}
            <span className="font-medium">share</span> online.
          </p>
        </div>
      </section>
    </div>
  )
}

