import type { NavGroup } from "./CockpitShell";
import type { CopilotPrompt, AgentRun } from "./types";
import { anupamNav, rohitNav, priyaNav } from "./navData";

export type PersonaMeta = {
  slug: string;
  initials: string;
  name: string;
  role: string;
  entity: string;
  location?: string;
  accent: string;
  avatarColor?: string;
  navGroups: NavGroup[];
  prompts: CopilotPrompt[];
  agents: AgentRun[];
};

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const BLUE = "#1a56db";
const TEAL = "#0d9488";
const GREEN = "#16a34a";

const aaravNav: NavGroup[] = [
  {
    heading: "My Cockpit",
    items: [
      {
        label: "My 90-day Journey", icon: "🛣️",
        detail: {
          headline: "Your 90-Day Roadmap, Aarav · Day 23 of 90 · on track",
          narrative: "You're ahead of 64% of your batch at Day 23. Top 10% are at 12 disbursals; you're at 8. The gap is closeable in the next 5 working days.",
          table: {
            cols: ["Phase", "Milestone", "Status"],
            rows: [
              ["Phase 1 · Days 1–30", "Day 1: System access & ID card", "✅ Done"],
              ["", "Day 3: Branch orientation with Vikram Singh", "✅ Done"],
              ["", "Day 7: Buddy assigned · Rajan Nair", "✅ Done"],
              ["", "Day 14: First product certification", "✅ Done"],
              ["", "Day 18: First 5 disbursals", "🏆 Done"],
              ["", "Day 23 (TODAY): 8 disbursals · target 14 by Day 30", "🟡 In progress"],
              ["Phase 2 · Days 31–60", "Day 35: IRDA product cert complete", "⬜ Upcoming"],
              ["", "Day 45: 25 disbursals milestone", "⬜ Upcoming"],
              ["", "Day 60: Mid-probation review", "⬜ Upcoming"],
              ["Phase 3 · Days 61–90", "Day 75: First cross-product sell", "⬜ Upcoming"],
              ["", "Day 90: Final probation review · target 35 disbursals", "⬜ Upcoming"],
            ],
          },
          actions: ["Book buddy 1:1", "Open learning plan"],
        },
      },
      {
        label: "My Learning", icon: "📚",
        detail: {
          headline: "Your Learning Path · 6 of 9 modules complete",
          narrative: "SOs who complete IRDA cert by Day 25 earn ₹2,400 more in average monthly incentive — it unlocks 3 additional products you can sell.",
          table: {
            cols: ["Module", "Status", "Notes"],
            rows: [
              ["BFL Welcome & Culture", "✅ Done", "Day 1"],
              ["Consumer Lending Basics", "✅ Done", "Day 3"],
              ["EMI Product Suite", "✅ Done", "Day 5"],
              ["Sales Process & CRM", "✅ Done", "Day 8"],
              ["KYC & Compliance Basics", "✅ Done", "Day 12"],
              ["Personal Loan Product", "✅ Done", "Day 16"],
              ["IRDA Product Certification", "🟡 2 of 5", "Due Friday · 60 mins remaining"],
              ["Home Loan Basics", "⬜", "Day 30"],
              ["Cross-Sell Fundamentals", "⬜", "Day 45"],
            ],
          },
          actions: ["Continue IRDA cert now"],
        },
      },
      {
        label: "My Incentives", icon: "💸",
        detail: {
          headline: "Your Incentive Calculator · ₹4,200 earned this month",
          narrative: "Vijay Sales Goregaon has 3 walk-in applications waiting today — visit them and you're at 11 disbursals. That's ₹6,600 this month.",
          table: {
            cols: ["Slab", "Per disbursal", "Hit by month-end"],
            rows: [
              ["1–5 disbursals", "₹500", "—"],
              ["6–14 disbursals", "₹600", "₹8,400 at 14"],
              ["15–24 disbursals", "₹720", "₹11,400 at 20"],
              ["25–34 disbursals", "₹900", "₹16,200 at 25"],
              ["35+ disbursals", "₹1,100", "₹27,500 at 35"],
            ],
          },
        },
      },
      {
        label: "My Documents", icon: "📂",
        detail: {
          headline: "Document Checklist · 2 pending (2 min each)",
          narrative: "Getting these done today means your first salary hits without any delay. Takes 4 minutes total.",
          table: {
            cols: ["Document", "Status"],
            rows: [
              ["Offer letter", "✅ uploaded Day 1"],
              ["Aadhar & PAN", "✅ verified"],
              ["Educational certificates", "✅"],
              ["Bank account", "✅ linked"],
              ["Form 16 (previous employer)", "✅"],
              ["PF nomination form", "🟡 pre-filled · upload photo ID"],
              ["Photo ID for branch records", "🟡 passport photo needed"],
            ],
          },
          actions: ["Upload PF nomination · 2 mins", "Upload photo ID"],
        },
      },
      {
        label: "My Buddy", icon: "🤝",
        detail: {
          headline: "Your Buddy · Rajan Nair · 3.2 yrs at BFL",
          narrative: "Rajan is free today 4:00–4:30 PM. He hit 14 disbursals in his first month. Ask him how he handles the Goregaon territory — he knows the Vijay Sales guys.",
          table: {
            cols: ["Profile", "Detail"],
            rows: [
              ["Role", "Senior Sales Officer"],
              ["Branch", "Andheri West"],
              ["Tenure", "3.2 years at BFL"],
              ["Last month disbursals", "28"],
              ["Last connected", "5 days ago"],
            ],
          },
          bullets: [
            "Ask: Which branches respond fastest to walk-ins?",
            "Ask: How do you handle IRDA cert while keeping disbursal pace up?",
            "Ask: What did your Day 30 review look like?",
          ],
          actions: ["WhatsApp Rajan", "Schedule a chai break"],
        },
      },
      {
        label: "Raise a Request", icon: "🎫",
        detail: {
          headline: "Raise a Request · all categories",
          narrative: "Pick a category and we'll route to the right team. Average resolution shown per category.",
          table: {
            cols: ["Category", "Examples", "Avg resolution"],
            rows: [
              ["🖥️ IT / System Issue", "Login · App · CRM access", "4 hours"],
              ["💰 Incentive Query", "Wrong calc · Missing payout · Slab", "2 business days"],
              ["📋 Document Help", "PF nomination · Certificate · ID", "1 business day"],
              ["🏥 Leave / Medical", "Emergency leave · Reimbursement", "Same day"],
              ["🗣️ Talk to HR", "Career · Manager · Team", "24 hours (Rohit Kapoor)"],
            ],
          },
        },
      },
    ],
  },
];

const sunitaNav: NavGroup[] = [
  {
    heading: "Operations",
    items: [
      {
        label: "SLA Monitor", icon: "⏱️",
        detail: {
          headline: "SLA Performance · Live · 94.3% overall (target 98%)",
          narrative: "Trend -1.2pp from yesterday. Cashless pre-auth is the breach hotspot. If 23 cashless breaches confirmed, IRDAI penalty exposure ~₹1.15L.",
          table: {
            cols: ["Claim type", "Compliance", "Status"],
            rows: [
              ["Cashless pre-auth (48 hr)", "91.2%", "🔴 14 breaches today · 23 at-risk by 2pm"],
              ["Health reimbursement (30 days)", "97.8%", "🟢 on track"],
              ["Motor OD (7 days)", "94.1%", "🟡 3 approaching deadline"],
              ["Motor TP (IRDAI mandate)", "98.4%", "🟢 on track"],
            ],
          },
          actions: ["Redistribute now to avoid penalty", "Page floor lead"],
        },
      },
      {
        label: "Case Queue · 847", icon: "📥",
        detail: {
          headline: "Live Case Queue · 847 Active",
          narrative: "23 cases above 47-hour age — breach risk by 2pm. Auto-redistribute available based on capacity.",
          table: {
            cols: ["Analyst", "Cases", "Capacity", "Status"],
            rows: [
              ["Prerna Joshi", "68", "—", "🔴 Overloaded"],
              ["Karan Mehta", "31", "+19 space", "🟢 Available"],
              ["Aisha Khan", "44", "+6 space", "🟡 Near limit"],
              ["Suresh Rao", "38", "+12 space", "🟢 Available"],
              ["Deepa Nair", "—", "Leave", "⬜"],
              ["Vijay More", "47", "+3 space", "🟡 Near limit"],
            ],
          },
          bullets: [
            "Queue by age: <24h: 312 · 24–36h: 284 · 36–47h: 228 · >47h: 23 (BREACH RISK).",
          ],
          actions: ["Auto-redistribute 23 at-risk", "Move 14 from Prerna to Karan"],
        },
      },
      {
        label: "Team Roster", icon: "👥",
        detail: {
          headline: "Team Roster · 15 present · 2 on leave · 1 in training",
          narrative: "Monsoon cover plan: expected +18% volume in 10 days, capacity gap of 6 additional analysts.",
          table: {
            cols: ["Status", "Names / Count"],
            rows: [
              ["Present (15)", "Prerna · Karan · Aisha · Suresh · Vijay · Rekha · Dinesh · Pooja · Arjun · Meena · Sahil · Lata · Tushar · Bhavna · Nisha"],
              ["On Leave (2)", "Deepa Nair (CL) · Ravi Kumar (Sick · day 3)"],
              ["In Training (1)", "Manish Desai · IRDAI refresher till 2pm"],
              ["Overtime risk", "4 analysts on 8th consecutive OT day"],
            ],
          },
          actions: ["Approve OT for Prerna & Suresh", "Request temporary staffing"],
        },
      },
      {
        label: "IRDAI Tracker", icon: "🛡️",
        detail: {
          headline: "IRDAI Compliance · Team",
          narrative: "Your cert validity: 47 days remaining. Deepa + Ravi must complete renewal before returning from leave — IRDAI mandates valid cert to process claims.",
          table: {
            cols: ["Bucket", "Count", "Note"],
            rows: [
              ["✅ Valid (>90 days)", "11 analysts", ""],
              ["🟡 Due within 90 days", "4 analysts", "Plan soon"],
              ["🔴 Due within 30 days", "2 analysts", "Deepa (18 days) · Ravi (22 days)"],
            ],
          },
          bullets: ["Streak: 84 days zero IRDAI-reportable breaches.", "TAT compliance 99.1% · grievance redressal within 14 days: 100%."],
          actions: ["Send reminder to Deepa & Ravi"],
        },
      },
      {
        label: "Escalations", icon: "🚨",
        detail: {
          headline: "Active Escalations · 3 in queue",
          narrative: "2 high-severity escalations require Sunita's intervention today. Ombudsman risk on Pandey case if not resolved by EOD.",
          table: {
            cols: ["Severity", "Case", "Owner", "Due"],
            rows: [
              ["🔴 HIGH", "Motor OD · Rajesh Pandey (Pune) · 52 days · IRDAI complaint filed", "Karan", "Today EOD"],
              ["🔴 HIGH", "Cashless pre-auth denied twice · Sunanda Iyer (Mumbai)", "Prerna", "4 hours"],
              ["🟡 MED", "Internal audit query · Claims reserve adequacy Q4", "Sunita", "Jun 10"],
            ],
          },
          actions: ["View Pandey case", "Override & approve Iyer", "Draft audit response"],
        },
      },
      {
        label: "My Career Path", icon: "🎯",
        detail: {
          headline: "Your Career Path · Deputy Manager · 71% ready (+3pp this month)",
          narrative: "You're on track. The Motor OD rotation in Q3 is your fastest path to the DM role. Neha (HRBP) can help you apply.",
          table: {
            cols: ["Readiness item", "Status"],
            rows: [
              ["IRDAI Advanced Certification", "✅"],
              ["Team leadership (18 direct reports)", "✅"],
              ["SLA management track record", "✅"],
              ["Leadership module (XLRI online)", "✅"],
              ["Cross-line exposure · Motor or Health", "🟡 Motor OD rotation Q3"],
              ["Financial P&L · Claims reserve module", "🟡 8 hours · not started"],
              ["Acting DM · 1 quarter", "⬜"],
            ],
          },
          actions: ["Express interest in Motor OD rotation", "Enroll in P&L module"],
        },
      },
    ],
  },
];

const sharedAgents: AgentRun[] = [
  { agent: "Attrition Agent", message: "Cohort risk model refreshed.", time: "04:55" },
  { agent: "Compliance Agent", message: "Regulatory calendar synced.", time: "03:01" },
  { agent: "Skills Agent", message: "Skill-gap heatmap updated.", time: "04:18" },
  { agent: "Sentiment Agent", message: "Pulse scores re-scored from text.", time: "03:42" },
];

const FALLBACK_HINT = "In the live system, I'd query your actual Workday, Salesforce, and LMS data to answer this in real time. This demo is illustrative — try one of the suggested prompts below.";

export const personaRegistry: Record<string, PersonaMeta> = {
  anupam: {
    slug: "anupam",
    initials: "AS",
    name: "Anupam Sirbhaiya",
    role: "Group CHRO",
    entity: "Bajaj Finserv Limited",
    location: "Pune",
    accent: BLUE,
    navGroups: anupamNav,
    prompts: [
      {
        q: "Show me CXO-1 succession coverage across all 7 entities",
        a: "8 of 14 CXO/CXO-1 roles have a ready-now successor (62%).\n\n• BFL: Chief Sales (3 ready) · Chief Risk (2) — 🟢 Covered\n• BALIC: CEO (2) 🟢 · Chief Agency (0) 🔴 · Chief Bancassurance (0) 🔴 · Chief Actuary (1) 🟡\n• BAGIC: Chief Risk (2) 🟢 · Head Claims (1) 🟡\n• AMC: CIO (0) 🔴\n• Group: Chief Digital (0) 🟡\n\nBusiness-critical gap: Chief Agency + Chief Bancassurance at BALIC. Recommend opening succession board and triggering external search via Egon Zehnder.",
      },
      {
        q: "Which entity has the highest culture integration risk?",
        a: "Bajaj Life — post-Allianz culture integration at 6.4/10 (target 8.0 by Q4 FY27). Finance function declining (6.1 ↓0.1). Recommended: Finance function deep-dive + town hall within 30 days.",
      },
      {
        q: "Draft a board update on Bajaj Life Leadership bench strength",
        a: "BOARD UPDATE — Bajaj Life Leadership Bench Strength · People Lens\n\n1. Governance uplift: 71% complete (↑9pp QoQ). Board composition refresh 80% done; ESOP pool granted to 240 senior leaders; RPT and whistleblower frameworks live.\n\n2. Succession gaps: Chief Agency Officer vacant (search with Egon Zehnder, 90-day fill expected) and Chief Bancassurance with zero ready-now successor. Both are group governance-disclosure-critical.\n\n3. ESOP & comp: 6% gap vs peer median on senior ESOP grants; off-cycle correction recommended pre-FY27.\n\n4. IRDAI compliance: 4,200 agent licences lapsing in next 90 days; renewal sprint at 61% — ₹14 Cr retention plan + 18 additional cohorts approved.\n\n5. Recommended ExCo action: approve external search budget, sign RPT policy, schedule Finance function town hall.\n\nReady to export as PDF or send to board secretary?",
      },
      {
        q: "How is our Learning Academy ROI tracking against FY26 targets?",
        a: "Compliance 91% (↑4pp), Leadership 67% (↓3pp due to BALIC cohort delay), DST onboarding 84% (2,847 certified). DSTs who finish onboarding show +23% 90-day productivity. Recommend restarting BALIC cohort and commissioning the AMC capability framework in Q2.",
      },
    ],
    agents: sharedAgents,
  },
  rohit: {
    slug: "rohit",
    initials: "RK",
    name: "Rohit Kapoor",
    role: "Zonal HRBP · West",
    entity: "Bajaj Finance Ltd",
    location: "Pune · MH / Goa / MP",
    accent: BLUE,
    navGroups: rohitNav,
    prompts: [
      {
        q: "Show me all 42 burnout-flagged SOs and their branches",
        a: "BURNOUT CLUSTER · 42 SOs across 5 branches\n\n• Pune Camp — 12 SOs · 18-day 10+ hr login streak · Manager NPS +24 · Action: compulsory leave + 1:1\n• Pune West — 9 SOs · incentive dispute + missed target 3M · Manager NPS +21 · Action: incentive review + 1:1\n• Nashik East — 8 SOs · 19.4% peer attrition anxiety · Manager NPS +18 · Action: stay conversation + workload rebalance\n• Pune Hadapsar — 7 SOs · territory expanded 14% · Manager NPS +27 · Action: redistribute geographies\n• Nashik Cidco — 6 SOs · leave untouched 90 days · Manager NPS +19 · Action: 5-day reset leave\n\n+37 additional flight-risk employees across the zone beyond these clusters.",
      },
      {
        q: "Draft a manager 1:1 nudge for the Pune cluster",
        a: "WhatsApp draft to Pune branch managers:\n\n\"Hi team — our Attrition Agent has flagged 28 SOs in Pune in triple-signal burnout (10+ hr logins on 60% of days, missed targets 3 months running, no leave taken in 90 days). Please book a 30-min 1:1 with each flagged SO this week. I'll share the named list on Teams in the next 1 hour. The HR cost of inaction is ~₹1.4 Cr if half this cluster exits. The cost of doing the 1:1s is one calendar hour each. Thanks for moving fast on this. — Rohit\"",
      },
      {
        q: "Who's at burnout risk in Pune and Nashik this week?",
        a: "42 Sales Officers in triple-signal burnout: 8+ working days, 11pm+ logins on 60% of days, leave balance untouched 90 days. Split: Pune 28 · Nashik 14. Recommend approving compulsory leave and a 4-week retention sprint (₹2.2L cost vs ₹1.9 Cr inaction cost).",
      },
      {
        q: "What's our hiring funnel for rural B2C right now?",
        a: "1,180 hires planned by Sep. Sourcing partners engaged in Vidarbha and MP. Offer-stage conversion: 64%. Time-to-fill 21 days for Sales Officer · 38 days for RM.",
      },
    ],
    agents: sharedAgents,
  },
  priya: {
    slug: "priya",
    initials: "PD",
    name: "Priya Deshmukh",
    role: "HR Head · Bajaj Life",
    entity: "Bajaj Life Insurance",
    location: "Pune · strategic growth agenda",
    accent: BLUE,
    navGroups: priyaNav,
    prompts: [
      {
        q: "Draft an Leadership bench strength people-narrative for the group governance",
        a: "group governance DRAFT · People · Bajaj Life Insurance\n\nThe Company has invested significantly in strengthening its people foundation in preparation for listing. Key Managerial Personnel stability is robust — the CEO contract has been renewed for a further three years, the CFO and Chief Risk Officer each have a defined ready-now successor, and Board composition meets independent director ratio requirements. An ESOP pool covering 240 senior leaders has been granted, with an off-cycle correction planned to bridge the 6% peer-median gap. The Company maintains active succession planning across 14 CXO/CXO-1 roles, with two roles — Chief Agency Officer and Chief Bancassurance — currently under external search via leading global firms. Compliance posture is strong: IRDAI quarterly returns, solvency margin filings, and POSH governance have been delivered without delay; an active renewal sprint covers 4,200 agent licences. The Company's post-Allianz culture pulse stands at 6.8/10 and trending upward across five of six functions. Together, these factors evidence the people readiness required for a successful public listing.\n\nReady to export to legal counsel?",
      },
      {
        q: "How many agent licences will lapse next 90 days?",
        a: "4,200 lapses projected · ₹340 Cr APE at risk. East zone is the critical lag (12% completion vs South 31%). West & South own 68% of total backlog. Renewal sprint at 61% — recommend approving 18 additional cohorts and opening dedicated exam centres in Kolkata & Patna.",
      },
      {
        q: "What's our strategic growth governance readiness?",
        a: "71% ready · ↑9pp this quarter. Finance & Treasury 84% · Investor Relations 44% (gap) · Compliance 78% · Board composition refresh 80% complete. ESOP gap to peer median: 6%. Chief Agency vacancy is the single biggest group governance-disclosure risk.",
      },
      {
        q: "Draft a culture pulse update post-Allianz",
        a: "Trust score 6.8/10 ↑0.4 MoM overall. Most settled: Tech (7.8) and Agency (7.1 ↑0.6 fastest improving). Watch zone: Bancassurance (6.4) and Finance (6.1 ↓0.1). Town-hall + Finance function audit scheduled within 30 days.",
      },
    ],
    agents: sharedAgents,
  },
  aarav: {
    slug: "aarav",
    initials: "AM",
    name: "Aarav Mehta",
    role: "Sales Officer · Consumer Lending",
    entity: "Bajaj Finance · Mumbai",
    location: "Andheri & Goregaon · Day 23 of 90",
    accent: GREEN,
    avatarColor: GREEN,
    navGroups: aaravNav,
    prompts: [
      {
        q: "What will I earn if I hit 20 disbursals?",
        a: "Hitting 20 disbursals this month = ₹11,400 incentive 🎉\n\nSlab breakdown that gets you there:\n• Disbursals 1–5: 5 × ₹500 = ₹2,500\n• Disbursals 6–14: 9 × ₹600 = ₹5,400\n• Disbursals 15–20: 6 × ₹720 = ₹4,320\nTOTAL = ₹12,220 (rounded benchmark ₹11,400 after quality adjustments)\n\n💡 Vijay Sales Goregaon has 3 walk-in applications waiting today — that gets you to 11 disbursals. You're already 55% of the way to ₹11,400.",
      },
      {
        q: "How am I doing vs my probation goals?",
        a: "You're on track 🎯. 8 of 10 disbursals done · IRDA cert exam Friday · Day-7 NPS 8.4 · buddy check-ins on rhythm. You're ahead of 64% of your batch at Day 23. Top 10% are at 12 disbursals — closeable in 5 working days.",
      },
      {
        q: "When will my next incentive payout hit?",
        a: "₹4,200 earned this month, projected ₹12,000 by month end. Payout hits with salary cycle on the last working day. Hit 12 disbursals to unlock the ₹6,000 milestone bonus on top.",
      },
      {
        q: "Suggest a learning plan for the next 30 days",
        a: "Finish IRDA cert by Friday (unlocks 3 new product lines and +₹2,400/month avg incentive). Start Two-wheeler loans on Day 35 and Digital onboarding tools on Day 40 — each one expands what you can attach on every walk-in.",
      },
    ],
    agents: [
      { agent: "Buddy Agent", message: "Reminded Rajan Nair about Tuesday 10am 1:1.", time: "07:15" },
      { agent: "Learning Agent", message: "Pushed IRDA mock exam to your phone.", time: "07:42" },
      { agent: "Incentive Agent", message: "Refreshed October payout projection.", time: "08:01" },
    ],
  },
  sunita: {
    slug: "sunita",
    initials: "SR",
    name: "Sunita Rao",
    role: "Claims Processing Lead",
    entity: "Bajaj General Insurance · HAT",
    location: "Pune · Team of 18 · 6 yrs tenure",
    accent: TEAL,
    avatarColor: TEAL,
    navGroups: sunitaNav,
    prompts: [
      {
        q: "How long until I'm eligible for Deputy Manager?",
        a: "You're at 71% readiness (+3pp this month) — 6 to 9 months out if you secure the Q3 Motor OD rotation. ✨\n\nWhat's done: IRDAI Advanced cert · 18-person team leadership · SLA track record · XLRI leadership module.\n\nWhat's pending: (1) Motor OD cross-exposure — rotation slot available in Q3, talk to Neha (HRBP) about applying; (2) Claims reserve / P&L module — 8 hours, not started.\n\nYou're closer than you think. The Motor OD rotation is the single biggest unlock — once you express interest, Neha can fast-track the nomination.",
      },
      {
        q: "Draft a team appreciation message for last week's SLA",
        a: "WhatsApp draft for your team:\n\n\"Team — quick note before Monday morning kicks off. We held 98.2% SLA last week despite a 14% case spike, including the Friday surge. Special mention to Prerna (62 cases, zero defect) and Karan (steady absorber on Friday). Thank you for staying with it. The reason we don't get IRDAI grief is because of weeks like this. Coffee on me Tuesday 4pm — Sunita ☕\"",
      },
      {
        q: "Who has bandwidth to absorb the SLA-risk queue?",
        a: "Karan has capacity for +19 cases · Suresh +12 · Aisha +6. Recommend moving 14 cashless pre-auths from Prerna (overloaded at 68) and Vijay (47 · near limit) to Karan and Suresh before 1pm. Auto-redistribute available — one click.",
      },
      {
        q: "What's my team's overtime trend this month?",
        a: "4 analysts on 8th consecutive working day (Prerna · Suresh · Vijay · Rekha). OT logged: 38 hours week-to-date vs 22 last week. Burnout signal amber. HRBP Neha already notified.",
      },
    ],
    agents: [
      { agent: "SLA Agent", message: "Flagged 23 cases approaching breach by 2pm.", time: "06:45" },
      { agent: "Workload Agent", message: "Rebalanced 14 cases overnight.", time: "05:18" },
      { agent: "IRDAI Agent", message: "Zero reportable breaches in last 84 days.", time: "04:02" },
      { agent: "Burnout Agent", message: "4 analysts on 8th consecutive day — amber.", time: "03:30" },
    ],
  },
};

export { FALLBACK_HINT };
