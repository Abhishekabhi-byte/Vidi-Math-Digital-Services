"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
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
      <div className="border-b border-[#0076c9]/10 bg-white/95 backdrop-blur">
        <div className="flex min-h-20 w-full items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-10">
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#0076c9]/10 transition-transform duration-500 group-hover:scale-105">
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
              <span className="font-display text-base text-[#0076c9]">Vidi Meth</span>
              <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-text-muted">
                Digital Services
              </span>
            </span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {nav.map((item) => {
              const active =
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "text-[#063f73]"
                      : "text-[#0076c9]/75 hover:text-[#0076c9]"
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
              className="inline-flex items-center gap-2 whitespace-nowrap bg-[#0076c9] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#063f73]"
            >
              Get a Quote
              <ArrowRight size={16} />
            </Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center bg-[#0076c9] text-white lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-b border-[#0076c9]/10 bg-[#eef8ff] transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`border-l-4 px-4 py-3 text-sm font-semibold ${
                pathname === item.href
                  ? "border-[#0076c9] bg-[#0076c9]/10 text-[#063f73]"
                  : "border-transparent text-[#0076c9]/75"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${company.email}`}
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#0076c9] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Email us
          </a>
        </nav>
      </div>
    </header>
  );
}
