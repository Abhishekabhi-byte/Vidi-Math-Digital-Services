import type { Metadata } from "next";
import { Mail, Clock, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { company } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact Us — Vidi Meth Digital Services",
  description: "Get in touch with Vidi Meth Digital Services.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-line paper-texture">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 lg:py-24 text-center">
          <Reveal>
            <p className="eyebrow mb-4 justify-center flex">Contact Us</p>
            <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight text-balance">
              Let&apos;s talk about your business.
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              Reach out with a project, a question, or just an idea — we read every message.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-line bg-paper-dim/50 p-7">
                <p className="eyebrow mb-4">Registered office</p>
                <div className="space-y-5 text-sm">
                  <div className="flex gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-teal" />
                    <p className="text-text-muted leading-relaxed">
                      {company.address.line1}
                      <br />
                      {company.address.line2}
                      <br />
                      {company.address.line3}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Mail size={18} className="mt-0.5 shrink-0 text-teal" />
                    <a
                      href={`mailto:${company.email}`}
                      className="text-ink font-medium hover:text-teal"
                    >
                      {company.email}
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <Clock size={18} className="mt-0.5 shrink-0 text-teal" />
                    <p className="text-text-muted">{company.hours}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-line p-7 font-mono text-xs text-text-muted space-y-2">
                <p>CIN: {company.registration.cin}</p>
                <p>GSTIN: {company.registration.gstin}</p>
                <p>PAN: {company.registration.pan}</p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-line">
                <iframe
                  title="Vidi Meth Digital Services location"
                  className="w-full h-64 grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Sakchi,+Jamshedpur,+Jharkhand&output=embed"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
