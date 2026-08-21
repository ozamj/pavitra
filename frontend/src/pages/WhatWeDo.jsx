import WWHero from "@/components/landing/WWHero";
import WWAction from "@/components/landing/WWAction";
import WWAreas from "@/components/landing/WWAreas";
import PageCTA from "@/components/landing/PageCTA";

export default function WhatWeDo() {
  return (
    <>
      <WWHero />
      <WWAction />
      <WWAreas />
      <PageCTA dict="ww.cta" testid="ww-cta-section" />
    </>
  );
}
