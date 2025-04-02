import AgencyPage from "@/Components/agency-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Agency | Full-Service Digital Marketing Experts",
  description:
    "We're a full-service digital marketing agency with 12+ years of experience helping businesses grow online through SEO, content strategy, and social media marketing.",
}

export default function About() {
  return <AgencyPage />
}

