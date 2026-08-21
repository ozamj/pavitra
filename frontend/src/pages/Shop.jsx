import SHHero from "@/components/landing/SHHero";
import SHWhy from "@/components/landing/SHWhy";
import SHCategories from "@/components/landing/SHCategories";
import SHPhilosophy from "@/components/landing/SHPhilosophy";
import SHFeatured from "@/components/landing/SHFeatured";
import PageCTA from "@/components/landing/PageCTA";

export default function Shop() {
  return (
    <>
      <SHHero />
      <SHWhy />
      <SHCategories />
      <SHPhilosophy />
      <SHFeatured />
      <PageCTA dict="sh.cta" testid="shop-cta-section" />
    </>
  );
}
