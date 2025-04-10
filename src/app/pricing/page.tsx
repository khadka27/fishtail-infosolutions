// import PricingPage from "@/Components/pricing-page"
// import type { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "Digital Marketing Pricing Packages | SEO Services",
//   description:
//     "Choose from our flexible digital marketing packages - Free trial, Small Business (£49.99), and Enterprise (£129.99) plans with comprehensive SEO services tailored to your needs.",
// }

// export default function Page() {
//   return <PricingPage />
// }

import PricingPage from "@/Components/pricing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Pricing Packages | SEO Services",
  description:
    "Choose from our flexible digital marketing packages - Free trial, Small Business (£49.99), and Enterprise (£129.99) plans with comprehensive SEO services tailored to your needs.",
  keywords: [
    "digital marketing pricing",
    "SEO packages",
    "marketing services",
    "affordable SEO",
    "enterprise SEO",
    "small business SEO",
    "SEO pricing",
    "digital marketing costs",
  ],
  authors: [{ name: "Your Agency Name" }],
  creator: "Your Agency Name",
  publisher: "Your Agency Name",
  openGraph: {
    title: "Digital Marketing Pricing Packages | SEO Services",
    description:
      "Choose from our flexible digital marketing packages - Free trial, Small Business (£49.99), and Enterprise (£129.99) plans with comprehensive SEO services tailored to your needs.",
    url: "https://yourdomain.com/pricing",
    siteName: "Your Agency Name",
    images: [
      {
        url: "/images/pricing-og-image.jpg", // Path to your Open Graph image for pricing page
        width: 1200,
        height: 630,
        alt: "Digital Marketing Pricing Packages",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Pricing Packages | SEO Services",
    description:
      "Flexible SEO packages starting from FREE to £129.99 for enterprise solutions.",
    creator: "@yourtwitterhandle",
    images: ["/images/pricing-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com/pricing",
  },
};

export default function Page() {
  return (
    <>
      <PricingPage />
    </>
  );
}
