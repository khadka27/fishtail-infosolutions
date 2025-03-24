import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import FeaturedProjects from "@/components/featured-projects";
import ClientLogos from "@/components/client-logos";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturedProjects />
      <ClientLogos />
      <Footer />
    </main>
  );
}
