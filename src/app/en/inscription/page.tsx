import type { Metadata } from "next";
import InscriptionContent from "@/components/InscriptionContent";

export const metadata: Metadata = {
  title: "Sign up | Seren",
  description: "Be among the first to discover Seren.",
  alternates: {
    canonical: "/en/inscription",
    languages: { fr: "/inscription", en: "/en/inscription" },
  },
};

export default function InscriptionPageEn() {
  return <InscriptionContent lang="en" />;
}
