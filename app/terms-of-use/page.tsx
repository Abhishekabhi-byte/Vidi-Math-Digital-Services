import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalPages } from "@/data/content";

export const metadata: Metadata = {
  title: "Terms of Use - Vidi Meth Digital Services",
  description: "Terms of Use for Vidi Meth Digital Services (OPC) Private Limited.",
};

export default function TermsOfUsePage() {
  return <LegalPage page={legalPages.termsOfUse} />;
}
