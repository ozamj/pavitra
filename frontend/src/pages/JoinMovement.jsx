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
      <PageCTA dict="jn.cta" testid="join-cta-section" />
    </>
  );
}
