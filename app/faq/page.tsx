import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { company } from "@/data/content";

export const metadata: Metadata = {
  title: "FAQs — Vidi Meth Digital Services",
  description: "Frequently asked questions about Vidi Meth Digital Services.",
};

export default function FaqPage() {
  return (
    <div>
      <section className="border-b border-line paper-texture">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 lg:py-24 text-center">
          <Reveal>
            <p className="eyebrow mb-4 justify-center flex">FAQs</p>
            <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight text-balance">
              Answers, before you ask.
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Write to us at{" "}
              <a href={`mailto:${company.email}`} className="text-teal font-medium">
                {company.email}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
        <Reveal>
          <FaqAccordion />
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-8 py-16 text-center">
        <Reveal>
          <h2 className="font-display text-2xl text-ink">Still have questions?</h2>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:bg-teal hover:gap-3"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
