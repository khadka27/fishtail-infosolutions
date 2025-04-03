import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import avatar from "@/Images/avatar-4.png";
import { teamMembers } from "@/data/team-members";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Generate metadata for each team member dynamically
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const teamMember = teamMembers.find((member) => member.slug === slug);

  if (!teamMember) {
    return {
      title: "Team Member Not Found",
      description: "The requested team member profile could not be found.",
    };
  }

  return {
    title: `${teamMember.name} - ${teamMember.position} | Our Team`,
    description: `Learn more about ${
      teamMember.name
    }, our ${teamMember.position.toLowerCase()} with expertise in digital marketing and strategy.`,
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const teamMember = teamMembers.find((member) => member.slug === slug);

  if (!teamMember) {
    notFound();
  }

  // Find the index of the current team member
  const currentIndex = teamMembers.findIndex((member) => member.slug === slug);

  // Calculate previous and next team member indices
  const prevIndex =
    currentIndex > 0 ? currentIndex - 1 : teamMembers.length - 1;
  const nextIndex =
    currentIndex < teamMembers.length - 1 ? currentIndex + 1 : 0;

  // Get previous and next team members
  const prevMember = teamMembers[prevIndex];
  const nextMember = teamMembers[nextIndex];

  return (
    <>
      {/* Team Member Profile */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Profile Image - Left Column */}
          <div className="w-full md:w-1/3">
            <Image
              src={avatar || "/placeholder.svg"}
              alt={teamMember.name}
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Profile Content - Right Column */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-light text-gray-700 mb-6">
              {teamMember.name}
            </h1>
            <p className="text-gray-600">
              Etiam porta sem malesuada magna mollis euismod. Integer posuere
              erat a ante venenatis dapibus posuere velit aliquet. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum massa justo sit amet risus. Nulla vitae elit libero,
              a pharetra augue. Sed posuere consectetur est at lobortis.
              Vestibulum id ligula porta felis euismod semper.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link
              href={`/team/${prevMember.slug}`}
              className="flex items-center text-blue-500 hover:text-blue-700"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              <span>Prev. Staff</span>
            </Link>

            <Link href="/team" className="text-blue-500 hover:text-blue-700">
              All Staff
            </Link>

            <Link
              href={`/team/${nextMember.slug}`}
              className="flex items-center text-blue-500 hover:text-blue-700"
            >
              <span>Next Staff</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-blue-400 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-6">
                <h2 className="text-xl mr-4">What clients say</h2>
                <Link
                  href="#"
                  className="text-sm border-b border-white hover:border-transparent"
                >
                  See all testimonials
                </Link>
              </div>
              <div className="max-w-2xl">
                <blockquote className="text-2xl font-light mb-4">
                  &quot;My company&apos;s Google rankings and overall site
                  traffic improved dramatically after just a few months of
                  working with this agency. The service we&apos;ve received from
                  their team has consistently been above and beyond our
                  expectations.&quot;
                </blockquote>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-2 bg-blue-300">
                <Image
                  src={avatar || "/placeholder.svg"}
                  alt="Matthew Lee"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-medium">Matthew Lee</p>
                <p className="text-sm text-blue-100">IT department</p>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-12">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full mx-1 ${
                  i === 0 ? "bg-white" : "bg-blue-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Easy Share Section (hidden but included for completeness) */}
      <div className="hidden">
        [easy-share counters=1 counter_pos=&quot;inside&quot;
        native=&quot;no&quot; hide_total=&quot;yes&quot;
        fullwidth=&quot;yes&quot; fullwidth_fix=&quot;100&quot;]
      </div>
    </>
  );
}
