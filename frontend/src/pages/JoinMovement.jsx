import JNHero from "@/components/landing/JNHero";
import JNWhy from "@/components/landing/JNWhy";
import JNWho from "@/components/landing/JNWho";
import JNWays from "@/components/landing/JNWays";
import PageCTA from "@/components/landing/PageCTA";

export default function JoinMovement() {
  return (
    <>
      <JNHero />
      <JNWhy />
      <JNWho />
      <JNWays />
      <PageCTA
        kicker="The Calling"
        titleA="Your Role Can"
        titleB="Build Bharat"
        text="Every movement begins when people decide to participate. Pavitra is inviting every responsible citizen, organisation, and community to become part of Bharat's upliftment."
        tagline="Haath Badhayein, Bharat Banayein"
        testid="join-cta-section"
      />
    </>
  );
}
