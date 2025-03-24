import { Header } from "@/Components/Header";
import { HeroSection } from "@/Components/hero-section";
import FeaturedProjects from "@/Components/featured-projects";
import ClientLogos from "@/Components/client-logos";
import { Footer } from "@/Components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <FeaturedProjects />
      <ClientLogos />
      <Footer />
    </main>
  );
}
