import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Seren",
  description: "Une question, une remarque ? Contactez l'équipe Seren via notre formulaire.",
  alternates: {
    canonical: "/contact",
    languages: { fr: "/contact", en: "/en/contact" },
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactContent lang="fr" />
      <Footer />
    </>
  );
}
