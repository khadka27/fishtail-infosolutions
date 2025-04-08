import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { teamMembers } from "@/data/team-members"


export const metadata: Metadata = {
  title: "Our Team | Meet the Experts",
  description:
    "Meet our team of digital marketing experts who are passionate about helping businesses grow online through innovative strategies and solutions.",
}

export default function TeamPage() {
  // Add debugging
  console.log(
    "Team members on team page:",
    teamMembers.map((m) => m.slug),
  )

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-light text-center mb-12">Our Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <Link
            key={member.slug}
            href={`/team/${member.slug}`}
            className="flex flex-col hover:transform hover:scale-105 transition-transform duration-200"
          >
            <div className={`${member.bgColor} p-4 rounded-t-lg`}>
              <Image
                src={member.avatar || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-gray-700 p-4 rounded-b-lg text-white">
              <h3 className="text-center font-medium">{member.name}</h3>
              <p className="text-center text-sm text-gray-400">{member.position}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/about" className="text-blue-500 hover:underline">
          Back to About Page
        </Link>
      </div>
    </div>
  )
}

