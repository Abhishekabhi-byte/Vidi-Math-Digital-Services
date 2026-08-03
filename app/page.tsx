import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  businessDevStrategies,
  clients,
  company,
  divisions,
  faqs,
  growthAreas,
  quickLinks,
  services,
  whyChooseUs,
} from "@/data/content";

const serviceStrip = [
  "Concept Marketing",
  "Online Marketing",
  "Advertising",
  "Business Management",
  "Direct Marketing",
  "Digital Solutions",
];

const stats = [
  { value: "5+", label: "Business networks" },
  { value: "50+", label: "Organisations served" },
  { value: "24h", label: "Typical response time" },
  { value: "100%", label: "Compliance-first delivery" },
];

const projectCards = [
  ["Colleges & Universities", "Education and institutional growth campaigns."],
  ["Real Estate Organisations", "Marketing support for property and home-service markets."],
  ["Companies & Enterprises", "Business growth planning for teams and brands."],
  ["Government Agencies", "Responsible communication for public-facing work."],
];

const awards = [
  "Concept Marketing Excellence",
  "Digital Growth Partner",
  "Business Network Builder",
  "Client Service Standard",
];

const homeImages = {
  heroMain:
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400",
  heroAccent:
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900",
  aboutTop:
    "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1100",
  aboutBottom:
    "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=1100",
  whyChoose:
    "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1200",
  contact:
    "https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg?auto=compress&cs=tinysrgb&w=1100",
  services: [
    "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=900",
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=900",
    "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=900",
  ],
  projects: [
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=900",
    "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=900",
    "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=900",
    "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=900",
  ],
};

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-lime-400">
      <span className="inline-flex h-3 w-3 rounded-full bg-lime-400" />
      {children}
    </p>
  );
}

function MarqueeStrip() {
  return (
    <div className="overflow-hidden bg-[#143f2c] py-4 text-white">
      <div className="flex min-w-max animate-[marquee_28s_linear_infinite] gap-10 whitespace-nowrap font-display text-xl">
        {[...serviceStrip, ...serviceStrip, ...serviceStrip].map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-10">
            {item}
            <Sparkles size={20} className="text-lime-400" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#f6f8f2] text-[#07150f]">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div>
                <SectionKicker>Elevate your brand with us</SectionKicker>
                <h1 className="font-display text-4xl leading-[1.04] text-[#07150f] sm:text-6xl lg:text-[4.6rem]">
                  Empowering your success with digital expertise.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
                  {company.mission}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full bg-[#123f2b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal"
                  >
                    Explore More <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#123f2b]/20 px-6 py-3 text-sm font-semibold text-[#123f2b] transition hover:border-lime-400 hover:text-teal"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative min-h-[430px] lg:min-h-[540px]">
                <div className="absolute right-0 top-4 h-[82%] w-[78%] overflow-hidden rounded-[2rem] bg-[#123f2b] shadow-2xl shadow-[#123f2b]/20">
                  <Image
                    src={homeImages.heroMain}
                    alt="Vidi Meth team collaboration"
                    fill
                    unoptimized
                    priority
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-0 top-20 h-56 w-56 overflow-hidden rounded-[1.5rem] border-8 border-[#f6f8f2] shadow-xl sm:h-72 sm:w-72">
                  <Image
                    src={homeImages.heroAccent}
                    alt="Digital marketing collaboration"
                    fill
                    unoptimized
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-8 left-12 rounded-full bg-lime-400 p-5 shadow-xl shadow-lime-400/30">
                  <BadgeCheck size={42} className="text-[#123f2b]" />
                </div>
                <div className="absolute bottom-0 right-8 rounded-2xl bg-white px-6 py-5 shadow-xl">
                  <p className="font-display text-3xl text-[#123f2b]">5+</p>
                  <p className="text-sm font-semibold text-text-muted">Business divisions</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="grid gap-5">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={homeImages.aboutTop}
                  alt="Strategic business collaboration"
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={homeImages.aboutBottom}
                  alt="Team growth discussion"
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <SectionKicker>About us</SectionKicker>
              <h2 className="font-display text-3xl leading-tight sm:text-5xl">
                A registered Indian company built to move business forward.
              </h2>
              <p className="mt-5 text-base leading-7 text-text-muted">{company.tagline}</p>
              <div className="mt-8 space-y-5">
                {growthAreas.slice(0, 3).map((item, index) => (
                  <div key={item.title}>
                    <div className="mb-2 flex justify-between text-sm font-semibold">
                      <span>{item.title}</span>
                      <span>{[85, 80, 95][index]}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#dfe7d6]">
                      <div
                        className="h-2 rounded-full bg-[#123f2b]"
                        style={{ width: `${[85, 80, 95][index]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#123f2b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal"
              >
                About Us <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <div className="border-r border-[#123f2b]/20 px-4 last:border-r-0">
                <p className="font-display text-4xl text-[#123f2b]">{stat.value}</p>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#123f2b] py-16 text-white lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionKicker>Our services</SectionKicker>
              <h2 className="font-display text-3xl leading-tight sm:text-5xl">
                Boost your brand with our expertise.
              </h2>
            </Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#123f2b] transition hover:bg-lime-400"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <div
                  className={`h-full rounded-2xl border p-5 ${
                    index === 1
                      ? "border-lime-400 bg-lime-400 text-[#123f2b]"
                      : "border-white/15 bg-white/8 text-white"
                  }`}
                >
                  <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl">
                    <Image
                      src={homeImages.services[index]}
                      alt={service.title}
                      fill
                      unoptimized
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-display text-2xl">{service.title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${index === 1 ? "text-[#123f2b]/75" : "text-white/70"}`}>
                    {service.body}
                  </p>
                  <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                    Learn more <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionKicker>Why choose us</SectionKicker>
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">
              Why our clients believe we are different.
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl">
              <Image
                src={homeImages.whyChoose}
                alt="Why choose Vidi Meth"
                fill
                unoptimized
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-5 rounded-full bg-lime-400 p-7 text-[#123f2b]">
                <Zap size={50} />
              </div>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.slice(0, 4).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-2xl bg-[#123f2b] p-6 text-white">
                  <CheckCircle2 className="mb-5 text-lime-400" />
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <SectionKicker>Our divisions</SectionKicker>
              <h2 className="font-display text-3xl leading-tight sm:text-5xl">
                Five divisions. One shared standard of trust.
              </h2>
              <p className="mt-5 text-base leading-7 text-text-muted">
                We highly value and prioritise the collaborative relationships with our partners.
                Together, we strive for mutual success and innovative solutions for shared growth.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {divisions.map((division, index) => (
              <Reveal key={division.name} delay={index * 0.04}>
                <a
                  href={`https://${division.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-[#123f2b]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-lime-400 font-display text-2xl text-[#123f2b]">
                    {division.name.replace(/[^A-Z]/g, "").slice(0, 2) || division.name.slice(0, 2)}
                  </div>
                  <h3 className="font-display text-3xl">{division.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-text-muted">{division.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-[#123f2b]">
                    {division.url} <ArrowUpRight size={15} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#123f2b] py-16 text-white lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionKicker>Our work process</SectionKicker>
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">
              Step-by-step to your growth.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {businessDevStrategies.slice(0, 3).map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <div className="rounded-2xl border border-white/15 bg-white/8 p-6">
                  <p className="font-mono text-sm text-lime-400">0{index + 1}</p>
                  <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <div className="text-center">
            <SectionKicker>Our work</SectionKicker>
            <h2 className="font-display text-3xl sm:text-5xl">Work that drives results.</h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projectCards.map(([title, body], index) => (
            <Reveal key={title} delay={index * 0.04}>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="relative aspect-[16/8] overflow-hidden rounded-xl">
                  <Image
                    src={homeImages.projects[index]}
                    alt={title}
                    fill
                    unoptimized
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-4">
                  <div>
                    <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-[#123f2b]">
                      {clients[index]}
                    </span>
                    <h3 className="mt-3 font-display text-xl">{title}</h3>
                    <p className="mt-1 text-sm text-text-muted">{body}</p>
                  </div>
                  <span className="rounded-full bg-lime-400 p-3 text-[#123f2b]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#123f2b] py-16 text-white lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal>
            <div>
              <SectionKicker>Our award</SectionKicker>
              <h2 className="font-display text-3xl leading-tight sm:text-5xl">
                Our journey to award-winning success.
              </h2>
              <div className="mt-10 flex h-64 items-center justify-center rounded-full border border-white/15 bg-white/5">
                <Star size={92} className="text-lime-400" />
              </div>
            </div>
          </Reveal>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <Reveal key={award} delay={index * 0.04}>
                <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/8 p-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime-400">
                      {services[index % services.length].title}
                    </p>
                    <h3 className="mt-1 font-display text-2xl">{award}</h3>
                  </div>
                  <ArrowUpRight className="text-lime-400" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <div className="text-center">
            <SectionKicker>Contact us</SectionKicker>
            <h2 className="font-display text-3xl sm:text-5xl">Get your free quote today.</h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative min-h-[460px] overflow-hidden rounded-2xl">
              <Image
                src={homeImages.contact}
                alt="Contact Vidi Meth"
                fill
                unoptimized
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <MarqueeStrip />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="rounded-2xl bg-[#123f2b] p-8 text-white">
              <SectionKicker>Testimonials</SectionKicker>
              <p className="font-display text-6xl">4.9</p>
              <div className="mt-3 flex gap-1 text-lime-400">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-white/70">
                Customer experiences that speak for themselves.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <QuoteIcon />
              <h2 className="mt-4 font-display text-3xl">
                Businesses trust us for responsiveness, quality, and honest growth support.
              </h2>
              <p className="mt-5 text-text-muted">
                Vidi Meth treats each engagement with one-on-one service, open communication, and a
                dedicated point of contact throughout.
              </p>
              <p className="mt-6 font-semibold text-[#123f2b]">Vidi Meth Client Network</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#123f2b] py-16 text-white lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionKicker>News & blogs</SectionKicker>
              <h2 className="font-display text-3xl sm:text-5xl">Our latest news and blogs.</h2>
            </Reveal>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#123f2b] transition hover:bg-lime-400"
            >
              View FAQs <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {faqs.slice(0, 3).map((faq, index) => (
              <Reveal key={faq.q} delay={index * 0.04}>
                <div className="rounded-2xl border border-white/15 bg-white/8 p-6">
                  <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-[#123f2b]">
                    FAQ
                  </span>
                  <h3 className="mt-5 font-display text-2xl">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div>
              <SectionKicker>FAQ</SectionKicker>
              <h2 className="font-display text-3xl sm:text-5xl">Question? Look here.</h2>
              <div className="mt-8 space-y-3">
                {faqs.slice(0, 5).map((faq) => (
                  <details key={faq.q} className="rounded-xl bg-white p-5 shadow-sm">
                    <summary className="cursor-pointer font-semibold">{faq.q}</summary>
                    <p className="mt-3 text-sm leading-6 text-text-muted">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl bg-[#123f2b] p-8 text-white">
              <MessageCircle className="text-lime-400" size={36} />
              <h3 className="mt-5 font-display text-3xl">You have different questions?</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Our team is ready to answer questions about our services, divisions, and business
                support.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <a href={`mailto:${company.email}`} className="flex items-center gap-3">
                  <Mail size={18} className="text-lime-400" /> {company.email}
                </a>
                <span className="flex items-center gap-3">
                  <Phone size={18} className="text-lime-400" /> {company.hours}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <MarqueeStrip />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <SectionKicker>Let us connect</SectionKicker>
              <h2 className="font-display text-3xl sm:text-5xl">Let us connect there.</h2>
              <p className="mt-4 max-w-xl text-text-muted">
                Write to us at {company.email} or explore our connected platforms.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
              {quickLinks.slice(0, 3).map((link) => (
                <a
                  key={link}
                  href={`https://${link}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#123f2b]/15 px-5 py-3 text-sm font-semibold text-[#123f2b] transition hover:border-lime-400 hover:bg-lime-400"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function QuoteIcon() {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-[#123f2b]">
      <BriefcaseBusiness size={24} />
    </div>
  );
}
