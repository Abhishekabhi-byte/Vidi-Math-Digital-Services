import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { company, divisions } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Divisions - Vidi Meth Digital Services",
  description: "Explore the business divisions in the Vidi Meth network.",
};

const divisionImages = [
  "/vmdivision.png",
  "/villagemycity.png",
  "/gojobinsection-image.jpeg",
  "/loanvidhi.png",
  "/vmhomemart-image.jpeg",
];

export default function DivisionsPage() {
  return (
    <div>
      <section className="border-b border-line paper-texture">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 lg:py-24 text-center">
          <Reveal>
            <p className="eyebrow mb-4 justify-center flex">
              <Link href="/" className="hover:text-teal">
                {company.shortName} Digital Services
              </Link>
              <span className="mx-2 text-text-muted">&gt;</span>
              Our Divisions
            </p>
            <h1 className="font-display text-4xl sm:text-6xl text-ink leading-tight text-balance">
              Our Divisions
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              Explore the specialised platforms connected with Vidi Meth Digital Services.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {divisions.map((division, index) => (
            <Reveal key={division.name} delay={0.06 * index}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white/70 shadow-sm transition-colors hover:border-teal/60">
                <div className="relative aspect-[4/3] bg-paper-dim">
                  <Image
                    src={divisionImages[index % divisionImages.length]}
                    alt={division.name}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {division.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-paper-dim px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-wide text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-display text-2xl text-ink">{division.name}</h2>
                  <span className="mt-1 block font-mono text-xs text-teal">{division.url}</span>
                  <p className="mt-4 flex-1 text-sm text-text-muted leading-relaxed">
                    {division.description}
                  </p>
                  <a
                    href={`https://${division.url}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-all hover:bg-teal hover:gap-3"
                  >
                    Read More <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center border-t border-line">
        <Reveal>
          <h2 className="font-display text-3xl text-ink">Looking to build with us?</h2>
          <p className="mt-3 text-text-muted">
            Whether it&apos;s a new division or a joint initiative, we&apos;d like to hear about it.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:bg-teal hover:gap-3"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
