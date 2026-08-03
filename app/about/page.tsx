import type { Metadata } from "next";
import { Building2, Target, Compass } from "lucide-react";
import Reveal from "@/components/Reveal";
import { company, whyChooseUs, clients } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us — Vidi Meth Digital Services",
  description: "Learn about Vidi Meth Digital Services (OPC) Private Limited.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-line paper-texture">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 lg:py-24 text-center">
          <Reveal>
            <p className="eyebrow mb-4 justify-center flex">About Us</p>
            <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight text-balance">
              A registered Indian company, built to move business forward.
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">{company.mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20 grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Building2,
            title: "Who we are",
            body: "Vidi Meth Digital Services (OPC) Private Limited is a One Person Company registered in Jamshedpur, Jharkhand, serving clients across India.",
          },
          {
            icon: Target,
            title: "What we focus on",
            body: "Concept marketing, online marketing, advertising, business management, business administration, office function, and direct marketing.",
          },
          {
            icon: Compass,
            title: "How we operate",
            body: "Through a parent company and five specialised divisions spanning education, civic development, jobs, finance, and real estate.",
          },
        ].map((item, i) => (
          <Reveal key={item.title} delay={0.06 * i}>
            <div className="h-full rounded-2xl border border-line bg-white/60 p-7">
              <item.icon size={24} className="text-teal" />
              <h3 className="mt-4 font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <Reveal>
            <p className="eyebrow mb-4 text-teal-soft">Why choose us</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight max-w-2xl">
              Businesses have come to depend on us for our expertise, quality, and customer
              service.
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={0.04 * i}>
                <h3 className="font-display text-lg text-teal-soft">{w.title}</h3>
                <p className="mt-1.5 text-sm text-paper/70 leading-relaxed">{w.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
        <Reveal>
          <p className="eyebrow mb-4">Who we&apos;ve worked with</p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight max-w-2xl">
            Across industries, one standard of service.
          </h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((c, i) => (
            <Reveal key={c} delay={0.04 * i}>
              <div className="rounded-xl border border-line bg-paper-dim/50 px-5 py-4 text-sm font-medium text-ink">
                {c}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
          <Reveal>
            <div className="rounded-2xl border border-line bg-paper-dim/50 p-8 font-mono text-sm text-text-muted grid sm:grid-cols-3 gap-6">
              <div>
                <p className="eyebrow mb-2">CIN</p>
                <p className="text-ink">{company.registration.cin}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">GSTIN</p>
                <p className="text-ink">{company.registration.gstin}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">PAN</p>
                <p className="text-ink">{company.registration.pan}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
