import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import GrievanceForm from "@/components/GrievanceForm";
import { company } from "@/data/content";

export const metadata: Metadata = {
  title: "Grievance - Vidi Meth Digital Services",
  description:
    "Submit a grievance or report a concern to Vidi Meth Digital Services (OPC) Private Limited.",
};

export default function GrievancePage() {
  return (
    <div>
      <section className="border-b border-line paper-texture">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <p className="eyebrow mb-4">Grievance</p>
            <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight">
              Report a concern.
            </h1>
            <nav
              aria-label="Breadcrumb"
              className="mt-5 flex flex-wrap items-center gap-2 text-sm text-text-muted"
            >
              <Link href="/" className="inline-flex items-center gap-1.5 hover:text-teal">
                <Home size={15} />
                Vidi Meth Digital Services
              </Link>
              <ChevronRight size={15} aria-hidden />
              <span className="text-ink">Grievance</span>
            </nav>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              Please share the details of the page or content you are reporting. Choose the reason
              that most closely matches your concern and upload any supporting documents if needed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-16 lg:py-20">
        <Reveal>
          <div className="mb-8 rounded-2xl border border-line bg-paper-dim/50 p-6 text-sm text-text-muted sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="font-semibold text-ink">Grievance contact</p>
              <p className="mt-1 leading-6">
                You can also write directly to us for complaint handling and policy queries.
              </p>
            </div>
            <a
              href={`mailto:${company.email}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-teal sm:mt-0"
            >
              <Mail size={16} />
              {company.email}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <GrievanceForm />
        </Reveal>
      </section>
    </div>
  );
}
