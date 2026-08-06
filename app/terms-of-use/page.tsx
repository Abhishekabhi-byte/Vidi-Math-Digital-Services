import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Use - Vidi Meth Digital Services",
  description: "Terms of Use for Vidi Meth Digital Services (OPC) Private Limited.",
};

const sectionHeadings = new Set([
  "Welcome to Vidi Meth Digital Services OPC Private Limited !",
  "Eligibility",
  "Registration",
  "User Account, Password and Security",
  "Communications",
  "Platform for Transaction and Communication",
  "User Conduct and Rules on the Website",
  "Disclaimer for websites that we link to",
  "Privacy",
  "Terms of conditions specific for educational institutions/colleges etc. (as applicable):",
  "Payments Related Information",
  "Intellectual Property Rights",
  "Disclaimer of Warranties and Liability",
  "Disclaimer of online availability, impressions, and click-through",
  "Purchasing and Ordering Disclaimer",
  "Make Your Own Decisions:",
  "Limitation of Liability",
  "Taxes",
  "Indemnity",
  "Links",
  "Dispute Settlement",
  "Local Laws",
  "Governing Law and Jurisdiction",
  "Trademark, Copyright and Restriction",
  "Miscellaneous:",
  "Amendment to these Terms:",
  "Data Protection Amendment",
  "Definitions",
  "Obligations of the data exporter",
  "Obligations of the data importer",
  "4.Law applicable to the clauses",
  "Resolution of disputes with data subjects or the authority",
  "6.Termination",
  "Description of the Transfer",
  "Grievance Officer :",
  "Contact Us",
]);

type TermsLine = {
  line: string;
  sourceLine: number;
};

type ListMeta = {
  marker: string;
  level?: "primary" | "secondary";
};

function getTermsLines() {
  const sourcePath = join(process.cwd(), "data", "terms-of-use.txt");
  const lines: TermsLine[] = [];

  readFileSync(sourcePath, "utf8")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .forEach((rawLine, index) => {
      const line = rawLine.trim();
      if (!line) return;

      if ((line === "Platform." || line === "exporter.") && lines.length > 0) {
        lines[lines.length - 1].line = `${lines[lines.length - 1].line} ${line}`;
        return;
      }

      lines.push({ line, sourceLine: index + 1 });
    });

  return lines;
}

function toRoman(value: number) {
  const numerals = [
    ["x", 10],
    ["ix", 9],
    ["v", 5],
    ["iv", 4],
    ["i", 1],
  ] as const;
  let remaining = value;
  let result = "";

  for (const [numeral, amount] of numerals) {
    while (remaining >= amount) {
      result += numeral;
      remaining -= amount;
    }
  }

  return result;
}

function cleanListText(line: string) {
  return line.replace(/^(\d+\.|[a-z]\.)\s*/i, "").trim();
}

function getSequentialMarker(sourceLine: number, startLine: number, markerStart = 1) {
  return `${sourceLine - startLine + markerStart}.`;
}

function getListMeta(sourceLine: number): ListMeta | null {
  if (sourceLine >= 27 && sourceLine <= 28) {
    return { marker: getSequentialMarker(sourceLine, 27) };
  }

  if (sourceLine >= 33 && sourceLine <= 34) {
    return { marker: getSequentialMarker(sourceLine, 33) };
  }

  if (sourceLine >= 49 && sourceLine <= 67) {
    return { marker: getSequentialMarker(sourceLine, 49) };
  }

  if (sourceLine === 74) return { marker: "1." };
  if (sourceLine >= 75 && sourceLine <= 95) {
    return { marker: `${toRoman(sourceLine - 74)}.`, level: "secondary" };
  }
  if (sourceLine >= 96 && sourceLine <= 98) {
    return { marker: getSequentialMarker(sourceLine, 96, 2) };
  }
  if (sourceLine === 101) return { marker: "5." };
  if (sourceLine >= 103 && sourceLine <= 106) {
    return { marker: getSequentialMarker(sourceLine, 103, 6) };
  }

  if (sourceLine >= 116 && sourceLine <= 118) {
    return { marker: `${toRoman(sourceLine - 115)}.` };
  }
  if (sourceLine >= 121 && sourceLine <= 125) {
    return { marker: `${toRoman(sourceLine - 120)}.` };
  }
  if (sourceLine >= 132 && sourceLine <= 137) {
    return { marker: getSequentialMarker(sourceLine, 132) };
  }

  if (sourceLine >= 146 && sourceLine <= 149) {
    return { marker: getSequentialMarker(sourceLine, 146) };
  }
  if (sourceLine >= 151 && sourceLine <= 154) {
    return { marker: `${toRoman(sourceLine - 150)}.`, level: "secondary" };
  }
  if (sourceLine >= 155 && sourceLine <= 165) {
    return { marker: getSequentialMarker(sourceLine, 155, 5) };
  }

  if (sourceLine >= 184 && sourceLine <= 187) {
    return { marker: `${toRoman(sourceLine - 183)}.` };
  }
  if (sourceLine >= 233 && sourceLine <= 236) {
    return { marker: `${toRoman(sourceLine - 232)}.` };
  }

  if (sourceLine >= 285 && sourceLine <= 291) {
    return { marker: `${toRoman(sourceLine - 284)}.` };
  }
  if (sourceLine === 297) return { marker: "i." };
  if (sourceLine >= 299 && sourceLine <= 300) {
    return { marker: `${toRoman(sourceLine - 297)}.` };
  }
  if (sourceLine >= 304 && sourceLine <= 309) {
    return { marker: `${toRoman(sourceLine - 303)}.` };
  }
  if (sourceLine >= 324 && sourceLine <= 328) {
    return { marker: `${toRoman(sourceLine - 323)}.`, level: "secondary" };
  }
  if (sourceLine === 329) return { marker: "b." };
  if (sourceLine === 331) return { marker: "c." };

  return null;
}

export default function TermsOfUsePage() {
  const termsLines = getTermsLines();

  return (
    <div>
      <section className="border-b border-line paper-texture">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <p className="eyebrow mb-4">Terms of Use</p>
            <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              Terms of Use
            </h1>
            <nav
              aria-label="Breadcrumb"
              className="mt-5 flex flex-wrap items-center gap-2 text-sm text-text-muted"
            >
              <Link href="/" className="inline-flex items-center gap-1.5 hover:text-teal">
                <Home size={15} />
                Vidi Meth Digital Services
              </Link>
              <ChevronRight size={15} aria-hidden />
              <span className="text-ink">Terms of Use</span>
            </nav>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              Please read these Terms of Use carefully before accessing or using the website.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="space-y-7">
          {termsLines.map(({ line, sourceLine }, index) => {
            const listMeta = getListMeta(sourceLine);

            if (sectionHeadings.has(line)) {
              const isPageTitle = index === 0;

              return (
                <Reveal key={`${line}-${index}`} delay={Math.min(index * 0.005, 0.2)}>
                  {isPageTitle ? (
                    <h2 className="font-display text-3xl text-ink">{line}</h2>
                  ) : (
                    <h2 className="border-t border-line pt-8 font-display text-2xl text-ink">
                      {line}
                    </h2>
                  )}
                </Reveal>
              );
            }

            if (listMeta) {
              return (
                <Reveal key={`${line}-${index}`} delay={Math.min(index * 0.005, 0.2)}>
                  <div
                    className={`grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 text-sm leading-7 text-text-muted sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:text-base ${
                      listMeta.level === "secondary" ? "pl-6 sm:pl-10" : ""
                    }`}
                  >
                    <span className="text-right font-mono text-sm font-semibold leading-7 tabular-nums text-teal sm:text-base">
                      {listMeta.marker}
                    </span>
                    <p>{cleanListText(line)}</p>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal key={`${line}-${index}`} delay={Math.min(index * 0.005, 0.2)}>
                <p className="text-sm leading-7 text-text-muted sm:text-base">{line}</p>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
