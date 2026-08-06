import type { Metadata } from "next";
import { Building2, Target, Compass, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { company } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us - Vidi Meth Digital Services",
  description: "Learn about Vidi Meth Digital Services (OPC) Private Limited.",
};

const aboutLinks = [
  "www.vmacademys.com",
  "www.villagemycity.com",
  "www.gojobin.com",
  "www.loanvidhi.com",
  "www.vmhomemart.com",
];

const divisionWriteUps = [
  {
    name: "VMAcademy",
    url: "www.vmacademys.com",
    paragraphs: [
      "VMAcademy is an online education portal that provides education-related services and products. It helps students find the course and college best suited to them. VMAcademy is a college and course selection platform with information for undergraduate (UG) and postgraduate (PG) courses across India. The platform is accessible on desktop and mobile and provides details on career choices, courses, admission criteria, eligibility, exam fees, placement statistics, reviews, scholarships, and latest updates.",
      "VMAcademy also assists aspirants with post-examination guidance, admission-related queries, and real insights for choosing the right institutes. It offers specific information for students interested in UG and PG courses across popular streams including management, engineering, computer applications, medical, dental, pharmacy, paramedical, veterinary science, education, law, hotel management, mass communication, animation, design, architecture, agriculture, arts, commerce, science, vocational education, and aviation.",
    ],
  },
  {
    name: "VillageMyCity",
    url: "www.villagemycity.com",
    paragraphs: [
      "VillageMyCity is a real estate and property portal in India. It helps users connect anywhere, anytime, and with one click they can list items or products for sale. The platform connects buyers and sellers for goods and services. Our vision is for buyers and sellers to meet online and transact offline. The platform supports advertisements from individual owners, builders, promoters, agents, and dealers.",
    ],
  },
  {
    name: "GoJobin",
    url: "www.gojobin.com",
    paragraphs: [
      "GoJobin is an Indian job site that helps candidates find the right job and helps employers find qualified candidates. It provides recruitment solutions, staffing support, and recruiting services for job seekers and employers. GoJobin is an online employment solution for people seeking jobs and for employers who need capable people.",
      "The platform supports free job posting in India and offers opportunities for freshers, trained candidates, and experienced professionals. It is designed to make job discovery easier for candidates while helping employers reach suitable applicants.",
    ],
  },
  {
    name: "LOANvidhi",
    url: "www.loanvidhi.com",
    paragraphs: [
      "LOANvidhi is a service provider for insurance, financial affairs, monetary affairs, and real estate affairs. LOANvidhi offers loan and insurance consulting services, including secured and unsecured loans from various banks, financial planning that helps customers understand future needs, and advisory support in the financial sector.",
      "The aim is to bring innovative ideas and useful technology to transform financial support and make loan and insurance guidance easier to access.",
    ],
  },
  {
    name: "VMhomeMart",
    url: "www.vmhomemart.com",
    paragraphs: [
      "VMhomeMart is an e-commerce marketplace for goods such as electronics, fashion, kitchen items, and home essentials. The marketplace allows users to offer, sell, and buy products from a wide range of categories and locations.",
      "The contract of sale is directly between the seller and the buyer, making VMhomeMart a complete online shopping platform for connected buyers and sellers.",
    ],
  },
];

const aboutStats = [
  { value: "215+", label: "Happy Clients" },
  { value: "582", label: "Project Done" },
  { value: "70+", label: "Awards Won" },
  { value: "25+", label: "Experience Year" },
];

const aboutWhyChooseUs = [
  {
    title: "Our Speciality",
    body: "We take pleasure in making your life easier.",
  },
  {
    title: "Customer Service",
    body: "Your requirement is important to us, and we make sure we understand your needs completely.",
  },
  {
    title: "Professionalism",
    body: "We develop long-term relationships that are mutually beneficial.",
  },
  {
    title: "Expandability",
    body: "We are always ready to make fast and effective changes and additions that meet your expansion needs.",
  },
  {
    title: "Money Back Guarantee",
    body: "We guarantee to issue a full refund if you request cancellation of your service and are not satisfied.",
  },
  {
    title: "Creative Solutions",
    body: "We help you make the difference. Our goal is to inspire you with new insights and creative solutions.",
  },
  {
    title: "Happy Customers",
    body: "We go the extra mile. Our clients are pleased with the commitment we show again and again.",
  },
  {
    title: "World-Wide Expertise",
    body: "We understand international markets and trends. Our expertise, experience, and network cover many corners of the world.",
  },
  {
    title: "Commitment to Quality",
    body: "We are committed to quality and concrete actions, delivering solutions in a professional and practical way.",
  },
  {
    title: "Sustainable Success",
    body: "We apply co-creation methodologies. The resulting ownership creates a sound basis for sustainable success.",
  },
];

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

      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <Reveal>
          <p className="eyebrow mb-4">About Vidi Meth</p>
          <div className="max-w-4xl space-y-5 text-sm sm:text-base text-text-muted leading-relaxed">
            <p>
              To carry on in India or elsewhere the business of concept marketing and online
              marketing, advertising, business management, business administration, office function,
              direct marketing, and to provide high quality services and products to clients.
              {` ${company.name} is an established name in the online industry.`}
            </p>
            <ul className="grid gap-2 sm:grid-cols-2 font-mono text-sm text-ink">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`https://${link}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-teal"
                  >
                    {link}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
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
            body: "Through a parent company and specialised divisions spanning education, civic development, jobs, finance, commerce, and more.",
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

      <section className="border-y border-line bg-white/45">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <Reveal>
            <p className="eyebrow mb-4">Our Divisions</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight max-w-2xl">
              Specialist platforms serving education, property, jobs, finance, and commerce.
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-paper">
            {divisionWriteUps.map((division, i) => (
              <Reveal key={division.name} delay={0.04 * i}>
                <article className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl text-ink">{division.name}</h3>
                  <a
                    href={`https://${division.url}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-2 font-mono text-xs text-teal transition-colors hover:text-ink"
                  >
                    {division.url}
                    <ArrowUpRight size={14} />
                  </a>
                  <div className="mt-5 space-y-4 text-sm text-text-muted leading-relaxed">
                    {division.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
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
            {aboutWhyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={0.04 * i}>
                <h3 className="font-display text-lg text-teal-soft">{w.title}</h3>
                <p className="mt-1.5 text-sm text-paper/70 leading-relaxed">{w.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.04 * i}>
              <div className="rounded-2xl border border-line bg-white/70 p-7 text-center shadow-sm">
                <p className="font-display text-4xl text-teal">{stat.value}</p>
                <p className="mt-2 font-mono text-xs font-semibold uppercase text-text-muted">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
}
