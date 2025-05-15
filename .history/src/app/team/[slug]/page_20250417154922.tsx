/* eslint-disable @typescript-eslint/no-explicit-any */


import { Suspense } from "react";
import { notFound } from "next/navigation";
import { teamMembers } from "@/data/team-members";
import TeamMemberClient from "./team-member-client";
import type { Metadata } from "next";

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

// Loading component
function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

// Server component
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
    <Suspense fallback={<Loading />}>
      <TeamMemberClient
        teamMember={teamMember}
        prevMember={prevMember}
        nextMember={nextMember}
      />
    </Suspense>
  );
}
