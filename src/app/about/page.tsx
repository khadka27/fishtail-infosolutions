import type { Metadata } from "next";
import AgencyPage from "@/Components/agency-section";
import { teamMembers } from "@/data/team-members";

export const metadata: Metadata = {
     title: "Our Agency | Full-Service Digital Marketing Experts",
     description:
          "We're a full-service digital marketing agency with 12+ years of experience helping businesses grow online through SEO, content strategy, and social media marketing.",
};

export default function About() {
     // Pass the teamMembers to the AgencyPage component
     return <AgencyPage teamMembers={teamMembers} />;
}
