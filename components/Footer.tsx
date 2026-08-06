import { Clock, Mail, MapPin } from "lucide-react";
import { company, legalLinks, nav, quickLinks, socialLinks } from "@/data/content";
import Image from "next/image";
import FooterLink from "@/components/FooterLink";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr_0.85fr_1.15fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/vidilogo.png"
                alt="Vidi Meth Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
              <span className="font-display text-lg">Vidi Meth</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              {company.mission}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3 text-white">Links</p>
            <ul className="space-y-2 text-sm text-white/75">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} className="hover:text-[#bfefff] transition-colors">
                    {item.label}
                  </FooterLink>
                </li>
              ))}
              <li>
                <a href="#" className="hover:text-[#bfefff] transition-colors">
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3 text-white">Quick Links</p>
            <ul className="space-y-2 text-sm text-white/75">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`https://${link}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#bfefff] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3 text-white">Registered Office</p>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white" />
                <span>
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                  <br />
                  {company.address.line3}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-white" />
                <a href={`mailto:${company.email}`} className="hover:text-[#bfefff]">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0 text-white" />
                <span>{company.hours}</span>
              </li>
            </ul>

            <div className="mt-4 space-y-1.5 font-mono text-[0.68rem] text-white/60">
              <p>CIN: {company.registration.cin}</p>
              <p>GSTIN: {company.registration.gstin}</p>
              <p>PAN: {company.registration.pan}</p>
            </div>

            <div className="mt-4 flex gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 font-mono text-xs font-semibold uppercase text-white transition-colors hover:bg-white hover:text-black"
                >
                  {link.mark}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5 text-xs text-white/55">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <FooterLink key={link.href} href={link.href} className="hover:text-[#bfefff]">
                {link.label}
              </FooterLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
