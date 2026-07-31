import Link from "next/link";
import { Mail, Clock, MapPin } from "lucide-react";
import { company, nav, quickLinks } from "@/data/content";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/vidilogo.png"
                alt="Vidi Meth Logo"
                width={90}
                height={90}
                className="object-contain"
                priority
              />
              <span className="font-display text-lg">Vidi Meth</span>
            </div>
            <p className="text-sm text-paper/70 leading-relaxed max-w-sm">
              {company.mission}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-gold-soft">Links</p>
            <ul className="space-y-2.5 text-sm text-paper/75">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold-soft transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#" className="hover:text-gold-soft transition-colors">
                  {/* Career */}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-gold-soft">Quick Links</p>
            <ul className="space-y-2.5 text-sm text-paper/75">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`https://${link}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gold-soft transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-gold-soft">Registered Office</p>
            <ul className="space-y-3 text-sm text-paper/75">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                  <br />
                  {company.address.line3}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a href={`mailto:${company.email}`} className="hover:text-gold-soft">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-paper/15 pt-8 font-mono text-[0.7rem] text-paper/55 flex flex-wrap gap-x-8 gap-y-2">
          <span>CIN: {company.registration.cin}</span>
          <span>GSTIN: {company.registration.gstin}</span>
          <span>PAN: {company.registration.pan}</span>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-8 text-xs text-paper/55">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-gold-soft">Grievance</a>
            <a href="#" className="hover:text-gold-soft">Privacy Policy</a>
            <a href="#" className="hover:text-gold-soft">Terms of Use</a>
            <a href="#" className="hover:text-gold-soft">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
