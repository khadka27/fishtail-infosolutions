import type { Metadata } from "next"
import { CaseStudiesSection } from "../Components/case-studies-section"
import ClientLogos from "../Components/client-logos"
import { FeaturesSection } from "../Components/features-section"
import { GoogleRankingSection } from "../Components/google-ranking-section"
import { HeroSection } from "../Components/hero-section"
import { ServicesSection } from "../Components/services-section"
import TestimonialsSection from "../Components/testimonial-section"

// Add this metadata export before the Home component
export const metadata: Metadata = {
  title: "Digital Marketing & SEO Agency | Boost Your Online Presence",
  description:
    "Elevate your business with our expert digital marketing and SEO services. We help you rank higher on Google, attract more customers, and grow your online presence.",
  keywords: [
    "digital marketing agency",
    "SEO services",
    "online marketing",
    "content marketing",
    "social media marketing",
    "search engine optimization",
    "web traffic growth",
    "business growth online",
  ],
  authors: [{ name: "Your Agency Name" }],
  creator: "Your Agency Name",
  publisher: "Your Agency Name",
  openGraph: {
    title: "Digital Marketing & SEO Agency | Boost Your Online Presence",
    description:
      "Elevate your business with our expert digital marketing and SEO services. We help you rank higher on Google, attract more customers, and grow your online presence.",
    url: "https://yourdomain.com",
    siteName: "Your Agency Name",
    images: [
      {
        url: "/images/og-image.jpg", // Path to your Open Graph image
        width: 1200,
        height: 630,
        alt: "Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & SEO Agency | Boost Your Online Presence",
    description: "Expert digital marketing and SEO services to grow your business online.",
    creator: "@yourtwitterhandle",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      me: ["youremail@yourdomain.com"],
    },
  },
  alternates: {
    canonical: "https://yourdomain.com",
    languages: {
      "en-US": "https://yourdomain.com/en-US",
      "es-ES": "https://yourdomain.com/es-ES",
    },
  },
}

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

