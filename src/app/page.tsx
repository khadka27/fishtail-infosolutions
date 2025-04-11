// Project: Fishtail InfoSolutions

import type { Metadata } from "next";
import { Suspense } from "react";
import { HeroSection } from "@/Components/hero-section";
import { FeaturesSection } from "@/Components/features-section";
import { GoogleRankingSection } from "@/Components/google-ranking-section";
import { ServicesSection } from "@/Components/services-section";
import ClientLogos from "@/Components/client-logos";
import TestimonialsSection from "@/Components/testimonial-section";
import { CaseStudiesSection } from "@/Components/case-studies-section";
import ScrollToTopButton from "@/Components/scroll-to-top-button";
import SectionDivider from "@/Components/section-divider";
import {LoadingSpinner} from "@/Components/loading-spinner";

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
    "web development",
    "PPC advertising",
    "email marketing",
    "analytics",
  ],
  authors: [{ name: "Your Agency Name" }],
  creator: "Fishtail InfoSolutions",
  publisher: "Fishtail InfoSolutions",
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
    description:
      "Expert digital marketing and SEO services to grow your business online.",
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
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section id="hero" aria-label="Hero Section">
          <Suspense fallback={<LoadingSpinner />}>
            <HeroSection />
          </Suspense>
        </section>

        {/* Features Section */}
        <section id="features" aria-label="Features Section">
          <Suspense fallback={<LoadingSpinner />}>
            <FeaturesSection />
          </Suspense>
        </section>

        <SectionDivider />

        {/* Google Ranking Section */}
        <section id="google-ranking" aria-label="Google Ranking Section">
          <Suspense fallback={<LoadingSpinner />}>
            <GoogleRankingSection />
          </Suspense>
        </section>

        <SectionDivider variant="wave" />

        {/* Services Section */}
        <section id="services" aria-label="Services Section">
          <Suspense fallback={<LoadingSpinner />}>
            <ServicesSection />
          </Suspense>
        </section>

        <SectionDivider />

        {/* Client Logos Section */}
        <section id="clients" aria-label="Our Clients">
          <Suspense fallback={<LoadingSpinner />}>
            <ClientLogos />
          </Suspense>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" aria-label="Testimonials">
          <Suspense fallback={<LoadingSpinner />}>
            <TestimonialsSection />
          </Suspense>
        </section>

        <SectionDivider variant="angle" />

        {/* Case Studies Section */}
        <section id="case-studies" aria-label="Case Studies">
          <Suspense fallback={<LoadingSpinner />}>
            <CaseStudiesSection />
          </Suspense>
        </section>
      </main>

      <ScrollToTopButton />
    </>
  );
}
