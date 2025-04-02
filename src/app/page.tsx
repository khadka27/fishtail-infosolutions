import type { Metadata } from "next"

// Add this metadata export before the Home component
export const metadata: Metadata = {
  title: "Digital Marketing & SEO Agency | Boost Your Online Presence",
  description:
    "Elevate your business with our expert digital marketing and SEO services. We help you rank higher on Google, attract more customers, and grow your online presence.",
}

// Keep the rest of your Home component as is
import { CaseStudiesSection } from "../Components/case-studies-section"
import ClientLogos from "../Components/client-logos"
import { FeaturesSection } from "../Components/features-section"
import { GoogleRankingSection } from "../Components/google-ranking-section"
import { HeroSection } from "../Components/hero-section"
import { ServicesSection } from "../Components/services-section"
import TestimonialsSection from "../Components/testimonial-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <GoogleRankingSection />
      <ServicesSection />
      <ClientLogos />
      <TestimonialsSection />
      <CaseStudiesSection />
    </main>
  )
}

