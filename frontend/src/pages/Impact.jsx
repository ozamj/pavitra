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
      <PageCTA
        kicker="The Calling"
        titleA="Impact Begins with"
        titleB="Participation"
        text="Every person who joins Pavitra becomes part of a larger thought — that Bharat's upliftment is a shared sankalp, carried forward through pure intention, responsible action, and visible progress."
        buttonLabel="Be Part of the Impact"
        testid="impact-cta-section"
      />
    </>
  );
}
