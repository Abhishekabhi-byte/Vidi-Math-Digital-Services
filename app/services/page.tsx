import type { Metadata } from "next";
import { BadgeCheck, Briefcase, GraduationCap, LayoutGrid, Landmark, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services } from "@/data/content";

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
              We help your Business!
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              &quot;Elevating Your Business Success: We&apos;re Your Catalyst for Growth and
              Innovation!&quot;
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
                <div className="group rounded-2xl border border-line bg-white/60 p-8 flex flex-col sm:flex-row sm:items-center gap-6 transition-colors hover:border-teal/60">
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
    </div>
  );
}
