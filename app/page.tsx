"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Network,
  HeartHandshake,
  Share2,
  Repeat2,
  Users,
  HandHeart,
  Wallet,
  Megaphone,
  TrendingUp,
  ShieldCheck,
  Landmark,
  Quote,
  Sparkles,
  User,
  QrCode,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import NetworkOrbit from "@/components/NetworkOrbit";
import {
  company,
  businessDevStrategies,
  growthAreas,
  whyChooseUs,
  clients,
  divisions,
} from "@/data/content";

const strategyIcons = [Network, HandHeart, HeartHandshake, Share2, Repeat2, Users];
const growthIcons = [HeartHandshake, TrendingUp, Megaphone, Users, Wallet, ShieldCheck];

const testimonials = [
  {
    quote:
      "Vidi Meth treated our expansion plan like their own. Every recommendation was specific to us, never off the shelf.",
    role: "Real Estate Partner",
  },
  {
    quote:
      "Responsive, organised, and honest about what would actually move the needle for our institution.",
    role: "Education Client",
  },
  {
    quote:
      "They understood our compliance needs as a government-facing vendor and never cut corners.",
    role: "Government Agency",
  },
];

const stats = [
  { value: "5+", label: "Business networks under one roof" },
  { value: "50+", label: "Organisations served across sectors" },
  { value: "24h", label: "Typical response time on enquiries" },
  { value: "100%", label: "Compliance-first delivery" },
];

/**
 * ==========================================
 * "WHAT WE DO" - PROPORTIONATE RESPONSIVE CARDS
 * ==========================================
 */

function SchoolCard() {
  return (
    <div className="group relative h-[200px] sm:h-[260px] w-full overflow-hidden rounded-2xl border border-line bg-slate-50 flex items-center justify-center transition-all duration-300 hover:border-teal/50 hover:shadow-lg p-4">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.06)_1px,transparent_1px),gradient(90deg,rgba(20,184,166,0.06)_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:20px_20px]" />
      
      {/* Large Scaled ID Card */}
      <div className="relative z-10 w-[125px] h-[155px] sm:w-[145px] sm:h-[180px] bg-white rounded-xl shadow-xl border border-gray-200 flex flex-col items-center p-3 id-float">
        {/* Lanyard Hole */}
        <div className="w-10 sm:w-12 h-2 sm:h-2.5 bg-gray-100 border border-gray-200 rounded-full mb-2 sm:mb-3" />
        
        {/* Photo Area with Laser Scan */}
        <div className="relative w-full h-[75px] sm:h-[95px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg overflow-hidden flex items-center justify-center mb-2 sm:mb-3">
          <User className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" strokeWidth={1.2} />
          <div className="absolute left-0 right-0 h-[3px] bg-teal shadow-[0_0_12px_2px_#14b8a6] photo-laser" />
        </div>

        {/* ID Details Lines */}
        <div className="w-3/4 h-2 bg-gray-200 rounded-full mb-1.5" />
        <div className="w-1/2 h-1.5 bg-gray-100 rounded-full mb-1.5" />
        <div className="w-full h-1.5 bg-gray-100 rounded-full" />
      </div>

      <style jsx>{`
        .id-float {
          animation: float 4s ease-in-out infinite;
        }
        .photo-laser {
          animation: scanDown 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }
        @keyframes scanDown {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { top: 110%; opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function BuildingCard() {
  return (
    <div className="group relative h-[200px] sm:h-[260px] w-full overflow-hidden rounded-2xl border border-line bg-slate-50 flex items-end justify-center transition-all duration-300 hover:border-teal/50 hover:shadow-lg p-4">
      <div className="relative z-10 w-full flex items-end justify-center gap-2 pb-2 sm:pb-4">
        
        {/* Left Building */}
        <div className="w-10 sm:w-12 h-12 sm:h-16 bg-gray-200 rounded-t-sm relative border border-gray-300 shrink-0">
          <div className="absolute top-2 left-1.5 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-white rounded-xs" />
          <div className="absolute top-2 right-1.5 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-white rounded-xs" />
        </div>

        {/* Center Building (Under Construction) */}
        <div className="w-20 sm:w-24 bg-teal/90 rounded-t-sm relative construction-bldg shadow-lg shrink-0">
          {/* Construction Crane */}
          <div className="absolute top-[-30px] sm:top-[-38px] left-[-16px] sm:left-[-20px] w-2 h-36 sm:h-44 bg-gold origin-bottom crane-tower">
            <div className="absolute top-0 left-[-8px] sm:left-[-10px] w-28 sm:w-34 h-2 bg-gold crane-arm flex items-end justify-end">
              <div className="w-px h-12 sm:h-16 bg-gray-400 mr-3 mt-2 hook-drop" />
            </div>
          </div>
          {/* Windows appearing */}
          <div className="grid grid-cols-3 gap-1.5 p-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className={`h-3.5 sm:h-4 bg-white/40 rounded-xs window-pop delay-${i}`} />
            ))}
          </div>
        </div>

        {/* Right Building */}
        <div className="w-12 sm:w-16 h-14 sm:h-20 bg-gray-300 rounded-t-sm relative border border-gray-400 shrink-0">
          <div className="absolute top-3 left-2 w-3.5 sm:w-4 h-3.5 sm:h-4 bg-white rounded-xs" />
        </div>
      </div>

      <style jsx>{`
        .construction-bldg {
          animation: buildUp 5s infinite;
        }
        .crane-tower {
          animation: fadeCrane 5s infinite;
        }
        .crane-arm {
          transform-origin: left center;
          animation: swingArm 5s infinite;
        }
        .hook-drop {
          animation: dropHook 5s infinite;
        }
        .window-pop {
          opacity: 0;
          animation: popWindow 5s infinite;
        }
        .delay-0 { animation-delay: 1s; } .delay-1 { animation-delay: 1.2s; } .delay-2 { animation-delay: 1.4s; }
        .delay-3 { animation-delay: 1.6s; } .delay-4 { animation-delay: 1.8s; } .delay-5 { animation-delay: 2.0s; }
        .delay-6 { animation-delay: 2.2s; } .delay-7 { animation-delay: 2.4s; } .delay-8 { animation-delay: 2.6s; }
        
        @keyframes buildUp {
          0%, 10% { height: 12px; }
          60%, 80% { height: 110px; }
          100% { height: 12px; }
        }
        @media (min-width: 640px) {
          @keyframes buildUp {
            0%, 10% { height: 12px; }
            60%, 80% { height: 145px; }
            100% { height: 12px; }
          }
        }
        @keyframes swingArm {
          0%, 10% { transform: rotate(0deg); }
          30% { transform: rotate(18deg); }
          50% { transform: rotate(-10deg); }
          70%, 100% { transform: rotate(0deg); }
        }
        @keyframes dropHook {
          0%, 30% { height: 12px; }
          40% { height: 28px; }
          50%, 100% { height: 12px; }
        }
        @keyframes popWindow {
          0%, 40% { opacity: 0; transform: scale(0.5); }
          50%, 80% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; }
        }
        @keyframes fadeCrane {
          0%, 75% { opacity: 1; }
          85%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function BankCard() {
  return (
    <div className="group relative h-[200px] sm:h-[260px] w-full overflow-hidden rounded-2xl border border-line bg-slate-50 flex flex-col items-center justify-end transition-all duration-300 hover:border-teal/50 hover:shadow-lg pb-4 sm:pb-8 p-4">
      
      {/* Falling 3D Rupees */}
      <div className="absolute inset-0 flex justify-center overflow-hidden">
        <div className="rupee-coin rupee-1">₹</div>
        <div className="rupee-coin rupee-2">₹</div>
        <div className="rupee-coin rupee-3">₹</div>
      </div>

      {/* Prominent Bank Graphic */}
      <div className="relative z-10 bg-white p-4 sm:p-5 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center bank-base">
        <Landmark className="w-12 h-12 sm:w-16 sm:h-16 text-teal" strokeWidth={1.2} />
        <div className="w-28 sm:w-36 h-2 bg-gray-200 mt-2.5 rounded-full" />
      </div>

      <style jsx>{`
        .bank-base {
          animation: receiveHit 2s infinite;
        }
        .rupee-coin {
          position: absolute;
          top: -30px;
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, #fcd34d, #d4a94c);
          border-radius: 50%;
          border: 2px solid #b4852a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          color: #713f12;
          box-shadow: 0 4px 6px rgba(0,0,0,0.12), inset 0 -2px 4px rgba(0,0,0,0.2);
          opacity: 0;
        }
        @media (min-width: 640px) {
          .rupee-coin {
            width: 44px;
            height: 44px;
            font-size: 22px;
          }
        }
        .rupee-1 { left: 22%; animation: dropCoin 2s ease-in infinite; }
        .rupee-2 { left: 48%; animation: dropCoin 2s ease-in 0.6s infinite; }
        .rupee-3 { left: 74%; animation: dropCoin 2s ease-in 1.2s infinite; }

        @keyframes dropCoin {
          0% { transform: translateY(0) rotateY(0deg); opacity: 0; }
          15% { opacity: 1; }
          70% { transform: translateY(85px) rotateY(360deg); opacity: 1; }
          80% { transform: translateY(100px) rotateY(400deg) scale(0.5); opacity: 0; }
          100% { opacity: 0; }
        }
        @media (min-width: 640px) {
          @keyframes dropCoin {
            0% { transform: translateY(0) rotateY(0deg); opacity: 0; }
            15% { opacity: 1; }
            70% { transform: translateY(115px) rotateY(360deg); opacity: 1; }
            80% { transform: translateY(130px) rotateY(400deg) scale(0.5); opacity: 0; }
            100% { opacity: 0; }
          }
        }
        @keyframes receiveHit {
          0%, 65%, 100% { transform: scale(1); }
          75% { transform: scale(0.96); }
        }
      `}</style>
    </div>
  );
}

function ScannerCard() {
  return (
    <div className="group relative h-[200px] sm:h-[260px] w-full overflow-hidden rounded-2xl border border-line bg-teal/5 flex items-center justify-center transition-all duration-300 hover:border-teal/50 hover:shadow-lg p-4">
      
      {/* AR HUD Corner Brackets */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-4 h-7 sm:h-9 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-teal/50 rounded-tl-lg hud-pulse" />
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-7 sm:h-9 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-teal/50 rounded-tr-lg hud-pulse" />
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-4 h-7 sm:h-9 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-teal/50 rounded-bl-lg hud-pulse" />
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-4 h-7 sm:h-9 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-teal/50 rounded-br-lg hud-pulse" />

      {/* QR Structure */}
      <div className="relative w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] flex items-center justify-center bg-white rounded-xl border border-teal/20 shadow-sm overflow-hidden">
        <QrCode className="w-20 h-20 sm:w-24 sm:h-24 text-gray-800" strokeWidth={0.9} />
        <div className="absolute left-0 right-0 h-[22px] sm:h-[30px] bg-gradient-to-b from-transparent via-teal/20 to-teal/60 border-b-2 border-teal massive-laser shadow-[0_4px_15px_rgba(20,184,166,0.6)]" />
      </div>

      <style jsx>{`
        .hud-pulse {
          animation: pulseHud 2s infinite;
        }
        .massive-laser {
          animation: scanMassive 3s ease-in-out infinite;
        }
        @keyframes pulseHud {
          0%, 100% { border-color: rgba(20, 184, 166, 0.4); transform: scale(1); }
          50% { border-color: rgba(20, 184, 166, 0.9); transform: scale(1.05); }
        }
        @keyframes scanMassive {
          0% { top: -30px; opacity: 0; }
          10% { opacity: 1; }
          90% { top: 100%; opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line paper-texture">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] h-[300px] sm:h-[520px] w-[300px] sm:w-[520px] rounded-full bg-teal/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[250px] sm:h-[420px] w-[250px] sm:w-[420px] rounded-full bg-gold/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          <div>
            <Reveal>
              <p className="eyebrow mb-4 sm:mb-6 inline-flex items-center gap-2 text-xs sm:text-sm">
                <Sparkles size={14} className="text-gold" />
                Vidi Meth Digital Services (OPC) Pvt. Ltd.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.4rem] leading-[1.12] sm:leading-[1.08] text-ink text-balance">
                One company, five networks —{" "}
                <span className="text-teal">built to grow Indian business.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-muted leading-relaxed max-w-xl">
                {company.mission}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-paper shadow-sm transition-all duration-300 hover:bg-teal hover:gap-3 hover:shadow-lg hover:shadow-teal/20"
                >
                  Read More
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-ink transition-all duration-300 hover:border-gold hover:text-teal hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-8 sm:mt-12 flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-2 font-mono text-[0.7rem] sm:text-xs text-text-muted">
                <span>CIN {company.registration.cin}</span>
                <span>GSTIN {company.registration.gstin}</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={16}>
            <div className="w-full flex justify-center">
              <NetworkOrbit />
            </div>
          </Reveal>
        </div>

        {/* PROOF STRIP */}
        <div className="relative border-t border-line bg-white/50 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.05 * i}>
                <div className="text-center sm:text-left">
                  <p className="font-display text-2xl sm:text-3xl text-ink">{s.value}</p>
                  <p className="mt-1 text-xs text-text-muted leading-snug">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS DEVELOPMENT */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Reveal>
          <p className="eyebrow mb-3 sm:mb-4">Business Development</p>
        </Reveal>
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 sm:gap-14 items-start">
          <Reveal delay={0.05}>
            <h2 className="font-display text-2xl sm:text-4xl text-ink leading-tight">
              Goals worth chasing: revenue growth, new markets, and partnerships that last.
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-text-muted leading-relaxed">
              Great business development strategy fulfils your goals. Use these to increase
              revenue, reach new markets, or build the partnerships that carry your business
              forward.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {businessDevStrategies.map((s, i) => {
              const Icon = strategyIcons[i];
              return (
                <Reveal key={s.title} delay={0.05 * i}>
                  <div className="group h-full rounded-2xl border border-line bg-white/60 p-5 sm:p-6 transition-all duration-300 hover:border-gold/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
                    <div className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-teal/10 transition-colors duration-300 group-hover:bg-teal/15">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal" />
                    </div>
                    <h3 className="mt-3 sm:mt-4 font-display text-base sm:text-lg text-ink leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* GROW YOUR BUSINESS */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4 text-gold-soft">We help your business</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-2xl sm:text-4xl leading-tight max-w-2xl">
              Grow up your business — while we take care of the rest.
            </h2>
          </Reveal>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10 rounded-2xl overflow-hidden">
            {growthAreas.map((g, i) => {
              const Icon = growthIcons[i];
              return (
                <Reveal key={g.title} delay={0.04 * i} className="bg-ink">
                  <div className="group p-6 sm:p-8 h-full transition-colors duration-300 hover:bg-paper/[0.04]">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="mt-4 sm:mt-5 font-display text-lg sm:text-xl">{g.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-paper/65 leading-relaxed">{g.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
          <Reveal>
            <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="Team reviewing strategy and growth plans together in a modern office"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4">Why choose us</p>
              <h2 className="font-display text-2xl sm:text-4xl text-ink leading-tight">
                Businesses depend on us for expertise, quality, and service.
              </h2>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-text-muted leading-relaxed">
                We&apos;ve worked with colleges and universities, real estate organisations,
                companies, designers, architects, government agencies, and business owners
                across a range of industries to transform the way they work.
              </p>
            </Reveal>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 sm:gap-y-7">
              {whyChooseUs.map((w, i) => (
                <Reveal key={w.title} delay={0.04 * i}>
                  <div className="border-l-2 border-gold pl-4 sm:pl-5 transition-colors duration-300 hover:border-teal">
                    <h3 className="font-display text-base sm:text-lg text-ink">{w.title}</h3>
                    <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-text-muted leading-relaxed">{w.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 sm:mt-16 rounded-2xl border border-line bg-paper-dim/60 p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-x-10">
            <span className="eyebrow shrink-0">Trusted by</span>
            <div className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2 text-xs sm:text-sm text-text-muted font-medium">
              {clients.map((c) => (
                <span key={c} className="transition-colors duration-300 hover:text-ink">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* DIVISIONS PREVIEW */}
      <section className="border-y border-line bg-paper-dim/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4">Facilitating global business networks</p>
              <h2 className="font-display text-2xl sm:text-4xl text-ink leading-tight max-w-xl">
                We highly value the collaborative relationships with our partners.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <Link
                href="/divisions"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal hover:gap-3 transition-all shrink-0"
              >
                See all divisions
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {divisions.map((d, i) => (
              <Reveal key={d.name} delay={0.05 * i}>
                <div className="group h-full rounded-2xl border border-line bg-white/70 p-5 sm:p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-lg hover:shadow-ink/5">
                  <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                    {d.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-paper-dim px-2.5 py-1 text-[0.6rem] sm:text-[0.65rem] font-mono uppercase tracking-wide text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-base sm:text-lg text-ink">{d.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed flex-1">
                    {d.description}
                  </p>
                  <span className="mt-4 font-mono text-[0.7rem] sm:text-xs text-gold truncate">{d.url}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4">What we do</p>
            <h2 className="font-display text-2xl sm:text-4xl text-ink leading-tight">
              One-stop digital marketing solutions for every business.
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-text-muted leading-relaxed lg:pr-8">
              We provide master planning for you. Our aim is to give one-stop, effective digital
              marketing solutions for all businesses — grounded in real strategy, not guesswork.
            </p>
            <Link
              href="/services"
              className="group mt-6 sm:mt-7 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal hover:gap-3 transition-all"
            >
              Explore our services
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          {/* Cards Grid: 2 columns on mobile for tight presentation */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-6 lg:mt-0">
              <SchoolCard />
              <BuildingCard />
              <BankCard />
              <ScannerCard />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-teal text-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4 text-gold-soft">What our clients say</p>
            <h2 className="font-display text-2xl sm:text-4xl leading-tight max-w-xl">
              Real relationships, built on responsiveness and trust.
            </h2>
          </Reveal>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.role} delay={0.08 * i}>
                <div className="group h-full rounded-2xl bg-paper/10 border border-paper/15 p-5 sm:p-7 transition-all duration-300 hover:bg-paper/[0.14] hover:-translate-y-1">
                  <Quote size={20} className="text-gold-soft/70 mb-3" />
                  <p className="text-xs sm:text-sm text-paper/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-4 sm:mt-5 font-mono text-[0.65rem] sm:text-xs text-gold-soft uppercase tracking-wide">
                    {t.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-teal/10 blur-3xl"
        />
        <Reveal>
          <p className="eyebrow mb-3 sm:mb-4 justify-center flex">Contact us</p>
          <h2 className="font-display text-2xl sm:text-4xl text-ink leading-tight">
            Let&apos;s plan your next stage of growth.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-text-muted max-w-lg mx-auto">
            Write to us at {company.email} or send a message — we typically respond within one
            business day.
          </p>
          <Link
            href="/contact"
            className="group mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-paper transition-all duration-300 hover:bg-teal hover:gap-3 hover:shadow-lg hover:shadow-teal/20"
          >
            Contact Us
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}