import AboutSection from "@/components/AboutSection";
import AgentsSection from "@/components/AgentsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContributeSection from "@/components/ContributeSection";
import FrameworkSection from "@/components/FrameworkSection";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ResourcesSection from "@/components/ResourcesSection";

export default function HomePage() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <FrameworkSection />
      <ResourcesSection />
      <BenefitsSection />
      <AgentsSection />
      <ManifestoSection />
      <ContributeSection />
    </main>
  );
}
