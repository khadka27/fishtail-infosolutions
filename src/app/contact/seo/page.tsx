import type { Metadata } from "next";
import SEOQuoteCalculator from "@/Components/contact/seo-quote-calculator";

// Add metadata for the SEO quote calculator page
export const metadata: Metadata = {
     title: "SEO Services Quote Calculator | Get Your Custom SEO Pricing",
     description:
          "Calculate a personalized quote for your SEO services. Our interactive calculator provides transparent pricing based on your business goals, website size, and target market.",
};

// Updated function name to follow React component naming convention (PascalCase)
export default function SeoPage() {
     return <SEOQuoteCalculator />;
}
