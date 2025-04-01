import { CaseStudiesSection } from "../Components/case-studies-section";
import ClientLogos from "../Components/client-logos";
import { FeaturesSection } from "../Components/features-section";
import { GoogleRankingSection } from "../Components/google-ranking-section";
import { HeroSection } from "../Components/hero-section";
import { ServicesSection } from "../Components/services-section";
import TestimonialsSection from "../Components/testimonial-section";

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
  );
}
