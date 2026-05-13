import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ReassuranceSection from "@/components/sections/ReassuranceSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ReassuranceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
