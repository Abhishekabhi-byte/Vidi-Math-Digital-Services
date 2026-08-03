import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalPages } from "@/data/content";

export const metadata: Metadata = {
  title: "Privacy Policy - Vidi Meth Digital Services",
  description:
    "Privacy Policy for Vidi Meth Digital Services (OPC) Private Limited.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage page={legalPages.privacyPolicy} />;
}
