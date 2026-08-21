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
      <PageCTA dict="nw.cta" testid="newsroom-cta-section" />
    </>
  );
}
