import type { Metadata } from "next"
import DigitalAdQuoteCalculator from "@/Components/contact/digital-ad-quote-calculator"

// Add metadata for the digital advertising quote calculator page
export const metadata: Metadata = {
  title: "Digital Advertising Quote Calculator | Get Your PPC & Social Ad Pricing",
  description:
    "Calculate a custom quote for your digital advertising campaigns. Our interactive calculator provides estimated costs for PPC, social media ads, and display advertising based on your goals and budget.",
}

export default function DigitalAdQuotePage() {
  return <DigitalAdQuoteCalculator />
}

