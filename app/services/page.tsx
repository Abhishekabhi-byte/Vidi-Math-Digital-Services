import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Briefcase, GraduationCap, LayoutGrid, Landmark, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services, quickLinks } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Services - Vidi Meth Digital Services",
  description: "Digital marketing, advertising, and business management services.",
};

const icons = [ShieldCheck, BadgeCheck, Landmark, GraduationCap, LayoutGrid, Briefcase];

export default function ServicesPage() {
  return (
    <div>
      <section className="border-b border-line paper-texture">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 lg:py-24 text-center">
          <Reveal>
            <p className="eyebrow mb-4 justify-center flex">Our Services</p>
            <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight text-balance">
              We help your business.
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              Elevating your business success: we are your catalyst for growth and innovation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
        <div className="grid gap-6">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.title} delay={0.05 * i}>
                <div className="group rounded-2xl border border-line bg-white/60 p-8 flex flex-col sm:flex-row sm:items-center gap-6 transition-colors hover:border-gold/60">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-paper-dim">
                    <Icon size={24} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-ink">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-text-muted leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <Reveal>
            <p className="eyebrow mb-4 text-teal-soft">Our digital marketing expertise</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight max-w-2xl">
              Delivered through a live network of five platforms.
            </h2>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickLinks.map((link, i) => (
              <Reveal key={link} delay={0.05 * i}>
                <a
                  href={`https://${link}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-paper/15 bg-paper/5 px-5 py-4 font-mono text-sm hover:border-gold hover:bg-paper/10 transition-colors"
                >
                  {link}
                  <ArrowRight size={16} className="text-teal-soft" />
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <Link
              href="/divisions"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-teal-soft hover:gap-3 transition-all"
            >
              See what each division does <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl text-ink">Not sure where to start?</h2>
          <p className="mt-3 text-text-muted">
            Tell us about your business and we&apos;ll recommend the right combination of services.
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
