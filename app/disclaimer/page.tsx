import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalPages } from "@/data/content";

export const metadata: Metadata = {
  title: "Disclaimer - Vidi Meth Digital Services",
  description: "Disclaimer for Vidi Meth Digital Services (OPC) Private Limited.",
};

export default function DisclaimerPage() {
  return <LegalPage page={legalPages.disclaimer} />;
}
