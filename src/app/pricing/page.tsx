import PricingPage from "@/Components/pricing-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Pricing Packages | SEO Services",
  description:
    "Choose from our flexible digital marketing packages - Free trial, Small Business (£49.99), and Enterprise (£129.99) plans with comprehensive SEO services tailored to your needs.",
}

export default function Page() {
  return <PricingPage />
}

