import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import VideoShowcase from "@/components/sections/VideoShowcase";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ReassuranceSection from "@/components/sections/ReassuranceSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { fr: "/", en: "/en" },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <VideoShowcase />
        <ProblemSection />
        <SolutionSection />
        <ReassuranceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
