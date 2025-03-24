import { CaseStudiesSection } from "../Components/case-studies-section";
import { ClientLogosSection } from "../Components/client-logos-section";
import { FeaturesSection } from "../Components/features-section";
import { Footer } from "../Components/footer";
import { GoogleRankingSection } from "../Components/google-ranking-section";
import { Header } from "../Components/Header";
import { HeroSection } from "../Components/hero-section";
import { ServicesSection } from "../Components/services-section";
import TestimonialsSection from "../Components/testimonial-section";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <HeroSection />
      <FeaturesSection />
      <GoogleRankingSection />
      <ServicesSection/>
      <ClientLogosSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <Footer />
    </main>
  )
}

