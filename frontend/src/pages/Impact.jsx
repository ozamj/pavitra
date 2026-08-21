import IMPHero from "@/components/landing/IMPHero";
import IMPTrust from "@/components/landing/IMPTrust";
import IMPAreas from "@/components/landing/IMPAreas";
import IMPPhilosophy from "@/components/landing/IMPPhilosophy";
import IMPVision from "@/components/landing/IMPVision";
import PageCTA from "@/components/landing/PageCTA";

export default function Impact() {
  return (
    <>
      <IMPHero />
      <IMPTrust />
      <IMPAreas />
      <IMPPhilosophy />
      <IMPVision />
      <PageCTA dict="imp.cta" testid="impact-cta-section" />
    </>
  );
}
