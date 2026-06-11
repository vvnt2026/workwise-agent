import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as bajajLogo, D as DemoBadges, I as IllustrativeBanner } from "./DemoBadges-Cdf7PGj2.mjs";
import { U as Users, B as Building2, S as Sparkles, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const personas = [{
  initials: "AS",
  color: "#002554",
  href: "/cockpit/anupam",
  name: "Anupam Sirbhaiya",
  role: "Group CHRO",
  entity: "Bajaj Finserv Limited · Pune",
  scope: "Group · 1,04,668 employees · 7 entities",
  agents: 10
}, {
  initials: "RK",
  color: "#002554",
  href: "/cockpit/rohit",
  name: "Rohit Kapoor",
  role: "HRBP · Field Sales",
  entity: "Bajaj Finance · West India",
  scope: "~32,000 field employees",
  agents: 7
}, {
  initials: "PD",
  color: "#0d9488",
  href: "/cockpit/priya",
  name: "Priya Deshmukh",
  role: "HR Head",
  entity: "Bajaj Life Insurance · Pune",
  scope: "28K direct + 1,64,861 agents",
  agents: 8
}, {
  initials: "AM",
  color: "#002554",
  href: "/cockpit/aarav",
  name: "Aarav Mehta",
  role: "Sales Officer · New Joiner",
  entity: "Bajaj Finance · Consumer Lending · Mumbai",
  scope: "Day 23 of 90 · probation",
  agents: 5
}, {
  initials: "SR",
  color: "#0d9488",
  href: "/cockpit/sunita",
  name: "Sunita Rao",
  role: "Claims Processing Lead",
  entity: "Bajaj General Insurance · HAT · Pune",
  scope: "Team of 18 · SLA-driven",
  agents: 5
}];
const stats = [{
  icon: Users,
  label: "Employees",
  value: "1,04,668"
}, {
  icon: Building2,
  label: "Group entities",
  value: "7"
}, {
  icon: Sparkles,
  label: "Agents live",
  value: "35+"
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "bg-white border-b border-border sticky top-0 z-30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1280px] mx-auto px-6 h-16 flex items-center gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bajajLogo.url, alt: "Bajaj", className: "h-9 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-6 text-[13px] text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-[#1a56db] cursor-pointer font-medium", children: "Workforce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-[#1a56db] cursor-pointer", children: "Personas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-[#1a56db] cursor-pointer", children: "Agents" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-[#1a56db] cursor-pointer", children: "Insights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-[#1a56db] cursor-pointer", children: "Governance" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DemoBadges, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IllustrativeBanner, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-br from-[#002554] via-[#0a3d76] to-[#0d9488] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1280px] mx-auto px-6 py-16 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium tracking-wider uppercase mb-5", children: "Bajaj Finserv Group · Internal Pitch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl", children: "The Agentic Workforce Platform for Bajaj Finserv" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[15px] md:text-[17px] text-white/80 max-w-2xl leading-relaxed", children: "Built for 1,04,668 people across 7 entities — Bajaj Finance, Bajaj Life Insurance, Bajaj General Insurance, Bajaj Finserv AMC, Bajaj Alts, Bajaj Finserv Health, and Bajaj Markets. Five role-based cockpits powered by 35+ workforce agents." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-3 gap-6 max-w-2xl", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-white/20 pl-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-4 h-4 text-white/70 mb-1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl md:text-3xl font-semibold tabular-nums", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11.5px] text-white/70 uppercase tracking-wider mt-0.5", children: s.label })
      ] }, s.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { id: "personas", className: "max-w-[1280px] mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-[#1a56db] font-semibold mb-2", children: "Five cockpit personas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-semibold tracking-tight", children: "One platform · five points of view" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[14.5px] text-muted-foreground max-w-2xl", children: "From the Group CHRO's boardroom view down to a Day-23 Sales Officer's pocket — every cockpit shares the same structure but speaks the role's language." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: personas.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: p.href, className: "group bg-white border border-border rounded-lg p-5 hover:border-[#1a56db]/50 hover:shadow-md transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0", style: {
            background: p.color
          }, children: p.initials }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[14.5px]", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12.5px] text-muted-foreground", children: p.role })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-foreground", children: p.entity }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11.5px] text-muted-foreground", children: p.scope })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", children: [
            p.agents,
            " agents active"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12.5px] font-semibold text-[#1a56db] flex items-center gap-1 group-hover:gap-2 transition-all", children: [
            "Open cockpit ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] })
        ] })
      ] }, p.href)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-[#002554] text-white/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1280px] mx-auto px-6 py-10 text-[12px] flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bajajLogo.url, alt: "Bajaj", className: "h-7 w-auto brightness-0 invert" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Bajaj Finserv Limited · Internal showcase · Not a customer-facing product" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Security" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Disclaimer" })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
