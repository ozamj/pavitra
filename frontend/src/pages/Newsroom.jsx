import NWHero from "@/components/landing/NWHero";
import NWUpdates from "@/components/landing/NWUpdates";
import NWStories from "@/components/landing/NWStories";
import NWMedia from "@/components/landing/NWMedia";
import PageCTA from "@/components/landing/PageCTA";

export default function Newsroom() {
  return (
    <>
      <NWHero />
      <NWUpdates />
      <NWStories />
      <NWMedia />
      <PageCTA
        kicker="The Journey Continues"
        titleA="Stay Connected with"
        titleB="the Movement"
        text="Pavitra is a journey of pure intention, responsible action, and visible progress. Follow the movement as it grows across Bharat."
        buttonLabel="Follow Pavitra Updates"
        testid="newsroom-cta-section"
      />
    </>
  );
}
