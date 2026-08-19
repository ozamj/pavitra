import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Thought from "@/components/landing/Thought";
import Mission from "@/components/landing/Mission";
import Belief from "@/components/landing/Belief";
import Founder from "@/components/landing/Founder";
import ClosingCTA from "@/components/landing/ClosingCTA";
import Footer from "@/components/landing/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] font-body antialiased">
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Thought />
        <Mission />
        <Belief />
        <Founder />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
