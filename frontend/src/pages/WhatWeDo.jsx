import WWHero from "@/components/landing/WWHero";
import WWAction from "@/components/landing/WWAction";
import WWAreas from "@/components/landing/WWAreas";
import WWBharatVikas from "@/components/landing/WWBharatVikas";
import PageCTA from "@/components/landing/PageCTA";

export default function WhatWeDo() {
  return (
    <>
      <WWHero />
      <WWAction />
      <WWAreas />
      <WWBharatVikas />
      <PageCTA
        kicker="05 · One Shared Responsibility"
        titleA="Purpose Needs"
        titleB="Participation"
        text="A movement becomes powerful when people come together with one pure intention and one shared responsibility. Pavitra invites every citizen, institution, and community to join hands in building a stronger, more responsible, and more uplifted Bharat."
        testid="ww-cta-section"
      />
    </>
  );
}
