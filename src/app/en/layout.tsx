import type { Metadata } from "next";
import HtmlLang from "@/components/HtmlLang";

export const metadata: Metadata = {
  title: "Seren | Your guide through the steps after a loss",
  description:
    "Seren guides you step by step through every administrative procedure after the loss of someone close. Clear, human, reassuring.",
  alternates: {
    canonical: "/en",
    languages: {
      fr: "/",
      en: "/en",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLang lang="en" />
      {children}
    </>
  );
}
