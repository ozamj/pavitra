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
      <PageCTA
        kicker="06 · Shop with Purpose"
        titleA="Choose Products That"
        titleB="Carry Purpose"
        text="When you choose Pavitra, you choose more than a product. You choose a pure thought for Bharat."
        buttonLabel="Shop Pavitra"
        testid="shop-cta-section"
      />
    </>
  );
}
