import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import OurSankalp from "@/pages/OurSankalp";
import WhatWeDo from "@/pages/WhatWeDo";
import Impact from "@/pages/Impact";
import JoinMovement from "@/pages/JoinMovement";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
    <BrowserRouter>
      <div className="bg-[#FAF7F2] text-[#1C1917] font-body antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<OurSankalp />} />
            <Route path="/our-sankalp" element={<OurSankalp />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/join-the-movement" element={<JoinMovement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
