import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Seren",
  description: "A question, a remark? Reach the Seren team through our contact form.",
  alternates: {
    canonical: "/en/contact",
    languages: { fr: "/contact", en: "/en/contact" },
  },
};

export default function ContactPageEn() {
  return (
    <>
      <Navbar lang="en" />
      <ContactContent lang="en" />
      <Footer lang="en" />
    </>
  );
}
