import { Clock, Mail, MapPin } from "lucide-react";
import { company, legalLinks, nav, quickLinks, socialLinks } from "@/data/content";
import Image from "next/image";
import FooterLink from "@/components/FooterLink";

function SocialIcon({ label }: { label: string }) {
  const iconClass = "h-4 w-4";

  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass} fill="currentColor">
        <path d="M14.2 8.4V6.8c0-.8.5-1 1-1h2.1V2.2L14.4 2c-3.2 0-5 2-5 5.5v.9H6.1v4h3.3V22h4.1v-9.6h3.3l.5-4h-3.1Z" />
      </svg>
    );
  }

  if (label === "Twitter") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass} fill="none">
        <path
          d="M4 4l16 16M20 4 4 20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2.4"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass} fill="currentColor">
      <path d="M6.9 8.9H3.2V21h3.7V8.9ZM5 3a2.1 2.1 0 1 0 0 4.2A2.1 2.1 0 0 0 5 3Zm16 11.3c0-3.5-1.9-5.7-4.8-5.7-1.7 0-2.8.9-3.4 1.8V8.9H9.2V21h3.7v-6c0-1.8.9-3 2.4-3 1.4 0 2 1 2 3v6H21v-6.7Z" />
    </svg>
  );
}

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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-black"
                >
                  <SocialIcon label={link.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5 text-xs text-white/55">
          <p>&copy; 2026 Vidi Meth Digital Services (OPC) Private Limited.</p>
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
