"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type FooterLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export default function FooterLink({ href, className, children }: FooterLinkProps) {
  const pathname = usePathname();

  function handleClick() {
    if (pathname === href) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }

  return (
    <Link href={href} scroll className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
