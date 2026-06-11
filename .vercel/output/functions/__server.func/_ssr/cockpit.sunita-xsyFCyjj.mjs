import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as CockpitShell, M as MorningBriefing, a as ControlTower, A as AIInsight, b as AgentActivity, c as AttentionList, H as HRCopilot } from "./CockpitSections-BlFOd_-a.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./DemoBadges-Cdf7PGj2.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/class-variance-authority.mjs";
const TEAL = "#0d9488";
function SLAGauge({
  pct = 94.3
}) {
  const tone = pct >= 95 ? "#16a34a" : pct >= 85 ? "#d97706" : "#dc2626";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-sidebar-foreground/70 mb-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SLA today" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", style: {
        color: tone
      }, children: [
        pct,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-sidebar-accent overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: {
      width: `${pct}%`,
      background: tone
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 text-[10.5px] text-sidebar-foreground/50", children: "Target 98% · trending −1.2pp" })
  ] });
}
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CockpitShell, { accent: TEAL, persona: {
    initials: "SR",
    name: "Sunita Rao",
    role: "Claims Processing Lead",
    entity: "Bajaj General Insurance · HAT",
    location: "Pune · Team of 18 · 6 yrs tenure",
    avatarColor: TEAL,
    navLinks: [{
      label: "SLA Monitor"
    }, {
      label: "Case Queue · 847"
    }, {
      label: "Team Roster"
    }, {
      label: "IRDAI Tracker"
    }, {
      label: "Escalations"
    }, {
      label: "My Career Path"
    }],
    widgets: /* @__PURE__ */ jsxRuntimeExports.jsx(SLAGauge, { pct: 94.3 })
  }, personaSlug: "sunita", headerCenter: "Sunita Rao · Claims Lead · BAGIC · Motor & Health · Pune Hub", contextStrip: "BAGIC · Motor & Health Claims · Pune Hub — Monsoon surge period Jul–Sep (+340% motor claim volume expected)", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MorningBriefing, { children: "Morning, Sunita. Today needs fast decisions on three fronts. 23 cashless pre-auth cases will breach the 48-hour IRDAI mandate by 2pm — Prerna is overloaded at 68 cases but Karan has capacity to absorb 19 of them right now. Ravi Kumar is on Day 3 sick leave and his IRDAI cert expires in 22 days — he cannot legally process claims after that date without renewal. And Sunita Pillai's motor claim for Rajesh Pandey is now 52 days old with an IRDAI complaint filed — this one needs your direct call today, not a system action." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ControlTower, { accent: TEAL, kpis: [{
      label: "SLA Compliance",
      value: "94.3%",
      sub: "Target 98% · ↓1.2pp yesterday",
      tone: "warning"
    }, {
      label: "Cases in queue",
      value: "847",
      sub: "Active"
    }, {
      label: "Breach risk today",
      value: "23 cases",
      sub: "By 2pm · IRDAI 48-hr mandate",
      tone: "critical"
    }, {
      label: "Team present",
      value: "15 / 18",
      sub: "2 leave · 1 in training"
    }, {
      label: "IRDAI cert risk",
      value: "2 analysts",
      sub: "Deepa 18d · Ravi 22d",
      tone: "critical"
    }, {
      label: "Monsoon surge",
      value: "10 days away",
      sub: "Capacity gap 39%",
      tone: "warning"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AIInsight, { accent: TEAL, title: "Prerna Joshi is carrying 68 cases — she will cause tomorrow's SLA breaches if not redistributed now", body: `Queue analysis shows Prerna Joshi at 68 active cases — the highest on the team by 24 cases. Of her 68 cases, 14 are in the 36–47 hour age bracket — the breach zone. Prerna's case quality is excellent (98.2% accuracy rate) but her current load is physically unsustainable — she has worked 8 consecutive overtime days.

Karan Mehta has 31 cases and 19 units of absorption capacity today. Suresh Rao has 38 cases and 12 units. Redistributing 19 of Prerna's oldest cases to Karan and 8 to Suresh takes 12 minutes in the system and prevents all 14 breach-risk cases from breaching today. It also prevents Prerna from burning out before the monsoon surge — which starts in 10 days and will require 340% more volume from this team.

Recommended: Redistribute now. Do not wait for Prerna to raise the flag — she won't.`, confidence: "92–96%", sources: ["Case queue system", "Analyst capacity model", "SLA breach prediction engine"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AIInsight, { accent: TEAL, title: "Monsoon surge will overwhelm this team in 10 days — and the empanelment gap is already too late for standard hiring", body: `Jul–Sep motor claim surge historically runs at +340% vs current baseline for BAGIC Pune HAT. Current team at full capacity handles 100% of today's volume. The surge requires 2.4× capacity — meaning 12 additional analysts minimum.

Temp surveyor empanelment: 8 of 22 positions filled with 10 days to surge. Standard empanelment takes 18–21 days minimum. The window for standard hiring has closed.

Two options remain — Option A: Activate BAGIC's pre-approved agency empanelment list (14 surveyors cleared from last year — fastest path, 3-day activation). Option B: Request 6 trained analysts from BAGIC Mumbai on temporary deputation for July — 5-day process. Both combined cover the gap. Neither alone is sufficient.

Recommended: Trigger both in parallel today. Every day of delay shrinks the buffer.`, confidence: "88–93%", sources: ["BAGIC monsoon surge historical data", "Empanelment status tracker", "Capacity planning model"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AIInsight, { accent: TEAL, title: "Your team's overtime pattern is a retention risk that will peak exactly when you need them most", body: `4 analysts — Prerna, Suresh, Vijay, and Rekha — have worked 8+ consecutive overtime days. Combined, they carry 196 active cases and process 38% of daily volume.

BAGIC HR attrition data shows that claims analysts who work 8+ consecutive overtime days have a 3.1× higher resignation probability in the following 30 days vs baseline. The monsoon surge starts in 10 days. If any 2 of these 4 analysts resign during the surge, SLA compliance will fall below 85% — triggering IRDAI regulatory scrutiny at the worst possible time.

Recommended: Mandatory 3-day rotation leave for all 4 before the surge starts — redistribute cases temporarily to rest of team. This costs 3 days of reduced capacity now to preserve full capacity through 90 days of surge. Also: raise a formal overtime recognition note to HRBP Neha — these 4 people are carrying the team and need to know you see it.`, confidence: "81–87%", sources: ["Overtime log", "BAGIC claims attrition cohort data", "Analyst resignation probability model"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AgentActivity, { runs: [{
      agent: "SLA Prediction Agent",
      message: "23 cashless cases: breach by 2pm confirmed · redistribution brief prepared for Sunita.",
      time: "01:18"
    }, {
      agent: "IRDAI Cert Monitor",
      message: "Deepa (18d) + Ravi (22d) both unread system alerts · WhatsApp escalation recommended.",
      time: "02:44"
    }, {
      agent: "Monsoon Surge Agent",
      message: "Capacity gap: 39% · 2 fast paths identified (agency + Mumbai deputation).",
      time: "03:30"
    }, {
      agent: "Escalation Monitor",
      message: "Rajesh Pandey: Day 52 · IRDAI complaint response due EOD today.",
      time: "04:12"
    }, {
      agent: "Overtime Risk Agent",
      message: "4 analysts at 8+ consecutive OT days · 3.1× resignation probability flagged.",
      time: "04:48"
    }, {
      agent: "Capacity Match Agent",
      message: "Karan: 19 absorption units · Suresh: 12 units · covers all 23 at-risk cases.",
      time: "05:30"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AttentionList, { accent: TEAL, items: [{
      priority: "critical",
      title: "Redistribute Prerna's 23 breach-risk cases to Karan + Suresh",
      detail: "Now · prevents ₹1.15L IRDAI penalty today",
      action: "Redistribute"
    }, {
      priority: "critical",
      title: "Call Rajesh Pandey personally before filing IRDAI response",
      detail: "Day 52 motor OD · IRDAI complaint · response due EOD · 15 minutes",
      action: "Call"
    }, {
      priority: "critical",
      title: "WhatsApp Deepa + Ravi about IRDAI cert expiry",
      detail: "Deepa expires Jul 4 (18d) · Ravi Jul 8 (22d) · system alerts unread on leave",
      action: "WhatsApp"
    }, {
      priority: "critical",
      title: "Email BAGIC Ops + HR: activate 14 pre-cleared surveyors AND request 6 Mumbai deputations",
      detail: "Both fast paths · combined covers 39% monsoon gap · send today",
      action: "Email"
    }, {
      priority: "warning",
      title: "Mandatory 3-day rotation leave: Prerna · Suresh · Vijay · Rekha",
      detail: "Before monsoon surge · reduces 3.1× resignation risk",
      action: "Schedule"
    }, {
      priority: "warning",
      title: "Sunanda Iyer — cashless denied twice · hospitalised",
      detail: "Clinical override option ready · medical team on call",
      action: "Override"
    }, {
      priority: "healthy",
      title: "Last week SLA · 98.2% (best in 6 months)",
      detail: "Anjali Rao 100% all week · appreciation draft ready",
      action: "Send"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HRCopilot, { accent: TEAL, personaName: "Sunita", prompts: [{
      q: "Show me Prerna's full case load",
      a: "Prerna Joshi · 68 open cases · 2σ above team mean (44):\n\n• Cashless pre-auth: 41 (avg ageing 22h · 14 in the 36–47h breach zone)\n• Reimbursement: 18 (avg ageing 31h)\n• Motor: 6\n• Senior escalations: 3\n\nHospital network breakdown: Ruby Hall (12), Jehangir (9), Aditya Birla (8), Sahyadri (7), DY Patil (5), others (27).\n\nShe has the highest specialism rating for complex cashless, which is why these route to her by default. Karan can absorb 19 units today and Suresh 12 — moving 19 to Karan + 8 to Suresh clears the 14 breach-risk cases in under 12 minutes."
    }, {
      q: "What's my team's overtime trend this month?",
      a: "Team-wide OT this month: 412 hours (vs 280 LM, +47%).\n\nConcentration is severe: 4 analysts (Prerna · Suresh · Vijay · Rekha) on 8 consecutive OT days — combined 168 hours. Rest of team avg 16 hours each.\n\nDriver: monsoon spike + Meera/Kavita on leave + Manish in training till 2pm. At this pace you'll trigger the 10-day HRBP review on Sunday. Recommend mandatory 3-day rotation leave for the four before the surge starts in 10 days."
    }, {
      q: "How long until I'm eligible for Deputy Manager?",
      a: "71% readiness (+3pp this month) · 6–9 months out if you secure the Q3 Motor OD rotation.\n\nApplications open July 1 and historically close in 5 days. Last year: 4 applied for 1 slot. With the rotation, readiness jumps to 88% — timeline 3–4 months. Without it: 12–15 months.\n\nNeha (HRBP) hasn't been told you want this — tell her this week. That single conversation compresses 12 months into 4."
    }, {
      q: "Draft a team appreciation message for last week's SLA",
      a: "Draft for your team channel:\n\n'Team — 98.2% SLA last week. Best week we've had in 6 months. That's against a monsoon spike, two of us on leave, and a trainee onboarding. Anjali, you closed the week at 100% — incredible. Prerna and Karan, your specialism saved us multiple times on the cashless surges. To everyone — thank you for the absolute grit. Coffee on me Tuesday 4pm — Sunita ☕'\n\nWant me to soften the tone, shorten it, or send it on your behalf at 6pm today?"
    }] })
  ] });
}
export {
  Page as component
};
