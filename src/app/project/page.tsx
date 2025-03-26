import { Header } from "@/Components/Header";
import { HeroSection } from "@/Components/hero-section";
import FeaturedProjects from "@/Components/featured-projects";
import ClientLogos from "@/Components/client-logos";
import { Footer } from "@/Components/footer";
import CaseStudiesPage from "@/Components/case-studies";

export default function Home() {
  return (
    
    <>
    <Header/>
    <CaseStudiesPage />
    <Footer/>
    </>
  );
}
