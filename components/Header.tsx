"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
           <div className="h-12 w-12 transition-transform duration-900 group-hover:scale-105">
  <Image
    src="/vidilogo.png"
    alt="Vidi Meth Logo"
    width={90}
    height={90}
    className="object-contain"
    priority
  />
</div>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base text-ink">Vidi Meth</span>
              <span className="eyebrow text-[0.6rem] text-text-muted">Digital Services</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors ${
                    active ? "text-ink" : "text-text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] bg-gold transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-teal"
            >
              Start a conversation
            </Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden border-b border-line bg-paper transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 text-sm font-medium ${
                pathname === item.href ? "bg-paper-dim text-ink" : "text-text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${company.email}`}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-ink px-4 py-3 text-center text-sm font-semibold text-paper"
          >
            Email us
          </a>
        </nav>
      </div>
    </header>
  );
}
