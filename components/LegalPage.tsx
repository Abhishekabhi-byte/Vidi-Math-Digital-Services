import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Reveal from "@/components/Reveal";

type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  listStyle?: string;
};

type LegalPageContent = {
  title: string;
  eyebrow: string;
  description: string;
  sections: LegalSection[];
};

export default function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <div>
      <section className="border-b border-line paper-texture">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <p className="eyebrow mb-4">{page.eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight">
              {page.title}
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
              <span className="text-ink">{page.title}</span>
            </nav>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">{page.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="space-y-10">
          {page.sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 0.03}>
              <article className="border-b border-line pb-10 last:border-b-0 last:pb-0">
                <h2 className="font-display text-2xl text-ink">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-sm sm:text-base text-text-muted leading-7">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <div className="space-y-2">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <div
                          key={bullet}
                          className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 sm:grid-cols-[2.75rem_minmax(0,1fr)]"
                        >
                          <span className="text-right font-mono text-sm font-semibold leading-7 tabular-nums text-teal sm:text-base">
                            {section.listStyle === "number" ? `${bulletIndex + 1}.` : "•"}
                          </span>
                          <p>{bullet}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
