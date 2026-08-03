"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Clock, Mail, Menu, X } from "lucide-react";
import { nav, company } from "@/data/content";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-ink/5" : ""
      }`}
    >
      <div className="bg-[#123f2b] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-5 px-4 py-2.5 text-[0.72rem] font-medium sm:justify-between sm:px-6 lg:px-8">
          <div className="hidden items-center gap-5 sm:flex">
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 text-white/85 hover:text-lime-300">
              <Mail size={14} className="text-lime-400" />
              {company.email}
            </a>
            <span className="inline-flex items-center gap-2 text-white/85">
              <Clock size={14} className="text-lime-400" />
              {company.hours}
            </span>
          </div>
          <span className="inline-flex items-center gap-2 text-white/85">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            Vidi Meth Digital Services (OPC) Pvt. Ltd.
          </span>
        </div>
      </div>

      <div className="bg-[#f6f8f2]/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-h-16 items-center justify-between gap-5 rounded-full border border-[#123f2b]/10 bg-white/90 px-4 py-2 shadow-sm">
            <Link href="/" className="group flex shrink-0 items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-lime-400/20 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/vidilogo.png"
                  alt="Vidi Meth Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-base text-[#123f2b]">Vidi Meth</span>
                <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  Digital Services
                </span>
              </span>
            </Link>

            <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
              {nav.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-lime-400 text-[#123f2b]"
                        : "text-[#123f2b]/70 hover:bg-[#123f2b]/6 hover:text-[#123f2b]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden shrink-0 lg:flex">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#123f2b] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-lime-400 hover:text-[#123f2b]"
              >
                Get a Quote
                <ArrowRight size={16} />
              </Link>
            </div>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#123f2b] text-white lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden border-b border-[#123f2b]/10 bg-[#f6f8f2] transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-full px-4 py-3 text-sm font-semibold ${
                pathname === item.href ? "bg-lime-400 text-[#123f2b]" : "text-[#123f2b]/75"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${company.email}`}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[#123f2b] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Email us
          </a>
        </nav>
      </div>
    </header>
  );
}
