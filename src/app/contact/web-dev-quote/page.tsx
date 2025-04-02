import type { Metadata } from "next"
import WebDevQuoteCalculator from "@/Components/contact/web-dev-quote-calculator"

// Add metadata for the web development quote page
export const metadata: Metadata = {
  title: "Web Development Quote Calculator | Get Your Custom Estimate",
  description:
    "Calculate a custom quote for your web development project. Our interactive calculator helps you estimate costs based on your specific requirements and project scope.",
}

export default function WebDevQuotePage() {
  return <WebDevQuoteCalculator />
}

