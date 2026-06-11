import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Users, Sparkles } from "lucide-react";
import bajajLogo from "@/assets/bajaj-logo.svg.asset.json";
import { DemoBadges, IllustrativeBanner } from "@/components/cockpit/DemoBadges";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bajaj Finserv Group · Agentic Workforce Platform" },
      { name: "description", content: "Built for Bajaj Finserv's 1,04,668 people across 7 entities." },
    ],
  }),
  component: Home,
});

const personas = [
  {
    initials: "AS", color: "#002554", href: "/cockpit/anupam",
    name: "Anupam Sirbhaiya", role: "Group CHRO",
    entity: "Bajaj Finserv Limited · Pune", scope: "Group · 1,04,668 employees · 7 entities",
    agents: 10,
  },
  {
    initials: "RK", color: "#002554", href: "/cockpit/rohit",
    name: "Rohit Kapoor", role: "HRBP · Field Sales",
    entity: "Bajaj Finance · West India", scope: "~32,000 field employees",
    agents: 7,
  },
  {
    initials: "PD", color: "#0d9488", href: "/cockpit/priya",
    name: "Priya Deshmukh", role: "HR Head",
    entity: "Bajaj Life Insurance · Pune", scope: "28K direct + 1,64,861 agents",
    agents: 8,
  },
  {
    initials: "AM", color: "#002554", href: "/cockpit/aarav",
    name: "Aarav Mehta", role: "Sales Officer · New Joiner",
    entity: "Bajaj Finance · Consumer Lending · Mumbai", scope: "Day 23 of 90 · probation",
    agents: 5,
  },
  {
    initials: "SR", color: "#0d9488", href: "/cockpit/sunita",
    name: "Sunita Rao", role: "Claims Processing Lead",
    entity: "Bajaj General Insurance · HAT · Pune", scope: "Team of 18 · SLA-driven",
    agents: 5,
  },
];

const stats = [
  { icon: Users, label: "Employees", value: "1,04,668" },
  { icon: Building2, label: "Group entities", value: "7" },
  { icon: Sparkles, label: "Agents live", value: "35+" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border sticky top-0 z-30">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={bajajLogo.url} alt="Bajaj" className="h-9 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-[13px] text-foreground/80">
            <span className="hover:text-[#1a56db] cursor-pointer font-medium">Workforce</span>
            <span className="hover:text-[#1a56db] cursor-pointer">Personas</span>
            <span className="hover:text-[#1a56db] cursor-pointer">Agents</span>
            <span className="hover:text-[#1a56db] cursor-pointer">Insights</span>
            <span className="hover:text-[#1a56db] cursor-pointer">Governance</span>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <DemoBadges />
          </div>
        </div>
        <IllustrativeBanner />
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#002554] via-[#0a3d76] to-[#0d9488] text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium tracking-wider uppercase mb-5">
            Bajaj Finserv Group · Internal Pitch
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            The Agentic Workforce Platform for Bajaj Finserv
          </h1>
          <p className="mt-5 text-[15px] md:text-[17px] text-white/80 max-w-2xl leading-relaxed">
            Built for 1,04,668 people across 7 entities — Bajaj Finance, Bajaj Life Insurance, Bajaj General
            Insurance, Bajaj Finserv AMC, Bajaj Alts, Bajaj Finserv Health, and Bajaj Markets. Five role-based
            cockpits powered by 35+ workforce agents.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-white/20 pl-4">
                <s.icon className="w-4 h-4 text-white/70 mb-1.5" />
                <div className="text-2xl md:text-3xl font-semibold tabular-nums">{s.value}</div>
                <div className="text-[11.5px] text-white/70 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main id="personas" className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="text-[11px] uppercase tracking-wider text-[#1a56db] font-semibold mb-2">Five cockpit personas</div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">One platform · five points of view</h2>
          <p className="mt-3 text-[14.5px] text-muted-foreground max-w-2xl">
            From the Group CHRO's boardroom view down to a Day-23 Sales Officer's pocket — every cockpit shares the
            same structure but speaks the role's language.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((p) => (
            <Link
              key={p.href}
              to={p.href}
              className="group bg-white border border-border rounded-lg p-5 hover:border-[#1a56db]/50 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
                  style={{ background: p.color }}
                >
                  {p.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[14.5px]">{p.name}</div>
                  <div className="text-[12.5px] text-muted-foreground">{p.role}</div>
                </div>
              </div>
              <div className="mt-4 space-y-1.5">
                <div className="text-[12px] text-foreground">{p.entity}</div>
                <div className="text-[11.5px] text-muted-foreground">{p.scope}</div>
              </div>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">{p.agents} agents active</span>
                <span className="text-[12.5px] font-semibold text-[#1a56db] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Open cockpit <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>



      <footer className="bg-[#002554] text-white/80">
        <div className="max-w-[1280px] mx-auto px-6 py-10 text-[12px] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={bajajLogo.url} alt="Bajaj" className="h-7 w-auto brightness-0 invert" />
            <span>© 2026 Bajaj Finserv Limited · Internal showcase · Not a customer-facing product</span>
          </div>
          <div className="flex gap-5">
            <span>Privacy</span>
            <span>Security</span>
            <span>Disclaimer</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
