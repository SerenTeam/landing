import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import VideoShowcase from "@/components/sections/VideoShowcase";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ReassuranceSection from "@/components/sections/ReassuranceSection";
import CTASection from "@/components/sections/CTASection";

export default function HomeEn() {
  return (
    <>
      <Navbar lang="en" />
      <main className="flex flex-col flex-1">
        <Hero lang="en" />
        <VideoShowcase lang="en" />
        <ProblemSection lang="en" />
        <SolutionSection lang="en" />
        <ReassuranceSection lang="en" />
        <CTASection lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
