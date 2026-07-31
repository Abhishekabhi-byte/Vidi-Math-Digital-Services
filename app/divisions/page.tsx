import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import NetworkOrbit from "@/components/NetworkOrbit";
import { divisions } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Divisions — Vidi Meth Digital Services",
  description: "Explore the five business divisions in the Vidi Meth network.",
};

export default function DivisionsPage() {
  return (
    <div>
      <section className="border-b border-line paper-texture">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-24 grid lg:grid-cols-[1fr_0.9fr] gap-14 items-center">
          <Reveal>
            <p className="eyebrow mb-4">Facilitating global business networks</p>
            <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight text-balance">
              Five divisions. One shared standard of trust.
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-lg">
              We highly value and prioritise the collaborative relationships with our partners.
              Together, we strive for mutual success and innovative solutions for shared growth.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <NetworkOrbit compact />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
        <div className="grid gap-6">
          {divisions.map((d, i) => {
            const accent = d.color === "gold" ? "text-gold" : "text-teal";
            const accentBorder = d.color === "gold" ? "hover:border-gold/60" : "hover:border-teal/60";
            return (
              <Reveal key={d.name} delay={0.06 * i}>
                <a
                  href={`https://${d.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex flex-col md:flex-row md:items-center gap-6 rounded-2xl border border-line bg-white/60 p-8 transition-colors ${accentBorder}`}
                >
                  <div className="md:w-56 shrink-0">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {d.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-paper-dim px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-wide text-text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h2 className={`font-display text-2xl text-ink`}>{d.name}</h2>
                    <span className={`mt-1 block font-mono text-xs ${accent}`}>{d.url}</span>
                  </div>
                  <p className="flex-1 text-sm text-text-muted leading-relaxed">
                    {d.description}
                  </p>
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-text-muted transition-all group-hover:text-ink group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </Reveal>
            );
          })}
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
