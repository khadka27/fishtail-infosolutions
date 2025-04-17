import CaseStudiesPage from "@/Components/case-studies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Digital Marketing Success Stories",
  description:
    "Explore our portfolio of digital marketing success stories. We've helped over 80 companies increase consumer loyalty and find new customers through web design, SEO, and digital marketing.",
};

export default function ProjectsPage() {
  return <CaseStudiesPage />;
}
