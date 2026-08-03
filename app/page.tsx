import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  businessDevStrategies,
  clients,
  company,
  divisions,
  growthAreas,
  quickLinks,
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

function SectionKicker({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-4 inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.14em] ${
        light ? "text-white" : "text-[#0076c9]"
      }`}
    >
      <span className="inline-flex h-3 w-3 rounded-full bg-[#00a651]" />
      {children}
    </p>
  );
}

function MarqueeStrip() {
  return (
    <div className="overflow-hidden bg-[#0076c9] py-4 text-white">
      <div className="flex min-w-max animate-[marquee_28s_linear_infinite] gap-10 whitespace-nowrap font-display text-xl">
        {[...serviceStrip, ...serviceStrip, ...serviceStrip].map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-10">
            {item}
            <Sparkles size={20} className="text-[#00a651]" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#eef8ff] text-[#063f73]">
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
                <SectionKicker>Business development</SectionKicker>
                <h1 className="font-display text-4xl leading-[1.04] text-[#063f73] sm:text-6xl lg:text-[4.6rem]">
                  Empowering your success with digital expertise.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
                  Goals can include revenue growth, expansion to new markets, strategic
                  partnerships, and more. We help businesses build practical growth strategies for
                  stronger revenue, wider reach, and lasting partnerships.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0076c9] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#00a651]"
                  >
                    Explore More <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#0076c9]/20 px-6 py-3 text-sm font-semibold text-[#0076c9] transition hover:border-[#00a651] hover:text-[#00a651]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative min-h-[430px] lg:min-h-[540px]">
                <div className="absolute right-0 top-4 h-[82%] w-[78%] overflow-hidden rounded-[2rem] bg-[#0076c9] shadow-2xl shadow-[#0076c9]/20">
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
                <div className="absolute left-0 top-20 h-56 w-56 overflow-hidden rounded-[1.5rem] border-8 border-[#eef8ff] shadow-xl sm:h-72 sm:w-72">
                  <Image
                    src={homeImages.heroAccent}
                    alt="Digital marketing collaboration"
                    fill
                    unoptimized
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-8 left-12 rounded-full bg-[#00a651] p-5 shadow-xl shadow-[#00a651]/30">
                  <BadgeCheck size={42} className="text-white" />
                </div>
                <div className="absolute bottom-0 right-8 rounded-2xl bg-white px-6 py-5 shadow-xl">
                  <p className="font-display text-3xl text-[#0076c9]">5+</p>
                  <p className="text-sm font-semibold text-text-muted">Business divisions</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <SectionKicker>Business Development</SectionKicker>
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">
              Goals worth chasing: revenue growth, new markets, and partnerships that last.
            </h2>
            <p className="mt-5 text-base leading-7 text-text-muted">
              Great business development strategy fulfils your goals. Use these to increase
              revenue, reach new markets, or build partnerships that carry your business forward.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {businessDevStrategies.map((strategy, index) => (
            <Reveal key={strategy.title} delay={index * 0.04}>
              <div className="h-full rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={homeImages.projects[index % homeImages.projects.length]}
                    alt={strategy.title}
                    fill
                    unoptimized
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-2xl">{strategy.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-muted">{strategy.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#0076c9] py-16 text-white lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionKicker light>We help your business</SectionKicker>
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">
              Grow up your business while we take care of the rest.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {growthAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.04}>
                <div className="rounded-2xl border border-white/15 bg-white/8 p-6 text-center">
                  <CheckCircle2 className="mx-auto text-[#00a651]" size={34} />
                  <h3 className="mt-4 font-display text-2xl">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{area.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] shadow-xl">
              <Image
                src="/whychooseus.png"
                alt="Why choose Vidi Meth"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <SectionKicker>Why choose us</SectionKicker>
              <h2 className="font-display text-3xl leading-tight sm:text-5xl">
                Businesses depend on us for expertise, quality, and service.
              </h2>
              <p className="mt-5 text-base leading-7 text-text-muted">
                We&apos;ve worked with colleges and universities, real estate organisations,
                companies, designers, architects, government agencies, and business owners across a
                range of industries to transform the way they work.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="border-l-2 border-[#0076c9] pl-4">
                    <h3 className="font-display text-lg text-[#0076c9]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-text-muted">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <Reveal>
              <div>
                <SectionKicker>What we do</SectionKicker>
                <h2 className="font-display text-3xl leading-tight sm:text-5xl">
                  One-stop digital marketing solutions for every business.
                </h2>
                <p className="mt-5 text-base leading-7 text-text-muted">{company.mission}</p>
                <p className="mt-5 text-base leading-7 text-text-muted">
                  Our digital marketing expertise includes:
                </p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-text-muted">
                  {quickLinks.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center rounded-full bg-[#0076c9] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#00a651]"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] shadow-xl">
                <Image
                  src={homeImages.aboutTop}
                  alt="Students reviewing digital plans"
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#eef8ff] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <SectionKicker>Facilitating global business networks</SectionKicker>
              <h2 className="font-display text-3xl leading-tight sm:text-5xl">
                Five divisions. One shared standard of trust.
              </h2>
              <p className="mt-5 text-base leading-7 text-text-muted">
                We highly value and prioritise the collaborative relationships with our partners.
                Together, we strive for mutual success and innovative solutions for shared growth.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {divisions.map((division, index) => (
              <Reveal key={division.name} delay={index * 0.04}>
                <a
                  href={`https://${division.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={homeImages.projects[index % homeImages.projects.length]}
                      alt={division.name}
                      fill
                      unoptimized
                      sizes="(min-width: 768px) 32vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-3xl">{division.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-text-muted">{division.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-[#0076c9]">
                      {division.url} <ArrowUpRight size={15} />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionKicker>What our client says</SectionKicker>
          <h2 className="font-display text-3xl leading-tight sm:text-5xl">
            Trusted by businesses across sectors.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {clients.slice(0, 3).map((client, index) => (
            <Reveal key={client} delay={index * 0.05}>
              <div className="h-full rounded-2xl bg-[#f3f7fb] p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-300 text-white">
                  <BriefcaseBusiness size={34} />
                </div>
                <h3 className="mt-5 font-display text-xl text-[#0076c9]">{client}</h3>
                <p className="mt-4 text-sm leading-6 text-text-muted">
                  Businesses trust Vidi Meth for practical support, responsive communication, and
                  strategies built around real growth.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#0076c9] py-16 text-white lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <Reveal>
            <div>
              <SectionKicker light>Contact us</SectionKicker>
              <h2 className="font-display text-3xl leading-tight sm:text-5xl">
                Get your free quote today.
              </h2>
              <p className="mt-5 text-white/70">
                Write to us at {company.email}. We read every message and respond quickly.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <a href={`mailto:${company.email}`} className="flex items-center gap-3">
                  <Mail size={18} className="text-[#00a651]" /> {company.email}
                </a>
                <span className="flex items-center gap-3">
                  <Phone size={18} className="text-[#00a651]" /> {company.hours}
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl">
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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <SectionKicker>Let us connect</SectionKicker>
              <h2 className="font-display text-3xl sm:text-5xl">Let us connect there.</h2>
              <p className="mt-4 max-w-xl text-text-muted">
                Explore our connected platforms and business network.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
              {quickLinks.slice(0, 3).map((link) => (
                <a
                  key={link}
                  href={`https://${link}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#0076c9]/15 px-5 py-3 text-sm font-semibold text-[#0076c9] transition hover:border-[#00a651] hover:bg-[#00a651] hover:text-white"
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
