import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { X } from "../_libs/lucide-react.mjs";
const url = "/__l5e/assets-v1/4b89be43-a6ee-41e0-89f3-3c24f654eff1/bajaj-logo.svg";
const bajajLogo = {
  url
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
function DemoBadges({ compact = false }) {
  const [openAbout, setOpenAbout] = reactExports.useState(false);
  const [openInteg, setOpenInteg] = reactExports.useState(false);
  const size = compact ? "text-[11px] px-2.5 py-1" : "text-[12px] px-3 py-1.5";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setOpenAbout(true),
        className: `${size} rounded-full bg-amber-400 text-[#1a1a1a] font-semibold hover:bg-amber-300 transition-colors`,
        children: "⚠ Illustrative Demo"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setOpenInteg(true),
        className: `${size} rounded-full bg-[#0f172a] text-[#22c55e] border border-[#22c55e] font-semibold hover:bg-[#1e293b] transition-colors`,
        children: "🔌 How It Connects"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: openAbout, onOpenChange: setOpenAbout, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl bg-[#0f172a] text-slate-100 border-slate-700 max-h-[85vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-white text-xl", children: "About This Demo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-slate-300", children: "This prototype was built to show what an Agentic Workforce Platform looks like when it knows your business — before we build the real thing together." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-[13.5px] leading-relaxed text-slate-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#22c55e] font-semibold mb-1", children: "✅ What's Real" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bajaj Finserv entity structure (BFL, BAGIC, BALIC, BAM, Bajaj Markets, Bajaj Housing Finance, Bajaj Finserv Health), workforce scale (~1,04,668 employees), business unit dynamics, IRDA compliance requirements, DST→RM progression structure, post-Allianz integration context, seasonal claim surge patterns, XLRI/TMTC learning culture." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#22c55e] font-semibold mb-1", children: "📊 What's Modelled" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "All numbers, scores, risk flags, attrition figures, cost estimates, SLA breach counts, AI inferences, timelines, agent activity logs. These are illustrative — derived from industry benchmarks and public data, not live Bajaj Finserv systems." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 italic", children: "This demo was built in days. The 2-week engagement replaces every assumption with your reality." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpenAbout(false), className: "px-4 py-1.5 rounded-md bg-[#22c55e] text-[#0f172a] font-semibold text-[13px]", children: "Got it" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: openInteg, onOpenChange: setOpenInteg, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl bg-[#0f172a] text-slate-100 border-slate-700 max-h-[85vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-white text-xl", children: "Integration Architecture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-slate-300", children: "How agents connect to your existing enterprise systems" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-[13px] leading-relaxed text-slate-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Core HR Systems", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Workday / SAP SuccessFactors / Oracle Fusion HCM — Employee master, org structure, performance, compensation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Salesforce — Field sales activity, DST login data, target tracking, territory data" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Group LMS — Learning completion, certification status, skill assessments" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Compliance & Regulatory", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "IRDA Agent Portal — Licence status, renewal calendar, exam completion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "IRDAI Turnaround Dashboards — Claims SLA tracking, breach flags" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "PF/ESIC Portals — Statutory compliance monitoring" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Communication & Collaboration", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Microsoft Teams / Slack — Pulse signals, manager inputs, nudge delivery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Email / SMS Gateway — Employee-facing notifications and alerts" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Data & Security", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Private tenant deployment — your data never leaves your environment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "PII masking at source — sensitive data anonymised before agent processing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Role-based access control — each persona sees only their authorised data" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "DPDP Act compliant — India data protection framework adherent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpenInteg(false), className: "px-4 py-1.5 rounded-md bg-[#22c55e] text-[#0f172a] font-semibold text-[13px]", children: "Close" }) })
      ] })
    ] }) })
  ] });
}
function Section({ title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#22c55e] font-semibold uppercase tracking-wider text-[11px] mb-1.5", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-inside space-y-1 marker:text-slate-500", children })
  ] });
}
function IllustrativeBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#0f172a] text-amber-300/90 text-[11.5px] text-center py-1.5 border-b border-amber-500/30", children: "Illustrative Demo · Modelled on Bajaj Finserv's public profile · Not connected to live systems" });
}
export {
  DemoBadges as D,
  IllustrativeBanner as I,
  bajajLogo as b,
  cn as c
};
